!function () {
  'use strict';

  // 保存原始 Date.now，防止游戏代码重写后导致时间戳异常
  var _now = Date.now.bind(Date);

  // type 枚举:
  // 1=页面打开
  // 2=verifySession/verifyOperatorPlayerSession 请求发起
  // 3=verifySession/verifyOperatorPlayerSession 收到返回
  // 4=spin 请求发起（仅首次）
  // 5=spin 收到返回（仅首次）
  var ReportType = {
    PAGE_OPEN: 1,
    VERIFY_SESSION_REQ: 2,
    VERIFY_SESSION_RES: 3,
    SPIN_REQ: 4,
    SPIN_RES: 5
  };

  // 从 URL 参数中解析字段
  var searchParams = new URLSearchParams(window.location.search);
  var gameId = searchParams.get('gi') || '';
  var token = searchParams.get('ot') || '';
  var opsRaw = searchParams.get('ops') || '';
  var appIdMatch = opsRaw.match(/_(\d+)$/);
  var appId = appIdMatch ? appIdMatch[1] : '';

  // 上一次上报的时间戳，用于计算耗时
  var lastReportTime = 0;

  // 将子域名替换为 api，例如 https://game.example.com -> https://api.example.com
  function getReportUrl() {
    var origin = window.location.origin;
    return origin.replace(/^(https?:\/\/)[^.]+/, '$1api') + '/api/report/timing';
  }

  // 上报数据
  function sendReport(type) {
    try {
      var now = _now();
      var duration = lastReportTime ? now - lastReportTime : 0;
      lastReportTime = now;
      var data = {
        type: type,
        gameId: gameId,
        timestamp: now,
        appId: appId,
        token: token,
        duration: duration
      };
      var reportUrl = getReportUrl();
      if (navigator.sendBeacon) {
        navigator.sendBeacon(reportUrl, JSON.stringify(data));
      } else {
        var xhr = new XMLHttpRequest();
        xhr.__skipIntercept__ = true;
        xhr.open('POST', reportUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    } catch (e) {}
  }

  // 1. 页面打开时上报
  sendReport(ReportType.PAGE_OPEN);

  // spin 是否已上报过
  var spinReported = false;

  // 判断 URL 匹配类型
  function getInterceptType(url) {
    if (/verifySession|verifyOperatorPlayerSession/.test(url)) return ReportType.VERIFY_SESSION_REQ;
    if (/\/[Ss]pin\b/.test(url) && !spinReported) return ReportType.SPIN_REQ;
    return 0;
  }

  // 拦截 XMLHttpRequest
  var origOpen = XMLHttpRequest.prototype.open;
  var origSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url) {
    this._reportUrl = url;
    return origOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function () {
    var self = this;
    if (self.__skipIntercept__) {
      return origSend.apply(self, arguments);
    }
    var type = getInterceptType(self._reportUrl || '');
    if (type) {
      sendReport(type);
      var resType = 0;
      if (type === ReportType.VERIFY_SESSION_REQ) {
        resType = ReportType.VERIFY_SESSION_RES;
      } else if (type === ReportType.SPIN_REQ) {
        spinReported = true;
        resType = ReportType.SPIN_RES;
      }
      if (resType) {
        var onDone = function () {
          sendReport(resType);
        };
        self.addEventListener('load', onDone);
        self.addEventListener('error', onDone);
        self.addEventListener('timeout', onDone);
      }
    }
    return origSend.apply(self, arguments);
  };

  // 拦截 fetch
  if (window.fetch) {
    var origFetch = window.fetch;
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
      var type = getInterceptType(url);
      if (type) {
        sendReport(type);
        var resType = 0;
        if (type === ReportType.VERIFY_SESSION_REQ) {
          resType = ReportType.VERIFY_SESSION_RES;
        } else if (type === ReportType.SPIN_REQ) {
          spinReported = true;
          resType = ReportType.SPIN_RES;
        }
        if (resType) {
          var rt = resType;
          return origFetch.apply(this, arguments).then(function (response) {
            sendReport(rt);
            return response;
          }).catch(function (err) {
            sendReport(rt);
            throw err;
          });
        }
      }
      return origFetch.apply(this, arguments);
    };
  }
}();
