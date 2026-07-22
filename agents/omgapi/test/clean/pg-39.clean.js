!function () {
  'use strict';

  var jF = {};
  jF.AudioAdapterConstant = "AudioAdapterConstant";
  jF.Utils = "Utils";
  var jN = {};
  jN.AnimParticleSystemUtils = "AnimParticleSystemUtils";
  var jZ = {};
  jZ.AdapterEventEmitter = "AdapterEventEmitter";
  jZ.AudioAdapterConstant = "AudioAdapterConstant";
  jZ.AudioFactory = "AudioFactory";
  jZ.ResRC = "ResRC";
  var jp = {};
  jp.AudioAdapterConstant = "AudioAdapterConstant";
  var jg = {};
  jg.GameAudioAdapter = "GameAudioAdapter";
  jg.NoSoundAdapter = "NoSoundAdapter";
  jg.RtConfig = "RtConfig";
  jg.SettingMenuHelper = "SettingMenuHelper";
  var jf = {};
  jf.GameEventHandler = "GameEventHandler";
  var jA = {};
  jA.AudioManager = "AudioManager";
  jA.SettingMenuHelper = "SettingMenuHelper";
  var ji = {};
  ji.LanternController = "LanternController";
  ji.Utils = "Utils";
  var ju = {};
  ju.GenericSettingButton = "GenericSettingButton";
  ju.Utils = "Utils";
  var jt = {};
  jt.GameEventHandler = "GameEventHandler";
  jt.SettingMenuHelper = "SettingMenuHelper";
  jt.TweaksData = "TweaksData";
  jt.Utils = "Utils";
  var jG = {};
  jG.AudioManager = "AudioManager";
  jG.AutomationDecorator = "AutomationDecorator";
  jG.BGMHandler = "BGMHandler";
  jG["BigWinController.spec"] = "BigWinController.spec";
  var jd = {};
  jd.ScrollViewEx = "ScrollViewEx";
  var jJ = {};
  jJ.ScatterStopScroller = "ScatterStopScroller";
  var jS = {};
  jS.UIAppearanceHelper = "UIAppearanceHelper";
  var jK = {};
  jK.ResourceLoader = "ResourceLoader";
  jK.SettingMenuHelper = "SettingMenuHelper";
  var I0 = {};
  I0.AudioManager = "AudioManager";
  I0.Utils = "Utils";
  var I1 = {};
  I1.AbstractScroller = "AbstractScroller";
  var I2 = {};
  I2.AudioManager = "AudioManager";
  var I3 = {};
  I3.AudioAdapter = "AudioAdapter";
  I3.AudioAdapterConstant = "AudioAdapterConstant";
  I3.AudioManager = "AudioManager";
  var I4 = {};
  I4.Preference = "Preference";
  I4.RtConfig = "RtConfig";
  var I5 = {};
  I5.GameUtils = "GameUtils";
  I5.PGGDataSource = "PGGDataSource";
  var I6 = {};
  I6.NotifyHelper = "NotifyHelper";
  I6.Utils = "Utils";
  var I7 = {};
  I7.ButtonTheme = "ButtonTheme";
  I7.UIAppearanceHelper = "UIAppearanceHelper";
  I7.Utils = "Utils";
  var I8 = {};
  I8.ScrollViewEx = "ScrollViewEx";
  var I9 = {};
  I9.AnalyticsHelper = "AnalyticsHelper";
  I9.AutoSpinHandler = "AutoSpinHandler";
  I9.ButtonHitTest = "ButtonHitTest";
  I9.GameEventHandler = "GameEventHandler";
  I9.JakeSlotGameTemplate = "JakeSlotGameTemplate";
  I9.SettingMenuHandlers = "SettingMenuHandlers";
  I9.SettingMenuHelper = "SettingMenuHelper";
  I9.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  I9.SlotGameConstants = "SlotGameConstants";
  I9.SpinButtonController = "SpinButtonController";
  I9.SystemFeatureHandler = "SystemFeatureHandler";
  I9.Utils = "Utils";
  var Il = {};
  Il.AudioManager = "AudioManager";
  Il.AutomationDecorator = "AutomationDecorator";
  Il.CanvasResizeBroadcaster = "CanvasResizeBroadcaster";
  Il.GameRegionUtils = "GameRegionUtils";
  Il["InfobarController.spec"] = "InfobarController.spec";
  var Ij = {};
  Ij.AutomationDecorator = "AutomationDecorator";
  Ij["InfoboardMessageController.spec"] = "InfoboardMessageController.spec";
  Ij.NumberDisplayController = "NumberDisplayController";
  Ij.NumberRollController = "NumberRollController";
  Ij.Utils = "Utils";
  var II = {};
  II.SimpleStopScroller = "SimpleStopScroller";
  var Is = {};
  Is.ResRC = "ResRC";
  Is.ResourceQualifierHelper = "ResourceQualifierHelper";
  Is.UIAppearanceHelper = "UIAppearanceHelper";
  Is.Utils = "Utils";
  var IO = {};
  IO.ListViewEnum = "ListViewEnum";
  var Iy = {};
  Iy.AnalyticsHelper = "AnalyticsHelper";
  Iy.AudioAssetConfig = "AudioAssetConfig";
  Iy.AudioManager = "AudioManager";
  Iy.BVFrameworkEnum = "BVFrameworkEnum";
  Iy.CustomAssetConfig = "CustomAssetConfig";
  Iy.ErrorHandler = "ErrorHandler";
  Iy.GameAudioAdapter = "GameAudioAdapter";
  Iy.GeneralAssetConfig = "GeneralAssetConfig";
  Iy.NoSoundAdapter = "NoSoundAdapter";
  Iy.PGGDataSource = "PGGDataSource";
  Iy.QuitGameWithEvent = "QuitGameWithEvent";
  Iy.ResourceLoader = "ResourceLoader";
  Iy.RtConfig = "RtConfig";
  Iy.SettingMenuHelper = "SettingMenuHelper";
  var IB = {};
  IB.AnalyticsHelper = "AnalyticsHelper";
  IB.AudioManager = "AudioManager";
  IB.BGMHandler = "BGMHandler";
  IB.GameEventHandler = "GameEventHandler";
  IB.GameInitializationHandler = "GameInitializationHandler";
  IB.GameLayout = "GameLayout";
  IB.JakeSlotGameTemplate = "JakeSlotGameTemplate";
  IB.MultiResHandler = "MultiResHandler";
  IB.NotifyHelper = "NotifyHelper";
  IB.PGGAPIClient = "PGGAPIClient";
  IB.PGGDataSource = "PGGDataSource";
  IB.PGGNormalGameState = "PGGNormalGameState";
  IB.PGGRefreshWorldHandler = "PGGRefreshWorldHandler";
  IB.PGSlotTransactionModel = "PGSlotTransactionModel";
  IB.RequestHandler = "RequestHandler";
  IB.SettingMenuHandlers = "SettingMenuHandlers";
  IB.SettingMenuHelper = "SettingMenuHelper";
  IB.SpaceBarInterrupter = "SpaceBarInterrupter";
  IB.SpinConfigHandler = "SpinConfigHandler";
  IB.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  IB.Transitions = "Transitions";
  IB.UIAppearanceHelper = "UIAppearanceHelper";
  IB.UISetupHandler = "UISetupHandler";
  IB.Utils = "Utils";
  var Ix = {};
  Ix.SettingMenuHelper = "SettingMenuHelper";
  Ix.Utils = "Utils";
  var IC = {};
  IC.NavigationBar = "NavigationBar";
  IC.NavigationDefaultTransition = "NavigationDefaultTransition";
  IC.TabBarItem = "TabBarItem";
  IC.TransitionContext = "TransitionContext";
  IC.TransitionEnum = "TransitionEnum";
  IC.UIKit = "UIKit";
  IC.ViewController = "ViewController";
  var IH = {};
  IH.ViewControllerTransition = "ViewControllerTransition";
  var Ir = {};
  Ir.AudioAdapter = "AudioAdapter";
  Ir.Utils = "Utils";
  var IV = {};
  IV.AutoSpinHandler = "AutoSpinHandler";
  IV.ButtonHitTest = "ButtonHitTest";
  IV.JakeSlotGameTemplate = "JakeSlotGameTemplate";
  IV.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  IV.SlotGameConstants = "SlotGameConstants";
  var IM = {};
  IM.AutoSpinHandler = "AutoSpinHandler";
  IM.ButtonHitTest = "ButtonHitTest";
  IM.JakeSlotGameTemplate = "JakeSlotGameTemplate";
  IM.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  IM.SlotGameConstants = "SlotGameConstants";
  IM.SlotStateMachine = "SlotStateMachine";
  IM.SpinConfigHandler = "SpinConfigHandler";
  var Iq = {};
  Iq.AutoSpinHandler = "AutoSpinHandler";
  Iq.ButtonHitTest = "ButtonHitTest";
  Iq.JakeSlotGameTemplate = "JakeSlotGameTemplate";
  Iq.SettingMenuHelper = "SettingMenuHelper";
  Iq.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  Iq.SlotGameConstants = "SlotGameConstants";
  Iq.SlotStateMachine = "SlotStateMachine";
  Iq.SpinConfigHandler = "SpinConfigHandler";
  var Im = {};
  Im.NumberDisplayController = "NumberDisplayController";
  var ID = {};
  ID.NumberDisplayInterface = "NumberDisplayInterface";
  ID.Utils = "Utils";
  var IW = {};
  IW.Utils = "Utils";
  var Ik = {};
  Ik.Utils = "Utils";
  var Io = {};
  Io.NumberDisplayInterface = "NumberDisplayInterface";
  Io.Utils = "Utils";
  var Iz = {};
  Iz.NumberDisplayInterface = "NumberDisplayInterface";
  var Ic = {};
  Ic.NumberDisplayController = "NumberDisplayController";
  Ic.NumberRollBaseController = "NumberRollBaseController";
  var IL = {};
  IL.NumberCurvedController = "NumberCurvedController";
  IL.NumberRollBaseController = "NumberRollBaseController";
  var Iv = {};
  Iv.NumberLabelController = "NumberLabelController";
  Iv.NumberRollBaseController = "NumberRollBaseController";
  var Ib = {};
  Ib.Protoutils = "Protoutils";
  var IU = {};
  IU.APIClient = "APIClient";
  IU.AutomationDecorator = "AutomationDecorator";
  IU["PGApiClient.spec"] = "PGApiClient.spec";
  IU.PGBetRequestModel = "PGBetRequestModel";
  IU.PGGDataSource = "PGGDataSource";
  IU.TweaksData = "TweaksData";
  IU.Utils = "Utils";
  var IQ = {};
  IQ.DataSource = "DataSource";
  IQ.PGSlotTransactionModel = "PGSlotTransactionModel";
  IQ.PlayerModel = "PlayerModel";
  IQ.RtConfig = "RtConfig";
  IQ.SlotSystemModel = "SlotSystemModel";
  var Iw = {};
  Iw.IdleState = "IdleState";
  Iw.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  var Ih = {};
  Ih.NormalPrizeDecorator = "NormalPrizeDecorator";
  Ih.NormalResultDecorator = "NormalResultDecorator";
  Ih.NormalSpinDecorator = "NormalSpinDecorator";
  Ih.PGGIdleState = "PGGIdleState";
  Ih.PGGPrizeState = "PGGPrizeState";
  Ih.PGGResultState = "PGGResultState";
  Ih.PGGSpinState = "PGGSpinState";
  Ih.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  Ih.Utils = "Utils";
  var IP = {};
  IP.AutomationDecorator = "AutomationDecorator";
  IP.BigPrizeController = "BigPrizeController";
  IP.MediumPrizeController = "MediumPrizeController";
  IP.PrizeState = "PrizeState";
  IP.SettingMenuHelper = "SettingMenuHelper";
  IP.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  IP.Utils = "Utils";
  IP["WinHighlight.spec"] = "WinHighlight.spec";
  var IR = {};
  IR.RefreshWorldHandler = "RefreshWorldHandler";
  IR.SlotProperties = "SlotProperties";
  IR.Transitions = "Transitions";
  var IT = {};
  IT.AudioManager = "AudioManager";
  IT.ResultState = "ResultState";
  IT.SlotProperties = "SlotProperties";
  IT.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  IT.Utils = "Utils";
  var IY = {};
  IY.AutoSpinHandler = "AutoSpinHandler";
  IY.PGGAPIClient = "PGGAPIClient";
  IY.RequestHandler = "RequestHandler";
  IY.SpinState = "SpinState";
  IY.TransactionStateMachineHandler = "TransactionStateMachineHandler";
  IY.Utils = "Utils";
  var Ie = {};
  Ie.PiggyGoldTweaksConfig = "PiggyGoldTweaksConfig";
  Ie.Protoutils = "Protoutils";
  Ie.SlotProperties = "SlotProperties";
  Ie.SlotTransactionModel = "SlotTransactionModel";
  Ie.TweaksData = "TweaksData";
  Ie.WinLinesModel = "WinLinesModel";
  var IX = {};
  IX.AudioManager = "AudioManager";
  IX.AutomationDecorator = "AutomationDecorator";
  IX.ButtonHitTest = "ButtonHitTest";
  IX.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  IX.SpinButtonController = "SpinButtonController";
  IX["SpinButtonViewController.spec"] = "SpinButtonViewController.spec";
  var Ia = {};
  Ia.Button = "Button";
  var In = {};
  In.PageControlButton = "PageControlButton";
  var IE = {};
  IE.PaySelect = "PaySelect";
  IE.SlotProperties = "SlotProperties";
  var IF = {};
  IF.Utils = "Utils";
  var IN = {};
  IN.PayTableController = "PayTableController";
  var IZ = {};
  IZ.PayTableController = "PayTableController";
  var Ip = {};
  Ip.PayTableController = "PayTableController";
  var Ig = {};
  Ig.SlotProperties = "SlotProperties";
  var If = {};
  If.AudioManager = "AudioManager";
  var IA = {};
  IA.CreatorTweaks = "CreatorTweaks";
  IA.SlotProperties = "SlotProperties";
  IA.TweaksConfig = "TweaksConfig";
  IA.TweaksData = "TweaksData";
  var Ii = {};
  Ii.PiggyParticleFeatureController = "PiggyParticleFeatureController";
  var Iu = {};
  Iu.InterruptableScroller = "InterruptableScroller";
  var It = {};
  It.GameEventHandler = "GameEventHandler";
  It.SettingMenuHelper = "SettingMenuHelper";
  It.TweaksData = "TweaksData";
  It.Utils = "Utils";
  var IG = {};
  IG.Utils = "Utils";
  var Id = {};
  Id.GenericLoadingScreenController = "GenericLoadingScreenController";
  Id.RequestHandler = "RequestHandler";
  Id.Utils = "Utils";
  var IJ = {};
  IJ.ResRC = "ResRC";
  IJ.ResourceQualifierHelper = "ResourceQualifierHelper";
  IJ.RetryHandler = "RetryHandler";
  var IS = {};
  IS.CanvasResizeBroadcaster = "CanvasResizeBroadcaster";
  var IK = {};
  IK.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  IK.SlotAnalyticsHelper = "SlotAnalyticsHelper";
  IK.SlotStateMachine = "SlotStateMachine";
  IK.SpinConfigHandler = "SpinConfigHandler";
  IK.Utils = "Utils";
  var s0 = {};
  s0.LaunchConfig = "LaunchConfig";
  var s1 = {};
  s1.AbstractScroller = "AbstractScroller";
  var s2 = {};
  s2.ScrollerSpineController = "ScrollerSpineController";
  var s3 = {};
  s3.BVFramework = "BVFramework";
  s3.Preference = "Preference";
  s3.UIAppearanceHelper = "UIAppearanceHelper";
  s3.Utils = "Utils";
  var s4 = {};
  s4.BVFramework = "BVFramework";
  s4.CanvasResizeBroadcaster = "CanvasResizeBroadcaster";
  s4.HitPassThrough = "HitPassThrough";
  s4.Utils = "Utils";
  var s5 = {};
  s5.AnalyticsHelper = "AnalyticsHelper";
  s5.LaunchConfig = "LaunchConfig";
  var s6 = {};
  s6.BVFramework = "BVFramework";
  s6.GameEventHandler = "GameEventHandler";
  s6.Preference = "Preference";
  s6.SettingInfoFooterController = "SettingInfoFooterController";
  s6.SettingMenuButtonHelper = "SettingMenuButtonHelper";
  s6.UIAudioHelper = "UIAudioHelper";
  s6.Utils = "Utils";
  var s7 = {};
  s7.Utils = "Utils";
  var s8 = {};
  s8.Utils = "Utils";
  var s9 = {};
  s9.GenericSettingButton = "GenericSettingButton";
  s9.TurboButtonEffect = "TurboButtonEffect";
  s9.UIAppearanceHelper = "UIAppearanceHelper";
  s9.Utils = "Utils";
  var sl = {};
  sl.AbstractScroller = "AbstractScroller";
  var sj = {};
  sj.AbstractScroller = "AbstractScroller";
  var sI = {};
  sI.AnalyticsHelper = "AnalyticsHelper";
  var ss = {};
  ss.AudioManager = "AudioManager";
  ss.BounceScatterStopScroller = "BounceScatterStopScroller";
  ss.InterruptableScroller = "InterruptableScroller";
  ss.PGGDataSource = "PGGDataSource";
  ss.PossibleWinScroller = "PossibleWinScroller";
  ss.SettingMenuHelper = "SettingMenuHelper";
  ss.SimpleStartScroller = "SimpleStartScroller";
  ss.SlotItemController = "SlotItemController";
  ss.SlotProperties = "SlotProperties";
  ss.SlotStateMachine = "SlotStateMachine";
  ss.SlotView = "SlotView";
  ss.Utils = "Utils";
  var sO = {};
  sO.CanvasResizeBroadcaster = "CanvasResizeBroadcaster";
  var sy = {};
  sy.AutomationDecorator = "AutomationDecorator";
  sy["SlotScrollerController.spec"] = "SlotScrollerController.spec";
  var sB = {};
  sB.Utils = "Utils";
  var sx = {};
  sx.Protoutils = "Protoutils";
  sx.SystemModel = "SystemModel";
  sx.WinThresholdsModel = "WinThresholdsModel";
  var sC = {};
  sC.BetRepository = "BetRepository";
  sC.Protoutils = "Protoutils";
  sC.TransactionModel = "TransactionModel";
  sC.WinLinesModel = "WinLinesModel";
  sC.WinValuesModel = "WinValuesModel";
  var sH = {};
  sH.GenericSettingButton = "GenericSettingButton";
  var sr = {};
  sr.BVFramework = "BVFramework";
  var sV = {};
  sV.ButtonHitTest = "ButtonHitTest";
  sV.SettingMenuHelper = "SettingMenuHelper";
  sV.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  var sM = {};
  sM.GenericSettingButton = "GenericSettingButton";
  var sq = {};
  sq.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  sq.SlotAnalyticsHelper = "SlotAnalyticsHelper";
  sq.SpinConfigHandler = "SpinConfigHandler";
  sq.Utils = "Utils";
  var sm = {};
  sm.GameEventHandler = "GameEventHandler";
  sm.SlotAnalyticsEnum = "SlotAnalyticsEnum";
  sm.Utils = "Utils";
  var sD = {};
  sD.TabBar = "TabBar";
  sD.TabBarItem = "TabBarItem";
  sD.TransitionContext = "TransitionContext";
  sD.ViewController = "ViewController";
  var sW = {};
  sW.NumberDisplayInterface = "NumberDisplayInterface";
  var sk = {};
  sk.NumberDisplayController = "NumberDisplayController";
  sk.TimedWinRollBaseController = "TimedWinRollBaseController";
  var so = {};
  so.NumberCurvedController = "NumberCurvedController";
  so.TimedWinRollBaseController = "TimedWinRollBaseController";
  var sz = {};
  sz.NumberLabelController = "NumberLabelController";
  sz.TimedWinRollBaseController = "TimedWinRollBaseController";
  var sc = {};
  sc.CreatorTweaks = "CreatorTweaks";
  sc.GamePreference = "GamePreference";
  sc.Printer = "Printer";
  sc.QuitGame = "QuitGame";
  sc.RtConfig = "RtConfig";
  sc.TweaksData = "TweaksData";
  sc.Utils = "Utils";
  var sL = {};
  sL.BACKUP_DATA = "BACKUP_DATA";
  var sv = {};
  sv.BVFramework = "BVFramework";
  sv.UIAudioConstant = "UIAudioConstant";
  sv.Utils = "Utils";
  var sb = {};
  sb.GameRegionUtils = "GameRegionUtils";
  sb.PGGDataSource = "PGGDataSource";
  sb.SettingMenuHelper = "SettingMenuHelper";
  sb.SlotProperties = "SlotProperties";
  var sU = {};
  sU.UIKit = "UIKit";
  sU.UIKitUtils = "UIKitUtils";
  var sQ = {};
  sQ.SimpleStopScroller = "SimpleStopScroller";
  var sw = {};
  sw.AudioManager = "AudioManager";
  sw.SlotProperties = "SlotProperties";
  sw.WildMultiplySpineController = "WildMultiplySpineController";
  var sh = {};
  sh.NumberDisplayInterface = "NumberDisplayInterface";
  var sP = {};
  sP.NumberDisplayController = "NumberDisplayController";
  sP.WinRollBaseController = "WinRollBaseController";
  var sR = {};
  sR.NumberCurvedController = "NumberCurvedController";
  sR.WinRollBaseController = "WinRollBaseController";
  var sT = {};
  sT.NumberLabelController = "NumberLabelController";
  sT.WinRollBaseController = "WinRollBaseController";
  var sY = {};
  sY.APIEncryptor = "APIEncryptor";
  sY.Protoutils = "Protoutils";
  sY.Utils = "Utils";
  window.__require = function t(l, O, y) {
    var B = function () {
      {
        var r = !![];
        return function (V, M) {
          var q = r ? function () {
            if (M) {
              var m = M.apply(V, arguments);
              M = null;
              return m;
            }
          } : function () {};
          r = ![];
          return q;
        };
      }
    }();
    function x(V, M) {
      var q = B(this, function () {
        return q.toString().search("(((.+)+)+)+$").toString().constructor(q).search("(((.+)+)+)+$");
      });
      q();
      if (!O[V]) {
        {
          if (!l[V]) {
            var m = V.split('/');
            if (m = m[m.length - 1], !l[m]) {
              {
                var D = "function" == typeof __require && __require;
                if (!M && D) return D(m, true);
                if (C) return C(m, true);
                throw Error("Cannot find module '" + V + '\x27');
              }
            }
            V = m;
          }
          var W = {};
          W.exports = {};
          var k = O[V] = W;
          l[V][0].call(k.exports, function (z) {
            return x(l[V][1][z] || z);
          }, k, k.exports, t, l, O, y);
        }
      }
      return O[V].exports;
    }
    for (var C = "function" == typeof __require && __require, H = 0; H < y.length; H++) x(y[H]);
    return x;
  }({
    'APIClient': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d34ca2GoqVBUbdLTDYW//l7", "APIClient")) {
        var O = System.get("bvframework").APIClient;
        j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'APIEncryptor': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "bd0a1JELztCYqizHJtWld7o", "APIEncryptor")) {
        var O = System.get("common").APIEncryptor;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'AbstractScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "814f95HaARPXoNjY+PgOfJ6", "AbstractScroller")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = function () {
          function C() {
            this.target = undefined, this.t = false, this.i = false, this.s = false, this.target = undefined, this.t = false, this.i = false, this.s = false;
          }
          var H = {};
          H.get = function () {
            return this.t;
          };
          H.enumerable = false;
          H.configurable = true;
          var r = {};
          r.get = function () {
            return this.t;
          };
          r.enumerable = false;
          r.configurable = true;
          return Object.defineProperty(C.prototype, "isPlaying", H), Object.defineProperty(C.prototype, "isPaused", r), C.prototype.play = function () {
            this.t ? this.i && (this.i = false, this.onResume()) : (this.t = true, this.onPlay());
          }, C.prototype.onPlay = function () {}, C.prototype.stop = function () {
            {
              this.t && (this.t = false, this.onStop(), this.i = false);
            }
          }, C.prototype.onStop = function () {}, C.prototype.pause = function () {
            this.t && !this.i && (this.i = true, this.onPause());
          }, C.prototype.onPause = function () {}, C.prototype.resume = function () {
            {
              this.t && this.i && (this.i = false, this.onResume());
            }
          }, C.prototype.onResume = function () {}, C.prototype.step = function () {
            {
              this.pause(), this.s = true, this.t || this.play();
            }
          }, C.prototype.update = function () {}, C;
        }();
        y.default = x, cc._RF.pop();
      }
    }, {}],
    'AdapterEventEmitter': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4a843d9tZpBC5Aag4RGjJxr", "AdapterEventEmitter")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = (j("AudioAdapterConstant"), function () {
            function r() {
              this.o = Object.create(null), this.h = x.deferCallback(this);
            }
            return r.prototype.once = function (V, M, q) {
              {
                this.on(V, M, q, true);
              }
            }, r.prototype.emit = function (V, M, q, m) {
              undefined === m && (m = false);
              var D = this.o,
                W = D[V];
              W || (W = D[V] = []);
              for (var k = 0, z = function (U) {
                  var Q = W[U];
                  Q.id && Q.id !== M || (k = U, L.h(function () {
                    {
                      var w = Q.fn;
                      w !== x.emptyFunc && (Q.once && this.off(V, w, Q.id), w(M, q)), U === k && undefined !== M && m && this.off(M);
                    }
                  }));
                }, L = this, v = 0, b = W.length; v < b; v++) z(v);
            }, r.prototype.on = function (V, M, q, m) {
              var D = this.o,
                W = D[V];
              W || (W = D[V] = []);
              for (var k = 0, z = W.length; k < z; k++) {
                var L = W[k];
                if (L.fn === M) {
                  if (L.id === q) return;
                  if (!q || !L.id) return;
                }
              }
              var v = {};
              v.id = q;
              v.fn = M;
              v.once = !!m;
              W.push(v);
            }, r.prototype.off = function (V, M, q) {
              if (undefined !== V) switch (typeof V) {
                case "number":
                  return this.u(undefined, V);
                case "function":
                  return this.u(V, M);
                default:
                  return "number" == typeof M && (q = M, M = undefined), this.l(V, M, q);
              } else for (var m in this.o) this.o[m].length = 0;
            }, r.prototype.l = function (V, M, q) {
              {
                var m = this.o[V];
                m && (undefined !== M || undefined !== q ? this.o[V] = m.filter(function (D) {
                  return H(D, M, q);
                }) : m.length = 0);
              }
            }, r.prototype.u = function (V, M) {
              {
                for (var q in this.o) this.o[q] = this.o[q].filter(function (m) {
                  return H(m, V, M);
                });
              }
            }, r;
          }());
        y.default = C, cc._RF.pop();
      }
      function H(r, V, M) {
        {
          return !!(M && M !== r.id || V && V !== r.fn) || (r.fn = x.emptyFunc, false);
        }
      }
    }, jF],
    'AnalyticsHelper': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d1d41tYvBBPX6KJU88DFlLq", "AnalyticsHelper")) {
        var O = System.get("bvframework").AnalyticsHelper;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'AnimParticleSystemPoolHandler': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "90167wb5w5JpKAkqWQq6cj8", "AnimParticleSystemPoolHandler")) {
        O.__esModule = true, O.default = undefined;
        var y = cc.Class({
          'extends': cc.Component,
          'unuse': function () {
            var B = this.node.getComponent(cc.Animation);
            B && B.stop();
          }
        });
        O.default = y, j.exports = O.default, cc._RF.pop();
      }
    }, {}],
    'AnimParticleSystemUtils': [function (l, j, O) {
      'use strict';

      cc._RF.push(j, "cbd06HrkTNFtbM/q+8lJvnc", "AnimParticleSystemUtils") || (O.__esModule = true, O.getAccelerationDistance = function (y, B) {
        {
          return 0.5 * y * B * B;
        }
      }, O.getRandomFromRange = function (y, B) {
        return y + B * (Math.random() - 0.5) * 2;
      }, cc._RF.pop());
    }, {}],
    'AnimParticleSystem': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "3142aQR/shASo2uVaU35yUL", "AnimParticleSystem")) {
        B.__esModule = true, B.default = undefined;
        var x = {};
        x.LINEAR = 0;
        x.GRAVITY = 1;
        var C = {};
        C.None = 0;
        C.EaseIn = 1;
        C.EaseOut = 2;
        C.EaseInOut = 3;
        C.EaseSineIn = 4;
        C.EaseSineOut = 5;
        C.EaseSineInOut = 6;
        C.EaseCubicActionIn = 7;
        C.EaseCubicActionOut = 8;
        C.EaseCubicActionInOut = 9;
        C.EaseQuinticActionIn = 10;
        C.EaseQuinticActionOut = 11;
        C.EaseQuinticActionInOut = 12;
        C.EaseCircleActionIn = 13;
        C.EaseCircleActionOut = 14;
        C.EaseCircleActionInOut = 15;
        C.EaseElasticIn = 16;
        C.EaseElasticOut = 17;
        C.EaseElasticInOut = 18;
        C.EaseQuadraticActionIn = 19;
        C.EaseQuadraticActionOut = 20;
        C.EaseQuadraticActionInOut = 21;
        C.EaseQuarticActionIn = 22;
        C.EaseQuarticActionOut = 23;
        C.EaseQuarticActionInOut = 24;
        C.EaseExponentialIn = 25;
        C.EaseExponentialOut = 26;
        C.EaseExponentialInOut = 27;
        C.EaseBackIn = 28;
        C.EaseBackOut = 29;
        C.EaseBackInOut = 30;
        C.EaseBounceIn = 31;
        C.EaseBounceOut = 32;
        C.EaseBounceInOut = 33;
        var H = O("AnimParticleSystemUtils"),
          V = cc.Enum(x),
          M = [undefined, {
            'proto': cc.easeIn,
            'needParam': true
          }, {
            'proto': cc.easeOut,
            'needParam': true
          }, {
            'proto': cc.easeInOut,
            'needParam': true
          }, {
            'proto': cc.easeSineIn
          }, {
            'proto': cc.easeSineOut
          }, {
            'proto': cc.easeSineInOut
          }, {
            'proto': cc.easeCubicActionIn
          }, {
            'proto': cc.easeCubicActionOut
          }, {
            'proto': cc.easeCubicActionInOut
          }, {
            'proto': cc.easeQuinticActionIn
          }, {
            'proto': cc.easeQuinticActionOut
          }, {
            'proto': cc.easeQuinticActionInOut
          }, {
            'proto': cc.easeCircleActionIn
          }, {
            'proto': cc.easeCircleActionOut
          }, {
            'proto': cc.easeCircleActionInOut
          }, {
            'proto': cc.easeElasticIn,
            'needParam': true
          }, {
            'proto': cc.easeElasticOut,
            'needParam': true
          }, {
            'proto': cc.easeElasticInOut,
            'needParam': true
          }, {
            'proto': cc.easeQuadraticActionIn
          }, {
            'proto': cc.easeQuadraticActionOut
          }, {
            'proto': cc.easeQuadraticActionInOut
          }, {
            'proto': cc.easeQuarticActionIn
          }, {
            'proto': cc.easeQuarticActionOut
          }, {
            'proto': cc.easeQuarticActionInOut
          }, {
            'proto': cc.easeExponentialIn
          }, {
            'proto': cc.easeExponentialOut
          }, {
            'proto': cc.easeExponentialInOut
          }, {
            'proto': cc.easeBackIn
          }, {
            'proto': cc.easeBackOut
          }, {
            'proto': cc.easeBackInOut
          }, {
            'proto': cc.easeBounceIn
          }, {
            'proto': cc.easeBounceOut
          }, {
            'proto': cc.easeBounceInOut
          }],
          q = cc.Enum(C),
          m = false,
          D = cc.Class({
            'extends': cc.Component,
            'properties': {
              'particlePrefab': {
                'type': cc.Prefab,
                'tooltip': false,
                'default': undefined
              },
              'duration': {
                'type': cc.Float,
                'tooltip': false,
                'default': -1
              },
              'emissionRate': {
                'type': cc.Float,
                'tooltip': false,
                'default': 20,
                'min': 0.1
              },
              'life': {
                'type': cc.Float,
                'tooltip': false,
                'default': 1,
                'min': 0.1
              },
              'lifeVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'particleCount': {
                'type': cc.Integer,
                'tooltip': false,
                'default': 10,
                'min': 1
              },
              'particleMovementEasing': {
                'type': q,
                'tooltip': false,
                'default': q.None
              },
              'particleMovementParam': {
                'visible': function () {
                  {
                    var W;
                    return true === (null == (W = M[this.particleMovementEasing]) ? undefined : W.needParam);
                  }
                },
                'type': cc.Float,
                'tooltip': false,
                'default': 0,
                'min': 0
              },
              'startColor': {
                'tooltip': false,
                'default': cc.Color.WHITE
              },
              'startColorVar': {
                'tooltip': false,
                'default': cc.Color.BLACK
              },
              'endColor': {
                'tooltip': false,
                'default': cc.Color.WHITE
              },
              'endColorVar': {
                'tooltip': false,
                'default': cc.Color.BLACK
              },
              'colorDelayRatio': {
                'visible': function () {
                  {
                    return !this.startColor.equals(this.endColor) || !this.startColorVar.equals(this.endColorVar);
                  }
                },
                'type': cc.Float,
                'tooltip': false,
                'range': [0, 1, 0.01],
                'default': 0
              },
              'colorEasing': {
                'visible': function () {
                  return !this.startColor.equals(this.endColor) || !this.startColorVar.equals(this.endColorVar);
                },
                'type': q,
                'tooltip': false,
                'default': q.None
              },
              'colorEasingParam': {
                'visible': function () {
                  {
                    var W;
                    return true === (null == (W = M[this.colorEasing]) ? undefined : W.needParam);
                  }
                },
                'type': cc.Float,
                'tooltip': false,
                'default': 0,
                'min': 0
              },
              'startAlpha': {
                'type': cc.Float,
                'tooltip': false,
                'default': 255,
                'min': 0
              },
              'startAlphaVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endAlpha': {
                'type': cc.Float,
                'tooltip': false,
                'default': 255,
                'min': 0
              },
              'endAlphaVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'alphaDelayRatio': {
                'visible': function () {
                  return this.startAlpha !== this.endAlpha || this.startAlphaVar !== this.endAlphaVar;
                },
                'type': cc.Float,
                'tooltip': false,
                'range': [0, 1, 0.01],
                'default': 0
              },
              'alphaEasing': {
                'visible': function () {
                  return this.startAlpha !== this.endAlpha || this.startAlphaVar !== this.endAlphaVar;
                },
                'type': q,
                'tooltip': false,
                'default': q.None
              },
              'alphaEasingParam': {
                'visible': function () {
                  var W;
                  return true === (null == (W = M[this.alphaEasing]) ? undefined : W.needParam);
                },
                'type': cc.Float,
                'tooltip': false,
                'default': 0,
                'min': 0
              },
              'speed': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'speedVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'angle': {
                'type': cc.Float,
                'tooltip': false,
                'default': 90
              },
              'angleVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 20
              },
              'startScale': {
                'type': cc.Float,
                'tooltip': false,
                'default': 1
              },
              'startScaleVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endScale': {
                'type': cc.Float,
                'tooltip': false,
                'default': 1
              },
              'endScaleVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endScaleIsFactor': {
                'visible': function () {
                  return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
                },
                'default': false
              },
              'scaleDelayRatio': {
                'visible': function () {
                  return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
                },
                'type': cc.Float,
                'tooltip': false,
                'range': [0, 1, 0.01],
                'default': 0
              },
              'scaleEasing': {
                'visible': function () {
                  {
                    return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
                  }
                },
                'type': q,
                'tooltip': false,
                'default': q.None
              },
              'scaleEasingParam': {
                'visible': function () {
                  var W;
                  return true === (null == (W = M[this.scaleEasing]) ? undefined : W.needParam);
                },
                'type': cc.Float,
                'tooltip': false,
                'default': 0,
                'min': 0
              },
              'startSpin': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'startSpinVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endSpin': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endSpinVar': {
                'type': cc.Float,
                'tooltip': false,
                'default': 0
              },
              'endSpinLocked': {
                'visible': function () {
                  return 0 !== this.startSpinVar;
                },
                'default': false
              },
              'spinDelayRatio': {
                'visible': function () {
                  return this.startSpin !== this.endSpin || this.startSpinVar !== this.endSpinVar;
                },
                'type': cc.Float,
                'tooltip': false,
                'range': [0, 1, 0.01],
                'default': 0
              },
              'spinEasing': {
                'visible': function () {
                  {
                    return this.startSpin !== this.endSpin || this.startSpinVar !== this.endSpinVar;
                  }
                },
                'type': q,
                'tooltip': false,
                'default': q.None
              },
              'spinEasingParam': {
                'visible': function () {
                  var W;
                  return true === (null == (W = M[this.spinEasing]) ? undefined : W.needParam);
                },
                'type': cc.Float,
                'tooltip': false,
                'default': 0,
                'min': 0
              },
              'sourcePos': {
                'tooltip': false,
                'default': cc.v2(0, 0)
              },
              'sourcePosVar': {
                'tooltip': false,
                'default': cc.v2(0, 0)
              },
              'emitterMode': {
                'tooltip': false,
                'default': V.LINEAR,
                'type': V
              },
              'gravityVec': {
                'visible': function () {
                  return this.emitterMode === V.GRAVITY;
                },
                'tooltip': false,
                'default': cc.v2(0, 0)
              },
              'gravityVecVar': {
                'visible': function () {
                  {
                    return this.emitterMode === V.GRAVITY;
                  }
                },
                'tooltip': false,
                'default': cc.v2(0, 0)
              },
              'nodePool': {
                'visible': false,
                'get': function () {
                  return this._ || (this._ = new cc.NodePool("AnimParticleSystemPoolHandler")), this._;
                }
              },
              'p': []
            },
            'resetSystem': function (W) {
              {
                undefined === W && (W = true), W && this.stopSystem(true);
                var k = 1 / this.emissionRate;
                this.unschedule(this.m);
                var z = this.duration;
                0 !== z && (this.schedule(this.m, k), z > 0 && (this.unschedule(this.stopSystem), this.scheduleOnce(this.stopSystem, z)));
              }
            },
            'stopSystem': function (W) {
              var k = this;
              undefined === W && (W = false), this.unschedule(this.m), this.unschedule(this.stopSystem), true === W && (this.p.forEach(function (z) {
                z.stopAllActions(), k.nodePool.put(z);
              }), this.p = []);
            },
            'm': function () {
              {
                if (!(this.p.length >= this.particleCount)) {
                  {
                    var W = this.nodePool.get();
                    W || (W = cc.instantiate(this.particlePrefab)), this.S(W), W.getComponent(cc.Animation).play();
                  }
                }
              }
            },
            'getLife': function (W, k) {
              {
                return (0, H.getRandomFromRange)(W, k);
              }
            },
            'getSpeed': function (W, k) {
              return (0, H.getRandomFromRange)(W, k);
            },
            'getEmissionAngle': function (W, k) {
              return (0, H.getRandomFromRange)(W, k);
            },
            'getSourceStartScale': function (W, k) {
              {
                return (0, H.getRandomFromRange)(W, k);
              }
            },
            'getSourceStartSpinAngle': function (W, k) {
              return (0, H.getRandomFromRange)(W, k);
            },
            'getSourceStartAlpha': function (W, k) {
              {
                return (0, H.getRandomFromRange)(W, k);
              }
            },
            'getSourceStartColor': function (W, k) {
              {
                return k.equals(cc.Color.BLACK) ? W : new cc.Color((0, H.getRandomFromRange)(W.getR(), k.getR()), (0, H.getRandomFromRange)(W.getG(), k.getG()), (0, H.getRandomFromRange)(W.getB(), k.getB()));
              }
            },
            'getSourceStartPosition': function (W, k) {
              {
                return cc.v2((0, H.getRandomFromRange)(W.x, k.x), (0, H.getRandomFromRange)(W.y, k.y));
              }
            },
            'getSourceEndScale': function (W, k, z, L) {
              return (L ? W : 1) * (0, H.getRandomFromRange)(k, z);
            },
            'getSourceEndSpinAngle': function (W, k, z, L) {
              return L ? W : (0, H.getRandomFromRange)(k, z);
            },
            'getSourceEndAlpha': function (W, k, z) {
              return (0, H.getRandomFromRange)(k, z);
            },
            'getSourceEndColor': function (W, k, z) {
              return z.equals(cc.Color.BLACK) ? k : new cc.Color((0, H.getRandomFromRange)(k.getR(), z.getR()), (0, H.getRandomFromRange)(k.getG(), z.getG()), (0, H.getRandomFromRange)(k.getB(), z.getB()));
            },
            'getSourceEndPositionLinear': function (W, k, z, L) {
              var v = Math.cos(z / 180 * Math.PI) * k * L,
                b = Math.sin(z / 180 * Math.PI) * k * L;
              return cc.v2(W.x + v, W.y + b);
            },
            'getSourceEndPositionGravity': function (W, k, z, L, U, Q) {
              {
                var R = Math.cos(z / 180 * Math.PI) * k * L,
                  T = Math.sin(z / 180 * Math.PI) * k * L,
                  Y = (0, H.getRandomFromRange)(U.x, Q.x),
                  X = (0, H.getRandomFromRange)(U.y, Q.y),
                  E = W.x + R / 3,
                  F = W.y + T / 3,
                  N = W.x + R / 3 * 2,
                  Z = W.y + T / 3 * 2,
                  G = W.x + R,
                  J = W.y + T,
                  K = 60 * L / 3,
                  l0 = (0, H.getAccelerationDistance)(Y, K),
                  l1 = (0, H.getAccelerationDistance)(X, K),
                  l2 = 2 * K,
                  l3 = (0, H.getAccelerationDistance)(Y, l2),
                  l4 = (0, H.getAccelerationDistance)(X, l2),
                  l5 = 3 * K,
                  l6 = (0, H.getAccelerationDistance)(Y, l5),
                  l7 = (0, H.getAccelerationDistance)(X, l5),
                  l8 = G > 0 ? 1 : -1;
                return [cc.v2(E - l0 * l8, F - l1), cc.v2(N - l3 * l8, Z - l4), cc.v2(G - l6 * l8, J - l7)];
              }
            },
            'getMoveAction': function (W, k, z, L, v) {
              var b = cc.moveTo(z, k);
              return L ? b.easing(L(v)) : b;
            },
            'getBezierAction': function (W, k, z, L, v) {
              var b = cc.bezierTo(z, k);
              return L ? b.easing(L(v)) : b;
            },
            'getScaleAction': function (W, k, z, L, v, b) {
              if (!v) return 0 === L ? cc.scaleTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.scaleTo(z - L * z, k));
              var U = v(b);
              return 0 === L ? cc.scaleTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.scaleTo(z - L * z, k).easing(U));
            },
            'getRotateAction': function (W, k, z, L, v, b) {
              {
                if (!v) return 0 === L ? cc.rotateTo(z, -k) : cc.sequence(cc.delayTime(L * z), cc.rotateTo(z - L * z, -k));
                var U = v(b);
                return 0 === L ? cc.rotateTo(z, -k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.rotateTo(z - L * z, -k).easing(U));
              }
            },
            'getFadeAction': function (W, k, z, L, v, b) {
              if (!v) return 0 === L ? cc.fadeTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.fadeTo(z - L * z, k));
              var U = v(b);
              return 0 === L ? cc.fadeTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.fadeTo(z - L * z, k).easing(U));
            },
            'getTintAction': function (W, k, z, L, v, b) {
              if (!v) return 0 === L ? cc.tintTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.tintTo(z - L * z, k));
              var U = v(b);
              return 0 === L ? cc.tintTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.tintTo(z - L * z, k).easing(U));
            },
            'onDestroy': function () {
              this.nodePool.clear();
            },
            'S': function (W) {
              var k = this,
                z = this.getLife(this.life, this.lifeVar),
                L = this.getSourceStartPosition(this.sourcePos, this.sourcePosVar);
              W.setPosition(L);
              var U = this.getSpeed(this.speed, this.speedVar),
                Q = this.getEmissionAngle(this.angle, this.angleVar),
                R = [];
              if (this.emitterMode === V.LINEAR) {
                var T,
                  Y = this.getSourceEndPositionLinear(L, U, Q, z);
                R.push(this.getMoveAction(W.position, Y, z, null == (T = M[this.particleMovementEasing]) ? undefined : T.proto, this.particleMovementEasingParam));
              } else if (this.emitterMode === V.GRAVITY) {
                var X,
                  E = this.getSourceEndPositionGravity(L, U, Q, z, this.gravityVec, this.gravityVecVar);
                R.push(this.getBezierAction(W.position, E, z, null == (X = M[this.particleMovementEasing]) ? undefined : X.proto, this.particleMovementEasingParam));
              }
              var F,
                N = W.scale = this.getSourceStartScale(this.startScale, this.startScaleVar),
                Z = this.getSourceEndScale(N, this.endScale, this.endScaleVar, this.endScaleIsFactor);
              N !== Z && this.scaleDelayRatio < 1 && R.push(this.getScaleAction(N, Z, z, this.scaleDelayRatio, null == (F = M[this.scaleEasing]) ? undefined : F.proto, this.scaleEasingParam));
              var G,
                J = W.angle = this.getSourceStartSpinAngle(-this.startSpin, -this.startSpinVar),
                K = this.getSourceEndSpinAngle(J, -this.endSpin, -this.endSpinVar, this.endSpinLocked);
              J !== K && this.spinDelayRatio < 1 && R.push(this.getRotateAction(J, K, z, this.spinDelayRatio, null == (G = M[this.spinEasing]) ? undefined : G.proto, this.spinEasingParam));
              var l0,
                l1 = W.opacity = this.getSourceStartAlpha(this.startAlpha, this.startAlphaVar),
                l2 = this.getSourceEndAlpha(l1, this.endAlpha, this.endAlphaVar);
              if (l1 !== l2 && this.alphaDelayRatio < 1 && R.push(this.getFadeAction(l1, l2, z, this.alphaDelayRatio, null == (l0 = M[this.alphaEasing]) ? undefined : l0.proto, this.alphaEasingParam)), !(this.startColor.equals(cc.Color.WHITE) && this.startColorVar.equals(cc.Color.BLACK) && this.endColor.equals(cc.Color.WHITE) && this.endColorVar.equals(cc.Color.BLACK))) {
                var l3,
                  l4 = W.color = this.getSourceStartColor(this.startColor, this.startColorVar),
                  l5 = this.getSourceEndColor(l4, this.endColor, this.endColorVar);
                !l4.equals(l5) && this.colorDelayRatio < 1 && R.push(this.getTintAction(l4, l5, z, this.colorDelayRatio, null == (l3 = M[this.colorEasing]) ? undefined : l3.proto, this.colorEasingParam));
              }
              var l6,
                l7 = R.length;
              l7 > 1 ? l6 = cc.sequence(cc.spawn(R), cc.callFunc(function () {
                k.C(W);
              }, this)) : 1 === l7 && (l6 = cc.sequence(R[0], cc.callFunc(function () {
                {
                  k.C(W);
                }
              }, this))), this.p.push(W), this.node.addChild(W), W.runAction(l6);
            },
            'M': function (W, k) {
              return m || (m = true), 0.5 * W * k * k;
            },
            'C': function (W) {
              var k = this.p,
                z = k.indexOf(W);
              z > -1 && k.splice(z, 1), this.nodePool.put(W);
            }
          });
        B.default = D, y.exports = B.default, cc._RF.pop();
      }
    }, jN],
    'Appearance': [function (l, j) {
      'use strict';

      cc._RF.push(j, "dec3c3clmFKpaYEDuWXqsW2", "Appearance") || cc._RF.pop();
    }, {}],
    'AudioAdapterConstant': [function (y, B, x) {
      'use strict';

      var C = {};
      C.value = true;
      var H = {};
      H.LOADED = "load";
      H.LOAD_ERROR = "loaderror";
      H.PLAY = "play";
      H.STOP = "stop";
      H.END = "end";
      H.PAUSE = "pause";
      H.RESUME = "resume";
      H.FADED = "fade";
      H.SEEK = "seek";
      H.PLAY_ERROR = "playerror";
      H.RATE = "rate";
      H.VOLUME = "volume";
      H.MUTE = "mute";
      var r = {};
      r.UNLOADED = "unloaded";
      r.LODING = "loading";
      r.LOADED = "loaded";
      cc._RF.push(B, "a20c0AJc1VFmKnv1lBJKugX", "AudioAdapterConstant") || (Object.defineProperty(x, "__esModule", C), x.MAX_INSTANCE_NUMBER = x.MAX_STACK_SOUND = x.DEFAULT_SPRITE = x.AUDIO_ADAPTER_STATE = x.AUDIO_ADAPTER_EVENT = undefined, x.AUDIO_ADAPTER_EVENT = H, x.AUDIO_ADAPTER_STATE = r, x.DEFAULT_SPRITE = "__default", x.MAX_STACK_SOUND = 50, x.MAX_INSTANCE_NUMBER = 24, cc._RF.pop());
    }, {}],
    'AudioAdapter': [function (y, B, x) {
      'use strict';

      if (!cc._RF.push(B, "5c3d2SrYLxJYqXl2p30apID", "AudioAdapter")) {
        var C = {};
        C.value = true;
        Object.defineProperty(x, "__esModule", C);
        var H,
          V,
          M = y("ResRC"),
          q = y("AudioAdapterConstant"),
          m = y("AdapterEventEmitter"),
          D = y("AudioFactory"),
          W = (H = 0, function () {
            {
              return ++H;
            }
          });
        (function (v) {
          {
            v.A = "_audio";
          }
        })(V || (V = {}));
        var k = {};
        k.load = M.load;
        k.unload = M.release;
        var L = function () {
          {
            function v(b) {
              var U = this;
              this.P = false, this.B = Object.create(null), this.O = 0, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED, this.G = false, this.maxInstance = q.MAX_INSTANCE_NUMBER, this.N = b.src, this.T = "number" == typeof b.volume ? b.volume : 1, this.H = "number" == typeof b.rate ? b.rate : 1, this.R = !!b.mute, this.k = !!b.loop, this.L = b.sprite, this.j = b.loader || z, this.factory = b.soundFactory || new D.default();
              var Q = b.eventEmitter || new m.default();
              this.on = function (w, P, R, T) {
                null != R && R in U.B == 0 || Q.on(w, P, R, T);
              }, this.off = Q.off.bind(Q), this.once = function (w, P, R) {
                null != R && R in U.B == 0 || Q.once(w, P, R);
              }, this.D = Q.emit.bind(Q), b.preload && setTimeout(this.load.bind(this), 0);
            }
            return v.prototype.load = function () {
              this.I !== q.AUDIO_ADAPTER_STATE.LOADED && this.I !== q.AUDIO_ADAPTER_STATE.LODING && (this.j.load(this.N, this.U.bind(this)), this.I = q.AUDIO_ADAPTER_STATE.LODING);
            }, v.prototype.U = function (b, U) {
              b ? (this.D(q.AUDIO_ADAPTER_EVENT.LOAD_ERROR, undefined, b.message || b), this.G = false, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED) : (this.I = q.AUDIO_ADAPTER_STATE.LOADED, U && (this.W = U[V.A]), this.D(q.AUDIO_ADAPTER_EVENT.LOADED), this.G && this.unload());
            }, v.prototype.unload = function () {
              this.I !== q.AUDIO_ADAPTER_STATE.UNLOADED && (this.I !== q.AUDIO_ADAPTER_STATE.LODING ? (0 !== this.O && this.stop(), this.W = undefined, this.j.unload(this.N), this.G = false, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED) : this.G = true);
            }, v.prototype.play = function (b) {
              var U = this;
              if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: play : audio not yet loaded!");
              var Q = "number" == typeof b,
                w = !Q && "string" == typeof b;
              if (this.P || Q) return this.resume(b), Q ? b : -1;
              var P = this.B;
              if (this.O >= this.maxInstance) {
                var R = undefined;
                for (var T in P) {
                  R = T;
                  break;
                }
                var Y = this.B[R];
                Y.stop(), delete this.B[R], this.O--, this.off(R), this.addAudioToPool(Y);
              }
              var X = this.getAudioFromPool();
              var E = {};
              E.loop = this.k;
              E.muted = this.R;
              E.volume = this.T;
              E.rate = this.H;
              X.reset(E);
              var F = w && this.L ? this.L[b] : undefined,
                N = 0,
                Z = 0;
              F && (N = F.from, Z = F.to - N);
              var p = W();
              return X.play(N, Z), X.once(shell.WebAudioEvent.ENDED, function () {
                {
                  if (!U.B[p]) throw Error("AudioAdapter :: play : audio doesn't exist on this adapter anymore");
                  delete U.B[p], U.O--, U.D(q.AUDIO_ADAPTER_EVENT.END, p, undefined, true), U.addAudioToPool(X);
                }
              }), P[p] = X, this.O++, this.D(q.AUDIO_ADAPTER_EVENT.PLAY, p), p;
            }, v.prototype.stop = function (b) {
              if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter :: stop : Attemp to stop not loaded audio!");
              if (0 !== this.O) if ("number" == typeof b) (Q = this.B[b]) && (delete this.B[b], this.O--, Q.stop(), this.D(q.AUDIO_ADAPTER_EVENT.STOP, b, undefined, true), this.addAudioToPool(Q));else {
                for (var U in this.B) {
                  {
                    var Q;
                    (Q = this.B[U]).stop(), this.D(q.AUDIO_ADAPTER_EVENT.STOP, +U, undefined, true), this.addAudioToPool(Q);
                  }
                }
                this.B = Object.create(null), this.O = 0;
              }
            }, v.prototype.pause = function (b) {
              if ("number" == typeof b) (Q = this.B[b]) && Q.playing && (Q.pause(), this.D(q.AUDIO_ADAPTER_EVENT.PAUSE, b));else {
                {
                  if (this.P = true, 0 === this.O) return;
                  for (var U in this.B) {
                    var Q;
                    (Q = this.B[U]).playing && (Q.pause(), this.D(q.AUDIO_ADAPTER_EVENT.PAUSE, +U));
                  }
                }
              }
            }, v.prototype.resume = function (b) {
              if ("number" == typeof b) (Q = this.B[b]) && Q.paused && (Q.resume(), this.D(q.AUDIO_ADAPTER_EVENT.RESUME, b));else {
                {
                  if (this.P = false, 0 === this.O) return;
                  for (var U in this.B) {
                    var Q;
                    (Q = this.B[U]).paused && (Q.resume(), this.D(q.AUDIO_ADAPTER_EVENT.RESUME, +U));
                  }
                }
              }
            }, v.prototype.setMute = function (b, U) {
              {
                if ("number" == typeof U) (w = this.B[U]) && w.muted !== b && (w.muted = b, this.D(q.AUDIO_ADAPTER_EVENT.MUTE, U));else {
                  if (this.R = b, 0 === this.O) return;
                  for (var Q in this.B) {
                    var w;
                    (w = this.B[Q]).muted !== b && (w.muted = b, this.D(q.AUDIO_ADAPTER_EVENT.MUTE, +Q));
                  }
                }
              }
            }, v.prototype.isMute = function (b) {
              if ("number" == typeof b) {
                var U = this.B[b];
                return !!U && U.muted;
              }
              return this.R;
            }, v.prototype.setVolume = function (b, U) {
              if ("number" == typeof U) (w = this.B[U]) && w.volume !== b && (w.volume = b, this.D(q.AUDIO_ADAPTER_EVENT.VOLUME, U));else {
                if (this.T = b, 0 === this.O) return;
                for (var Q in this.B) {
                  {
                    var w;
                    (w = this.B[Q]).volume !== b && (w.volume = b, this.D(q.AUDIO_ADAPTER_EVENT.VOLUME, +Q));
                  }
                }
              }
            }, v.prototype.getVolume = function (b) {
              if ("number" == typeof b) {
                var U = this.B[b];
                return U ? U.volume : 0;
              }
              return this.T;
            }, v.prototype.getInstantVolume = function (b) {
              var U = this.B[b];
              return U ? U.instantVolume : 0;
            }, v.prototype.fade = function (b, U, Q, w) {
              var P = this;
              if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adpater :: fade : Audio not loaded!");
              if (0 !== this.O) if ("number" == typeof w) {
                var R = this.B[w];
                R && (R.off(shell.WebAudioEvent.FADED), R.once(shell.WebAudioEvent.FADED, function () {
                  P.D(q.AUDIO_ADAPTER_EVENT.FADED, w);
                }), R.fade(b, U, Q));
              } else {
                this.T = U;
                var T = function (E) {
                    {
                      var F = Y.B[E];
                      F.off(shell.WebAudioEvent.FADED), F.once(shell.WebAudioEvent.FADED, function () {
                        P.D(q.AUDIO_ADAPTER_EVENT.FADED, +E);
                      }), F.fade(b, U, Q);
                    }
                  },
                  Y = this;
                for (var X in this.B) T(X);
              }
            }, v.prototype.setLoop = function (b, U) {
              if ("number" == typeof U) (w = this.B[U]) && (w.loop = b);else {
                if (this.k = b, 0 === this.O) return;
                for (var Q in this.B) {
                  var w;
                  (w = this.B[Q]).loop = b;
                }
              }
            }, v.prototype.isLoop = function (b) {
              if ("number" == typeof b) {
                var U = this.B[b];
                return !!U && U.loop;
              }
              return this.k;
            }, v.prototype.setRate = function (b, U) {
              {
                if ("number" == typeof U) (w = this.B[U]) && (w.rate = b);else {
                  if (this.H = b, 0 === this.O) return;
                  for (var Q in this.B) {
                    var w;
                    (w = this.B[Q]).rate = b;
                  }
                }
              }
            }, v.prototype.getRate = function (b) {
              {
                if ("number" == typeof b) {
                  var U = this.B[b];
                  if (U) return U.rate;
                }
                return this.H;
              }
            }, v.prototype.isPlaying = function (b) {
              if ("number" == typeof b) {
                {
                  var U = this.B[b];
                  return undefined !== U && U.playing;
                }
              }
              return this.O > 0 && false === this.P;
            }, v.prototype.getDuration = function (b) {
              {
                if ("number" == typeof b) {
                  {
                    var U = this.B[b];
                    if (U) return U.duration;
                  }
                } else if (this.W) return this.W.duration;
                return 0;
              }
            }, v.prototype.getState = function () {
              {
                return this.I;
              }
            }, v.prototype.getCurrentTime = function (b) {
              var U = this.B[b];
              return U ? U.currentTime : 0;
            }, v.prototype.seek = function (b, U) {
              {
                var Q = this;
                if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: seek : audio not yet loaded!");
                if (0 !== this.O) if ("number" == typeof U) {
                  {
                    var w = this.B[U];
                    w && (w.once(shell.WebAudioEvent.SEEK, function () {
                      Q.D(q.AUDIO_ADAPTER_EVENT.SEEK, U);
                    }), w.seek(b), w.off(shell.WebAudioEvent.SEEK));
                  }
                } else {
                  {
                    if (0 === this.O) return;
                    this.P = false;
                    var P = __assign({}, this.B),
                      R = function (Y) {
                        var X = P[Y];
                        X.once(shell.WebAudioEvent.SEEK, function () {
                          Q.D(q.AUDIO_ADAPTER_EVENT.SEEK, +Y);
                        }), X.seek(b), X.off(shell.WebAudioEvent.SEEK);
                      };
                    for (var T in P) R(T);
                  }
                }
              }
            }, v.prototype.getAudioFromPool = function () {
              return this.factory.get() || new shell.WebAudio(this.W);
            }, v.prototype.addAudioToPool = function (b) {
              b.reset(), b.removeAll(), this.factory.put(b) || b.destroy();
            }, v.prototype.stereo = function () {}, v.getNewId = W, v;
          }
        }();
        x.default = L, cc._RF.pop();
      }
    }, jZ],
    'AudioAssetConfig': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "8a0f1zD/IJGdYR0IcLe6dBG", "AudioAssetConfig") || (Object.defineProperty(y, "__esModule", B), y.audioAssetConfig = undefined, y.audioAssetConfig = [], cc._RF.pop());
    }, {}],
    'AudioFactory': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "bf4b5cdVNdI7rQp2MPM3CWN", "AudioFactory")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("AudioAdapterConstant"),
          C = function () {
            function H() {
              this.maxStackSound = x.MAX_STACK_SOUND, this.F = [];
            }
            return H.prototype.put = function (r) {
              return this.F.length < this.maxStackSound && (this.F.push(r), true);
            }, H.prototype.get = function () {
              return this.F.pop();
            }, H.prototype.size = function () {
              {
                return this.F.length;
              }
            }, H.prototype.destroy = function () {
              {
                this.F.forEach(function (r) {
                  {
                    r.destroy();
                  }
                }), this.F = [];
              }
            }, H;
          }();
        y.default = C, cc._RF.pop();
      }
    }, jp],
    'AudioManager': [function (y, B, x) {
      'use strict';

      if (!cc._RF.push(B, "3b2af3+HL5O7bowqEmzJqBf", "AudioManager")) {
        var H = {};
        H.value = true;
        Object.defineProperty(x, "__esModule", H), x.crossFadeAudio = x.updatePlayRate = x.toggleEffectMuted = x.toggleMusicMuted = x.GeneralAudioPool = x.releaseAudioPool = x.releaseAudio = x.loadAudio = x.toggleAudioGameStarted = x.unregisterAudio = x.registerAudio = x.init = x.AUDIO_TYPE = undefined;
        var V = y("GameAudioAdapter"),
          M = y("SettingMenuHelper"),
          q = y("RtConfig"),
          D = y("NoSoundAdapter"),
          W = Object.create(null);
        x.GeneralAudioPool = W;
        var k = {};
        k.SOUND = 0;
        k.MUSIC = 1;
        var z = Object.create(null);
        x.AUDIO_TYPE = L;
        var U = false,
          Q = false,
          w = 1,
          P = [],
          R = "audio/";
        W.bgm_mg = undefined, W.prize_win = undefined, W.prize_win_end = undefined, W.bgm_bigwin = undefined, W.bgm_bigwin_cue = undefined, W.bgm_bigwin_end = undefined, W.bgm_bigwin_firework = undefined, W.spin_btn = undefined, W.spin_reel_quickstop = undefined, W.spin_reel_stop = undefined, W.spin_reel = undefined, W.fs_fastspin = undefined, W.reel_nearwin_slowdown = undefined, W.sym_wild_normal = undefined, W.sym_wild_nowin = undefined, W.cha_afterbigwin = undefined, W.cha_inactive = undefined, W.cha_prize_win_a = undefined, W.cha_prize_win_b = undefined, W.cha_prize_win_c = undefined, W.feature_raise_angpau = undefined, W.angpau_shiny = undefined, W.sym_wild_x2 = undefined, W.sym_wild_x5 = undefined, W.sym_wild_x10 = undefined;
        var T = ["bgm_mg", "bgm_bigwin"];
        x.init = function () {
          {
            var A;
            Object.keys(A = W).forEach(function (G) {
              var J = -1 !== T.indexOf(G) ? L.MUSIC : L.SOUND;
              A[G] = Y(G, J);
            }), W.bgm_mg.setLoop(true), W.spin_reel.setLoop(true), X(true), E(true), cc.game.on(cc.game.EVENT_HIDE, N), cc.game.on(cc.game.EVENT_SHOW, Z);
          }
        }, x.registerAudio = function (A, G) {
          {
            var J = G ? L.MUSIC : L.SOUND;
            if (U) {
              var K = M.settingMenuHelper.soundEnable;
              A.setMute(K);
            }
            return z[J] || (z[J] = []), z[J].push(A), A.setRate(w), J;
          }
        }, x.unregisterAudio = function (A, G) {
          var J = z[G],
            K = J.indexOf(A);
          if (-1 === K) throw Error("Audio Manager :: unRegisterAudio : audio not found");
          J.splice(K, 1);
        }, x.updatePlayRate = function (A) {
          for (var G in z) if (z[G]) for (var J = z[G], K = 0, l0 = J.length; K < l0; K++) J[K].setRate(A);
          w = A;
        }, x.toggleAudioGameStarted = function () {
          U = true, X(!M.settingMenuHelper.soundEnable), E(!M.settingMenuHelper.soundEnable);
        }, x.toggleMusicMuted = X, x.toggleEffectMuted = E, x.crossFadeAudio = function (A, G, J) {
          {
            undefined === J && (J = 1), G.setVolume(0), G.play(), G.fade(0, J, 1000), 0 === A.getVolume() ? A.stop() : (A.fade(A.getVolume(), 0, 1000), A.once("fade", function () {
              A.stop();
            }));
          }
        }, x.loadAudio = function (A, G) {
          var J = function () {
              A.off("loaderror", K), G && G();
            },
            K = function (l0, l1) {
              {
                A.off("load", J), G && G(l1, l0);
              }
            };
          return A.once("load", J), A.once("loaderror", K), A.load();
        }, x.releaseAudioPool = function (A) {
          Object.keys(A).forEach(function (G) {
            F(A[G]);
          });
        }, x.releaseAudio = F, cc._RF.pop();
      }
      function Y(A, G) {
        undefined === G && (G = L.SOUND);
        var J,
          K,
          l0 = {
            'preload': false,
            'src': (J = "mp3/" + A, K = R + J, K),
            'mute': true
          };
        return '1' === q.cs_Launch.noAudio ? new D.default(l0) : new V.default(l0, G);
      }
      function X(A) {
        {
          undefined === A && (A = false), z[L.MUSIC] && z[L.MUSIC].map(function (G) {
            G.setMute(A);
          });
        }
      }
      function E(A) {
        undefined === A && (A = false), z[L.SOUND] && z[L.SOUND].map(function (G) {
          G.setMute(A);
        });
      }
      function F(A) {
        {
          return A.unload();
        }
      }
      function N() {
        {
          if (!Q) {
            Q = true;
            var A = [];
            Object.keys(W).forEach(function (K) {
              A.push(W[K]);
            });
            for (var G = 0, J = A.length; G < J; G++) A[G].pause(), P.push(A[G]);
          }
        }
      }
      function Z() {
        if (Q) {
          Q = false;
          for (var A = 0, G = P.length; A < G; A++) P[A].resume();
          P.length = 0;
        }
      }
    }, jg],
    'AutoSpinButtonController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "a830dvIUp5AJLfQ2C5p0lzg", "AutoSpinButtonController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.autoSpinHolder = undefined, q.numberDisplayNode = undefined, q.autoButtonNode = undefined, q.V = undefined, q;
            }
            return __extends(M, V), Object.defineProperty(M.prototype, "autoSpinNumberDisplay", {
              'get': function () {
                return this.V || (this.V = this.numberDisplayNode.getComponent("NumberDisplayController")), this.V;
              },
              'enumerable': false,
              'configurable': true
            }), M.prototype.show = function () {
              {
                this.autoSpinHolder.active = true;
              }
            }, M.prototype.hide = function () {
              this.autoSpinHolder.active = false;
            }, M.prototype.showAutoSpinMode = function (q, m) {
              q < 0 && -1 !== q || (this.autoSpinHolder.active = true, this.autoSpinHolder.opacity = 0, this.autoSpinHolder.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
                m && m();
              }))), this.autoSpinNumberDisplay.clear(), this.autoSpinNumberDisplay.displayNumber(q));
            }, M.prototype.updateAutoSpinCount = function (q) {
              {
                this.autoSpinNumberDisplay.clear(), this.autoSpinNumberDisplay.displayNumber(q);
              }
            }, M.prototype.exitAutoSpinMode = function () {
              this.autoSpinHolder.stopAllActions(), this.autoSpinHolder.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(this.K, this)));
            }, M.prototype.K = function () {
              {
                this.autoSpinHolder.active = false;
              }
            }, M.prototype.q = function () {
              this.autoButtonNode.stopAllActions(), this.autoButtonNode.active = false, this.V = undefined;
            }, M.prototype.destroy = function () {
              return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
            }, __decorate([H(cc.Node)], M.prototype, "autoSpinHolder", undefined), __decorate([H(cc.Node)], M.prototype, "numberDisplayNode", undefined), __decorate([H(cc.Node)], M.prototype, "autoButtonNode", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'AutoSpinHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "6a62eVFmd1Ng5ghvfVXBlUq", "AutoSpinHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.exitAutoSpin = y.decrementAutoSpinCount = y.resetAutoSpinCount = y.startAutoSpin = y.getAutoSpinCount = y.shouldAutoSpin = undefined;
        var x = j("GameEventHandler"),
          C = -1;
        y.shouldAutoSpin = function () {
          return C > 0;
        }, y.getAutoSpinCount = function () {
          return C;
        }, y.startAutoSpin = function (r, V, M) {
          C = r, V.enterAutoSpinMode(r, M), x.emitAutoplayStarted(function () {
            H(V);
          });
        }, y.resetAutoSpinCount = function () {
          {
            C = -1;
          }
        }, y.decrementAutoSpinCount = function (r) {
          C -= 1, r.updateAutoSpinCount(C);
        }, y.exitAutoSpin = function (r) {
          H(r), x.emitAutoplayStopped();
        }, cc._RF.pop();
      }
      function H(r) {
        C = -1, r.exitAutoSpinMode();
      }
    }, jf],
    'AutomationDecorator': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "607a1pUyWBLsphZz1avN+BH", "AutomationDecorator") || (Object.defineProperty(y, "__esModule", B), y.automationDec = undefined, y.automationDec = function (x) {
        {
          return function (C, H, r) {
            {
              if (!r) return r;
              var V = r.value;
              return r.value = function () {
                {
                  for (var M = [], q = 0; q < arguments.length; q++) M[q] = arguments[q];
                  var m = System.get("automation");
                  m && x.func.apply(x, __spread(M));
                  var D = V.apply(this, M);
                  return D;
                }
              }, r;
            }
          };
        }
      }, cc._RF.pop());
    }, {}],
    'BACKUP_DATA': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "4dc392lxVJArKflo+rU3j23", "BACKUP_DATA")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = {};
        C.default_font = "Arial";
        var H = new cc.Color(255, 200, 36, 255),
          r = new cc.Color(255, 255, 255, 255),
          V = Object.freeze({
            'game': {
              'theme_color': H,
              'theme_font_family': "Arial",
              'white_color': r
            },
            'game_title': C,
            'setting': {
              'theme_color': H,
              'theme_font': "Arial",
              'slider_switch_color': {
                'false': new cc.Color(144, 144, 150, 255),
                'true': H
              },
              'slider_line_color': {
                'false': new cc.Color(144, 144, 150, 20),
                'true': H
              },
              'label_switch_color_a': {
                'false': r,
                'true': H
              },
              'label_switch_color_b': {
                'false': new cc.Color(144, 144, 150, 82),
                'true': H
              },
              'label_switch_color_c': {
                'false': new cc.Color(255, 255, 255, 30),
                'true': H
              },
              'button_switch_color_a': {
                'false': new cc.Color(r.r, r.g, r.b, 79),
                'true': H
              },
              'color_button_transition_a': {
                'normal': H,
                'pressed': new cc.Color(H.r, H.g, H.b, 128),
                'hover': H,
                'disabled': new cc.Color(H.r, H.g, H.b, 66)
              },
              'white_button_transition_a': {
                'normal': r,
                'pressed': new cc.Color(r.r, r.g, r.b, 128),
                'hover': r,
                'disabled': new cc.Color(r.r, r.g, r.b, 66)
              },
              'grey_button_transition_a': {
                'normal': new cc.Color(r.r, r.g, r.b, 153),
                'pressed': new cc.Color(133, 133, 133, 153),
                'hover': new cc.Color(r.r, r.g, r.b, 153),
                'disabled': new cc.Color(133, 133, 133, 153)
              },
              'spin_start_label': new cc.Color(255, 255, 255, 201)
            },
            'login': {
              'theme_color': H,
              'default_font': "Arial"
            },
            'history': {
              'grey_button_transition_b': {
                'normal': r,
                'pressed': new cc.Color(133, 133, 133),
                'hover': r,
                'disabled': new cc.Color(133, 133, 133)
              },
              'white_button_transition_a': {
                'normal': r,
                'pressed': new cc.Color(255, 255, 255, 128),
                'hover': r,
                'disabled': new cc.Color(255, 255, 255, 66)
              },
              'calendar_title_select': {
                'true': H,
                'false': new cc.Color(255, 255, 255, 77)
              },
              'calendar_selection_line': new cc.Color(40, 40, 52, 235),
              'calendar_title_bg': new cc.Color(48, 48, 60, 255),
              'calendar_content_bg': new cc.Color(40, 40, 52, 235),
              'calendar_custom_bg': new cc.Color(48, 48, 60, 255),
              'calendar_custom_line_bg': new cc.Color(48, 48, 60, 255),
              'calendar_custom_title': new cc.Color(255, 255, 255, 153),
              'calendar_custom_dot': new cc.Color(255, 255, 255, 255),
              'calendar_custom_btn': {
                'normal': H,
                'pressed': new cc.Color(119, 119, 119, 255),
                'hover': H,
                'disabled': new cc.Color(87, 87, 87, 255)
              },
              'calendar_datepicker_default_font': new cc.Color(255, 255, 255, 77),
              'calendar_datepicker_highlight_font': H,
              'calendar_datepicker_highlight_bg': new cc.Color(48, 48, 60, 255),
              'calendar_datepicker_line': new cc.Color(40, 40, 52, 255),
              'theme_color': H,
              'theme_font': "Arial",
              'color_theme_opacity_a': new cc.Color(H.r, H.g, H.b, 153),
              'navigator_bg': new cc.Color(48, 48, 60),
              'navigator_bar_bg': new cc.Color(40, 40, 52),
              'history_bar_item_bg': {
                'normal': new cc.Color(48, 48, 60),
                'pressed': new cc.Color(57, 57, 75, 60),
                'hover': new cc.Color(48, 48, 60),
                'disabled': new cc.Color(40, 40, 52)
              },
              'history_bar_item_font_bg': {
                'false': r,
                'true': H
              },
              'history_main_title': new cc.Color(241, 186, 91, 255),
              'history_list_item_arrow': new cc.Color(255, 255, 255, 64),
              'history_list_item_bg_odd': new cc.Color(40, 40, 52),
              'history_list_item_bg_even': new cc.Color(45, 45, 57),
              'history_list_item_bg_pressed': new cc.Color(60, 60, 70),
              'history_list_item_special_font': H,
              'history_list_item_value_font': new cc.Color(255, 255, 255, 153),
              'history_list_item_date_time_font': new cc.Color(255, 255, 255, 153),
              'history_list_item_line': new cc.Color(255, 255, 255, 0),
              'history_list_item_free_games_icon': H,
              'history_list_header_bg': new cc.Color(40, 40, 52, 255),
              'history_list_header_title_font': new cc.Color(255, 255, 255, 77),
              'history_list_bg': new cc.Color(48, 48, 60, 255),
              'history_list_bottom_circle_loading': r,
              'history_list_middle_circle_loading': new cc.Color(255, 255, 255, 77),
              'history_list_bottom_label_color': r,
              'history_list_middle_label_color': new cc.Color(255, 255, 255, 77),
              'history_list_retry': H,
              'history_list_message_title': new cc.Color(220, 220, 220, 153),
              'history_list_message_message': new cc.Color(220, 220, 220, 77),
              'history_list_title_date': new cc.Color(255, 255, 255, 153),
              'history_list_middle_loading_front': H,
              'history_list_middle_loading_back': new cc.Color(0.5 * H.r, 0.5 * H.g, 0.5 * H.b),
              'history_list_middle_loading_font_color': H,
              'history_list_bottom_loading_front': H,
              'history_list_bottom_loading_back': new cc.Color(0.5 * H.r, 0.5 * H.g, 0.5 * H.b),
              'history_summary_bg': new cc.Color(40, 40, 52, 255),
              'history_summary_title_font': H,
              'history_summary_record_font': new cc.Color(255, 255, 255, 153),
              'history_summary_amount_font': r,
              'history_detail_header_title_font': H,
              'history_detail_header_value_font': new cc.Color(120, 120, 120, 255),
              'history_detail_header_bg': new cc.Color(40, 40, 52, 255),
              'history_detail_down_arrow': H,
              'history_detail_line': new cc.Color(40, 40, 52, 255),
              'history_detail_payout_font': new cc.Color(255, 255, 255, 66),
              'history_detail_win_line_value_font': r,
              'history_detail_content_bg': new cc.Color(48, 48, 60),
              'history_detail_no_win_combination_font': new cc.Color(255, 255, 255, 204),
              'history_detail_title_font': r,
              'history_detail_page_arrow': H,
              'history_detail_page_arrow_bg': new cc.Color(0, 0, 0, 100),
              'history_bar_close_font': new cc.Color(255, 255, 255, 204),
              'history_bar_bg': new cc.Color(48, 48, 60, 255)
            },
            'alert': {
              'default_title_color': r,
              'default_message_color': r,
              'default_button_title_color': r,
              'default_button_color': H,
              'default_font': "Arial"
            },
            'free_game': {
              'theme_color': H,
              'theme_font': "Arial"
            },
            'bonus_wallet': {
              'theme_color': H,
              'theme_font': "Arial"
            },
            'setting_rules': {
              'title_color': new cc.Color(255, 255, 255),
              'desc_color': new cc.Color(204, 204, 204),
              'font_style': "Arial"
            },
            'setting_payout': {
              'title_color': new cc.Color(255, 255, 255),
              'value_color': new cc.Color(255, 255, 255),
              'value_color_red': new cc.Color(192, 38, 48),
              'desc_color': new cc.Color(204, 204, 204),
              'font_style': "Arial"
            },
            'loading': {
              'front_icon_color': H,
              'back_icon_color': new cc.Color(0.5 * H.r, 0.5 * H.g, 0.5 * H.b),
              'background_color': new cc.Color(0, 0, 0, 0),
              'font_color': H,
              'font_style': "Arial"
            }
          });
        B.default = V, cc._RF.pop();
      }
    }, {}],
    'BGMHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4f2a2qJiNRKIYhkmggzb0Qg", "BGMHandler")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.bgmHandler = undefined;
          var x = j("AudioManager"),
            C = j("SettingMenuHelper"),
            H = cc._decorator.ccclass,
            r = function (M) {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.J = false, m;
              }
              return __extends(q, M), q.prototype.startBgm = function () {
                x.GeneralAudioPool.bgm_mg.play();
              }, q.prototype.stopBgm = function () {
                x.GeneralAudioPool.bgm_mg.stop();
              }, q.prototype.fadeInBgm = function (m) {
                undefined === m && (m = 2), C.settingMenuHelper.soundEnable && (this.J || (x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 1, m), this.J = true));
              }, q.prototype.fadeOutBgm = function (m) {
                undefined === m && (m = 2), C.settingMenuHelper.soundEnable && (x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 0, m), this.J = false);
              }, q.prototype.muteBgm = function () {
                x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 0, 0);
              }, q.prototype.unmuteBgm = function () {
                {
                  x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 1, 0);
                }
              }, __decorate([H], q);
            }(cc.Component);
          y.default = r;
          var V = new r();
          y.bgmHandler = V, cc._RF.pop();
        }
      }
    }, jA],
    'BVFrameworkEnum': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "ec7f7EEHK9MYKQtN9oOrPGU", "BVFrameworkEnum")) {
        var O = System.get("bvframework").BVFrameworkEnum;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'BVFramework': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "a9a1dZAV2tCnpP1jdguoThD", "BVFramework")) {
        var O = System.get("bvframework").getGameContext;
        j.exports.getGameContext = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'BackWorldController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "8abeaZPLu9A7K3Hx2oixW7c", "BackWorldController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("LanternController"),
          C = j("Utils"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              {
                var W = null !== m && m.apply(this, arguments) || this;
                return W.ipBg = undefined, W.lanternControllers = [], W;
              }
            }
            return __extends(D, m), D.prototype.init = function () {
              this.Y();
            }, D.prototype.Y = function () {
              var W = this;
              this.lanternControllers.forEach(function (k, z) {
                {
                  C.delayCallback(z)(W.X(k));
                }
              });
            }, D.prototype.X = function (W) {
              return function () {
                W.moveLantern(), W.shineLantern();
              };
            }, D.prototype.playShineDoorAnimation = function () {
              var W = cc.sequence(cc.tintTo(0.3, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0));
              this.ipBg.runAction(W);
            }, D.prototype.destroy = function () {
              return this.lanternControllers.forEach(function (W) {
                W.destroy();
              }), this.node.destroy(), m.prototype.destroy.call(this);
            }, __decorate([M(cc.Node)], D.prototype, "ipBg", undefined), __decorate([M(x.default)], D.prototype, "lanternControllers", undefined), __decorate([V], D);
          }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, ji],
    'BaseListViewCell': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "24d8a0AiVJMa4yCegaay2ry", "BaseListViewCell")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.label = undefined, q.sprite = undefined, q.selectedBackgroundColor = undefined, q.normalBackgroundColor = undefined, q.endPos = undefined, q;
              }
              return __extends(M, V), M.prototype.onLoad = function () {
                {
                  this.setupTouchAction();
                }
              }, M.prototype.setupTouchAction = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.Z, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.on(cc.Node.EventType.TOUCH_END, this.tt, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.it, this), this.node.on(cc.Node.EventType.MOUSE_ENTER, this.st, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.et, this);
              }, M.prototype.removeTouchAction = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.Z, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.off(cc.Node.EventType.TOUCH_END, this.tt, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.it, this), this.node.off(cc.Node.EventType.MOUSE_ENTER, this.st, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.et, this);
              }, M.prototype.st = function (q) {
                this.mouseEnterAction && this.mouseEnterAction(q);
              }, M.prototype.et = function (q) {
                this.mouseLeaveAction && this.mouseLeaveAction(q);
              }, M.prototype.Z = function (q) {
                var m = q.touch,
                  D = cc.v2(m.getLocation().x, m.getLocation().y);
                this.startPos = D, this.node.color = this.selectedBackgroundColor, this.touchStartAction && this.touchStartAction(q);
              }, M.prototype.$ = function (q) {
                this.node.color = this.normalBackgroundColor, this.touchMoveAction && this.touchMoveAction(q);
              }, M.prototype.tt = function (q) {
                var m = q.touch,
                  D = cc.v2(m.getLocation().x, m.getLocation().y);
                this.endPos = D, this.node.color = this.normalBackgroundColor, q.stopPropagationImmediate(), this.touchEndAction && this.touchEndAction(q);
              }, M.prototype.it = function (q) {
                var m = q.touch,
                  D = cc.v2(m.getLocation().x, m.getLocation().y);
                this.endPos = D, this.node.color = this.normalBackgroundColor, q.stopPropagationImmediate(), this.touchCancelAction && this.touchCancelAction(q);
              }, M.prototype.destroy = function () {
                this.removeTouchAction(), V.prototype.destroy.call(this);
              }, __decorate([H(cc.Label)], M.prototype, "label", undefined), __decorate([H(cc.Sprite)], M.prototype, "sprite", undefined), __decorate([H(cc.Color)], M.prototype, "selectedBackgroundColor", undefined), __decorate([H(cc.Color)], M.prototype, "normalBackgroundColor", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'BetModifierButton': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "076aehdcx9HQI7+9hg7FlGu", "BetModifierButton")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("GenericSettingButton"),
            C = j("Utils"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property,
            q = function (m) {
              function D() {
                {
                  var W = null !== m && m.apply(this, arguments) || this;
                  return W.buttonNode = undefined, W.isIncreaseBet = false, W;
                }
              }
              return __extends(D, m), D.prototype.setShowSettingToastCallback = function (W) {
                this.nt = W;
              }, Object.defineProperty(D.prototype, "showSettingToast", {
                'get': function () {
                  if (!this.nt) throw Error("BetModifierButton :: showSettingToast is undefined. Please set it using setShowSettingToastCallback");
                  return this.nt;
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.setHideSettingToastCallback = function (W) {
                this.ot = W;
              }, Object.defineProperty(D.prototype, "hideSettingToast", {
                'get': function () {
                  {
                    if (!this.ot) throw Error("BetModifierButton :: hideSettingToast is undefined. Please set it using setHideSettingToastCallback");
                    return this.ot;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.increaseBet = function (W, k, z) {
                if (undefined === k) {
                  for (var v = 0; v < L.length; v++) if (parseFloat(W[v]) > parseFloat(z)) {
                    k = v - 1, z = W[v - 1];
                    break;
                  }
                } else if (k >= L.length - 1) return this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2), {
                  'selectedBet': k,
                  'selectedBetAmount': z
                };
                if (undefined === k) throw Error("BetModifierButton :: increaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
                return z = W[++k], k >= L.length - 1 ? this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2) : this.hideSettingToast(), {
                  'selectedBet': k,
                  'selectedBetAmount': z
                };
              }, D.prototype.decreaseBet = function (W, k, z) {
                {
                  if (undefined === k) {
                    for (var L = W.length - 1; L >= 0; L--) if (parseFloat(W[L]) < parseFloat(z)) {
                      k = L + 1, z = W[L + 1];
                      break;
                    }
                  } else if (k <= 0) return this.showSettingToast(shell.I18n.t("SettingMenu.SmallestBet"), 2), {
                    'selectedBet': k,
                    'selectedBetAmount': z
                  };
                  if (undefined === k) throw Error("BetModifierButton :: decreaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
                  return z = W[--k], k <= 0 ? this.showSettingToast(shell.I18n.t("SettingMenu.SmallestBet"), 2) : this.hideSettingToast(), {
                    'selectedBet': k,
                    'selectedBetAmount': z
                  };
                }
              }, D.prototype.updateBetModifierColor = function (W, k) {
                this.isIncreaseBet ? this.isReachLimit = !!(k && W >= k) : this.isReachLimit = W <= 0, this.interactableButtonColor(this.isInteractable);
              }, D.prototype.changeButtonPressedColor = function (W) {
                {
                  var k = this.buttonNode;
                  var z = {};
                  z.scale = W ? 0.9 : 1;
                  cc.Tween.stopAllByTarget(k), cc.tween(k).to(0.1, z).start();
                }
              }, D.prototype.interactableButtonColor = function (W) {
                this.isReachLimit ? this.ct.spriteFrame = this.disableSpriteFrame : this.ct.spriteFrame = W ? this.normalSpriteFrame : this.disableSpriteFrame;
              }, D.prototype.maxBet = function (W) {
                {
                  var k = W.length - 1,
                    z = W[k];
                  var L = {};
                  L.selectedBet = k;
                  L.selectedBetAmount = z;
                  return this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2), L;
                }
              }, D.prototype.buttonActivate = function (W) {
                W ? (this.node.active = true, this.node.parent && (this.node.parent.active = true), C.deferCallback(this)(this.enableTouchInteraction)) : (this.disableTouchInteraction(), this.node.active = false, this.node.parent && (this.node.parent.active = false));
              }, __decorate([M(cc.Node)], D.prototype, "buttonNode", undefined), __decorate([M(cc.Boolean)], D.prototype, "isIncreaseBet", undefined), __decorate([V], D);
            }(x.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, ju],
    'BetRepository': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "14dfa+lfKlIS5vAzSig9n4q", "BetRepository")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.BetRepository = undefined;
          var x = function () {
            function C(H, r) {
              this.ht = H, this.rt = r, this.at = H, this.ut = r;
            }
            return Object.defineProperty(C.prototype, "selectedBetLevelValue", {
              'get': function () {
                return this.at;
              },
              'set': function (H) {
                {
                  this.at = H;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(C.prototype, "selectedBetSizeValue", {
              'get': function () {
                return this.ut;
              },
              'set': function (H) {
                this.ut = H;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(C.prototype, "betLevelValue", {
              'get': function () {
                {
                  return this.ht;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(C.prototype, "betSizeValue", {
              'get': function () {
                return this.rt;
              },
              'enumerable': false,
              'configurable': true
            }), C.prototype.updateRemoteBets = function (H, r) {
              this.ht = this.at = H, this.rt = this.ut = r;
            }, C;
          }();
          y.BetRepository = x, cc._RF.pop();
        }
      }
    }, {}],
    'BigPrizeController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "56ec0jrLzBG87IrwqxMdXpi", "BigPrizeController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = j("SettingMenuHelper"),
          H = (j("TweaksData"), j("GameEventHandler")),
          r = cc._decorator.ccclass,
          V = function () {
            {
              function M(q, m, D, W) {
                this.lt = undefined, this.ft = undefined, this.vt = undefined, this._t = undefined, this.pt = undefined;
                var k = q.transactionModel.totalWinAmount;
                this.lt = q, this.ft = k, this.vt = m, this._t = D, this.pt = W;
              }
              return M.prototype.run = function () {
                var q = this,
                  m = this.ft,
                  D = this.vt;
                x.sequenceCallback(this.bt(m, D), x.deferCallback(true), x.spawnCallback(this.St(), this.gt(m), this.Ct(m)))(function () {
                  q.pt && q.pt();
                });
              }, M.prototype.bt = function (q, m) {
                {
                  var D = this,
                    W = this._t;
                  return function (k) {
                    var z = {
                      'onAnimationStopFunc': function () {
                        var L = {};
                        L.displayState = "DidUpdate";
                        L.effectType = "BigWin";
                        H.emitGameEffectStateChangedEvent(L);
                      },
                      'willCompleteFunc': function () {
                        var L = {};
                        L.displayState = "WillEnd";
                        L.effectType = "BigWin";
                        H.emitGameEffectStateChangedEvent(L);
                      }
                    };
                    W.bigWinController.setSocialShareEventCallback(z), W.bigWinController.play(q, m, k, D.lt.isGameReplaying);
                  };
                }
              }, M.prototype.gt = function (q) {
                {
                  var m = this._t;
                  return function (D) {
                    0 !== q ? m.infobarController.showWin(q, D) : D && D();
                  };
                }
              }, M.prototype.St = function () {
                var q = this._t;
                return function (m) {
                  {
                    q.piggyController.playBigWin(), m && m();
                  }
                };
              }, M.prototype.Ct = function (q) {
                var m = this.lt;
                return function (D) {
                  {
                    var W = m.playerModel.balance;
                    C.settingMenuHelper.setBalance(W), C.settingMenuHelper.setWinAmount(q), D && D();
                  }
                };
              }, __decorate([r], M);
            }
          }();
        y.default = V, cc._RF.pop();
      }
    }, jt],
    'BigWinController.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "4b4cdkXKahNsZ1aO6wLYThr", "BigWinController.spec") || (Object.defineProperty(y, "__esModule", B), y.initBigWinNodes = y.skipBigWinAnimationActiveEvent = y.skipBigWinButtonActiveEvent = undefined, y.skipBigWinButtonActiveEvent = function () {
        {
          var x = System.get("automation") && System.get("automation").GameData;
          var C = {};
          C.displayState = "SkipNumberRollEnabled";
          x && x.emit("BigWin", C);
        }
      }, y.skipBigWinAnimationActiveEvent = function () {
        {
          var x = System.get("automation") && System.get("automation").GameData;
          var C = {};
          C.displayState = "SkipAnimationEnabled";
          x && x.emit("BigWin", C);
        }
      }, y.initBigWinNodes = function (x) {
        var C = System.get("automation") && System.get("automation").GameConfigs;
        C && C.initNodeConfig(x.skipButtonNode, "big_win_skip_button");
      }, cc._RF.pop());
    }, {}],
    'BigWinController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "4cf10FfM45HlrSaOLMFcjNn", "BigWinController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C,
            H,
            V = O("AutomationDecorator"),
            M = O("AudioManager"),
            q = O("BigWinController.spec"),
            m = O("BGMHandler"),
            D = cc._decorator,
            W = D.ccclass,
            k = D.property;
          (function (L) {
            L[L.INITIAL = 1] = "INITIAL", L[L.PLAYING = 2] = "PLAYING", L[L.WAITING = 3] = "WAITING", L[L.DISMISING = 4] = "DISMISING";
          })(C || (C = {})), function (L) {
            L[L.BIG_WIN = 1] = "BIG_WIN", L[L.MEGA_WIN = 2] = "MEGA_WIN", L[L.SUPER_MEGA_WIN = 3] = "SUPER_MEGA_WIN";
          }(H || (H = {}));
          var z = function (L) {
            function v() {
              var Q = null !== L && L.apply(this, arguments) || this;
              return Q.bigWinSprite = undefined, Q.megaWinSprite = undefined, Q.superMegaWinSprite = undefined, Q.contentNode = undefined, Q.winAmountNode = undefined, Q.backGroundNode = undefined, Q.backDropNode = undefined, Q.bgTintNode = undefined, Q.stopButtonNode = undefined, Q.coinParticleNode = undefined, Q.allBackPatternNode = undefined, Q.patternANode = undefined, Q.patternBNode = undefined, Q.backLightNode = undefined, Q.underLightNode = undefined, Q.sparklesNode = undefined, Q.fireWorkNode = undefined, Q.backGlowNode = undefined, Q.sparkleAnimation = [], Q.yt = undefined, Q.Mt = C.INITIAL, Q.At = H.BIG_WIN, Q.Pt = 0, Q.Bt = undefined, Q.Ot = undefined, Q.It = false, Q.Gt = undefined, Q.Nt = undefined, Q.Tt = undefined, Q.Ht = undefined, Q;
            }
            var b = {};
            b.func = q.initBigWinNodes;
            var U = {};
            U.func = q.skipBigWinButtonActiveEvent;
            return __extends(v, L), Object.defineProperty(v.prototype, "winRollController", {
              'get': function () {
                return this.Gt || (this.Gt = this.winAmountNode.getComponent("TimedWinRollController")), this.Gt;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(v.prototype, "randomShakingController", {
              'get': function () {
                return this.Nt || (this.Nt = this.backDropNode.getComponent("RandomShakingController")), this.Nt;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(v.prototype, "coinParticleController", {
              'get': function () {
                return this.Tt || (this.Tt = this.coinParticleNode.getComponent("CoinParticleController")), this.Tt;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(v.prototype, "fireWorkController", {
              'get': function () {
                return this.Ht || (this.Ht = this.fireWorkNode.getComponent("MainFireWorkController")), this.Ht;
              },
              'enumerable': false,
              'configurable': true
            }), v.prototype.init = function () {
              this.fireWorkController.init(), this.Rt({
                'skipButtonNode': this.stopButtonNode
              });
            }, v.prototype.setSocialShareEventCallback = function (Q) {
              {
                this.kt = Q.onAnimationStopFunc, this.Lt = Q.willCompleteFunc;
              }
            }, v.prototype.setBigWinLocalizeSF = function (Q) {
              {
                this.bigWinSprite.spriteFrame = Q;
              }
            }, v.prototype.setMegaWinlocalizeSF = function (Q) {
              {
                this.megaWinSprite.spriteFrame = Q;
              }
            }, v.prototype.setSuperMegaWinlocalizeSF = function (Q) {
              {
                this.superMegaWinSprite.spriteFrame = Q;
              }
            }, v.prototype.play = function (Q, w, P, R) {
              if (this.Mt === C.INITIAL) {
                var T = this.node;
                T.active = true, T.opacity = 0, T.runAction(cc.fadeIn(0.2)), this.stopButtonNode.active = true, this.Mt = C.PLAYING, this.Bt = P, this.Pt = Q, this.Et = w, this.It = R, this.jt();
              }
            }, v.prototype.stopButtonOnClick = function () {
              this.stopButtonNode.active = false, this.Mt === C.PLAYING ? (this.Dt(), this.scheduleOnce(this.Ut, 1)) : this.Mt === C.WAITING && (M.GeneralAudioPool.bgm_bigwin_end.fade(M.GeneralAudioPool.bgm_bigwin_end.getVolume(), 0, 2), this.Wt());
            }, v.prototype.jt = function () {
              this.Ft(), this.bt(), this.xt(), this.Vt(), this.randomShakingController.play();
            }, v.prototype.Ft = function () {
              {
                var Q = this.winRollController,
                  w = this.Et;
                Q.setNumbersCallback([w.megaWinThreshold, w.superMegaWinThreshold]), Q.init({
                  'bigWinThreshold': w.bigWinThreshold,
                  'megaWinThreshold': w.megaWinThreshold,
                  'superMegaWinThreshold': w.superMegaWinThreshold,
                  'bigWinDuration': [3.871, 3.097],
                  'megaWinDuration': [3.097, 3.097],
                  'superMegaWinDuration': [3.097, 3.097],
                  'totalWin': this.Pt
                }), Q.play(this.zt.bind(this)), this.stopButtonNode.active = true;
              }
            }, v.prototype.zt = function (Q) {
              {
                var w = this.Et,
                  P = this.At;
                Q >= w.megaWinThreshold && Q < w.superMegaWinThreshold && P !== H.MEGA_WIN ? (this.At = H.MEGA_WIN, this.Kt()) : Q >= w.superMegaWinThreshold && P !== H.SUPER_MEGA_WIN && (this.At = H.SUPER_MEGA_WIN, this.qt()), Q === this.Pt && this.Mt === C.PLAYING && (this.Mt = C.WAITING, this.Jt());
              }
            }, v.prototype.Ut = function () {
              this.stopButtonNode.active = true;
            }, v.prototype.Jt = function () {
              M.GeneralAudioPool.bgm_bigwin.fade(M.GeneralAudioPool.bgm_bigwin.getVolume(), 0, 1), M.GeneralAudioPool.bgm_bigwin_end.setVolume(1), M.GeneralAudioPool.bgm_bigwin_end.play(), this.scheduleOnce(this.Yt, 2), this.Qt(), this.Xt(), this.Zt();
              var Q = this.Ot;
              Q && Q(), this.Ot = undefined;
              var w = this.kt;
              this.kt = undefined, w && w();
              var P = this.It ? 1 : 6;
              this.scheduleOnce(this.Wt, P);
            }, v.prototype.xt = function () {
              this.bgTintNode.active = true, this.bgTintNode.runAction(cc.fadeTo(0.2, 180));
            }, v.prototype.bt = function () {
              m.bgmHandler.fadeOutBgm(0.3), M.GeneralAudioPool.bgm_bigwin.setVolume(1), M.GeneralAudioPool.bgm_bigwin.play(), M.GeneralAudioPool.bgm_bigwin_cue.play(), (this.Ot = this.$t(1.4, 1, 1.2))(), this.ti(), this.sparklesNode.runAction(cc.scaleTo(0.2, 1.1)), this.fireWorkController.play(), this.coinParticleController.playBottomCoin(), this.schedule(this.ii, 3), this.si(), this.ei(), this.allBackPatternNode.runAction(cc.scaleTo(0.3, 1.2).easing(cc.easeBackOut())), this.ni(this.backLightNode, 6, 360), this.ni(this.patternBNode, 8, 360), this.oi(1), this.ci();
            }, v.prototype.Kt = function () {
              {
                this.sparklesNode.runAction(cc.scaleTo(0.2, 1.3)), this.coinParticleController.playBottomIngot(), this.hi(), this.allBackPatternNode.runAction(cc.scaleTo(0.2, 1.4)), (this.Ot = this.$t(1.6, 1.2, 1.4))(), this.oi(1.2), this.ci(), M.GeneralAudioPool.bgm_bigwin_cue.play();
              }
            }, v.prototype.qt = function () {
              this.sparklesNode.runAction(cc.scaleTo(0.2, 2)), this.allBackPatternNode.runAction(cc.scaleTo(0.2, 1.6)), this.patternANode.active = true, this.patternANode.color = cc.color(255, 255, 255, 255), this.patternANode.runAction(cc.scaleTo(0.2, 1.7)), this.ni(this.patternANode, 8, -360), (this.Ot = this.$t(1.8, 1.4, 1.6))(), this.oi(1.4), this.ci(), M.GeneralAudioPool.bgm_bigwin_cue.play();
            }, v.prototype.ci = function () {
              var Q,
                w,
                P = 0;
              switch (this.At) {
                case H.BIG_WIN:
                  Q = this.yt = this.bigWinSprite.node, P = 0;
                  break;
                case H.MEGA_WIN:
                  w = this.yt, Q = this.yt = this.megaWinSprite.node, P = 0.1;
                  break;
                case H.SUPER_MEGA_WIN:
                  w = this.yt, Q = this.yt = this.superMegaWinSprite.node, P = 0.1;
              }
              var R = cc.view.getVisibleSize().width;
              w && w.runAction(cc.moveTo(0.2, cc.v2(R, w.y)).easing(cc.easeSineInOut())), Q.runAction(cc.sequence(cc.delayTime(P), cc.moveTo(0.2, cc.v2(25, Q.y)).easing(cc.easeBackOut())));
            }, v.prototype.$t = function (Q, w, P) {
              var R = this;
              return function () {
                R.backGroundNode.runAction(cc.sequence(cc.scaleTo(0.2, Q), cc.callFunc(R.ri, R), cc.scaleTo(0.15, w), cc.scaleTo(0.15, P)));
              };
            }, v.prototype.ri = function () {
              var Q = this.backGlowNode;
              Q.setScale(this.backGroundNode.scale + 0.3), Q.opacity = 255, Q.runAction(cc.spawn(cc.scaleBy(0.4, 1.3).easing(cc.easeSineOut()), cc.fadeOut(0.8).easing(cc.easeSineOut())));
            }, v.prototype.Yt = function () {
              this.unschedule(this.Yt), m.bgmHandler.fadeInBgm(2);
            }, v.prototype.ni = function (Q, w, P) {
              Q.runAction(cc.repeatForever(cc.rotateBy(w, P)));
            }, v.prototype.ti = function () {
              this.sparkleAnimation.forEach(function (Q) {
                Q.play();
              });
            }, v.prototype.ii = function () {
              this.coinParticleController.playMiddleCoin();
            }, v.prototype.si = function () {
              this.coinParticleController.playGravityCoin();
            }, v.prototype.hi = function () {
              this.coinParticleController.playGravityIngot();
            }, v.prototype.ei = function () {
              {
                this.underLightNode.active = true, this.underLightNode.opacity = 0, this.underLightNode.runAction(cc.fadeIn(0.5));
              }
            }, v.prototype.oi = function (Q) {
              {
                this.contentNode.runAction(cc.scaleTo(0.2, Q));
              }
            }, v.prototype.Xt = function () {
              if (!(this.contentNode.getNumberOfRunningActions() > 0)) {
                var Q = this.contentNode.scale;
                this.contentNode.runAction(cc.sequence(cc.scaleBy(0.15, 1.5), cc.scaleTo(0.15, Q - 0.1), cc.scaleTo(0.2, Q).easing(cc.easeBackOut())));
              }
            }, v.prototype.Zt = function () {
              if (!(this.yt.getNumberOfRunningActions() > 0)) {
                var Q = this.yt.scale;
                this.yt.runAction(cc.sequence(cc.scaleBy(0.1, 1.5), cc.scaleTo(0.15, Q - 0.1), cc.scaleTo(0.2, Q).easing(cc.easeBackOut()))), this.yt = undefined;
              }
            }, v.prototype.Dt = function () {
              this.Mt === C.PLAYING && this.winRollController.skip();
            }, v.prototype.Wt = function () {
              if (this.Mt === C.WAITING) {
                this.Mt = C.DISMISING, this.stopButtonNode.active = false;
                var Q = this.Lt;
                this.Lt = undefined, Q && Q(), this.ai();
              }
            }, v.prototype.ai = function () {
              this.node.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(this.ui, this))), this.patternBNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.backLightNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.patternANode.active && this.patternANode.runAction(cc.tintTo(0.2, 0, 0, 0));
            }, v.prototype.Qt = function () {
              this.randomShakingController.stop();
            }, v.prototype.li = function () {
              this.allBackPatternNode.scale = 0, this.patternANode.scale = 0, this.patternANode.active = false, this.patternBNode.color = cc.color(255, 255, 255, 255), this.backLightNode.color = cc.color(255, 255, 255, 255);
            }, v.prototype.ui = function () {
              {
                var Q = this.Bt;
                this.Bt = undefined, this.fi(), Q && Q();
              }
            }, v.prototype.di = function () {
              this.coinParticleController.stopMiddleCoin(), this.coinParticleController.stopBottomCoin(), this.coinParticleController.stopBottomIngot(), this.coinParticleController.stopGravityCoin(), this.coinParticleController.stopGravityIngot();
            }, v.prototype.vi = function () {
              {
                this.patternANode.stopAllActions(), this.patternBNode.stopAllActions(), this.backLightNode.stopAllActions();
              }
            }, v.prototype.fi = function () {
              M.GeneralAudioPool.bgm_bigwin.stop(), M.GeneralAudioPool.bgm_bigwin_end.stop(), m.bgmHandler.fadeInBgm(1), this.unschedule(this.Wt), this.unschedule(this.Ut), this.unschedule(this.ii), this.unschedule(this.Yt);
              var Q = cc.view.getVisibleSize().width;
              this.bigWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.megaWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.superMegaWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.underLightNode.active = false, this.fireWorkController.stop(), this.backGroundNode.scale = 0, this.contentNode.scale = 0, this.backGlowNode.stopAllActions(), this.li(), this.di(), this.vi(), this.Mt = C.INITIAL, this.At = H.BIG_WIN, this.Bt = undefined, this.Ot = undefined, this.Pt = undefined, this.Et = undefined;
              var w = this.node;
              w.opacity = 0, w.stopAllActions(), w.active = false;
            }, v.prototype.Rt = function () {}, v.prototype.Vt = function () {}, __decorate([k(cc.Sprite)], v.prototype, "bigWinSprite", undefined), __decorate([k(cc.Sprite)], v.prototype, "megaWinSprite", undefined), __decorate([k(cc.Sprite)], v.prototype, "superMegaWinSprite", undefined), __decorate([k(cc.Node)], v.prototype, "contentNode", undefined), __decorate([k(cc.Node)], v.prototype, "winAmountNode", undefined), __decorate([k(cc.Node)], v.prototype, "backGroundNode", undefined), __decorate([k(cc.Node)], v.prototype, "backDropNode", undefined), __decorate([k(cc.Node)], v.prototype, "bgTintNode", undefined), __decorate([k(cc.Node)], v.prototype, "stopButtonNode", undefined), __decorate([k(cc.Node)], v.prototype, "coinParticleNode", undefined), __decorate([k(cc.Node)], v.prototype, "allBackPatternNode", undefined), __decorate([k(cc.Node)], v.prototype, "patternANode", undefined), __decorate([k(cc.Node)], v.prototype, "patternBNode", undefined), __decorate([k(cc.Node)], v.prototype, "backLightNode", undefined), __decorate([k(cc.Node)], v.prototype, "underLightNode", undefined), __decorate([k(cc.Node)], v.prototype, "sparklesNode", undefined), __decorate([k(cc.Node)], v.prototype, "fireWorkNode", undefined), __decorate([k(cc.Node)], v.prototype, "backGlowNode", undefined), __decorate([k(cc.Animation)], v.prototype, "sparkleAnimation", undefined), __decorate([V.automationDec(b)], v.prototype, "_initBigWinNodes", null), __decorate([V.automationDec(U)], v.prototype, "_skipButtonActive", null), __decorate([W], v);
          }(cc.Component);
          B.default = z, cc._RF.pop();
        }
      }
    }, jG],
    'BookView': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "46ec0uZUDVPMZDgV9Idp1EN", "BookView")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = {};
          C.LEFT = 1;
          C.RIGHT = 2;
          C.NULL = 3;
          var H = O("ScrollViewEx"),
            V = cc.Enum(C),
            M = function (W, k) {
              {
                return W.sub(k);
              }
            },
            q = cc._decorator,
            m = q.ccclass,
            D = (q.property, function (W) {
              {
                function L() {
                  var v = null !== W && W.apply(this, arguments) || this;
                  return v._i = {}, v.pi = {}, v.lt = undefined, v;
                }
                var k = {};
                k.get = function () {
                  return this._i;
                };
                k.enumerable = false;
                k.configurable = true;
                var z = {};
                z.get = function () {
                  {
                    return this.pi;
                  }
                };
                z.enumerable = false;
                z.configurable = true;
                return __extends(L, W), Object.defineProperty(L.prototype, "nodePools", k), Object.defineProperty(L.prototype, "templates", z), L.prototype.register = function (v, b, U) {
                  {
                    if (this._i[v]) ;else if (b) {
                      {
                        var Q;
                        Q = U ? new cc.NodePool(U) : new cc.NodePool(), this.pi[v] = b, this._i[v] = Q;
                      }
                    }
                  }
                }, L.prototype.setDataSource = function (v) {
                  {
                    v !== this.lt && (this.lt = v);
                  }
                }, L.prototype.reloadData = function () {
                  {
                    this.bi(), this.init(this.mi);
                  }
                }, L.prototype.Si = function () {
                  for (this.contentChildsLayout = []; this.content.children.length < 3;) {
                    var v = this.node.width,
                      b = this.node.height,
                      U = new cc.Node(),
                      Q = U.addComponent(cc.Layout);
                    Q.type = cc.Layout.Type.VERTICAL, U.setContentSize(v, b), this.content.addChild(U), this.contentChildsLayout.push(Q);
                  }
                }, L.prototype.gi = function () {
                  {
                    for (var v = this.node.width, b = this.node.height, U = 0; U < this.content.children.length; U++) this.content.children[U].setContentSize(v, b);
                    this.cellSize = v, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize);
                    var Q = this.Ci >= this.content.children.length ? this.content.children.length : this.Ci;
                    this.distance = this.cellSize;
                    var w = this.contentLayout.spacingX / Q;
                    this.distance += w, this.yi(this.currIndex);
                  }
                }, L.prototype.Mi = function () {
                  this.node.on("size-changed", this.gi, this);
                }, L.prototype.bi = function () {
                  this.node.off("size-changed", this.gi, this);
                }, L.prototype.init = function (v) {
                  {
                    this.Mi(), this.Si(), this.contentLayout = this.content.getComponent(cc.Layout), this.cellSize = this.node.width, this.target = 0, this.originalSpeed = this.speed, this.freeCells = [], this.dir = V.NULL, this.selected = true, this.mi = v, this.Ci = 0, this.constChildList = [], this.middleIndex = Math.floor(this.content.children.length / 2), this.currIndex = 0, this.itemOffSet = 0, this.snapPause = false, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize), this.Ci = this.lt.getCount(this, v);
                    for (var b = 0; b < this.content.children.length; b++) {
                      {
                        var U = undefined;
                        b <= this.Ci - 1 ? this.content.children[b].children.length ? (this.wi(this.content.children[b].children[0]), (U = this.lt.getItem(this, b, v)).parent = this.content.children[b], this.content.children[b].zIndex = b, U.cellIndex = b % this.Ci, this.content.children[b].slotID = b, this.constChildList.push(U)) : (this.content.children[b].zIndex = b, (U = this.lt.getItem(this, b, v)).parent = this.content.children[b], this.Ai(U), U.cellIndex = b % this.Ci, this.content.children[b].slotID = b, this.constChildList.push(U)) : (this.content.children[b].zIndex = b, this.content.children[b].slotID = b), this.Ci - 1 >= b ? this.content.children[b].active = true : this.content.children[b].active = false;
                      }
                    }
                    this.Ci >= this.content.children.length ? this.totalItems = this.content.children.length - 1 : this.totalItems = this.Ci - 1;
                    var Q = this.Ci >= this.content.children.length ? this.content.children.length : this.Ci;
                    this.distance = this.cellSize;
                    var w = this.contentLayout.spacingX / Q;
                    this.distance += w, this.yi(this.currIndex);
                  }
                }, L.prototype.toLeftItem = function () {
                  var v = this.content.children[0].children[0].cellIndex - 1;
                  if (2 === this.currIndex) return this.currIndex -= 1, this.yi(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
                  if (v < 0) 0 === this.currIndex ? (this.closeFromLeft && this.closeFromLeft(), this.yi(this.currIndex)) : (this.currIndex = 0, this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
                    for (var b = 0; b < this.content.children.length; b++) if (b === this.content.children.length - 1) {
                      {
                        v < 0 && (v = this.Ci - 1), this.wi(this.content.children[b].children[0]);
                        var U = this.lt.getItem(this, v, this.mi);
                        this.constChildList[this.content.children[b].slotID] = U, this.constChildList[this.content.children[b].slotID].cellIndex = v, this.content.children[b].zIndex = 0, U.parent = this.content.children[b];
                      }
                    } else this.content.children[b].zIndex += 1;
                    this.resetLayout = true, this.changeIndexTo = 0, this.currIndex -= 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
                  }
                }, L.prototype.toRightItem = function () {
                  {
                    var v = this.content.children[this.totalItems].children[0].cellIndex + 1;
                    if (0 === this.currIndex && this.currIndex < this.totalItems) return this.currIndex += 1, this.yi(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
                    if (v > this.Ci - 1) this.currIndex === this.totalItems ? (this.closeFromRight && this.closeFromRight(), this.yi(this.currIndex)) : (this.currIndex = this.totalItems, this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
                      for (var b = this.content.children.length - 1; b >= 0; b--) if (0 === b) {
                        v >= this.Ci && (v = 0), this.wi(this.content.children[b].children[0]);
                        var U = this.lt.getItem(this, v, this.mi);
                        this.constChildList[this.content.children[b].slotID] = U, this.constChildList[this.content.children[b].slotID].cellIndex = v, this.content.children[b].zIndex = this.content.children.length - 1, U.parent = this.content.children[b];
                      } else this.content.children[b].zIndex -= 1;
                      this.resetLayout = true, this.changeIndexTo = 2, this.currIndex += 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
                    }
                  }
                }, L.prototype.setElasticLeft = function (v) {
                  this.elasticLeft = v;
                }, L.prototype.setElasticRight = function (v) {
                  this.elasticRight = v;
                }, L.prototype.setClosingFromLeft = function (v) {
                  this.closingFromLeft = v;
                }, L.prototype.setCloseFromLeft = function (v) {
                  this.closeFromLeft = v;
                }, L.prototype.setClosingFromRight = function (v) {
                  this.closingFromRight = v;
                }, L.prototype.setCloseFromRight = function (v) {
                  {
                    this.closeFromRight = v;
                  }
                }, L.prototype.setCancelCloseBook = function (v) {
                  {
                    this.cancelCloseBook = v;
                  }
                }, L.prototype.setStartScrolling = function (v) {
                  {
                    this.startScrolling = v;
                  }
                }, L.prototype.getAllItems = function () {
                  var v = [];
                  return this.content.children.forEach(function (b) {
                    b.children.length && v.push(b.children[0]);
                  }), v;
                }, L.prototype.scrollTo = function (v) {
                  {
                    if (this.snapDone && !this.snapPause) {
                      {
                        var b = this.content.children[this.currIndex].children[0].cellIndex;
                        if (b !== v && !(v > this.Ci - 1 || v < 0)) if (v > b) {
                          if (v === b + 1) 0 === this.currIndex ? this.toRightItem() : (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi());else if (0 === this.currIndex) {
                            var U = this.content.children.length - 1;
                            this.wi(this.content.children[U].children[0]);
                            var Q = this.lt.getItem(this, v, this.mi);
                            this.constChildList[this.content.children[U].slotID] = Q, this.constChildList[this.content.children[U].slotID].cellIndex = v, Q.parent = this.content.children[U], this.speed = 10, this.currIndex = 2, this.reloadCells = true, this.yi(this.currIndex);
                          } else {
                            for (var P = this.content.children.length - 1; P >= 0; P--) 0 === P ? (this.content.children[P].zIndex = 2, this.wi(this.content.children[P].children[0]), Q = this.lt.getItem(this, w, this.mi), this.constChildList[this.content.children[P].slotID] = Q, this.constChildList[this.content.children[P].slotID].cellIndex = w, Q.parent = this.content.children[P]) : this.content.children[P].zIndex = 1 === P ? 0 : 1;
                            this.currIndex = 0, this.changeIndexTo = 2, this.changeContentPos = true;
                          }
                        } else if (v === b - 1) 2 === this.currIndex ? this.toLeftItem() : (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi());else if (this.currIndex === this.content.children.length - 1) w = 0, this.wi(this.content.children[w].children[0]), Q = this.lt.getItem(this, v, this.mi), this.constChildList[this.content.children[w].slotID] = Q, this.constChildList[this.content.children[w].slotID].cellIndex = v, Q.parent = this.content.children[w], this.speed = 10, this.currIndex = 0, this.reloadCells = true, this.yi(this.currIndex);else {
                          for (U = v, P = this.content.children.length - 1; P >= 0; P--) 2 === P ? (this.content.children[P].zIndex = 0, this.wi(this.content.children[P].children[0]), Q = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[P].slotID] = Q, this.constChildList[this.content.children[P].slotID].cellIndex = U, Q.parent = this.content.children[P]) : this.content.children[P].zIndex = 1 === P ? 2 : 1;
                          this.currIndex = 2, this.changeIndexTo = 0, this.changeContentPos = true;
                        }
                      }
                    }
                  }
                }, L.prototype.dequeueReusableItem = function (v) {
                  var b,
                    U = this._i[v];
                  if (U) {
                    {
                      if (!(b = U.get())) {
                        var Q = this.pi[v];
                        b = cc.instantiate(Q);
                      }
                      b.lv_type = v;
                    }
                  }
                  return b;
                }, L.prototype.wi = function (v) {
                  var b,
                    U = v.lv_type;
                  U && (b = this._i[U]), b && b.put(v);
                }, L.prototype.Bi = function () {
                  var v = this.content.children[this.currIndex].children[0].cellIndex;
                  if (v === this.Ci - 1) {
                    for (var b = v - 2, U = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) if (0 === Q) {
                      {
                        this.wi(this.content.children[Q].children[0]);
                        var w = this.lt.getItem(this, b, this.mi);
                        this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = b, w.parent = this.content.children[Q];
                      }
                    } else 1 === Q && (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]);
                  } else if (0 === v) {
                    U = v + 1;
                    var P = v + 2;
                    for (Q = this.content.children.length - 1; Q >= 0; Q--) 1 === Q ? (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : 2 === Q && (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, P, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = P, w.parent = this.content.children[Q]);
                  } else if (0 === this.currIndex) {
                    for (U = v + 1, P = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) 1 === Q ? (this.content.children[Q].zIndex = 2, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : 2 === Q ? (this.content.children[Q].zIndex = 0, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, P, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = P, w.parent = this.content.children[Q]) : this.content.children[Q].zIndex = 1;
                    this.resetContentPos = true;
                  } else {
                    for (b = v + 1, U = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) 0 === Q ? (this.content.children[Q].zIndex = 2, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, b, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = b, w.parent = this.content.children[Q]) : 1 === Q ? (this.content.children[Q].zIndex = 0, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : this.content.children[Q].zIndex = 1;
                    this.resetContentPos = true;
                  }
                }, L.prototype.yi = function (v) {
                  {
                    v > this.totalItems || v < 0 || (this.currIndex = v, this.target = -this.currIndex * this.distance, this.snapDone = false);
                  }
                }, L.prototype.Pi = function () {
                  {
                    this.dir === V.LEFT && this.content.x > this.maxScrollArea.y ? this.toLeftItem() : this.dir === V.RIGHT && this.content.x < this.maxScrollArea.x && this.toRightItem(), this.dir = V.NULL;
                  }
                }, L.prototype.update = function (v) {
                  {
                    var b = this;
                    this.snapDone || this.snapPause ? this.changeContentPos && (this.changeContentPos = false, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance, this.yi(this.changeIndexTo), this.reloadCells = true) : (this.content.x = this.Oi(this.content.x, this.target, v, this.speed, function () {
                      {
                        b.snapFinish && b.snapFinish(b.constChildList[b.content.children[b.currIndex].slotID].cellIndex), b.reloadCells && (b.reloadCells = false, b.speed = b.originalSpeed, b.Bi());
                      }
                    }), this.resetContentPos && (this.resetContentPos = false, this.currIndex = this.middleIndex, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance), this.content.sortAllChildren());
                  }
                }, L.prototype.Ii = function (v, b) {
                  if (!this.reloadCells && this.content.children.length) {
                    this.snapPause = true;
                    var U = v.touch,
                      Q = cc.v2(U.getLocation().x, U.getLocation().y);
                    this.startPos = Q, this.Gi(v, b);
                  } else this.startPos = null;
                }, L.prototype.$ = function (v, b) {
                  var U = v.touch,
                    Q = cc.v2(U.getLocation().x, U.getLocation().y);
                  this.startPos && this.content.children.length && (this.startPos.x < Q.x ? (null != this.elasticLeft && (this.elastic = this.elasticLeft), 0 === this.content.children[0].children[0].cellIndex && 0 === this.currIndex ? (this.selected && this.closingFromLeft && this.closingFromLeft(this.startPos.x, Q.x), 0 !== this.content.x && this.selected && this.Ni(v, b)) : this.selected && this.Ni(v, b)) : (null != this.elasticRight && (this.elastic = this.elasticRight), this.content.children[this.totalItems].children[0].cellIndex + 1 === this.Ci && this.currIndex === this.totalItems ? (this.selected && this.closingFromRight && this.closingFromRight(this.startPos.x, Q.x), this.content.x !== this.content.width && this.selected && this.Ni(v, b)) : this.selected && this.Ni(v, b)), this.content.x > 0 && null != this.elasticLeft ? this.elastic = this.elasticLeft : this.content.x > -this.content.width && null != this.elasticRight && (this.elastic = this.elasticRight));
                }, L.prototype.Ti = function (v, b) {
                  {
                    if (!this.reloadCells && this.content.children.length) {
                      this.dragElastic = false;
                      var U = v.touch,
                        Q = cc.v2(U.getLocation().x, U.getLocation().y);
                      this.currentPos = Q, this.startPos && (this.Hi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != V.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != V.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.Ri(v, b));
                    }
                  }
                }, L.prototype.ki = function (v, b) {
                  if (!this.reloadCells && this.content.children.length) {
                    this.dragElastic = false;
                    var U = v.touch,
                      Q = cc.v2(U.getLocation().x, U.getLocation().y);
                    this.currentPos = Q, this.startPos && (this.Hi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != V.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != V.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.Li(v, b));
                  }
                }, L.prototype.Gi = function (v) {
                  if (this.clickBegan = true, this.enabledInHierarchy) {
                    var b = v.touch;
                    this.content && this.Ei(b), this.ji = false, this.Di(v);
                  }
                }, L.prototype.Ni = function (v) {
                  {
                    if (this.clickBegan && (this.clickBegan = false, this.startScrolling && this.startScrolling()), this.enabledInHierarchy) {
                      {
                        var b = v.touch;
                        if (this.content && this.Ui(b), this.cancelInnerEvents) {
                          var U,
                            Q = (U = b.getLocation(), b.getStartLocation(), U.mag());
                          if (M(Q) > 7 && !this.ji && v.target !== this.node) {
                            {
                              var w = new cc.Event.EventTouch(v.getTouches(), v.bubbles);
                              w.type = cc.Node.EventType.TOUCH_CANCEL, w.touch = v.touch, w.simulate = true, v.target.dispatchEvent(w), this.ji = true;
                            }
                          }
                          this.Di(v);
                        }
                      }
                    }
                  }
                }, L.prototype.Ri = function (v) {
                  if (this.clickBegan = false, this.enabledInHierarchy) {
                    var b = v.touch;
                    this.content && this.Wi(b), this.Fi("touch-up"), this.ji ? v.stopPropagation() : this.Di(v);
                  }
                }, L.prototype.Li = function (v) {
                  if (this.clickBegan = false, this.enabledInHierarchy) {
                    if (!v.simulate) {
                      {
                        var b = v.touch;
                        this.content && this.Wi(b);
                      }
                    }
                    this.Di(v);
                  }
                }, L.prototype.xi = function () {
                  this.Vi && this.Vi.getScrollY() > 0 ? this.dir = V.RIGHT : this.Vi && this.Vi.getScrollY() < 0 && (this.dir = V.LEFT);
                }, L.prototype.zi = function () {
                  this.snapPause = true, this.snapDone = true;
                }, L.prototype.Ki = function () {
                  this.itemOffSet = this.cellSize, this.Pi(), this.snapPause = false, this.Vi = undefined;
                }, L.prototype.qi = function (v) {
                  if (this.content.children.length && this.enabledInHierarchy) {
                    this.Vi = v;
                    var b = cc.v2(0, 0);
                    this.vertical ? b = cc.v2(0, -0.1 * v.getScrollY()) : this.horizontal && (b = cc.v2(-0.1 * v.getScrollY(), 0), this.xi()), this.Ji = 0, this.Yi(b), this.Qi || (this.Ei(), this.schedule(this.Xi, 1 / 60), this.Qi = true, this.zi()), this.Di(v);
                  }
                }, L.prototype.Xi = function (v) {
                  var b, U;
                  if (b = this.Zi(), U = cc.v2(0, 0), 0.0001, !b.fuzzyEquals(U, 0.0001)) return this.$i(), this.unschedule(this.Xi), this.Qi = false, void this.Ki();
                  this.Ji += v, this.Ji > 0.1 && (this.ts(), this.unschedule(this.Xi), this.Qi = false, this.Ki());
                }, __decorate([m], L);
              }
            }(H.default));
          B.default = D, cc._RF.pop();
        }
      }
    }, jd],
    'BounceScatterStopScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "537c3GakcJD1on4G3IvGOk+", "BounceScatterStopScroller")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("ScatterStopScroller"),
            C = cc._decorator,
            H = C.ccclass,
            r = C.mixins,
            V = function (M) {
              function q(m, D) {
                {
                  var W = M.call(this, m, D) || this;
                  return cc.EventTarget.call(W), W.ss = 1, W;
                }
              }
              return __extends(q, M), q.prototype.update = function (m) {
                if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.hs && (this.hs = false, this.emit("scatter_off", {
                  'columnIndex': this.columnIndex,
                  'isForceStop': true
                }, this)), void this.stop();
                if ((m = this.rs += m) <= this.scatterDelay) return this.target.y = this.as - this.scrollSpeed * m, true;
                m -= this.scatterDelay;
                var D = this.us;
                if (m < D) return this.hs || (this.hs = true, this.emit("scatter_on", {
                  'duration': D,
                  'columnIndex': this.columnIndex
                }, this)), void (this.target.y = this.ls - this.scrollSpeed * m - this.fs * m * m / 2);
                m -= D;
                var W = this.ds;
                if (m < W) return this.target.y = this.vs - this.scatterScrollSpeed * m - this._s * m * m / 2, void this.emit("decelerate", 1 - m / W, this);
                this.ns || (this.ns = true, this.emit("decelerate", 0, this)), m -= W;
                var k = this.bounceDuration;
                if (m < k) {
                  var z = 1 - Math.pow(1 - m / k, this.bounceFactor);
                  this.target.y = this.ps + this.bounceDistance * z;
                } else {
                  var L = this.ss;
                  if (m < L) {
                    var v = cc.misc.lerp(-30, 0, m / L);
                    this.target.y = this.os + v * Math.sin(10 * m);
                  } else this.hs && (this.hs = false, this.emit("scatter_off", {
                    'columnIndex': this.columnIndex,
                    'isForceStop': false
                  }, this)), this.target.y = this.os, this.stop();
                }
              }, __decorate([H, r(cc.EventTarget)], q);
            }(x.default);
          y.default = V, cc._RF.pop();
        }
      }
    }, jJ],
    'ButtonHitTest': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "95aac3PHb1J8pXlbPzijfq9", "ButtonHitTest")) {
        {
          y.__esModule = true, y.buttonHitTest = function (C) {
            var H = cc.EventListener.ListenerID.TOUCH_ONE_BY_ONE;
            cc.internal.eventManager[x.bs](H, cc.director.getScene());
            var r = cc.internal.eventManager[x.ms](H);
            if (!r) return false;
            for (var V, M = r[x.Ss], q = C.parent.convertToWorldSpaceAR(C.getPosition()), m = 0; m < M.length; ++m) if (M[m].owner[x.gs](q, M[m])) {
              V = M[m].owner;
              break;
            }
            return V && V === C;
          };
          var B = {};
          B.bs = "_sortListenersOfSceneGraphPriority";
          B.ms = "_getListeners";
          B.gs = "_hitTest";
          B.Ss = "_sceneGraphListeners";
          var x = cc.Enum(B);
          cc._RF.pop();
        }
      }
    }, {}],
    'ButtonTheme': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "2a5d1nUeQZE9KCVbljwPCZP", "ButtonTheme")) {
        B.__esModule = true, B.default = undefined;
        var x = {};
        x.NONE = 0;
        x.COLOR = 1;
        x.SPRITE = 2;
        x.SCALE = 3;
        var C = {};
        C.tooltip = false;
        C.default = '';
        var H = O("UIAppearanceHelper"),
          r = cc.Enum(x),
          V = cc.Class({
            'extends': cc.Component,
            'ctor': function () {},
            'editor': false,
            'properties': {
              'transition': {
                'default': r.NONE,
                'tooltip': false,
                'type': r,
                'animatable': false,
                'notify': function () {
                  {
                    this.Cs();
                  }
                }
              },
              'domainKey': C,
              'colorKey': {
                'tooltip': false,
                'default': '',
                'notify': function () {
                  this.ys();
                }
              }
            },
            'onLoad': function () {
              this.Ms = this.node.getComponent(cc.Button), this.Cs(), this.ys();
            },
            'Cs': function () {
              var M = this.Ms;
              M && (M.transition = this.transition);
            },
            'ys': function () {
              {
                var M = this.Ms;
                if (M && this.transition == r.COLOR) {
                  this.domainKey, this.colorKey;
                  var q = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".normal"),
                    m = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".pressed"),
                    D = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".hover"),
                    W = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".disabled");
                  q && (M.node.opacity = q.getA(), M.normalColor = q, M.pressedColor = m, M.hoverColor = D, M.disabledColor = W);
                }
              }
            }
          });
        B.default = V, y.exports = B.default, cc._RF.pop();
      }
    }, jS],
    'Button': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "0a573tIV9xKS4qfPLe+tVuo", "Button")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = {};
        C.ws = "_transitionFinished";
        C.As = "_fromColor";
        C.Ps = "_toColor";
        C.Bs = "_fromScale";
        C.Os = "_toScale";
        C.Is = "_pressed";
        var H = cc.Enum(C),
          r = cc._decorator,
          V = r.ccclass,
          M = r.property,
          q = function (m) {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.targetCascadeOpacity = false, W.Gs = undefined, W;
            }
            return __extends(D, m), D.prototype.update = function (W) {
              {
                var k = this.target;
                if (!this[H.ws] && (this.transition === cc.Button.Transition.COLOR || this.transition === cc.Button.Transition.SCALE)) {
                  this.time += W;
                  var z,
                    L,
                    v,
                    b = 1;
                  if (this.duration > 0 && (b = this.time / this.duration), b >= 1 && (b = 1, this[H.ws] = true), this.transition === cc.Button.Transition.COLOR) {
                    {
                      this[H.As].a = k.opacity;
                      var U = this[H.As].lerp(this[H.Ps], b);
                      k.opacity = U.a, U.a = 255, k.color = U;
                    }
                  } else this.transition === cc.Button.Transition.SCALE && (k.scale = (z = this[H.Bs], L = this[H.Os], v = b, cc.misc.lerp(z, L, v)));
                }
              }
            }, D.prototype.Ii = function (W) {
              this.Gs = this.node.parent.convertToWorldSpaceAR(W.touch.getLocation()), m.prototype.Ii.call(this, W);
            }, D.prototype.Ns = function (W) {
              var k;
              this[H.Is] ? (k = this.node.parent.convertToWorldSpaceAR(W.touch.getLocation()), this.Gs.sub(k).mag() > 50 && (this[H.Is] = false, this.Gs = undefined)) : this.Gs = undefined;
              m.prototype.Ns.call(this, W);
            }, __decorate([M(cc.Boolean)], D.prototype, "targetCascadeOpacity", undefined), __decorate([V], D);
          }(cc.Button);
        B.default = q, cc._RF.pop();
      }
    }, {}],
    'CanvasResizeBroadcaster': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "1bceeNXbqdLOquKoj3nUFeA", "CanvasResizeBroadcaster")) {
        var O = System.get("common").CanvasResizeBroadcaster;
        j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'ClickEffectController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "9c1bbOo47dBVKQhy7Uc4JE2", "ClickEffectController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.flashSpriteNode = undefined, q.clickEffectNode = undefined, q.Ts = undefined, q;
            }
            return __extends(M, V), M.prototype.onLoad = function () {
              this.Ts = this.clickEffectNode.getComponent(cc.Animation);
            }, M.prototype.showClickEffect = function (q) {
              var m = this.node.convertToNodeSpaceAR(q);
              this.clickEffectNode.setPosition(m), this.Ts.play("click_effect");
            }, M.prototype.showFlash = function () {
              {
                this.flashSpriteNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 150), cc.sequence(cc.delayTime(0.05), cc.fadeOut(0.3))), cc.callFunc(this.Hs, this)));
              }
            }, M.prototype.Hs = function () {
              var q = this.flashSpriteNode;
              q.opacity = 128, q.scale = 0;
            }, __decorate([H(cc.Node)], M.prototype, "flashSpriteNode", undefined), __decorate([H(cc.Node)], M.prototype, "clickEffectNode", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'CoinParticleController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "140cdgyUZZE6oST/JsVi7hK", "CoinParticleController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.middleCoinParticleNode = undefined, q.bottomCoinParticleNode = undefined, q.bottomIngotParticleNode = undefined, q.gravityCoinParticleNode = undefined, q.gravityIngotParticleNode = undefined, q.Rs = undefined, q.ks = undefined, q.Ls = undefined, q.Es = undefined, q.js = undefined, q;
              }
              return __extends(M, V), Object.defineProperty(M.prototype, "middleCoinParticleController", {
                'get': function () {
                  return undefined === this.Rs && (this.Rs = this.middleCoinParticleNode.getComponent("AnimParticleSystem")), this.Rs;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "bottomCoinParticleController", {
                'get': function () {
                  return undefined === this.ks && (this.ks = this.bottomCoinParticleNode.getComponent("AnimParticleSystem")), this.ks;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "bottomIngotParticleController", {
                'get': function () {
                  return undefined === this.Ls && (this.Ls = this.bottomIngotParticleNode.getComponent("AnimParticleSystem")), this.Ls;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "gravityCoinController", {
                'get': function () {
                  return undefined === this.js && (this.js = this.gravityCoinParticleNode.getComponent("AnimParticleSystem")), this.js;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "gravityIngotController", {
                'get': function () {
                  return undefined === this.Es && (this.Es = this.gravityIngotParticleNode.getComponent("AnimParticleSystem")), this.Es;
                },
                'enumerable': false,
                'configurable': true
              }), M.prototype.playMiddleCoin = function () {
                this.middleCoinParticleNode.active = true, this.middleCoinParticleController.resetSystem();
              }, M.prototype.playBottomCoin = function () {
                this.bottomCoinParticleNode.active = true, this.bottomCoinParticleController.resetSystem();
              }, M.prototype.playBottomIngot = function () {
                this.bottomIngotParticleNode.active = true, this.bottomIngotParticleController.resetSystem();
              }, M.prototype.playGravityCoin = function () {
                {
                  this.gravityCoinParticleNode.active = true, this.gravityCoinController.resetSystem();
                }
              }, M.prototype.playGravityIngot = function () {
                this.gravityIngotParticleNode.active = true, this.gravityIngotController.resetSystem();
              }, M.prototype.stopMiddleCoin = function () {
                this.middleCoinParticleNode.active = false, this.middleCoinParticleController.stopSystem();
              }, M.prototype.stopBottomCoin = function () {
                {
                  this.bottomCoinParticleNode.active = false, this.bottomCoinParticleController.stopSystem();
                }
              }, M.prototype.stopBottomIngot = function () {
                {
                  this.bottomIngotParticleNode.active = false, this.bottomIngotParticleController.stopSystem();
                }
              }, M.prototype.stopGravityCoin = function () {
                this.gravityCoinParticleNode.active = false, this.gravityCoinController.stopSystem();
              }, M.prototype.stopGravityIngot = function () {
                this.gravityIngotParticleNode.active = false, this.gravityIngotController.stopSystem();
              }, M.prototype.q = function () {
                {
                  this.middleCoinParticleNode.active = false, this.bottomCoinParticleNode.active = false, this.bottomIngotParticleNode.active = false, this.gravityCoinParticleNode.active = false, this.gravityIngotParticleNode.active = false, this.middleCoinParticleController.stopSystem(), this.bottomCoinParticleController.stopSystem(), this.bottomIngotParticleController.stopSystem(), this.gravityCoinController.stopSystem(), this.gravityIngotController.stopSystem(), this.Rs = undefined, this.ks = undefined, this.Ls = undefined, this.Es = undefined, this.js = undefined;
                }
              }, M.prototype.destroy = function () {
                return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
              }, __decorate([H(cc.Node)], M.prototype, "middleCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "bottomCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "bottomIngotParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "gravityCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "gravityIngotParticleNode", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'CommonDummy': [function (l, j) {
      'use strict';

      cc._RF.push(j, "b1293aDfltLSYBmQFiPHMGc", "CommonDummy") || cc._RF.pop();
    }, {}],
    'CreatorTweaks': [function (l, j) {
      'use strict';

      cc._RF.push(j, "a569ek937NGRIiNfWZy/vYu", "CreatorTweaks") || (j.exports = {}, j.exports.__esModule = true, cc._RF.pop());
    }, {}],
    'CustomAssetConfig': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "641f6GBjpVE2ZOpz8U7nZ8z", "CustomAssetConfig")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x), B.customAssetConfig = undefined;
        var C = {};
        C.name = "click_effect";
        C.url = "lib/click_effect/prefab/click_effect_layer";
        C.type = cc.Prefab;
        C.isLocalized = false;
        var H = O("ResourceLoader"),
          r = O("SettingMenuHelper"),
          V = [C, {
            'name': "setting_menu_audio",
            'type': H.LoaderType.CUSTOM,
            'loadFunc': function (M, q) {
              r.settingMenuHelper.loadAudio(function (m) {
                m ? q(m) : M(undefined);
              });
            }
          }];
        B.customAssetConfig = V, cc._RF.pop();
      }
    }, jK],
    'DataSource': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "33f97XHWf5KOK2d9LLYgXNI", "DataSource")) {
        {
          var O = System.get("bvframework").DataSource;
          j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'Deserializer': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "755a5d0q9ZMN7vreqSy6/g4", "Deserializer")) {
        {
          var O = System.get("common").Deserializer;
          j.exports.Deserializer = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'DrawLine': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "0b006l9a0tOS5No6bQvo8YJ", "DrawLine")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.horizontal = true, q.vertical = false, q;
            }
            return __extends(M, V), M.prototype.onLoad = function () {
              this.graphics = this.node.addComponent(cc.Graphics), this.Ds(), this.node.on("size-changed", this.Ds, this);
            }, M.prototype.Ds = function () {
              var q, m;
              this.graphics.clear(), this.horizontal ? (q = -this.node.width * this.node.anchorX, m = this.node.width - this.node.width * this.node.anchorX, this.graphics.moveTo(q, this.node.height / 2), this.graphics.lineTo(m, this.node.height / 2)) : (q = this.node.height * this.node.anchorX, m = this.node.height * this.node.anchorX - this.node.height, this.graphics.moveTo(this.node.width / 2, q), this.graphics.lineTo(this.node.width / 2, m)), this.graphics.stroke();
            }, M.prototype.onDestroy = function () {
              {
                this.node.off("size-changed", this.Ds, this), this.graphics.clear();
              }
            }, __decorate([H(cc.Boolean)], M.prototype, "horizontal", undefined), __decorate([H(cc.Boolean)], M.prototype, "vertical", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'ErrorHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "933099S7qNPvb+XKiLo98KQ", "ErrorHandler")) {
        {
          var O = System.get("bvframework").ErrorHandler;
          for (var y in O) j.exports[y] = O[y];
          j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'FPSTracker': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "f7f37JW2SxLW5uWMYCvIjkK", "FPSTracker")) {
        var O = System.get("common").FPSTracker;
        j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'FastSpinAnimationController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "71b81mtzYVLsIN6c79edsP9", "FastSpinAnimationController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("AudioManager"),
          C = j("Utils"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              {
                var W = null !== m && m.apply(this, arguments) || this;
                return W.fastSpinNode = undefined, W.scrolleNode = undefined, W.fastSpinShineLeftNode = undefined, W.fastSpinShineRightNode = undefined, W.fastSpinShineLeftNodeSecond = undefined, W.fastSpinShineRightNodeSecond = undefined, W.fastSpinSpriteAnimation = undefined, W;
              }
            }
            return __extends(D, m), D.prototype.playFastSpinShine = function (W) {
              this.node.active = true, this.scrolleNode.active = true;
              var k = cc.repeatForever(cc.sequence(cc.tintTo(0.45, 255, 255, 255), cc.tintTo(0.45, 0, 0, 0)));
              this.fastSpinNode.runAction(k);
              var z = cc.repeatForever(cc.sequence(cc.fadeTo(0.25, 255), cc.fadeTo(0.25, 0)));
              this.scrolleNode.runAction(z);
              var L = cc.tintTo(0.3, 150, 150, 150),
                v = cc.tintTo(0.3, 150, 150, 150);
              this.fastSpinShineLeftNode.runAction(L), this.fastSpinShineRightNode.runAction(v);
              var b = cc.sequence(cc.tintTo(0.3, 150, 150, 150), cc.callFunc(this.Us, this)),
                U = cc.tintTo(0.3, 150, 150, 150);
              this.fastSpinShineLeftNodeSecond.runAction(b), this.fastSpinShineRightNodeSecond.runAction(U), this.fastSpinSpriteAnimation.play();
              var Q = cc.tintTo(0.6, 255, 255, 255);
              this.fastSpinSpriteAnimation.node.runAction(Q), C.delayCallback(W)(this.stopFastSpinSprite.bind(this)), x.GeneralAudioPool.fs_fastspin.setVolume(1), x.GeneralAudioPool.fs_fastspin.play();
            }, D.prototype.Us = function () {
              var W = cc.sequence(cc.scaleTo(0.5, 1, 1), cc.scaleTo(0.5, 0.5, 1)),
                k = cc.sequence(cc.scaleTo(0.5, -1, 1), cc.scaleTo(0.5, -0.5, 1)),
                z = cc.repeatForever(W),
                L = cc.repeatForever(k);
              this.fastSpinShineLeftNode.runAction(z), this.fastSpinShineRightNode.runAction(L);
              var v = cc.sequence(cc.scaleTo(0.5, 0.5, 1), cc.scaleTo(0.5, 1, 1)),
                b = cc.sequence(cc.scaleTo(0.5, -0.5, 1), cc.scaleTo(0.5, -1, 1)),
                U = cc.repeatForever(v),
                Q = cc.repeatForever(b);
              this.fastSpinShineLeftNodeSecond.runAction(U), this.fastSpinShineRightNodeSecond.runAction(Q);
            }, D.prototype.stopFastSpinSprite = function () {
              {
                this.fastSpinSpriteAnimation.node.stopAllActions();
                var W = cc.sequence(cc.tintTo(1, 0, 0, 0), cc.callFunc(this.Ws, this));
                this.fastSpinSpriteAnimation.node.runAction(W), x.GeneralAudioPool.fs_fastspin.isPlaying() && x.GeneralAudioPool.fs_fastspin.fade(x.GeneralAudioPool.fs_fastspin.getVolume(), 0, 1), x.GeneralAudioPool.reel_nearwin_slowdown.setVolume(1), x.GeneralAudioPool.reel_nearwin_slowdown.play();
              }
            }, D.prototype.stopFastSpinShine = function () {
              {
                this.fastSpinNode.stopAllActions(), this.fastSpinShineLeftNode.stopAllActions(), this.fastSpinShineRightNode.stopAllActions(), this.fastSpinShineLeftNodeSecond.stopAllActions(), this.fastSpinShineRightNodeSecond.stopAllActions(), this.fastSpinNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineLeftNode.runAction(cc.sequence(cc.tintTo(0.2, 0, 0, 0), cc.callFunc(this.Fs, this))), this.fastSpinShineRightNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineLeftNodeSecond.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineRightNodeSecond.runAction(cc.tintTo(0.2, 0, 0, 0)), x.GeneralAudioPool.reel_nearwin_slowdown.isPlaying() && x.GeneralAudioPool.reel_nearwin_slowdown.fade(x.GeneralAudioPool.reel_nearwin_slowdown.getVolume(), 0, 0.2);
              }
            }, D.prototype.stopScrollerShine = function (W) {
              this.scrolleNode.stopAllActions();
              var k = W ? 255 : 0;
              this.scrolleNode.runAction(cc.fadeTo(0.2, k));
            }, D.prototype.Ws = function () {
              this.fastSpinSpriteAnimation.stop();
            }, D.prototype.activeScrollNode = function () {
              this.scrolleNode.opacity = 255, this.scrolleNode.active = true;
            }, D.prototype.reset = function () {
              {
                this.scrolleNode.opacity = 0, this.scrolleNode.active = false;
              }
            }, D.prototype.Fs = function () {
              this.fastSpinNode.stopAllActions(), this.fastSpinShineLeftNode.stopAllActions(), this.fastSpinShineRightNode.stopAllActions(), this.fastSpinShineLeftNodeSecond.stopAllActions(), this.fastSpinShineRightNodeSecond.stopAllActions(), this.node.active = false;
            }, __decorate([M(cc.Node)], D.prototype, "fastSpinNode", undefined), __decorate([M(cc.Node)], D.prototype, "scrolleNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineLeftNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineRightNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineLeftNodeSecond", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineRightNodeSecond", undefined), __decorate([M(cc.Animation)], D.prototype, "fastSpinSpriteAnimation", undefined), __decorate([V], D);
          }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, I0],
    'FastStopScroller': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "e2461hkKoFHtovzKm7oIqPe", "FastStopScroller")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = {};
          C.scrollSpeed = 5040;
          C.targetYFunc = undefined;
          C.stopDuration = 0.25;
          var H = O("AbstractScroller"),
            M = cc._decorator,
            q = M.ccclass,
            m = M.mixins,
            D = function (W) {
              {
                function k(z, L) {
                  {
                    this.rs = 0, this.as = 0, this.os = 0, this._s = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
                    var v = "object" == typeof L;
                    for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
                    return this.rs = 0, this.as = 0, this.os = 0, this._s = 0, this.ns = false, this;
                  }
                }
                return __extends(k, W), k.prototype.onPlay = function () {
                  this.emit("play", this), this.rs = 0, this.as = this.target.y, this.os = this.targetYFunc(this, this.as), this._s = (this.as - this.os - this.scrollSpeed * this.stopDuration) / (this.stopDuration * this.stopDuration), this.ns = false;
                }, k.prototype.onStop = function () {
                  this.emit("stop", this);
                }, k.prototype.update = function (z) {
                  if ((z = this.rs += z) < this.stopDuration) return this.target.y = this.as - this.scrollSpeed * z - this._s * z * z, void this.emit("decelerate", 1 - z / this.stopDuration, this);
                  this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.stop();
                }, __decorate([q, m(cc.EventTarget)], k);
              }
            }(H.default);
          B.default = D, cc._RF.pop();
        }
      }
    }, I1],
    'FireworkController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "181b8bLdcZM5qUMt8O137AJ", "FireworkController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("AudioManager"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            function q() {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.firework01Node = undefined, m.firework02Node = undefined, m.animName = '', m.startDelayTime = 0, m.minDelayTime = 0, m.maxDelayTime = 0.5, m.randomPosRadiusX = 500, m.randomPosRadiusY = 10000, m.xs = undefined, m.Vs = false, m.zs = undefined, m;
            }
            return __extends(q, M), Object.defineProperty(q.prototype, "simpleAnimationController", {
              'get': function () {
                {
                  return undefined === this.zs && (this.zs = this.firework01Node.getComponent("SimpleAnimationController")), this.zs;
                }
              },
              'enumerable': false,
              'configurable': true
            }), q.prototype.cacheOriginalPosition = function () {
              this.xs = this.node.position;
            }, q.prototype.play = function () {
              {
                this.Vs = false, this.scheduleOnce(this.Ks, this.startDelayTime), x.GeneralAudioPool.bgm_bigwin_firework.play();
              }
            }, q.prototype.stop = function () {
              this.Vs = true, this.unschedule(this.Ks);
            }, q.prototype.forceStop = function () {
              this.Vs = true, this.simpleAnimationController.stop(), this.unschedule(this.Ks);
            }, q.prototype.Ks = function () {
              var m = 2 * (Math.random() - 0.5) * this.randomPosRadiusX,
                D = 2 * (Math.random() - 0.5) * this.randomPosRadiusY;
              x.GeneralAudioPool.bgm_bigwin_firework.isPlaying() || x.GeneralAudioPool.bgm_bigwin_firework.play();
              var W = cc.v2(this.xs.x + m, this.xs.y + D);
              this.node.setPosition(W), this.simpleAnimationController.play(this.animName, this.qs.bind(this));
            }, q.prototype.qs = function () {
              if (this.Vs) this.simpleAnimationController.stop();else {
                {
                  var m = this.Js(this.minDelayTime, this.maxDelayTime);
                  this.scheduleOnce(this.Ks, m);
                }
              }
            }, q.prototype.Js = function (m, D) {
              return Math.floor(Math.random() * Math.floor(m) + D);
            }, q.prototype.destroy = function () {
              return this.stop(), M.prototype.destroy.call(this);
            }, __decorate([r(cc.Node)], q.prototype, "firework01Node", undefined), __decorate([r(cc.Node)], q.prototype, "firework02Node", undefined), __decorate([r(cc.String)], q.prototype, "animName", undefined), __decorate([r(cc.Float)], q.prototype, "startDelayTime", undefined), __decorate([r(cc.Float)], q.prototype, "minDelayTime", undefined), __decorate([r(cc.Float)], q.prototype, "maxDelayTime", undefined), __decorate([r(cc.Integer)], q.prototype, "randomPosRadiusX", undefined), __decorate([r(cc.Integer)], q.prototype, "randomPosRadiusY", undefined), __decorate([H], q);
          }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, I2],
    'FrontWorldController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "530ebZ9UmxBa748dbGa+d6O", "FrontWorldController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.bloomLeftParticle = undefined, q.Ys = 0, q;
              }
            }
            return __extends(M, V), M.prototype.play = function () {
              this.bloomLeftParticle.resetSystem();
            }, M.prototype.stop = function () {
              this.bloomLeftParticle.stopSystem();
            }, M.prototype.destroy = function () {
              return this.stop(), V.prototype.destroy.call(this);
            }, M.prototype.update = function (q) {
              this.Ys += q, this.Ys > 2 && (this.bloomLeftParticle.gravity = cc.v2(-1 * this.bloomLeftParticle.gravity.x, -120), this.Ys = 0);
            }, __decorate([H(cc.ParticleSystem)], M.prototype, "bloomLeftParticle", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'GameAudioAdapter': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "60852/USphLYK0gkjUYFXzp", "GameAudioAdapter")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("AudioManager"),
          C = j("AudioAdapter"),
          H = j("AudioAdapterConstant"),
          r = cc._decorator.ccclass,
          V = function (M) {
            function q(m, D) {
              var W = M.call(this, m) || this;
              return W.Qs = undefined, W.Xs = undefined, W.Xs = D, W;
            }
            return __extends(q, M), q.prototype.load = function () {
              {
                var m = this,
                  D = function () {
                    {
                      m.off(H.AUDIO_ADAPTER_EVENT.LOAD_ERROR, W), m.Qs = x.registerAudio(m, m.Xs);
                    }
                  },
                  W = function () {
                    m.off(H.AUDIO_ADAPTER_EVENT.LOADED, D);
                  };
                return this.once(H.AUDIO_ADAPTER_EVENT.LOADED, D), this.once(H.AUDIO_ADAPTER_EVENT.LOAD_ERROR, W), M.prototype.load.call(this);
              }
            }, q.prototype.unload = function () {
              return x.unregisterAudio(this, this.Qs), M.prototype.unload.call(this);
            }, __decorate([r], q);
          }(C.default);
        y.default = V, cc._RF.pop();
      }
    }, I3],
    'GameEventHandler': [function (j, O) {
      'use strict';

      if (!cc._RF.push(O, "6da04mFMhpNcpdeGLQM+RKD", "GameEventHandler")) {
        var y = {};
        y.subscribeGameInfoUpdateEvent = "subscribeUpdateGameInfoEvent";
        y.subscribeGameLayoutInfoRequestEvent = "subscribeGameLayoutInfoEvent";
        y.subscribeGameConfigRequestEvent = "subscribeGameConfigRequest";
        y.subscribeGameConfigUpdateEvent = "subscribeGameConfigUpdateRequest";
        y.subscribeAudioPlayRateUpdateEvent = "subscribeUpdateAudioPlayRateEvent";
        y.subscribeInUIIdleStateStatusUpdateEvent = "subscribeUIIdleStateEvent";
        y.subscribeOperatorCurrencyFormatUpdateEvent = "subscribeOperatorCurrencyFormatUpdate";
        y.subscribeStoredGamesNameRequestEvent = "subscribeGameNameRequestEvent";
        y.emitGameStateChangedEvent = "emitGameStateChange";
        y.emitAutoplayStartedEvent = "emitAutoplayStarted";
        y.emitAutoplayStoppedEvent = "emitAutoplayStopped";
        y.emitErrorLogEvent = "emitErrorLog";
        y.emitUIBlockEvent = "emitBlockUIEvent";
        y.addGamePausedEventCallback = "setGamePauseEventCallback";
        y.addGameResumedEventCallback = "setGameResumeEventCallback";
        y.addTransactionInfoChangedEventCallback = "setTransactionInfoChangedCallback";
        y.removeTransactionInfoChangedEventCallback = "removeTransactionInfoChangedCallback";
        y.addUIBlockEventCallback = "setGamePlayUIBlockEventCallback";
        y.addInUIIdleStateCallback = "setInUIIdleStateCallback";
        y.subscribeSessionSocketErrorEvent = "subscribeOperationSocketErrorEvent";
        y.subscribeSessionSocketConnectedEvent = "subscribeOperationSocketConnectedEvent";
        y.subscribeSessionSocketConnectionStatusRequestEvent = "subscribeOperationSocketConnectionStatusRequestEvent";
        var B = System.get("bvframework").GameEventHandler,
          x = y,
          C = __assign({}, B);
        for (var H in Object.keys(x).forEach(function (r) {
          {
            C[x[r]] = C[r];
          }
        }), C.emitGameWinAnnouncement = function () {}, C) O.exports[H] = C[H];
        O.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GameHeaderHelper': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "295f80O8n1EXbn2oiNk8NLd", "GameHeaderHelper")) {
        var O = System.get("bvframework").GameHeaderHelper;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GameInitializationHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "b3a04bieS1EsYWkuqlKhqB3", "GameInitializationHandler")) {
        {
          var O = System.get("bvframework").GameInitializationHandler;
          for (var y in O) j.exports[y] = O[y];
          j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'GameLayout': [function (q, m, D) {
      'use strict';

      var W = {};
      W.value = true;
      var k = {};
      k.x = 0;
      k.y = -35;
      var o = {};
      o.width = 1080;
      o.height = 630;
      var z = {};
      z.position = k;
      z.size = o;
      var c = {};
      c.x = 0;
      c.y = -685;
      var L = {};
      L.width = 1080;
      L.height = 275;
      var v = {};
      v.position = c;
      v.size = L;
      var b = {};
      b.x = 0;
      b.y = -660;
      var U = {};
      U.width = 1080;
      U.height = 300;
      var Q = {};
      Q.position = b;
      Q.size = U;
      var w = {};
      w.uiFreeSpace = z;
      w.uiSettingMenu = v;
      w.uiBigWinFreeSpace = Q;
      cc._RF.push(m, "74808w89ABLOo061KyIdopY", "GameLayout") || (Object.defineProperty(D, "__esModule", W), D.gameLayout = undefined, D.gameLayout = w, cc._RF.pop());
    }, {}],
    'GameMaintenanceHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "6c833L7mQpG+JThxZci79NX", "GameMaintenanceHandler")) {
        var O = System.get("bvframework").GameMaintenanceHandler;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GameMaintenanceModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "9919da29LFDdJcSuJgAAHrr", "GameMaintenanceModel")) {
        var O = System.get("bvframework").GameMaintenanceModel;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GamePluginModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "c0badZnWvFI0LG/0J35BfII", "GamePluginModel")) {
        {
          var O = System.get("bvframework").GamePluginModel;
          j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'GamePreference': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "b7617TeDrNA16OCJDuXTFSu", "GamePreference")) {
        O.__esModule = true, O.globalPreference = O.gamePreference = undefined;
        var y = l("RtConfig"),
          B = l("Preference"),
          x = (0, B.getPreference)(y.cs_Config.bundleId);
        O.gamePreference = x;
        var C = (0, B.getPreference)(y.cs_Config.globalDomain);
        O.globalPreference = C, cc._RF.pop();
      }
    }, I4],
    'GameRegionUtils': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "bfde0A5L2BNVpzBMpH0I/vp", "GameRegionUtils")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.checkUKGCRegion = undefined;
        var x = j("GameUtils"),
          C = j("PGGDataSource");
        y.checkUKGCRegion = function (H) {
          var r = false;
          return x.checkOperatorProfit(H, C.pgDataSource) && (r = true), r;
        }, cc._RF.pop();
      }
    }, I5],
    'GameTitle': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "12eedGFUCVPu7lTHrspCNtZ", "GameTitle")) {
        var O = System.get("bvframework").GameTitle;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GameUtils': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "576e78TekpIpIcjjcHFmVOq", "GameUtils")) {
        var O = System.get("bvframework").GameUtils;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'GeneralAssetConfig': [function (z, c, L) {
      'use strict';

      if (!cc._RF.push(c, "e8598CyDFNMsp58D0H67dlC", "GeneralAssetConfig")) {
        var v = {};
        v.value = true;
        Object.defineProperty(L, "__esModule", v), L.generalAssetConfig = undefined;
        var b = {};
        b.name = "slot_bg";
        b.url = "load_res/slot_bg";
        b.type = cc.Prefab;
        b.isLocalized = false;
        var U = {};
        U.name = "pay_select_effect";
        U.url = "load_res/pay_select_effect_controller";
        U.type = cc.Prefab;
        U.isLocalized = false;
        var Q = {};
        Q.name = "backWorld";
        Q.url = "load_res/back_world";
        Q.type = cc.Prefab;
        Q.isLocalized = false;
        var w = {};
        w.name = "pay_table_controller";
        w.url = "load_res/pay_table_controller";
        w.type = cc.Prefab;
        w.isLocalized = false;
        var h = {};
        h.name = "frontWorld";
        h.url = "load_res/front_world";
        h.type = cc.Prefab;
        h.isLocalized = false;
        var P = {};
        P.name = "bottom_ui";
        P.url = "load_res/bottom_ui";
        P.type = cc.Prefab;
        P.isLocalized = false;
        var R = {};
        R.name = "spin_button_controller";
        R.url = "load_res/spin_button_controller";
        R.type = cc.Prefab;
        R.isLocalized = false;
        var T = {};
        T.name = "infobar_controller";
        T.url = "load_res/infobar_controller";
        T.type = cc.Prefab;
        T.isLocalized = true;
        var Y = {};
        Y.name = "big_win_controller";
        Y.url = "load_res/big_win_controller";
        Y.type = cc.Prefab;
        Y.isLocalized = false;
        var X = {};
        X.name = "piggy_controller";
        X.url = "load_res/piggy_controller";
        X.type = cc.Prefab;
        X.isLocalized = false;
        var a = {};
        a.name = "feature_particle";
        a.url = "load_res/feature_particle";
        a.type = cc.Prefab;
        a.isLocalized = false;
        var n = {};
        n.name = "wild_multipy_spine_controller";
        n.url = "load_res/wild_multipy_spine_holder";
        n.type = cc.Prefab;
        n.isLocalized = false;
        var E = {};
        E.name = "big_win_text";
        E.url = "texture/big_win/big_win_text";
        E.type = cc.SpriteAtlas;
        E.isLocalized = true;
        var F = {};
        F.name = "paytable_text";
        F.url = "texture/paytable_text/word";
        F.type = cc.SpriteAtlas;
        F.isLocalized = true;
        var N = {};
        N.name = "wild";
        N.url = "texture/wild/wild_paytable";
        N.type = cc.SpriteFrame;
        N.isLocalized = true;
        var Z = {};
        Z.name = "infoboard_message_texture";
        Z.url = "texture/info_message/infoboard_text";
        Z.type = cc.SpriteAtlas;
        Z.isLocalized = true;
        var p = [b, U, Q, w, h, P, R, T, Y, X, a, n, E, F, N, Z];
        L.generalAssetConfig = p, cc._RF.pop();
      }
    }, {}],
    'GenericLoadingScreenController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "cb530nJjNxEeb1kcmn96QZc", "GenericLoadingScreenController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x), B.hideLoadingPage = B.showLoadingPage = undefined;
          var C = O("Utils"),
            H = O("NotifyHelper"),
            V = false,
            M = false,
            q = undefined,
            m = undefined;
          B.showLoadingPage = function (L) {
            H.showFullLoadingPage(), q = L, C.delayCallback(0.3)(z);
          }, B.hideLoadingPage = function (L) {
            {
              m = L, M = true, V && W();
            }
          }, cc._RF.pop();
        }
      }
      function D() {
        M = false, V = false, m && m(), m = undefined;
      }
      function W() {
        H.hideFullLoadingPage(), C.delayCallback(0.3)(D);
      }
      function k() {
        V = true, M && W();
      }
      function z() {
        {
          C.delayCallback(1)(k), q && q(), q = undefined;
        }
      }
    }, I6],
    'GenericSettingButton': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "aeaa7CV0CtEMo2Sab7CGMw1", "GenericSettingButton")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("ButtonTheme"),
            C = j("UIAppearanceHelper"),
            H = j("Utils"),
            V = cc._decorator,
            M = V.ccclass,
            q = V.property,
            m = function (D) {
              function W() {
                {
                  var k = null !== D && D.apply(this, arguments) || this;
                  return k.iconSprite = undefined, k.collider = undefined, k.buttonTheme = undefined, k.circleCollider = undefined, k.normalSpriteFrame = undefined, k.disableSpriteFrame = undefined, k.Zs = true, k.$s = cc.v2(), k.te = cc.v2(), k.ie = false, k.se = false, k.ee = false, k.willHideOnceClick = true, k.ct = undefined, k;
                }
              }
              return __extends(W, D), W.prototype.onLoad = function () {
                {
                  var k;
                  if (this.enableTouchInteraction(), null === (k = this.circleCollider) || undefined === k || (k.opacity = 0), this.ct = this.iconSprite.getComponent(cc.Sprite), this.buttonTheme) {
                    {
                      var z = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
                      H.setNodeColorWithOpacity(this.iconSprite, z);
                    }
                  }
                }
              }, W.prototype.setIconSprite = function (k) {
                this.iconSprite.getComponent(cc.Sprite).spriteFrame = k;
              }, W.prototype.destroy = function () {
                {
                  return this.disableTouchInteraction(), D.prototype.destroy.call(this);
                }
              }, W.prototype.onClick = function () {}, W.prototype.buttonActivate = function (k) {
                {
                  k ? (this.node.active = true, H.deferCallback(this)(this.enableTouchInteraction)) : (this.disableTouchInteraction(), this.node.active = false);
                }
              }, Object.defineProperty(W.prototype, "isInteractable", {
                'get': function () {
                  {
                    return this.Zs;
                  }
                },
                'set': function (k) {
                  {
                    this.Zs = k, this.interactableButtonColor(k), k ? this.enableTouchInteraction() : (this.disableTouchInteraction(), this.ee = false);
                  }
                },
                'enumerable': false,
                'configurable': true
              }), W.prototype.ne = function (k) {
                if (this.Zs) {
                  this.ee = true, this.te = this.$s = k.touch.getLocation();
                  var z = this.oe(k);
                  this.ie = !z, this.ce(z);
                } else k.stopPropagation();
              }, W.prototype.ji = function (k) {
                var z, L;
                this.ee && (this.Zs ? (this.te = k.touch.getLocation(), this.circleCollider && (this.ie || (this.te = k.touch.getLocation(), z = cc.v2(0, this.$s.y), L = cc.v2(0, this.te.y), z.sub(L).mag() > 60 && (this.ce(false), this.ie = true), k.stopPropagation()))) : k.stopPropagation());
              }, W.prototype.he = function (k) {
                this.ee && (this.Zs ? this.ie || (k.stopPropagation(), this.ce(false), this.onClick(), this.willHideOnceClick && this.re()) : k.stopPropagation());
              }, W.prototype.ae = function (k) {
                this.ee && (this.Zs ? this.ie || (k.stopPropagation(), this.ce(false)) : k.stopPropagation());
              }, W.prototype.changeButtonColor = function (k) {
                this.changeButtonPressedColor(k);
              }, W.prototype.ce = function (k) {
                this.ie || this.changeButtonPressedColor(k);
              }, W.prototype.changeButtonPressedColor = function (k) {
                {
                  if (this.buttonTheme) {
                    {
                      var z = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                        L = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".pressed");
                      H.setNodeColorWithOpacity(this.iconSprite, k ? L : z);
                    }
                  }
                }
              }, W.prototype.interactableButtonColor = function (k) {
                this.ct.spriteFrame = k ? this.normalSpriteFrame : this.disableSpriteFrame;
              }, W.prototype.oe = function (k) {
                var z = this.circleCollider;
                if (!z) return true;
                var L = k.touch ? k.touch.getLocation() : k.getLocation(),
                  v = z.convertToNodeSpaceAR(L),
                  b = z.width / 2;
                return v.x * v.x + v.y * v.y <= b * b;
              }, W.prototype.ue = function (k) {
                {
                  this.circleCollider && (this.oe(k) ? this.circleCollider.opacity = 255 : this.circleCollider.opacity = 0);
                }
              }, W.prototype.re = function () {
                {
                  var k;
                  this.circleCollider && (this.ie = false, null === (k = this.circleCollider) || undefined === k || (k.opacity = 0));
                }
              }, W.prototype.enableTouchInteraction = function () {
                if (!this.se) {
                  this.se = true;
                  var k = this.collider;
                  k.on(cc.Node.EventType.TOUCH_START, this.ne, this), k.on(cc.Node.EventType.TOUCH_MOVE, this.ji, this), k.on(cc.Node.EventType.TOUCH_END, this.he, this), k.on(cc.Node.EventType.TOUCH_CANCEL, this.ae, this), k.on(cc.Node.EventType.MOUSE_ENTER, this.ue, this), k.on(cc.Node.EventType.MOUSE_MOVE, this.ue, this), k.on(cc.Node.EventType.MOUSE_LEAVE, this.re, this);
                }
              }, W.prototype.disableTouchInteraction = function () {
                if (this.se) {
                  {
                    this.se = false;
                    var k = this.collider;
                    k.off(cc.Node.EventType.TOUCH_START, this.ne, this), k.off(cc.Node.EventType.TOUCH_MOVE, this.ji, this), k.off(cc.Node.EventType.TOUCH_END, this.he, this), k.off(cc.Node.EventType.TOUCH_CANCEL, this.ae, this), k.off(cc.Node.EventType.MOUSE_ENTER, this.ue, this), k.off(cc.Node.EventType.MOUSE_MOVE, this.ue, this), k.off(cc.Node.EventType.MOUSE_LEAVE, this.re, this), this.circleCollider.opacity = 0;
                  }
                }
              }, __decorate([q(cc.Node)], W.prototype, "iconSprite", undefined), __decorate([q(cc.Node)], W.prototype, "collider", undefined), __decorate([q(x)], W.prototype, "buttonTheme", undefined), __decorate([q(cc.Node)], W.prototype, "circleCollider", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "normalSpriteFrame", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "disableSpriteFrame", undefined), __decorate([M], W);
            }(cc.Component);
          y.default = m, cc._RF.pop();
        }
      }
    }, I7],
    'GridView': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "2a349Sf9h1Dw6gCmtoNZ3ZP", "GridView")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("ScrollViewEx"),
          C = function (m, D, W) {
            {
              return m.fuzzyEquals(D, W);
            }
          },
          H = function (m, D) {
            return m.sub(D).mag();
          },
          V = cc._decorator,
          M = V.ccclass,
          q = (V.property, function (m) {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.autoSnap = true, W._i = {}, W.pi = {}, W;
            }
            return __extends(D, m), Object.defineProperty(D.prototype, "nodePools", {
              'get': function () {
                {
                  return this._i;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(D.prototype, "templates", {
              'get': function () {
                return this.pi;
              },
              'enumerable': false,
              'configurable': true
            }), D.prototype.setEstimatedSize = function (W) {
              this.vertical ? this.estimatedHeight = W.y : this.estimatedWidth = W.x;
            }, D.prototype.setConstantCellSize = function (W, k) {
              {
                var z = {};
                z.width = W;
                z.height = k;
                this.constCellSize = z;
              }
            }, D.prototype.setResetFinish = function (W) {
              this.resetFinish = W;
            }, D.prototype.setSpawnCell = function (W) {
              {
                this.le = W;
              }
            }, D.prototype.setRemoveCell = function (W) {
              this.fe = W;
            }, D.prototype.setPullingLeft = function (W) {
              this.de = W;
            }, D.prototype.setPullLeftEnd = function (W) {
              this.ve = W;
            }, D.prototype.setPullingRight = function (W) {
              this._e = W;
            }, D.prototype.setPullRightEnd = function (W) {
              {
                this.pe = W;
              }
            }, D.prototype.setPullingDown = function (W) {
              {
                this.be = W;
              }
            }, D.prototype.setPullDownEnd = function (W) {
              this.me = W;
            }, D.prototype.setPullingUp = function (W) {
              this.Se = W;
            }, D.prototype.setPullUpEnd = function (W) {
              this.ge = W;
            }, D.prototype.setFocusPoint = function (W) {
              switch (W) {
                case 1:
                  this.focusPoint = {}, this.focusPoint.type = 1, this.focusPoint.width = this.viewSize.width / 2, this.focusPoint.height = this.viewSize.height / 2;
                  break;
                case 2:
                  this.focusPoint = {}, this.focusPoint.type = 2, this.focusPoint.width = this.viewSize.width, this.focusPoint.height = this.viewSize.height;
                  break;
                default:
                  this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0;
              }
            }, D.prototype.getFocusPoint = function () {
              return this.focusPoint || (this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0), this.focusPoint;
            }, D.prototype.setLayoutSetting = function (W) {
              {
                this.contentLayout = this.content.getComponent(cc.Layout), this.layoutSetting = this.getLayoutSetting(), W.spacingLeft && (this.layoutSetting.spacingLeft = W.spacingLeft), W.spacingRight && (this.layoutSetting.spacingRight = W.spacingRight), W.spacingTop && (this.layoutSetting.spacingTop = W.spacingTop), W.spacingBottom && (this.layoutSetting.spacingBottom = W.spacingBottom), W.spacingX && (this.layoutSetting.spacingX = W.spacingX), W.spacingY && (this.layoutSetting.spacingY = W.spacingY), this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.spacingX = this.layoutSetting.spacingX, this.contentLayout.spacingY = this.layoutSetting.spacingY;
              }
            }, D.prototype.getLayoutSetting = function () {
              {
                var W = {};
                W.spacingLeft = 0;
                W.spacingRight = 0;
                W.spacingTop = 0;
                W.spacingBottom = 0;
                W.spacingX = 0;
                W.spacingY = 0;
                return this.layoutSetting ? this.layoutSetting : this.layoutSetting = W;
              }
            }, D.prototype.getVisibleItems = function () {
              var W = [],
                k = this.content.children;
              if (k.length) for (var z = 0; z < k.length; z++) W.push(k[z]);
              return W;
            }, D.prototype.setDataSource = function (W) {
              var k = this.node,
                z = k.width,
                L = k.height;
              this.Ce(z, L), W !== this.lt && (this.lt = W);
            }, D.prototype.ye = function () {
              return this.lt;
            }, D.prototype.Me = function (W) {
              this.we = W;
            }, D.prototype.Ae = function () {
              return this.we || (this.we = 0), this.we;
            }, D.prototype.gi = function () {
              var W = this.node,
                k = W.width,
                z = W.height;
              this.Ce(k, z), this.Pe(this.mi, this.currentIndex);
            }, D.prototype.Ce = function (W, k) {
              var z = {};
              z.width = W;
              z.height = k;
              this.viewSize = z, this.content.parent.setContentSize(W, k);
            }, D.prototype.Be = function () {
              {
                return this.viewSize;
              }
            }, D.prototype.register = function (W, k, z) {
              if (this.nodePools[W]) ;else if (k) {
                var L = new cc.NodePool(z);
                this.templates[W] = k, this.nodePools[W] = L;
              }
            }, D.prototype.reloadData = function () {
              this.setSnapDone(true);
              var W = this.lt,
                k = W.getCount(this, this.mi),
                z = this.we;
              z !== k ? (this.setMasterControl(true), k < z ? this.Oe(k) : (this.Me(k), this.reloadCurrentData(), this.Ie())) : this.reloadCurrentData(), W.didReloadData && W.didReloadData();
            }, D.prototype.insertItem = function () {}, D.prototype.removeItem = function () {}, D.prototype.Pe = function (W, k, z) {
              if (undefined === W && (W = this.mi), this.bi(), this.Ge(), this.setMasterControl(true), this.content.y = 0, this.content.x = 0, this.content.setContentSize(0, 0), this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.content.children.length) for (var L = this.content.children.length - 1; L >= 0; L--) {
                var v = this.content.children[L];
                this.Ne(v);
              }
              this.init(W, k, false, z);
            }, D.prototype.reset = function (W, k) {
              undefined === W && (W = this.mi), this.Pe(W, k, this.resetFinish);
            }, D.prototype.init = function (W, k, z, L) {
              var v = {};
              v.spacingLeft = 0;
              v.spacingRight = 0;
              v.spacingTop = 0;
              v.spacingBottom = 0;
              v.spacingX = 0;
              v.spacingY = 0;
              undefined === k && (k = 0), undefined === z && (z = true), this.layoutSetting || this.setLayoutSetting(v);
              var b = this.lt;
              this.isDynamicSize = !!b.getCellSize, this.isPreCalculateSize = !(!this.constCellSize && !this.isDynamicSize), this.isPreCalculateSize || (k = 0), this.originalElastic = this.elastic, this.currentIndex = k, this.currentTarget = k, this.requestSnap = false, this.setMasterControl(false), this.contentLayout = this.content.getComponent(cc.Layout), this.setSnapDone(true), this.snapPause = false, this.outerCellsMatrix = [], this.mi = W, this.pauseUpdate = false, this.pullDir = null, this.prevContentY = this.content.y, this.prevContentX = -1 * this.content.x, this.Mi(), this.Me(b.getCount(this, this.mi)), this.vertical ? (this.contentLayout.startAxis = 0, this.content.width = this.viewSize.width, this.Te(0, k, this.viewSize.height, z, L)) : (this.contentLayout.startAxis = 1, this.content.height = this.viewSize.height, this.He(0, k, this.viewSize.width, z, L));
            }, D.prototype.scrollTo = function (W, k) {
              var z = this;
              if (undefined === k && (k = true), !(W >= this.we)) if (!this.isPreCalculateSize || k) {
                if (this.vertical) {
                  {
                    var L = this.Re(W);
                    if (null !== L) {
                      {
                        var v = this.getFocusPoint();
                        this.currentIndex = W, 1 === v.type ? this.target = this.ke(L) - this.outerCellsMatrix[L].height - v.height + this.outerCellsMatrix[L][0].height / 2 : this.target = this.ke(L) - this.outerCellsMatrix[L].height - this.layoutSetting.spacingTop;
                        var b = this.content.height - this.viewSize.height;
                        this.target < 0 ? this.target = 0 : this.target > b && (this.target = b);
                      }
                    } else this.target = this.estimatedHeight, this.suddenStopIndex = W;
                  }
                } else {
                  var U = this.Re(W);
                  if (null !== U) {
                    v = this.getFocusPoint(), this.currentIndex = W, 1 === v.type ? this.target = this.Le(U) - this.outerCellsMatrix[U].width - v.width + this.outerCellsMatrix[U][0].width / 2 : this.target = this.Le(U) - this.outerCellsMatrix[U].width - this.layoutSetting.spacingLeft;
                    var Q = this.content.width - this.viewSize.width;
                    this.target < 0 ? this.target = 0 : this.target > Q && (this.target = Q);
                  } else this.target = this.estimatedWidth, this.suddenStopIndex = W;
                }
                this.lerpSpeed = 10, this.setSnapDone(false);
              } else this.Pe(this.mi, W, function () {
                z.snapFinish && z.snapFinish(W);
              });
            }, D.prototype.stopUpdate = function () {
              {
                this.setMasterControl(true);
              }
            }, D.prototype.resumeUpdate = function () {
              {
                this.pauseUpdate && (this.setMasterControl(false), this.pullDir = null, this.pauseUpdate = false);
              }
            }, D.prototype.setMasterControl = function (W) {
              this.Ee = W;
            }, D.prototype.je = function () {
              {
                this.pauseUpdate || this.Ee || this.content.children.length && (this.vertical ? this.content.y !== this.prevContentY && this.De() : -1 * this.content.x !== this.prevContentX && this.Ue());
              }
            }, D.prototype.ke = function (W) {
              {
                if (this.outerCellsMatrix[W] && this.outerCellsMatrix[W].totalHeight) return this.outerCellsMatrix[W].totalHeight;
                for (var k = this.layoutSetting.spacingTop, z = 0; z <= W; z++) {
                  {
                    if (k += this.outerCellsMatrix[z].height, z === W) return this.outerCellsMatrix[W].totalHeight = k, k;
                    k += this.layoutSetting.spacingY;
                  }
                }
              }
            }, D.prototype.Le = function (W) {
              if (this.outerCellsMatrix[W] && this.outerCellsMatrix[W].totalWidth) return this.outerCellsMatrix[W].totalWidth;
              for (var k = this.layoutSetting.spacingLeft, z = 0; z <= W; z++) {
                if (k += this.outerCellsMatrix[z].width, z === W) return this.outerCellsMatrix[W].totalWidth = k, k;
                k += this.layoutSetting.spacingX;
              }
            }, D.prototype.We = function () {
              {
                if (this.vertical) {
                  if (this.Fe() < this.xe) return 0;
                  if (this.Ve() > this.ze) {
                    var W = this.content.children.length - 1;
                    return this.content.children[W].row;
                  }
                  for (var k = 0, z = 0, L = this.content.height, v = null, b = 0; b < this.content.children.length; b++) if (v != this.content.children[b].row) {
                    v = this.content.children[b].row;
                    var U = this.ke(v) - this.outerCellsMatrix[v].height - this.layoutSetting.spacingTop;
                    if ((z = Math.abs(U - this.content.y)) >= L) return k;
                    k = v, L = z;
                  }
                  return k;
                }
                if (this.Ke() > this.qe) return 0;
                if (this.Je() < this.Ye) return W = this.content.children.length - 1, this.content.children[W].col;
                var Q = 0,
                  w = 0,
                  P = (L = this.content.width, null);
                for (b = 0; b < this.content.children.length; b++) if (P != this.content.children[b].col) {
                  P = this.content.children[b].col;
                  var R = this.Le(P) - this.outerCellsMatrix[P].width - this.layoutSetting.spacingLeft;
                  if ((w = Math.abs(R - -1 * this.content.x)) >= L) return Q;
                  Q = P, L = w;
                }
                return Q;
              }
            }, D.prototype.Qe = function () {
              if (this.elastic = this.originalElastic, !this.Ee && this.requestSnap && this.content.children.length) {
                {
                  if (this.vertical) {
                    var W = this.getFocusPoint();
                    this.requestSnap = false;
                    var k = this.We();
                    this.currentTarget = k, this.currentIndex = this.outerCellsMatrix[k][0] ? this.outerCellsMatrix[k][0].zIndex : null, 1 === W.type ? this.target = this.ke(k) - this.outerCellsMatrix[k].height - W.height + this.outerCellsMatrix[k][0].height / 2 : this.target = this.ke(k) - this.outerCellsMatrix[k].height - this.layoutSetting.spacingTop;
                    var z = this.content.height - this.viewSize.height;
                    z < 0 && (z = 0), this.target <= 0 ? this.target = 0 : this.target >= z && (this.target = z);
                  } else {
                    W = this.getFocusPoint(), this.requestSnap = false;
                    var L = this.We();
                    this.currentTarget = L, this.currentIndex = this.outerCellsMatrix[L][0] ? this.outerCellsMatrix[L][0].zIndex : null, 1 === W.type ? this.target = this.Le(L) - this.outerCellsMatrix[L].width - W.width + this.outerCellsMatrix[L][0].width / 2 : this.target = this.Le(L) - this.outerCellsMatrix[L].width - this.layoutSetting.spacingLeft;
                    var v = this.content.width - this.viewSize.width;
                    v < 0 && (v = 0), this.target <= 0 ? this.target = 0 : this.target >= v && (this.target = v);
                  }
                  this.lerpSpeed = 5, this.setSnapDone(false);
                }
              }
            }, D.prototype.De = function () {
              var W = this.content.y,
                k = this.content.children[0],
                z = this.content.children[this.content.children.length - 1],
                L = k.row,
                v = z.row,
                b = this.ke(v) - this.viewSize.height;
              if (this.prevContentY > W) {
                {
                  var U = k.zIndex,
                    Q = W - this.contentLayout.paddingTop + this.layoutSetting.spacingY;
                  if (0 > Q && this.Xe(L - 1, U - 1, Q), v > 0 && this.outerCellsMatrix[v - 1] && this.outerCellsMatrix[v - 1][0]) {
                    var w = W - b + this.layoutSetting.spacingY + this.outerCellsMatrix[v].height;
                    w < 0 && this.Ze(v, w, b);
                  }
                }
              } else {
                {
                  var P = z.zIndex,
                    R = W - b;
                  if (0 < R && this.$e(v + 1, 0, P + 1, R), L < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[L + 1] && this.outerCellsMatrix[L + 1][0]) {
                    var T = W - this.contentLayout.paddingTop - this.outerCellsMatrix[L].height;
                    0 < T && this.tn(L, T);
                  }
                }
              }
              this.prevContentY = W;
            }, D.prototype.Ue = function () {
              var W = -1 * this.content.x,
                k = this.content.children[0],
                z = this.content.children[this.content.children.length - 1],
                L = k.col,
                v = z.col,
                b = this.Le(v) - this.viewSize.width;
              if (this.prevContentX > W) {
                {
                  var U = k.zIndex,
                    Q = W - this.contentLayout.paddingLeft + this.layoutSetting.spacingX;
                  if (0 > Q && this.in(L - 1, U - 1, Q), v > 0 && this.outerCellsMatrix[v - 1] && this.outerCellsMatrix[v - 1][0]) {
                    var w = W - b + this.layoutSetting.spacingX + this.outerCellsMatrix[v].width;
                    w < 0 && this.sn(v, w, b);
                  }
                }
              } else {
                var P = z.zIndex,
                  R = W - b;
                if (0 < R && this.en(0, v + 1, P + 1, R), L < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[L + 1] && this.outerCellsMatrix[L + 1][0]) {
                  var T = W - this.contentLayout.paddingLeft - this.outerCellsMatrix[L].width;
                  0 < T && this.nn(L, T);
                }
              }
              this.prevContentX = W;
            }, D.prototype.cn = function () {
              for (var W, k, z = this.layoutSetting, L = z.spacingX, v = z.spacingLeft + z.spacingRight, b = 0, U = 0, Q = 0, w = this.we; b < w;) {
                if (this.isDynamicSize) {
                  var P = this.lt.getCellSize(b);
                  W = P.width + L, k = P.height;
                } else W = this.constCellSize.width + L, k = this.constCellSize.height;
                this.outerCellsMatrix[U] || (this.outerCellsMatrix[U] = {}, this.outerCellsMatrix[U][Q] = null, this.outerCellsMatrix[U].itemCount = 0, this.outerCellsMatrix[U].height = 0, this.outerCellsMatrix[U].freeWidth = this.viewSize.width - v, this.freeWidth = this.viewSize.width - v), this.freeWidth - W >= 0 ? (this.outerCellsMatrix[U].height = Math.max(k, this.outerCellsMatrix[U].height), this.outerCellsMatrix[U][Q] = null, this.freeWidth -= W, Q += 1, this.outerCellsMatrix[U].itemCount = Q, b++) : this.freeWidth + L - W >= 0 ? (this.outerCellsMatrix[U].height = Math.max(k, this.outerCellsMatrix[U].height), this.outerCellsMatrix[U][Q] = null, this.freeWidth -= W, Q += 1, this.outerCellsMatrix[U].itemCount = Q, b++) : (U += 1, Q = 0);
              }
              this.freeWidth = undefined, this.hn();
            }, D.prototype.rn = function () {
              {
                for (var W, k, z = this.layoutSetting, L = z.spacingY, v = z.spacingTop + z.spacingBottom, b = 0, U = 0, Q = 0, w = this.we; b < w;) {
                  {
                    if (this.isDynamicSize) {
                      {
                        var P = this.lt.getCellSize(b);
                        W = P.width, k = P.height + L;
                      }
                    } else W = this.constCellSize.width, k = this.constCellSize.height + L;
                    this.outerCellsMatrix[Q] || (this.outerCellsMatrix[Q] = {}, this.outerCellsMatrix[Q][U] = {}, this.outerCellsMatrix[Q].itemCount = 0, this.outerCellsMatrix[Q].width = 0, this.outerCellsMatrix[Q].freeHeight = this.viewSize.height - v, this.freeHeight = this.viewSize.height - v), this.freeHeight - k >= 0 ? (this.outerCellsMatrix[Q].width = Math.max(W, this.outerCellsMatrix[Q].width), this.outerCellsMatrix[Q][U] = null, this.freeHeight -= k, U += 1, this.outerCellsMatrix[Q].itemCount = U, b++) : this.freeHeight + this.layoutSetting.spacingY - k >= 0 ? (this.outerCellsMatrix[Q].width = Math.max(W, this.outerCellsMatrix[Q].width), this.outerCellsMatrix[Q][U] = null, this.freeHeight -= k, U += 1, this.outerCellsMatrix[Q].itemCount = U, b++) : (Q += 1, U = 0);
                  }
                }
                this.freeHeight = undefined, this.an();
              }
            }, D.prototype.un = function (W, k, z) {
              {
                this.lastContentY = this.content.y;
                for (var L, b, U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingLeft + U.spacingRight, T = 0, Y = this.we, X = 0; k < Y;) {
                  if (this.isDynamicSize) {
                    var E = this.lt.getCellSize(k);
                    L = E.width + Q, b = E.height;
                  } else L = this.constCellSize.width + Q, b = this.constCellSize.height;
                  if (!(z > 0)) return;
                  if (this.outerCellsMatrix[R] || (this.outerCellsMatrix[R] = {}, this.outerCellsMatrix[R][T] = null, this.outerCellsMatrix[R].itemCount = 0, this.outerCellsMatrix[R].height = 0, this.outerCellsMatrix[R].freeWidth = this.viewSize.width - P), this.outerCellsMatrix[R].freeWidth - L >= 0) {
                    this.outerCellsMatrix[R].height = Math.max(b, this.outerCellsMatrix[R].height);
                    var F = this.lt.getItem(this, k, this.mi);
                    this.ln(F, R, T, k), this.outerCellsMatrix[R].freeWidth -= L, T += 1, this.outerCellsMatrix[R].itemCount = T, k++;
                  } else if (this.outerCellsMatrix[R].freeWidth + Q - L >= 0) this.outerCellsMatrix[R].height = Math.max(b, this.outerCellsMatrix[R].height), F = this.lt.getItem(this, k, this.mi), this.ln(F, R, T, k), this.outerCellsMatrix[R].freeWidth -= L, T += 1, this.outerCellsMatrix[R].itemCount = T, k++;else {
                    var N = (z -= X) - (this.outerCellsMatrix[R].height + w);
                    N > 0 ? z = N : N + w > 0 ? (z = N + w, X = w) : z = N, R += 1, T = 0;
                  }
                }
              }
            }, D.prototype.dn = function (W, k, z) {
              this.lastContentX = -1 * this.content.x;
              for (var L, b, U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingTop + U.spacingBottom, R = 0, Y = this.we, X = 0; k < Y;) {
                {
                  if (this.isDynamicSize) {
                    {
                      var E = this.lt.getCellSize(k);
                      L = E.width, b = E.height + w;
                    }
                  } else L = this.constCellSize.width, b = this.constCellSize.height + w;
                  if (!(z > 0)) return void this.setMasterControl(false);
                  if (this.outerCellsMatrix[T] || (this.outerCellsMatrix[T] = {}, this.outerCellsMatrix[T][R] = {}, this.outerCellsMatrix[T].itemCount = 0, this.outerCellsMatrix[T].width = 0, this.outerCellsMatrix[T].freeHeight = this.viewSize.height - P), this.outerCellsMatrix[T].freeHeight - b >= 0) {
                    this.outerCellsMatrix[T].width = Math.max(L, this.outerCellsMatrix[T].width);
                    var F = this.lt.getItem(this, k, this.mi);
                    this.ln(F, R, T, k), this.outerCellsMatrix[T].freeHeight -= b, R += 1, this.outerCellsMatrix[T].itemCount = R, k++;
                  } else if (this.outerCellsMatrix[T].freeHeight + w - b >= 0) this.outerCellsMatrix[T].width = Math.max(L, this.outerCellsMatrix[T].width), F = this.lt.getItem(this, k, this.mi), this.ln(F, R, T, k), this.outerCellsMatrix[T].freeHeight -= b, R += 1, this.outerCellsMatrix[T].itemCount = R, k++;else {
                    var N = (z -= X) - (this.outerCellsMatrix[T].width + Q);
                    N > 0 ? z = N : N + Q > 0 ? (z = N + Q, X = Q) : z = N, T += 1, R = 0;
                  }
                }
              }
              this.setMasterControl(false);
            }, D.prototype.vn = function (W, k, z) {
              var L = this.Re(W),
                v = this._n(L),
                b = this.ke(L) - this.outerCellsMatrix[L].height;
              this.Fe() < this.xe ? this.target = 0 : this.Ve() > this.ze ? this.target = this.content.height + this.ze : this.target = b - this.layoutSetting.spacingTop, this.content.y = this.target, this.contentLayout.paddingTop = b, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.updateLayout(), this.un(L, v, k);
              var U = this.content.y - b;
              U < 0 ? this.Xe(L - 1, v - 1, U, z) : z && z(), this.setMasterControl(false);
            }, D.prototype.pn = function (W, k, z) {
              var L = this.Re(W),
                v = this._n(L),
                b = -1 * (this.Le(L) - this.outerCellsMatrix[L].width);
              this.Ke() > this.qe ? this.target = 0 : this.Je() < this.Ye ? this.target = -1 * (this.content.width - this.Ye) : this.target = b + this.layoutSetting.spacingLeft, this.content.x = this.target, this.contentLayout.paddingLeft = -b, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.updateLayout(), this.dn(L, v, k);
              var U = -1 * this.content.x + b;
              U < 0 ? this.in(L - 1, v - 1, U, z) : z && z(), this.setMasterControl(false);
            }, D.prototype.Te = function (W, k, z, L, b) {
              if (undefined === L && (L = true), this.we) {
                if (this.isPreCalculateSize && !L) this.cn(), this.vn(k, z, b);else {
                  {
                    this.lastContentY = this.content.y;
                    for (var U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingLeft + U.spacingRight, T = 0, Y = undefined, X = undefined, E = undefined, F = this.we, N = 0; k < F;) {
                      {
                        if (X = (Y = this.lt.getItem(this, k, this.mi)).width + Q, E = Y.height, !(z > 0)) return this.hn(), this.wi(Y), void this.setMasterControl(false);
                        if (this.outerCellsMatrix[R] || (this.outerCellsMatrix[R] = {}, this.outerCellsMatrix[R][T] = null, this.outerCellsMatrix[R].itemCount = 0, this.outerCellsMatrix[R].height = 0, this.outerCellsMatrix[R].freeWidth = this.viewSize.width - P), this.outerCellsMatrix[R].freeWidth - X >= 0) this.outerCellsMatrix[R].height = Math.max(E, this.outerCellsMatrix[R].height), this.ln(Y, R, T, k), this.outerCellsMatrix[R].freeWidth -= X, T += 1, this.outerCellsMatrix[R].itemCount = T, k++, this.hn();else if (this.outerCellsMatrix[R].freeWidth + Q - X >= 0) this.outerCellsMatrix[R].height = Math.max(E, this.outerCellsMatrix[R].height), this.ln(Y, R, T, k), this.outerCellsMatrix[R].freeWidth -= X, T += 1, this.outerCellsMatrix[R].itemCount = T, k++, this.hn();else {
                          var Z = (z -= N) - (this.outerCellsMatrix[R].height + w);
                          Z > 0 ? z = Z : Z + w > 0 ? (z = Z + w, N = w) : z = Z, this.hn(), this.wi(Y), R += 1, T = 0;
                        }
                      }
                    }
                    this.setMasterControl(false);
                  }
                }
              } else b && b();
            }, D.prototype.He = function (W, k, z, L, b) {
              {
                if (this.we) {
                  if (this.isPreCalculateSize && !L) this.rn(), this.pn(k, z, b);else {
                    this.lastContentX = -1 * this.content.x;
                    for (var U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingTop + U.spacingBottom, R = 0, Y = undefined, X = undefined, E = undefined, F = this.we, N = 0; k < F;) {
                      if (X = (Y = this.lt.getItem(this, k, this.mi)).width, E = Y.height + w, !(z > 0)) return this.an(), this.wi(Y), void this.setMasterControl(false);
                      if (this.outerCellsMatrix[T] || (this.outerCellsMatrix[T] = {}, this.outerCellsMatrix[T][R] = {}, this.outerCellsMatrix[T].itemCount = 0, this.outerCellsMatrix[T].width = 0, this.outerCellsMatrix[T].freeHeight = this.viewSize.height - P), this.outerCellsMatrix[T].freeHeight - E >= 0) this.outerCellsMatrix[T].width = Math.max(X, this.outerCellsMatrix[T].width), this.ln(Y, R, T, k), this.outerCellsMatrix[T].freeHeight -= E, R += 1, this.outerCellsMatrix[T].itemCount = R, k++, this.an();else if (this.outerCellsMatrix[T].freeHeight + w - E >= 0) this.outerCellsMatrix[T].width = Math.max(X, this.outerCellsMatrix[T].width), this.ln(Y, R, T, k), this.outerCellsMatrix[T].freeHeight -= E, R += 1, this.outerCellsMatrix[T].itemCount = R, k++, this.an();else {
                        {
                          var Z = (z -= N) - (this.outerCellsMatrix[T].width + Q);
                          Z > 0 ? z = Z : Z + Q > 0 ? (z = Z + Q, N = Q) : z = Z, this.an(), this.wi(Y), T += 1, R = 0;
                        }
                      }
                    }
                    this.setMasterControl(false);
                  }
                } else b && b();
              }
            }, D.prototype.tn = function (W, k) {
              {
                for (var z = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, L = this.outerCellsMatrix[W].itemCount - 1; 0 < k;) if (L >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][L]), L--;else {
                  {
                    if (this.contentLayout.paddingTop += this.outerCellsMatrix[W].height + this.layoutSetting.spacingY, this.outerCellsMatrix[W].freeWidth = this.viewSize.width - z, (W += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[W][0]) return;
                    L = this.outerCellsMatrix[W].itemCount - 1, k = this.content.y - this.contentLayout.paddingTop - this.outerCellsMatrix[W].height;
                  }
                }
              }
            }, D.prototype.nn = function (W, k) {
              for (var z = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, L = this.outerCellsMatrix[W].itemCount - 1; 0 < k;) if (L >= 0) this.Ne(this.outerCellsMatrix[W][L]), L--;else {
                if (this.contentLayout.paddingLeft += this.outerCellsMatrix[W].width + this.layoutSetting.spacingX, this.outerCellsMatrix[W].freeHeight = this.viewSize.height - z, (W += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[W][0]) return;
                L = this.outerCellsMatrix[W].itemCount - 1, k = -1 * this.content.x - this.contentLayout.paddingLeft - this.outerCellsMatrix[W].width;
              }
            }, D.prototype.Ze = function (W, k, z) {
              for (var L = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, v = this.outerCellsMatrix[W].itemCount - 1; k < 0;) if (v >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][v]), v--;else {
                if (this.outerCellsMatrix[W].freeWidth = this.viewSize.width - L, (W -= 1) <= 0 || !this.outerCellsMatrix[W][0]) return;
                v = this.outerCellsMatrix[W].itemCount - 1, z = this.ke(W) - this.viewSize.height, k = this.content.y - z + this.layoutSetting.spacingY + this.outerCellsMatrix[W].height;
              }
            }, D.prototype.sn = function (W, k, z) {
              for (var L = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, v = this.outerCellsMatrix[W].itemCount - 1; k < 0;) if (v >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][v]), v--;else {
                {
                  if (this.outerCellsMatrix[W].freeHeight = this.viewSize.height - L, (W -= 1) <= 0 || !this.outerCellsMatrix[W][0]) return;
                  v = this.outerCellsMatrix[W].itemCount - 1, z = this.Le(W) - this.viewSize.width, k = -1 * this.content.x - z + this.layoutSetting.spacingX + this.outerCellsMatrix[W].width;
                }
              }
            }, D.prototype.removeUselessItems = function (W, k) {
              {
                if (this.Me(W), this.vertical) for (var z = this.content.children.length - 1; z >= 0; z--) {
                  if (!((v = this.content.children[z]).zIndex > W - 1)) {
                    this.reloadCurrentData();
                    var L = v.col + 1;
                    this.outerCellsMatrix[v.row].itemCount = L, this.outerCellsMatrix.splice(v.row + 1, this.outerCellsMatrix.length - 1), this.hn(), this.setMasterControl(false), k && k();
                    break;
                  }
                  this.outerCellsMatrix[v.row].freeWidth += this.outerCellsMatrix[v.row][v.col].width + this.layoutSetting.spacingX, this.Ne(v), 0 === z && (this.hn(), this.setMasterControl(false), k && k());
                } else for (z = this.content.children.length - 1; z >= 0; z--) {
                  var v;
                  if (!((v = this.content.children[z]).zIndex >= W - 1)) {
                    {
                      this.reloadCurrentData(), L = v.row + 1, this.outerCellsMatrix[v.col].itemCount = L, this.outerCellsMatrix.splice(v.col + 1, this.outerCellsMatrix.length - 1), this.an(), this.setMasterControl(false), k && k();
                      break;
                    }
                  }
                  this.outerCellsMatrix[v.col].freeHeight += this.outerCellsMatrix[v.col][v.row].height + this.layoutSetting.spacingY, this.Ne(v), 0 === z && (this.hn(), this.setMasterControl(false), k && k());
                }
              }
            }, D.prototype.$e = function (W, k, z, L) {
              this.lastContentY = this.content.y;
              for (var v, b, U, Q = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, R = this.we; z < R;) {
                if (b = (v = this.lt.getItem(this, z, this.mi)).width + this.layoutSetting.spacingX, U = v.height, !(0 < L)) return this.hn(), void this.wi(v);
                if (this.outerCellsMatrix[w] || (this.outerCellsMatrix[w] = {}, this.outerCellsMatrix[w][P] = {}, this.outerCellsMatrix[w].itemCount = 0, this.outerCellsMatrix[w].height = 0, this.outerCellsMatrix[w].freeWidth = this.viewSize.width - Q), this.outerCellsMatrix[w].freeWidth - b >= 0) this.le && this.le(), this.outerCellsMatrix[w].height = Math.max(U, this.outerCellsMatrix[w].height), this.ln(v, w, P, z), this.outerCellsMatrix[w].freeWidth -= b, P += 1, this.outerCellsMatrix[w].itemCount = P, ++z >= R && this.hn();else if (this.outerCellsMatrix[w].freeWidth + this.layoutSetting.spacingX - b >= 0) this.le && this.le(), this.outerCellsMatrix[w].height = Math.max(U, this.outerCellsMatrix[w].height), this.ln(v, w, P, z), this.outerCellsMatrix[w].freeWidth -= b, P += 1, this.outerCellsMatrix[w].itemCount = P, z++, this.hn();else {
                  var T = this.content.children[this.content.children.length - 1].row,
                    Y = this.ke(T) - this.viewSize.height;
                  L = this.content.y - Y, this.hn(), this.wi(v), w += 1, P = 0;
                }
              }
            }, D.prototype.en = function (W, k, z, L) {
              {
                this.lastContentY = -1 * this.content.x;
                for (var v, b, U, Q = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, R = this.we; z < R;) {
                  if (b = (v = this.lt.getItem(this, z, this.mi)).width, U = v.height + this.layoutSetting.spacingY, !(0 < L)) return this.an(), void this.wi(v);
                  if (this.outerCellsMatrix[P] || (this.outerCellsMatrix[P] = {}, this.outerCellsMatrix[P][w] = {}, this.outerCellsMatrix[P].itemCount = 0, this.outerCellsMatrix[P].width = 0, this.outerCellsMatrix[P].freeHeight = this.viewSize.height - Q), this.outerCellsMatrix[P].freeHeight - U >= 0) this.le && this.le(), this.outerCellsMatrix[P].width = Math.max(b, this.outerCellsMatrix[P].width), this.ln(v, w, P, z), this.outerCellsMatrix[P].freeHeight -= U, w += 1, this.outerCellsMatrix[P].itemCount = w, ++z >= R && this.an();else if (this.outerCellsMatrix[P].freeHeight + this.layoutSetting.spacingY - U >= 0) this.le && this.le(), this.outerCellsMatrix[P].width = Math.max(b, this.outerCellsMatrix[P].width), this.ln(v, w, P, z), this.outerCellsMatrix[P].freeHeight -= U, w += 1, this.outerCellsMatrix[P].itemCount = w, z++, this.an();else {
                    var T = this.content.children[this.content.children.length - 1].col,
                      Y = this.Le(T) - this.viewSize.width;
                    L = -1 * this.content.x - Y, this.an(), this.wi(v), P += 1, w = 0;
                  }
                }
              }
            }, D.prototype.Xe = function (W, k, z, L) {
              if (!(W < 0)) {
                for (var v, b, U, w = this.outerCellsMatrix[Q].itemCount - 1; k >= 0;) {
                  {
                    if (b = (v = this.lt.getItem(this, k, this.mi)).width + this.layoutSetting.spacingX, U = v.height, !(0 > z)) return this.hn(), this.wi(v), void (L && L());
                    w >= 0 ? (this.le && this.le(), this.outerCellsMatrix[Q].height = Math.max(U, this.outerCellsMatrix[Q].height), this.ln(v, Q, w, k), this.outerCellsMatrix[Q].freeWidth -= b, 0 === k && (this.contentLayout.paddingTop -= this.outerCellsMatrix[Q].height + this.layoutSetting.spacingY, z = this.content.y - this.contentLayout.paddingTop), w -= 1, k--) : (this.contentLayout.paddingTop -= this.outerCellsMatrix[Q].height + this.layoutSetting.spacingY, z = this.content.y - this.contentLayout.paddingTop, this.hn(), this.wi(v), Q -= 1, w = this.outerCellsMatrix[Q].itemCount - 1);
                  }
                }
                L && L();
              }
            }, D.prototype.in = function (W, k, z, L) {
              if (!(W < 0)) {
                for (var v, b, U, Q = -1 * this.content.x, P = this.outerCellsMatrix[w].itemCount - 1; k >= 0;) {
                  {
                    if (b = (v = this.lt.getItem(this, k, this.mi)).width, U = v.height + this.layoutSetting.spacingY, !(0 > z)) return this.an(), this.wi(v), void (L && L());
                    P >= 0 ? (this.le && this.le(), this.outerCellsMatrix[w].width = Math.max(b, this.outerCellsMatrix[w].width), this.ln(v, P, w, k), this.outerCellsMatrix[w].freeHeight -= U, 0 === k && (this.contentLayout.paddingLeft -= this.outerCellsMatrix[w].width + this.layoutSetting.spacingX, z = Q - this.contentLayout.paddingLeft), P -= 1, k--) : (this.contentLayout.paddingLeft -= this.outerCellsMatrix[w].width + this.layoutSetting.spacingX, z = Q - this.contentLayout.paddingLeft, this.an(), this.wi(v), w -= 1, P = this.outerCellsMatrix[w].itemCount - 1);
                  }
                }
                L && L();
              }
            }, D.prototype.hn = function () {
              for (var W = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, k = 0; k < this.outerCellsMatrix.length; k++) W += this.outerCellsMatrix[k].height, k !== this.outerCellsMatrix.length - 1 ? W += this.layoutSetting.spacingY : this.content.height !== W && (this.content.height = W);
            }, D.prototype.an = function () {
              for (var W = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, k = 0; k < this.outerCellsMatrix.length; k++) W += this.outerCellsMatrix[k].width, k !== this.outerCellsMatrix.length - 1 ? W += this.layoutSetting.spacingX : this.content.width !== W && (this.content.width = W);
            }, D.prototype.ln = function (W, k, z, L) {
              var v = this.bn();
              this.vertical ? this.outerCellsMatrix[k][z] = v : this.outerCellsMatrix[z][k] = v, this.content.addChild(v), v.addChild(W), v.row = k, v.col = z, v.zIndex = L, v.width = W.width, v.height = W.height, this.content.sortAllChildren();
            }, D.prototype.dequeueReusableItem = function (W) {
              {
                var k,
                  z = this.nodePools[W];
                if (z) {
                  if (!(k = z.get())) {
                    var L = this.templates[W];
                    k = cc.instantiate(L);
                  }
                  k.lv_type = W;
                }
                return k;
              }
            }, D.prototype.wi = function (W) {
              var k,
                z = W.lv_type;
              z && (k = this.nodePools[z]), k && k.put(W);
            }, D.prototype.Oe = function (W) {
              if (this.vertical) {
                {
                  var k = this.Re(this.currentIndex);
                  this.currentIndex <= W - 1 ? this.removeUselessItems(W) : null !== k ? (this.isReducingData = true, this.newDataCount = W, this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(W);
                }
              } else {
                {
                  var z = this.Re(this.currentIndex);
                  this.currentIndex < W - 1 ? this.removeUselessItems(W) : null !== z ? (this.isReducingData = true, this.stopAutoScroll(), this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(W);
                }
              }
            }, D.prototype.Ie = function () {
              if (this.vertical) {
                if (!this.content.children.length) return void this.Te(0, 0, this.viewSize.height);
                var W = (U = this.content.children[this.content.children.length - 1]).row,
                  k = W - 1;
                k < 0 && (k = 0);
                var z = this.ke(k) - this.viewSize.height,
                  L = U.zIndex,
                  v = this.content.y - z,
                  b = (P = this.lt.getItem(this, L + 1, this.mi)).width + this.layoutSetting.spacingX;
                this.wi(P), this.outerCellsMatrix[W].freeWidth - b >= 0 ? this.$e(W, this.outerCellsMatrix[W].itemCount, L + 1, v) : this.outerCellsMatrix[W].freeWidth + this.layoutSetting.spacingX - b >= 0 && this.$e(W, this.outerCellsMatrix[W].itemCount, L + 1, v), this.setMasterControl(false);
              } else {
                {
                  if (!this.content.children.length) return void this.He(0, 0, this.viewSize.width);
                  var U,
                    Q = (U = this.content.children[this.content.children.length - 1]).col,
                    w = Q - 1;
                  w < 0 && (w = 0), z = this.Le(w) - this.viewSize.width;
                  var P,
                    R = U.zIndex,
                    T = -1 * this.content.x - z,
                    Y = (P = this.lt.getItem(this, R + 1, this.mi)).height + this.layoutSetting.spacingY;
                  this.wi(P), this.outerCellsMatrix[Q].freeHeight - Y >= 0 ? this.en(this.outerCellsMatrix[R].itemCount, Q, R + 1, T) : this.outerCellsMatrix[Q].freeWidth + this.layoutSetting.spacingX - Y >= 0 && this.en(this.outerCellsMatrix[Q].itemCount, Q, R + 1, T), this.setMasterControl(false);
                }
              }
            }, D.prototype.reloadCurrentData = function (W) {
              if (this.content.children.length) for (var k = 0; k < this.content.children.length; k++) {
                {
                  this.wi(this.content.children[k].children[0]);
                  var z = this.lt.getItem(this, this.content.children[k].zIndex, this.mi);
                  this.content.children[k].addChild(z), this.content.sortAllChildren();
                }
              }
              W && W();
            }, D.prototype.Ne = function (W) {
              null !== k && null !== k.row && null !== k.col && (this.vertical ? this.outerCellsMatrix[k.row][k.col] = null : this.outerCellsMatrix[k.col][k.row] = null, k.children.length && this.wi(k.children[0]), this._.put(k), this.content.sortAllChildren());
            }, D.prototype.bn = function () {
              return this._ ? this._.size() ? this._.get() : new cc.Node() : (this._ = new cc.NodePool(), new cc.Node());
            }, D.prototype.Oi = function (W, k, z, L, v) {
              if (undefined === L && (L = 1), H(cc.v2(W, 0), cc.v2(k, 0)) <= 1) return this.mn(v), k;
              this.Fi("scrolling");
              var b = W + (z *= L) * (k - W);
              return W >= k ? b <= k && (this.mn(v), b = k) : b >= k && (this.mn(v), b = k), b;
            }, D.prototype.mn = function (W) {
              var k = this;
              if (this.isReducingData) this.isReducingData = false, this.removeUselessItems(this.newDataCount, function () {
                if (k.setMasterControl(false), k.setSnapDone(true), k.stopAutoScroll(), k.Fi("scroll-ended"), null === k.currentIndex) {
                  var L = k.We();
                  k.currentIndex = k.outerCellsMatrix[L][0].zIndex;
                }
                k.snapFinish && k.snapFinish(k.currentIndex), W && W();
              });else {
                if (this.setMasterControl(false), this.setSnapDone(true), this.stopAutoScroll(), this.Fi("scroll-ended"), null === this.currentIndex) {
                  var z = this.We();
                  this.currentIndex = this.outerCellsMatrix[z][0].zIndex;
                }
                this.snapFinish && this.snapFinish(this.currentIndex), W && W();
              }
            }, D.prototype._n = function (W) {
              {
                for (var k = 0, z = 0; z <= W; z++) {
                  if (W === z) return k;
                  k += this.outerCellsMatrix[z].itemCount;
                }
              }
            }, D.prototype.Re = function (W) {
              {
                for (var k = this.outerCellsMatrix.length - 1, z = 0; z <= k; z++) {
                  if (!((W -= this.outerCellsMatrix[z].itemCount) >= 0)) return z;
                  if (z === k) return null;
                }
              }
            }, D.prototype.destroy = function () {
              this.bi(), m.prototype.destroy.call(this);
            }, D.prototype.Mi = function () {
              {
                this.content.on(cc.Node.EventType.POSITION_CHANGED, this.je, this), this.autoSnap && this.node.on("scroll-ended", this.Qe, this), this.node.on(cc.Node.EventType.SIZE_CHANGED, this.gi, this);
              }
            }, D.prototype.bi = function () {
              this.content.off(cc.Node.EventType.POSITION_CHANGED, this.je, this), this.autoSnap && this.node.off("scroll-ended", this.Qe, this), this.node.off(cc.Node.EventType.SIZE_CHANGED, this.gi, this);
            }, D.prototype.Ge = function () {
              this.xe = 0, this.ze = 0, this.qe = 0, this.Ye = 0, this.Sn = [], this.gn = [], this.Cn = 0, this.ji = false, this.yn = false, this.Mn = false, this.wn = cc.v2(0, 0), this.An = cc.v2(0, 0), this.Pn = 0, this.Bn = 0, this.On = false, this.In = false, this.Gn = cc.v2(0, 0), this.Nn = cc.v2(0, 0), this.Tn = true, this.Qi = false, this.Ji = 0, this.Hn = false, this.Rn = 0, this.kn = false, this.Ln = false;
            }, D.prototype.update = function (W) {
              if (!this.pauseUpdate) {
                if (this.snapPause) return this.setSnapDone(true), void this.stopAutoScroll();
                if (!this.snapDone) {
                  {
                    if (!this.content.children.length) return this.content.setPosition(cc.v2(0, 0)), void this.setSnapDone(true);
                    if (!(this.suddenStopIndex && this.content.children[this.content.children.length - 1].zIndex >= this.suddenStopIndex)) return this.stopAutoScroll(), void (this.vertical ? this.content.y = this.Oi(this.content.y, this.target, W, this.lerpSpeed) : this.content.x = -1 * this.Oi(-1 * this.content.x, this.target, W, this.lerpSpeed));
                    this.setMasterControl(true), this.scrollTo(this.suddenStopIndex), this.suddenStopIndex = null;
                  }
                }
                m.prototype.update.call(this, W);
              }
            }, D.prototype.Ii = function (W, k) {
              this.elastic = this.originalElastic, this.touchPos = W.touch.getLocation(), !this.Ee && this.content.children.length && (this.unschedule(this.Xi), this.Qi = false, this.snapPause = true, this.setSnapDone(true), m.prototype.Ii.call(this, W, k));
            }, D.prototype.$ = function (W, k) {
              this.elastic = this.originalElastic, !this.Ee && this.content.children.length && (this.vertical ? this.En(W) : this.jn(W), this.pauseUpdate || m.prototype.$.call(this, W, k));
            }, D.prototype.Dn = function () {
              if (this.Vi && this.Vi.getScrollY() > 0) this.Se && 2 === this.pullDir && this.Se(0), this.be && this.Fe() <= this.xe && (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.Vi.getScrollY())), (W = this.beginPullPos.y - this.Vi.getScrollY()) > 0 && (W = 0), this.be(Math.abs(W)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.Vi && this.Vi.getScrollY() < 0) {
                {
                  var W;
                  this.be && 1 === this.pullDir && this.be(0), this.Se && Math.round(this.Ve()) >= Math.round(this.ze) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.Vi.getScrollY())), (W = this.beginPullPos.y - this.Vi.getScrollY()) < 0 && (W = 0), this.Se(W), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
                }
              }
            }, D.prototype.xi = function () {
              if (this.Vi && this.Vi.getScrollY() > 0) this.Se && 2 === this.pullDir && this._e(0), this.de && this.Je() <= this.Ye && (this.pauseUpdate || (this.beginPullPos = cc.v2(this.Vi.getScrollY(), 0)), (W = this.beginPullPos.x - this.Vi.getScrollY()) > 0 && (W = 0), this.de(Math.abs(W)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.Vi && this.Vi.getScrollY() < 0) {
                var W;
                this.be && 1 === this.pullDir && this.de(0), this._e && this.Ke() >= this.qe && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(this.Vi.getScrollY(), 0)), (W = this.beginPullPos.x - this.Vi.getScrollY()) < 0 && (W = 0), this._e(W), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
              }
            }, D.prototype.En = function (W) {
              if (this.touchPos.y > W.touch.getLocation().y) this.Se && 2 === this.pullDir && this.Se(0), this.be && this.Fe() <= this.xe && (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.y - W.touch.getLocation().y) < 0 && (k = 0), this.be(k), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.touchPos.y < W.touch.getLocation().y) {
                {
                  var k;
                  this.be && 1 === this.pullDir && this.be(0), this.Se && Math.round(this.Ve()) >= Math.round(this.ze) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.y - W.touch.getLocation().y) > 0 && (k = 0), this.Se(Math.abs(k)), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
                }
              }
            }, D.prototype.jn = function (W) {
              {
                if (this.touchPos.x > W.touch.getLocation().x) this._e && 1 === this.pullDir && this._e(0), this.de && this.Je() <= this.Ye && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.x - W.touch.getLocation().x) < 0 && (k = 0), this.de(k), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);else if (this.touchPos.x < W.touch.getLocation().x) {
                  {
                    var k;
                    this.de && 2 === this.pullDir && this.de(0), this._e && this.Ke() >= this.qe && (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.x - W.touch.getLocation().x) > 0 && (k = 0), this._e(Math.abs(k)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);
                  }
                }
              }
            }, D.prototype.Ti = function (W, k) {
              if (H(this.touchPos, W.touch.getLocation()) >= 50 && W.stopPropagationImmediate(), !this.Ee && this.content.children.length) {
                if (this.pauseUpdate) {
                  {
                    if (this.vertical) {
                      var z = this.beginPullPos.y - W.touch.getLocation().y;
                      this.me && 1 === this.pullDir ? (z < 0 && (z = 0), this.me(z)) : this.ge && 2 === this.pullDir && (z > 0 && (z = 0), this.ge(Math.abs(z)));
                    } else z = this.beginPullPos.x - W.touch.getLocation().x, this.pe && 1 === this.pullDir ? (z > 0 && (z = 0), this.pe(Math.abs(z))) : this.ve && 2 === this.pullDir && (z < 0 && (z = 0), this.ve(z));
                    this.pullDir = null;
                  }
                }
                this.snapPause = false, this.requestSnap = true, m.prototype.Ti.call(this, W, k);
              }
            }, D.prototype.ki = function (W, k) {
              if (H(this.touchPos, W.touch.getLocation()) >= 50 && W.stopPropagationImmediate(), !this.Ee && this.content.children.length) {
                if (this.pauseUpdate) {
                  if (this.vertical) {
                    var z = this.beginPullPos.y - W.touch.getLocation().y;
                    this.me && 1 === this.pullDir ? (z < 0 && (z = 0), this.me(z)) : this.ge && 2 === this.pullDir && (z > 0 && (z = 0), this.ge(Math.abs(z)));
                  } else z = this.beginPullPos.x - W.touch.getLocation().x, this.pe && 1 === this.pullDir ? (z > 0 && (z = 0), this.pe(Math.abs(z))) : this.ve && 2 === this.pullDir && (z < 0 && (z = 0), this.ve(z));
                  this.pullDir = null;
                }
                this.snapPause = false, this.requestSnap = true, m.prototype.ki.call(this, W, k);
              }
            }, D.prototype.zi = function () {
              this.snapPause = true, this.setSnapDone(true);
            }, D.prototype.Ki = function () {
              if (!this.Ee) {
                if (this.pauseUpdate) {
                  {
                    if (this.vertical) {
                      var W = this.beginPullPos.y - this.Vi.getScrollY();
                      this.me && 1 === this.pullDir ? (W > 0 && (W = 0), this.me(Math.abs(W))) : this.ge && 2 === this.pullDir && (W < 0 && (W = 0), this.ge(W));
                    } else W = this.beginPullPos.x - this.Vi.getScrollY(), this.pe && 1 === this.pullDir ? (W > 0 && (W = 0), this.pe(Math.abs(W))) : this.ve && 2 === this.pullDir && (W < 0 && (W = 0), this.ve(W));
                    this.pullDir = null;
                  }
                }
                this.snapPause = false, this.requestSnap = true, this.autoSnap && this.Qe(), this.Vi = undefined;
              }
            }, D.prototype.qi = function (W, k) {
              if (this.elastic = this.originalElastic, !this.Ee && this.content.children.length && this.enabledInHierarchy && !this.Un(W, k)) {
                this.Vi = W;
                var z = cc.v2(0, 0);
                this.vertical ? (z = cc.v2(0, -0.1 * W.getScrollY()), this.Dn()) : this.horizontal && (z = cc.v2(-0.1 * W.getScrollY(), 0), this.xi()), this.Ji = 0, this.Yi(z), this.Qi || (this.Ei(), this.schedule(this.Xi, 1 / 60), this.Qi = true, this.zi()), this.Di(W);
              }
            }, D.prototype.Xi = function (W) {
              if (!this.Ee) {
                var k = this.Zi();
                if (!C(k, cc.v2(0, 0), 0.0001)) return this.$i(), this.unschedule(this.Xi), this.Qi = false, void this.Ki();
                this.Ji += W, this.Ji > 0.1 && (this.ts(), this.unschedule(this.Xi), this.Qi = false, this.Ki());
              }
            }, D.prototype.Wn = function (W) {
              var k = this.Fn(),
                z = k ? 0.05 : 1;
              this.Bn += W * (1 / z);
              var L,
                v = Math.min(1, this.Bn / this.Pn);
              this.Mn && (L = v, v = (L -= 1) * L * L * L * L + 1);
              var b = this.wn.add(this.An.mul(v)),
                U = v > 0.5;
              if (Math.abs(v - 1) <= this.getScrollEndedEventTiming() && !this.Hn && (this.Fi("scroll-ended-with-threshold"), this.Hn = true), this.elastic) {
                var Q = b.sub(this.Gn);
                k && (Q = Q.mul(z)), b = this.Gn.add(Q);
              } else {
                var w = b.sub(this.getContentPosition()),
                  P = this.Zi(w);
                P.fuzzyEquals(cc.v2(0, 0), 0.0001) || (b = b.add(P), U = true);
              }
              U && (this.yn = false);
              var R = b.sub(this.getContentPosition());
              this.xn(this.Vn(R), U), this.Fi("scrolling"), this.yn || (this.kn = false, this.Ln = false, this.Fi("scroll-ended"));
            }, D.prototype.Un = function () {
              return false;
            }, D.prototype.$i = function () {
              if (!this.zn() && this.inertia) {
                var W = this.Kn();
                !C(W, cc.v2(0, 0), 0.0001) && this.brake < 1 ? this.qn(W) : this.autoSnap && this.Qe();
              }
              this.ts();
            }, __decorate([M], D);
          }(x.default));
        y.default = q, cc._RF.pop();
      }
    }, I8],
    'HitPassThrough': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "c55eeQvpvBJQ70BFU5konXG", "HitPassThrough")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x,
          C = cc._decorator,
          H = C.ccclass,
          r = C.property;
        (function (M) {
          {
            M.gs = "_hitTest";
          }
        })(x || (x = {}));
        var V = function (M) {
          function q() {
            var m = null !== M && M.apply(this, arguments) || this;
            return m.passPoint = cc.v2(0, 0), m.passSize = cc.size(0, 0), m;
          }
          return __extends(q, M), q.prototype.onEnable = function () {
            var m = this;
            this.Jn = this.node[x.gs], this.node[x.gs] = function (D, W) {
              if (!m.Jn.call(this, D, W)) return false;
              for (var k = m.passPoint.x + this.x - m.passSize.width / 2, z = m.passPoint.y + this.y - m.passSize.height / 2, L = this.getParent(); null !== L; L = L.parent) k += L.x, z += L.y;
              var v = m.passSize.width,
                b = m.passSize.height,
                U = D.x - k,
                Q = k + v - D.x,
                w = z + b - D.y,
                P = D.y - z;
              return !(U >= 0 && Q >= 0 && w >= 0 && P >= 0);
            };
          }, q.prototype.onDisable = function () {
            this.node[x.gs] = this.Jn, this.Jn = undefined;
          }, __decorate([r(cc.Vec2)], q.prototype, "passPoint", undefined), __decorate([r(cc.Size)], q.prototype, "passSize", undefined), __decorate([H], q);
        }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, {}],
    'IdleState': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "9928eUmiH5DjJzRecinmoRP", "IdleState")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = O("AutoSpinHandler"),
            H = O("SlotGameConstants"),
            V = O("SlotAnalyticsEnum"),
            M = O("SystemFeatureHandler"),
            q = O("AnalyticsHelper"),
            m = O("GameEventHandler"),
            D = O("ButtonHitTest"),
            W = O("SettingMenuHelper"),
            k = O("Utils"),
            z = O("JakeSlotGameTemplate"),
            L = O("SpinButtonController"),
            b = O("SettingMenuHandlers"),
            U = function () {
              {
                function Q(w, P, R, T) {
                  undefined === T && (T = H.DEFAULT_AUTO_SPIN_DELAY_TIME), this.name = "Idle", this.dataSource = w, this.generalControllers = P.generalControllers, this.finalCallback = R, this.Yn = {
                    'dataSource': this.dataSource,
                    'autoSpinCount': C.getAutoSpinCount(),
                    'settingMenuHelper': W.settingMenuHelper,
                    'exitAutoSpinHandler': this.Qn.bind(this),
                    'callback': this.tryAutoSpin.bind(this)
                  }, this.Xn = T;
                }
                return Q.prototype.run = function () {
                  var w = this.Zn();
                  M.handleSystemEvent(w);
                }, Q.prototype.destroy = function () {
                  this.additionalDestroyCleanups(), this.disableSpinAction(), this.$n(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined;
                }, Q.prototype.tryAutoSpin = function () {
                  {
                    var w = this,
                      P = this.generalControllers.spinButtonController;
                    if (this.io(), P.isAutoSpin()) {
                      {
                        var R = this.dataSource,
                          T = R.playerModel.balance,
                          Y = R.transactionModel.accumulatedWinAmount,
                          X = W.settingMenuHelper.isBalanceHitTargetInAutoSpinMode(Y, T);
                        if (!C.shouldAutoSpin() || X) this.Qn(), this.so();else {
                          {
                            var E = this.eo(this.no.bind(this));
                            this.oo(function () {
                              w.enableSpinAction(), E && E();
                            });
                          }
                        }
                      }
                    } else this.so();
                  }
                }, Q.prototype.io = function () {
                  m.setGamePauseEventCallback(this.name, this.co.bind(this));
                }, Q.prototype.co = function () {
                  {
                    this.ho && this.$n(), m.emitGameNotifyPauseEvent();
                  }
                }, Q.prototype.ro = function () {
                  m.removeGamePauseEventCallback(this.name);
                }, Q.prototype.oo = function (w) {
                  {
                    m.setGameResumeEventCallback(this.name, w);
                  }
                }, Q.prototype.eo = function (w) {
                  {
                    var P = m.isGameStatePaused() ? 1 : 0;
                    return function () {
                      w && w(P);
                    };
                  }
                }, Q.prototype.ao = function () {
                  {
                    m.removeGameResumeEventCallback(this.name);
                  }
                }, Q.prototype.so = function () {
                  var w = this.generalControllers.spinButtonController;
                  w.enableButton(), w.idle(), this.onStateFullyIdle(), this.uo(), this.enableAvailableActions(), this.oo(this.enableSpinAction.bind(this));
                }, Q.prototype.lo = function (w) {
                  {
                    this.generalControllers.spinButtonController.isAutoSpin() ? (this.Qn(), this.so()) : this.fo(w);
                  }
                }, Q.prototype.do = function (w) {
                  if (!z.JSGTConfig.spaceBarInterrupterEnabled && D.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (w.keyCode) {
                    case H.SPIN_BUTTON_TRIGGER_KEY:
                      this.lo(V.SpinTrigger.SPACEBAR);
                  }
                }, Q.prototype.spinCashCredit = function (w) {
                  var P = this.generalControllers.spinButtonController;
                  W.settingMenuHelper.setWinAmount(0), P.isAutoSpin() && C.decrementAutoSpinCount(P), this.vo(w);
                }, Q.prototype.spinInvalidBet = function () {
                  this.Qn(), this.so();
                }, Q.prototype.spinInsufficientCredit = function (w) {
                  this.spinInvalidBet(w);
                }, Q.prototype.fo = function (w) {
                  var P = this,
                    R = this.generalControllers.spinButtonController;
                  R && R.mode === L.SpinButtonMode.DISABLED || this.preStartSpinAction(function () {
                    M.checkSpinValidity({
                      'getCostPerSpinFunction': P.getCostPerSpin.bind(P, w),
                      'dataSource': P.dataSource,
                      'callback': function (T) {
                        switch (T) {
                          case V.SpinCredits.CASH:
                            P.spinCashCredit(w);
                            break;
                          case V.SpinCredits.BET_INVALID:
                            P.spinInvalidBet(w);
                            break;
                          case V.SpinCredits.INSUFFICIENT:
                            P.spinInsufficientCredit(w);
                        }
                      }
                    });
                  });
                }, Q.prototype.$n = function () {
                  var w = this.ho;
                  this.ho = undefined, w && w();
                }, Q.prototype.vo = function (w) {
                  var P = this;
                  if (!this.dataSource.isGameReplaying) {
                    var R = W.settingMenuHelper.turboSpinOn ? "Turbo" : "Normal",
                      T = w === V.SpinTrigger.AUTOSPIN ? "Auto" : "Manual";
                    var Y = {};
                    Y.actionName = '' + R + T + "Spin";
                    q.sendAnalyticsEvent(Y);
                  }
                  this.disableAvailableActions(), this._o(), this.disableSpinAction(), this.preExitStateCleanups(), this.ro(), this.ao(), this.onExitState(function () {
                    var X = P.finalCallback;
                    P.finalCallback = undefined, P.destroy(), k.deferCallback(true)(function () {
                      k.deferCallback(true)(X);
                    });
                  });
                }, Q.prototype.onStateFullyIdle = function () {}, Q.prototype.additionalDestroyCleanups = function () {}, Q.prototype.preExitStateCleanups = function () {}, Q.prototype.enableAvailableActions = function () {}, Q.prototype.disableAvailableActions = function () {}, Q.prototype.preStartSpinAction = function (w) {
                  w && w();
                }, Q.prototype.defineSystemEventConfigParam = function () {
                  return {};
                }, Q.prototype.onExitState = function (w) {
                  w();
                }, Q.prototype.Zn = function () {
                  var w = this.defineSystemEventConfigParam();
                  return Object.assign(this.Yn, w);
                }, Q.prototype.uo = function () {
                  {
                    W.settingMenuHelper.autoSpinCallback = this.po.bind(this), b.setSettingMenuButtonsInteractable(W.settingMenuHelper, this.dataSource, true);
                  }
                }, Q.prototype._o = function () {
                  {
                    W.settingMenuHelper.autoSpinCallback = undefined, b.setSettingMenuButtonsInteractable(W.settingMenuHelper, this.dataSource, false);
                  }
                }, Q.prototype.enableSpinAction = function () {
                  this.generalControllers.spinButtonController.setOnClickCallback(this.lo.bind(this)), z.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
                }, Q.prototype.disableSpinAction = function () {
                  this.generalControllers.spinButtonController.clearOnClickCallback(), z.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
                }, Q.prototype.po = function () {
                  {
                    var w = this,
                      P = W.settingMenuHelper.autoSpinCount,
                      R = W.settingMenuHelper.singleWinAmount,
                      T = W.settingMenuHelper.balanceAmountMoreThan,
                      Y = W.settingMenuHelper.balanceAmountLessThan;
                    var X = {};
                    X.count = P;
                    X.single_win = R;
                    X.increment = T;
                    X.decrement = Y;
                    q.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_AUTO_SPIN, X), this._o(), this.disableAvailableActions(), C.startAutoSpin(P, this.generalControllers.spinButtonController, function () {
                      w.oo(w.no.bind(w, w.Xn));
                    });
                  }
                }, Q.prototype.Qn = function () {
                  var w = this.generalControllers.spinButtonController;
                  C.exitAutoSpin(w), w.idle(), this.$n(), this.enableAvailableActions(), this.uo(), this.oo(this.enableSpinAction.bind(this));
                }, Q.prototype.no = function (w) {
                  var P = this.dataSource.transactionModel.accumulatedWinAmount > 0 ? 0 : this.Xn;
                  P = w || P, this.ho = k.delayCallback(P)(this.fo.bind(this, V.SpinTrigger.AUTOSPIN));
                }, Q.prototype.getCostPerSpin = function (w) {
                  {
                    if (w === V.SpinTrigger.FEATURE_BUY) throw Error("overwrite getCostPerSpin function for support feature buy spin");
                    var P = this.dataSource.systemModel.maxLineNumber,
                      R = this.dataSource.transactionModel,
                      T = R.betSizeValue,
                      Y = R.betLevelValue;
                    return k.toDecimalWithExp(T * Y * P, 2);
                  }
                }, Q;
              }
            }();
          B.default = U, cc._RF.pop();
        }
      }
    }, I9],
    'InfobarController.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "b0244uO77dCEK0ZHUK0wXzg", "InfobarController.spec") || (Object.defineProperty(y, "__esModule", B), y.showWinEvent = undefined, y.showWinEvent = function (x) {
        if (x) {
          var C = System.get("automation") && System.get("automation").GameData;
          C && C.emit("ShowWin");
        }
      }, cc._RF.pop());
    }, {}],
    'InfobarController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "08edf/peCxFwrtPjYdXRHTM", "InfobarController")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C,
          H = O("CanvasResizeBroadcaster"),
          V = O("AutomationDecorator"),
          M = O("AudioManager"),
          q = O("InfobarController.spec"),
          m = O("GameRegionUtils");
        (function (L) {
          L[L.WIN = 0] = "WIN", L[L.NORMAL_TIPS = 1] = "NORMAL_TIPS";
        })(C || (C = {}));
        var D = cc._decorator,
          W = D.ccclass,
          k = D.property,
          z = function (L) {
            function v() {
              var U = null !== L && L.apply(this, arguments) || this;
              return U.infoBar = undefined, U.infoBarNode = undefined, U.infoBarMaskNode = undefined, U.normalMessageNode = undefined, U.winMessageNode = undefined, U.barFlare = undefined, U.secondBarShine = undefined, U.shineNode = undefined, U.barBackGlow = undefined, U.barFrontGlow = undefined, U.winAmountNode = undefined, U.winTextSprite = undefined, U.widgets = [], U.bo = [], U.mo = undefined, U.So = undefined, U.Co = undefined, U.yo = undefined, U.Mo = undefined, U.wo = undefined, U;
            }
            var b = {};
            b.func = q.showWinEvent;
            return __extends(v, L), Object.defineProperty(v.prototype, "infoBoardTipsController", {
              'get': function () {
                {
                  return this.So || (this.So = this.normalMessageNode.getComponent("InfoboardMessageController")), this.So;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(v.prototype, "numberDisplayController", {
              'get': function () {
                {
                  return this.Co || (this.Co = this.winAmountNode.getComponent("NumberDisplayController")), this.Co;
                }
              },
              'enumerable': false,
              'configurable': true
            }), v.prototype.init = function () {
              {
                this.Mo = H.default.subscribe(this.Ao.bind(this)), this.Ao();
              }
            }, v.prototype.setWinSF = function (U) {
              {
                this.mo = U;
              }
            }, v.prototype.setInfoTipsFont = function (U) {
              {
                this.normalMessageNode.getComponent(cc.Label).font = U;
              }
            }, v.prototype.runShine = function () {
              this.infoBarMaskNode.active = true, this.Po();
              var U = this.infoBarNode.width / 2 + this.shineNode.width / 2;
              this.shineNode.x = -U, this.shineNode.stopAllActions(), this.shineNode.runAction(cc.sequence(cc.callFunc(this.Bo, this), cc.moveTo(0.2, cc.v2(U, 0)).easing(cc.easeIn(1)), cc.callFunc(this.backToNormalBar, this)));
            }, v.prototype.setTips = function (U) {
              U && (this.bo = U);
            }, v.prototype.displayNormalTip = function () {
              this.wo !== C.NORMAL_TIPS && (this.wo = C.NORMAL_TIPS, this.normalMessageNode.active = true, this.winMessageNode.active = false, this.infoBoardTipsController.setSprites(this.bo), this.infoBoardTipsController.showInfoboardMessage(), this.infoBoardTipsController.clear(true));
            }, v.prototype.showWin = function (U, Q) {
              {
                m.checkUKGCRegion(U) && (this.wo = C.WIN, M.GeneralAudioPool.prize_win.play(), this.yo = Q, this.normalMessageNode.active = false, this.winMessageNode.active = true, this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(U), this.winTextSprite.spriteFrame = this.mo, this.Oo());
              }
            }, v.prototype.show = function () {
              this.node.runAction(cc.fadeIn(0.2));
            }, v.prototype.hide = function () {
              {
                this.node.runAction(cc.fadeOut(0.2));
              }
            }, v.prototype.backToNormalBar = function () {
              M.GeneralAudioPool.prize_win_end.play(), this.infoBar.runAction(cc.sequence(cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(this.Io, this)));
            }, v.prototype.Oo = function () {
              this.Go(), this.runShine();
            }, v.prototype.Bo = function () {
              this.No(), this.To(), this.Ho(), this.Ro();
            }, v.prototype.Ho = function () {
              this.infoBar.stopAllActions(), this.infoBar.runAction(cc.sequence(cc.scaleTo(0.1, 1), cc.scaleTo(0.1, 1.15)));
            }, v.prototype.Ro = function () {
              {
                this.normalMessageNode.runAction(cc.sequence(cc.scaleTo(0.2, 1.1).easing(cc.easeBackOut()), cc.scaleTo(0.2, 1).easing(cc.easeBackIn())));
              }
            }, v.prototype.No = function () {
              this.ko(), this.Lo();
            }, v.prototype.ko = function () {
              this.barBackGlow.active = true;
              var U = cc.spawn(cc.scaleTo(0.2, 1.05, 1).easing(cc.easeOut(1)), cc.fadeOut(0.2)),
                Q = cc.scaleTo(0.1, 0.95, 1.2),
                w = cc.sequence(Q, U);
              this.barBackGlow.stopAllActions(), this.barBackGlow.opacity = 255, this.barBackGlow.setScale(cc.v2(0, 0)), this.barBackGlow.runAction(w);
            }, v.prototype.Lo = function () {
              {
                this.barFrontGlow.active = true;
                var U = cc.spawn(cc.scaleTo(0.2, 1.01, 1.01).easing(cc.easeOut(1)), cc.fadeOut(0.2)),
                  Q = cc.fadeIn(0.1),
                  w = cc.sequence(Q, U);
                this.barFrontGlow.stopAllActions(), this.barFrontGlow.opacity = 0, this.barFrontGlow.setScale(cc.v2(1, 1)), this.barFrontGlow.runAction(w);
              }
            }, v.prototype.Po = function () {
              this.shineNode.active = true, this.secondBarShine.x = -5, this.secondBarShine.runAction(cc.sequence(cc.moveTo(0.6, cc.v2(15, this.secondBarShine.position.y)).easing(cc.easeSineInOut()), cc.moveTo(0.8, cc.v2(-25, this.secondBarShine.position.y)).easing(cc.easeSineInOut())));
            }, v.prototype.To = function () {
              {
                this.barFlare.active = true, this.barFlare.stopAllActions(), this.barFlare.setScale(cc.v2(0, 0)), this.barFlare.runAction(cc.sequence(cc.scaleTo(0.2, 7, 2), cc.scaleTo(0.1, 0)));
              }
            }, v.prototype.Ao = function () {
              this.widgets.forEach(function (U) {
                U.updateAlignment();
              });
            }, v.prototype.Io = function () {
              this.Eo();
              var U = this.yo;
              this.yo = undefined, U && U();
            }, v.prototype.Go = function () {
              this.infoBar.stopAllActions(), this.normalMessageNode.stopAllActions(), this.node.stopAllActions(), this.barFlare.stopAllActions(), this.barBackGlow.stopAllActions(), this.barFrontGlow.stopAllActions(), this.shineNode.stopAllActions();
            }, v.prototype.Eo = function () {
              this.barFlare.active = false, this.barBackGlow.active = false, this.barFrontGlow.active = false, this.shineNode.active = false, this.infoBarMaskNode.active = false;
            }, v.prototype.jo = function () {
              this.yo = undefined, this.bo.length = 0, this.wo = undefined;
            }, v.prototype.destroy = function () {
              {
                var U = this.Mo;
                return this.Mo = undefined, U && U(), this.jo(), this.Go(), this.node.destroy(), L.prototype.destroy.call(this);
              }
            }, __decorate([k(cc.Node)], v.prototype, "infoBar", undefined), __decorate([k(cc.Node)], v.prototype, "infoBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "infoBarMaskNode", undefined), __decorate([k(cc.Node)], v.prototype, "normalMessageNode", undefined), __decorate([k(cc.Node)], v.prototype, "winMessageNode", undefined), __decorate([k(cc.Node)], v.prototype, "barFlare", undefined), __decorate([k(cc.Node)], v.prototype, "secondBarShine", undefined), __decorate([k(cc.Node)], v.prototype, "shineNode", undefined), __decorate([k(cc.Node)], v.prototype, "barBackGlow", undefined), __decorate([k(cc.Node)], v.prototype, "barFrontGlow", undefined), __decorate([k(cc.Node)], v.prototype, "winAmountNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "winTextSprite", undefined), __decorate([k(cc.Widget)], v.prototype, "widgets", undefined), __decorate([V.automationDec(b)], v.prototype, "showWin", null), __decorate([W], v);
          }(cc.Component);
        B.default = z, cc._RF.pop();
      }
    }, Il],
    'InfoboardMessageController.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "9a894aU+wtPzI8aYY1BbeiI", "InfoboardMessageController.spec") || (Object.defineProperty(y, "__esModule", B), y.setWinAmount = y.setTotalAndWinText = undefined, y.setTotalAndWinText = function (x, C) {
        if (x || C) {
          var H = System.get("automation") && System.get("automation").GameData;
          H && H.emit(x ? "ShowTotalWin" : "ShowWin");
        }
      }, y.setWinAmount = function (x, C) {
        if (x && x > 0) {
          {
            var H = System.get("automation") && System.get("automation").GameData;
            H && H.emit(C ? "ShowTotalWin" : "ShowWin");
          }
        }
      }, cc._RF.pop());
    }, {}],
    'InfoboardMessageController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "f962cm61b9P6rw9Yco9B/O4", "InfoboardMessageController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x), B.InfoboardMessageOrderState = undefined;
          var C,
            H,
            V = O("NumberDisplayController"),
            M = O("NumberRollController"),
            q = O("Utils"),
            m = O("AutomationDecorator"),
            D = O("InfoboardMessageController.spec");
          (function (v) {
            v[v.SEQUENCE = 0] = "SEQUENCE", v[v.RANDOM = 1] = "RANDOM";
          })(C = B.InfoboardMessageOrderState || (B.InfoboardMessageOrderState = {})), function (v) {
            v.Do = "_fntConfig";
          }(H || (H = {}));
          var W = cc._decorator,
            k = W.ccclass,
            z = W.property,
            L = function (v) {
              function b() {
                var X = null !== v && v.apply(this, arguments) || this;
                return X.maskNode = undefined, X.padding = 40, X.label = undefined, X.winLabelColor = new cc.Color(), X.winLabelOutlineColor = new cc.Color(), X.tipsLabelColor = new cc.Color(), X.tipsLabelOutlineColor = new cc.Color(), X.enableWinOutline = true, X.enableTipsOutline = true, X.spriteMessageNode = undefined, X.sprite = undefined, X.numberRollController = undefined, X.numberDisplayController = undefined, X.winText = undefined, X.totalText = undefined, X.winDisplayNode = undefined, X.Uo = undefined, X.Wo = [], X.Fo = [], X.xo = [], X.Vo = [], X.zo = undefined, X.Ko = undefined, X.qo = undefined, X.Jo = undefined, X.Yo = 4, X.Qo = 3, X.Xo = 4, X.Zo = 3, X.$o = 0, X.tc = 650, X.ic = 1, X.sc = C.RANDOM, X.ec = 0, X.nc = -1, X.oc = undefined, X;
              }
              var U = {};
              U.get = function () {
                return this.Ko;
              };
              U.enumerable = false;
              U.configurable = true;
              var Q = {};
              Q.tooltip = false;
              var w = {};
              w.tooltip = false;
              var P = {};
              P.tooltip = false;
              var R = {};
              R.tooltip = false;
              var T = {};
              T.tooltip = false;
              var Y = {};
              Y.tooltip = false;
              return __extends(b, v), Object.defineProperty(b.prototype, "willExpire", U), b.prototype.onLoad = function () {
                {
                  if (shell.isRTLLanguage() && (this.ec = 1, this.nc = 1), this.winText) {
                    var X = this.winText.node.parent,
                      E = this.oc = X.getComponent(cc.Layout);
                    shell.isRTLLanguage() && (E.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT);
                  }
                }
              }, b.prototype.initNumberDisplayNodeEvent = function () {
                this.ic = this.winDisplayNode.scale, this.winDisplayNode.on("size-changed", this.resizeNumberDisplay, this);
              }, b.prototype.setNumberDisplayNodeWidth = function (X) {
                {
                  this.tc = X;
                }
              }, b.prototype.setEventMessage = function (X, E, F) {
                {
                  undefined === E && (E = true), undefined === F && (F = false), this.zo || (F && (this.label.node.color = this.tipsLabelOutlineColor, this.label.node.getComponent(cc.LabelOutline).enabled = this.enableTipsOutline), this.zo = false, this.qo = true, this.Ko = E, this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), X instanceof cc.SpriteFrame ? this.setSpriteMessage(X) : "string" == typeof X && this.setLabel(X));
                }
              }, b.prototype.clear = function (X) {
                undefined === X && (X = false), (this.zo || this.qo || X || this.sc !== C.RANDOM) && (this.sprite ? (this.unschedule(this.playRandomSpriteTips), this.playRandomSpriteTips()) : this.label && (this.unschedule(this.playRandomTips), this.playRandomTips()));
              }, b.prototype.stop = function () {
                this.sprite && this.sprite.node.stopAllActions(), this.label && this.label.node.stopAllActions();
              }, b.prototype.setLocalizedSpriteFrame = function (X, E) {
                this.winText.spriteFrame = X, this.totalText.spriteFrame = E;
              }, b.prototype.setSprites = function (X) {
                {
                  this.Fo = undefined, this.Fo = X, this.Vo = X.slice();
                }
              }, b.prototype.setOrderOfMessage = function (X) {
                undefined === X && (X = C.RANDOM), this.sc = X;
              }, b.prototype.setRandomSpriteScheduleTime = function (X, E) {
                undefined === X && (X = 4), undefined === E && (E = 3), this.Zo = E, this.Xo = X;
              }, b.prototype.playScheduleRandomSpriteTipsOverride = function () {
                var X = Math.floor(Math.random() * this.Zo) + this.Xo;
                this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, X);
              }, b.prototype.playScheduleRandomSpriteTips = function (X) {
                {
                  undefined === X && (X = 0), this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, X);
                }
              }, b.prototype.unscheduleRandomSpriteTips = function () {
                this.unschedule(this.playRandomSpriteTips);
              }, b.prototype.setTotalAndWinText = function (X, E) {
                this.totalText.node.active = X, this.winText.node.active = E, this.winDisplayNode.opacity = 255, this.oc && this.oc.updateLayout();
              }, b.prototype.showInfoboardMessage = function () {
                var X = this.maskNode.getComponent(cc.Mask);
                X && (X.enabled = true), this.spriteMessageNode.active = true;
              }, b.prototype.hideInfoboardMessage = function () {
                {
                  this.spriteMessageNode.active = false;
                  var X = this.maskNode.getComponent(cc.Mask);
                  X && (X.enabled = false);
                }
              }, b.prototype.showDisplayNumber = function (X, E) {
                undefined === E && (E = false), this.zo = true, this.winDisplayNode && this.winDisplayNode.setScale(this.ic), this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(X, E), this.oc && this.oc.updateLayout();
              }, b.prototype.clearDisplayNumber = function () {
                {
                  this.numberDisplayController.clear();
                }
              }, b.prototype.showNumberRoll = function (X, E, F, N, Z) {
                {
                  undefined === Z && (Z = true), this.qo = false, this.zo = true, this.Jo = N, this.winDisplayNode && this.winDisplayNode.setScale(this.ic), this.numberRollController.rollDuration = X, this.numberRollController.play(E, F, this.onNumberRollComplete.bind(this), Z);
                }
              }, b.prototype.skipNumberRoll = function () {
                this.numberRollController.skip(), this.onNumberRollComplete();
              }, b.prototype.clearNumberRoll = function () {
                this.numberRollController.stop();
              }, b.prototype.setSpriteMessage = function (X) {
                {
                  var E = this,
                    F = this.padding,
                    N = this.sprite,
                    Z = N.node;
                  Z.stopAllActions(), N.spriteFrame = X;
                  var p = this.maskNode.width;
                  if (Z.width * Z.scaleY + 2 * F > p) {
                    var g = this.nc;
                    Z.setAnchorPoint(this.ec, Z.anchorY), Z.setPosition(cc.v2((p / 2 - F) * g, Z.y)), this.Uo = Z.position;
                    var A = Z.width * Z.scaleY + 2 * F,
                      G = cc.delayTime(1.5),
                      J = cc.moveBy(A / 130, cc.v2(A * g, 0)),
                      S = undefined;
                    S = this.Ko ? cc.sequence(G, J, cc.callFunc(this.playScheduleRandomSpriteTips, this)) : cc.sequence(G, J, cc.callFunc(function () {
                      Z.position = E.Uo;
                    })).repeatForever(), Z.runAction(S);
                  } else {
                    if (Z.setAnchorPoint(0.5, Z.anchorY), Z.x = 0, !this.Ko) return;
                    q.deferCallback(true)(this.playScheduleRandomSpriteTipsOverride.bind(this));
                  }
                }
              }, b.prototype.playRandomSpriteTips = function () {
                this.zo = false, this.qo = false, this.Ko = true, 0 === this.Vo.length && (this.Vo = this.Fo.slice());
                var X = this.Vo;
                if (this.sc === C.RANDOM) {
                  {
                    var E = Math.floor(Math.random() * X.length);
                    if (X.length > 1) for (; this.sprite.spriteFrame === X[E];) E = Math.floor(Math.random() * X.length);
                    this.setSpriteMessage(X[E]), this.Vo.splice(E, 1);
                  }
                } else this.sc === C.SEQUENCE && (this.setSpriteMessage(X[0]), this.Vo.splice(0, 1));
              }, b.prototype.resizeNumberDisplay = function () {
                var X = this.tc,
                  E = this.winDisplayNode.width * this.ic,
                  F = E - X;
                if (F > 0) {
                  {
                    var N = this.ic - F / E;
                    this.winDisplayNode.scale = N;
                  }
                }
              }, b.prototype.onNumberRollComplete = function () {
                var X = this.Jo;
                this.zo = false, this.Jo = undefined, X && X();
              }, b.prototype.initLabelNodeY = function () {
                this.$o = this.label.node.y;
              }, b.prototype.setTips = function (X) {
                {
                  this.Wo = X, this.xo = X.slice();
                }
              }, b.prototype.setLocalizedFont = function (X) {
                {
                  this.label.font = X;
                }
              }, b.prototype.setLabelFontHeight = function (X) {
                undefined === X && (X = 0);
                var E = this.label.font;
                E[H.Do] && (this.label.lineHeight = E[H.Do].commonHeight + X);
              }, b.prototype.setWinLabelColor = function (X) {
                this.winLabelColor = X;
              }, b.prototype.setWinLabelOutlineColor = function (X) {
                this.winLabelOutlineColor = X;
              }, b.prototype.setTipsLabelColor = function (X) {
                this.tipsLabelColor = X;
              }, b.prototype.setTipsLabelOutlineColor = function (X) {
                this.tipsLabelOutlineColor = X;
              }, b.prototype.setWinAmount = function (X, E, F) {
                if (undefined === E && (E = false), undefined === F && (F = false), X && X > 0) {
                  this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), this.qo = false, this.zo = true, this.Ko = F;
                  var N = this.label.node,
                    Z = N.getComponent(cc.LabelOutline);
                  N.color = this.winLabelColor, Z && (Z.color = this.winLabelOutlineColor, Z.enabled = this.enableWinOutline);
                  var p = (E ? shell.I18n.t("InfoboardMessage.TotalWin") : shell.I18n.t("InfoboardMessage.Win")) + '\x20' + q.formatCurrency(X, '', '');
                  this.setLabel(p);
                }
              }, b.prototype.setRandomLabelScheduleTime = function (X, E) {
                undefined === X && (X = 4), undefined === E && (E = 3), this.Qo = E, this.Yo = X;
              }, b.prototype.scheduleRandomTips = function () {
                {
                  var X = Math.floor(Math.random() * this.Qo) + this.Yo;
                  this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, X);
                }
              }, b.prototype.playScheduleRandomTips = function (X) {
                undefined === X && (X = 0), this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, X);
              }, b.prototype.unscheduleRandomTips = function () {
                this.unschedule(this.playRandomTips);
              }, b.prototype.playRandomTips = function () {
                {
                  this.zo = false, this.qo = false, 1 !== this.Wo.length && (this.Ko = true), 0 === this.xo.length && (this.xo = this.Wo.slice());
                  var X = this.xo,
                    E = Math.floor(Math.random() * X.length),
                    F = this.label.node;
                  F.color = this.tipsLabelColor;
                  var N = F.getComponent(cc.LabelOutline);
                  N && (N.color = this.tipsLabelOutlineColor, N.enabled = this.enableTipsOutline), this.setLabel(X[E]), this.xo.splice(E, 1);
                }
              }, b.prototype.setLabel = function (X) {
                var E = this.label;
                E.string = X, E.node.y = 2 * this.maskNode.height, this.unschedule(this.determineOverFlow), this.scheduleOnce(this.determineOverFlow);
              }, b.prototype.determineOverFlow = function () {
                var X = this.label.node,
                  E = this.padding;
                X.width + 2 * E > this.maskNode.width ? this.scrollLabel() : (X.stopAllActions(), X.setAnchorPoint(0.5, X.anchorY), X.x = 0, this.Ko && this.scheduleRandomTips()), X.y = this.$o;
              }, b.prototype.scrollLabel = function () {
                var X = this.label,
                  E = this.padding,
                  F = X.node,
                  N = this.nc;
                F.stopAllActions(), F.setAnchorPoint(this.ec, F.anchorY), F.setPosition(cc.v2((this.maskNode.width / 2 - E) * N, F.y));
                var Z,
                  p = F.width + 2 * E,
                  g = cc.delayTime(1.5),
                  A = cc.moveBy(p / 130, cc.v2(p * N, 0));
                Z = this.Ko ? cc.sequence(g, A, cc.callFunc(this.playScheduleRandomTips, this)) : cc.sequence(g, A, cc.callFunc(this.scrollLabel, this)), F.runAction(Z);
              }, b.prototype.cc = function () {
                {
                  this.stop(), this.numberRollController.stop(), this.numberDisplayController.clear(), this.unschedule(this.scheduleRandomTips), this.unschedule(this.playRandomSpriteTips), this.unschedule(this.playRandomTips), this.padding = 40, this.tc = 650, this.$o = 0, this.sc = C.RANDOM, this.enableTipsOutline = true, this.enableWinOutline = true, this.zo = false, this.Wo = [], this.Fo = [], this.Vo = [], this.xo = undefined, this.Ko = undefined, this.qo = undefined, this.tipsLabelColor = undefined, this.tipsLabelOutlineColor = undefined, this.Jo = undefined;
                }
              }, b.prototype.destroy = function () {
                {
                  return this.cc(), this.node.destroy(), v.prototype.destroy.call(this);
                }
              }, __decorate([z({
                'type': cc.Node,
                'tooltip': false
              })], b.prototype, "maskNode", undefined), __decorate([z({
                'type': cc.Float,
                'tooltip': false
              })], b.prototype, "padding", undefined), __decorate([z({
                'type': cc.Label,
                'tooltip': false
              })], b.prototype, "label", undefined), __decorate([z(Q)], b.prototype, "winLabelColor", undefined), __decorate([z(w)], b.prototype, "winLabelOutlineColor", undefined), __decorate([z(P)], b.prototype, "tipsLabelColor", undefined), __decorate([z(R)], b.prototype, "tipsLabelOutlineColor", undefined), __decorate([z(T)], b.prototype, "enableWinOutline", undefined), __decorate([z(Y)], b.prototype, "enableTipsOutline", undefined), __decorate([z({
                'type': cc.Node,
                'tooltip': false
              })], b.prototype, "spriteMessageNode", undefined), __decorate([z({
                'type': cc.Sprite,
                'tooltip': false
              })], b.prototype, "sprite", undefined), __decorate([z({
                'type': M.default,
                'tooltip': false
              })], b.prototype, "numberRollController", undefined), __decorate([z({
                'type': V.default,
                'tooltip': false
              })], b.prototype, "numberDisplayController", undefined), __decorate([z({
                'type': cc.Sprite,
                'tooltip': false
              })], b.prototype, "winText", undefined), __decorate([z({
                'type': cc.Sprite,
                'tooltip': false
              })], b.prototype, "totalText", undefined), __decorate([z({
                'type': cc.Node,
                'tooltip': false
              })], b.prototype, "winDisplayNode", undefined), __decorate([m.automationDec({
                'func': D.setTotalAndWinText
              })], b.prototype, "setTotalAndWinText", null), __decorate([m.automationDec({
                'func': D.setWinAmount
              })], b.prototype, "setWinAmount", null), __decorate([k], b);
            }(cc.Component);
          B.default = L, cc._RF.pop();
        }
      }
    }, Ij],
    'InterruptableScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "ee1f5OrRUNIkJKtuzbwXtSX", "InterruptableScroller")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("SimpleStopScroller"),
          C = cc._decorator.ccclass,
          H = function (r) {
            function V(M, q) {
              var m = r.call(this, M, q) || this;
              return m.es = false, m;
            }
            return __extends(V, r), V.prototype.onStop = function () {
              r.prototype.onStop.call(this);
            }, V.prototype.interrupt = function () {
              this.es = true;
            }, V.prototype.resetInterrupt = function () {
              this.es = false;
            }, V.prototype.update = function (M) {
              if (M = this.rs += M, this.es && M > this.delay) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, void this.stop();
              if (M <= this.delay) return this.target.y = this.as - this.scrollSpeed * M, true;
              M -= this.delay;
              var q = this.ds;
              if (M < q) return this.target.y = this.hc - this.scrollSpeed * M - this._s * M * M, void this.emit("decelerate", 0, this);
              this.ns || (this.ns = true, this.emit("decelerate", 0, this)), M -= q;
              var m = this.bounceDuration;
              if (M < m) {
                var D = cc.misc.lerp(30, 0, M / m);
                this.target.y = this.os - D * Math.sin(30 * M);
              } else this.target.y = this.os, this.stop();
            }, __decorate([C], V);
          }(x.default);
        y.default = H, cc._RF.pop();
      }
    }, II],
    'JSONSerializer': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "1252bHHaiZC15bpK+5v9l5B", "JSONSerializer")) {
        var O = System.get("common").JSONSerializer;
        j.exports.JSONSerializer = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'JakeSlotGameTemplate': [function (O, y, B) {
      'use strict';

      var x = {};
      x.value = true;
      var C = {};
      C.spaceBarInterrupterEnabled = false;
      cc._RF.push(y, "e12d8fBWfBCyboZWCaBLXDu", "JakeSlotGameTemplate") || (Object.defineProperty(B, "__esModule", x), B.initJakeSlotGameTemplate = B.JSGTConfig = undefined, B.JSGTConfig = C, B.initJakeSlotGameTemplate = function (H) {
        {
          B.JSGTConfig = Object.freeze(H);
        }
      }, cc._RF.pop());
    }, {}],
    'LabelLocalized': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "f5f30hTmFFOcLgg2elp0I0D", "LabelLocalized")) {
        O.__esModule = true, O.default = undefined;
        var y = cc.Class({
          'extends': cc.Component,
          'editor': false,
          'properties': {
            'key': {
              'tooltip': false,
              'default': '',
              'notify': function () {
                this.rc();
              }
            }
          },
          'onLoad': function () {
            this.ac = this.node.getComponent(cc.Label), this.ac || (this.ac = this.node.getComponent(cc.RichText)), this.rc();
          },
          'rc': function () {
            var B = this.ac;
            B && (B.string = shell.I18n.t(this.key));
          }
        });
        O.default = y, j.exports = O.default, cc._RF.pop();
      }
    }, {}],
    'LabelTheme': [function (H, V, M) {
      'use strict';

      if (!cc._RF.push(V, "05b6c8yPn1LZIH3AnSTBq8U", "LabelTheme")) {
        M.__esModule = true, M.default = undefined;
        var q = {};
        q.uc = "_updateRichText";
        q.lc = "_isBold";
        q.fc = "_isItalic";
        var m,
          D = function (Y) {
            if (Y && Y.__esModule) return Y;
            if (null === Y || "object" != typeof Y && "function" != typeof Y) return {
              'default': Y
            };
            var X = T(undefined);
            if (X && X.has(Y)) return X.get(Y);
            var E = {},
              F = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var N in Y) if ("default" !== N && Object.prototype.hasOwnProperty.call(Y, N)) {
              var Z = F ? Object.getOwnPropertyDescriptor(Y, N) : null;
              Z && (Z.get || Z.set) ? Object.defineProperty(E, N, Z) : E[N] = Y[N];
            }
            return E.default = Y, X && X.set(Y, E), E;
          }(H("ResRC")),
          W = H("ResourceQualifierHelper"),
          k = H("Utils"),
          z = H("UIAppearanceHelper"),
          L = cc.Enum(q),
          v = (0, k.getCocosMajor)();
        m = "number" == typeof v && v >= 4 ? function (Y) {
          return Y.markForRender(true);
        } : function (Y) {
          {
            return Y.markForUpdateRenderData(true);
          }
        };
        var b = {};
        b.tooltip = false;
        b.default = '';
        var U = {};
        U.tooltip = false;
        U.default = "theme_font";
        var Q = {};
        Q.tooltip = false;
        Q.default = '';
        var w = {};
        w.tooltip = false;
        w.default = '';
        var P = {};
        P.tooltip = false;
        P.default = '';
        var R = cc.Class({
          'extends': cc.Component,
          'ctor': function () {},
          'editor': false,
          'properties': {
            'followThemeColor': false,
            'followFont': false,
            'domainKey': b,
            'colorKey': {
              'tooltip': false,
              'default': '',
              'notify': function () {
                this.dc();
              }
            },
            'fontFamilyKey': U,
            'fontKey': Q,
            'fontWeightKey': w,
            'fontStyleKey': P
          },
          'onLoad': function () {
            this.ac = this.node.getComponent(cc.Label), this.ac || (this.ac = this.node.getComponent(cc.RichText)), this.dc(), this.vc();
          },
          'dc': function () {
            if (this.followThemeColor) {
              var Y = this.node;
              if (this.domainKey, this.colorKey, Y && '' != this.colorKey) {
                var X = z.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey);
                Y.color = new cc.Color(X.r, X.g, X.b), Y.opacity = X.getA();
              }
            }
          },
          'vc': function () {
            var Y = this;
            if (this.followFont) {
              var X = this.ac;
              if (X) {
                if (X.offsetY = (0, z.getOffsetY)(), this.fontFamilyKey && this.domainKey) {
                  var E = z.uiAppearanceHelper.v(this.domainKey + '.' + this.fontFamilyKey);
                  this._c(E);
                }
                if (this.fontWeightKey) {
                  {
                    var F = this.fontWeightKey;
                    this.bc(F);
                  }
                }
                if (this.fontStyleKey) {
                  var N = this.fontStyleKey;
                  this.mc(N);
                }
                if (!this.fontFamilyKey && this.fontKey && this.domainKey) {
                  var Z = z.uiAppearanceHelper.v(this.domainKey + '.' + this.fontKey);
                  if ("object" == typeof Z) return void this.Sc(Z);
                  if (Z) {
                    var p = (0, W.getResourceURL)(Z);
                    return void (p && D.load(p, cc.Font, function (g, f) {
                      g || Y.Sc(f);
                    }));
                  }
                }
              }
            }
          },
          'Sc': function (Y) {
            var X = this.ac;
            cc.isValid(this.node) && (X.font = Y, X instanceof cc.Label ? m(X) : X instanceof cc.RichText && X[L.uc]());
          },
          '_c': function (Y) {
            var X = this.ac;
            cc.isValid(this.node) && (X.fontFamily = Y, X instanceof cc.Label ? m(X) : X instanceof cc.RichText && X[L.uc]());
          },
          'bc': function (Y) {
            {
              var X = this.ac;
              cc.isValid(this.node) && (X[L.lc] = Y, X instanceof cc.Label ? m(X) : cc.RichText);
            }
          },
          'mc': function (Y) {
            var X = this.ac;
            cc.isValid(this.node) && (X[L.fc] = Y, X instanceof cc.Label ? m(X) : cc.RichText);
          }
        });
        M.default = R, V.exports = M.default, cc._RF.pop();
      }
      function T(Y) {
        if ("function" != typeof WeakMap) return null;
        var X = new WeakMap(),
          E = new WeakMap();
        return (T = function (F) {
          return F ? E : X;
        })(Y);
      }
    }, Is],
    'LanternController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "471a4h25qhKAKjcn0RFwVqv", "LanternController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                {
                  var q = null !== V && V.apply(this, arguments) || this;
                  return q.lanternShine = undefined, q.lanternAnim = undefined, q;
                }
              }
              return __extends(M, V), M.prototype.moveLantern = function () {
                this.lanternAnim.play();
              }, M.prototype.shineLantern = function () {
                this.lanternShine.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(1.5, 200), cc.fadeTo(1.5, 100), cc.fadeTo(1.5, 255), cc.fadeTo(1.5, 150))));
              }, M.prototype.animComplete = function () {
                {
                  this.scheduleOnce(this.moveLantern, 5);
                }
              }, M.prototype.destroy = function () {
                return this.lanternAnim.stop(), this.lanternShine.stopAllActions(), this.unschedule(this.moveLantern), this.node.destroy(), V.prototype.destroy.call(this);
              }, __decorate([H(cc.Node)], M.prototype, "lanternShine", undefined), __decorate([H(cc.Animation)], M.prototype, "lanternAnim", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'LaunchConfig': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "9687e72GwxLXpeDvVqr6s0O", "LaunchConfig")) {
        var O = System.get("bvframework").LaunchConfig;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'ListViewCellUpdateAnim': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "5502dsWooBCr7Ubvh4+KVSO", "ListViewCellUpdateAnim")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator.ccclass,
          C = function () {
            {
              function H() {}
              return H.prototype.layoutDuration = function () {
                return 0.5;
              }, H.prototype.layoutDelay = function () {
                return 0.5;
              }, H.prototype.updateCellAmimation = function () {}, H.prototype.animationEnd = function () {}, __decorate([x], H);
            }
          }();
        y.default = C, cc._RF.pop();
      }
    }, {}],
    'ListViewEnum': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "1db1bgDOdFP2LjHMP1kDfIt", "ListViewEnum") || (Object.defineProperty(y, "__esModule", B), y.cellUpdateAction = y.scrollPosition = undefined, function (x) {
        x[x.scrollPositionTop = 0] = "scrollPositionTop", x[x.scrollPositionMiddle = 1] = "scrollPositionMiddle", x[x.scrollPositionBottom = 2] = "scrollPositionBottom";
      }(y.scrollPosition || (y.scrollPosition = {})), function (x) {
        x[x.cellUpdateActionInsert = 0] = "cellUpdateActionInsert", x[x.cellUpdateActionRemove = 1] = "cellUpdateActionRemove", x[x.cellUpdateActionUpdate = 2] = "cellUpdateActionUpdate";
      }(y.cellUpdateAction || (y.cellUpdateAction = {})), cc._RF.pop());
    }, {}],
    'ListView': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "3d710qNmRNP1LLRNNBcLNnF", "ListView")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("ListViewEnum"),
          C = cc._decorator,
          H = C.ccclass,
          V = C.property,
          M = function (D) {
            function W() {
              var z = null !== D && D.apply(this, arguments) || this;
              return z.view = undefined, z.contentWidget = undefined, z._i = {}, z.pi = {}, z.Cc = [], z.yc = 0, z.Mc = 0, z.wc = 0, z.Ac = 0, z.Pc = false, z.Bc = false, z.Oc = false, z.lt = undefined, z;
            }
            var k = {};
            k.get = function () {
              return this._i;
            };
            k.enumerable = false;
            k.configurable = true;
            return __extends(W, D), Object.defineProperty(W.prototype, "nodePools", k), Object.defineProperty(W.prototype, "templates", {
              'get': function () {
                {
                  return this.pi;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(W.prototype, "visibleCells", {
              'get': function () {
                return this.Cc;
              },
              'enumerable': false,
              'configurable': true
            }), W.prototype.onLoad = function () {
              this.content.originY = this.content.y;
            }, W.prototype.start = function () {
              D.prototype.start.call(this), cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.Ic, this);
            }, W.prototype.onDisable = function () {
              D.prototype.onDisable.call(this), this.content.off("position-changed", this.Gc, this), this.node.off("scroll-to-top", this.Nc, this), this.node.off("scroll-to-bottom", this.Tc, this), this.node.off("scroll-ended", this.Hc, this), this.node.off("scrolling", this.Rc, this), this.node.off("size-changed", this.gi, this);
            }, W.prototype.onEnable = function () {
              D.prototype.onEnable.call(this), this.content.on("position-changed", this.Gc, this), this.node.on("scroll-to-top", this.Nc, this), this.node.on("scroll-to-bottom", this.Tc, this), this.node.on("scroll-ended", this.Hc, this), this.node.on("scrolling", this.Rc, this), this.node.on("size-changed", this.gi, this), this.Bc && (this.reloadData(), this.Bc = false);
            }, W.prototype.viewWillLayoutSubviews = function () {}, W.prototype.viewDidLayoutSubviews = function () {
              var z = this.node.width,
                L = this.node.height;
              for (this.view.setContentSize(z, L), this.content.width = z; this.kc();) this.Lc();
              for (; this.Ec();) this.jc();
              for (; this.Dc();) this.Uc();
              for (; this.Wc();) this.Fc();
            }, W.prototype.setDataSource = function (z) {
              this.lt = z;
            }, W.prototype.register = function (z, L, v) {
              {
                if (this.nodePools[z]) ;else if (L) {
                  {
                    var b;
                    b = v ? new cc.NodePool(v) : new cc.NodePool(), this.templates[z] = L, this.nodePools[z] = b;
                  }
                }
              }
            }, W.prototype.dequeueReusableItem = function (z) {
              {
                var L,
                  v = this.nodePools[z];
                if (v) {
                  if (!(L = v.get())) {
                    {
                      var b = this.templates[z];
                      L = cc.instantiate(b);
                    }
                  }
                  L.lv_type = z;
                }
                return L;
              }
            }, W.prototype.reloadData = function () {
              {
                var z = this;
                if (this.lt) if (this.xc) {
                  {
                    this.stopAutoScroll();
                    var L = this.Cc,
                      U = this.wc = this.lt.getCount(this),
                      Q = 0,
                      w = 0,
                      P = 0;
                    if (L && L.length && L.length > 0 && (Q = (K = L[0]).listViewIndex, w = q(K), P = L[L.length - 1].listViewIndex), this.Pc = true, L && L.length && (0 === U || P >= U)) for (var R = L.length - 1; P >= U && (E = L[R]);) E && this.wi(E), P--, R--;
                    var T = this.Cc = [];
                    if (Q < U) {
                      for (var Y = 0, X = (R = Q, w); R < U && this.kc();) {
                        var E;
                        (E = this.Vc(R, L)) && this.wi(E), (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = X - G.height * G.anchorY, G.listViewIndex = R, Y += G.height, this.content.addChild(G), T.push(G), X = m(G), R++);
                      }
                      var F = this.content.originY - X - this.view.height;
                      if (this.content.height = Math.abs(X), Y < this.view.height && Q > 0) {
                        R = Q - 1;
                        for (var N = this.view.height - Y, Z = 0; R >= 0 && Z < N;) (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = A + G.height * (1 - G.anchorY), G.listViewIndex = R, Z += G.height, this.content.addChild(G), T.unshift(G), A = q(G), R--);
                        this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, F)), cc.callFunc(function () {
                          z.content.y = F, z.content.oldY = F, z.Pc = false, z.zc();
                        })));
                      } else this.Pc = false, this.zc();
                    } else {
                      for (Y = 0, R = U - 1, A = -U * this.Ac; R >= 0 && Y < this.view.height;) {
                        {
                          var G;
                          (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = A + G.height * (1 - G.anchorY), G.listViewIndex = R, Y += G.height, this.content.addChild(G), T.unshift(G), A = q(G), R--);
                        }
                      }
                      N = 0, Y > this.view.height ? N = Y - this.view.height : Y < this.view.height && this.Kc(true);
                      var J = this.content.originY + N;
                      this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, J)), cc.callFunc(function () {
                        z.content.y = J, z.content.oldY = J, z.Pc = false, z.zc();
                      })));
                    }
                    if (T.length && T.length > 0) {
                      var K = T[0],
                        l0 = T[T.length - 1];
                      this.Ac = (q(K) - m(l0)) / (l0.listViewIndex - K.listViewIndex + 1), this.content.height = this.Ac * U;
                    }
                  }
                } else this.Bc = true;
              }
            }, W.prototype.scrollToRow = function (z, L, v) {
              var b = this;
              undefined === L && (L = x.scrollPosition.scrollPositionTop), undefined === v && (v = true), this.stopAutoScroll();
              var U = this.content.y;
              if (!(z < 0 || z >= this.wc)) {
                var Q = this.Cc;
                if (Q && Q.length && !(Q.length <= 0)) {
                  this.content.off("position-changed", this.Gc, this);
                  var w = this.Mc = z;
                  Q = this.qc(w, Q), this.Cc = Q, 0 === Q[0].listViewIndex && this.Kc(true);
                  var P,
                    R,
                    T = this.itemAtIndex(z),
                    Y = Q.indexOf(T),
                    X = 0;
                  if (R = L === x.scrollPosition.scrollPositionTop ? 0 : L === x.scrollPosition.scrollPositionMiddle ? this.view.height / 2 - T.height * T.anchorY : this.view.height, L === x.scrollPosition.scrollPositionBottom) X = (X = R - (E = this.Jc(Y, Q, R, false))) >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) + T.height * T.anchorY - R + X;else if (L === x.scrollPosition.scrollPositionTop) {
                    var E = this.Jc(Y, Q, this.view.height - R, true);
                    X = (X = this.view.height - R - E) >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) - T.height * T.anchorY - R - X;
                  } else E = this.Jc(Y, Q, this.view.height - R, true), (X = this.view.height - R - E) <= 0 && (X = R - (E = this.Jc(Y - 1, Q, R, false))), X = X >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) - T.height * T.anchorY - R - X;
                  if (U === (P = P >= this.content.originY ? P : this.content.originY)) return this.content.y = P, this.content.oldY = P, this.Yc(w), void this.content.on("position-changed", this.Gc, this);
                  v ? this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(this.content.x, P)), cc.callFunc(function () {
                    b.content.y = P, b.content.oldY = P, b.Yc(w), b.content.on("position-changed", b.Gc, b);
                  }))) : (this.content.y = P, this.content.oldY = P, this.Yc(w), this.content.on("position-changed", this.Gc, this));
                }
              }
            }, W.prototype.visibleItems = function () {
              return this.Cc;
            }, W.prototype.itemAtIndex = function (z) {
              {
                return this.Vc(z, this.Cc);
              }
            }, W.prototype.insertCellAtIndex = function (z, L) {
              {
                var v = this;
                if (undefined === L && (L = true), !(z > this.wc)) {
                  this.stopAutoScroll(), this.wc += 1, this.content.height = this.Ac * this.wc;
                  var b = this.itemAtIndex(z),
                    U = this.Cc,
                    Q = this.Qc;
                  if (!b) {
                    var w = U[0];
                    return w.listViewIndex > z ? this.Xc(0, w.listViewIndex + 1) : this.kc() && this.Lc(), Q && Q.updateCellAmimation(null, x.cellUpdateAction.cellUpdateActionInsert), void (Q && Q.animationEnd());
                  }
                  var P = U.indexOf(b),
                    R = q(b),
                    T = this.lt.getItem(this, z);
                  T.x = 0, T.y = R - T.height * T.anchorY, T.listViewIndex = z, this.content.addChild(T), U.splice(P, 0, T), R = m(T), this.Xc(P + 1, z + 1), Q && Q.updateCellAmimation(T, x.cellUpdateAction.cellUpdateActionInsert), this.Zc(P + 1, R, x.cellUpdateAction.cellUpdateActionInsert, L, function () {
                    for (; v.Wc();) v.Fc();
                    v.$c(), v.th = false;
                  });
                }
              }
            }, W.prototype.removeCellAtIndex = function (z, L) {
              {
                var v = this;
                if (undefined === L && (L = true), !(z >= this.wc)) {
                  var b = this.Cc;
                  this.wc -= 1;
                  var U = this.itemAtIndex(z),
                    Q = this.Qc;
                  if (!U) {
                    var w = b[0];
                    return w.listViewIndex > z && this.Xc(0, w.listViewIndex - 1), Q && Q.updateCellAmimation(null, x.cellUpdateAction.cellUpdateActionRemove), void (Q && Q.animationEnd());
                  }
                  this.stopAutoScroll();
                  var P = b.indexOf(U),
                    R = q(U);
                  b.splice(P, 1), this.Xc(P, z), this.Qc ? Q.updateCellAmimation(U, x.cellUpdateAction.cellUpdateActionRemove, function () {
                    v.wi(U), U.removeFromParent();
                  }) : (this.wi(U), U.removeFromParent()), this.Zc(P, R, x.cellUpdateAction.cellUpdateActionRemove, L, function () {
                    for (; v.Dc();) v.Uc();
                    for (; v.kc();) v.Lc();
                    v.$c(), v.th = false;
                  });
                }
              }
            }, W.prototype.updateCellAtIndex = function (z, L) {
              {
                var v = this;
                undefined === L && (L = true);
                var b = this.itemAtIndex(z);
                if (b) {
                  var U = this.Cc,
                    Q = U.indexOf(b),
                    w = q(b),
                    P = b.height,
                    R = this.lt.getItem(this, z);
                  R && (this.wi(b), R.x = 0, R.y = w - R.height * R.anchorY, R.listViewIndex = z, this.content.addChild(R), U[Q] = R, P !== R.height) && (w = m(R), this.Zc(Q + 1, w, x.cellUpdateAction.cellUpdateActionUpdate, L, function () {
                    if (P < R.height) for (; v.Wc();) v.Fc();else for (; v.kc();) v.Lc();
                    v.$c(), v.th = false;
                  }));
                }
              }
            }, W.prototype.setScrollToTopCallback = function (z) {
              this.ih = z;
            }, W.prototype.setScrollToBottomCallback = function (z) {
              this.sh = z;
            }, W.prototype.setScrollEndedCallback = function (z) {
              this.eh = z;
            }, W.prototype.setScrollingCallback = function (z) {
              this.nh = z;
            }, W.prototype.setCellUpdateAnimCallback = function (z) {
              this.Qc = z;
            }, W.prototype.Ic = function () {
              {
                this.contentWidget && (this.contentWidget.isAlignTop = false);
              }
            }, W.prototype.wi = function (z) {
              var L,
                v = z.lv_type;
              v && (L = this.nodePools[v]), L && L.put(z);
            }, W.prototype.$c = function () {
              var z = this.Cc;
              if (z.length > 0) {
                var L = z[z.length - 1],
                  v = z[0],
                  b = Math.abs(L.y) + L.height * L.anchorY;
                b > this.content.height ? this.content.height = b : b < this.view.height && 0 === v.listViewIndex ? (this.content.y = this.content.originY, this.content.oldY = this.content.originY, this.content.height = b) : L.listViewIndex === this.wc - 1 && (this.content.height = b);
              } else this.content.height = 0;
            }, W.prototype.oh = function () {
              var z = this.Cc;
              if (z && z.length && !(z.length <= 0)) {
                var L = z[0],
                  v = q(L),
                  b = z[z.length - 1];
                0 !== L.listViewIndex || 0 === v ? v > -this.Ac && L.listViewIndex > 1 ? this.hh(true) : b.listViewIndex === this.wc - 1 && Math.abs(b.y) + b.height * b.anchorY < this.content.height ? this.hh(true) : Math.abs(b.y) + b.height * b.anchorY > this.content.height && this.hh(false) : this.hh(true);
              }
            }, W.prototype.hh = function (z, L) {
              undefined === L && (L = true), this.Pc = true, this.Kc(z), this.Pc = false, this.wn.y = this.content.y, L && this.rh();
            }, W.prototype.Kc = function (z) {
              var L = this.Cc;
              if (L && L.length && !(L.length <= 0)) {
                {
                  if (this.stopAutoScroll(), z) for (var v = -L[0].listViewIndex * this.Ac, b = 0; b < L.length;) (Q = L[b]).x = 0, Q.y = v - Q.height * Q.anchorY, v = m(Q), b++;else {
                    {
                      var U = -L[L.length - 1].listViewIndex * this.Ac;
                      for (b = L.length - 1; b >= 0;) {
                        var Q;
                        (Q = L[b]).x = 0, Q.y = U - Q.height * Q.anchorY + Q.height, U = q(Q), b--;
                      }
                    }
                  }
                  var w = L[0],
                    P = this.content.originY - m(w);
                  this.content.y = P, this.content.oldY = P, this.$c();
                }
              }
            }, W.prototype.rh = function () {
              this.yn = true, this.Pn = this.ah, this.Bn = 0, this.An = this.uh;
            }, W.prototype.kc = function () {
              {
                var z = false,
                  L = this.Cc;
                if (L.length > 0) {
                  {
                    var v = L[L.length - 1];
                    if (v.listViewIndex === this.wc - 1) return false;
                    var b = m(v),
                      U = this.content.convertToWorldSpaceAR(cc.v2(0, b)),
                      Q = m(this.view),
                      w = this.view.parent.convertToWorldSpaceAR(cc.v2(0, Q));
                    U.y >= w.y && (z = true);
                  }
                } else 0 === L.length && this.wc > 0 && (z = true);
                return z;
              }
            }, W.prototype.Dc = function () {
              {
                var z = false,
                  L = this.Cc;
                if (L.length > 0) {
                  var v = L[0];
                  if (0 === v.listViewIndex) return false;
                  var b = q(v),
                    U = this.content.convertToWorldSpaceAR(cc.v2(0, b)),
                    Q = q(this.view),
                    w = this.view.parent.convertToWorldSpaceAR(cc.v2(0, Q));
                  U.y <= w.y && (z = true);
                }
                return z;
              }
            }, W.prototype.Wc = function () {
              var z = false,
                L = this.Cc;
              if (L.length > 1) {
                {
                  var v = q(L[L.length - 1]),
                    b = this.content.convertToWorldSpaceAR(cc.v2(0, v)),
                    U = m(this.view),
                    Q = this.view.parent.convertToWorldSpaceAR(cc.v2(0, U));
                  b.y < Q.y && (z = true);
                }
              }
              return z;
            }, W.prototype.Ec = function () {
              var z = false,
                L = this.Cc;
              if (L.length > 1) {
                var v = m(L[0]),
                  b = this.content.convertToWorldSpaceAR(cc.v2(0, v)),
                  U = q(this.view),
                  Q = this.view.parent.convertToWorldSpaceAR(cc.v2(0, U));
                b.y > Q.y && (z = true);
              }
              return z;
            }, W.prototype.Lc = function () {
              {
                var z = this.Cc;
                if (z.length > 0) {
                  var L = this.wc,
                    v = z[z.length - 1],
                    b = v.listViewIndex + 1;
                  if (b < L) {
                    {
                      var U = this.lt.getItem(this, b),
                        Q = (U.lv_type, m(v));
                      U.x = 0, U.y = Q - U.height * U.anchorY, U.listViewIndex = b, this.content.addChild(U), z.push(U);
                    }
                  }
                }
              }
            }, W.prototype.Uc = function () {
              var z = this.Cc;
              if (z.length > 0) {
                {
                  var L = z[0],
                    v = L.listViewIndex - 1;
                  if (v >= 0) {
                    var b = this.lt.getItem(this, v),
                      U = (b.lv_type, q(L));
                    b.x = 0, b.y = U - b.height * b.anchorY + b.height, b.listViewIndex = v, this.content.addChild(b), z.unshift(b);
                  }
                }
              }
            }, W.prototype.jc = function () {
              var z = this.Cc;
              if (z.length > 0) {
                {
                  var L = z[0];
                  this.wi(L), z.shift();
                }
              }
            }, W.prototype.Fc = function () {
              var z = this.Cc;
              if (z.length > 0) {
                {
                  var L = z[z.length - 1];
                  this.wi(L), z.pop();
                }
              }
            }, W.prototype.lh = function () {
              var z = this.Cc;
              if (z.length > 0) for (var L = 0; L < z.length && this.Ec();) this.jc(), L++;
            }, W.prototype.fh = function () {
              {
                var z = this.Cc;
                if (z.length > 0) for (var L = z[z.length - 1]; L >= 0 && this.Wc();) this.Fc(), L--;
              }
            }, W.prototype.Yc = function (z) {
              this.lh(), this.fh();
              var L = this.Cc,
                b = this.itemAtIndex(z),
                U = L.indexOf(b);
              if (-1 !== U) {
                var w = [],
                  P = -1,
                  R = -1;
                if (L.length > Q) {
                  {
                    var T = L[Q],
                      Y = T.listViewIndex;
                    for (Q++, w.push(T); Q < L.length;) {
                      {
                        if ((X = (N = L[Q]).listViewIndex) - Y != 1) {
                          {
                            P = X;
                            break;
                          }
                        }
                        w.push(N), Q++, Y = X;
                      }
                    }
                    for (Q = U - 1, Y = T.listViewIndex; Q >= 0;) {
                      {
                        var X;
                        if (Y - (X = (N = L[Q]).listViewIndex) != 1) {
                          R = X;
                          break;
                        }
                        w.unshift(N), Q--, Y = X;
                      }
                    }
                  }
                }
                if (P >= 0) for (var E = this.itemAtIndex(P), F = L.indexOf(E); L.length > F;) {
                  {
                    var N = L[F];
                    this.wi(N), F++;
                  }
                }
                if (R >= 0) for (var Z = this.itemAtIndex(R), p = L.indexOf(Z); p >= 0;) N = L[p], this.wi(N), p--;
                this.Cc = w;
              }
            }, W.prototype.dh = function (z, L) {
              for (var v = this.Cc, b = v[0], U = v[v.length - 1], w = 0, P = []; Q < this.wc && w <= L && Q !== b.listViewIndex && Q !== U.listViewIndex;) {
                var R = this.lt.getItem(this, Q);
                R.listViewIndex = Q, this.content.addChild(R), P.push(R), w += R.height, Q++;
              }
              return P;
            }, W.prototype.vh = function (z, L) {
              for (var v = this.Cc, b = v[0], U = v[v.length - 1], w = 0, P = []; Q >= 0 && w <= L && Q !== b.listViewIndex && Q !== U.listViewIndex;) {
                var R = this.lt.getItem(this, Q);
                R.listViewIndex = Q, this.content.addChild(R), P.unshift(R), w += R.height, Q--;
              }
              return P;
            }, W.prototype._h = function (z, L) {
              if (!L || !L.length || L.length <= 0) return null;
              for (var v = 0; v < L.length; v++) {
                var b = L[v];
                b.x = 0, b.y = z - b.height * b.anchorY, z -= b.height;
              }
              return L;
            }, W.prototype.ph = function (z, L) {
              if (!L || !L.length || L.length <= 0) return null;
              for (var v = L.length - 1; v >= 0; v--) {
                var b = L[v];
                b.x = 0, b.y = z + b.height * b.anchorY, z += b.height;
              }
              return L;
            }, W.prototype.Jc = function (z, L, v, b) {
              var Q = 0;
              if (b) for (; w < L.length && !((Q += L[w].height) >= v); w++);else for (w = U; w >= 0 && !((Q += L[w].height) >= v); w--);
              return Q;
            }, W.prototype.qc = function (z, L) {
              var v,
                b,
                U = L[0],
                Q = L[L.length - 1],
                w = this.view.height;
              if (z >= U.listViewIndex && z <= Q.listViewIndex) v = this.dh(Q.listViewIndex + 1, w), b = this.vh(U.listViewIndex - 1, w), v = this._h(m(Q), v), (b = this.ph(q(U), b)) && (L = b.concat(L)), v && (L = L.concat(v));else {
                v = this.dh(P, w), P = z;
                var R = undefined;
                R = (b = this.vh(P - 1, w)) && v ? b.concat(v) : b || v, z > Q.listViewIndex ? (R = this._h(m(Q), R), L = L.concat(R)) : (R = this.ph(q(U), R)) && (L = R.concat(L));
              }
              return L;
            }, W.prototype.bh = function () {
              {
                var z = this.Cc;
                return !(z.length > 0) || z[z.length - 1].listViewIndex === this.wc - 1;
              }
            }, W.prototype.Vc = function (z, L) {
              if (!L || !L.length || L.length <= 0) return null;
              for (var v = null, b = 0; b < L.length;) {
                var U = L[b];
                if (U.listViewIndex === z) {
                  v = U;
                  break;
                }
                b++;
              }
              return v;
            }, W.prototype.zc = function () {
              this.$c(), this.lt.didReloadData && this.lt.didReloadData(this);
            }, W.prototype.Zc = function (z, L, v, b, U) {
              var Q = this,
                w = this.Qc;
              this.th = true;
              for (var P, R = this.Cc, T = w ? w.layoutDuration() : 0.5, Y = w ? w.layoutDelay(v) : 0, X = function (N) {
                  var Z = R[N],
                    p = Z.y,
                    g = L - Z.height * Z.anchorY;
                  L = g - Z.height * Z.anchorY, N === R.length - 1 && (P = Math.abs(g) + Z.height * Z.anchorY), p !== g && b ? Z.runAction(cc.sequence(cc.delayTime(Y), cc.moveTo(T, cc.v2(Z.x, g)), cc.callFunc(function () {
                    Z.y = g, N === R.length - 1 && (Q.mh(P), U && U(), w && w.animationEnd());
                  }))) : (Z.y = g, N === R.length - 1 && (E.mh(P), U && U(), w && w.animationEnd()));
                }, E = this; F < R.length; F++) X(F);
              z >= R.length && (U && U(), w && w.animationEnd());
            }, W.prototype.mh = function (z) {
              var L = z + this.content.originY - this.content.y - this.view.height;
              L < 0 && (this.content.oldY += L, this.content.y += L);
            }, W.prototype.Xc = function (z, L) {
              for (var v = this.Cc; b < v.length; b++) v[b].listViewIndex = L, L += 1;
            }, W.prototype.Gc = function () {
              var z = this.content,
                L = z.y - z.oldY;
              if (z.oldY = z.y, !this.Pc) {
                if (L > 0) {
                  {
                    for (; this.kc();) this.Lc();
                    for (; this.Ec();) this.jc();
                  }
                } else if (L < 0) {
                  for (; this.Dc();) this.Uc();
                  for (; this.Wc();) this.Fc();
                }
                this.oh();
              }
            }, W.prototype.Nc = function () {
              this.Sh = true;
            }, W.prototype.Tc = function () {
              {
                this.gh = true;
              }
            }, W.prototype.Hc = function () {
              this.eh && this.eh();
            }, W.prototype.Rc = function () {
              var z = this.Zi();
              this.nh && this.nh(z.y);
            }, W.prototype.gi = function () {
              {
                this.viewDidLayoutSubviews();
              }
            }, W.prototype.stopAutoScroll = function () {
              if (this.Pc) {
                this.ah = this.Pn - this.Bn;
                var z = Math.min(1, this.Bn / this.Pn);
                this.Mn && (v = z, z = (v -= 1) * v * v * v * v + 1), this.uh = (L = 1 - z, this.An.mul(L));
              }
              var L, v;
              D.prototype.stopAutoScroll.call(this);
            }, W.prototype.$i = function () {
              {
                var z = this;
                if (this.Sh && this.ih) {
                  {
                    var L = this.Zi();
                    this.ih(function () {
                      z.Sh = false, z.qn(cc.v2(0, 0));
                    }, L);
                  }
                } else this.gh && this.sh && this.bh() ? this.sh(function (v) {
                  z.gh = false;
                  var b = z.wc = z.lt.getCount(z);
                  z.content.height = z.Ac * b;
                  var U = z.Cc;
                  if (U && U.length && U.length > 0) {
                    var Q = U[U.length - 1].listViewIndex;
                    for (z.content.off("position-changed", z.Gc, z); Q < b && z.kc();) z.Lc(), Q += 1;
                    z.$c(), z.content.on("position-changed", z.Gc, z);
                  }
                  v && z.$i();
                }) : (this.Sh = false, this.gh = false, D.prototype.$i.call(this));
              }
            }, W.prototype.Ui = function (z) {
              {
                this.th || D.prototype.Ui.call(this, z);
              }
            }, __decorate([V(cc.Node)], W.prototype, "view", undefined), __decorate([V(cc.Widget)], W.prototype, "contentWidget", undefined), __decorate([H], W);
          }(cc.ScrollView);
        y.default = M, cc._RF.pop();
      }
      function q(D) {
        {
          return D.y - D.height * D.anchorY + D.height;
        }
      }
      function m(D) {
        return D.y - D.height * D.anchorY;
      }
    }, IO],
    'LoadingController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "f2eeenbzC5EvoQZ4qaDTbwm", "LoadingController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = O("GameAudioAdapter"),
            H = O("RtConfig"),
            V = O("GeneralAssetConfig"),
            M = O("CustomAssetConfig"),
            q = O("AudioAssetConfig"),
            D = O("AudioManager"),
            W = O("AnalyticsHelper"),
            k = O("QuitGameWithEvent"),
            z = O("ErrorHandler"),
            L = O("NoSoundAdapter"),
            U = O("ResourceLoader"),
            Q = O("SettingMenuHelper"),
            w = O("BVFrameworkEnum"),
            P = O("PGGDataSource"),
            R = cc._decorator,
            T = R.ccclass,
            Y = R.property,
            X = function (E) {
              {
                function F() {
                  {
                    var N = null !== E && E.apply(this, arguments) || this;
                    return N.backWorldHolder = undefined, N.paytableHolder = undefined, N.frontWorldHolder = undefined, N.bottomUIHolder = undefined, N.settingMenuHolder = undefined, N.clickEffectHolder = undefined, N.infobarHolder = undefined, N.bigWinHolder = undefined, N.piggyHolder = undefined, N.featurePiggyHolder = undefined, N.wildMultiplySpineHolder = undefined, N.spinButtonHolder = undefined, N.slotControllerHolder = undefined, N.footerBackgroundNode = undefined, N.Ch = new U.default(), N._t = undefined, N.yh = undefined, N;
                  }
                }
                return __extends(F, E), F.prototype.setup = function (N) {
                  {
                    this._t = N.generalControllers, this.Mh(), this.wh(), this.Ah(), this.footerBackgroundNode.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.spinButtonHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.settingMenuHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.bigWinHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50;
                  }
                }, F.prototype.loadBundle = function (N) {
                  {
                    shell.setProgressVisible(true), this.yh = N;
                    var Z = {
                      'bundle': [].concat(V.generalAssetConfig, q.audioAssetConfig, M.customAssetConfig),
                      'progressCallback': this.Ph.bind(this),
                      'retryHandling': this.Bh.bind(this),
                      'retryingCallback': this.Oh.bind(this),
                      'retryMessage': shell.I18n.t("General.ResourceRetryMessage")
                    };
                    this.Ch.loadBundle(Z).then(this.Ih.bind(this));
                  }
                }, F.prototype.Mh = function () {
                  {
                    var N = '1' === H.cs_Launch.noAudio ? L.default : C.default;
                    Q.settingMenuHelper.initAudio(N);
                  }
                }, F.prototype.wh = function () {
                  Object.keys(D.GeneralAudioPool).forEach(function (N) {
                    q.audioAssetConfig.push({
                      'name': N,
                      'type': U.LoaderType.CUSTOM,
                      'loadFunc': function (Z, A) {
                        {
                          D.loadAudio(D.GeneralAudioPool[N], function (G) {
                            G && A(G), Z(undefined);
                          });
                        }
                      }
                    });
                  });
                }, F.prototype.Ah = function () {
                  var N = {};
                  N.setting_menu = Q.settingMenuHelper.path + "prefab/setting_menu/setting_menu";
                  N.setting_menu_auto_spin_button = Q.settingMenuHelper.path + "prefab/others/spin_options_button";
                  N.setting_menu_more_menu_button = Q.settingMenuHelper.path + "prefab/others/more_menu_button";
                  N.setting_menu_setting_button = Q.settingMenuHelper.path + "prefab/others/sound_button";
                  N.setting_menu_minus_bet_button = Q.settingMenuHelper.path + "prefab/others/minus_bet_button";
                  N.setting_menu_plus_bet_button = Q.settingMenuHelper.path + "prefab/others/plus_bet_button";
                  N.setting_menu_turbo_spin_button = Q.settingMenuHelper.path + "prefab/others/turbo_spin_button";
                  Object.keys(Z).forEach(function (A) {
                    var G = {};
                    G.name = A;
                    G.url = Z[A];
                    G.type = cc.Prefab;
                    G.isLocalized = false;
                    M.customAssetConfig.push(G);
                  }), M.customAssetConfig.push({
                    'name': "setting_menu_sprite_atlas",
                    'url': Q.settingMenuHelper.path + "texture/hd/setting_menu_locale",
                    'type': cc.SpriteAtlas,
                    'isLocalized': true
                  });
                }, F.prototype.Oh = function (N) {
                  var Z = N > 0 ? N : undefined;
                  W.sendLoadFailReport(Z);
                }, F.prototype.Bh = function (N, Z, A, G) {
                  {
                    var J = shell.Error,
                      K = shell.ClientError,
                      l0 = new J(K.Domain, K.GameLoadResourceError),
                      l1 = G > 0 ? G : undefined;
                    W.sendLoadFailReport(l1);
                    var l2 = P.pgDataSource.gameLaunched ? z.ErrContext.Preload : z.ErrContext.Launch;
                    z.showError(l0, l2, function (l3) {
                      switch (l3) {
                        case z.ErrAction.Retry:
                          N && N();
                          break;
                        case z.ErrAction.Quit:
                          k.quitGameWithEvent("Load resource fail")();
                      }
                    });
                  }
                }, F.prototype.Ih = function (Z) {
                  var J,
                    K,
                    l0 = Z.setting_menu,
                    l1 = Z.setting_menu_auto_spin_button,
                    l2 = Z.setting_menu_more_menu_button,
                    l3 = Z.setting_menu_setting_button,
                    l4 = Z.setting_menu_minus_bet_button,
                    l5 = Z.setting_menu_plus_bet_button,
                    l6 = Z.setting_menu_turbo_spin_button,
                    l7 = Z.setting_menu_sprite_atlas,
                    l8 = Z.click_effect,
                    l9 = Z.wild_multipy_spine_controller,
                    ll = Z.slot_bg,
                    lj = Z.pay_select_effect,
                    lI = Z.backWorld,
                    ls = Z.pay_table_controller,
                    lO = Z.frontWorld,
                    ly = Z.bottom_ui,
                    lB = Z.spin_button_controller,
                    lx = Z.infobar_controller,
                    lC = Z.big_win_controller,
                    lH = Z.piggy_controller,
                    lr = Z.feature_particle,
                    lV = Z.big_win_text,
                    lM = Z.paytable_text,
                    lq = Z.wild,
                    lm = Z.infoboard_message_texture;
                  J = cc.instantiate(l0.result), this.settingMenuHolder.addChild(J), this.settingMenuHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, K = J.getComponent("SettingMenuController"), this._t.settingController = K, Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.SPIN_OPTIONS, l1.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.MORE_MENU, l2.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.SOUND, l3.result, true), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.MINUS_BET, l4.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.PLUS_BET, l5.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.TURBO_SPIN, l6.result, true), Q.settingMenuHelper.settingMenuLocaleIcons = l7.result, J = cc.instantiate(l8.result), this.clickEffectHolder.addChild(J), K = J.getComponent("ClickEffectController"), this._t.clickEffectController = K, J = cc.instantiate(l9.result), this.wildMultiplySpineHolder.addChild(J), K = J.getComponent("WildMultiplySpineManager"), this._t.wildMultiplySpineController = K, J = cc.instantiate(ll.result), this.slotControllerHolder.addChild(J), K = J.getComponent("SlotController"), this._t.slotController = K, this._t.fastSpinAnimationController = K.getFastSpinAnimationController(), this._t.scrollerManagerController = K.getScrollerManagerController(), J = cc.instantiate(lj.result), this._t.slotController.setPaySelectController(J), K = J.getComponent("PaySelectController"), this._t.paySelectController = K, J = cc.instantiate(lI.result), this.backWorldHolder.addChild(J), K = J.getComponent("BackWorldController"), this._t.backWorldController = K, J = cc.instantiate(lO.result), this.frontWorldHolder.addChild(J), K = J.getComponent("FrontWorldController"), this._t.frontWorldController = K, J = cc.instantiate(ls.result), this.paytableHolder.addChild(J);
                  var lD = lM.result,
                    lW = lq.result;
                  (K = J.getComponent("PayTableController")).init(), K.setPaytableAnyLocalizeSF(lD.getSpriteFrame("any_paytable")), K.setPaytableWildLocalizeSF(lW), this._t.payTableController = K, J = cc.instantiate(ly.result), this.bottomUIHolder.addChild(J), J = cc.instantiate(lB.result), this.spinButtonHolder.addChild(J), (K = J.getComponent("PGSpinButtonController")).init(), this._t.spinButtonController = K, J = cc.instantiate(lx.result), this.infobarHolder.addChild(J), K = J.getComponent("InfobarController"), this._t.infobarController = K, J = cc.instantiate(lC.result), this.bigWinHolder.addChild(J), K = J.getComponent("BigWinController");
                  var lk = lV.result;
                  K.setBigWinLocalizeSF(lk.getSpriteFrame("big_win")), K.setMegaWinlocalizeSF(lk.getSpriteFrame("mega_win")), K.setSuperMegaWinlocalizeSF(lk.getSpriteFrame("super_win")), this._t.bigWinController = K, J = cc.instantiate(lH.result), this.piggyHolder.addChild(J), K = J.getComponent("PiggyController"), this._t.piggyController = K, J = cc.instantiate(lr.result), this.featurePiggyHolder.addChild(J), K = J.getComponent("PiggyParticleFeatureManager"), this._t.featurePiggyController = K;
                  var lo = lm.result,
                    lz = [lo.getSpriteFrame("info_1"), lo.getSpriteFrame("info_2"), lo.getSpriteFrame("info_3")];
                  this._t.infobarController.setTips(lz), this._t.infobarController.setWinSF(lo.getSpriteFrame("win"));
                  var lc = this.yh;
                  this.yh = undefined, lc && lc();
                }, F.prototype.Ph = function (N, Z) {
                  shell.setProgress(N, Z);
                }, __decorate([Y(cc.Node)], F.prototype, "backWorldHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "paytableHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "frontWorldHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "bottomUIHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "settingMenuHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "clickEffectHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "infobarHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "bigWinHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "piggyHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "featurePiggyHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "wildMultiplySpineHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "spinButtonHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "slotControllerHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "footerBackgroundNode", undefined), __decorate([T], F);
              }
            }(cc.Component);
          B.default = X, cc._RF.pop();
        }
      }
    }, Iy],
    'MainFireWorkController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "ed2edCCqjtCGL8inu8cW2nX", "MainFireWorkController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              {
                function M() {
                  var q = null !== V && V.apply(this, arguments) || this;
                  return q.fireWork01Node = undefined, q.fireWork02Node = undefined, q.Gh = undefined, q.Nh = undefined, q;
                }
                return __extends(M, V), Object.defineProperty(M.prototype, "firework01Controller", {
                  'get': function () {
                    {
                      return undefined === this.Gh && (this.Gh = this.fireWork01Node.getComponent("FireworkController")), this.Gh;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object.defineProperty(M.prototype, "firework02Controller", {
                  'get': function () {
                    return undefined === this.Nh && (this.Nh = this.fireWork02Node.getComponent("FireworkController")), this.Nh;
                  },
                  'enumerable': false,
                  'configurable': true
                }), M.prototype.init = function () {
                  this.firework01Controller.cacheOriginalPosition(), this.firework02Controller.cacheOriginalPosition();
                }, M.prototype.play = function () {
                  this.node.active = true, this.firework01Controller.play(), this.firework02Controller.play();
                }, M.prototype.stop = function () {
                  this.node.active = false, this.firework01Controller.stop(), this.firework02Controller.stop();
                }, M.prototype.forceStop = function () {
                  this.node.active = false, this.firework01Controller.forceStop(), this.firework02Controller.forceStop();
                }, M.prototype.destroy = function () {
                  return this.stop(), this.node.destroy(), V.prototype.destroy.call(this);
                }, __decorate([H(cc.Node)], M.prototype, "fireWork01Node", undefined), __decorate([H(cc.Node)], M.prototype, "fireWork02Node", undefined), __decorate([C], M);
              }
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'Main': [function (x, H, V) {
      'use strict';

      if (!cc._RF.push(H, "63ec2Bqpe5I0b4nR5JeEEaF", "Main")) {
        var q = {};
        q.value = true;
        Object.defineProperty(V, "__esModule", q);
        var D = x("Transitions"),
          W = x("AudioManager"),
          k = x("UISetupHandler"),
          z = x("PGGAPIClient"),
          L = x("PGGDataSource"),
          U = x("SettingMenuHandlers"),
          Q = x("MultiResHandler"),
          R = x("AnalyticsHelper"),
          T = x("GameEventHandler"),
          Y = x("GameInitializationHandler"),
          X = x("RequestHandler"),
          E = x("NotifyHelper"),
          F = x("Utils"),
          N = x("SettingMenuHelper"),
          Z = x("BGMHandler"),
          J = x("PGGNormalGameState"),
          K = x("UIAppearanceHelper"),
          l0 = x("GameLayout"),
          l1 = x("PGSlotTransactionModel"),
          l2 = x("PGGRefreshWorldHandler"),
          l3 = x("TransactionStateMachineHandler"),
          l4 = x("SpinConfigHandler"),
          l5 = x("JakeSlotGameTemplate"),
          l6 = x("SpaceBarInterrupter"),
          l7 = cc._decorator,
          l8 = l7.ccclass,
          l9 = l7.property,
          ll = function (lj) {
            {
              function lI() {
                var ls = null !== lj && lj.apply(this, arguments) || this;
                return ls.settingInfoFooterPrefab = undefined, ls.generalControllers = Object.create(null), ls.Th = undefined, ls.I = undefined, ls.Hh = undefined, ls;
              }
              return __extends(lI, lj), lI.prototype.onLoad = function () {
                var ls = {};
                ls.enableSessionSocket = true;
                var lO = {};
                lO.spaceBarInterrupterEnabled = true;
                Y.initializeGame({
                  'autoDeductBalance': true,
                  'dataSource': L.pgDataSource,
                  'apiClient': z.pgApiClient,
                  'multiResHandler': Q.default,
                  'callback': this.Rh.bind(this),
                  'notifyConfig': {
                    'theme': E.ThemeType.SLOT,
                    'buttonColor': K.uiAppearanceHelper.v("game.theme_color"),
                    'buttonTitleColor': K.uiAppearanceHelper.v("game.white_color"),
                    'titleColor': K.uiAppearanceHelper.v("game.white_color"),
                    'messageColor': K.uiAppearanceHelper.v("game.white_color")
                  },
                  'socketConfig': ls,
                  'refreshWorldCallback': this.kh.bind(this),
                  'updateBalanceCallback': this.Lh.bind(this),
                  'updateAudioPlayRateCallback': W.updatePlayRate,
                  'gameTitle': {
                    'name': shell.I18n.t("PiggyGold.Name"),
                    'fontFamily': K.uiAppearanceHelper.v("game.theme_font_family")
                  },
                  'gameLayoutInfo': l0.gameLayout,
                  'betButtonClickCallback': this.Eh.bind(this),
                  'enablePerformanceTracker': true
                }), l5.initJakeSlotGameTemplate(lO);
              }, lI.prototype.Rh = function () {
                F.sequenceCallback(this.jh.bind(this), this.Dh.bind(this), this.Uh.bind(this), this.Wh.bind(this), this.Fh.bind(this), this.xh.bind(this), this.Vh.bind(this), this.zh.bind(this), F.deferCallback(true), this.Kh.bind(this), F.deferCallback(true), this.qh.bind(this), F.deferCallback(true), F.deferCallback(true), this.Jh.bind(this), F.deferCallback(true), F.deferCallback(true), this.Yh.bind(this), this.Qh.bind(this))(this.Xh.bind(this));
              }, lI.prototype.Zh = function () {
                this.$h(), this.tr();
              }, lI.prototype.ir = function () {
                var ls = this.I;
                ls && ls.destroy(), this.I = undefined, this.tr();
              }, lI.prototype.tr = function () {
                this.Hh = this.sr, F.deferCallback(this)(this.Hh);
              }, lI.prototype.sr = function () {
                {
                  var ls = this,
                    lO = new D.ToNormalSpinTransition();
                  var ly = {};
                  ly.generalControllers = this.generalControllers;
                  lO.run(ly, function () {
                    {
                      lO.destroy(), ls.er();
                    }
                  });
                }
              }, lI.prototype.er = function () {
                var ls = this.generalControllers;
                var lO = {};
                lO.generalControllers = ls;
                (this.I = new J.default(L.pgDataSource, lO, this.ir.bind(this))).run();
              }, lI.prototype.jh = function (ls) {
                {
                  var lO = {};
                  lO.minimumSpinningTime = 0.2;
                  lO.regularSpinningTime = 0.8;
                  lO.minimumSpinningTimeOffset = -0.9;
                  lO.regularSpinningTimeOffset = -0.9;
                  lO.jurisdictionModel = L.pgDataSource.systemModel.operatorJurisdiction;
                  l4.initSpinConfig(lO), ls && ls();
                }
              }, lI.prototype.Uh = function (ls) {
                var lO = {};
                lO.generalController = this.generalControllers;
                lO.apiClient = z.pgApiClient;
                lO.dataSource = L.pgDataSource;
                lO.settingMenuHelper = N.settingMenuHelper;
                l2.pgRefreshWorldHandler.initialize(lO), ls && ls();
              }, lI.prototype.kh = function (ls) {
                if (L.pgDataSource.transactionModel.previousGameState === l1.SpinType.NORMAL) {
                  var ly = L.pgDataSource.isGameReplaying,
                    lB = L.pgDataSource.isReplayStarted;
                  ly && (lB ? (L.pgDataSource.isReplayStarted = false, lO = function () {
                    {
                      ls && ls(), Z.bgmHandler.fadeInBgm(1);
                    }
                  }) : L.pgDataSource.isReplayStarted = true), l2.pgRefreshWorldHandler.refreshWorldByChangeWalletIdle(this.Yh.bind(this), lO);
                } else ls && ls();
              }, lI.prototype.nr = function (ls) {
                var lO = Date.now();
                return function () {
                  shell.ga.sendTiming(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO, Date.now() - lO), ls && ls();
                };
              }, lI.prototype.Dh = function (ls) {
                {
                  var lO = {};
                  lO.eatk = L.pgDataSource.systemModel.extraAssetTableKey;
                  R.sendEvent(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO), shell.setProgressVisible(false), E.showMessage(shell.I18n.t("General.LoadingInfo")), this.or(this.nr(ls), lO);
                }
              }, lI.prototype.or = function (ls, lO) {
                X.doAPIRequestWithWalletCheck({
                  'name': "Get Game Info",
                  'apiRequest': z.pgApiClient.getGameInfo.bind(z.pgApiClient),
                  'apiRequestParam': lO,
                  'errorTitle': shell.I18n.t("General.ErrorLaunchFailed"),
                  'retryMessage': shell.I18n.t("General.LoadingInfoRetry")
                }, this.cr(ls));
              }, lI.prototype.cr = function (ls) {
                {
                  return function (lO, ly) {
                    if (ly && ly.dt) {
                      var lB = L.pgDataSource.systemModel,
                        lx = lB.betLevelList,
                        lC = lB.betSizeList,
                        lH = lB.maxLineNumber,
                        lr = lB.featureBuy,
                        lV = L.pgDataSource.transactionModel,
                        lM = lV.betSizeValue,
                        lq = lV.betLevelValue,
                        lm = L.pgDataSource.playerModel.minimumBetAmount;
                      N.settingMenuHelper.betSizeList = lC, N.settingMenuHelper.betSizeValue = lM, N.settingMenuHelper.betLevelList = lx, N.settingMenuHelper.betLevelValue = lq, N.settingMenuHelper.betLineValue = lH, N.settingMenuHelper.minimumBetAmount = lm, N.settingMenuHelper.featureBuyThreshold = lr && lr.threshold, ls(lO, ly);
                    }
                  };
                }
              }, lI.prototype.Wh = function (ls) {
                W.init(), ls && ls();
              }, lI.prototype.xh = function (ls) {
                var lO = {};
                lO.generalControllers = this.generalControllers;
                this.Th = this.getComponent("LoadingController"), this.Th.setup(ly), ls && ls();
              }, lI.prototype.Vh = function (ls) {
                E.showMessage(shell.I18n.t("General.LoadingResource")), this.Th.loadBundle(ls);
              }, lI.prototype.Fh = function (ls) {
                {
                  var lO = {};
                  lO.apiClient = z.pgApiClient;
                  lO.dataSource = L.pgDataSource;
                  lO.settingMenuHelper = N.settingMenuHelper;
                  lO.isProgressiveGame = false;
                  lO.toggleEffectMuted = W.toggleEffectMuted;
                  lO.toggleMusicMuted = W.toggleMusicMuted;
                  lO.callback = ls;
                  U.setupSettingMenu(lO);
                }
              }, lI.prototype.zh = function (ls) {
                this.hr();
                var lO = this.generalControllers;
                var ly = {};
                ly.dataSource = L.pgDataSource;
                ly.settingMenuHelper = N.settingMenuHelper;
                ly.settingController = lO.settingController;
                ly.settingWalletPanelController = lO.settingMenuFooterController;
                ly.spinButtonController = lO.spinButtonController;
                ly.callback = ls;
                U.initializeSettingMenu(ly);
              }, lI.prototype.hr = function () {
                var ls = cc.instantiate(this.settingInfoFooterPrefab).getComponent("SettingInfoFooterController");
                this.generalControllers.settingMenuFooterController = ls;
              }, lI.prototype.Kh = function (ls) {
                var lO = this.generalControllers;
                k.settingMenuInteractable(false);
                var ly = lO.spinButtonController,
                  lB = lO.frontWorldController,
                  lx = lO.backWorldController,
                  lC = lO.bigWinController,
                  lH = lO.piggyController,
                  lr = lO.slotController;
                lr.setSpinTiming(l4.featureConfig.minimumSpinningTime, l4.featureConfig.regularSpinningTime), ly.init(), lC.init(), lH.init(), lB.play(), lx.init(), l6.spaceBarInterrupter.init({
                  'spinButtonClickCallback': ly.clickSpinButton.bind(ly),
                  'reelClickCallback': lr.onSlotRegionClicked.bind(lr)
                }), ls && ls();
              }, lI.prototype.qh = function (ls) {
                {
                  var lO = this.generalControllers,
                    ly = lO.slotController,
                    lB = L.pgDataSource.transactionModel,
                    lx = lB.fakeReels,
                    lC = lB.reels,
                    lH = lB.middleReelsMutiply;
                  ly.setClickEffectController(lO.clickEffectController), ly.init(lx, lC, lH, ls);
                }
              }, lI.prototype.Jh = function (ls) {
                var lO = this.generalControllers,
                  ly = lO.paySelectController,
                  lB = lO.wildMultiplySpineController;
                F.spawnCallback(ly.cacheLocalSlotPosition.bind(ly), lB.cacheLocalSlotPosition.bind(lB))(ls);
              }, lI.prototype.Yh = function (ls) {
                {
                  k.renderUIBaseOnState(ls, L.pgDataSource.transactionModel.stateTransitionFrom, L.pgDataSource.transactionModel.stateTransitionTo, this.generalControllers);
                }
              }, lI.prototype.Xh = function () {
                {
                  shell.setProgressVisible(false), E.showMessage(shell.I18n.t("General.LoadingCompleted")), shell.requestGameStart(true, this.Zh.bind(this)), L.pgDataSource.gameLaunched = true, this.rr();
                }
              }, lI.prototype.Qh = function (ls) {
                l3.initState("setup"), ls && ls();
              }, lI.prototype.rr = function () {
                {
                  T.subscribeGamePauseEvent(), T.subscribeGameResumeEvent();
                  var ls = this.generalControllers.spinButtonController;
                  T.setGamePlayUIBlockEventCallback(function (lO) {
                    lO ? ls.node.pauseSystemEvents(true) : ls.node.resumeSystemEvents(true);
                  });
                }
              }, lI.prototype.$h = function () {
                W.toggleAudioGameStarted(), Z.bgmHandler.startBgm();
              }, lI.prototype.Lh = function (ls) {
                {
                  N.settingMenuHelper.setBalance(ls);
                }
              }, lI.prototype.Eh = function () {
                L.pgDataSource.isGameReplaying && this.generalControllers.spinButtonController.clickSpinButton();
              }, __decorate([l9(cc.Prefab)], lI.prototype, "settingInfoFooterPrefab", undefined), __decorate([l8], lI);
            }
          }(cc.Component);
        V.default = ll, cc._RF.pop();
      }
    }, IB],
    'MediumPrizeController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "72a61RmRLhNGLB4kvMTTD0i", "MediumPrizeController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = j("SettingMenuHelper"),
          H = cc._decorator.ccclass,
          r = function () {
            {
              function V(M, q, m) {
                this.lt = undefined, this.ft = undefined, this.ar = undefined, this._t = undefined, this.pt = undefined;
                var D = M.transactionModel,
                  W = D.totalWinAmount,
                  k = D.accumulatedWinAmount;
                this.lt = M, this.ft = W, this.ar = k, this._t = q, this.pt = m;
              }
              return V.prototype.run = function () {
                var M = this,
                  q = this.ft,
                  m = this.ar;
                x.spawnCallback(this.ur(), this.gt(q), this.Ct(m), x.delayCallback(1))(function () {
                  M.pt && M.pt();
                });
              }, V.prototype.gt = function (M) {
                {
                  var q = this._t;
                  return function (m) {
                    0 !== M ? q.infobarController.showWin(M, m) : m && m();
                  };
                }
              }, V.prototype.ur = function () {
                var M = this._t;
                return function (q) {
                  M.piggyController.playSmallWin(), q && q();
                };
              }, V.prototype.Ct = function (M) {
                var q = this.lt;
                return function (m) {
                  {
                    var D = q.playerModel.balance;
                    C.settingMenuHelper.setBalance(D), C.settingMenuHelper.setWinAmount(M), m && m();
                  }
                };
              }, __decorate([H], V);
            }
          }();
        y.default = r, cc._RF.pop();
      }
    }, Ix],
    'MultiResHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "3ae3du76uBKurm1YFGdqj7/", "MultiResHandler")) {
        {
          var O = System.get("common").MultiResHandler;
          j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'NavigationBar': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "0dc7dijGWtKO4QKzl8UL9Pz", "NavigationBar")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.lr = undefined, q.animatedLayer = undefined, q.defaultLeftItem = undefined, q.rightItemContainer = undefined, q.leftItemContainer = undefined, q.middleItemContainer = undefined, q.titleLabel = undefined, q.background = undefined, q.shadow = undefined, q.dr = [], q.vr = false, q._r = undefined, q;
              }
              return __extends(M, V), Object.defineProperty(M.prototype, "navigator", {
                'get': function () {
                  return this.lr;
                },
                'set': function (q) {
                  {
                    this.lr = q;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "topItem", {
                'get': function () {
                  if (this.dr && this.dr.length > 0) return this.dr[this.dr.length - 1];
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "backItem", {
                'get': function () {
                  if (this.dr && this.dr.length > 1) return this.dr[this.dr.length - 2];
                },
                'enumerable': false,
                'configurable': true
              }), M.prototype.onLoad = function () {
                var q = this.node.width,
                  m = this.node.height;
                this.background.node.setContentSize(q, m), this.shadow.y = -m;
              }, M.prototype.getBarHeight = function (q, m) {
                var D = this.node.width,
                  W = q.height,
                  k = m.top,
                  z = W + k;
                return this.animatedLayer.setContentSize(D, W), this.animatedLayer.y = -k, this.node.height = z, this.shadow.y = -W, this.pr(q.item_space_x), z;
              }, M.prototype.pushItem = function (q, m) {
                if (q) {
                  var D = this.dr[this.dr.length - 1],
                    W = this.leftItemContainer.children[0],
                    k = this.middleItemContainer.children[1],
                    z = this.rightItemContainer.children[0],
                    L = D ? D.title : '',
                    v = D && !D.leftItem,
                    b = q.title,
                    U = undefined,
                    Q = undefined,
                    w = q.rightItem instanceof cc.Node ? q.rightItem : undefined,
                    P = true;
                  if (this.dr.push(q), this.vr = m, q.middleItem instanceof cc.Node && (Q = q.middleItem, q.title = ''), q.leftItem instanceof cc.Node) U = q.leftItem, P = false;else if (this.dr.length > 1) {
                    {
                      U = cc.instantiate(this.defaultLeftItem), this.br(U);
                      var R = U.children ? U.getComponentInChildren(cc.Label) : undefined;
                      R instanceof cc.Label && L && (R.string = L);
                    }
                  }
                  var T = {};
                  T.leftItem = W;
                  T.middleItem = k;
                  T.rightItem = z;
                  T.title = L;
                  T.useDefaultLeftItem = v;
                  var Y = {};
                  Y.leftItem = U;
                  Y.middleItem = Q;
                  Y.rightItem = w;
                  Y.title = b;
                  Y.useDefaultLeftItem = P;
                  m ? this.mr(T, Y) : (this.Sr(W), this.gr(this.leftItemContainer, U), this.Sr(k), this.gr(this.middleItemContainer, Q), this.Sr(z), this.gr(this.rightItemContainer, w), this.titleLabel.string = b, this._r = this.titleLabel.node.color, "land" === shell.environment.getOrientationMode() && (this.titleLabel.fontSize = 42, this.titleLabel.lineHeight = 50));
                }
              }, M.prototype.popItem = function (q) {
                {
                  var m = this.topItem;
                  if (m) {
                    var D = this.backItem;
                    if (this.dr.pop(), !D) return this.titleLabel.string = '', this.rightItemContainer.removeAllChildren(false), this.leftItemContainer.removeAllChildren(false), this.middleItemContainer.children[1] && this.middleItemContainer.children[1].removeFromParent(false), void (this._r = this.titleLabel.node.color);
                    var W = this.dr[this.dr.length - 2],
                      k = '';
                    W && !W.middleItem && (k = W.title);
                    var z = this.leftItemContainer.children[0],
                      L = this.middleItemContainer.children[1],
                      b = this.rightItemContainer.children[0],
                      U = L ? '' : m.title,
                      Q = !m.leftItem,
                      w = D.title,
                      P = undefined,
                      R = undefined,
                      T = D.rightItem instanceof cc.Node ? D.rightItem : undefined,
                      Y = true;
                    if (D.middleItem instanceof cc.Node && (R = D.middleItem, D.title = ''), D.leftItem instanceof cc.Node) P = D.leftItem, Y = false;else if (this.dr.length > 1) {
                      P = cc.instantiate(this.defaultLeftItem), this.br(P);
                      var X = P.children ? P.getComponentInChildren(cc.Label) : null;
                      X && (X.string = k);
                    }
                    var E = {};
                    E.leftItem = z;
                    E.middleItem = L;
                    E.rightItem = b;
                    E.title = U;
                    E.useDefaultLeftItem = Q;
                    var F = {};
                    F.leftItem = P;
                    F.middleItem = R;
                    F.rightItem = T;
                    F.title = w;
                    F.useDefaultLeftItem = Y;
                    q ? this.Cr(E, F) : (this.Sr(z), this.gr(this.leftItemContainer, P), this.Sr(L), this.gr(this.middleItemContainer, R), this.Sr(b), this.gr(this.rightItemContainer, T), this.titleLabel.string = w, this._r = this.titleLabel.node.color);
                  }
                }
              }, M.prototype.enableButtons = function () {
                var q = this.leftItemContainer.children[0],
                  m = this.rightItemContainer.children[0];
                if (q) {
                  var D = q.getComponent(cc.Button);
                  D && (D.interactable = true);
                }
                if (m) {
                  var W = m.getComponent(cc.Button);
                  W && (W.interactable = true);
                }
              }, M.prototype.disableButtons = function () {
                var q = this.leftItemContainer.children[0],
                  m = this.rightItemContainer.children[0];
                if (q) {
                  var D = q.getComponent(cc.Button);
                  D && (D.interactable = false);
                }
                if (m) {
                  {
                    var W = m.getComponent(cc.Button);
                    W && (W.interactable = false);
                  }
                }
              }, M.prototype.setTitleColor = function (q) {
                this.titleLabel.node.color = q;
              }, M.prototype.setTitleSize = function (q) {
                this.titleLabel.fontSize = q;
              }, M.prototype.removeItemsAtIndex = function (q) {
                {
                  this.dr.length <= q || this.dr.splice(q, 1);
                }
              }, M.prototype.yr = function (q) {
                q.node.setContentSize(this.titleLabel.node.width, this.titleLabel.node.height), q.string = this.titleLabel.string, q.fontSize = this.titleLabel.fontSize, q.lineHeight = this.titleLabel.lineHeight, q.verticalAlign = 1, this.titleLabel.font && (q.font = this.titleLabel.font);
              }, M.prototype.br = function (q) {
                {
                  var m = new cc.Component.EventHandler();
                  m.target = this.node, m.component = "NavigationBar", m.handler = "onLeftItemPressed", q.getComponent(cc.Button).clickEvents.push(m);
                }
              }, M.prototype.pr = function (q) {
                {
                  var m = this.node.width,
                    D = this.leftItemContainer,
                    W = -m / 2 + q + D.width / 2,
                    k = this.rightItemContainer,
                    z = m / 2 - q - k.width / 2;
                  D.x = W, k.x = z;
                }
              }, M.prototype.onLeftItemPressed = function () {
                var q = this.navigator;
                if (this.navigator.topController, q && q.topController) {
                  {
                    var m = this.vr;
                    this.navigator.popController(m);
                  }
                }
              }, M.prototype.mr = function (q, m) {
                {
                  var D = q.leftItem,
                    W = q.middleItem,
                    k = q.rightItem,
                    z = q.title,
                    L = q.useDefaultLeftItem,
                    v = m.leftItem,
                    b = m.middleItem,
                    U = m.rightItem,
                    Q = m.title,
                    w = m.useDefaultLeftItem,
                    P = !W && !b;
                  this.Mr(P, z, Q, W, b), this.wr(w, L, P, D, v), this.Ar(k, U);
                }
              }, M.prototype.Cr = function (q, m) {
                {
                  var D = q.leftItem,
                    W = q.middleItem,
                    k = q.rightItem,
                    z = q.title,
                    L = q.useDefaultLeftItem,
                    v = m.leftItem,
                    b = m.middleItem,
                    U = m.rightItem,
                    Q = m.title,
                    w = m.useDefaultLeftItem,
                    P = !W && !b;
                  this.Pr(P, z, Q, W, b), this.Br(w, L, P, D, v), this.Ar(k, U);
                }
              }, M.prototype.Mr = function (q, m, D, W, k, z) {
                if (q) {
                  var L = this.middleItemContainer,
                    b = this.leftItemContainer,
                    U = L.x - L.width * L.anchorX - b.x - b.width * (1 - b.anchorX);
                  if (m) {
                    var Q = this.titleLabel.node,
                      w = Q.parent.convertToWorldSpaceAR(cc.v2(Q.x, Q.y)),
                      P = this.animatedLayer.convertToNodeSpaceAR(w),
                      R = new cc.Node(),
                      T = R.addComponent(cc.Label);
                    R.parent = this.animatedLayer, R.position = P, T.node.color = this._r, this.yr(T);
                    var Y = cc.spawn(cc.moveBy(0.2, cc.v2(-U / 2, 0)).easing(cc.easeIn(3)), cc.fadeOut(0.2).easing(cc.easeIn(3)));
                    R.runAction(cc.sequence(Y, cc.callFunc(function () {
                      R.active = false, R.removeFromParent();
                    })));
                  }
                  L.x += U, L.opacity = 0, this.titleLabel.string = D;
                  var X = cc.spawn(cc.moveBy(0.3, cc.v2(-U, 0)).easing(cc.easeOut(3)), cc.fadeIn(0.3).easing(cc.easeIn(3)));
                  L.runAction(cc.sequence(cc.delayTime(0.1), X, cc.callFunc(function () {
                    L.active = true, L.opacity = 255, z && z();
                  })));
                } else this.Or(W, k, D, z);
              }, M.prototype.wr = function (q, D, W, k, z, L) {
                var U = this;
                if (q && D && W) {
                  var Q = undefined,
                    P = undefined,
                    R = undefined,
                    T = undefined;
                  if (k && k.children && (Q = k.getComponentInChildren(cc.Label), P = k.getComponentInChildren(cc.Sprite)), z && z.children && (R = z.getComponentInChildren(cc.Label), T = z.getComponentInChildren(cc.Sprite)), R) {
                    if (Q) {
                      var Y = Q.node,
                        X = Y.x,
                        E = Y.width,
                        F = Y.anchorX,
                        N = X - E * F - X - E * (1 - F),
                        Z = cc.spawn(cc.moveBy(0.2, cc.v2(2 * -N, 0)).easing(cc.easeOut(3)), cc.fadeOut(0.2).easing(cc.easeIn(3)));
                      Y.runAction(cc.sequence(Z, cc.callFunc(function () {
                        Y.active = false;
                      })));
                    }
                    var A = this.middleItemContainer,
                      G = this.leftItemContainer,
                      J = A.x - A.width * A.anchorX - G.x - G.width * (1 - G.anchorX),
                      K = T.node,
                      l0 = R.node;
                    z && G.addChild(z), K.active = false, l0.opacity = 0, l0.x += J / 2;
                    var l1 = cc.spawn(cc.moveBy(0.2, cc.v2(-J / 2, 0)).easing(cc.easeOut(3)), cc.fadeIn(0.2).easing(cc.easeIn(3)));
                    l0.runAction(cc.sequence(cc.delayTime(0.2), l1, cc.callFunc(function () {
                      l0.opacity = 255, K.active = true, k && k.removeFromParent(false), L && L();
                    })));
                  } else this.Ir(k, z, L);
                } else if (q && D && k) {
                  if (Q = undefined, P = undefined, k && k.children && (Q = k.getComponentInChildren(cc.Label), P = k.getComponentInChildren(cc.Sprite)), !Q || !P) return void this.Ir(k, z, L);
                  var l2 = P.node,
                    l3 = Q.node;
                  N = l3.x - l3.width * l3.anchorX - l2.x - l2.width * (1 - l2.anchorX), Z = cc.spawn(cc.moveBy(0.2, cc.v2(-N, 0)).easing(cc.easeOut(3)), cc.fadeOut(0.2).easing(cc.easeIn(3))), l3.runAction(cc.sequence(Z, cc.callFunc(function () {
                    k && k.removeFromParent(false), z && U.leftItemContainer.addChild(z), L && L();
                  })));
                } else this.Ir(k, z, L);
              }, M.prototype.Br = function (q, D, W, k, z, L) {
                if (q && D && W) {
                  var U = undefined,
                    Q = undefined,
                    w = undefined,
                    P = undefined;
                  if (k && k.children && (U = k.getComponentInChildren(cc.Label), Q = k.getComponentInChildren(cc.Sprite)), z && z.children && (w = z.getComponentInChildren(cc.Label), P = z.getComponentInChildren(cc.Sprite)), !w || !U) return void this.Ir(k, z, L);
                  var R = this.middleItemContainer,
                    T = this.leftItemContainer,
                    Y = R.x - R.width * R.anchorX - T.x - T.width * (1 - T.anchorX),
                    X = U.node,
                    E = Q.node,
                    F = X.x - X.width * X.anchorX - E.x - E.width * (1 - E.anchorX),
                    N = cc.spawn(cc.moveBy(0.2, cc.v2(Y / 2, 0)).easing(cc.easeOut(3)), cc.fadeOut(0.2).easing(cc.easeIn(3)));
                  if (z) {
                    X.runAction(cc.sequence(N, cc.callFunc(function () {
                      X.active = false;
                    })));
                    var Z = w.node,
                      A = P.node;
                    A.active = false, Z.opacity = 0, T.addChild(z), Z.x -= 2 * F;
                    var G = cc.spawn(cc.moveBy(0.2, cc.v2(2 * F, 0)).easing(cc.easeOut(3)), cc.fadeIn(0.2).easing(cc.easeIn(3)));
                    Z.runAction(cc.sequence(cc.delayTime(0.2), G, cc.callFunc(function () {
                      {
                        Z.opacity = 255, A.active = true, k && k.removeFromParent(false), L && L();
                      }
                    })));
                  } else X.runAction(cc.sequence(N, cc.callFunc(function () {
                    k && k.removeFromParent(false), L && L();
                  })));
                } else if (q && D) {
                  {
                    if (w = undefined, P = undefined, z && z.children && (w = z.getComponentInChildren(cc.Label), P = z.getComponentInChildren(cc.Sprite)), !w || !P) return void this.Ir(k, z, L);
                    var J = w.node,
                      K = P.node;
                    F = J.x - J.width * J.anchorX - K.x - K.width * (1 - K.anchorX), k && k.removeFromParent(false), z && this.leftItemContainer.addChild(z), J.opacity = 0, J.x -= 2 * F, G = cc.spawn(cc.moveBy(0.2, cc.v2(2 * F, 0)).easing(cc.easeOut(3)), cc.fadeIn(0.2).easing(cc.easeIn(3))), J.runAction(cc.sequence(cc.delayTime(0.2), G, cc.callFunc(function () {
                      J.opacity = 255, L && L();
                    })));
                  }
                } else this.Ir(k, z, L);
              }, M.prototype.Pr = function (q, m, D, W, k, z) {
                if (q) {
                  var L = this.leftItemContainer,
                    b = this.middleItemContainer,
                    U = b.x - b.width * b.anchorX - L.x - L.width * (1 - L.anchorX);
                  if (m) {
                    {
                      var Q = this.titleLabel.node.parent.convertToWorldSpaceAR(cc.v2(this.titleLabel.node.x, this.titleLabel.node.y)),
                        w = this.animatedLayer.convertToNodeSpaceAR(Q),
                        P = new cc.Node();
                      P.addComponent(cc.Label);
                      var R = P.getComponent(cc.Label);
                      P.parent = this.animatedLayer, R.node.color = this._r, P.position = w, this.yr(R);
                      var T = cc.spawn(cc.moveBy(0.2, cc.v2(U / 2, 0)).easing(cc.easeOut(3)), cc.fadeOut(0.2).easing(cc.easeOut(3)));
                      P.runAction(cc.sequence(T, cc.callFunc(function () {
                        P.active = false, P.removeFromParent();
                      })));
                    }
                  }
                  this.titleLabel.string = D, b.x -= U / 2, b.opacity = 0;
                  var Y = cc.spawn(cc.moveBy(0.3, cc.v2(U / 2, 0)).easing(cc.easeOut(3)), cc.fadeIn(0.3).easing(cc.easeIn(3)));
                  this.middleItemContainer.runAction(cc.sequence(cc.delayTime(0.1), Y, cc.callFunc(function () {
                    b.active = true, b.opacity = 255, z && z();
                  })));
                } else this.Or(W, k, D, z);
              }, M.prototype.Ir = function (q, m, D) {
                var W = this.leftItemContainer;
                q && q.removeFromParent(false), m && this.leftItemContainer.addChild(m), W.opacity = 0, W.runAction(cc.sequence(cc.fadeIn(0.3).easing(cc.easeOut(3)), cc.callFunc(function () {
                  {
                    D && D();
                  }
                })));
              }, M.prototype.Or = function (q, m, D, W) {
                {
                  var k = this.middleItemContainer;
                  q && q.removeFromParent(false), m && k.addChild(m), this.titleLabel.string = D, k.opacity = 0, k.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
                    W && W();
                  })));
                }
              }, M.prototype.Ar = function (q, m, D) {
                var W = this;
                q && q.removeFromParent(false), m && this.rightItemContainer.addChild(m), this.rightItemContainer.opacity = 0, this.rightItemContainer.runAction(cc.sequence(cc.fadeIn(0.3).easing(cc.easeOut(3)), cc.callFunc(function () {
                  W._r = W.titleLabel.node.color, D && D();
                })));
              }, M.prototype.Sr = function (q) {
                q && q.parent && q.removeFromParent(false);
              }, M.prototype.gr = function (q, m) {
                q && m && q.addChild(m);
              }, __decorate([H(cc.Node)], M.prototype, "animatedLayer", undefined), __decorate([H(cc.Prefab)], M.prototype, "defaultLeftItem", undefined), __decorate([H(cc.Node)], M.prototype, "rightItemContainer", undefined), __decorate([H(cc.Node)], M.prototype, "leftItemContainer", undefined), __decorate([H(cc.Node)], M.prototype, "middleItemContainer", undefined), __decorate([H(cc.Label)], M.prototype, "titleLabel", undefined), __decorate([H(cc.Sprite)], M.prototype, "background", undefined), __decorate([H(cc.Node)], M.prototype, "shadow", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'NavigationController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "d742diXy4tHCIVIgSy1jEIb", "NavigationController")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = O("ViewController"),
          H = O("NavigationBar"),
          V = O("TransitionEnum"),
          M = O("NavigationDefaultTransition"),
          q = O("TransitionContext"),
          m = O("UIKit"),
          D = O("TabBarItem"),
          W = cc._decorator,
          k = W.ccclass,
          z = W.property,
          L = function (v) {
            function b() {
              var U = null !== v && v.apply(this, arguments) || this;
              return U.defaultNavigationBar = undefined, U.statusBarPlaceholderNode = undefined, U.contentNode = undefined, U.Gr = undefined, U.Nr = [], U.Tr = false, U.Hr = undefined, U;
            }
            return __extends(b, v), Object.defineProperty(b.prototype, "controllers", {
              'get': function () {
                return this.Nr.slice();
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(b.prototype, "tabBarItem", {
              'get': function () {
                return this.Hr;
              },
              'set': function (U) {
                this.Hr = U;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(b.prototype, "topController", {
              'get': function () {
                var U = this.controllers;
                if (U && U.length > 0) return U[U.length - 1];
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(b.prototype, "backController", {
              'get': function () {
                {
                  var U = this.controllers;
                  if (U && U.length > 1) return U[U.length - 2];
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(b.prototype, "navigationBar", {
              'get': function () {
                {
                  return this.Gr || (this.Gr = this.defaultNavigationBar, this.Gr && (this.Gr.navigator = this)), this.Gr;
                }
              },
              'set': function (U) {
                {
                  if (U !== this.Gr) {
                    {
                      var Q = this.Gr;
                      this.Gr = U, this.Gr && (this.Gr.navigator = this), Q && (Q.navigator = undefined);
                    }
                  }
                }
              },
              'enumerable': false,
              'configurable': true
            }), b.prototype.onLoad = function () {
              var U = cc.Canvas.instance.designResolution,
                Q = U.height,
                w = U.width;
              this.node.setContentSize(w, Q), this.navigationBar.node.width = w;
              var P = "land" === shell.environment.getOrientationMode() ? m.NavigationConfigs.bar.landscape : m.NavigationConfigs.bar.portrait,
                R = this.navigationBar.getBarHeight(P, this.safeAreaInsets),
                T = Q - R;
              this.contentNode.setContentSize(w, T), this.contentNode.y = -R, this.statusBarPlaceholderNode.height = this.safeAreaInsets.top, this.node.on("size-changed", this.Rr, this);
            }, b.prototype.onEnable = function () {
              {
                var U = this.topController;
                U && (U.enabled = true);
              }
            }, b.prototype.onDisable = function () {
              var U = this.topController;
              U && (U.enabled = false);
            }, b.prototype.viewWillAppear = function (U) {
              var Q = this.topController;
              Q && Q.viewWillAppear(U);
            }, b.prototype.viewDidAppear = function (U) {
              {
                var Q = this.topController;
                Q && Q.viewDidAppear(U);
              }
            }, b.prototype.viewWillDisappear = function (U) {
              var Q = this.topController;
              Q && Q.viewWillDisappear(U);
            }, b.prototype.viewDidDisappear = function (U) {
              {
                var Q = this.topController;
                Q && Q.viewDidDisappear(U);
              }
            }, b.prototype.viewDidLayoutSubviews = function () {}, b.prototype.pushController = function (U, Q) {
              if (!this.Tr && U) {
                {
                  this.Tr = true;
                  var w = this.contentNode,
                    P = w.width,
                    R = w.height;
                  U.navigator = this, U.view.setContentSize(P, R);
                  var T = (U.node.anchorY - w.anchorY) * R,
                    Y = (U.node.anchorX - w.anchorX) * P;
                  Q && (Y = (U.node.anchorX - w.anchorX + 1) * P), U.view.setPosition(cc.v2(Y, T)), w.addChild(U.view), U.enabled = true, this.kr() ? U.viewWillAppear(Q) : Q = false;
                  var X = this.topController;
                  if (X && X.viewWillDisappear(Q), this.navigationBar.pushItem(U, Q), Q) {
                    {
                      var E = undefined,
                        F = this.navigationDelegate;
                      E = F && F.animationForOperation ? F.animationForOperation(V.NavigationControllerOperation.Push) : new M.DefaultNavigationPushTransition();
                      var N = X ? X.view : undefined,
                        Z = new q.TransitionContext(X, U, N, U.view, w),
                        p = this.Lr.bind(this, U, true);
                      E.animateTransition(Z, p);
                    }
                  } else this.Lr(U, false);
                }
              }
            }, b.prototype.popController = function (U) {
              var Q = this.topController,
                w = this.backController;
              if (!this.Tr && Q && w) if (this.Tr = true, w.enabled = true, w.viewWillAppear(U), Q.viewWillDisappear(U), this.navigationBar.popItem(U), U) {
                var P = undefined,
                  R = this.navigationDelegate;
                P = R && R.animationForOperation ? R.animationForOperation(V.NavigationControllerOperation.Pop) : new M.DefaultNavigationPopTransition();
                var T = new q.TransitionContext(Q, w, Q.view, w.view, this.contentNode),
                  Y = this.Er.bind(this, true);
                P.animateTransition(T, Y);
              } else this.Er(false);
            }, b.prototype.popToController = function (U, Q) {
              for (var w = this.controllers.length - Q; w;) {
                var P = this.topController;
                P && (P.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(P.view), this.Nr.pop(), P.node.destroy()), w -= 1;
              }
              this.popController(U);
            }, b.prototype.popToRootController = function (U) {
              for (var Q = this.controllers.length - 2; Q;) {
                {
                  var w = this.topController;
                  w && (w.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(w.view), this.Nr.pop(), w.node.destroy()), Q -= 1;
                }
              }
              this.popController(U);
            }, b.prototype.hideNavigationBarBackground = function () {
              this.navigationBar.background.node.active = false, this.navigationBar.shadow.active = false;
            }, b.prototype.showNavigationBarBackground = function () {
              {
                this.navigationBar.background.node.active = true, this.navigationBar.shadow.active = true;
              }
            }, b.prototype.hideNavigationBar = function (U) {
              undefined === U && (U = true), this.navigationBar.node.active = false, U && this.Rr();
            }, b.prototype.showNavigationBar = function (U) {
              undefined === U && (U = true), this.navigationBar.node.active = true, U && this.Rr();
            }, b.prototype.enableItems = function () {
              this.navigationBar.enableButtons();
            }, b.prototype.disableItems = function () {
              {
                this.navigationBar.disableButtons();
              }
            }, b.prototype.setControllers = function (U) {
              if (U && U.length && !(U.length < 1)) {
                for (var Q = this.controllers, w = Q.filter(function (Y) {
                    {
                      return U.indexOf(Y) < 0;
                    }
                  }), P = w.length - 1; P >= 0; P--) {
                  {
                    var R = w[P];
                    R.enabled = false, this.contentNode.removeChild(R.view);
                    var T = Q.indexOf(R);
                    this.navigationBar.removeItemsAtIndex(T), R.node.destroy();
                  }
                }
                this.Nr = U;
              }
            }, b.prototype.Rr = function () {
              {
                this.jr(), this.Dr();
              }
            }, b.prototype.jr = function () {
              var U = this.contentNode,
                Q = this.navigationBar.node.active ? this.navigationBar.node.height : this.statusBarPlaceholderNode.height,
                w = this.node.height - Q;
              U.setContentSize(this.node.width, w), U.y = -Q;
            }, b.prototype.Dr = function () {
              var U = this.contentNode,
                Q = U.width,
                w = U.height,
                P = U.anchorX,
                R = U.anchorY;
              this.controllers.forEach(function (T) {
                var Y = T.node,
                  X = (Y.anchorX - P) * Q,
                  E = (Y.anchorY - R) * w;
                T.viewWillLayoutSubviews(), Y.setContentSize(Q, w), Y.setPosition(cc.v2(X, E)), T.viewDidLayoutSubviews();
              });
            }, b.prototype.Lr = function (U, Q) {
              undefined === Q && (Q = false), this.kr() && U.viewDidAppear(Q);
              var w = this.topController;
              this.Nr.push(U), U.view.setContentSize(this.contentNode.width, this.contentNode.height), this.Tr = false, w && (w.viewDidDisappear(Q), w.enabled = false);
            }, b.prototype.Er = function (U) {
              undefined === U && (U = false);
              var Q = this.backController;
              Q && Q.viewDidAppear(U), this.scheduleOnce(this.Ur.bind(this, U));
            }, b.prototype.Ur = function (U) {
              var Q = this.topController;
              Q && (this.contentNode.removeChild(Q.view), this.Nr.pop(), this.Tr = false, Q.viewDidDisappear(U), Q.enabled = false, Q.destroy && Q.destroy(), Q.node.destroy());
            }, b.prototype.kr = function () {
              {
                return !(this.tabBarItem instanceof D.default && !this.topController);
              }
            }, __decorate([z(H.default)], b.prototype, "defaultNavigationBar", undefined), __decorate([z(cc.Node)], b.prototype, "statusBarPlaceholderNode", undefined), __decorate([z(cc.Node)], b.prototype, "contentNode", undefined), __decorate([k], b);
          }(C.default);
        B.default = L, cc._RF.pop();
      }
    }, IC],
    'NavigationDefaultTransition': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "2472eYgH9NBWJvtIuLXvIEh", "NavigationDefaultTransition")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.DefaultNavigationPopTransition = y.DefaultNavigationPushTransition = undefined;
          var x = j("ViewControllerTransition"),
            C = function (r) {
              function V() {
                {
                  return null !== r && r.apply(this, arguments) || this;
                }
              }
              return __extends(V, r), V.prototype.transitionDuration = function () {}, V.prototype.animateTransition = function (M, q) {
                var m = M.getToController(),
                  D = M.getFromController(),
                  W = M.getContainer(),
                  k = (D.node.anchorX - W.anchorX - 1) * W.width,
                  z = (D.node.anchorY - W.anchorY) * W.height;
                D.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(k, z)).easing(cc.easeSineIn()), cc.callFunc(function () {
                  D.node.setPosition(k, z);
                })));
                var L = (m.node.anchorX - W.anchorX) * W.width,
                  v = (m.node.anchorY - W.anchorY) * W.height;
                m.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(L, v)).easing(cc.easeSineIn()), cc.callFunc(function () {
                  m.node.setPosition(L, v), q && q();
                })));
              }, V.prototype.animationEnd = function () {}, V;
            }(x.default);
          y.DefaultNavigationPushTransition = C;
          var H = function (r) {
            function V() {
              {
                return null !== r && r.apply(this, arguments) || this;
              }
            }
            return __extends(V, r), V.prototype.transitionDuration = function () {}, V.prototype.animateTransition = function (M, q) {
              var m = M.getToController(),
                D = M.getFromController(),
                W = M.getContainer(),
                k = (D.node.anchorX - W.anchorX + 1) * W.width,
                z = (D.node.anchorY - W.anchorY) * W.height;
              D.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(k, z)).easing(cc.easeSineIn()), cc.callFunc(function () {
                {
                  D.node.setPosition(k, z);
                }
              })));
              var L = (m.node.anchorX - W.anchorX) * W.width,
                v = (m.node.anchorY - W.anchorY) * W.height;
              m.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(L, v)).easing(cc.easeSineIn()), cc.callFunc(function () {
                {
                  m.node.setPosition(L, v), q && q();
                }
              })));
            }, V.prototype.animationEnd = function () {}, V;
          }(x.default);
          y.DefaultNavigationPopTransition = H, cc._RF.pop();
        }
      }
    }, IH],
    'NoSoundAdapter': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "d85610Qhw9DzLM9jdvZsDKB", "NoSoundAdapter")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("Utils"),
            C = j("AudioAdapter"),
            H = {
              'load': function (m, D) {
                {
                  setTimeout(D, 0);
                }
              },
              'unload': function () {}
            },
            V = 2,
            M = function (m) {
              function D(W) {
                var k = m.call(this) || this;
                return k.Wr = false, k.T = 1, k.k = false, k.H = 1, k.ds = V, k.Fr = 0, k.xr = 0, k.Vr = k.Vr.bind(k), k.zr = k.zr.bind(k), k.reset(W), k;
              }
              return __extends(D, m), D.prototype.reset = function (W) {
                {
                  if (this.Fr = 0, this.xr = 0, undefined !== W) {
                    {
                      var k = W.loop,
                        z = W.volume,
                        L = W.muted,
                        v = W.rate,
                        b = W.duration;
                      "boolean" == typeof k && (this.k = k), "number" == typeof z && z >= 0 && z <= 1 && (this.T = z), "boolean" == typeof L && (this.Wr = L), "number" == typeof v && v > 0 && (this.H = v), "number" == typeof b && b > 0 && (this.ds = b);
                    }
                  }
                }
              }, D.prototype.destroy = function () {
                {
                  this.reset(), this.removeAll();
                }
              }, Object.defineProperty(D.prototype, "instantVolume", {
                'get': function () {
                  return this.T;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "volume", {
                'get': function () {
                  return this.T;
                },
                'set': function (W) {
                  {
                    this.T = W, this.Kr(undefined);
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "loop", {
                'get': function () {
                  return this.k;
                },
                'set': function (W) {
                  W !== this.k && (this.k = W, W ? this.qr(undefined) : this.Jr());
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "paused", {
                'get': function () {
                  {
                    return this.Fr > 0 && this.xr > 0;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "playing", {
                'get': function () {
                  {
                    return this.Fr > 0 && 0 === this.xr;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "stopped", {
                'get': function () {
                  return 0 === this.Fr && 0 === this.xr;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "rate", {
                'get': function () {
                  return this.H;
                },
                'set': function (W) {
                  "number" == typeof W && W > 0 && W !== this.H && (this.H = W);
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.pause = function () {
                {
                  this.paused || (this.xr = Date.now(), this.Kr(undefined), this.qr(undefined));
                }
              }, D.prototype.resume = function () {
                this.paused && (this.Fr += Date.now() - this.xr, this.xr = 0, this.k || this.Jr());
              }, Object.defineProperty(D.prototype, "muted", {
                'get': function () {
                  return this.Wr;
                },
                'set': function (W) {
                  this.Wr = W;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "duration", {
                'get': function () {
                  return this.ds;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "currentTime", {
                'get': function () {
                  return this.xr > 0 ? (this.xr - this.Fr) / 1000 % this.ds : (Date.now() - this.Fr) / 1000 % this.ds;
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.seek = function (W) {
                if (this.Kr(undefined), W >= this.ds && !this.k) return this.qr(undefined), this.Fr = 0, this.xr = 0, this.zr(), void this.emit(shell.WebAudioEvent.ENDED);
                this.paused && this.resume(), this.Fr = Date.now() - 1000 * W, this.k || this.Jr(), this.emit(shell.WebAudioEvent.SEEK);
              }, D.prototype.play = function (W, k) {
                this.Fr = Date.now(), this.ds = "number" == typeof k && k > 0 ? k : this.ds, this.k || this.Jr();
              }, D.prototype.Vr = function () {
                {
                  this.Yr && (this.Kr(undefined), this.zr()), this.Fr = 0, this.xr = 0, this.emit(shell.WebAudioEvent.ENDED);
                }
              }, D.prototype.stop = function () {
                this.Kr(undefined), this.qr(undefined), this.Fr = 0, this.xr = 0, this.emit(shell.WebAudioEvent.STOP);
              }, D.prototype.fade = function (W, k, z) {
                this.T = k, this.Kr(z);
              }, D.prototype.zr = function () {
                {
                  this.emit(shell.WebAudioEvent.FADED);
                }
              }, D.prototype.Jr = function () {
                var W = this.ds - this.currentTime;
                W >= 0 ? this.qr(W) : this.qr(undefined);
              }, D.prototype.qr = function (W) {
                var k = this.Qr;
                k && k(), this.Qr = null == W ? undefined : x.delayCallback(W)(this.Vr);
              }, D.prototype.Kr = function (W) {
                var k = this.Yr;
                k && k(), this.Yr = null == W ? undefined : x.delayCallback(W)(this.zr);
              }, D;
            }(shell.CustomEventTarget),
            q = function (m) {
              function D(W) {
                var k = this;
                return W.loader = H, (k = m.call(this, W) || this).Xr = W.estimatedDuration || V, k;
              }
              return __extends(D, m), D.prototype.getDuration = function (W) {
                {
                  return "number" == typeof W ? m.prototype.getDuration.call(this, W) : this.Xr;
                }
              }, D.prototype.getAudioFromPool = function () {
                var W = this.factory.get();
                var k = {};
                k.duration = this.Xr;
                var z = {};
                z.duration = this.Xr;
                return W ? (W.reset(k), W) : new M(z);
              }, D;
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, Ir],
    'NormalPrizeDecorator': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "106e2xHvchPlqWVXmeFLDHr", "NormalPrizeDecorator")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("SlotGameConstants"),
            C = j("SlotAnalyticsEnum"),
            H = j("AutoSpinHandler"),
            V = j("ButtonHitTest"),
            M = j("JakeSlotGameTemplate"),
            q = function () {
              function m(D, W) {
                this.name = "Normal Prize Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = D, this.generalControllers = W.generalControllers;
              }
              return m.prototype.destroy = function () {
                {
                  this.clearAvailableActions(), this.dataSource = undefined, this.generalControllers = undefined;
                }
              }, m.prototype.setAvailableActions = function () {
                var D = this.generalControllers.spinButtonController;
                D.isAutoSpin() && (D.setOnClickCallback(this.Zr.bind(this, C.SpinTrigger.CLICK)), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this));
              }, m.prototype.clearAvailableActions = function () {
                {
                  this.generalControllers.spinButtonController.clearOnClickCallback(), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
                }
              }, m.prototype.do = function (D) {
                if (!M.JSGTConfig.spaceBarInterrupterEnabled && V.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (D.keyCode) {
                  case x.SPIN_BUTTON_TRIGGER_KEY:
                    this.Zr(C.SpinTrigger.SPACEBAR);
                }
              }, m.prototype.Zr = function () {
                var D = this.generalControllers,
                  W = D.spinButtonController;
                H.exitAutoSpin(D.spinButtonController), this.clearAvailableActions(), W.disableButton();
              }, m;
            }();
          y.default = q, cc._RF.pop();
        }
      }
    }, IV],
    'NormalResultDecorator': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "94e3b2snKRKspFrhelPCcrj", "NormalResultDecorator")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("SlotStateMachine"),
          C = j("SlotAnalyticsEnum"),
          H = j("AutoSpinHandler"),
          V = j("SlotGameConstants"),
          M = j("ButtonHitTest"),
          q = j("JakeSlotGameTemplate"),
          m = j("SpinConfigHandler"),
          D = function () {
            function W(k, z) {
              this.triggerFastStop = undefined, this.name = "Normal Result Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = k, this.generalControllers = z.generalControllers;
            }
            return W.prototype.destroy = function () {
              {
                this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
              }
            }, W.prototype.setAvailableActions = function () {
              var k = this.generalControllers.spinButtonController;
              (k.isAutoSpin() || m.featureConfig.fastStopFeature && !this.$r()) && (k.setOnClickCallback(this.Zr.bind(this, C.SpinTrigger.CLICK)), q.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this));
            }, W.prototype.clearAvailableActions = function () {
              this.generalControllers.spinButtonController.clearOnClickCallback(), q.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
            }, W.prototype.renderFeature = function (k) {
              var z = this.generalControllers.spinButtonController;
              z.isAutoSpin() || this.clearAvailableActions(), z.stopSpin(), k && z.disableButton();
            }, W.prototype.fastStopTriggeredWhileSpinning = function () {
              this.ta();
            }, W.prototype.triggerFastStopWhileStopping = function () {
              {
                this.ta();
              }
            }, W.prototype.do = function (k) {
              if (!q.JSGTConfig.spaceBarInterrupterEnabled && M.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (k.keyCode) {
                case V.SPIN_BUTTON_TRIGGER_KEY:
                  this.Zr(C.SpinTrigger.SPACEBAR);
              }
            }, W.prototype.Zr = function (k) {
              {
                if (this.generalControllers.spinButtonController.isAutoSpin()) this.Qn();else if (this.triggerFastStop && m.featureConfig.fastStopFeature && !this.$r()) {
                  {
                    var z = this.triggerFastStop;
                    this.triggerFastStop = undefined, z(k);
                  }
                }
              }
            }, W.prototype.Qn = function () {
              var k = this.generalControllers,
                z = k.spinButtonController;
              H.exitAutoSpin(k.spinButtonController), m.featureConfig.fastStopFeature && !this.$r() || z.disableButton();
            }, W.prototype.ta = function () {
              this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
            }, W.prototype.$r = function () {
              return this.generalControllers.slotController.getStopStyle() === x.StopStyle.FAST;
            }, W;
          }();
        y.default = D, cc._RF.pop();
      }
    }, IM],
    'NormalSpinButtonController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "cf150DqXjNKya/LvYgDW43R", "NormalSpinButtonController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.normalSpinHolder = undefined, q.arrowSpriteNode = undefined, q.arrowSprite = undefined, q.arrowNormalSprite = undefined, q.arrowBlurSprite = undefined, q.arrowGreySprite = undefined, q.arrowGreyBlurSprite = undefined, q;
            }
            return __extends(M, V), M.prototype.init = function () {
              this.arrowSprite.spriteFrame = this.arrowNormalSprite, this.ia(), this.show(false);
            }, M.prototype.setSpriteFrame = function (q, m, D, W) {
              this.arrowNormalSprite = q, this.arrowBlurSprite = m, this.arrowGreySprite = D, this.arrowGreyBlurSprite = W;
            }, M.prototype.setIdleLook = function () {
              this.arrowSprite.spriteFrame = this.arrowNormalSprite, this.ia();
            }, M.prototype.setSpinningLook = function () {
              this.arrowSprite.spriteFrame = this.arrowBlurSprite, this.sa();
            }, M.prototype.setFastSpinLook = function () {
              this.arrowSprite.spriteFrame = this.arrowGreyBlurSprite, this.sa();
            }, M.prototype.setFastStopLook = function () {
              {
                this.arrowSprite.spriteFrame = this.arrowGreyBlurSprite, this.arrowSpriteNode.stopAllActions();
              }
            }, M.prototype.setStopLook = function () {
              {
                this.arrowSprite.spriteFrame = this.arrowGreySprite, this.arrowSpriteNode.stopAllActions();
              }
            }, M.prototype.show = function (q) {
              undefined === q && (q = true), this.normalSpinHolder.active = true, this.normalSpinHolder.stopAllActions(), q ? (this.normalSpinHolder.opacity = 0, this.normalSpinHolder.runAction(cc.fadeIn(0.3))) : this.normalSpinHolder.opacity = 255;
            }, M.prototype.hide = function () {
              this.arrowSpriteNode.stopAllActions(), this.normalSpinHolder.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(this.ea, this)));
            }, M.prototype.ea = function () {
              this.normalSpinHolder.active = false;
            }, M.prototype.ia = function () {
              this.arrowSpriteNode.runAction(cc.repeatForever(cc.rotateBy(4, 360)));
            }, M.prototype.sa = function () {
              {
                this.arrowSpriteNode.runAction(cc.repeatForever(cc.rotateBy(0.4, 360)));
              }
            }, M.prototype.q = function () {
              this.arrowSpriteNode.stopAllActions(), this.normalSpinHolder.stopAllActions();
            }, M.prototype.destroy = function () {
              {
                return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
              }
            }, __decorate([H(cc.Node)], M.prototype, "normalSpinHolder", undefined), __decorate([H(cc.Node)], M.prototype, "arrowSpriteNode", undefined), __decorate([H(cc.Sprite)], M.prototype, "arrowSprite", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'NormalSpinDecorator': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "2e3a0I2XG9HlaoLlfg0FwUG", "NormalSpinDecorator")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = O("SlotStateMachine"),
            H = O("AutoSpinHandler"),
            V = O("SlotAnalyticsEnum"),
            M = O("SlotGameConstants"),
            q = O("ButtonHitTest"),
            m = O("SettingMenuHelper"),
            D = O("JakeSlotGameTemplate"),
            W = O("SpinConfigHandler"),
            k = function () {
              function z(L, v) {
                this.triggerFastStop = undefined, this.name = "Normal Spin Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = L, this.generalControllers = v.generalControllers;
              }
              return z.prototype.destroy = function () {
                this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
              }, z.prototype.stateWillStartSpin = function () {
                this.generalControllers.spinButtonController.spin();
              }, z.prototype.setAvailableActions = function () {
                var L = this.generalControllers.spinButtonController;
                L.isAutoSpin() || W.featureConfig.fastStopFeature && !m.settingMenuHelper.turboSpinOn ? (L.setOnClickCallback(this.Zr.bind(this, V.SpinTrigger.CLICK)), D.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this)) : L.disableButton();
              }, z.prototype.clearAvailableActions = function () {
                this.generalControllers.spinButtonController.clearOnClickCallback(), D.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
              }, z.prototype.slotFastStopTriggered = function () {
                this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
              }, z.prototype.startSlotController = function () {
                this.generalControllers.slotController.spin(m.settingMenuHelper.turboSpinOn);
              }, z.prototype.do = function (L) {
                if (!D.JSGTConfig.spaceBarInterrupterEnabled && q.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (L.keyCode) {
                  case M.SPIN_BUTTON_TRIGGER_KEY:
                    this.Zr(V.SpinTrigger.SPACEBAR);
                }
              }, z.prototype.Zr = function (L) {
                {
                  if (this.generalControllers.spinButtonController.isAutoSpin()) this.Qn();else if (W.featureConfig.fastStopFeature && !this.$r()) {
                    var v = this.triggerFastStop;
                    this.triggerFastStop = undefined, v(L);
                  }
                }
              }, z.prototype.Qn = function () {
                {
                  var L = this.generalControllers,
                    v = L.spinButtonController;
                  H.exitAutoSpin(L.spinButtonController), W.featureConfig.fastStopFeature && !this.$r() || v.disableButton();
                }
              }, z.prototype.$r = function () {
                {
                  return this.generalControllers.slotController.getStopStyle() === C.StopStyle.FAST;
                }
              }, z;
            }();
          B.default = k, cc._RF.pop();
        }
      }
    }, Iq],
    'NotifyHelper': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "9dba9c1YjJGvYgyg8KnkuQD", "NotifyHelper")) {
        var O = System.get("bvframework").Notify;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'NumberCurvedController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "22ff3ETL9NJ6LV0gfCqckfH", "NumberCurvedController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberDisplayController"),
            C = cc._decorator,
            H = C.ccclass,
            r = C.property,
            V = function (M) {
              {
                function q() {
                  {
                    var m = null !== M && M.apply(this, arguments) || this;
                    return m.curveness = 0.1, m;
                  }
                }
                return __extends(q, M), q.prototype.dequeueNumberContainer = function (m) {
                  {
                    var D = this.numberContainer.children[m];
                    if (!D) {
                      {
                        (D = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(D);
                        var W = new cc.Node("numberSprite");
                        W.addComponent(cc.Sprite), D.addChild(W);
                      }
                    }
                    return D;
                  }
                }, q.prototype.displayNumber = function (m, D, W) {
                  undefined === D && (D = true), M.prototype.displayNumber.call(this, m, D, W), this.na.updateLayout();
                  var k = 0;
                  this.numberContainer.children.forEach(function (w) {
                    {
                      k += w.width;
                    }
                  });
                  for (var z = 0; z < this.numberContainer.children.length; z++) {
                    var L = this.dequeueNumberContainer(z),
                      v = k / 2,
                      b = (100 / Math.abs(this.curveness) + v) / this.numberContainer.scale,
                      U = undefined,
                      Q = undefined;
                    this.curveness > 0 ? (U = Math.sqrt(Math.pow(b, 2) - Math.pow(L.x, 2)), Q = 180 * Math.atan2(Math.abs(U), L.x) / Math.PI, L.angle = -(90 - Q)) : this.curveness < 0 ? (U = Math.sqrt(Math.pow(b, 2) + Math.pow(L.x, 2)), Q = 180 * Math.atan2(Math.abs(U), L.x) / Math.PI, L.angle = 90 - Q) : L.angle = 0, L.y = U - b;
                  }
                }, __decorate([r({
                  'min': -10,
                  'max': 10,
                  'slide': true,
                  'tooltip': false,
                  'type': cc.Float
                })], q.prototype, "curveness", undefined), __decorate([H], q);
              }
            }(x.default);
          y.default = V, cc._RF.pop();
        }
      }
    }, Im],
    'NumberDisplayController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "e13cc9FLShL66GevrFVSv5p", "NumberDisplayController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = j("NumberDisplayInterface"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            {
              function z() {
                var L = null !== m && m.apply(this, arguments) || this;
                return L.numberSpriteAtlas = undefined, L.numberBlurSpriteAtlas = undefined, L.numberSprite = [], L.numberBlurSprite = [], L.kSprite = undefined, L.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA, L.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA, L.nodeNumberWidth = 141, L.nodeNumberY = 0, L.nodeNumberScale = 1, L.commaWidth = 50, L.commaY = 0, L.commaScale = 1, L.decimalWidth = 60, L.decimalY = 0, L.decimalScale = 1, L.decimalNumberWidth = 121, L.decimalNumberY = 1, L.decimalNumberScale = 0.9, L.multiplySpriteWidth = 50, L.multiplySpriteY = 0, L.multiplySpriteScale = 1, L.layoutSpacingX = 0, L.layoutSpacingY = 0, L.blurScale = 1, L.spriteColor = "FFFFFF", L.disableFixedWidth = false, L.enablePrefixNumber = false, L.oa = false, L.ha = 0, L.ra = false, L.aa = '0', L.ua = 0, L.la = 0, L.attributesForNumberContainer = undefined, L;
              }
              var D = {};
              D.tooltip = false;
              var W = {};
              W.tooltip = false;
              var k = {};
              k.tooltip = false;
              return __extends(z, m), Object.defineProperty(z.prototype, "preview", {
                'get': function () {
                  {
                    return this.ra;
                  }
                },
                'set': function (L) {
                  this.ra = L, L ? (this.ha = this.node.width, this.displayNumber(this.previewNumber)) : (this.clear(), this.numberContainer.removeComponent(cc.Layout), this.node.width = this.ha, this.na = undefined);
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(z.prototype, "previewNumber", {
                'get': function () {
                  {
                    return this.aa;
                  }
                },
                'set': function (L) {
                  {
                    this.aa = L, this.displayNumber(L);
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(z.prototype, "currentNumberBlurSprite", {
                'get': function () {
                  return this.numberBlurSpriteAtlas ? this.numberBlurSpriteAtlas.getSpriteFrames() : this.numberBlurSprite;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(z.prototype, "currentNumberSprite", {
                'get': function () {
                  return this.numberSpriteAtlas ? this.numberSpriteAtlas.getSpriteFrames() : this.numberSprite;
                },
                'enumerable': false,
                'configurable': true
              }), z.prototype.onLoad = function () {
                {
                  this.ua = this.numberContainer.scaleX, this.la = this.numberContainer.scaleY, this.numberContainer.on(cc.Node.EventType.SIZE_CHANGED, this.resizeNumberIfNeeded, this);
                }
              }, z.prototype.getNumberList = function (L, v) {
                var b = /(?:\d+)(?:\.\d+)?/gm.exec(L.toString());
                if (b) {
                  {
                    var U = parseFloat(b[0]),
                      Q = this.fa(U, v),
                      w = "number" == typeof L ? Q : L.replace(b[0], Q),
                      P = Array.from(w);
                    return this.enablePrefixNumber && P.unshift('x'), P;
                  }
                }
                return Array.from(L.toString());
              }, z.prototype.getSpriteConfig = function (L) {
                switch (L) {
                  case ',':
                    var v = {};
                    v.width = this.commaWidth;
                    v.scale = this.commaScale;
                    v.y = this.commaY;
                    v.spriteFrame = this.currentNumberSprite[10];
                    return v;
                  case '.':
                    var b = {};
                    b.width = this.decimalWidth;
                    b.scale = this.decimalScale;
                    b.y = this.decimalY;
                    b.spriteFrame = this.currentNumberSprite[11];
                    return b;
                  case 'x':
                    var U = {};
                    U.width = this.multiplySpriteWidth;
                    U.scale = this.multiplySpriteScale;
                    U.y = this.multiplySpriteY;
                    U.spriteFrame = this.currentNumberSprite[12];
                    return U;
                  case 'k':
                    var Q = {};
                    Q.width = this.nodeNumberWidth;
                    Q.scale = this.nodeNumberScale;
                    Q.y = this.nodeNumberY;
                    Q.spriteFrame = this.kSprite;
                    return Q;
                  case '\x20':
                    var w = {};
                    w.width = this.commaWidth;
                    w.scale = this.commaScale;
                    w.y = this.commaY;
                    w.spriteFrame = undefined;
                    return w;
                  default:
                    return;
                }
              }, z.prototype.getNumberSpriteConfig = function (L, v, b) {
                return b ? {
                  'scale': v ? this.decimalNumberScale * this.blurScale : this.decimalNumberScale,
                  'width': this.decimalNumberWidth,
                  'y': this.decimalNumberY,
                  'spriteFrame': v ? this.currentNumberBlurSprite[parseInt(L, 10)] : this.currentNumberSprite[parseInt(L, 10)]
                } : {
                  'scale': this.nodeNumberScale,
                  'width': this.nodeNumberWidth,
                  'y': this.nodeNumberY,
                  'spriteFrame': v ? this.currentNumberBlurSprite[parseInt(L, 10)] : this.currentNumberSprite[parseInt(L, 10)]
                };
              }, z.prototype.displayNumber = function (L, v, b) {
                {
                  undefined === v && (v = true), this.da();
                  var U = this.getNumberList(L, v);
                  U = U.reverse();
                  var Q = false;
                  this.va(U.length);
                  for (var w = 0; w < U.length; w++) {
                    {
                      var P = this.dequeueNumberContainer(w),
                        R = P.getChildByName("numberSprite").getComponent(cc.Sprite),
                        T = this.getSpriteConfig(U[w]);
                      if (T) P.width = T.width, P.scaleX = P.scaleY = T.scale, R.node.y = T.y, R.spriteFrame = T.spriteFrame;else {
                        Q = false;
                        var Y = x.getDefaultCurrencyFormat().decimalSeparator,
                          X = w < U.indexOf(Y);
                        X && -1 !== U.indexOf(Y) && (Q = !v);
                        var E = this.getNumberSpriteConfig(U[w], Q, X && -1 !== U.indexOf(Y));
                        P.scale = E.scale, P.width = E.width, R.node.y = E.y, R.spriteFrame = E.spriteFrame;
                      }
                      (this.disableFixedWidth || -1 === P.width) && (P.width = R.node.width), this._a(w, U[w], Q, P);
                    }
                  }
                  this.na && this.na.updateLayout(), b && b();
                }
              }, z.prototype.va = function (L) {
                var v = this.numberContainer.children.length;
                if (L < v) for (var b = v - L; 0 !== b;) {
                  {
                    var U = this.numberContainer.children[0];
                    U.removeFromParent(), U.destroy(), b--;
                  }
                }
              }, z.prototype.clear = function () {
                {
                  for (var L = this.numberContainer.children.length - 1; L > -1; L--) {
                    {
                      var v = this.numberContainer.children[L];
                      v.removeFromParent(), v.destroy();
                    }
                  }
                  this.pa(), this.numberContainer.width = 0;
                }
              }, z.prototype.pa = function () {
                this.ua && this.la && (this.numberContainer.scaleX = this.ua, this.numberContainer.scaleY = this.la);
              }, z.prototype.fa = function (L, v) {
                {
                  var U = '',
                    Q = 1;
                  this.enableShortenNumber && L > 999 && (Q = 1000, U = 'k');
                  var w = !x.getDefaultCurrencyFormat().hideDecimal && this.enableDecimal;
                  return b = w ? Math.floor(b / Q) : Math.round(b / Q), this.enableComma && (b = this.numberWithComma(b)), w && (b += this.ma(L, v)), b + U;
                }
              }, z.prototype.ma = function (L, v) {
                var b,
                  U,
                  Q,
                  w = x.getDefaultCurrencyFormat().decimalSeparator;
                this.enableShortenNumber && L > 999 ? (b = Math.round(L / 100) / 10, U = 2, Q = v ? '' : w + '0') : (b = L, U = 3, Q = w + '00');
                var P = b.toString();
                if (-1 !== P.indexOf('.')) for (Q = w + (Q = P.substring(P.indexOf('.') + 1, P.indexOf('.') + U)); Q.length !== U;) Q += '0';
                return Q;
              }, z.prototype._a = function (L, v, b, U) {
                this.attributesForNumberContainer && this.attributesForNumberContainer(L, v, b, U);
              }, z.prototype.dequeueNumberContainer = function (L) {
                var v = this.numberContainer.children[L];
                if (!v) {
                  (v = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(v);
                  var b = new cc.Node("numberSprite");
                  b.addComponent(cc.Sprite);
                  var U = b.getComponent(cc.Sprite);
                  U.srcBlendFactor = this.srcBlendFactor, U.dstBlendFactor = this.dstBlendFactor, v.addChild(b), b.color = new cc.Color().fromHEX(this.spriteColor);
                }
                return v;
              }, z.prototype.resizeNumberIfNeeded = function () {
                {
                  var L = this.numberContainer.width,
                    v = this.maxContainerSize / L,
                    b = L * this.numberContainer.scaleX;
                  isFinite(v) && Math.round(b) > this.maxContainerSize && (this.numberContainer.scale = v);
                }
              }, z.prototype.Sa = function (L, v, b) {
                this.numberContainer.runAction(cc.sequence(cc.scaleTo(0.08, L), cc.scaleTo(0.05, v), cc.callFunc(b, this)));
              }, z.prototype.da = function () {
                if (!this.na) {
                  var L = this.na = this.numberContainer.getComponent(cc.Layout);
                  L || (L = this.na = this.numberContainer.addComponent(cc.Layout)), L.resizeMode = cc.Layout.ResizeMode.CONTAINER, L.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, L.type = cc.Layout.Type.HORIZONTAL, L.spacingX = this.layoutSpacingX, L.spacingY = this.layoutSpacingY;
                }
              }, z.prototype.onDestroy = function () {
                this.attributesForNumberContainer = undefined;
              }, __decorate([M({
                'type': cc.SpriteAtlas,
                'tooltip': false
              })], z.prototype, "numberSpriteAtlas", undefined), __decorate([M({
                'type': cc.SpriteAtlas,
                'tooltip': false
              })], z.prototype, "numberBlurSpriteAtlas", undefined), __decorate([M({
                'type': [cc.SpriteFrame],
                'tooltip': false
              })], z.prototype, "numberSprite", undefined), __decorate([M({
                'type': [cc.SpriteFrame]
              })], z.prototype, "numberBlurSprite", undefined), __decorate([M({
                'type': cc.SpriteFrame
              })], z.prototype, "kSprite", undefined), __decorate([M({
                'type': cc.macro.BlendFactor,
                'tooltip': false
              }), M({
                'type': cc.macro.BlendFactor,
                'tooltip': false
              })], z.prototype, "srcBlendFactor", undefined), __decorate([M({
                'type': cc.macro.BlendFactor,
                'tooltip': false
              })], z.prototype, "dstBlendFactor", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "nodeNumberWidth", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "nodeNumberY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "nodeNumberScale", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "commaWidth", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "commaY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "commaScale", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "decimalWidth", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "decimalY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "decimalScale", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "decimalNumberWidth", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "decimalNumberY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "decimalNumberScale", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "multiplySpriteWidth", undefined), __decorate([M({
                'type': cc.Integer,
                'tooltip': false
              })], z.prototype, "multiplySpriteY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "multiplySpriteScale", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "layoutSpacingX", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "layoutSpacingY", undefined), __decorate([M({
                'type': cc.Float,
                'tooltip': false
              })], z.prototype, "blurScale", undefined), __decorate([M(D)], z.prototype, "spriteColor", undefined), __decorate([M(W)], z.prototype, "disableFixedWidth", undefined), __decorate([M(k)], z.prototype, "enablePrefixNumber", undefined), __decorate([M], z.prototype, "preview", null), __decorate([M({
                'type': cc.String,
                'visible': function () {
                  return this.preview;
                }
              })], z.prototype, "previewNumber", null), __decorate([V], z);
            }
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, ID],
    'NumberDisplayInterface': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "6e9deOwoQZHDb/Mv4FAbr3R", "NumberDisplayInterface")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            function q() {
              var k = null !== M && M.apply(this, arguments) || this;
              return k.numberContainer = undefined, k.maxContainerSize = 1142, k.enableComma = true, k.enableDecimal = true, k.enableShortenNumber = false, k;
            }
            var m = {};
            m.tooltip = false;
            var D = {};
            D.tooltip = false;
            var W = {};
            W.tooltip = false;
            return __extends(q, M), q.prototype.numberWithComma = function (k) {
              var z = x.getDefaultCurrencyFormat().groupSeparator;
              return k.toString().replace(/\B(?=(\d{3})+(?!\d))/g, z);
            }, q.prototype.setResizeAnimation = function (k) {
              {
                this.ga = k;
              }
            }, q.prototype.displayNumber = function (k, z) {
              {
                throw undefined === z && (z = true), Error("NumberDisplayInterface: method must be overriden");
              }
            }, q.prototype.clear = function () {
              throw Error("NumberDisplayInterface: method must be overriden");
            }, q.prototype.resizeNumberIfNeeded = function () {
              throw Error("NumberDisplayInterface: method must be overriden");
            }, __decorate([r(cc.Node)], q.prototype, "numberContainer", undefined), __decorate([r(cc.Float)], q.prototype, "maxContainerSize", undefined), __decorate([r(m)], q.prototype, "enableComma", undefined), __decorate([r(D)], q.prototype, "enableDecimal", undefined), __decorate([r(W)], q.prototype, "enableShortenNumber", undefined), __decorate([H], q);
          }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, IW],
    'NumberLabelControllerLite': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "88c0bvJUDVGt4Zbi3DnKpmf", "NumberLabelControllerLite")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("Utils"),
          C = cc.misc.lerp,
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.label = undefined, W.rollDuration = 2, W.maxWidth = 0, W.Ca = false, W.Ys = 0, W.ya = 0, W.Ma = 0, W.wa = false, W.Aa = undefined, W.Pa = undefined, W;
            }
            return __extends(D, m), D.prototype.setSymbol = function (W) {
              this.Aa = W;
            }, D.prototype.setBaseUnit = function (W) {
              this.Pa = W;
            }, D.prototype.play = function (W, k) {
              this.wa && (this.unschedule(this.Ba), this.wa = false), this.ya = W, this.Ma = k, this.Ys = 0, this.wa = true, this.Ca = !(W > k), this.schedule(this.Ba, 0);
            }, D.prototype.skip = function (W) {
              {
                this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatCurrency(W, this.Aa, this.Pa);
              }
            }, D.prototype.skipNoCurrencyValue = function (W) {
              {
                this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatGroup(W);
              }
            }, D.prototype.setString = function (W) {
              {
                this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = W;
              }
            }, D.prototype.Ba = function (W) {
              this.Ys += W;
              var k = this.Ys / this.rollDuration;
              k = k >= 1 ? 1 : 1 - Math.cos(k * Math.PI * 0.5);
              var z = C(this.ya, this.Ma, k);
              this.Ca ? z >= this.Ma && (z = this.Ma, this.unschedule(this.Ba), this.wa = false) : z <= this.Ma && (z = this.Ma, this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatCurrency(z, this.Aa, this.Pa);
            }, D.prototype.getLabelString = function () {
              return this.label.string;
            }, __decorate([M(cc.Label)], D.prototype, "label", undefined), __decorate([M(cc.Integer)], D.prototype, "rollDuration", undefined), __decorate([M(cc.Float)], D.prototype, "maxWidth", undefined), __decorate([V], D);
          }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, Ik],
    'NumberLabelController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b6e176hgIFCvo12TMjQIRc7", "NumberLabelController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberDisplayInterface"),
            C = j("Utils"),
            H = cc._decorator.ccclass,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.oa = false, q.ua = 0, q.la = 0, q.ac = undefined, q;
              }
              return __extends(M, V), M.prototype.onLoad = function () {
                this.ua = this.numberContainer.scaleX, this.la = this.numberContainer.scaleY, this.da(), this.numberContainer.on(cc.Node.EventType.SIZE_CHANGED, this.resizeNumberIfNeeded, this);
              }, M.prototype.setPrefix = function (q) {
                this.Oa = q;
              }, M.prototype.displayNumber = function (q, m, D) {
                undefined === m && (m = true), this.Ia = D;
                var W = this.getNumberList(q, m);
                if (this.ac.string = this.Oa ? this.Oa + W : W, m) {
                  {
                    var k = this.Ia;
                    this.Ia = null, k && k();
                  }
                }
              }, M.prototype.getNumberList = function (q, m) {
                {
                  var D = /(?:\d+)(?:\.\d+)?/gm.exec(q.toString());
                  if (D) {
                    {
                      var W = parseFloat(D[0]),
                        k = this.fa(W, m);
                      return "number" == typeof q ? k : q.replace(D[0], k);
                    }
                  }
                  return q.toString();
                }
              }, M.prototype.fa = function (q, m) {
                var W = '',
                  k = 1;
                this.enableShortenNumber && q > 999 && (k = 1000, W = 'k');
                var z = !C.getDefaultCurrencyFormat().hideDecimal && this.enableDecimal;
                return D = z ? Math.floor(D / k) : Math.round(D / k), this.enableComma && (D = this.numberWithComma(D)), z && (D += this.ma(q, m)), D + W;
              }, M.prototype.ma = function (q, m) {
                var D,
                  W,
                  k,
                  z = C.getDefaultCurrencyFormat().decimalSeparator;
                this.enableShortenNumber && q > 999 ? (D = Math.round(q / 100) / 10, W = 2, k = m ? '' : z + '0') : (D = q, W = 3, k = z + '00');
                var L = D.toString();
                if (-1 !== L.indexOf(z)) for (k = L.substring(L.indexOf(z), L.indexOf(z) + W); k.length !== W;) k += '0';
                return k;
              }, M.prototype.clear = function () {
                this.ac.string = '', this.pa();
              }, M.prototype.resizeNumberIfNeeded = function () {
                var q = this;
                if (!this.oa) {
                  var m = this.numberContainer.width,
                    D = this.maxContainerSize / m,
                    W = m * this.numberContainer.scaleX,
                    k = this.Ia;
                  if (this.Ia = null, isFinite(D) && !this.oa && Math.round(W) > this.maxContainerSize) {
                    this.oa = true;
                    var z = D - 0.06,
                      L = function () {
                        q.oa = false, k && k();
                      };
                    this.ga ? this.ga(this.numberContainer, z, D, L) : this.Sa(z, D, L);
                  } else C.delayCallback(0)(function () {
                    k && k();
                  });
                }
              }, M.prototype.pa = function () {
                {
                  this.ua && this.la && (this.numberContainer.scaleX = this.ua, this.numberContainer.scaleY = this.la);
                }
              }, M.prototype.Sa = function (q, m, D) {
                this.numberContainer.runAction(cc.sequence(cc.scaleTo(0.08, q), cc.scaleTo(0.05, m), cc.callFunc(D, this)));
              }, M.prototype.da = function () {
                {
                  this.ac = this.numberContainer.getComponent(cc.Label), this.ac || (this.ac = this.numberContainer.addComponent(cc.Label), this.ac.fontSize = 45, this.ac.lineHeight = 60, this.ac.string = '');
                }
              }, M.prototype.onDestroy = function () {
                this.Ia = null, this.ga = null;
              }, __decorate([H], M);
            }(x.default);
          y.default = r, cc._RF.pop();
        }
      }
    }, Io],
    'NumberPaytableController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "5a2c6Vm6u9LwpLUeGzJr4Ba", "NumberPaytableController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.numberNode = undefined, q;
              }
              return __extends(M, V), M.prototype.playFlash = function () {
                this.numberNode.stopAllActions();
                var q = cc.sequence(cc.fadeTo(0.1, 102), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
                this.numberNode.runAction(cc.repeatForever(q));
              }, M.prototype.playInactiveNode = function (q) {
                this.numberNode.stopAllActions(), q ? this.numberNode.runAction(cc.fadeTo(0.1, 102)) : this.numberNode.opacity = 102;
              }, M.prototype.playActive = function (q) {
                this.numberNode.stopAllActions(), q ? this.numberNode.runAction(cc.fadeTo(0.1, 255)) : this.numberNode.opacity = 255;
              }, M.prototype.destroy = function () {
                return this.numberNode.stopAllActions(), this.node.destroy(), V.prototype.destroy.call(this);
              }, __decorate([H(cc.Node)], M.prototype, "numberNode", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'NumberRollBaseController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b940fHCDN9PkIykJo0EuNqR", "NumberRollBaseController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberDisplayInterface"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            function q() {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.rollDuration = 2, m.displayController = undefined, m.ya = 0, m.Ga = 0, m.ds = 0, m.Ys = 0, m;
            }
            return __extends(q, M), q.prototype.onLoad = function () {
              this.enabled = false;
            }, q.prototype.play = function (m, D, W, k) {
              if (undefined === k && (k = true), !(D < 0 || m < 0)) {
                if (m === D) return k && this.displayController.clear(), void this.displayController.displayNumber(D, true, W);
                this.yo = W, this.ya = m, this.Ga = D, this.ds = this.rollDuration, this.Ys = 0, k && this.displayController.clear(), this.displayController.displayNumber(m, false), this.enabled = true;
              }
            }, q.prototype.skip = function () {
              var m = this;
              this.enabled && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
                var D = m.yo;
                m.yo = undefined, D && D();
              }));
            }, q.prototype.stop = function (m) {
              this.enabled = false, m && (this.displayController.clear(), this.yo = undefined);
            }, q.prototype.update = function (m) {
              {
                var D = this;
                this.Ys += m;
                var W = this.Ys / this.ds;
                if (W >= 1) this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
                  var z = D.yo;
                  D.yo = undefined, z && z();
                });else {
                  W = 1 - Math.cos(W * Math.PI * 0.5);
                  var k = cc.misc.lerp(this.ya, this.Ga, W);
                  this.displayController.displayNumber(k, false);
                }
              }
            }, __decorate([r(cc.Integer)], q.prototype, "rollDuration", undefined), __decorate([r({
              'override': true,
              'type': x.default
            })], q.prototype, "displayController", undefined), __decorate([H], q);
          }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, Iz],
    'NumberRollController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "6ce4aSiKeVGJZPyEX2VbsSD", "NumberRollController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberDisplayController"),
            C = j("NumberRollBaseController"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property,
            q = function (m) {
              function D() {
                var k = null !== m && m.apply(this, arguments) || this;
                return k.displayController = undefined, k;
              }
              var W = {};
              W.type = x.default;
              W.override = true;
              return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, Ic],
    'NumberRollCurveController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "a0a6doEXuNKgJy7Sh2yc8T3", "NumberRollCurveController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberCurvedController"),
          C = j("NumberRollBaseController"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              {
                var k = null !== m && m.apply(this, arguments) || this;
                return k.displayController = undefined, k;
              }
            }
            var W = {};
            W.type = x.default;
            W.override = true;
            return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, IL],
    'NumberRollLabelController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "9b7acp+xyJLMJ5gESfkIJHz", "NumberRollLabelController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberLabelController"),
            C = j("NumberRollBaseController"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property,
            q = function (m) {
              function D() {
                {
                  var k = null !== m && m.apply(this, arguments) || this;
                  return k.displayController = undefined, k;
                }
              }
              var W = {};
              W.type = x.default;
              W.override = true;
              return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, Iv],
    'OperatorJurisdictionModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "bcfa7PvQx1LKqzexGjCVrpW", "OperatorJurisdictionModel")) {
        var O = System.get("bvframework").OperatorJurisdictionModel;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'PGApiClient.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "6a5efOPxrhCWo8QfWKO1FeF", "PGApiClient.spec") || (Object.defineProperty(y, "__esModule", B), y.onRequestSent = y.onRequestReceived = undefined, y.onRequestReceived = function (x, C) {
        {
          var H = System.get("automation") && System.get("automation").GameData;
          var r = {};
          r.error = x;
          r.result = C;
          H && H.emit("RequestReceived", r);
        }
      }, y.onRequestSent = function () {
        var x = System.get("automation") && System.get("automation").GameData;
        x && x.emit("RequestSent");
      }, cc._RF.pop());
    }, {}],
    'PGBetRequestModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "04c5dxt1DtLibUJsILbyUdl", "PGBetRequestModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.PGBetRequestModel = undefined;
          var x = j("Protoutils"),
            C = function () {
              function H() {}
              var r;
              return r = H, H.prototype.build = function (V) {
                var M = {};
                M.ctor = r;
                M.givenName = "PiggyGoldBetRequest";
                M.isRoot = true;
                return x.createProtoMessages(q).concat(V);
              }, H.registryKey = "PiggyGoldBetRequest", __decorate([x.api('cs', 21, "double", false, false, false)], H.prototype, 'cs', undefined), __decorate([x.api('ml', 22, "int32", false, false, false)], H.prototype, 'ml', undefined), __decorate([x.api('id', 5, "string", false, false, false)], H.prototype, 'id', undefined), __decorate([x.api('wk', 12, "string", false, false, false)], H.prototype, 'wk', undefined), r = __decorate([x.messageName("PiggyGoldBetRequest")], H);
            }();
          y.PGBetRequestModel = C, cc._RF.pop();
        }
      }
    }, Ib],
    'PGGAPIClient': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "d1324LE8u1FgIf2d5LCWuoy", "PGGAPIClient")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x), B.pgApiClient = undefined;
          var C = O("PGGDataSource"),
            H = O("APIClient"),
            V = (O("TweaksData"), O("Utils")),
            M = O("AutomationDecorator"),
            q = O("PGApiClient.spec"),
            m = O("PGBetRequestModel"),
            D = V.getPlatform(),
            W = function (z) {
              function L() {
                var v = null !== z && z.apply(this, arguments) || this;
                return v.Na = undefined, v;
              }
              return __extends(L, z), L.prototype.spin = function (v) {
                this.Na = v;
                var b = C.pgDataSource.transactionModel,
                  U = b.transactionId,
                  Q = b.betLevelValue,
                  w = b.betSizeValue,
                  P = C.pgDataSource.playerModel.walletKey,
                  R = {
                    'cs': w,
                    'ml': Q,
                    'pf': D,
                    'id': U,
                    'wk': P
                  },
                  T = new m.PGBetRequestModel().build([]);
                this.Ta("v4/Spin", R, T, this.Ha.bind(this));
              }, L.prototype.Ta = function (v, b, U, Q) {
                {
                  this.requestEngine(v, b, U, Q);
                }
              }, L.prototype.Ha = function (v, b) {
                var U = this.Na;
                this.Na = undefined;
                try {
                  {
                    b && this.dataSource.updateTransactionInfo(b), U(v, b);
                  }
                } catch (Q) {
                  (v = new shell.Error(shell.ServerError.Domain, 6501, undefined, 1)).cause = Q, U(v, b);
                }
              }, __decorate([M.automationDec({
                'func': q.onRequestSent
              })], L.prototype, "_onRequest", null), __decorate([M.automationDec({
                'func': q.onRequestReceived
              })], L.prototype, "_onRespond", null), L;
            }(H.default);
          B.default = W;
          var k = new W(C.pgDataSource);
          B.pgApiClient = k, cc._RF.pop();
        }
      }
    }, IU],
    'PGGDataSource': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "14007D6VmVFRIxUoOkYdI/D", "PGGDataSource")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.pgDataSource = undefined;
        var x = j("RtConfig"),
          C = j("PGSlotTransactionModel"),
          H = j("SlotSystemModel"),
          V = j("DataSource"),
          M = j("PlayerModel"),
          q = function (D) {
            function W() {
              {
                var k = D.call(this, {
                  'playerModel': new M.default(),
                  'systemModel': new H.default(x.cs_Config),
                  'transactionModel': new C.default()
                }) || this;
                return k.autoSpinCount = -1, k.gameLaunched = false, k.isReplayStarted = false, k;
              }
            }
            return __extends(W, D), W;
          }(V.default);
        y.default = q;
        var m = new q();
        y.pgDataSource = m, cc._RF.pop();
      }
    }, IQ],
    'PGGIdleState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "5cb6c5+CQ5NzYA9UbiMoo6+", "PGGIdleState")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("TransactionStateMachineHandler"),
          C = function (H) {
            {
              function r() {
                return null !== H && H.apply(this, arguments) || this;
              }
              return __extends(r, H), r.prototype.run = function () {
                var V = this;
                x.goToStateCallback("idle")(function () {
                  H.prototype.run.call(V);
                });
              }, r.prototype.defineSystemEventConfigParam = function () {
                var V = this;
                return {
                  'callback': function () {
                    x.goToStateCallback("action", true)(V.tryAutoSpin.bind(V));
                  }
                };
              }, r.prototype.onExitState = function (V) {
                x.transitionCompleteCallback("action")(V);
              }, r;
            }
          }(j("IdleState").default);
        y.default = C, cc._RF.pop();
      }
    }, Iw],
    'PGGNormalGameState': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "4f514cB9JJKcoKpH+dGXQHY", "PGGNormalGameState")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = O("PGGIdleState"),
          H = O("PGGSpinState"),
          V = O("PGGPrizeState"),
          M = O("PGGResultState"),
          q = O("NormalSpinDecorator"),
          m = O("NormalResultDecorator"),
          D = O("NormalPrizeDecorator"),
          W = O("Utils"),
          k = O("TransactionStateMachineHandler"),
          z = function () {
            {
              function L(v, b, U) {
                {
                  this.name = "Normal Game", this.lt = undefined, this._t = undefined, this.pt = undefined, this.I = undefined, this.lt = v, this._t = b.generalControllers, this.pt = U;
                }
              }
              return L.prototype.run = function () {
                {
                  W.sequenceCallback(this.Ra.bind(this), this.ka.bind(this), this.La.bind(this), this.Ea.bind(this), this.ja.bind(this))(this.vo.bind(this));
                }
              }, L.prototype.Ra = function (v) {
                (this.I = new C.default(this.lt, {
                  'generalControllers': this._t
                }, v)).run();
              }, L.prototype.ka = function (v) {
                {
                  this._t.slotController.isBonusMode = false, (this.I = new H.default(this.lt, {
                    'generalControllers': this._t
                  }, v, new q.default(this.lt, {
                    'generalControllers': this._t
                  }))).run();
                }
              }, L.prototype.La = function (v) {
                (this.I = new M.default(this.lt, {
                  'generalControllers': this._t
                }, v, new m.default(this.lt, {
                  'generalControllers': this._t
                }))).run();
              }, L.prototype.Ea = function (v) {
                (this.I = new V.default(this.lt, {
                  'generalControllers': this._t
                }, v, new D.default(this.lt, {
                  'generalControllers': this._t
                }))).run();
              }, L.prototype.ja = function (v) {
                k.transitionCompleteCallback("setup")(v);
              }, L.prototype.vo = function () {
                var v = this.pt;
                this.pt = undefined, this.destroy(), v && v();
              }, L.prototype.destroy = function () {
                var v = this.I;
                v && v.destroy(), this.I = undefined, this.lt = undefined, this.pt = undefined, this._t = undefined;
              }, L;
            }
          }();
        B.default = z, cc._RF.pop();
      }
    }, Ih],
    'PGGPrizeState': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "66291BwcDNB9ICAuxnTs1lf", "PGGPrizeState")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = O("PrizeState"),
          H = O("MediumPrizeController"),
          V = O("BigPrizeController"),
          M = O("Utils"),
          q = O("SettingMenuHelper"),
          m = O("AutomationDecorator"),
          D = O("WinHighlight.spec"),
          W = O("TransactionStateMachineHandler"),
          k = cc._decorator.ccclass,
          z = function (L) {
            {
              function v() {
                var b = null !== L && L.apply(this, arguments) || this;
                return b.name = "PGGResultState", b;
              }
              return __extends(v, L), v.prototype.renderPrize = function () {
                {
                  M.sequenceCallback(this.renderLines.bind(this), this.Da.bind(this), this.playPrize.bind(this))(this.exitState.bind(this));
                }
              }, v.prototype.runBigPrizeState = function (b, U) {
                new V.default(this.dataSource, this.getWinThresholds(), this.generalControllers, U).run();
              }, v.prototype.runMediumPrizeState = function (b, U) {
                {
                  new H.default(this.dataSource, this.generalControllers, U).run();
                }
              }, v.prototype.runSmallPrizeState = function (b, U) {
                new H.default(this.dataSource, this.generalControllers, U).run();
              }, v.prototype.playAllLines = function (b) {
                {
                  var U = this.dataSource.transactionModel,
                    Q = U.totalWinAmount,
                    w = U.reels;
                  if (Q > 0) {
                    var P = this.generalControllers.slotController,
                      R = this.generalControllers.paySelectController,
                      T = this.generalControllers.wildMultiplySpineController,
                      Y = [];
                    w.forEach(function (F) {
                      {
                        var N;
                        N = P.getSymbolSpriteFrames(F), Y.push(N.normal);
                      }
                    });
                    var X = [],
                      E = T.getHidenSlotIndexList();
                    [1, 4, 7].forEach(function (F) {
                      -1 === E.indexOf(F) && X.push(F);
                    }), X.length > 0 && P.getSlotItemWithIndex(X).forEach(function (F) {
                      F.active = false;
                    }), R.playNormalPaySelect(Y, w);
                  }
                  b && b();
                }
              }, v.prototype.Da = function (b) {
                M.sequenceCallback(W.transitionCompleteCallback("prize"), W.goToStateCallback("setup", true))(b);
              }, v.prototype.Ua = function () {
                {
                  var b = this.dataSource.systemModel.maxLineNumber;
                  return M.toDecimalWithExp(q.settingMenuHelper.betSizeValue * q.settingMenuHelper.betLevelValue * b, 2);
                }
              }, __decorate([m.automationDec({
                'func': D.showWinHighlight
              })], v.prototype, "playAllLines", null), __decorate([k], v);
            }
          }(C.default);
        B.default = z, cc._RF.pop();
      }
    }, IP],
    'PGGRefreshWorldHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "8c6d3Cm7MxD/6iOfc5Ci+OI", "PGGRefreshWorldHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.pgRefreshWorldHandler = undefined;
        var x = j("Transitions"),
          C = j("RefreshWorldHandler"),
          H = j("SlotProperties"),
          r = cc._decorator.ccclass,
          V = function (M) {
            function q() {
              return null !== M && M.apply(this, arguments) || this;
            }
            return __extends(q, M), q.prototype.resetController = function (m) {
              {
                var D = this.generalControllers,
                  W = D.slotController,
                  k = D.paySelectController,
                  z = D.payTableController,
                  L = D.scrollerManagerController,
                  b = D.fastSpinAnimationController,
                  U = D.wildMultiplySpineController,
                  Q = this.dataSource.transactionModel,
                  w = Q.fakeReels,
                  P = Q.reels,
                  R = Q.middleReelsMutiply,
                  T = Q.piggyFeature,
                  Y = Q.wildMultiply;
                k.hide(), z.playActiveAllNode(), L.playExit(), b.reset(), Y ? z.fadeMultiply(Y, false) : z.fadeMultiply(H.WildSlotIndexes.ONE, false), U.stop(), W.resetSlot(w, P, R, T), m && m();
              }
            }, q.prototype.executeTransition = function (m) {
              var D = this.generalControllers,
                W = new x.ToNormalSpinTransition();
              var k = {};
              k.generalControllers = D;
              W.run(k, function () {
                {
                  W.destroy(), m();
                }
              });
            }, q.prototype.changeWalletIdleSetUp = function (m) {
              {
                this.reenableSpinButton(m);
              }
            }, q.prototype.betOptionPreIdleSetUp = function () {}, q.prototype.betOptionIdleSetUp = function (m) {
              this.reenableSpinButton(m);
            }, __decorate([r], q);
          }(C.default);
        y.default = V, y.pgRefreshWorldHandler = new V(), cc._RF.pop();
      }
    }, IR],
    'PGGResultState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "cfd90dFotVFuq3zVL6PFkg1", "PGGResultState")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("ResultState"),
            C = j("AudioManager"),
            H = j("SlotProperties"),
            V = j("Utils"),
            M = j("TransactionStateMachineHandler"),
            q = cc._decorator.ccclass,
            m = function (D) {
              function W() {
                var k = null !== D && D.apply(this, arguments) || this;
                return k.name = "PGGResultState", k;
              }
              return __extends(W, D), W.prototype.resultDidStartRender = function (k) {
                {
                  this.generalControllers.slotController.setOnEachStopColumnCallback(this.Wa.bind(this)), this.generalControllers.slotController.setFastSpinEndCallback(this.Fa.bind(this)), V.sequenceCallback(M.goToStateCallback("prize", true), this.xa.bind(this))(k);
                }
              }, W.prototype.renderFeature = function (k) {
                V.sequenceCallback(this.Va.bind(this))(k);
              }, W.prototype.setSlotData = function () {
                var k = this.generalControllers,
                  z = this.dataSource.transactionModel,
                  L = z.fakeReels,
                  v = z.reels,
                  b = z.middleReelsMutiply,
                  U = z.piggyFeature;
                k.slotController.setReelData(L, v, b, U);
              }, W.prototype.Va = function (k) {
                var z = this.generalControllers.payTableController,
                  L = this.dataSource.transactionModel,
                  v = L.totalWinAmount,
                  b = L.winSymbolIndex;
                v > 0 ? (z.playActiveAllNode(), z.playWinFlash(b)) : z.playActiveAllNode(), V.sequenceCallback(this.za.bind(this), this.Ka.bind(this), V.deferCallback(true), this.qa.bind(this), this.Ja.bind(this), this.Ya.bind(this))(k);
              }, W.prototype.za = function (k) {
                var z = this.dataSource.transactionModel,
                  L = z.piggyFeature,
                  v = z.winSymbolIndex;
                L ? (this.generalControllers.piggyController.playFeatureExit(k), this.generalControllers.fastSpinAnimationController.stopScrollerShine(-1 !== v)) : k && k();
              }, W.prototype.Ka = function (k) {
                var z = this,
                  L = this.dataSource.transactionModel,
                  v = L.reels,
                  b = L.winSymbolIndex,
                  U = L.wildMultiply,
                  Q = L.hasWild,
                  w = this.generalControllers.slotController,
                  P = [];
                if (Q) {
                  var R = this.generalControllers.wildMultiplySpineController;
                  v.forEach(function (Y, X) {
                    {
                      if (Y === H.SlotIndexes.WILD) {
                        {
                          var E = 1,
                            F = H.NumberOfRow * X + 1;
                          P.push(F), 1 === X && (E = U, -1 !== b && R.playMultipleWinAudio(U)), -1 !== b ? (R.playWildSpineLoop(E, X), k && k()) : (R.playWildSpineStill(E, X, z.Qa.bind(z, P, k)), C.GeneralAudioPool.sym_wild_nowin.play(), C.GeneralAudioPool.angpau_shiny.play());
                        }
                      }
                    }
                  });
                  var T = R.getHidenSlotIndexList();
                  T.length > 0 && w.getSlotItemWithIndex(T).forEach(function (Y) {
                    Y.active = false;
                  });
                } else k && k();
              }, W.prototype.qa = function (k) {
                var z = this.generalControllers.payTableController,
                  L = this.dataSource.transactionModel,
                  v = L.hasWild,
                  b = L.accumulatedWinAmount,
                  U = L.wildMultiply;
                if (b > 0) if (v) {
                  {
                    var Q = U || 1;
                    z.fadeMultiply(Q, true);
                  }
                } else z.playWildInactive();
                k && k();
              }, W.prototype.Qa = function (k, z) {
                this.generalControllers.slotController.getSlotItemWithIndex(k).forEach(function (L) {
                  L.active = true;
                }), z && z();
              }, W.prototype.Ja = function (k) {
                var z = this.dataSource.transactionModel,
                  L = z.isPossibleWin,
                  v = z.piggyFeature;
                L && false === v ? this.generalControllers.piggyController.playExitFastSpin(k) : k && k();
              }, W.prototype.Ya = function (k) {
                var z = this.dataSource.transactionModel,
                  L = z.hasWild;
                0 === z.accumulatedWinAmount && L ? this.generalControllers.piggyController.playWildReact(k) : k && k();
              }, W.prototype.Wa = function (k) {
                var z = this.dataSource.transactionModel.possibleWinSymbolIndex;
                if (2 === k.Xa) {
                  {
                    var L = this.generalControllers.payTableController;
                    -1 !== z && L.playWinFlash(z);
                  }
                }
              }, W.prototype.Fa = function () {
                this.dataSource.transactionModel.piggyFeature && (this.generalControllers.fastSpinAnimationController.stopFastSpinShine(), this.generalControllers.featurePiggyController.stop());
              }, W.prototype.xa = function (k) {
                var z = this.dataSource.transactionModel.piggyFeature,
                  L = this.generalControllers.piggyController;
                z ? (L.playFeatureStart(this.Za(k)), C.GeneralAudioPool.feature_raise_angpau.play()) : k && k();
              }, W.prototype.Za = function (k) {
                {
                  var z = this,
                    L = this.generalControllers.featurePiggyController,
                    v = this.generalControllers.backWorldController,
                    b = this.generalControllers.fastSpinAnimationController;
                  return function () {
                    L.play(z.$a(k)), v.playShineDoorAnimation(), b.playFastSpinShine(0.8);
                  };
                }
              }, W.prototype.$a = function (k) {
                {
                  var z = this.generalControllers.scrollerManagerController;
                  return function () {
                    z.playSpawn(), k && k();
                  };
                }
              }, __decorate([q], W);
            }(x.default);
          y.default = m, cc._RF.pop();
        }
      }
    }, IT],
    'PGGSpinState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "46bf6P0fq9A86HAiiJDCia0", "PGGSpinState")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("SpinState"),
            C = j("PGGAPIClient"),
            H = j("RequestHandler"),
            V = j("AutoSpinHandler"),
            M = j("Utils"),
            q = j("TransactionStateMachineHandler"),
            m = cc._decorator.ccclass,
            D = function (W) {
              function k() {
                {
                  var z = null !== W && W.apply(this, arguments) || this;
                  return z.name = "PGGSpinState", z;
                }
              }
              return __extends(k, W), k.prototype.stateWillStartSpin = function () {
                var z = this.dataSource.transactionModel,
                  L = z.accumulatedWinAmount,
                  v = z.piggyFeature,
                  b = z.hasWild,
                  U = this.generalControllers;
                v && U.scrollerManagerController.playExit();
                var Q = [];
                b && (Q = U.wildMultiplySpineController.getHidenSlotIndexList(), U.wildMultiplySpineController.stop()), L > 0 && (Q = [1, 4, 7], U.paySelectController.hide(), U.payTableController.playActiveAllNode()), Q.length > 0 && (U.slotController.getSlotItemWithIndex(Q).forEach(function (w) {
                  w.active = true;
                }), this.generalControllers.fastSpinAnimationController.reset()), U.infobarController.displayNormalTip(), U.payTableController.playWildInactive();
              }, k.prototype.callApi = function (z) {
                M.sequenceCallback(q.goToStateCallback("result", true), this.tu.bind(this))(z);
              }, k.prototype.tu = function (z) {
                var L = this;
                H.doTransactionAPIRequest({
                  'name': this.name,
                  'apiRequest': C.pgApiClient.spin.bind(C.pgApiClient),
                  'fallbackRequest': C.pgApiClient.getGameInfo.bind(C.pgApiClient)
                }, this.dataSource, function (v, b) {
                  b && (v && V.shouldAutoSpin() && V.exitAutoSpin(L.generalControllers.spinButtonController), q.transitionCompleteCallback("result")(z));
                });
              }, __decorate([m], k);
            }(x.default);
          y.default = D, cc._RF.pop();
        }
      }
    }, IY],
    'PGSlotTransactionModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "dd180m4s5VGebUu7dqjUGTK", "PGSlotTransactionModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.SpinType = undefined;
          var x = j("SlotProperties"),
            C = j("SlotTransactionModel"),
            H = (j("PiggyGoldTweaksConfig"), j("TweaksData"), j("Protoutils")),
            r = j("WinLinesModel");
          (function (M) {
            M[M.NORMAL = 1] = "NORMAL";
          })(y.SpinType || (y.SpinType = {}));
          var V = function (M) {
            function q() {
              return null !== M && M.apply(this, arguments) || this;
            }
            var m;
            return __extends(q, M), m = q, q.prototype.updateSlotGameTransactionInfo = function (D) {
              var W = D.frl,
                k = D.pc,
                z = D.tnbwm,
                L = D.wp,
                v = D.wm;
              this.iu = L ? new r.WinLinesModel(L) : undefined, W.forEach(function (b, U) {
                {
                  if (U % 3 == 1 && b === x.SlotIndexes.BLANK) {
                    var Q = U % 3;
                    W[U] = W[U + (2 - Q)], W[U + (2 - Q)] = x.SlotIndexes.BAR_1;
                  }
                }
              }), this.su = W, this.eu = k, this.nu = v, this.ou = z, this.cu(v, z), this.hu = this.ru(), this.au = this.uu();
            }, q.prototype.cu = function (D, W) {
              D && (W ? this.ou[4] = D : this.ou = {
                4: D
              });
            }, q.prototype.ru = function () {
              var D = false;
              return this.reels.forEach(function (W) {
                {
                  W === x.SlotIndexes.WILD && (D = true);
                }
              }), D;
            }, q.prototype.uu = function () {
              {
                var D = this.reels;
                return (D[0] !== x.SlotIndexes.BLANK || D[2] !== x.SlotIndexes.BLANK) && D[0] === D[2];
              }
            }, q.prototype.lu = function (D) {
              switch (D) {
                case x.SlotIndexes.BAR_3:
                case x.SlotIndexes.BAR_2:
                case x.SlotIndexes.BAR_1:
                  return true;
                default:
                  return false;
              }
            }, q.prototype.fu = function (D) {
              {
                return this.lu(W[0]) && this.lu(W[1]) && this.lu(W[2]);
              }
            }, q.prototype.du = function () {
              var D = this.reels.slice(),
                W = [],
                k = x.SlotIndexes.WILD;
              return D.forEach(function (z, L) {
                z === x.SlotIndexes.WILD ? W.push(L) : k = z;
              }), W.length > 0 && W.forEach(function (z) {
                D[z] = k;
              }), D;
            }, Object.defineProperty(q.prototype, "winLines", {
              'get': function () {
                {
                  return this.iu;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "isPossibleWin", {
              'get': function () {
                return this.au;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "possibleWinSymbolIndex", {
              'get': function () {
                if (this.reels[0] === this.reels[2]) return this.reels[0];
                var D = this.du();
                return D[0] === D[2] ? D[0] : this.lu(D[0]) && this.lu(D[2]) ? x.SlotIndexes.BLANK : -1;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "winSymbolIndex", {
              'get': function () {
                var D = -1;
                if (this.totalWinAmount > 0) {
                  var W = this.du();
                  if (W[0] === W[1] && W[1] === W[2]) return W[0];
                  if (this.fu(W)) return x.SlotIndexes.BLANK;
                  W.forEach(function (k) {
                    k !== x.SlotIndexes.WILD && (D = k);
                  });
                }
                return D;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "middleReelsMutiply", {
              'get': function () {
                return this.ou;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "hasWild", {
              'get': function () {
                return this.hu;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "fakeReels", {
              'get': function () {
                return this.su;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "wildMultiply", {
              'get': function () {
                return this.nu;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(q.prototype, "piggyFeature", {
              'get': function () {
                return null !== this.eu;
              },
              'enumerable': false,
              'configurable': true
            }), q.prototype.getGameProtoMessage = function () {
              var D = {};
              D.ctor = m;
              D.givenName = "SlotCommonResponse";
              D.isRoot = true;
              return H.createProtoMessages([W]);
            }, q.registryKey = "SlotCommonResponse", __decorate([H.api('wp', 101, "Int32List", false, false, false, "int32")], q.prototype, "_winLines", undefined), __decorate([H.api("frl", 103, "int32", true, false, false)], q.prototype, "_fakeReels", undefined), __decorate([H.api('pc', 104, "int32", false, false, true)], q.prototype, "_piggyFeature", undefined), __decorate([H.api('wm', 105, "int32", false, false, true)], q.prototype, "_wildMultiply", undefined), __decorate([H.api("tnbwm", 106, "int32", false, false, false, "int32")], q.prototype, "_blankSlotMultiply", undefined), m = __decorate([H.messageName("SlotCommonResponse")], q);
          }(C.default);
          y.default = V, cc._RF.pop();
        }
      }
    }, Ie],
    'PGSpinButtonController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "78f4e8xn2pEkbcTD0r/civR", "PGSpinButtonController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = cc._decorator,
            H = C.ccclass,
            V = C.property,
            M = O("SpinButtonController"),
            q = O("AudioManager"),
            m = O("AutomationDecorator"),
            D = O("SpinButtonViewController.spec"),
            W = O("ButtonHitTest"),
            k = O("SlotAnalyticsEnum"),
            z = function (L) {
              function v() {
                var Q = null !== L && L.apply(this, arguments) || this;
                return Q.normalSpinHolder = undefined, Q.autoSpinNode = undefined, Q.mouseHoverNode = undefined, Q.spinEffectNode = undefined, Q.disabledBlurSpriteFrame = undefined, Q.normalArrowSpriteFrame = undefined, Q.blurArrowSpriteFrame = undefined, Q.disabledArrowSpriteFrame = undefined, Q.vu = undefined, Q._u = undefined, Q.pu = undefined, Q.bu = undefined, Q;
              }
              var b = {};
              b.func = D.initSpinButtonNode;
              var U = {};
              U.func = D.setSpinButtonInteractivity;
              return __extends(v, L), Object.defineProperty(v.prototype, "normalSpinController", {
                'get': function () {
                  {
                    return undefined === this.vu && (this.vu = this.normalSpinHolder.getComponent("NormalSpinButtonController")), this.vu;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(v.prototype, "autoSpinController", {
                'get': function () {
                  return undefined === this._u && (this._u = this.autoSpinNode.getComponent("AutoSpinButtonController")), this._u;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(v.prototype, "mouseHoverController", {
                'get': function () {
                  return undefined === this.pu && (this.pu = this.mouseHoverNode.getComponent("SpinButtonMouseHoverController")), this.pu;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(v.prototype, "spinEffectController", {
                'get': function () {
                  {
                    return undefined === this.bu && (this.bu = this.spinEffectNode.getComponent("SpinButtonEffectController")), this.bu;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), v.prototype.fastSpin = function () {
                this.mode !== M.SpinButtonMode.AUTOSPIN && (this.Zs = false, this.normalSpinController.setFastSpinLook());
              }, v.prototype.fastStop = function () {
                {
                  this.mode !== M.SpinButtonMode.AUTOSPIN && (this.Zs = false, this.normalSpinController.setFastStopLook());
                }
              }, v.prototype.clickSpinButton = function (Q) {
                if (undefined === Q && (Q = k.SpinTrigger.CLICK), this.mode !== M.SpinButtonMode.DISABLED && W.buttonHitTest(this.node)) {
                  var w = this.clickCallback;
                  w && w(Q);
                }
              }, v.prototype.onStopAllAnimations = function () {
                this.normalSpinController.setStopLook(), this.mu();
              }, v.prototype.onInit = function () {
                {
                  this.Su({
                    'spinButton': this.node
                  }), this.autoSpinController.hide(), this.normalSpinController.setSpriteFrame(this.normalArrowSpriteFrame, this.blurArrowSpriteFrame, this.disabledArrowSpriteFrame, this.disabledBlurSpriteFrame), this.normalSpinController.init(), this.onDisableButton(), this.gu(), this.enableMouseHover();
                }
              }, v.prototype.onShowIdleAnimation = function () {
                this.Zs = true, this.normalSpinController.show(false), this.normalSpinController.setIdleLook(), this.mouseHoverController.show();
              }, v.prototype.onShowSpinAnimation = function () {
                q.GeneralAudioPool.spin_btn.play(), this.normalSpinController.setSpinningLook(), this.spinEffectController.play(), this.mouseHoverController.hide();
              }, v.prototype.onShowStopSpinningAnimation = function () {
                this.Zs = false, this.normalSpinController.setStopLook();
              }, v.prototype.onEnableButton = function () {
                this.Zs = true, this.normalSpinController.setIdleLook(), this.Cu(true);
              }, v.prototype.onDisableButton = function () {
                this.Cu(false), this.Zs = false, this.animationState === M.SpinButtonAnimationState.SPINNING ? this.normalSpinController.setFastSpinLook() : this.normalSpinController.setStopLook();
              }, v.prototype.onReplaceSpinBlurredSpriteFrame = function () {
                {
                  this.normalSpinController.setSpriteFrame(this.normalArrowSpriteFrame, this.blurArrowSpriteFrame, this.disabledArrowSpriteFrame, this.disabledBlurSpriteFrame);
                }
              }, v.prototype.showAutoSpinLook = function (Q) {
                {
                  this.Zs = true, this.normalSpinController.hide(), this.autoSpinController.showAutoSpinMode(Q, this.yu.bind(this)), this.node.width = 260, L.prototype.showAutoSpinLook.call(this, Q);
                }
              }, v.prototype.onUpdateAutoSpinCount = function (Q) {
                this.autoSpinController.updateAutoSpinCount(Q);
              }, v.prototype.onExitAutoSpinMode = function () {
                this.normalSpinController.show(true), this.node.width = 230, this.autoSpinController.exitAutoSpinMode();
              }, v.prototype.onResumeIdle = function () {
                this.idle();
              }, v.prototype.onResumeSpin = function () {
                {
                  this.fastSpin();
                }
              }, v.prototype.onResumeStop = function () {
                {
                  this.stopSpin();
                }
              }, v.prototype.onPlayMouseOverEffect = function () {
                this.mouseHoverController.mouseHovered();
              }, v.prototype.onHideMouseOverEffect = function () {
                this.mouseHoverController.mouseLeave();
              }, v.prototype.yu = function () {
                var Q = this.Mu;
                this.Mu = undefined, Q && Q();
              }, v.prototype.wu = function (Q) {
                var w = Q.touch ? Q.touch.getLocation() : Q.getLocation(),
                  P = this.node.convertToNodeSpaceAR(w),
                  R = this.node.width / 2;
                return Math.sqrt(Math.pow(P.x, 2) + Math.pow(P.y, 2)) <= R;
              }, v.prototype.Au = function (Q) {
                {
                  this.wu(Q) && this.Zs && this.clickSpinButton();
                }
              }, v.prototype.mouseHovered = function (Q) {
                {
                  this.Zs && this.mode !== M.SpinButtonMode.DISABLED && (this.isHover || this.wu(Q) && L.prototype.mouseHovered.call(this, Q));
                }
              }, v.prototype.mouseLeave = function (Q) {
                this.isHover && (this.wu(Q) || L.prototype.mouseLeave.call(this, Q));
              }, v.prototype.Pu = function (Q) {
                this.Zs && (this.wu(Q) ? !this.isHover && L.prototype.mouseHovered.call(this, Q) : this.isHover && L.prototype.mouseLeave.call(this, Q));
              }, v.prototype.gu = function () {
                this.node.on(cc.Node.EventType.MOUSE_MOVE, this.Pu, this), this.node.on(cc.Node.EventType.TOUCH_END, this.Au, this);
              }, v.prototype.Su = function () {}, v.prototype.Cu = function () {}, __decorate([V(cc.Node)], v.prototype, "normalSpinHolder", undefined), __decorate([V(cc.Node)], v.prototype, "autoSpinNode", undefined), __decorate([V(cc.Node)], v.prototype, "mouseHoverNode", undefined), __decorate([V(cc.Node)], v.prototype, "spinEffectNode", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "disabledBlurSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "normalArrowSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "blurArrowSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "disabledArrowSpriteFrame", undefined), __decorate([m.automationDec(b)], v.prototype, "_initSpinButtonNodes", null), __decorate([m.automationDec(U)], v.prototype, "_setSpinButtonInteractive", null), __decorate([H], v);
            }(M.default);
          B.default = z, cc._RF.pop();
        }
      }
    }, IX],
    'PageControlButton': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "49dd983G1VDGoSnw7stgTlI", "PageControlButton")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("Button"),
            C = cc._decorator,
            H = C.ccclass,
            r = C.property,
            V = function (M) {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.sprite = undefined, m.selectImg = undefined, m.normalImg = undefined, m.selectTintColor = undefined, m.normalTintColor = undefined, m.index = 0, m.Bu = false, m;
              }
              return __extends(q, M), q.prototype.init = function () {
                this.selectImg && (this.sprite.SpriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Bu = false;
              }, q.prototype.setSelect = function () {
                {
                  this.Bu || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Bu = true);
                }
              }, q.prototype.setUnselect = function () {
                {
                  this.Bu && (this.selectImg && (this.sprite.spriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Bu = false);
                }
              }, q.prototype.selectDot = function () {
                {
                  this.delegate && this.delegate.canChangePage && !this.delegate.canChangePage() || this.Bu || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Bu = true, this.delegate && this.delegate.didSelectDotAtIndex && this.delegate.didSelectDotAtIndex(this.index));
                }
              }, __decorate([r(cc.Sprite)], q.prototype, "sprite", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "selectImg", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "normalImg", undefined), __decorate([r(cc.Color)], q.prototype, "selectTintColor", undefined), __decorate([r(cc.Color)], q.prototype, "normalTintColor", undefined), __decorate([r(cc.Integer)], q.prototype, "index", undefined), __decorate([H], q);
            }(x.default);
          y.default = V, cc._RF.pop();
        }
      }
    }, Ia],
    'PageControl': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "db0df9/6UZNW6sskb9QIFSg", "PageControl")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("PageControlButton"),
            C = cc._decorator,
            H = C.ccclass,
            r = C.property,
            V = function (M) {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.buttonPrefab = undefined, m.delegate = undefined, m.Ou = 0, m.Iu = 0, m.Gu = [], m;
              }
              return __extends(q, M), q.prototype.init = function (m, D, W) {
                if (!(m >= D || m < 0)) {
                  {
                    this.node.removeAllChildren(), this.Iu = D, this.delegate = W;
                    for (var k = [], z = 0; z < D; z++) {
                      var L = cc.instantiate(this.buttonPrefab);
                      L.parent = this.node;
                      var v = L.getComponent(x.default);
                      v.index = z, v.delegate = this, v.init(), k.push(v);
                    }
                    k[m].setSelect(), this.Ou = m, this.Gu = k;
                  }
                }
              }, q.prototype.layoutContainer = function (m) {
                this.getComponent(cc.Layout).spacingX = m;
              }, q.prototype.changeCurrentPage = function (m) {
                var D = this.Iu;
                if (!(m < 0 || m >= D)) {
                  var W = this.Gu;
                  W[this.Ou].setUnselect(), W[m].setSelect(), this.Ou = m;
                }
              }, q.prototype.getCurrentPage = function () {
                return this.Ou;
              }, q.prototype.didSelectDotAtIndex = function (m) {
                {
                  this.Gu[this.Ou].setUnselect(), this.Ou = m, this.delegate && this.delegate.changePage && this.delegate.changePage(m);
                }
              }, q.prototype.canChangePage = function () {
                var m = this.delegate;
                return !(m && m.enableChangePage && !m.enableChangePage());
              }, __decorate([r(cc.Prefab)], q.prototype, "buttonPrefab", undefined), __decorate([H], q);
            }(cc.Component);
          y.default = V, cc._RF.pop();
        }
      }
    }, In],
    'PaySelectController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "d84c2j6GplDordOGXSko/23", "PaySelectController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x,
            C = j("PaySelect"),
            H = j("SlotProperties"),
            V = cc._decorator,
            M = V.ccclass,
            q = V.property;
          (function (D) {
            D[D.SHOW = 0] = "SHOW", D[D.HIDING = 1] = "HIDING", D[D.HIDE = 2] = "HIDE";
          })(x || (x = {}));
          var m = function (D) {
            {
              function W() {
                {
                  var k = null !== D && D.apply(this, arguments) || this;
                  return k.paySelectList = [], k.paySelectHolder = undefined, k.Nu = x.HIDE, k.Tu = [], k.Hu = cc.v2(0, 0), k;
                }
              }
              return __extends(W, D), W.prototype.cacheLocalSlotPosition = function (k) {
                var z = this,
                  L = this.Tu,
                  v = H.slotProperties.getSlotItemSize(),
                  b = v.x / 2,
                  U = v.y / 2;
                [1, 4, 7].forEach(function (Q, w) {
                  var P = H.slotProperties.getSlotWorldPositionFromIndex(Q),
                    R = z.paySelectList[w].node.parent.convertToNodeSpaceAR(P);
                  L.push(new cc.Vec2(R.x + b, R.y + U));
                }), k && k();
              }, W.prototype.playNormalPaySelect = function (k, z) {
                var L = this;
                if (this.Nu !== x.SHOW) {
                  this.node.active = true;
                  var v = this.Tu;
                  this.Nu = x.SHOW, this.paySelectList.forEach(function (b, U) {
                    var Q = v[U] ? v[U] : L.Hu;
                    b.node.position = Q, z[U] === H.SlotIndexes.WILD ? b.playBg() : b.playWithSymbol(k[U]);
                  });
                }
              }, W.prototype.hide = function () {
                {
                  var k = this;
                  this.Nu !== x.HIDING && (this.Nu = x.HIDING, this.paySelectList.forEach(function (z, L) {
                    L === k.paySelectList.length - 1 ? z.stop(k.Ru.bind(k)) : z.stop(undefined);
                  }));
                }
              }, W.prototype.Ru = function () {
                this.node.active = false, this.Nu = x.HIDE;
              }, W.prototype.destroy = function () {
                var k = this;
                return this.paySelectList.forEach(function (z, L) {
                  {
                    L === k.paySelectList.length - 1 ? z.stop(k.Ru.bind(k)) : z.stop(undefined);
                  }
                }), D.prototype.destroy.call(this);
              }, __decorate([q([C.default])], W.prototype, "paySelectList", undefined), __decorate([q(cc.Node)], W.prototype, "paySelectHolder", undefined), __decorate([M], W);
            }
          }(cc.Component);
          y.default = m, cc._RF.pop();
        }
      }
    }, IE],
    'PaySelect': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "13c91j1YBNNraBMILpxtarV", "PaySelect")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.animation = undefined, q.symbolAnimation = undefined, q.glowNode = undefined, q.symbolSprite = undefined, q.payLineLeft = undefined, q.payLineRight = undefined, q.ku = undefined, q;
            }
            return __extends(M, V), M.prototype.playBg = function () {
              {
                this.ku && (this.animation.off("finished", this.Lu, this), this.ku = undefined), this.animation.on("finished", this.Eu, this), this.animation.play("pay_select_show"), this.glowNode.runAction(cc.repeatForever(cc.rotateBy(1, 50)));
              }
            }, M.prototype.playWithSymbol = function (q) {
              {
                this.playBg(), this.symbolSprite.spriteFrame = q, this.symbolAnimation.play(), this.schedule(this.ju, 1.5);
              }
            }, M.prototype.ju = function () {
              this.symbolAnimation.play();
            }, M.prototype.payLineGlow = function () {
              var q = cc.sequence(cc.tintTo(0.2, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0)),
                m = cc.sequence(cc.tintTo(0.2, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0));
              this.payLineLeft.runAction(q), this.payLineRight.runAction(m);
            }, M.prototype.Eu = function () {
              {
                this.animation.off("finished", this.Eu, this), this.animation.play("pay_select_circle");
              }
            }, M.prototype.stop = function (q) {
              this.animation.stop(), q && (this.ku = q, this.animation.on("finished", this.Lu, this)), this.animation.play("pay_select_hide"), this.glowNode.stopAllActions(), this.payLineLeft.stopAllActions(), this.payLineRight.stopAllActions(), this.unschedule(this.ju), this.symbolAnimation.stop(), this.symbolSprite.node.scale = 1, this.symbolSprite.spriteFrame = undefined;
            }, M.prototype.Lu = function () {
              {
                this.animation.off("finished", this.Lu, this);
                var q = this.ku;
                this.ku = undefined, q && q();
              }
            }, M.prototype.destroy = function () {
              {
                return this.stop(undefined), this.node.destroy(), V.prototype.destroy.call(this);
              }
            }, __decorate([H(cc.Animation)], M.prototype, "animation", undefined), __decorate([H(cc.Animation)], M.prototype, "symbolAnimation", undefined), __decorate([H(cc.Node)], M.prototype, "glowNode", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbolSprite", undefined), __decorate([H(cc.Node)], M.prototype, "payLineLeft", undefined), __decorate([H(cc.Node)], M.prototype, "payLineRight", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'PayTableController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "b37daKpKgNLXravbBivYGwk", "PayTableController")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x), B.PAYTABLE_ITEM_INDEXES = undefined;
        var C = O("Utils"),
          H = cc._decorator,
          r = H.ccclass,
          V = H.property;
        var M = {};
        M.WILD = 0;
        M.GOLD_PIG = 1;
        M.INGOT = 2;
        M.JADE = 3;
        M.BAR_3 = 4;
        M.BAR_2 = 5;
        M.BAR_1 = 6;
        M.ANY = 7;
        B.PAYTABLE_ITEM_INDEXES = cc.Enum(M);
        var q = function (m) {
          function D() {
            var W = null !== m && m.apply(this, arguments) || this;
            return W.anyNormalSprite = undefined, W.wildText = undefined, W.wildSymbolNode = undefined, W.containerSymbolNode = undefined, W.numberHolderNode = undefined, W.glowNode = undefined, W.Du = [], W.Uu = [], W.Wu = undefined, W.Fu = undefined, W.xu = undefined, W.Vu = undefined, W;
          }
          return __extends(D, m), Object.defineProperty(D.prototype, "paytableWildController", {
            'get': function () {
              {
                return undefined === this.Wu && (this.Wu = this.wildSymbolNode.getComponent("PaytableWildEffectController")), this.Wu;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "paytableContainerController", {
            'get': function () {
              {
                return undefined === this.Fu && (this.Fu = this.containerSymbolNode.getComponent("PaytableContainerController")), this.Fu;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "paytableNumberHolderController", {
            'get': function () {
              return undefined === this.xu && (this.xu = this.numberHolderNode.getComponent("PaytableNumberHolderController")), this.xu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "paytableGlowController", {
            'get': function () {
              return undefined === this.Vu && (this.Vu = this.glowNode.getComponent("PaytableGlowController")), this.Vu;
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.init = function () {
            {
              C.sequenceCallback(this.paytableContainerController.init.bind(this.paytableContainerController), this.paytableNumberHolderController.init.bind(this.paytableNumberHolderController), this.paytableWildController.init.bind(this.paytableWildController))(this.setSymbolList.bind(this));
            }
          }, D.prototype.setSymbolList = function () {
            this.Du = this.paytableContainerController.symbolNode, this.Uu = this.paytableNumberHolderController.numberNode;
          }, D.prototype.setPaytableAnyLocalizeSF = function (W) {
            {
              this.anyNormalSprite.spriteFrame = W;
            }
          }, D.prototype.setPaytableWildLocalizeSF = function (W) {
            {
              this.wildText.spriteFrame = W;
            }
          }, D.prototype.fadeRandomMultiple = function () {
            this.paytableWildController.randomFading();
          }, D.prototype.fadeMultiply = function (W, k) {
            {
              undefined === k && (k = true), this.paytableWildController.fadeMultiply(W, k);
            }
          }, D.prototype.playWildActive = function () {
            this.paytableWildController.playActive(), this.paytableWildController.randomFading();
          }, D.prototype.playWildInactive = function () {
            this.paytableWildController.playNoActive(), this.paytableWildController.randomFading();
          }, D.prototype.playWinFlash = function (W) {
            this.paytableGlowController.setGlowPosition(W), this.paytableGlowController.playFlash(), this.Du.forEach(function (k, z) {
              var L = k.getComponent("PaytableSymbolController");
              W !== z && L.playInactiveNode();
            }), this.Uu.forEach(function (k, z) {
              var L = k.getComponent("NumberPaytableController");
              W !== z && L.playInactiveNode();
            });
          }, D.prototype.playActiveAllNode = function () {
            {
              this.paytableGlowController.stop(), this.paytableWildController.playActive(), this.Du.forEach(function (W) {
                W.getComponent("PaytableSymbolController").playActive();
              }), this.Uu.forEach(function (W) {
                W.getComponent("NumberPaytableController").playActive();
              });
            }
          }, D.prototype.destroy = function () {
            return this.node.destroy(), m.prototype.destroy.call(this);
          }, __decorate([V(cc.Sprite)], D.prototype, "anyNormalSprite", undefined), __decorate([V(cc.Sprite)], D.prototype, "wildText", undefined), __decorate([V(cc.Node)], D.prototype, "wildSymbolNode", undefined), __decorate([V(cc.Node)], D.prototype, "containerSymbolNode", undefined), __decorate([V(cc.Node)], D.prototype, "numberHolderNode", undefined), __decorate([V(cc.Node)], D.prototype, "glowNode", undefined), __decorate([r], D);
        }(cc.Component);
        B.default = q, cc._RF.pop();
      }
    }, IF],
    'PaytableContainerController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "ed505sc27RN0ZC3TgW5G4qw", "PaytableContainerController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("PayTableController"),
          C = cc._decorator,
          H = C.ccclass,
          V = C.property,
          M = Object.create(null);
        M[x.PAYTABLE_ITEM_INDEXES.WILD] = new cc.Vec2(-310, -90), M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = new cc.Vec2(-310, -150), M[x.PAYTABLE_ITEM_INDEXES.INGOT] = new cc.Vec2(-310, -210), M[x.PAYTABLE_ITEM_INDEXES.JADE] = new cc.Vec2(-310, -270), M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = new cc.Vec2(200, -90), M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = new cc.Vec2(200, -150), M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = new cc.Vec2(200, -210);
        var q = function (m) {
          function D() {
            {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.symbolItem = undefined, W.anySymbolItem = undefined, W.symbolSprite = [], W.zu = [], W;
            }
          }
          return __extends(D, m), Object.defineProperty(D.prototype, "symbolNode", {
            'get': function () {
              {
                return this.zu;
              }
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.init = function (W) {
            for (var k = 0; k <= 7; k++) {
              var z = cc.instantiate(this.symbolItem),
                L = z.getComponent("PaytableSymbolController");
              if (k < 7) {
                L.setSymbol(this.symbolSprite[k]), this.zu.push(z);
                var v = M[k];
                z.setPosition(v), this.node.addChild(z);
              } else this.zu.push(this.anySymbolItem);
            }
            W && W();
          }, D.prototype.destroy = function () {
            return this.node.destroy(), m.prototype.destroy.call(this);
          }, __decorate([V(cc.Prefab)], D.prototype, "symbolItem", undefined), __decorate([V(cc.Node)], D.prototype, "anySymbolItem", undefined), __decorate([V(cc.SpriteFrame)], D.prototype, "symbolSprite", undefined), __decorate([H], D);
        }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, IN],
    'PaytableGlowController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "bfe777kB7dHhZKNV00N7iKw", "PaytableGlowController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("PayTableController"),
          C = cc._decorator,
          H = C.ccclass,
          V = C.property,
          M = Object.create(null);
        M[x.PAYTABLE_ITEM_INDEXES.WILD] = new cc.Vec2(-390, -90), M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = new cc.Vec2(-390, -150), M[x.PAYTABLE_ITEM_INDEXES.INGOT] = new cc.Vec2(-390, -210), M[x.PAYTABLE_ITEM_INDEXES.JADE] = new cc.Vec2(-390, -270), M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = new cc.Vec2(100, -90), M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = new cc.Vec2(100, -150), M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = new cc.Vec2(100, -210), M[x.PAYTABLE_ITEM_INDEXES.ANY] = new cc.Vec2(100, -270);
        var q = function (m) {
          {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.glowNode = undefined, W;
            }
            return __extends(D, m), D.prototype.setGlowPosition = function (W) {
              if (-1 === W) this.glowNode.setPosition(M[x.PAYTABLE_ITEM_INDEXES.WILD]);else {
                {
                  var k = M[W];
                  this.glowNode.setPosition(k);
                }
              }
            }, D.prototype.playFlash = function () {
              {
                this.Ku(), this.glowNode.stopAllActions(), this.glowNode.opacity = 0;
                var W = cc.sequence(cc.fadeTo(0.1, 0), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
                this.glowNode.runAction(cc.repeatForever(W));
              }
            }, D.prototype.playInactiveNode = function (W) {
              {
                undefined === W && (W = true), this.glowNode.stopAllActions(), W ? this.glowNode.runAction(cc.sequence(cc.fadeTo(0.1, 0), cc.callFunc(this.qu, this))) : this.glowNode.opacity = 0;
              }
            }, D.prototype.playActive = function (W) {
              undefined === W && (W = true), this.Ku(), this.glowNode.stopAllActions(), W ? this.glowNode.runAction(cc.fadeTo(0.1, 255)) : this.glowNode.opacity = 255;
            }, D.prototype.stop = function () {
              this.glowNode.opacity = 0, this.glowNode.stopAllActions();
            }, D.prototype.qu = function () {
              this.glowNode.stopAllActions(), this.glowNode.active = false;
            }, D.prototype.Ku = function () {
              this.glowNode.active = true;
            }, D.prototype.destroy = function () {
              return this.stop(), this.node.destroy(), m.prototype.destroy.call(this);
            }, __decorate([V(cc.Node)], D.prototype, "glowNode", undefined), __decorate([H], D);
          }
        }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, IZ],
    'PaytableNumberHolderController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "dc803gUPgdGMYX34ysSghk/", "PaytableNumberHolderController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("PayTableController"),
          C = cc._decorator,
          H = C.ccclass,
          V = C.property,
          M = Object.create(null);
        M[x.PAYTABLE_ITEM_INDEXES.WILD] = {
          'position': new cc.Vec2(-150, -90),
          'payout': [5, 0, 0]
        }, M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = {
          'position': new cc.Vec2(-150, -150),
          'payout': [5, 0]
        }, M[x.PAYTABLE_ITEM_INDEXES.INGOT] = {
          'position': new cc.Vec2(-150, -210),
          'payout': [2, 0]
        }, M[x.PAYTABLE_ITEM_INDEXES.JADE] = {
          'position': new cc.Vec2(-150, -270),
          'payout': [1, 5]
        }, M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = {
          'position': new cc.Vec2(350, -90),
          'payout': [1, 0]
        }, M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = {
          'position': new cc.Vec2(350, -150),
          'payout': [8]
        }, M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = {
          'position': new cc.Vec2(350, -210),
          'payout': [5]
        }, M[x.PAYTABLE_ITEM_INDEXES.ANY] = {
          'position': new cc.Vec2(350, -270),
          'payout': [3]
        };
        var q = function (m) {
          {
            function W() {
              var k = null !== m && m.apply(this, arguments) || this;
              return k.numberItem = undefined, k.numberHolder = undefined, k.numberSpriteZero = undefined, k.numberSpriteOne = undefined, k.numberSpriteTwo = undefined, k.numberSpriteThree = undefined, k.numberSpriteFive = undefined, k.numberSpriteEight = undefined, k.Ju = [], k;
            }
            var D = {};
            D.get = function () {
              return this.Ju;
            };
            D.enumerable = false;
            D.configurable = true;
            return __extends(W, m), Object.defineProperty(W.prototype, "numberNode", D), W.prototype.init = function (k) {
              for (var z = 0; z <= 7; z++) {
                {
                  var L = M[z],
                    v = cc.instantiate(this.numberHolder);
                  this.Yu(L.payout, v), this.Ju.push(v);
                  var b = L.position;
                  v.setPosition(b), this.node.addChild(v);
                }
              }
              k && k();
            }, W.prototype.Yu = function (k, z) {
              {
                var L = this;
                k.forEach(function (v) {
                  var b = cc.instantiate(L.numberItem),
                    U = b.getComponent("cc.Sprite");
                  switch (v) {
                    case 0:
                      U.spriteFrame = L.numberSpriteZero;
                      break;
                    case 1:
                      U.spriteFrame = L.numberSpriteOne;
                      break;
                    case 2:
                      U.spriteFrame = L.numberSpriteTwo;
                      break;
                    case 3:
                      U.spriteFrame = L.numberSpriteThree;
                      break;
                    case 5:
                      U.spriteFrame = L.numberSpriteFive;
                      break;
                    case 8:
                      U.spriteFrame = L.numberSpriteEight;
                  }
                  z.addChild(b);
                });
              }
            }, __decorate([V(cc.Prefab)], W.prototype, "numberItem", undefined), __decorate([V(cc.Prefab)], W.prototype, "numberHolder", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteZero", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteOne", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteTwo", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteThree", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteFive", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteEight", undefined), __decorate([H], W);
          }
        }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, Ip],
    'PaytableSymbolController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "7ac8cKQbhVEjpzhJ0UPPFHw", "PaytableSymbolController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.symbol01 = undefined, q.symbol02 = undefined, q.symbol03 = undefined, q.symbolNode = undefined, q;
            }
            return __extends(M, V), M.prototype.playInactiveNode = function (q) {
              undefined === q && (q = true), this.symbolNode.stopAllActions(), q ? this.symbolNode.runAction(cc.fadeTo(0.1, 102)) : this.symbolNode.opacity = 102;
            }, M.prototype.playActive = function (q) {
              {
                undefined === q && (q = true), this.symbolNode.stopAllActions(), q ? this.symbolNode.runAction(cc.fadeTo(0.1, 255)) : this.symbolNode.opacity = 255;
              }
            }, M.prototype.setSymbol = function (q) {
              this.symbol01.spriteFrame = q, this.symbol02.spriteFrame = q, this.symbol03.spriteFrame = q;
            }, M.prototype.setAnySymbol = function (q, m, D) {
              this.symbol01.spriteFrame = q, this.symbol02.spriteFrame = m, this.symbol03.spriteFrame = D;
            }, M.prototype.destroy = function () {
              return this.symbolNode.stopAllActions(), this.node.destroy(), V.prototype.destroy.call(this);
            }, __decorate([H(cc.Sprite)], M.prototype, "symbol01", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbol02", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbol03", undefined), __decorate([H(cc.Node)], M.prototype, "symbolNode", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'PaytableWildEffectController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "8c65aHRidRK5a2rYkv5vM5p", "PaytableWildEffectController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x,
          C,
          H = j("SlotProperties"),
          V = cc._decorator,
          M = V.ccclass,
          q = V.property;
        (function (D) {
          {
            D[D.WiLD_STATE_ONE = 0] = "WiLD_STATE_ONE", D[D.WiLD_STATE_TWO = 0] = "WiLD_STATE_TWO";
          }
        })(x || (x = {})), function (D) {
          D[D.FADING = 0] = "FADING", D[D.STATIC = 1] = "STATIC";
        }(C || (C = {}));
        var m = function (D) {
          {
            function W() {
              var k = null !== D && D.apply(this, arguments) || this;
              return k.wildHolderNode = undefined, k.normalSymbolNode = undefined, k.normalSymbolNode02 = undefined, k.textNode = undefined, k.currentMultiplySymbol = undefined, k.currentMultiplySymbol02 = undefined, k.wildMultiplyOne = undefined, k.wildMultiplyTwo = undefined, k.wildMultiplyFive = undefined, k.wildMultiplyTen = undefined, k.wildGlowNode = undefined, k.Qu = undefined, k.Xu = undefined, k.Zu = undefined, k.$u = undefined, k;
            }
            return __extends(W, D), W.prototype.init = function (k) {
              this.Xu = H.WildSlotIndexes.ONE, this.Zu = x.WiLD_STATE_ONE, k && k();
            }, W.prototype.randomFading = function () {
              if (this.$u !== C.FADING) switch (this.$u = C.FADING, this.wildGlowNode.stopAllActions(), this.textNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.wildGlowNode.active = false, this.textNode.runAction(cc.fadeTo(0.3, 255)), this.Zu) {
                case x.WiLD_STATE_ONE:
                  this.tl(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode.runAction(cc.spawn(cc.fadeOut(0.5), cc.callFunc(this.il, this), cc.callFunc(this.sl, this)));
                  break;
                case x.WiLD_STATE_TWO:
                  this.el(), this.normalSymbolNode02.stopAllActions(), this.normalSymbolNode02.runAction(cc.spawn(cc.fadeOut(0.5), cc.callFunc(this.nl, this), cc.callFunc(this.ol, this)));
              }
            }, W.prototype.fadeMultiply = function (k, z) {
              if (undefined === z && (z = true), this.$u !== C.STATIC) if (this.$u = C.STATIC, this.normalSymbolNode.stopAllActions(), this.normalSymbolNode02.stopAllActions(), this.textNode.stopAllActions(), this.Qu = k, this.Xu = k, this.playPaytableGlow(), z) {
                {
                  switch (this.Zu) {
                    case x.WiLD_STATE_ONE:
                      this.normalSymbolNode02.runAction(cc.fadeOut(0.1)), this.normalSymbolNode.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.cl, this), cc.fadeIn(0.5), cc.callFunc(this.hl, this)));
                      break;
                    case x.WiLD_STATE_TWO:
                      this.normalSymbolNode.runAction(cc.fadeOut(0.1)), this.normalSymbolNode02.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.al, this), cc.fadeIn(0.5), cc.callFunc(this.ul, this)));
                  }
                  this.textNode.runAction(cc.fadeTo(0.3, 255));
                }
              } else this.Zu = x.WiLD_STATE_ONE, this.cl(), this.normalSymbolNode02.opacity = 0, this.normalSymbolNode.opacity = 255, this.textNode.opacity = 255;
            }, W.prototype.playPaytableGlow = function () {
              {
                var k = cc.sequence(cc.fadeTo(0.1, 0), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
                this.wildGlowNode.active = true, this.wildGlowNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.wildGlowNode.runAction(k.repeatForever());
              }
            }, W.prototype.playActive = function () {
              255 !== this.wildHolderNode.opacity && (this.textNode.stopAllActions(), this.wildGlowNode.active = true, this.wildGlowNode.stopAllActions(), this.wildHolderNode.runAction(cc.fadeTo(0.1, 255)), this.wildGlowNode.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.ll, this))), this.textNode.runAction(cc.fadeTo(0.1, 255)));
            }, W.prototype.playNoActive = function () {
              (this.wildGlowNode.active || 102 !== this.wildHolderNode.opacity) && (this.textNode.stopAllActions(), this.wildGlowNode.stopAllActions(), this.wildHolderNode.stopAllActions(), this.wildHolderNode.opacity = 102, this.wildGlowNode.opacity = 0, this.wildGlowNode.active = false, this.textNode.opacity = 102);
            }, W.prototype.ol = function () {
              this.Zu = x.WiLD_STATE_ONE, this.tl(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode.runAction(cc.sequence(cc.fadeTo(1, 255), cc.callFunc(this.hl, this), cc.delayTime(1), cc.spawn(cc.callFunc(this.il, this), cc.fadeOut(1), cc.callFunc(this.sl, this))));
            }, W.prototype.sl = function () {
              {
                this.Zu = x.WiLD_STATE_TWO, this.el(), this.normalSymbolNode02.stopAllActions(), this.normalSymbolNode02.runAction(cc.sequence(cc.fadeTo(1, 255), cc.delayTime(1), cc.callFunc(this.ul, this), cc.spawn(cc.callFunc(this.nl, this), cc.fadeOut(1), cc.callFunc(this.ol, this))));
              }
            }, W.prototype.cl = function () {
              switch (this.currentMultiplySymbol02.spriteFrame = undefined, this.Qu) {
                case H.WildSlotIndexes.ONE:
                  this.currentMultiplySymbol.spriteFrame = this.wildMultiplyOne;
                  break;
                case H.WildSlotIndexes.TWO:
                  this.currentMultiplySymbol.spriteFrame = this.wildMultiplyTwo;
                  break;
                case H.WildSlotIndexes.FIVE:
                  this.currentMultiplySymbol.spriteFrame = this.wildMultiplyFive;
                  break;
                case H.WildSlotIndexes.TEN:
                  this.currentMultiplySymbol.spriteFrame = this.wildMultiplyTen;
              }
            }, W.prototype.al = function () {
              switch (this.currentMultiplySymbol.spriteFrame = undefined, this.Qu) {
                case H.WildSlotIndexes.ONE:
                  this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyOne;
                  break;
                case H.WildSlotIndexes.TWO:
                  this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyTwo;
                  break;
                case H.WildSlotIndexes.FIVE:
                  this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyFive;
                  break;
                case H.WildSlotIndexes.TEN:
                  this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyTen;
              }
            }, W.prototype.nl = function () {
              this.currentMultiplySymbol.spriteFrame = this.fl();
            }, W.prototype.il = function () {
              this.currentMultiplySymbol02.spriteFrame = this.fl();
            }, W.prototype.ul = function () {
              this.normalSymbolNode.active = false;
            }, W.prototype.hl = function () {
              {
                this.normalSymbolNode02.active = false;
              }
            }, W.prototype.tl = function () {
              this.normalSymbolNode.active = true;
            }, W.prototype.el = function () {
              this.normalSymbolNode02.active = true;
            }, W.prototype.ll = function () {
              this.wildGlowNode.active = false;
            }, W.prototype.fl = function () {
              {
                var k;
                switch (this.Xu) {
                  case H.WildSlotIndexes.ONE:
                    this.Xu = H.WildSlotIndexes.TWO, k = this.wildMultiplyTwo;
                    break;
                  case H.WildSlotIndexes.TWO:
                    this.Xu = H.WildSlotIndexes.FIVE, k = this.wildMultiplyFive;
                    break;
                  case H.WildSlotIndexes.FIVE:
                    this.Xu = H.WildSlotIndexes.TEN, k = this.wildMultiplyTen;
                    break;
                  case H.WildSlotIndexes.TEN:
                    this.Xu = H.WildSlotIndexes.ONE, k = this.wildMultiplyOne;
                }
                return k;
              }
            }, W.prototype.q = function () {
              this.Qu = undefined, this.Xu = undefined, this.textNode.stopAllActions(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode02.stopAllActions(), this.wildGlowNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.normalSymbolNode.opacity = 0, this.normalSymbolNode02.opacity = 0, this.textNode.opacity = 255;
            }, W.prototype.destroy = function () {
              {
                return this.q(), this.node.destroy(), D.prototype.destroy.call(this);
              }
            }, __decorate([q(cc.Node)], W.prototype, "wildHolderNode", undefined), __decorate([q(cc.Node)], W.prototype, "normalSymbolNode", undefined), __decorate([q(cc.Node)], W.prototype, "normalSymbolNode02", undefined), __decorate([q(cc.Node)], W.prototype, "textNode", undefined), __decorate([q(cc.Sprite)], W.prototype, "currentMultiplySymbol", undefined), __decorate([q(cc.Sprite)], W.prototype, "currentMultiplySymbol02", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyOne", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyTwo", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyFive", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyTen", undefined), __decorate([q(cc.Node)], W.prototype, "wildGlowNode", undefined), __decorate([M], W);
          }
        }(cc.Component);
        y.default = m, cc._RF.pop();
      }
    }, Ig],
    'PiggyController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "1fe875rK4ZNGb1Yuop0XJGn", "PiggyController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x,
            C = j("AudioManager"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property;
          (function (m) {
            m[m.NORMAL = 1] = "NORMAL", m[m.FASTSPIN = 2] = "FASTSPIN", m[m.FEATURE = 3] = "FEATURE", m[m.WILD_REACT = 4] = "WILD_REACT";
          })(x || (x = {}));
          var q = function (m) {
            function D() {
              {
                var W = null !== m && m.apply(this, arguments) || this;
                return W.piggySpine = undefined, W.piggyAnim = undefined, W.piggyWildReactFxAnim = undefined, W.flareAnimation = undefined, W.piggySprite = undefined, W.dl = 0, W.vl = 0, W;
              }
            }
            return __extends(D, m), D.prototype.init = function () {
              this.dl = 0, this.playIdle();
            }, D.prototype._l = function (W, k) {
              if ("shoot" === k.data.name) {
                var z = this.pl;
                z && z(), this.pl = undefined, this.piggySpine.setEventListener(undefined), this.flareAnimation.node.active = true, this.flareAnimation.on("finished", this.bl, this), this.flareAnimation.play("flash_frame");
              }
            }, D.prototype.bl = function () {
              this.flareAnimation.off("finished", this.bl, this), this.flareAnimation.node.active = false;
            }, D.prototype.playFeatureExit = function (W) {
              {
                var k = this.piggySpine;
                k.node.active || (k.node.active = true), this.Sl(), this.vl = x.FEATURE, this.onFeatureExitCallback = W, k.clearTrack(0), k.setCompleteListener(this.gl.bind(this)), k.setAnimation(0, "feature_exit", false);
              }
            }, D.prototype.gl = function () {
              var W = this.piggySpine;
              W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
              var k = this.onFeatureExitCallback;
              this.onFeatureExitCallback = undefined, k && k();
            }, D.prototype.playFeatureIdle = function () {
              var W = this.piggySpine;
              W.node.active || (W.node.active = true), this.Sl(), this.vl = x.FEATURE, W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "feature_idle", true);
            }, D.prototype.playFeatureStart = function (W) {
              var k = this.piggySpine;
              k.node.active || (k.node.active = true), this.Sl(), this.pl = W, this.vl = x.FEATURE, k.clearTrack(0), k.setToSetupPose(), k.setCompleteListener(this.playFeatureIdle.bind(this)), k.setEventListener(this._l.bind(this)), k.setAnimation(0, "feature_win", false);
            }, D.prototype.playIdle = function () {
              var W = this.piggySpine;
              W.node.active || (W.node.active = true), this.Sl();
              var k = Math.random();
              W.clearTrack(0), W.setCompleteListener(this.playIdle.bind(this)), k < 0.1 ? (C.GeneralAudioPool.cha_inactive.play(), W.setAnimation(0, "idle3", true)) : k < 0.3 ? W.setAnimation(0, "idle2", false) : W.setAnimation(0, "idle", true);
            }, D.prototype.forceIdle1 = function () {
              {
                var W = this.piggySpine;
                W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle", false);
              }
            }, D.prototype.forceIdle2 = function () {
              var W = this.piggySpine;
              W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle2", false);
            }, D.prototype.forceIdle3 = function () {
              {
                var W = this.piggySpine;
                W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle3", false);
              }
            }, D.prototype.playEnterFastSpin = function () {
              var W = this.piggySpine;
              W.node.active || (W.node.active = true), this.Sl(), this.vl = x.FASTSPIN, W.clearTrack(0), W.setToSetupPose(), W.setCompleteListener(this.playFastSpinning.bind(this)), W.setAnimation(0, "fastspin_start", false);
            }, D.prototype.playFastSpinning = function () {
              var W = this.piggySpine;
              W.node.active || (W.node.active = true), this.Sl(), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "fastspin_idle", true);
            }, D.prototype.playExitFastSpin = function (W) {
              if (this.vl === x.FASTSPIN) {
                this.vl = x.NORMAL;
                var k = this.piggySpine;
                k.node.active || (k.node.active = true), this.Sl(), this.onFastSpinExitCallback = W, k.clearTrack(0), k.setCompleteListener(this.Cl.bind(this)), k.setAnimation(0, "fastspin_exit", false);
              }
              W && W();
            }, D.prototype.Cl = function () {
              var W = this.piggySpine;
              W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
              var k = this.onFastSpinExitCallback;
              this.onFastSpinExitCallback = undefined, k && k();
            }, D.prototype.playWildReact = function (W) {
              {
                this.vl = x.WILD_REACT;
                var k = this.piggySpine;
                k.node.active || (k.node.active = true), this.Sl(), this.onWildReactCallback = W, k.clearTrack(0), k.setCompleteListener(this.yl.bind(this)), k.setAnimation(0, "wild_react", false), this.Ml();
              }
            }, D.prototype.yl = function () {
              var W = this.piggySpine;
              W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
              var k = this.onWildReactCallback;
              this.onWildReactCallback = undefined, k && k();
            }, D.prototype.Ml = function () {
              var W = this.piggyWildReactFxAnim;
              W.node.active = true, this.wl(), W.on("finished", this.Al, this), W.play("pig_wild_react");
            }, D.prototype.Al = function () {
              {
                var W = this.piggyWildReactFxAnim;
                W.off("finished", this.Al, this), W.node.active = false;
              }
            }, D.prototype.playBigWin = function () {
              this.piggySprite.node.active = true, this.wl(), C.GeneralAudioPool.cha_afterbigwin.play(), this.forceIdle1();
              var W = this.piggyAnim;
              W.on("finished", this.Pl, this), W.on("play", this.Bl, this), W.play("pig_big_win");
            }, D.prototype.playSmallWin = function () {
              this.piggySprite.node.active = true, this.wl(), this.Ol(), this.forceIdle1();
              var W = this.piggyAnim;
              W.on("finished", this.Pl, this), W.on("play", this.Bl, this), W.play("pig_small_win");
            }, D.prototype.Bl = function () {
              this.piggyAnim.off("play", this.Bl, this);
              var W = this.piggySpine;
              W.clearTrack(0), W.node.active = false;
            }, D.prototype.Pl = function () {
              this.piggyAnim.off("finished", this.Pl, this), this.piggySprite.node.active = false;
            }, D.prototype.stopAnim = function () {
              this.piggyAnim.stop(), this.piggySpine.clearTrack(0);
            }, D.prototype.Ol = function () {
              switch (this.dl) {
                case 0:
                  C.GeneralAudioPool.cha_prize_win_a.play(), this.dl += 1;
                  break;
                case 1:
                  C.GeneralAudioPool.cha_prize_win_b.play(), this.dl += 1;
                  break;
                case 2:
                  C.GeneralAudioPool.cha_prize_win_c.play(), this.dl = 0;
              }
            }, D.prototype.wl = function () {
              C.GeneralAudioPool.cha_inactive.isPlaying() && C.GeneralAudioPool.cha_inactive.stop();
            }, D.prototype.Js = function (W, k) {
              return Math.floor(Math.random() * Math.floor(W) + k);
            }, D.prototype.Sl = function () {
              {
                this.piggyAnim.stop();
                var W = this.piggySprite;
                W.spriteFrame = undefined, W.node.active = false;
              }
            }, D.prototype.destroy = function () {
              {
                return this.stopAnim(), this.node.destroy(), m.prototype.destroy.call(this);
              }
            }, __decorate([M(sp.Skeleton)], D.prototype, "piggySpine", undefined), __decorate([M(cc.Animation)], D.prototype, "piggyAnim", undefined), __decorate([M(cc.Animation)], D.prototype, "piggyWildReactFxAnim", undefined), __decorate([M(cc.Animation)], D.prototype, "flareAnimation", undefined), __decorate([M(cc.Sprite)], D.prototype, "piggySprite", undefined), __decorate([V], D);
          }(cc.Component);
          y.default = q, cc._RF.pop();
        }
      }
    }, If],
    'PiggyGoldTweaksConfig': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "cc8b8l8piVLz5BI0oHKAZXM", "PiggyGoldTweaksConfig")) {
        O.__esModule = true, O.multiplierValue = O.default = undefined;
        var y,
          B = (y = l("TweaksConfig")) && y.__esModule ? y : {
            'default': y
          },
          x = l("CreatorTweaks"),
          C = l("TweaksData"),
          H = void l("SlotProperties");
        O.multiplierValue = undefined;
        var V = cc.Class({
          'extends': B.default,
          'onLoad': function () {
            this._super(), (0, x.bind)(C.configStore, "multiplierValue", "Test", "Test Modes", "Multiplier (custom reel only)", "RANDOM", undefined), (0, x.bind)(C.configStore, "customReelData", "Test", "Test Modes", "Custom Reel Data", ''), (0, x.bind)(C.configStore, "dummyTestSymbol", "Test", "Test Modes", "Symbol Id Reference", "[Symbol type] - [id]", H), (0, x.bind)(C.configStore, "forceWin", "Test", "Win", "Force Win", false), (0, x.bind)(C.configStore, "forceWinValue", "Test", "Win", "Force Win Value", 3000, 1, 1000000);
          }
        });
        O.default = V, cc._RF.pop();
      }
    }, IA],
    'PiggyParticleFeatureController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "6a159I+dZNL8bc1T22g0YDd", "PiggyParticleFeatureController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator.ccclass,
          C = function (H) {
            function r() {
              {
                var V = null !== H && H.apply(this, arguments) || this;
                return V.onScrollerCallback = undefined, V;
              }
            }
            return __extends(r, H), r.prototype.setScrollerShowCallback = function (V) {
              this.onScrollerCallback = V;
            }, r.prototype.onScrollerShow = function () {
              var V = this.onScrollerCallback;
              this.onScrollerCallback = undefined, V && V();
            }, __decorate([x], r);
          }(cc.Component);
        y.default = C, cc._RF.pop();
      }
    }, {}],
    'PiggyParticleFeatureManager': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "43303FCKyBLAJstGmzCcZ8w", "PiggyParticleFeatureManager")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("PiggyParticleFeatureController"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            function q() {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.piggyParticleFeatureController = undefined, m.leftParticleAnimation = undefined, m.rightParticleAnimation = undefined, m.leftBParticleAnimation = undefined, m.rightBParticleAnimation = undefined, m.featureParticle = undefined, m.onScrollerPlayCallback = undefined, m;
            }
            return __extends(q, M), q.prototype.play = function (m) {
              {
                this.node.active = true, this.onScrollerPlayCallback = m, this.piggyParticleFeatureController.setScrollerShowCallback(this.Il.bind(this)), this.leftParticleAnimation.play(), this.rightParticleAnimation.play();
              }
            }, q.prototype.stop = function () {
              {
                this.leftParticleAnimation.stop(), this.rightParticleAnimation.stop(), this.leftBParticleAnimation.stop(), this.rightBParticleAnimation.stop(), this.featureParticle.stopSystem(), this.node.active = false;
              }
            }, q.prototype.Gl = function () {
              {
                this.leftBParticleAnimation.play(), this.rightBParticleAnimation.play(), this.featureParticle.resetSystem();
              }
            }, q.prototype.Il = function () {
              var m = this.onScrollerPlayCallback;
              this.onScrollerPlayCallback = undefined, m && m(), this.Gl();
            }, __decorate([r(x.default)], q.prototype, "piggyParticleFeatureController", undefined), __decorate([r(cc.Animation)], q.prototype, "leftParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "rightParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "leftBParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "rightBParticleAnimation", undefined), __decorate([r(cc.ParticleSystem)], q.prototype, "featureParticle", undefined), __decorate([H], q);
          }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, Ii],
    'PlayerModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "a0229IKmbpNBb61dHEQilWX", "PlayerModel")) {
        {
          var O = System.get("bvframework").PlayerModel;
          j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'PossibleWinScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "355ddjhBg9AV61e/oO2HcmQ", "PossibleWinScroller")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("InterruptableScroller"),
            C = cc._decorator.ccclass,
            H = function (r) {
              {
                function V(M, q) {
                  {
                    var m = r.call(this, M, q) || this;
                    return m.Nl = false, m;
                  }
                }
                return __extends(V, r), V.prototype.onPlay = function () {
                  {
                    r.prototype.onPlay.call(this), this.Nl = false;
                  }
                }, V.prototype.update = function (M) {
                  this.Nl || (this.Nl = true, this.emit("triggel", this)), r.prototype.update.call(this, M);
                }, __decorate([C], V);
              }
            }(x.default);
          y.default = H, cc._RF.pop();
        }
      }
    }, Iu],
    'Preference': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "f7e90cT1I9BDL45c7FgvgSo", "Preference")) {
        var O = System.get("common").Preference;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'Printer': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "75992e1c0JLNIAsOHARyF2L", "Printer")) {
        var O = System.get("bvframework").Printer;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'PrizeState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b8e16tOyU5GT4m5ZQseMAOn", "PrizeState")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), j("TweaksData");
          var x = j("SettingMenuHelper"),
            C = j("Utils"),
            H = j("GameEventHandler"),
            r = function () {
              {
                function V(M, q, m, D) {
                  this.name = "Prize State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.Tl = undefined, this.dataSource = M, this.generalControllers = q.generalControllers, this.finalCallback = m, D && (this.Tl = D);
                }
                return V.prototype.setAvailableActions = function () {}, V.prototype.clearAvailableActions = function () {}, V.prototype.renderPrize = function () {
                  {
                    C.spawnCallback(this.renderLines.bind(this), this.playPrize.bind(this))(this.exitState.bind(this));
                  }
                }, V.prototype.renderLines = function (M) {
                  this.dataSource.transactionModel.winLines ? this.playAllLines(M) : M && M();
                }, V.prototype.playAllLines = function (M) {
                  {
                    var q = this.dataSource.transactionModel;
                    this.generalControllers.paySelectEffectController.playAllLines(q.winLines, q.reels, M, true);
                  }
                }, V.prototype.playPrize = function (M) {
                  var q = this,
                    m = this.dataSource.transactionModel.totalWinAmount,
                    D = this.getWinThresholds();
                  var k = {};
                  k.displayState = "Start";
                  k.effectType = "BigWin";
                  if (D.bigWinThreshold && W >= D.bigWinThreshold) H.emitGameEffectStateChangedEvent(k), this.runBigPrizeState(W, function () {
                    var L = {};
                    L.displayState = "End";
                    L.effectType = "BigWin";
                    H.emitGameEffectStateChangedEvent(L), q.winAnnouncement("BigWin", M)();
                  });else if (D.mediumWinThreshold && W >= D.mediumWinThreshold) this.runMediumPrizeState(W, this.winAnnouncement("MediumWin", M));else if (W > 0) this.runSmallPrizeState(W, this.winAnnouncement("SmallWin", M));else {
                    {
                      var z = this.dataSource.playerModel.balance;
                      x.settingMenuHelper.setBalance(z), M && M();
                    }
                  }
                }, V.prototype.exitState = function () {
                  {
                    var M = this;
                    this.Tl && this.Tl.clearAvailableActions && this.Tl.clearAvailableActions(), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
                      {
                        var q = M.finalCallback;
                        M.finalCallback = undefined, M.destroy(), C.deferCallback(true)(function () {
                          {
                            C.deferCallback(true)(q);
                          }
                        });
                      }
                    });
                  }
                }, V.prototype.preExitStateCleanup = function () {}, V.prototype.additionalDestroyCleanups = function () {}, V.prototype.run = function () {
                  {
                    this.Tl && this.Tl.setAvailableActions && this.Tl.setAvailableActions(), this.setAvailableActions(), this.renderPrize();
                  }
                }, V.prototype.destroy = function () {
                  {
                    this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Tl && (this.Tl.destroy(), this.Tl = undefined), this.additionalDestroyCleanups();
                  }
                }, V.prototype.winAnnouncement = function (M, q) {
                  return function () {
                    {
                      q && q();
                    }
                  };
                }, V.prototype.getWinThresholds = function () {
                  var M = this.dataSource.systemModel,
                    q = M.maxLineNumber,
                    m = M.winThresholds,
                    D = this.dataSource.transactionModel,
                    W = D.betSizeValue,
                    k = D.betLevelValue;
                  return m.getAllThresholds(W, k, q);
                }, V.prototype.runBigPrizeState = function (M, q) {
                  q && q();
                }, V.prototype.runMediumPrizeState = function (M, q) {
                  q && q();
                }, V.prototype.onExitState = function (M) {
                  M();
                }, V;
              }
            }();
          y.default = r, cc._RF.pop();
        }
      }
    }, It],
    'Protoutils': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "886a5iimVFNcomqVJ9Mgx0i", "Protoutils")) {
        var O = System.get("common").Protoutils;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'QuitGameWithEvent': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "810d7ZWlFFHNJtnMN8hmalR", "QuitGameWithEvent")) {
        var O = System.get("bvframework").QuitGameWithEvent;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'QuitGame': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d5fa8VRcgJD0a9wBWcZ0zoO", "QuitGame")) {
        var O = System.get("bvframework").QuitGame;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'RandomShakingController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "97a39/uqthGupN4Dcczm9YZ", "RandomShakingController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x,
          C = cc._decorator,
          H = C.ccclass,
          V = C.property,
          M = j("Utils");
        (function (m) {
          {
            m[m.SHAKING = 1] = "SHAKING", m[m.NORMAL = 2] = "NORMAL";
          }
        })(x || (x = {}));
        var q = function (m) {
          {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.moveVariance = 8, W.repeatTime = 0.02, W.Nu = x.NORMAL, W.Hl = undefined, W;
            }
            return __extends(D, m), D.prototype.play = function (W) {
              this.Nu !== x.SHAKING && (this.Nu = x.SHAKING, this.Hl = this.node.position, this.Rl(), W && this.scheduleOnce(this.stop, W));
            }, D.prototype.Rl = function () {
              var W = this.moveVariance,
                k = M.randomInt(this.Hl.x - W, this.Hl.x + W),
                z = M.randomInt(this.Hl.y - W, this.Hl.y + W),
                L = cc.v2(k, z);
              this.node.runAction(cc.sequence(cc.moveTo(this.repeatTime, L), cc.callFunc(this.Rl, this)));
            }, D.prototype.stop = function () {
              {
                this.Nu !== x.NORMAL && (this.Nu = x.NORMAL, this.node.stopAllActions(), this.node.position = this.Hl);
              }
            }, D.prototype.destroy = function () {
              return this.node.stopAllActions(), this.node.destroy(), m.prototype.destroy.call(this);
            }, __decorate([V(cc.Integer)], D.prototype, "moveVariance", undefined), __decorate([V(cc.Integer)], D.prototype, "repeatTime", undefined), __decorate([H], D);
          }
        }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, IG],
    'RefreshWorldHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4ef5cJw0YpAx5UIePlauVio", "RefreshWorldHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.RefreshWorldGameState = undefined;
        var x,
          C = j("RequestHandler"),
          H = j("Utils"),
          V = j("GenericLoadingScreenController");
        (function (m) {
          m[m.STANDARD = 0] = "STANDARD", m[m.PROGRESSING = 1] = "PROGRESSING";
        })(x = y.RefreshWorldGameState || (y.RefreshWorldGameState = {}));
        var M = cc._decorator.ccclass,
          q = function () {
            {
              function m() {
                this.refreshWorldGameState = x.STANDARD;
              }
              return m.prototype.initialize = function (D) {
                this.generalControllers = D.generalController, this.bonusControllers = D.bonusController ? D.bonusController : undefined, this.extraControllers = D.extraController ? D.extraController : undefined, this.dataSource = D.dataSource, this.apiClient = D.apiClient, this.settingMenuHelper = D.settingMenuHelper, this.refreshWorldGameState = D.refreshWorldGameState ? D.refreshWorldGameState : x.STANDARD;
              }, m.prototype.refreshWorldByChangeWalletIdle = function (D, W) {
                H.sequenceCallback(this.loadBundle.bind(this), this.kl.bind(this), this.Ll.bind(this), this.El.bind(this), this.resetController.bind(this), H.deferCallback(true), H.deferCallback(true), this.executeTransition.bind(this), D, this.jl.bind(this), this.Dl.bind(this), this.changeWalletIdleSetUp.bind(this), this.reenableSpinButton.bind(this))(W);
              }, m.prototype.refreshWorldByBetOptionIdle = function (D, W) {
                {
                  var k = W || function () {};
                  H.sequenceCallback(this.loadBundle.bind(this), this.Ll.bind(this), this.Ul.bind(this), this.El.bind(this), this.Wl.bind(this), this.resetController.bind(this), H.deferCallback(true), H.deferCallback(true), this.executeTransition.bind(this), D, this.Dl.bind(this), this.betOptionPreIdleSetUp.bind(this), this.Fl.bind(this), this.betOptionIdleSetUp.bind(this), this.reenableSpinButton.bind(this))(k);
                }
              }, m.prototype.Ul = function (D) {
                {
                  V.showLoadingPage(D);
                }
              }, m.prototype.Fl = function (D) {
                {
                  V.hideLoadingPage(D);
                }
              }, m.prototype.Dl = function (D) {
                var W = this.dataSource.transactionModel.transactionId > 0;
                this.settingMenuHelper.setVerifyInteractable(W), D && D();
              }, m.prototype.kl = function (D) {
                var W = this.dataSource,
                  k = this.settingMenuHelper,
                  z = W.systemModel,
                  L = z.betSizeList,
                  v = z.betLevelList,
                  b = z.featureBuy,
                  U = W.transactionModel,
                  Q = U.betLevelValue,
                  w = U.betSizeValue,
                  P = W.playerModel.minimumBetAmount;
                k.betSizeList = L, k.betSizeValue = w, k.betLevelList = v, k.betLevelValue = Q, k.featureBuyThreshold = b && b.threshold, k.minimumBetAmount = P, k.updateBetValues(), D && D();
              }, m.prototype.Wl = function (D) {
                {
                  var W = this.dataSource.transactionModel,
                    k = {
                      'cs': W.betSizeValue,
                      'ml': W.betLevelValue
                    };
                  this.xl(D, k);
                }
              }, m.prototype.xl = function (D, W) {
                var k = this.apiClient,
                  z = this.dataSource,
                  L = this.settingMenuHelper;
                C.doAPIRequest({
                  'name': "Update Game Info",
                  'apiRequest': k.updateGameInfo.bind(k),
                  'apiRequestParam': W,
                  'errorTitle': shell.I18n.t("General.ErrorChangeFailed")
                }, function (v, b) {
                  if (b && b.dt) {
                    var U = z.systemModel,
                      Q = U.betSizeList,
                      w = U.betLevelList,
                      P = z.transactionModel,
                      R = P.betLevelValue,
                      T = P.betSizeValue;
                    L.betSizeList = Q, L.betSizeValue = T, L.betLevelList = w, L.betLevelValue = R, L.updateBetValues(), D && D();
                  }
                });
              }, m.prototype.Ll = function (D) {
                var W = this.generalControllers;
                W.spinButtonController.exitAutoSpinMode(), W.spinButtonController.disableButton(), D && D();
              }, m.prototype.El = function (D) {
                this.settingMenuHelper.setWinAmount(0), D && D();
              }, m.prototype.jl = function (D) {
                var W = this.settingMenuHelper;
                W.reevaluateBet() ? (W.updateBetValues(), this.Vl(D)) : D && D();
              }, m.prototype.Vl = function (D) {
                switch (this.refreshWorldGameState) {
                  case x.STANDARD:
                    D && D();
                    break;
                  case x.PROGRESSING:
                    this.Wl(D);
                }
              }, m.prototype.loadBundle = function (D) {
                D && D();
              }, m.prototype.reenableSpinButton = function (D) {
                {
                  var W = this.generalControllers.spinButtonController;
                  W.idle(), W.enableButton(), D && D();
                }
              }, m.prototype.resetController = function (D) {
                D && D();
              }, m.prototype.executeTransition = function (D) {
                D && D();
              }, m.prototype.changeWalletIdleSetUp = function (D) {
                {
                  D && D();
                }
              }, m.prototype.betOptionPreIdleSetUp = function (D) {
                {
                  D && D();
                }
              }, m.prototype.betOptionIdleSetUp = function (D) {
                D && D();
              }, __decorate([M], m);
            }
          }();
        y.default = q, cc._RF.pop();
      }
    }, Id],
    'RegionUtils': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "478c5ZURp1N1Ide2QVm+Hgx", "RegionUtils")) {
        var O = System.get("bvframework").RegionUtils;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'RequestHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d74abPCXkJA5YnU3Ax3A+KB", "RequestHandler")) {
        var O = System.get("bvframework").RequestHandler;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'ResRC': [function (j, O) {
      'use strict';

      if (!cc._RF.push(O, "741a8m7jWlDQowhgiMh2U/V", "ResRC")) {
        var y = {};
        y.r0 = "releaseBundleAsset";
        y.r1 = "release";
        y.r2 = "releaseBundle";
        y.r3 = "removeBundle";
        y.r4 = "loadBundleAsset";
        y.r5 = "loadRemoteSingle";
        var B = function (C, H) {
          var r = {};
          for (var V in DEBUG, H) C.hasOwnProperty(V) ? r[C[V]] = H[V] : r[V] = H[V];
          return DEBUG, r;
        }(y, System.get("common").ResRC);
        for (var x in B) B.hasOwnProperty(x) && (O.exports[x] = B[x]);
        O.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'ResourceLoader': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "517d1jsi4lLyboQPLjM/Od/", "ResourceLoader")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.LoaderType = undefined;
        var x,
          C = j("RetryHandler"),
          H = j("ResRC"),
          r = j("ResourceQualifierHelper");
        (function (M) {
          {
            M[M.CUSTOM = -1] = "CUSTOM";
          }
        })(x = y.LoaderType || (y.LoaderType = {}));
        var V = function () {
          function M() {
            this.zl = new C.default();
          }
          return M.prototype.loadAsset = function (q) {
            return q.type === x.CUSTOM ? this.Kl(q) : this.ql(q);
          }, M.prototype.releaseAsset = function (q) {
            return q.type === x.CUSTOM ? this.Jl(q) : this.Yl(q);
          }, M.prototype.loadBundle = function (q) {
            var m = this,
              D = this.zl,
              W = q.bundle,
              k = q.retryMessage,
              z = q.retryHandling,
              L = q.retryingCallback,
              v = q.progressCallback;
            return new Promise(function (b) {
              {
                var U = 0,
                  Q = W.length,
                  w = W.slice(),
                  P = W.slice(),
                  R = [],
                  T = Object.create(null);
                D.init(k, function () {
                  w = R.slice(), P = R.slice(), R = [], X();
                });
                var Y = function () {
                    if (0 === P.length) {
                      {
                        if (0 === R.length) return void b(T);
                        R.length > 0 && (D.canRetry() ? (L(D.getRetryCount()), D.execute()) : z(D.execute.bind(D), T, R, D.getRetryCount()));
                      }
                    }
                  },
                  X = function () {
                    w.forEach(function (E) {
                      m.loadAsset(E).then(function (F) {
                        U++;
                        var N = F.config.name;
                        T[N], T[N] = F, P.splice(P.indexOf(E), 1), v(U, Q), Y();
                      }).catch(function () {
                        {
                          R.push(E), P.splice(P.indexOf(E), 1), Y();
                        }
                      });
                    });
                  };
                X();
              }
            });
          }, M.prototype.releaseBundle = function (q) {
            {
              var m = this,
                D = [];
              return q.forEach(function (W) {
                D.push(m.releaseAsset(W));
              }), new Promise(function (W) {
                Promise.all(D).then(function (k) {
                  var z = Object.create(null);
                  k.forEach(function (L) {
                    {
                      z[L.config.name] = L;
                    }
                  }), W(z);
                });
              });
            }
          }, M.prototype.ql = function (q) {
            return new Promise(function (m, D) {
              var W = q.isLocalized ? r.getResourceURL(q.url) : q.url;
              H.load(W, q.type, function (k, z) {
                var L = {};
                L.config = q;
                L.result = z;
                k ? D(k) : m(L);
              });
            });
          }, M.prototype.Kl = function (q) {
            {
              return new Promise(function (m, D) {
                q.loadFunc(function (W) {
                  var k = {};
                  k.config = q;
                  k.result = W;
                  m(k);
                }, function (W) {
                  {
                    D(W);
                  }
                });
              });
            }
          }, M.prototype.Yl = function (q) {
            return new Promise(function (m) {
              var D = q.isLocalized ? r.getResourceURL(q.url) : q.url;
              H.release(D, q.type), m({
                'config': q
              });
            });
          }, M.prototype.Jl = function (q) {
            {
              return new Promise(function (m) {
                q.releaseFunc ? new Promise(q.releaseFunc).then(function () {
                  var D = {};
                  D.config = q;
                  m(D);
                }) : m({
                  'config': q
                });
              });
            }
          }, M;
        }();
        y.default = V, cc._RF.pop();
      }
    }, IJ],
    'ResourceQualifierHelper': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "95cabP+u+lNbIwBxruULrww", "ResourceQualifierHelper")) {
        var O = System.get("bvframework").ResourceQualifierHelper;
        for (var y in O) j.exports[y] = O[y];
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'ResponsiveHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "01f6djrQWNE6qfr49hbxdjd", "ResponsiveHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("CanvasResizeBroadcaster"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            function q() {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.fullScreenWidgets = [], m.edgeMarker = undefined, m;
            }
            return __extends(q, M), q.prototype.onLoad = function () {
              x.default.subscribe(this.onCanvasResize.bind(this)), this.onCanvasResize();
            }, q.prototype.onCanvasResize = function () {
              this.fullScreenWidgets.forEach(function (m) {
                {
                  m.updateAlignment();
                }
              });
            }, __decorate([r([cc.Widget])], q.prototype, "fullScreenWidgets", undefined), __decorate([r(cc.Node)], q.prototype, "edgeMarker", undefined), __decorate([H], q);
          }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, IS],
    'ResultState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "08d5bAN5GxAf5RE9cTgDCu5", "ResultState")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("SlotStateMachine"),
          C = j("SlotAnalyticsHelper"),
          H = j("SlotAnalyticsEnum"),
          V = j("Utils"),
          M = j("SpinConfigHandler"),
          q = function () {
            function m(D, W, k, z) {
              this.name = "Result State", this.process = H.SpinStateProcess.REEL_SPINNING, this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.hasFeature = undefined, this.Tl = undefined, this.dataSource = D, this.generalControllers = W.generalControllers, this.finalCallback = k, z && (this.Tl = z, z.triggerFastStop = this.handleSlotRegionFastStop.bind(this));
            }
            return m.prototype.setAvailableActions = function () {}, m.prototype.resultDidStartRender = function (D) {
              {
                D && D();
              }
            }, m.prototype.slotDidStartStopping = function (D) {
              D && D();
            }, m.prototype.invokeSlotStop = function () {
              {
                var D = this.generalControllers.slotController;
                D.getStopStyle() === x.StopStyle.FAST ? D.fastStop() : D.stopSpin();
              }
            }, m.prototype.setupFeatureProperties = function () {
              this.hasFeature = false;
            }, m.prototype.preExitStateCleanup = function () {}, m.prototype.clearAvailableActions = function () {}, m.prototype.additionalDestroyCleanups = function () {}, m.prototype.setSlotData = function () {
              {
                this.generalControllers.slotController.setReelData(this.dataSource.transactionModel.originalReels);
              }
            }, m.prototype.onExitState = function (D) {
              {
                D();
              }
            }, m.prototype.run = function () {
              this.Ql(), this.Xl();
            }, m.prototype.Ql = function () {
              this.Zl(), this.Tl && this.Tl.setAvailableActions && this.Tl.setAvailableActions(), this.setAvailableActions();
            }, m.prototype.Xl = function () {
              V.sequenceCallback(this.resultDidStartRender.bind(this), this.$l.bind(this), this.tf.bind(this), this.if.bind(this))(this.vo.bind(this));
            }, m.prototype.$l = function (D) {
              {
                this.setSlotData(), V.spawnCallback(this.sf.bind(this), this.slotDidStartStopping.bind(this))(D);
              }
            }, m.prototype.sf = function (D) {
              {
                this.process === H.SpinStateProcess.REEL_SPINNING ? (this.process = H.SpinStateProcess.REEL_STOPPING, this.generalControllers.slotController.setStopCompletedCallback(D), this.invokeSlotStop()) : D && D();
              }
            }, m.prototype.tf = function (D) {
              this.setupFeatureProperties(), D && D();
            }, m.prototype.if = function (D) {
              var W = this.dataSource.transactionModel.winLines;
              this.process = H.SpinStateProcess.REEL_STOPPED, this.Tl && this.Tl && this.Tl.renderFeature(W || this.hasFeature), this.renderFeature(D);
            }, m.prototype.vo = function () {
              var D = this;
              this.generalControllers.slotController.setOnClickCallback(undefined), this.preExitStateCleanup(), this.onExitState(function () {
                var W = D.finalCallback;
                D.finalCallback = undefined, D.destroy(), V.deferCallback(true)(W);
              });
            }, m.prototype.destroy = function () {
              {
                this.generalControllers.slotController.setOnClickCallback(undefined), this.Tl && this.Tl.clearAvailableActions && this.Tl.clearAvailableActions(), this.clearAvailableActions(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Tl && (this.Tl.destroy(), this.Tl = undefined), this.additionalDestroyCleanups();
              }
            }, m.prototype.Zl = function () {
              {
                var D = this.generalControllers.slotController;
                M.featureConfig.fastStopFeature && D.getStopStyle() !== x.StopStyle.FAST && D.setOnClickCallback(this.handleSlotRegionFastStop.bind(this, H.SpinTrigger.CLICK));
              }
            }, m.prototype.handleSlotRegionFastStop = function (D) {
              var W = this.generalControllers,
                k = W.slotController;
              switch (this.process) {
                case H.SpinStateProcess.REEL_SPINNING:
                  C.sendFastStopGA(D, W.spinButtonController.isAutoSpin()), this.Tl && this.Tl.fastStopTriggeredWhileSpinning && this.Tl.fastStopTriggeredWhileSpinning(), this.fastStopTriggeredWhileSpinning(), k.setOnClickCallback(undefined), k.markFastStop();
                  break;
                case H.SpinStateProcess.REEL_STOPPING:
                  C.sendFastStopGA(D, W.spinButtonController.isAutoSpin()), this.Tl && this.Tl.triggerFastStopWhileStopping && this.Tl.triggerFastStopWhileStopping(), this.triggerFastStopWhileStopping(), k.setOnClickCallback(undefined), k.fastStop();
              }
            }, m.prototype.fastStopTriggeredWhileSpinning = function () {}, m.prototype.triggerFastStopWhileStopping = function () {}, m;
          }();
        y.default = q, cc._RF.pop();
      }
    }, IK],
    'RetryHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "e77ca51GO5Az7liIm6SBn3P", "RetryHandler")) {
        var O = System.get("bvframework").RetryHandler;
        j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'RtConfig': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "2a134wfdAlPtpk+IjZmrypn", "RtConfig")) {
        y.__esModule = true, y.cs_Config = undefined;
        var B = j("LaunchConfig");
        y.cs_Launch = B.cs_Launch;
        var x = {};
        x.gameId = 39;
        x.globalDomain = "com.pgsoft";
        x.bundleId = "com.pgsoft.slot.piggygold";
        x.loginMethod = window.LoginMethod;
        x.apiDomain = window.ApiDomain;
        x.version = "6.1.0.0";
        var C = Object.freeze(x);
        y.cs_Config = C, cc._RF.pop();
      }
    }, s0],
    'ScatterStopScroller': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "8240bXvW/lM2YNITdUUwGEO", "ScatterStopScroller")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = {};
          C.scrollSpeed = 5040;
          C.scatterScrollSpeed = 5040;
          C.decelerateSpeed = 4680;
          C.targetYFunc = undefined;
          C.bounceDistance = 60;
          C.bounceDuration = 0.15;
          C.bounceFactor = 1.84;
          C.columnIndex = undefined;
          var H = O("AbstractScroller"),
            M = cc._decorator,
            q = M.ccclass,
            m = M.mixins,
            D = function (W) {
              function k(z, L) {
                cc.EventTarget.call(this), this.target = z;
                var v = "object" == typeof L;
                for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
                return this.delay = 0, this.scatterDelay = 0, this.ef = 0, this.nf = 0, this.rs = 0, this.as = 0, this.os = 0, this.ls = 0, this.vs = 0, this.ps = 0, this.cf = 0, this.ds = 0, this.us = 0, this._s = 0, this.ns = false, this.es = false, this;
              }
              return __extends(k, W), k.prototype.interrupt = function () {
                this.es = true;
              }, k.prototype.resetInterrupt = function () {
                this.es = false;
              }, k.prototype.onPlay = function () {
                this.emit("play", this), this.rs = 0, this.as = this.target.y, this.ls = this.as - this.scrollSpeed * this.scatterDelay, this.us = this.delay - this.scatterDelay, this.fs = (this.scatterScrollSpeed - this.scrollSpeed) / this.us, this.vs = this.ls - (this.scrollSpeed * this.us + this.fs * this.us * this.us / 2), this.os = this.targetYFunc(this, this.vs), this.ps = this.os - this.bounceDistance, this.cf = this.vs - this.ps, this.ds = 2 * this.cf / (this.scatterScrollSpeed + this.decelerateSpeed), this._s = (this.decelerateSpeed - this.scatterScrollSpeed) / this.ds, this.ns = false, this.hs = false;
              }, k.prototype.onStop = function () {
                this.emit("stop", this);
              }, k.prototype.getScrollDuration = function () {
                return this.us + this.ds;
              }, k.prototype.update = function (z) {
                if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.hs && (this.hs = false, this.emit("scatter_off", {
                  'columnIndex': this.columnIndex,
                  'isForceStop': true
                }, this)), void this.stop();
                if ((z = this.rs += z) <= this.scatterDelay) return this.target.y = this.as - this.scrollSpeed * z, true;
                z -= this.scatterDelay;
                var L = this.us;
                if (z < L) return this.hs || (this.hs = true, this.emit("scatter_on", {
                  'duration': L,
                  'columnIndex': this.columnIndex
                }, this)), void (this.target.y = this.ls - this.scrollSpeed * z - this.fs * z * z / 2);
                z -= L;
                var v = this.ds;
                if (z < v) return this.target.y = this.vs - this.scatterScrollSpeed * z - this._s * z * z / 2, void this.emit("decelerate", 1 - z / v, this);
                this.ns || (this.ns = true, this.emit("decelerate", 0, this)), z -= v;
                var b = this.bounceDuration;
                if (z < b) {
                  var U = 1 - Math.pow(1 - z / b, this.bounceFactor);
                  this.target.y = this.ps + this.bounceDistance * U;
                } else this.hs && (this.hs = false, this.emit("scatter_off", {
                  'columnIndex': this.columnIndex,
                  'isForceStop': false
                }, this)), this.target.y = this.os, this.stop();
              }, __decorate([q, m(cc.EventTarget)], k);
            }(H.default);
          B.default = D, cc._RF.pop();
        }
      }
    }, s1],
    'ScrollViewEx': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4403eAPMfNGO4d5KWMoVrU7", "ScrollViewEx")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.speed = 1, q.freeCells = [], q.snapPause = false, q.snapDone = false, q.nextAppearTarget = undefined, q.snapFinish = undefined, q.clickPos = undefined, q.clickTarget = undefined, q.timer = undefined, q;
            }
            return __extends(M, V), M.prototype.cellsInsertToParent = function () {
              {
                if (this.freeCells.length) {
                  {
                    for (var q = 0; q < this.content.children.length; q++) this.freeCells[q] && (this.freeCells[q].cellNode.parent = this.content.children[q], this.freeCells[q].cellNode.setPosition(cc.v2(0, 0)), this.Ai(this.freeCells[q].cellNode));
                    this.freeCells = [];
                  }
                }
                this.snapPause = false;
              }
            }, M.prototype.cellsPullOutFromParent = function (q) {
              {
                if (!this.freeCells.length) {
                  this.snapPause = true, this.setSnapDone(true);
                  for (var m = 0; m < this.content.children.length; m++) {
                    var D = this.content.children[m].children[0];
                    if (D) {
                      {
                        this.hf(D);
                        var W = D.parent.convertToWorldSpaceAR(D.getPosition()),
                          k = q.convertToNodeSpaceAR(W);
                        this.freeCells[m] = {
                          'cellNode': D,
                          'position': k,
                          'index': m
                        }, this.freeCells[m].cellNode.setPosition(k), this.freeCells[m].cellNode.parent = q;
                      }
                    }
                  }
                  return this.freeCells;
                }
              }
            }, M.prototype.setSnapPause = function (q) {
              this.snapPause = q;
            }, M.prototype.setSnapDone = function (q) {
              this.snapDone = q;
            }, M.prototype.isSnapDone = function () {
              return this.snapDone;
            }, M.prototype.setNextAppearTarget = function (q) {
              {
                this.nextAppearTarget = q;
              }
            }, M.prototype.setSnapFinish = function (q) {
              this.snapFinish = q;
            }, M.prototype.Ai = function (q) {
              q.on(cc.Node.EventType.TOUCH_START, this.rf, this), q.on(cc.Node.EventType.TOUCH_END, this.af, this), q.on(cc.Node.EventType.TOUCH_MOVE, this.uf, this), q.on(cc.Node.EventType.TOUCH_CANCEL, this.lf, this);
            }, M.prototype.hf = function (q) {
              q.off(cc.Node.EventType.TOUCH_START, this.rf, this), q.off(cc.Node.EventType.TOUCH_END, this.af, this), q.off(cc.Node.EventType.TOUCH_MOVE, this.uf, this), q.off(cc.Node.EventType.TOUCH_CANCEL, this.lf, this);
            }, M.prototype.rf = function (q) {
              var m = q.touch.getLocation();
              this.clickPos = m, this.clickTarget = q.currentTarget, this.timer = Date.now();
            }, M.prototype.uf = function () {}, M.prototype.af = function (q) {
              if (this.clickPos) {
                var m = q.touch.getLocation(),
                  D = this.clickPos,
                  W = this.timer;
                this.Hi(D.x, m.x) || this.Hi(D.y, m.y) || !W || Date.now() - W > 120 || this.ff();
              }
            }, M.prototype.lf = function (q) {
              {
                if (this.clickPos) {
                  var m = q.touch.getLocation(),
                    D = this.clickPos,
                    W = this.timer;
                  this.Hi(D.x, m.x) || this.Hi(D.y, m.y) || !W || Date.now() - W > 120 || this.ff();
                }
              }
            }, M.prototype.Hi = function (q, m) {
              return Math.abs(m - q) > 100;
            }, M.prototype.Oi = function (q, m, D, W, k) {
              {
                if (undefined === W && (W = 1), z = cc.v2(q, 0), L = cc.v2(m, 0), z.sub(L).mag() <= 1) return this.setSnapDone(true), k && k(), m;
                var z,
                  L,
                  v = q + (D *= W) * (m - q);
                return q >= m ? v <= m && (k && k(), v = m) : v >= m && (k && k(), v = m), v;
              }
            }, M.prototype.ff = function () {
              this.clickTarget = undefined, this.timer = undefined;
            }, __decorate([H(cc.Integer)], M.prototype, "speed", undefined), __decorate([C], M);
          }(cc.ScrollView);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'ScrollerManagerController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "7b255Vuz2xHwINgRNvOg0Mg", "ScrollerManagerController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("ScrollerSpineController"),
            C = cc._decorator,
            H = C.ccclass,
            r = C.property,
            V = function (M) {
              function q() {
                {
                  var m = null !== M && M.apply(this, arguments) || this;
                  return m.leftscrollerSpineController = undefined, m.rightscrollerSpineController = undefined, m;
                }
              }
              return __extends(q, M), q.prototype.playIdle = function () {
                this.leftscrollerSpineController.playLeftIdle(), this.rightscrollerSpineController.playLeftIdle();
              }, q.prototype.playSpawn = function () {
                this.leftscrollerSpineController.playLeftSpawn(), this.rightscrollerSpineController.playLeftSpawn();
              }, q.prototype.playExit = function () {
                {
                  this.leftscrollerSpineController.playLeftExit(), this.rightscrollerSpineController.playLeftExit();
                }
              }, __decorate([r(x.default)], q.prototype, "leftscrollerSpineController", undefined), __decorate([r(x.default)], q.prototype, "rightscrollerSpineController", undefined), __decorate([H], q);
            }(cc.Component);
          y.default = V, cc._RF.pop();
        }
      }
    }, s2],
    'ScrollerSpineController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "86e11YzdrZBA4AC+Stl64c5", "ScrollerSpineController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x,
            C = cc._decorator,
            H = C.ccclass,
            r = C.property;
          (function (M) {
            M[M.IDLE = 0] = "IDLE", M[M.HIDE = 1] = "HIDE", M[M.SHOW = 2] = "SHOW";
          })(x || (x = {}));
          var V = function (M) {
            {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.scrollerSpine = undefined, m.Nu = x.HIDE, m;
              }
              return __extends(q, M), q.prototype.playLeftExit = function () {
                if (this.Nu !== x.HIDE) {
                  {
                    var m = this.scrollerSpine;
                    m.node.active || (m.node.active = true), this.Nu = x.HIDE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "left_exit", false);
                  }
                }
              }, q.prototype.playLeftIdle = function () {
                if (this.Nu !== x.IDLE) {
                  var m = this.scrollerSpine;
                  m.node.active || (m.node.active = true), this.Nu = x.IDLE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "left_idle", true);
                }
              }, q.prototype.playLeftSpawn = function () {
                if (this.Nu !== x.SHOW) {
                  {
                    var m = this.scrollerSpine;
                    m.node.active || (m.node.active = true), this.Nu = x.SHOW, m.clearTrack(0), m.setCompleteListener(this.playLeftIdle.bind(this)), m.setAnimation(0, "left_spawn", false);
                  }
                }
              }, q.prototype.playRightExit = function () {
                {
                  if (this.Nu !== x.HIDE) {
                    var m = this.scrollerSpine;
                    m.node.active || (m.node.active = true), this.Nu = x.HIDE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "right_exit", false);
                  }
                }
              }, q.prototype.playRightIdle = function () {
                {
                  if (this.Nu !== x.IDLE) {
                    var m = this.scrollerSpine;
                    m.node.active || (m.node.active = true), this.Nu = x.IDLE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "right_idle", true);
                  }
                }
              }, q.prototype.playRightSpawn = function () {
                if (this.Nu !== x.SHOW) {
                  var m = this.scrollerSpine;
                  m.node.active || (m.node.active = true), this.Nu = x.SHOW, m.clearTrack(0), m.setCompleteListener(this.playRightIdle.bind(this)), m.setAnimation(0, "right_spawn", false);
                }
              }, __decorate([r(sp.Skeleton)], q.prototype, "scrollerSpine", undefined), __decorate([H], q);
            }
          }(cc.Component);
          y.default = V, cc._RF.pop();
        }
      }
    }, {}],
    'Serializer': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "0e825vJtv1K6qUCtfPjN7c9", "Serializer")) {
        {
          var O = System.get("common").Serializer;
          j.exports.Serializer = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'SettingInfoFooterController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "06e65rpYzVNHbDR0e2vljl/", "SettingInfoFooterController")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x), B.SettingInfoFooterController = B.ICON_STATE = B.ICON_FOOTER_TYPE = B.WALLET_FOOTER_TYPE = undefined;
        var C,
          H,
          V = O("Utils"),
          M = O("UIAppearanceHelper"),
          q = O("BVFramework"),
          m = O("Preference").getPreference("setting_menu"),
          D = cc._decorator,
          W = D.ccclass,
          k = D.property;
        (function (L) {
          L[L.CASH = 1] = "CASH", L[L.FREE_GAME = 2] = "FREE_GAME", L[L.BONUS = 3] = "BONUS", L[L.POINT = 4] = "POINT", L[L.CASH_BONUS = 5] = "CASH_BONUS";
        })(C = B.WALLET_FOOTER_TYPE || (B.WALLET_FOOTER_TYPE = {})), function (L) {
          {
            L[L.SPIN = 2] = "SPIN", L[L.ROLL_OVER = 3] = "ROLL_OVER";
          }
        }(B.ICON_FOOTER_TYPE || (B.ICON_FOOTER_TYPE = {})), function (L) {
          L[L.DEFAULT = 0] = "DEFAULT", L[L.SOUND_ON = 1] = "SOUND_ON", L[L.SOUND_OFF = 2] = "SOUND_OFF", L[L.OFFER_SOUND_ON = 3] = "OFFER_SOUND_ON", L[L.OFFER_SOUND_OFF = 4] = "OFFER_SOUND_OFF";
        }(H = B.ICON_STATE || (B.ICON_STATE = {}));
        var z = function (L) {
          {
            function v() {
              {
                var b = null !== L && L.apply(this, arguments) || this;
                return b.background = undefined, b.balanceNode = undefined, b.balanceValueHolder = undefined, b.balanceValueNode = undefined, b.leftSlotNode = undefined, b.leftSlotNodeBg = undefined, b.leftSlotNodeHover = undefined, b.midSlotNode = undefined, b.midSlotNodeBg = undefined, b.midSlotNodeHover = undefined, b.rightSlotNode = undefined, b.rightSlotNodeBg = undefined, b.rightSlotNodeHover = undefined, b.winValueNode = undefined, b.winHolderNode = undefined, b.winCashIconNode = undefined, b.winCashIconMask = undefined, b.winButton = undefined, b.midSlotElementHolder = undefined, b.pgIconHolder = undefined, b.pgIconBgLeft = undefined, b.pgIconBgRight = undefined, b.pgIconBgMid = undefined, b.pgIcon = undefined, b.pgIconOnSpriteFrame = undefined, b.pgIconOffSpriteFrame = undefined, b.freeGamesNode = undefined, b.specialIcon = undefined, b.freeSpinValue = undefined, b.walletButton = undefined, b.walletButtonSensor = undefined, b.walletNavigateIcon = [], b.walletNotificationIcon = undefined, b.menuIcon = undefined, b.muteIcon = [], b.betAmountHolder = undefined, b.betAmountLabel = undefined, b.betOptionsButton = undefined, b.betOptionsIcon = undefined, b.walletIconNode = [], b.walletIconSprite = [], b.userProfitMenuOnAudioSpriteFrame = undefined, b.userProfitMenuOffAudioSpriteFrame = undefined, b.userProfitSingleIconOnAudioSpriteFrame = undefined, b.userProfitSingleIconOffAudioSpriteFrame = undefined, b.userProfitMenuOnAudioDisableSpriteFrame = undefined, b.userProfitMenuOffAudioDisableSpriteFrame = undefined, b.userProfitSingleIconOnAudioDisableSpriteFrame = undefined, b.userProfitSingleIconOffAudioDisableSpriteFrame = undefined, b.freeGameSpriteFrame = [], b.freeGameDisableSpriteFrame = [], b.bonusGameSpriteFrame = [], b.bonusGameDisableSpriteFrame = [], b.rewardFooterTypeSFList = [], b.maxBetButtonHolder = undefined, b.languageSensitiveLayoutList = [], b.rightSpecialInfoHolderNode = undefined, b.leftGradientBg = undefined, b.leftSpecialInfoHolderNode = undefined, b.leftSpecialInfoLabel = undefined, b.leftSpecialInfoLayout = undefined, b.leftSpecialInfoTickHodler = undefined, b.leftSpecialInfoTickCircleOutline = undefined, b.leftSpecialInfoTickAnimation = undefined, b.missonBarNode = undefined, b.bonusWalletPrizeNode = undefined, b.bonusWalletIcon = undefined, b.rolloverPrizeValueNode = undefined, b.rolloverOnGoingValueNode = undefined, b.totalRolloverValueLabel = undefined, b.progressBarCircleMask = undefined, b.progressBarNode = undefined, b.progressBarShine = undefined, b.rightSpecialInfoTickHodler = undefined, b.rightSpecialInfoTickCircleOutline = undefined, b.rightSpecialInfoTickAnimation = undefined, b.rightSpecialInfoTextHolder = undefined, b.df = false, b.vf = false, b._f = false, b.bf = C.CASH, b.currentBalance = 0, b.rolloverPrizeBalance = 0, b.rolloverOnGoingBalance = 0, b.previousRolloverPrizeBalance = 0, b.previousRolloverOnGoingBalance = 0, b.barProgress = 0, b.targetBalance = 0, b.winBalance = 0, b.walletNotify = false, b.lockWalletButton = false, b.lockBetOptionsButton = false, b.userProfitSpriteFrame = [], b.userProfitDisableSpriteFrame = [], b.mf = 0, b.Sf = undefined, b.gf = 0, b.Cf = true, b;
              }
            }
            return __extends(v, L), v.prototype.onLoad = function () {
              this.yf(), this.betAmountHolder.on(cc.Node.EventType.SIZE_CHANGED, this.yf.bind(this)), this.Mf(), this.balanceValueHolder.on(cc.Node.EventType.SIZE_CHANGED, this.Mf.bind(this)), this.balanceValueNode.on(cc.Node.EventType.SIZE_CHANGED, this.Mf.bind(this)), this.wf(), this.leftGradientBg.on(cc.Node.EventType.SIZE_CHANGED, this.wf.bind(this)), this.activateWalletNotify(false), this.leftSlotNodeHover.opacity = 0, this.midSlotNodeHover.opacity = 0, this.rightSlotNodeHover.opacity = 0;
            }, v.prototype.wf = function () {
              {
                this.leftSpecialInfoLabel && (this.leftSpecialInfoLayout.node.setPosition(this.leftGradientBg.width / 2 - 188, this.leftSpecialInfoLayout.node.position.y), this.leftSpecialInfoLayout.node.scale = this.leftSpecialInfoLayout.node.width / this.leftGradientBg.width <= 1 ? 1 : 1 / (this.leftSpecialInfoLayout.node.width / this.leftGradientBg.width));
              }
            }, v.prototype.Mf = function () {
              this.balanceValueHolder && this.balanceValueNode && (this.balanceValueNode.setPosition(this.balanceValueHolder.width / 2, 0), this.balanceValueNode.scale = this.balanceValueNode.width / this.balanceValueHolder.width <= 1 ? 1 : 1 / (this.balanceValueNode.width / this.balanceValueHolder.width));
            }, v.prototype.yf = function () {
              if (this.betAmountHolder) {
                this.betAmountLabel.node.setPosition(-this.betAmountHolder.width / 2 + 120, 0);
                var b = this.betAmountLabel.node;
                b.scale = b.width / this.betAmountHolder.width <= 1 ? 1 : 1 / (b.width / this.betAmountHolder.width);
              }
            }, v.prototype.updateBetAmount = function (b) {
              var U = this;
              if (isNaN(b)) throw Error("SettingInfoFooterController :: updateBetAmount : bet amount invalid");
              var Q = this.Af,
                w = this.betAmountLabel;
              if (!Q) return this.Pf = this.Af = b, w.string = V.formatCurrency(b), void V.delayCallback(0)(this.yf.bind(this));
              var P = w.node;
              var R = {};
              R.y = -15;
              R.opacity = 65;
              var T = {};
              T.y = 4.5;
              var Y = {};
              Y.opacity = 255;
              var X = {};
              X.y = -2;
              var E = {};
              E.y = 1;
              var F = {};
              F.y = 0;
              var N = {};
              N.y = 15;
              N.opacity = 65;
              var Z = {};
              Z.y = -4.5;
              var p = {};
              p.opacity = 255;
              var g = {};
              g.y = 2;
              var A = {};
              A.y = -1;
              var G = {};
              G.y = 0;
              cc.Tween.stopAllByTarget(P), this.Pf = Q, Q >= b ? (P.setPosition(P.position.x, 10), cc.tween(P).to(0.05, R).call(function () {
                w.string = V.formatCurrency(b), V.delayCallback(0)(U.yf.bind(U));
              }).parallel(cc.tween().to(0.1, T), cc.tween().to(0.05, Y)).to(0.05, X).to(0.1, E).to(0.15, F).start()) : Q <= b ? (P.setPosition(P.position.x, -10), cc.tween(P).to(0.05, N).call(function () {
                w.string = V.formatCurrency(b), V.delayCallback(0)(U.yf.bind(U));
              }).parallel(cc.tween().to(0.1, Z), cc.tween().to(0.05, p)).to(0.05, g).to(0.1, A).to(0.15, G).start()) : P.setPosition(P.position.x, 0), this.Af = b;
            }, Object.defineProperty(v.prototype, "currentBetAmount", {
              'get': function () {
                if (isNaN(this.Pf)) throw Error("SettingInfoFooterController :: currentBetAmount : Please set legit bet amount by calling updateBetAmount first!");
                return this.Pf;
              },
              'set': function (b) {
                this.Pf = b;
              },
              'enumerable': false,
              'configurable': true
            }), v.prototype.setOpenBetOptionsMenuCallback = function (b) {
              this.Bf = b;
            }, v.prototype.openBetOptionsMenu = function () {
              this.Bf && this.Bf(), this.Of();
            }, v.prototype.setBetOptionsButtonLock = function (b) {
              undefined === b && (b = false), this.lockBetOptionsButton = b;
            }, v.prototype.interactableBetOptionsButton = function (b) {
              {
                if (this.betOptionsButton.interactable = b, b ? (this.betOptionsButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.If, this), this.betOptionsButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Of, this)) : (this.Of(), this.betOptionsButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.If, this), this.betOptionsButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Of, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableBetOptionsButton : Please call boot() to setup default label color first!");
                this.betAmountLabel.node.color = this.Gf;
              }
            }, v.prototype.If = function () {
              this.rightSlotNodeHover.opacity = 51;
            }, v.prototype.Of = function () {
              this.rightSlotNodeHover.opacity = 0;
            }, v.prototype.setOpenWinMenuCallback = function (b) {
              this.Nf = b;
            }, v.prototype.openWinMenu = function () {
              this.Nf && this.Nf(), this.Tf();
            }, v.prototype.interactableWinButton = function (b) {
              {
                if (this.winButton.interactable = b, b ? (this.winButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.Hf, this), this.winButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Tf, this)) : (this.Tf(), this.winButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.Hf, this), this.winButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Tf, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableWinButton : Please call boot() to setup default label color first!");
                this.winValueNode.color = this.freeSpinValue.node.color = this.Gf;
              }
            }, v.prototype.Hf = function () {
              {
                this.midSlotNodeHover.opacity = 51;
              }
            }, v.prototype.Tf = function () {
              this.midSlotNodeHover.opacity = 0;
            }, v.prototype.setFooterLocaleAtlas = function (b) {
              this.winCashIconNode.spriteFrame = b.getSpriteFrame("win");
              var U = b.getSpriteFrame("win_shape");
              U ? (this.winCashIconMask.node.scale = 1, this.winCashIconMask.node.anchorX = 0.5, this.winCashIconMask.node.anchorY = 0.5) : (U = b.getSpriteFrame("win_shape_zh"), this.winCashIconMask.node.scale = 1.1, this.winCashIconMask.node.anchorX = 0.45, this.winCashIconMask.node.anchorY = 0.47), this.winCashIconMask.spriteFrame = U, this.Rf = b.getSpriteFrame("bet_options"), this.kf = b.getSpriteFrame("bet_options_grey");
            }, v.prototype.setFooterBackgroundOpacity = function (b) {
              undefined === b && (b = 127), this.midSlotNodeBg.opacity = b, this.leftSlotNodeBg.opacity = b, this.rightSlotNodeBg.opacity = b, this.pgIconBgLeft.opacity = b, this.pgIconBgRight.opacity = b, this.pgIconBgMid.opacity = b, this.missonBarNode.opacity = b, this.leftGradientBg.opacity = b, this.winCashIconMask.node.opacity = b;
            }, v.prototype.Lf = function () {
              {
                var b = this.walletNotify,
                  U = 0,
                  Q = H.DEFAULT;
                Q = m.soundOn ? b ? H.OFFER_SOUND_ON : H.DEFAULT : b ? H.OFFER_SOUND_OFF : H.SOUND_OFF;
                var w = [],
                  P = [];
                switch (this.bf) {
                  case C.BONUS:
                    w = this.bonusGameSpriteFrame, P = this.bonusGameDisableSpriteFrame, U = 2;
                    break;
                  case C.FREE_GAME:
                    w = this.freeGameSpriteFrame, P = this.freeGameDisableSpriteFrame, U = 1;
                    break;
                  default:
                  case C.CASH:
                  case C.CASH_BONUS:
                  case C.POINT:
                    this.menuIcon.active = !this.walletNotificationIcon.active && 0 !== this.gf, w = this.userProfitSpriteFrame, P = this.userProfitDisableSpriteFrame, U = 0;
                }
                this.walletButton.target = this.walletNavigateIcon[U], this.walletButton.normalSprite = w[Q], this.walletButton.pressedSprite = P[Q], this.walletButton.hoverSprite = w[Q], this.walletButton.disabledSprite = P[Q], this.walletButton.interactable && 0 !== w.length && Q <= w.length ? this.walletIconSprite[U].spriteFrame = w && w[Q] : this.walletIconSprite[U].spriteFrame = P && P[Q];
              }
            }, v.prototype.setWalletNavigateIcon = function (b) {
              {
                var U;
                this.bf = U = b;
                var Q = this.walletIconNode;
                b !== C.POINT && b !== C.CASH_BONUS || (U = C.CASH);
                var w = U - 1;
                Q.forEach(function (P, R) {
                  {
                    P.active = R === w;
                  }
                }), this.Lf();
              }
            }, v.prototype.boot = function () {
              this.Ef = this.balanceValueNode.getComponent("NumberLabelControllerLite"), this.jf = this.winValueNode.getComponent("NumberLabelControllerLite"), this.Df = this.rolloverPrizeValueNode.getComponent("NumberLabelControllerLite"), this.Uf = this.rolloverOnGoingValueNode.getComponent("NumberLabelControllerLite");
              var b = this.betOptionsButton;
              b.normalSprite = this.Rf, b.pressedSprite = this.kf, b.hoverSprite = this.Rf, b.disabledSprite = this.kf, this.Gf = M.uiAppearanceHelper.v("setting.color_button_transition_a.normal"), this.Ef.skip(0), this.jf.skip(0), this.Df.skip(0), this.Uf.skip(0);
            }, v.prototype.changeWalletIconColor = function (b) {
              this.walletNavigateIcon.forEach(function (U) {
                U.opacity = b ? M.uiAppearanceHelper.v("setting.white_button_transition_a.pressed").a : M.uiAppearanceHelper.v("setting.white_button_transition_a.normal").a;
              });
            }, v.prototype.showBackground = function (b, U) {
              undefined === U && (U = 225);
              var Q = this.background;
              Q.active = b, Q.opacity = U;
            }, v.prototype.setOpenWalletMenuCallback = function (b) {
              this.Wf = b;
            }, v.prototype.setOpenUserProfileMenuCallback = function (b) {
              {
                this.Ff = b;
              }
            }, v.prototype.setWalletButtonLock = function (b) {
              undefined === b && (b = false), this.lockWalletButton = b;
            }, v.prototype.interactableWalletButton = function (b) {
              {
                if (this.walletButton.interactable = b, b ? (this.walletButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.xf, this), this.walletButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Vf, this)) : (this.Vf(), this.walletButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.xf, this), this.walletButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Vf, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableWalletButton : Please call boot() to setup default label color first!");
                this.balanceValueNode.color = this.Gf;
              }
            }, v.prototype.xf = function () {
              this.leftSlotNodeHover.opacity = 51;
            }, v.prototype.Vf = function () {
              this.leftSlotNodeHover.opacity = 0;
            }, v.prototype.changeWalletButtonColor = function (b) {
              this.walletNavigateIcon.forEach(function (U) {
                U.opacity = b ? M.uiAppearanceHelper.v("setting.white_button_transition_a.pressed").a : M.uiAppearanceHelper.v("setting.white_button_transition_a.normal").a;
              });
            }, v.prototype.showBalanceNode = function (b) {
              this.balanceNode.active = b;
            }, v.prototype.showFreeGamesNode = function (b) {
              this.freeGamesNode.active = b;
            }, v.prototype.activateWalletNotify = function (b) {
              this.walletNotify = b, this.walletNotificationIcon.active = b, q.getGameContext().emit("SlotMenu.setWalletReminder", b), this.Lf();
            }, v.prototype.openWalletMenu = function () {
              this.Wf && this.Wf();
            }, v.prototype.openUserProfileMenu = function () {
              this.Ff && this.Ff(), this.Vf();
            }, v.prototype.changeHolder = function (b) {
              {
                this.zf || (this.zf = b);
                var U = this.node;
                U.removeFromParent(false), b.addChild(U), this.Kf(false), this.qf(false);
              }
            }, v.prototype.returnHolder = function () {
              if (!this.zf) throw Error("SettingInfoFooter :: returnHolder : Do not have parent to return");
              var b = this.node;
              b.removeFromParent(false), this.zf.addChild(b), this.Kf(this.vf), this.qf(this._f);
            }, v.prototype.setPGIconsInteractableColor = function (b) {
              var U = this.pgIcon.getComponent(cc.Animation),
                Q = this.pgIcon.getComponent(cc.Sprite);
              b ? U.play() : (U.setCurrentTime(0), U.stop(), Q.spriteFrame = this.pgIconOffSpriteFrame);
            }, v.prototype.Kf = function (b) {
              this.missonBarNode.active = b, this.rightSpecialInfoHolderNode.active = b, this.rightSpecialInfoTextHolder.active = b, this.bonusWalletPrizeNode.active = b;
            }, v.prototype.qf = function (b) {
              this.leftGradientBg.active = b, this.leftSpecialInfoLabel.node.active = b;
            }, v.prototype.showCustomInfoFooter = function (b) {
              if (this.missonBarNode && this.rightSpecialInfoHolderNode && this.leftGradientBg && this.leftSpecialInfoLabel) switch (b) {
                case C.FREE_GAME:
                  this.Kf(false), this.vf = false, this.qf(true), this._f = true;
                  break;
                case C.BONUS:
                  this.Kf(true), this.vf = true, this.qf(false), this._f = false, this.progressBarNode.color = this.progressBarShine.color = this.bonusWalletIcon.color = this.rightSpecialInfoTickAnimation.node.color = this.rightSpecialInfoTickCircleOutline.color = this.Gf, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0;
                  break;
                default:
                  this.Kf(false), this.vf = false, this.qf(false), this._f = false, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0;
              }
            }, v.prototype.hideCustomInfoFooter = function (b) {
              {
                switch (b) {
                  case C.BONUS:
                    this.Kf(false);
                    break;
                  case C.FREE_GAME:
                    this.qf(false);
                    break;
                  default:
                    this.Kf(false), this.qf(false);
                }
                this.winHolderNode.active = true;
                var U = this.Jf;
                this.Jf = undefined, U && U();
                var Q = this.Yf;
                this.Yf = undefined, Q && Q(), this.midSlotNode && (cc.Tween.stopAllByTarget(this.midSlotNode), this.midSlotNode.scale = cc.v3(1, 1, 1));
              }
            }, v.prototype.isCustomInfoFooter = function () {
              return this.df;
            }, v.prototype.updateBalance = function (b, U, Q) {
              var w = this.Ef;
              if (undefined === w) throw Error("SettingInfoFooter :: updateBalance : Please call boot() to setup balance label controller first!");
              b = this.currentBalance ? this.currentBalance : this.currentBalance = V.isNumeric(U) ? U : 0, V.isNumeric(U) ? this.targetBalance = U : U = this.targetBalance, U <= b && (Q = false), Q ? w.play(b, U) : w.skip(U), this.currentBalance = this.targetBalance, this.Mf();
            }, Object.defineProperty(v.prototype, "currentWinAmount", {
              'get': function () {
                return this.mf;
              },
              'enumerable': false,
              'configurable': true
            }), v.prototype.updateWinAmount = function (b, U) {
              {
                var Q = this.jf;
                if (undefined === Q) throw Error("SettingInfoFooter :: updateWinAmount : Please call boot() to setup win label controller first!");
                var w = this.mf,
                  P = this.winValueNode;
                V.isNumeric(b) ? this.winBalance = b : b = this.winBalance;
                var R = b > 0,
                  T = b > w;
                var Y = {};
                Y.scale = 1.1;
                var X = {};
                X.easing = "sineOut";
                var E = {};
                E.scale = 1;
                this.Qf(R, U), R && (U && T ? (Q.play(w, b), cc.Tween.stopAllByTarget(P), P.scale = cc.v3(0.5, 0.5, 1), cc.tween(P).to(0.2, Y, X).to(0.1, E).start()) : Q.skip(b)), this.mf = this.winBalance;
              }
            }, v.prototype.setRolloverSymbol = function (b) {
              {
                this.Uf && this.Uf.setSymbol(b);
              }
            }, v.prototype.setRolloverBaseUnit = function (b) {
              {
                this.Uf && this.Uf.setBaseUnit(b);
              }
            }, v.prototype.setRightSpecialInfoText = function (b) {
              undefined === b && (b = ''), this.totalRolloverValueLabel && (this.totalRolloverValueLabel.string = b);
            }, v.prototype.setleftSpecialInfoLabel = function (b) {
              {
                undefined === b && (b = ''), this.leftSpecialInfoLabel && (this.leftSpecialInfoLabel.string = b);
              }
            }, v.prototype.setFreeGameTick = function (b) {
              {
                var U = this,
                  Q = this.leftSpecialInfoTickHodler.active;
                var w = {};
                w.scale = 0.8;
                var P = {};
                P.scale = 1.1;
                var R = {};
                R.scale = 1;
                var T = {};
                T.easing = "cubicOut";
                this.leftSpecialInfoTickHodler.active = b, !Q && b && (this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), cc.Tween.stopAllByTarget(this.leftSpecialInfoTickCircleOutline), cc.tween(this.leftSpecialInfoTickCircleOutline).set(w).to(0.1, P).call(function () {
                  U.leftSpecialInfoTickAnimation.play();
                }).to(0.3, R, T).start());
              }
            }, v.prototype.setBonusWalletIcon = function (b) {
              var U = this,
                Q = this.rightSpecialInfoTickHodler.active;
              var w = {};
              w.scale = 0.8;
              var P = {};
              P.scale = 1.1;
              var R = {};
              R.scale = 1;
              var T = {};
              T.easing = "cubicOut";
              this.rightSpecialInfoTickHodler.active = b, this.bonusWalletIcon.active = !b, !Q && b && (this.rightSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0, this.rightSpecialInfoTickAnimation.stop(), this.rightSpecialInfoTickAnimation.setCurrentTime(0), cc.Tween.stopAllByTarget(this.rightSpecialInfoTickCircleOutline), cc.tween(this.rightSpecialInfoTickCircleOutline).set(w).to(0.1, P).call(function () {
                U.rightSpecialInfoTickAnimation.play();
              }).to(0.3, R, T).start());
            }, v.prototype.setLeftSpecialInfoLayout = function (b) {
              {
                this.leftSpecialInfoLayout.horizontalDirection = b ? cc.Layout.HorizontalDirection.LEFT_TO_RIGHT : cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
              }
            }, v.prototype.updateLayout = function (b) {
              this.languageSensitiveLayoutList.forEach(function (U) {
                return U.horizontalDirection = b ? cc.Layout.HorizontalDirection.RIGHT_TO_LEFT : cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
              });
            }, v.prototype.Qf = function (U, Q) {
              {
                var R = this.midSlotElementHolder,
                  T = this.midSlotNodeBg,
                  Y = this.midSlotNodeHover,
                  X = this.leftSlotNodeBg,
                  E = this.leftSlotNodeHover,
                  F = this.rightSlotNodeBg,
                  N = this.rightSlotNodeHover,
                  Z = this.walletButton.node,
                  J = this.balanceValueHolder,
                  K = this.betOptionsButton.node,
                  l0 = this.betAmountHolder,
                  l1 = this.winButton.node,
                  l2 = this.pgIconHolder,
                  l3 = this.pgIconBgLeft,
                  l4 = this.pgIconBgRight,
                  l5 = this.missonBarNode,
                  l6 = this.rightSpecialInfoHolder,
                  l7 = this.leftGradientBg,
                  l8 = this.leftSpecialInfoLabel ? this.leftSpecialInfoLabel.node : undefined;
                cc.Tween.stopAllByTarget(T), cc.Tween.stopAllByTarget(Y), cc.Tween.stopAllByTarget(X), cc.Tween.stopAllByTarget(E), cc.Tween.stopAllByTarget(F), cc.Tween.stopAllByTarget(N), cc.Tween.stopAllByTarget(Z), cc.Tween.stopAllByTarget(J), cc.Tween.stopAllByTarget(K), cc.Tween.stopAllByTarget(l0), cc.Tween.stopAllByTarget(l1), cc.Tween.stopAllByTarget(l3), cc.Tween.stopAllByTarget(l4), l5 && cc.Tween.stopAllByTarget(l5), l6 && cc.Tween.stopAllByTarget(l6), l7 && cc.Tween.stopAllByTarget(l7), l8 && cc.Tween.stopAllByTarget(l8), l2.active = !U, R.active = U, T.active = U;
                var l9 = this.Xf(U),
                  ll = Q ? l9.duration : 0,
                  lj = cc.tween().to(ll, {
                    'width': l9.midBg
                  }, {
                    'easing': l9.easing
                  }),
                  lI = cc.tween().to(ll, {
                    'width': l9.midBg + 20
                  }, {
                    'easing': l9.easing
                  }),
                  ls = cc.tween().to(ll, {
                    'width': l9.midButton
                  }, {
                    'easing': l9.easing
                  }),
                  lO = cc.tween().to(ll, {
                    'width': l9.pgSideBg
                  }, {
                    'easing': l9.easing
                  }),
                  ly = cc.tween().to(ll, {
                    'width': l9.sideBg
                  }, {
                    'easing': l9.easing
                  }),
                  lB = cc.tween().to(ll, {
                    'width': l9.sideBg + 23
                  }, {
                    'easing': l9.easing
                  }),
                  lx = cc.tween().to(ll, {
                    'width': l9.sideButton
                  }, {
                    'easing': l9.easing
                  }),
                  lC = cc.tween().to(ll, {
                    'width': l9.sideLabel
                  }, {
                    'easing': l9.easing
                  });
                lj.clone(T).start(), lI.clone(Y).start(), ls.clone(l1).start(), lO.clone(l3).start(), lO.clone(l4).start(), ly.clone(X).start(), lB.clone(E).start(), ly.clone(l5).start(), ly.clone(l7).start(), lx.clone(Z).start(), lC.clone(J).start(), ly.clone(F).start(), lB.clone(N).start(), lx.clone(K).start(), lC.clone(l0).start();
              }
            }, v.prototype.Xf = function (b) {
              var U = {};
              U.midBg = 371.2;
              U.midButton = 330;
              U.pgSideBg = 147.2;
              U.sideBg = 371.2;
              U.sideButton = 330;
              U.sideLabel = 240;
              U.duration = 0.75;
              U.easing = "cubicOut";
              var Q = {};
              Q.midBg = 230.4;
              Q.midButton = 200;
              Q.pgSideBg = 76.8;
              Q.sideBg = 441.6;
              Q.sideButton = 396;
              Q.sideLabel = 295;
              Q.duration = 4;
              Q.easing = "sineOut";
              var w = {};
              w.show = U;
              w.hide = Q;
              return this.Sf || (this.Sf = w), b ? this.Sf.show : this.Sf.hide;
            }, v.prototype.onAudioStateUpdate = function (b) {
              {
                var U = this;
                this.muteIcon.forEach(function (Q) {
                  Q.active = !b && U.Cf;
                }), this.Lf();
              }
            }, Object.defineProperty(v.prototype, "previousBetAmount", {
              'get': function () {
                return this.Af;
              },
              'set': function (b) {
                this.Af = b;
              },
              'enumerable': false,
              'configurable': true
            }), v.prototype.updateRollOverBalance = function (b, U) {
              var Q = this.Df,
                w = b <= U || !U ? b : U;
              this.rolloverPrizeBalance = V.isNumeric(w) ? w : 0, Q && Q.skip(this.rolloverPrizeBalance), this.previousRolloverPrizeBalance = this.rolloverPrizeBalance;
            }, v.prototype.updateOnGoingRollOverBalance = function (b) {
              {
                var U = this.Uf;
                this.rolloverOnGoingBalance = V.isNumeric(b) ? b : 0, U && U.skip(b), this.previousRolloverOnGoingBalance = this.rolloverOnGoingBalance;
              }
            }, v.prototype.updateRolloverProgressBar = function (b, U) {
              var Q = this,
                w = b > U ? U : b,
                P = w / U,
                R = this.barProgress;
              this.barProgress = P;
              var T = function (E) {
                  {
                    var F = P > 0 ? 54 : 0;
                    cc.Tween.stopAllByTarget(Q.progressBarNode), Q.progressBarNode.x = F, V.deferCallback(true)(function () {
                      E && E();
                    });
                  }
                },
                Y = function (E) {
                  {
                    var F = {};
                    F.x = 800 * P + 54;
                    var N = {};
                    N.easing = "sineOut";
                    cc.Tween.stopAllByTarget(Q.progressBarNode), cc.tween(Q.progressBarNode).to(0.5, F, N).call(function () {
                      E && E();
                    }).start();
                  }
                },
                X = function () {
                  R !== Q.barProgress && (Q.Zf(), Q.setBonusWalletIcon(w === U));
                };
              R !== this.barProgress && P >= 0 && (this.$f(), this.barProgress > R ? V.sequenceCallback(function (E) {
                0 === R ? T(E) : E && E();
              }, V.delayCallback(0.05), function (E) {
                Q.barProgress >= 0.0003 && (Q.progressBarCircleMask.enabled = false), E && E();
              }, Y)(X) : V.sequenceCallback(Y, function (E) {
                Q.barProgress < 0.0003 && (Q.progressBarCircleMask.enabled = true), E && E();
              }, V.delayCallback(0.05), function (E) {
                0 === Q.barProgress ? T(E) : E && E();
              })(X));
            }, v.prototype.Zf = function () {
              var b = {};
              b.x = 750;
              var U = {};
              U.x = -150;
              var Q = {};
              Q.easing = "sineOut";
              cc.Tween.stopAllByTarget(this.progressBarShine), cc.tween(this.progressBarShine).set(b).to(0.7, U, Q).delay(1.5).union().repeatForever().start();
            }, v.prototype.$f = function () {
              cc.Tween.stopAllByTarget(this.progressBarShine), this.progressBarShine.setPosition(750, 0);
            }, v.prototype.setUserProfileSpriteFrameList = function (b, U) {
              {
                this.gf = b, this.Cf = U, this.td(b, U);
              }
            }, v.prototype.td = function (b, U) {
              {
                0 !== b ? (this.userProfitSpriteFrame[H.DEFAULT] = this.userProfitSpriteFrame[H.SOUND_ON] = this.userProfitMenuOnAudioSpriteFrame, this.userProfitSpriteFrame[H.SOUND_OFF] = U ? this.userProfitMenuOffAudioSpriteFrame : this.userProfitMenuOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.DEFAULT] = this.userProfitDisableSpriteFrame[H.SOUND_ON] = this.userProfitMenuOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.SOUND_OFF] = U ? this.userProfitMenuOffAudioDisableSpriteFrame : this.userProfitMenuOnAudioDisableSpriteFrame) : (this.userProfitSpriteFrame[H.DEFAULT] = this.userProfitSpriteFrame[H.SOUND_ON] = this.userProfitSingleIconOnAudioSpriteFrame, this.userProfitSpriteFrame[H.SOUND_OFF] = U ? this.userProfitSingleIconOffAudioSpriteFrame : this.userProfitSingleIconOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.DEFAULT] = this.userProfitDisableSpriteFrame[H.SOUND_ON] = this.userProfitSingleIconOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.SOUND_OFF] = U ? this.userProfitSingleIconOffAudioDisableSpriteFrame : this.userProfitSingleIconOnAudioDisableSpriteFrame), this.userProfitSpriteFrame[H.OFFER_SOUND_ON] = this.userProfitMenuOnAudioSpriteFrame, this.userProfitSpriteFrame[H.OFFER_SOUND_OFF] = U ? this.userProfitMenuOffAudioSpriteFrame : this.userProfitMenuOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.OFFER_SOUND_ON] = this.userProfitMenuOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.userProfitMenuOffAudioDisableSpriteFrame, U && (this.freeGameSpriteFrame[H.OFFER_SOUND_OFF] = this.freeGameSpriteFrame[H.SOUND_OFF] = this.freeGameSpriteFrame[H.DEFAULT], this.freeGameDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.freeGameDisableSpriteFrame[H.SOUND_OFF] = this.freeGameDisableSpriteFrame[H.DEFAULT], this.bonusGameSpriteFrame[H.OFFER_SOUND_OFF] = this.bonusGameSpriteFrame[H.SOUND_OFF] = this.bonusGameSpriteFrame[H.DEFAULT], this.bonusGameDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.bonusGameDisableSpriteFrame[H.SOUND_OFF] = this.bonusGameDisableSpriteFrame[H.DEFAULT]);
              }
            }, __decorate([k(cc.Node)], v.prototype, "background", undefined), __decorate([k(cc.Node)], v.prototype, "balanceNode", undefined), __decorate([k(cc.Node)], v.prototype, "balanceValueHolder", undefined), __decorate([k(cc.Node)], v.prototype, "balanceValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "winValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "winHolderNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "winCashIconNode", undefined), __decorate([k(cc.Mask)], v.prototype, "winCashIconMask", undefined), __decorate([k(cc.Button)], v.prototype, "winButton", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotElementHolder", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconHolder", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgLeft", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgRight", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgMid", undefined), __decorate([k(cc.Node)], v.prototype, "pgIcon", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "pgIconOnSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "pgIconOffSpriteFrame", undefined), __decorate([k(cc.Node)], v.prototype, "freeGamesNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "specialIcon", undefined), __decorate([k(cc.Label)], v.prototype, "freeSpinValue", undefined), __decorate([k(cc.Button)], v.prototype, "walletButton", undefined), __decorate([k(cc.Node)], v.prototype, "walletButtonSensor", undefined), __decorate([k([cc.Node])], v.prototype, "walletNavigateIcon", undefined), __decorate([k(cc.Node)], v.prototype, "walletNotificationIcon", undefined), __decorate([k(cc.Node)], v.prototype, "menuIcon", undefined), __decorate([k([cc.Node])], v.prototype, "muteIcon", undefined), __decorate([k(cc.Node)], v.prototype, "betAmountHolder", undefined), __decorate([k(cc.Label)], v.prototype, "betAmountLabel", undefined), __decorate([k(cc.Button)], v.prototype, "betOptionsButton", undefined), __decorate([k(cc.Node)], v.prototype, "betOptionsIcon", undefined), __decorate([k([cc.Node])], v.prototype, "walletIconNode", undefined), __decorate([k([cc.Sprite])], v.prototype, "walletIconSprite", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOnAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOffAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOnAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOffAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOnAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOffAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOnAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOffAudioDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "freeGameSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "freeGameDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "bonusGameSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "bonusGameDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "rewardFooterTypeSFList", undefined), __decorate([k(cc.Node)], v.prototype, "maxBetButtonHolder", undefined), __decorate([k([cc.Layout])], v.prototype, "languageSensitiveLayoutList", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoHolderNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftGradientBg", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoHolderNode", undefined), __decorate([k(cc.RichText)], v.prototype, "leftSpecialInfoLabel", undefined), __decorate([k(cc.Layout)], v.prototype, "leftSpecialInfoLayout", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoTickHodler", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoTickCircleOutline", undefined), __decorate([k(cc.Animation)], v.prototype, "leftSpecialInfoTickAnimation", undefined), __decorate([k(cc.Node)], v.prototype, "missonBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "bonusWalletPrizeNode", undefined), __decorate([k(cc.Node)], v.prototype, "bonusWalletIcon", undefined), __decorate([k(cc.Node)], v.prototype, "rolloverPrizeValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "rolloverOnGoingValueNode", undefined), __decorate([k(cc.Label)], v.prototype, "totalRolloverValueLabel", undefined), __decorate([k(cc.Mask)], v.prototype, "progressBarCircleMask", undefined), __decorate([k(cc.Node)], v.prototype, "progressBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "progressBarShine", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTickHodler", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTickCircleOutline", undefined), __decorate([k(cc.Animation)], v.prototype, "rightSpecialInfoTickAnimation", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTextHolder", undefined), __decorate([W("SettingInfoFooterController")], v);
          }
        }(cc.Component);
        B.SettingInfoFooterController = z, cc._RF.pop();
      }
    }, s3],
    'SettingMenuAudioConstant': [function (C, H, r) {
      'use strict';

      var V = {};
      V.value = true;
      var M = {};
      M.from = 0;
      M.to = 0.120979;
      M.key = "listItemClick";
      var q = {};
      q.from = 1;
      q.to = 1.263375;
      q.key = "menuIconPress";
      var m = {};
      m.from = 2;
      m.to = 2.15675;
      m.key = "sliderEffect";
      var D = {};
      D.from = 3;
      D.to = 3.546188;
      D.key = "walletCountingAbove";
      var W = {};
      W.listItemClick = M;
      W.menuIconPress = q;
      W.sliderEffect = m;
      W.walletCountingAbove = D;
      W.__duration = 4.03;
      W.__bitrate = "96kbps";
      cc._RF.push(H, "a27ecjviSxF+Lkka+42YOls", "SettingMenuAudioConstant") || (Object.defineProperty(r, "__esModule", V), r.SETTING_MENU_SFX = undefined, r.SETTING_MENU_SFX = W, cc._RF.pop());
    }, {}],
    'SettingMenuButtonHelper': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "1ddf5VqGQ9OiqajxiLxeBVw", "SettingMenuButtonHelper")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = {};
          C['2'] = "spinOptions";
          C['3'] = "betOptions";
          C['4'] = "minusBet";
          C['5'] = "plusBet";
          C['6'] = "win";
          C['7'] = "turbo";
          C['8'] = "wallet";
          C['9'] = "moreMenu";
          C['10'] = "sound";
          var H = cc._decorator.ccclass,
            V = function () {
              function M() {
                this.sd = [], this.ed = Object.create(null), this.nd = Object.create(null), this.od = Object.create(null), this.hd = Object.create(null), this.rd = Object.create(null), this.ad = Object.create(null), this.ud = {};
              }
              return M.prototype.setButtonPrefab = function (q, m, D) {
                this.ed[q] = m, this.ad[q] = D, this.ud[r[q]] = false;
              }, M.prototype.totalButtonsOccupied = function () {
                return this.sd.length;
              }, M.prototype.getButtonInList = function (q) {
                {
                  return cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
                }
              }, M.prototype.setupSettingMenuButtonInList = function (q, m, D) {
                {
                  undefined === D && (D = false);
                  var W = cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
                  return this.sd.push(W.button), W.onClick = m, W.willHideOnceClick = D, this.od[q] = false, this.hd[q] = W, this.ud[r[q]] = true, W;
                }
              }, M.prototype.setupIndependentSettingMenuButton = function (q, m) {
                {
                  if (this.ed[q]) {
                    var D = cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
                    return D.onClick = m, this.od[q] = false, this.hd[q] = D, D;
                  }
                }
              }, M.prototype.setupOtherButtonInList = function (q, m) {
                var D = {};
                D.isInteractable = m;
                this.od[q] = false, this.rd[q] = D, this.ad[q] = false;
              }, M.prototype.setButtonInteractableFlag = function (q, m) {
                {
                  undefined === m && (m = false), this.nd[q] = m;
                }
              }, M.prototype.setButtonInteractable = function (q) {
                {
                  this.ad[q] || false !== this.od[q] || (this.rd[q] ? this.rd[q].isInteractable(this.nd[q]) : this.hd[q].isInteractable = this.nd[q]);
                }
              }, M.prototype.setButtonLock = function (q, m) {
                undefined === m && (m = false), this.od[q] = m;
              }, M.prototype.isButtonLocked = function (q) {
                {
                  return this.od[q];
                }
              }, M.prototype.setAllButtonsInteractable = function (q) {
                for (var m = Object.keys(this.hd), D = 0, W = m.length; D < W; D++) this.setButtonInteractableFlag(parseInt(m[D]), q), this.setButtonInteractable(parseInt(m[D]));
                var k = Object.keys(this.rd);
                for (D = 0, W = k.length; D < W; D++) this.setButtonInteractableFlag(parseInt(k[D]), q), this.setButtonInteractable(parseInt(k[D]));
              }, M.prototype.setButtonsLock = function (q) {
                for (var m = 0, D = Object.keys(this.hd).length; m < D; m++) this.setButtonLock(m + 1, q);
                for (m = 0, D = Object.keys(this.rd).length; m < D; m++) this.setButtonLock(m + 1, q);
              }, M.prototype.setLockAccess = function (q, m) {
                this.setButtonLock(q, m), m ? this.rd[q] ? this.rd[q].isInteractable(!m) : this.hd[q].isInteractable = !m : this.setButtonInteractable(q);
              }, M.prototype.getButtonNode = function (q) {
                var m = this.hd[q];
                return m ? m.node : undefined;
              }, Object.defineProperty(M.prototype, "buttonSetUpConfig", {
                'get': function () {
                  return this.ud;
                },
                'enumerable': false,
                'configurable': true
              }), __decorate([H("SettingMenuButtonHelper")], M);
            }();
          B.default = V, cc._RF.pop();
        }
      }
    }, {}],
    'SettingMenuController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "fba916JMWpJiL2n5fnfp4nN", "SettingMenuController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.SettingMenuController = undefined;
        var x = j("CanvasResizeBroadcaster"),
          C = j("HitPassThrough"),
          H = j("Utils"),
          V = j("BVFramework"),
          M = cc._decorator,
          q = M.ccclass,
          m = M.property,
          D = function (W) {
            function k() {
              var z = null !== W && W.apply(this, arguments) || this;
              return z.blackTintBackground = undefined, z.dimBackground = undefined, z.subControllerHolder = undefined, z.menusLayerHolder = undefined, z.defaultMenuLayerNode = undefined, z.subControllerBG = undefined, z.settingInfoFooterFrontHolder = undefined, z.settingInfoFooterMiddleBottomHolder = undefined, z.settingInfoFooterBottomHolder = undefined, z.walletButtonSensor = undefined, z.hitPassThroughComponent = undefined, z.settingToast = undefined, z.settingToastBg = undefined, z.settingToastLabel = undefined, z.settingTurboSprite = undefined, z.settingTurboOnSprite = undefined, z.settingTurboOffSprite = undefined, z.featureBuyToast = undefined, z.featureBuyToastBg = undefined, z.featureBuyToastLayout = undefined, z.featureBuyToastLabel = undefined, z.featureBuyTurboSprite = undefined, z.reminderBoard = undefined, z.originalBetAmountLabel = undefined, z.reminderBoardLabel = undefined, z.holders = [], z.settingMenuUIBlock = undefined, z.ld = false, z.fd = true, z.dd = [], z.Cc = [], z.vd = false, z.FRONT_MAX_HOLDER = 4, z._d = false, z.pd = false, z.bd = 0.2, z.md = false, z.Sd = 0, z.gd = false, z;
            }
            return __extends(k, W), k.prototype.onLoad = function () {
              this.defaultMenuLayerNode.y = 0, this.settingToast.opacity = 0, this.featureBuyToast.opacity = 0, this.featureBuyToast.active = false, this.reminderBoard.active = false, this.reminderBoard.opacity = 1, this.blackTintBackground.active = false, this.settingMenuUIBlock.active = false, this.subControllerHolder.height = this.Cd = cc.view.getVisibleSize().height;
              var z = x.default.subscribe(this.gi.bind(this));
              this.yd = "function" == typeof z ? z : undefined, this.Md = V.getGameContext();
            }, k.prototype.gi = function () {
              var z = this,
                L = this.wd;
              this.wd = undefined, L && L();
              var v = [];
              this.vd ? v.push(function () {
                var b = cc.view.getVisibleSize().height,
                  U = z.Ad();
                z.subControllerHolder.height = b - U, z.subControllerBG.height = b;
              }) : v.push(function () {
                if (undefined === z.Cd) throw Error("SettingMenuController :: _onSizeChanged : Please update holder height using updateSubControllerHolderHeight first!");
                var b = z.Ad();
                z.subControllerHolder.height = z.Cd, z.subControllerBG.height = z.Cd + b;
              }), this.wd = H.sequenceCallback(H.delayCallback(0))(function () {
                {
                  z.wd = undefined;
                  for (var b = 0; b < v.length; b++) v[b]();
                }
              });
            }, k.prototype.onDestroy = function () {
              var z = this.yd;
              this.yd = undefined, z && z();
            }, k.prototype.setBetChangeReminderLabel = function (z) {
              this.reminderBoardLabel.string = z;
            }, k.prototype.showBetReminderBoard = function (z) {
              var L = {};
              L.opacity = 255;
              this.pd || (this.pd = true, this.reminderBoard.active = true, cc.Tween.stopAllByTarget(this.reminderBoard), cc.tween(this.reminderBoard).to(0.2, L).start(), this.originalBetAmountLabel.string = z);
            }, k.prototype.hideBetReminderBoard = function () {
              {
                var z = this;
                var L = {};
                L.opacity = 0;
                this.pd && (this.pd = false, cc.Tween.stopAllByTarget(this.reminderBoard), cc.tween(this.reminderBoard).to(0.2, L).call(function () {
                  z.reminderBoard.active = false;
                }).start());
              }
            }, k.prototype.isSettingBetReminderBoardShowed = function () {
              {
                return this.pd;
              }
            }, k.prototype.cancelToChangeBetAmount = function () {
              this.Pd && this.Pd();
            }, k.prototype.confirmToChangeBetAmount = function () {
              this.Bd && this.Bd();
            }, k.prototype.setBetReminderCancelAndConfirmCallback = function (z, L) {
              {
                this.Pd = z, this.Bd = L;
              }
            }, k.prototype.showSettingTurboToast = function (z, L, v) {
              var b = this;
              undefined === v && (v = 2);
              var U = this.Od;
              this.Od = undefined, U && U(), cc.Tween.stopAllByTarget(this.settingToast), U || (this.settingToast.opacity = 1), this.settingToastLabel.string = z, this.Od = H.delayCallback(0)(function () {
                var Q = {};
                Q.scale = 1.2;
                var w = {};
                w.scale = 1;
                var P = {};
                P.opacity = 0;
                b.settingToastBg.width = b.settingToastLabel.node.width + 96, b.settingToastBg.height = b.settingToastLabel.node.height + 18, b.settingToast.opacity = 255, cc.tween(b.settingToast).to(0.1, Q).to(0.1, w).delay(v).to(0.3, P).call(function () {
                  {
                    b.Od = undefined;
                  }
                }).start();
              });
            }, k.prototype.showSettingToast = function (z, L) {
              var v = this;
              undefined === L && (L = 2);
              var b = this.Od;
              this.Od = undefined, b && b(), cc.Tween.stopAllByTarget(this.settingToast), b || (this.settingToast.opacity = 1), this.settingToastLabel.string = z, this.Od = H.delayCallback(0)(function () {
                {
                  var U = {};
                  U.scale = 1.2;
                  var Q = {};
                  Q.scale = 1;
                  var w = {};
                  w.opacity = 0;
                  v.settingToastBg.width = v.settingToastLabel.node.width + 96, v.settingToastBg.height = v.settingToastLabel.node.height + 18, v.settingToast.opacity = 255, cc.tween(v.settingToast).to(0.1, U).to(0.1, Q).delay(L).to(0.3, w).call(function () {
                    v.Od = undefined;
                  }).start();
                }
              });
            }, k.prototype.hideSettingToast = function () {
              {
                var z = this,
                  L = this.Od;
                var v = {};
                v.opacity = 0;
                this.Od = undefined, L && L(), cc.Tween.stopAllByTarget(this.settingToast), cc.tween(this.settingToast).to(0.3, v).call(function () {
                  z.Od = undefined;
                }).start();
              }
            }, k.prototype.showFeatureBuyToast = function (z, L) {
              {
                var v = this;
                undefined === L && (L = 2);
                var b = this.Id;
                this.Id = undefined, b && b(), this.featureBuyToast.active = true, cc.Tween.stopAllByTarget(this.featureBuyToast), cc.Tween.stopAllByTarget(this.featureBuyTurboSprite.node), this.featureBuyTurboSprite.node.active = false, this.featureBuyTurboSprite.node.opacity = 0, b || (this.featureBuyToast.opacity = 1), this.featureBuyToastLabel.string = z, this.Id = H.delayCallback(0)(function () {
                  var U = {};
                  U.scale = 1.2;
                  var Q = {};
                  Q.scale = 1;
                  var w = {};
                  w.opacity = 0;
                  v.featureBuyToastBg.width = v.featureBuyToastLabel.node.width - 50, v.featureBuyToastBg.height = v.featureBuyToastLabel.node.height + 40, v.featureBuyToast.opacity = 255, cc.tween(v.featureBuyToast).to(0.1, U).to(0.1, Q).delay(L).to(0.3, w).call(function () {
                    v.Id = undefined;
                  }).start();
                });
              }
            }, k.prototype.hideFeatureBuyToast = function () {
              var z = this,
                L = this.Id;
              var v = {};
              v.opacity = 0;
              this.Id = undefined, L && L(), cc.Tween.stopAllByTarget(this.featureBuyToast), cc.tween(this.featureBuyToast).to(0.3, v).call(function () {
                z.Id = undefined;
              }).start();
            }, k.prototype.setFeatureBuyToastNodePosition = function (z, L, v) {
              this.featureBuyToast.setPosition(z, L, v);
            }, k.prototype.buttonsHolder = function () {
              {
                return this.holders;
              }
            }, k.prototype.addMenuItem = function (z) {
              {
                return this.holders[this.dd.length].addChild(z), this.dd.push(z), this.Gd(), this.holders[this.dd.length - 1];
              }
            }, k.prototype.replaceMenuItems = function (z) {
              this.dd.length = 0;
              for (var L = 0, v = z.length; L < v; L++) this.dd.push(z[L]);
              this.Gd();
            }, k.prototype.Gd = function () {
              this.Cc.length = 0;
              for (var z = 0, L = this.dd.length; z < L; z++) if (this.fd) {
                if (z >= this.FRONT_MAX_HOLDER) break;
                this.Cc.push(this.dd[z]);
              } else z >= this.FRONT_MAX_HOLDER && this.Cc.push(this.dd[z]);
            }, k.prototype.isItemVisible = function (z) {
              return -1 !== this.Cc.indexOf(z);
            }, k.prototype.visibleItems = function () {
              return this.Cc.slice();
            }, k.prototype.getTotalItems = function () {
              return this.dd.slice();
            }, k.prototype.isIdle = function () {
              return !this.ld && this.fd;
            }, k.prototype.isShowingDefaultMenu = function () {
              {
                return this.fd;
              }
            }, k.prototype.setHitPassThroughPosAndSize = function (z, L, v, b) {
              var U = this.walletButtonSensor.convertToNodeSpaceAR(cc.v2(z, L));
              this.hitPassThroughComponent.passPoint = cc.v2(U.x, U.y), this.hitPassThroughComponent.passSize = cc.size(v, b);
            }, k.prototype.setHidden = function (z) {
              this.node.active = !z;
            }, k.prototype.getSettingInfoFooterFrontHolder = function () {
              return this.settingInfoFooterFrontHolder;
            }, k.prototype.getSettingInfoFooterBottomHolder = function () {
              return this.settingInfoFooterBottomHolder;
            }, k.prototype.getSettingInfoFooterMiddleBottomHolder = function () {
              return this.settingInfoFooterMiddleBottomHolder;
            }, k.prototype.setMenusLayerHolderOffsetPosition = function (z, L) {
              var v = this.menusLayerHolder;
              v.setPosition(v.x + z, v.y + L);
            }, k.prototype.setSubControllerHolderMoveDuration = function (z) {
              {
                this.bd = z;
              }
            }, k.prototype.Ad = function () {
              return this.node.parent.convertToWorldSpaceAR(cc.v2(this.node.x, this.node.y)).y;
            }, k.prototype.getGapBetweenBottomScreenValue = function () {
              {
                return this.Ad();
              }
            }, k.prototype.updateSubControllerHolderHeight = function (z) {
              this.subControllerHolder.height = this.Cd = z;
            }, k.prototype.isPanelTouchMoving = function () {
              return this._d;
            }, k.prototype.startMovePanel = function (z, L) {
              this.ld || (this._d = false, this.md = false, this.subControllerHolder.height = L, this.subControllerHolder.y = -L, this.Sd = z, this.subControllerBG.height = this.Ad() + L);
            }, k.prototype.movePanel = function (z) {
              if (!this.ld) {
                {
                  this._d = true;
                  var L = this.subControllerHolder,
                    v = this.subControllerHolder.height,
                    b = L.parent.convertToNodeSpaceAR(cc.v2(0, z)).y,
                    U = Math.abs(this.Sd - z);
                  this.md ? (L.y = b - v, L.y >= 0 && (L.y = 0)) : U > 60 ? z > this.Sd && (this.md = true, this.subControllerBG.opacity = 255, this.Nd && this.Nd()) : L.y = b - v;
                }
              }
            }, k.prototype.closePanel = function () {
              {
                var z = this;
                if (!this.ld) {
                  this.ld = true;
                  var L = this.subControllerHolder.height + this.Ad();
                  cc.tween(this.subControllerHolder).to(this.bd, {
                    'position': cc.v3(0, -L, 0)
                  }).call(function () {
                    {
                      z.ld = false, z._d = false, z.subControllerBG.opacity = 0;
                    }
                  }).start();
                }
              }
            }, k.prototype.getCurrentPanelTopPositionY = function () {
              var z = this.subControllerHolder;
              return z.y + z.height;
            }, k.prototype.setWalletButtonLock = function (z) {
              undefined === z && (z = false), this.gd = z;
            }, k.prototype.interactableWalletButton = function (z, L) {
              false === this.gd && !z && L && this.closePanel();
            }, k.prototype.setMenuUIBlock = function (z) {
              {
                this.settingMenuUIBlock.active = z;
              }
            }, __decorate([m(cc.Node)], k.prototype, "blackTintBackground", undefined), __decorate([m(cc.Node)], k.prototype, "dimBackground", undefined), __decorate([m(cc.Node)], k.prototype, "subControllerHolder", undefined), __decorate([m(cc.Node)], k.prototype, "menusLayerHolder", undefined), __decorate([m(cc.Node)], k.prototype, "defaultMenuLayerNode", undefined), __decorate([m(cc.Node)], k.prototype, "subControllerBG", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterFrontHolder", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterMiddleBottomHolder", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterBottomHolder", undefined), __decorate([m(cc.Node)], k.prototype, "walletButtonSensor", undefined), __decorate([m(C.default)], k.prototype, "hitPassThroughComponent", undefined), __decorate([m(cc.Node)], k.prototype, "settingToast", undefined), __decorate([m(cc.Node)], k.prototype, "settingToastBg", undefined), __decorate([m(cc.Label)], k.prototype, "settingToastLabel", undefined), __decorate([m(cc.Sprite)], k.prototype, "settingTurboSprite", undefined), __decorate([m(cc.SpriteFrame)], k.prototype, "settingTurboOnSprite", undefined), __decorate([m(cc.SpriteFrame)], k.prototype, "settingTurboOffSprite", undefined), __decorate([m(cc.Node)], k.prototype, "featureBuyToast", undefined), __decorate([m(cc.Node)], k.prototype, "featureBuyToastBg", undefined), __decorate([m(cc.Layout)], k.prototype, "featureBuyToastLayout", undefined), __decorate([m(cc.RichText)], k.prototype, "featureBuyToastLabel", undefined), __decorate([m(cc.Sprite)], k.prototype, "featureBuyTurboSprite", undefined), __decorate([m(cc.Node)], k.prototype, "reminderBoard", undefined), __decorate([m(cc.Label)], k.prototype, "originalBetAmountLabel", undefined), __decorate([m(cc.Label)], k.prototype, "reminderBoardLabel", undefined), __decorate([m([cc.Node])], k.prototype, "holders", undefined), __decorate([m(cc.Node)], k.prototype, "settingMenuUIBlock", undefined), __decorate([q("SettingMenuController")], k);
          }(cc.Component);
        y.SettingMenuController = D, cc._RF.pop();
      }
    }, s4],
    'SettingMenuHandlers': [function (y, B, x) {
      'use strict';

      if (!cc._RF.push(B, "e4a87/dIGtMT5oq5NQEGbT5", "SettingMenuHandlers")) {
        {
          var C = {};
          C.value = true;
          Object.defineProperty(x, "__esModule", C), x.handleSettingMenuMusicChange = x.additionalBetCalculation = x.updateDataSourceBetValue = x.getBetChangeCallback = x.updateBetChangesCallback = x.initializeSettingMenu = x.setSettingMenuButtonsInteractable = x.setupSettingMenu = undefined;
          var H = {};
          H.settingMenuLibPath = "lib/setting_menu/";
          var V = y("LaunchConfig"),
            M = y("AnalyticsHelper");
          x.setupSettingMenu = function (v) {
            var b = Object.assign({}, q, v.settingMenuDependenciesPath),
              U = v.settingMenuHelper,
              Q = v.dataSource,
              w = v.callback;
            U.path = b.settingMenuLibPath, U.showChangeBetReminder = v.isProgressiveGame, U.manualUpdateBetFactorCallBack = W(Q, U, v.betChangeCallback), U.betModifierUpdateCallback = D(Q, U, v.betChangeCallback), U.reevaluateBetCallback = k(Q, v.reevaluateBetCallback), U.additionalBetCalculationCallback = v.additionalBetCalculation ? v.additionalBetCalculation : z, U.changeSoundVolume = L(v.toggleEffectMuted, v.toggleMusicMuted);
            var P = '1' !== V.cs_Launch.noAudio;
            U.audioConfigure = P, w && w();
          }, x.setSettingMenuButtonsInteractable = m, x.initializeSettingMenu = function (v) {
            var b = v.settingMenuHelper,
              U = v.dataSource,
              Q = v.callback;
            b.setSettingMenuController(v.settingController), b.addSettingInfoFooter(v.settingWalletPanelController), b.setupSettingMenuButtons();
            var w = U.playerModel.balance;
            b.setBalance(w), b.updateBetValues(), m(b, U, false), Q && Q();
          }, x.updateBetChangesCallback = D, x.getBetChangeCallback = W, x.updateDataSourceBetValue = k, x.additionalBetCalculation = z, x.handleSettingMenuMusicChange = L, cc._RF.pop();
        }
      }
      function m(v, b, U, Q, w) {
        if (undefined === Q && (Q = true), undefined === w && (w = false), v.setAllButtonsInteractable(U, Q), U) {
          {
            var P = '0' !== b.transactionModel.transactionId;
            v.setVerifyInteractable(P, w);
          }
        } else v.setVerifyInteractable(false, w);
      }
      function D(v, b, U) {
        return function (Q, w) {
          var P = v.systemModel.maxLineNumber;
          b.betSizeValue = Q, b.betLevelValue = w, k(v)(Q, w), M.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_CHANGE_BET, {
            'amount': Q * w * P
          }), U && U();
        };
      }
      function W(v, b, U) {
        return function (Q, w) {
          D(v, b)(Q, w), b.updateBetValues(), U && U();
        };
      }
      function k(v, b) {
        return function (U, Q) {
          v.transactionModel.betSizeValue = U, v.transactionModel.betLevelValue = Q, b && b();
        };
      }
      function z(v, b, U) {
        return v * b * U;
      }
      function L(v, b) {
        return function (U) {
          v(!U), b(!U);
        };
      }
    }, s5],
    'SettingMenuHelper': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "35d29M3VudMFqjm4gRoo2G6", "SettingMenuHelper")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x), B.BackButtonType = B.settingMenuHelper = B.SettingMenuType = B.UIAudioIndex = B.ButtonPrefabType = undefined;
          var C,
            H,
            V,
            M,
            q = O("Utils"),
            D = O("SettingMenuButtonHelper"),
            W = O("Preference"),
            k = O("BVFramework"),
            z = O("SettingInfoFooterController"),
            L = O("UIAudioHelper"),
            U = O("GameEventHandler"),
            Q = System.get("slot-menu"),
            w = cc._decorator.ccclass,
            P = W.getPreference("setting_menu");
          P.defineItem("soundOn", true), function (X) {
            X[X.SPIN_OPTIONS = 2] = "SPIN_OPTIONS", X[X.BET_OPTIONS = 3] = "BET_OPTIONS", X[X.MINUS_BET = 4] = "MINUS_BET", X[X.PLUS_BET = 5] = "PLUS_BET", X[X.WIN = 6] = "WIN", X[X.TURBO_SPIN = 7] = "TURBO_SPIN", X[X.WALLET = 8] = "WALLET", X[X.MORE_MENU = 9] = "MORE_MENU", X[X.SOUND = 10] = "SOUND";
          }(C = B.ButtonPrefabType || (B.ButtonPrefabType = {})), function (X) {
            {
              X[X.BACK_OR_CLOSE = 0] = "BACK_OR_CLOSE", X[X.BUTTON_CLICK = 1] = "BUTTON_CLICK", X[X.LIST_ITEN_CLICK = 2] = "LIST_ITEN_CLICK", X[X.SLIDER_EFFECT = 3] = "SLIDER_EFFECT", X[X.WALLET_COUNTING_ABOVE = 4] = "WALLET_COUNTING_ABOVE";
            }
          }(H = B.UIAudioIndex || (B.UIAudioIndex = {})), function (X) {
            X[X.HIDDEN = 0] = "HIDDEN", X[X.NORMAL_BACK_FUNC = 1] = "NORMAL_BACK_FUNC";
          }(V || (V = {})), B.BackButtonType = V, function (X) {
            {
              X[X.NEW = 1] = "NEW";
            }
          }(M = B.SettingMenuType || (B.SettingMenuType = {}));
          var R = new (function (X) {
            {
              function E() {
                var F = X.call(this) || this;
                return F.soundOn = P.soundOn, F.turboSpinOn = false, F.isFreeGameMode = false, F.Td = false, F.Hd = true, F.Rd = V.HIDDEN, F.kd = '', F.Ld = 0, F.Ed = [], F.jd = [], F.rt = 0, F.ht = 0, F.Dd = '', F.Ud = 0, F.balanceAmountLessThan = 0, F.autoSpinCount = 0, F.balanceAmountMoreThan = 0, F.singleWinAmount = 0, F.Wd = false, F.Fd = false, F.xd = false, F.Vd = new D.default(), F.Md = k.getGameContext(), F.zd = false, F.Kd(), F.qd(), F.Md.on("Game.Initialized", F.Jd.bind(F)), F.Md.on("SettingMenu.SetWalletType", function (N) {
                  var Z = N.payload;
                  F.Yd(Z.type, Z.data);
                }), F.Md.on("SettingMenu.UpdateRollOverBalance", function (N) {
                  var Z = N.payload;
                  F.Qd(Z.data, true);
                }), F.Md.on("SettingMenu.UpdateFreeSpinCount", function (N) {
                  var Z = N.payload;
                  F.Xd(Z.data);
                }), F.Md.on("SettingMenu.SetWallatNavigateIcon", function (N) {
                  {
                    var Z = N.payload;
                    F.settingInfoFooter.setWalletNavigateIcon(Z);
                  }
                }), F.Md.on("Game.HasNewWallet", function (N) {
                  {
                    var Z = undefined === N.payload || N.payload;
                    F.settingInfoFooter.activateWalletNotify(Z);
                  }
                }), F.Md.on("Game.PlayUIClickSound", function (N) {
                  1 === N.payload && F.playMenuIconPressSound();
                }), F;
              }
              return __extends(E, X), E.prototype.isEnableVRF = function () {
                {
                  return 1 == +shell.environment.getURLSearchParam().get("type") && (shell.environment.getEIF() >> 24 & 16777215 & shell.environment.getEIF()) >= 1;
                }
              }, E.prototype.Yd = function (F, N) {
                switch (this.settingInfoFooter.showCustomInfoFooter(F), F) {
                  case z.WALLET_FOOTER_TYPE.CASH:
                    this.Zd(), this.settingInfoFooter.setFreeGameTick(false), this.setFreeGameMode(false);
                    break;
                  case z.WALLET_FOOTER_TYPE.FREE_GAME:
                    this.Xd(N), this.setFreeGameMode(true), this.settingInfoFooter.setLeftSpecialInfoLayout(Y);
                    break;
                  case z.WALLET_FOOTER_TYPE.BONUS:
                    this.Qd(N, false), this.settingInfoFooter.setBonusWalletIcon(false), this.settingInfoFooter.setFreeGameTick(false), this.setFreeGameMode(false);
                }
              }, E.prototype.Xd = function (F) {
                var N,
                  Z = F.tg,
                  g = F.tg - F.gc,
                  A = shell.I18n.t("Wallet.Games");
                N = 0 === g ? q.formatGroup(Z) + " <color=#D2C3BD>" + A + "</color>" : g === Z ? q.formatGroup(Z) + '/' + q.formatGroup(Z) : q.formatGroup(g) + '/' + q.formatGroup(Z) + " <color=#D2C3BD>" + A + "</color>", this.settingInfoFooter.setleftSpecialInfoLabel(N), this.settingInfoFooter.setFreeGameTick(g === Z);
              }, E.prototype.Qd = function (F) {
                var N = F.ibra,
                  Z = F.bra,
                  g = 0 !== F.ba ? F.ba : F.ca,
                  A = F.mca,
                  G = N - Z,
                  J = '/' + q.formatCurrency(N, '', '');
                this.settingInfoFooter.setRolloverSymbol(''), this.settingInfoFooter.setRolloverBaseUnit(''), this.settingInfoFooter.setRightSpecialInfoText(J), this.settingInfoFooter.updateRollOverBalance(g, A), this.settingInfoFooter.updateOnGoingRollOverBalance(G), this.settingInfoFooter.updateRolloverProgressBar(G, N);
              }, E.prototype.Zd = function () {}, Object.defineProperty(E.prototype, "path", {
                'get': function () {
                  return this.kd;
                },
                'set': function (F) {
                  this.kd = F;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.setSettingMenuController = function (F) {
                {
                  this.$d = F;
                }
              }, Object.defineProperty(E.prototype, "settingMenuController", {
                'get': function () {
                  if (!this.$d) throw Error("SettingMenuHelper :: settingMenuController : Cannot find settingMenuController. Please setup using setSettingMenuController first!");
                  return this.$d;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.initAudio = function (F) {
                this.tv(F);
              }, E.prototype.loadAudio = function (F) {
                L.loadAudio(F);
              }, E.prototype.setButtonPrefab = function (F, N, Z) {
                {
                  undefined === Z && (Z = false), this.Vd.setButtonPrefab(F, N, Z);
                }
              }, Object.defineProperty(E.prototype, "historyButtonLocaleIcon", {
                'get': function () {
                  if (!this.iv) throw Error("SettingMenuHelper :: historyButtonLocaleIcon : Cannot find historyButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
                  return this.iv;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "autoSpinButtonLocaleIcon", {
                'get': function () {
                  {
                    if (this.sv("autoSpinButtonLocaleIcon"), !this.ev) throw Error("SettingMenuHelper :: autoSpinButtonLocaleIcon : Cannot find autoSpinButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
                    return this.ev;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "settingInfoFooterLocaleAtlas", {
                'get': function () {
                  if (this.sv("settingInfoFooterAtlas"), !this.nv) throw Error("SettingMenuHelper :: settingInfoFooterAtlas : Cannot find settingInfoFooterAtlas. Please setup using settingMenuLocaleIcons setter first!");
                  return this.nv;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "turboOnButtonLocaleIcon", {
                'get': function () {
                  if (this.sv("turboOnButtonLocaleIcon"), !this.ov) throw Error("SettingMenuHelper :: turboOnButtonLocaleIcon : Cannot find turboOnButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
                  return this.ov;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "turboOffButtonLocaleIcon", {
                'get': function () {
                  if (this.sv("turboOffButtonLocaleIcon"), !this.cv) throw Error("SettingMenuHelper :: turboOffButtonLocaleIcon : Cannot find turboOffButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
                  return this.cv;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.sv = function () {}, Object.defineProperty(E.prototype, "settingMenuLocaleIcons", {
                'set': function (F) {
                  {
                    this.nv = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.hv = function () {
                var F = this,
                  N = this.settingMenuController,
                  Z = this.Vd.setupSettingMenuButtonInList(C.TURBO_SPIN, function () {
                    F.setTurboSpinButtonState(!F.turboSpinOn), F.turboSpinOn ? F.playMenuIconPressSound() : F.playCloseBtnPressSound();
                  });
                Z.getTurboSpinCallback = function () {
                  return this.turboSpinOn;
                }.bind(this), Z.setButtonOnColor("setting", "white_button_transition_a"), Z.setButtonOffColor("setting", "white_button_transition_a"), Z.sprite.spriteFrame = Z.turboSpinOn, Z.spriteEffect.spriteFrame = Z.turboSpinEffectOn, Z.changeButtonColor(true), Z.changeSpriteEffectColor();
                var g = this;
                this.rv = function () {
                  this.stopTurboLighting(), g.turboSpinOn ? this.playTurboLighting() : (this.sprite.spriteFrame = this.turboSpinOff, this.spriteEffect.spriteFrame = Z.turboSpinEffectOff), this.changeButtonColor(true), N.showSettingTurboToast(g.turboSpinOn ? shell.I18n.t("SettingMenu.TurboSpinEnable") : shell.I18n.t("SettingMenu.TurboSpinDisable"), g.turboSpinOn, 2), g.sendEventToGoogleAnalytic(g.turboSpinOn);
                }.bind(Z), this.av = q.observeCallback(this, "turboSpinOn")(this.rv), N.addMenuItem(Z.node), this.Md.on("Game.OnTurboSpin", function () {
                  F.setTurboSpinButtonState(true);
                }), this.Md.on("Game.OffTurboSpin", function () {
                  F.setTurboSpinButtonState(false);
                });
              }, E.prototype.setTurboSpinButtonState = function (F) {
                this.turboSpinOn = F, this.Md.emit("Game.TurboSpinStateChanged", this.turboSpinOn);
              }, E.prototype.sendEventToGoogleAnalytic = function (F) {
                {
                  var N = {};
                  N.name = "Turbo Spin";
                  N.index = F;
                  cc.sys.isBrowser && shell.ga.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_CHANGE_SETTING, N);
                }
              }, E.prototype.setupSettingMenuButtons = function () {
                {
                  var F,
                    N = this,
                    Z = this.settingMenuController,
                    g = this.Vd,
                    A = this;
                  this.Cf ? this.hv() : function () {
                    var G = g.setupSettingMenuButtonInList(C.SOUND, function () {
                      N.uv();
                    });
                    Z.addMenuItem(G.node), N.lv = function () {
                      this.updateSprite(A.soundOn);
                    }.bind(G), N.Hd || (N.soundEnable = N.Hd, N.setLockAccess(C.SOUND, true)), N.lv(), N.fv = q.observeCallback(N, "soundOn")(N.lv);
                  }(), (F = this.dv = g.setupSettingMenuButtonInList(C.MINUS_BET, this.decreaseBet.bind(this))).setShowSettingToastCallback(Z.showSettingToast.bind(Z)), F.setHideSettingToastCallback(Z.hideSettingToast.bind(Z)), Z.addMenuItem(F.node), (F = this.vv = g.setupSettingMenuButtonInList(C.PLUS_BET, this.increaseBet.bind(this))).setShowSettingToastCallback(Z.showSettingToast.bind(Z)), F.setHideSettingToastCallback(Z.hideSettingToast.bind(Z)), Z.addMenuItem(F.node), F = 0 !== this._v ? this.pv = g.setupSettingMenuButtonInList(C.SPIN_OPTIONS, this.bv.bind(this), true) : this.pv = g.setupSettingMenuButtonInList(C.MORE_MENU, this.mv.bind(this), true), Z.addMenuItem(F.node), this.Sv(), this.Md.emit("Wallet.SetupWalletType");
                }
              }, E.prototype.Sv = function () {
                for (var F = this.settingMenuController.buttonsHolder(), N = this.Vd.totalButtonsOccupied(), Z = F.length - N, g = F.length - 1; g >= 0 && !(Z <= 0); g--) F[g].active = false, Z--;
              }, E.prototype.setFeatureBuyToastNodePosition = function (F, N, Z) {
                this.settingMenuController.setFeatureBuyToastNodePosition(F, N, Z);
              }, Object.defineProperty(E.prototype, "backButtonType", {
                'get': function () {
                  return this.Rd;
                },
                'set': function (F) {
                  this.Rd = F;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.mv = function () {
                {
                  this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openMoreMenu();
                }
              }, E.prototype.bv = function () {
                this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openAutoSpinMenu();
              }, E.prototype.gv = function () {
                {
                  this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openBetMenu();
                }
              }, E.prototype.uv = function () {
                this.toggleSound();
              }, E.prototype.Cv = function (F) {
                undefined === F && (F = false), this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openHistoryMenu(F);
              }, E.prototype.yv = function () {
                {
                  this.playMenuIconPressSound(), this.openUserProfileMenu();
                }
              }, E.prototype.openAutoSpinMenu = function () {
                this.Mv(), this.Md.emit("SlotMenu.ShowSpinOptions", this.settingInfoFooter.currentWinAmount > 0);
              }, E.prototype.openBetMenu = function () {
                this.Mv(), this.wv(true), this.Md.emit("SlotMenu.ShowBetOptions", this.settingInfoFooter.currentWinAmount > 0);
              }, E.prototype.toggleSound = function () {
                this.soundEnable ? this.playMenuIconPressSound() : this.playCloseBtnPressSound(), this.soundEnable = !this.soundEnable, this.settingInfoFooter.onAudioStateUpdate(this.soundEnable);
                var F = true === this.soundEnable ? "OnGameSound" : "OffGameSound";
                this.Av(F);
              }, E.prototype.openHistoryMenu = function (F) {
                undefined === F && (F = false), this.Md.emit("History.QuickVerify"), this.Mv();
              }, E.prototype.openUserProfileMenu = function () {
                this.Pv();
              }, E.prototype.openMoreMenu = function () {
                {
                  this.Bv();
                }
              }, E.prototype.isBalanceHitTargetInAutoSpinMode = function (F, N) {
                {
                  var Z = false,
                    g = this.singleWinAmount,
                    A = this.balanceAmountMoreThan,
                    G = this.balanceAmountLessThan,
                    J = this.Ud;
                  return g && F > g && (Z = true), A && N >= J + A && (Z = true), G && N <= J - G && (Z = true), Z;
                }
              }, E.prototype.stopSpinOptionButtonAnim = function () {
                this.pv && this.pv.stopAutoSpinAnim();
              }, E.prototype.playSpinOptionButtonAnim = function () {
                this.pv && this.pv.playAutoSpinAnim();
              }, Object.defineProperty(E.prototype, "autoSpinCallback", {
                'set': function (F) {
                  {
                    var N = this;
                    this.Ov = function (Z) {
                      {
                        var g = Z.payload;
                        N.autoSpinCount = g.autoSpinCount, N.singleWinAmount = g.singleWinAmount, N.balanceAmountMoreThan = g.balanceAmountMoreThan, N.balanceAmountLessThan = g.balanceAmountLessThan, N.Ud = g.autoSpinStartBalance, N.autoSpinCount > 0 && N.playSpinOptionButtonAnim(), F && F();
                      }
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "turboSpinCallback", {
                'set': function (F) {
                  this.Iv && (this.Gv && this.Gv(), this.Iv = undefined), this.Iv = function () {
                    {
                      F && F();
                    }
                  }, this.Gv = q.observeCallback(this, "turboSpinOn")(this.Iv);
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "additionalBetCalculationCallback", {
                'set': function (F) {
                  {
                    this.Md.emit("SlotMenu.UpdateAdditionalBetCalculation", F), this.Nv = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "audioConfigure", {
                'get': function () {
                  return this.Hd;
                },
                'set': function (F) {
                  this.Hd = F;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "showChangeBetReminder", {
                'set': function (F) {
                  this.Wd = F, this.Md.emit("SlotMenu.SetShowChangeBetReminder", F);
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "showForfeitProgressReminder", {
                'set': function (F) {
                  this.Fd = F, this.Md.emit("SlotMenu.SetShowForfeitProgressReminder", F);
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "manualUpdateBetFactorCallBack", {
                'set': function (F) {
                  {
                    var N = this;
                    this.Tv = function (Z, g) {
                      N.checkSelectedValue(q.toDecimalWithExp(Z * g * N.betLineValue, 2)), F(Z, g);
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "finishBetPickCallback", {
                'set': function (F) {
                  {
                    this.Hv = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "cancelBetPanelCallback", {
                'set': function (F) {
                  {
                    this.Rv = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.updateBetLabelCallback = function (F) {
                this.kv = F;
              }, E.prototype.updateBetValues = function (F) {
                undefined === F && (F = 0), this.Nv || (this.Nv = function (Z, g, A) {
                  return Z * g * A;
                }, this.Md.emit("SlotMenu.UpdateAdditionalBetCalculation", this.Nv)), this.Lv = q.toFixed(this.betLineValue * this.betLevelValue * this.betSizeValue, 2);
                var N = this.Nv(this.betLineValue, this.betLevelValue, this.betSizeValue);
                this.kv && this.kv(N, F), this.Ev({
                  'totalBet': q.toDecimalWithExp(N, 2)
                });
              }, E.prototype.jv = function () {
                var F = this.betSizeList,
                  N = this.betSizeValue;
                return !(!F || !cc.js.isNumber(N)) && -1 !== F.indexOf(N);
              }, E.prototype.Dv = function () {
                var F = this.betLevelList,
                  N = this.betLevelValue;
                return !(!F || !cc.js.isNumber(N)) && -1 !== F.indexOf(N);
              }, E.prototype.reevaluateBet = function () {
                var F = this.betLineValue * this.betLevelValue * this.betSizeValue;
                return !(this.jv() && this.Dv() && !(this.Uv && F < this.Uv && (!this.Wv || F > this.Wv)) || (this.Fv(), this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)), this.xv && this.xv(this.betSizeValue, this.betLevelValue), 0));
              }, Object.defineProperty(E.prototype, "betModifierUpdateCallback", {
                'get': function () {
                  {
                    return this.Vv;
                  }
                },
                'set': function (F) {
                  {
                    this.Vv = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "reevaluateBetCallback", {
                'set': function (F) {
                  this.xv = F;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.Mv = function () {
                var F = this.settingMenuController;
                F.isSettingBetReminderBoardShowed() && (this.Lv = this.zv, this.betSizeValue = this.Kv, this.betLevelValue = this.qv, this.Jv = this.Yv, this.updateBetValues(), this.checkSelectedValue(this.zv), F.hideBetReminderBoard(), this.Qv && this.Qv());
              }, E.prototype.setBetReminderCancelAndConfirmCallback = function (F, N) {
                var Z = this,
                  g = this.settingMenuController;
                this.Qv = F ? function () {
                  {
                    Z.playCloseBtnPressSound(), F();
                  }
                } : q.emptyFunc, g.setBetReminderCancelAndConfirmCallback(this.Mv.bind(this), function () {
                  Z.playMenuIconPressSound(), Z.Kv !== Z.betSizeValue || Z.qv !== Z.betLevelValue ? (g.hideBetReminderBoard(), N && N(Z.betSizeValue, Z.betLevelValue), Z.Md.emit("SlotMenu.ChangeBet", Z.Lv)) : Z.Mv();
                });
              }, E.prototype.setBetReminderTriggerCallback = function (F) {
                this.Xv = F;
              }, E.prototype.preCalculateCombination = function () {
                {
                  var F = this.betSizeList || [],
                    N = this.betLevelList || [],
                    Z = this.betLineValue || 0;
                  if (0 !== F.length && 0 !== N.length && 0 !== Z) {
                    var g,
                      A = this.Uv,
                      G = this.Wv,
                      J = [];
                    if (this.Zv = undefined, A) {
                      {
                        G && (g = []), l3 = 0;
                        for (var K = F.length; l3 < K; l3++) for (var l0 = 0, l1 = N.length; l0 < l1; l0++) {
                          {
                            var l2 = q.toDecimalWithExp(F[l3] * N[l0] * Z, 2);
                            if (l2 >= A) {
                              this.Zv = l2, J[l3] = N.slice(l0);
                              break;
                            }
                            G && (G < A && l2 <= G || G >= A && l2 < A) && (g[l3] || (g[l3] = []), g[l3].push(N[l0])), l0 === l1 - 1 && (J[l3] = []);
                          }
                        }
                        if (undefined === this.Zv) return this.Zv = q.toFixed(F[0] * N[0] * Z, 2), this.$v = Object.create(null), void (this.$v[this.Zv] = {
                          'betSize': F[0],
                          'betLevel': N[0]
                        });
                      }
                    } else for (var l3 = 0; l3 < F.length; l3++) J[l3] = N;
                    var l4 = function (l9, ll) {
                        {
                          if (l9 < 2) return ll.slice();
                          var lj = ll.length;
                          if (lj < (l9 > 2 ? 4 : 6)) return ll.slice();
                          var lI = ll[ll.length - 1],
                            ls = [lI];
                          2 === l9 && ls.unshift(lI - (Math.round(lj / 5) || 1)), ls.unshift(lI - (Math.floor(lj / 2) || 1)), 2 === l9 && ls.unshift(ls[0] - (Math.floor(lj / 5) || 1));
                          var lO = ll[0];
                          return ls.unshift(lO + (Math.floor(lj / 10) || 1)), ls.unshift(lO), ls;
                        }
                      },
                      l5 = Object.create(null);
                    for (l3 = 0, K = F.length; l3 < K; l3++) {
                      var l6 = l4(l3, J[l3]);
                      if (g && g[l3] && (l6 = l6.concat(g[l3])), 0 !== l6.length) for (l0 = 0, l1 = N.length; l0 < l1; l0++) if (l6.includes(N[l0])) {
                        {
                          var l7 = q.toFixed(F[l3] * N[l0] * Z, 2);
                          var l8 = {};
                          l8.betSize = F[l3];
                          l8.betLevel = N[l0];
                          l5[l7] || (l5[l7] = l8);
                        }
                      }
                    }
                    this.$v = l5;
                  }
                }
              }, E.prototype.Fv = function () {
                var F = this.betLineValue * this.betLevelValue * this.betSizeValue;
                if (undefined !== this.Zv && F < this.Zv && this.$v && (!this.Wv || F > this.Wv)) {
                  var N = this.$v[q.toFixed(this.Zv, 2)];
                  this.betSizeValue = N.betSize, this.betLevelValue = N.betLevel;
                } else this.betSizeValue = this.betSizeList[0], this.betLevelValue = this.betLevelList[0];
              }, E.prototype.checkSelectedValue = function (F) {
                var N = +F;
                if (this.Uv && N < this.Uv && (!this.Wv || N > this.Wv) && (N = this.Uv), F = q.toFixed(N, 2), !this.$v) throw Error("SettingMenuHelper :: checkSelectedValue : bet combination did not generate due to size or level empty");
                var Z = Object.keys(this.$v).sort(function (A, G) {
                    var J = parseFloat(A),
                      K = parseFloat(G);
                    return J < K ? -1 : J > K ? 1 : 0;
                  }),
                  g = Z.indexOf(F);
                -1 === g ? (this.Lv = F, this.Jv = undefined, this.dv.updateBetModifierColor(1), this.vv.updateBetModifierColor(1, Z.length - 1)) : (this.Jv = g, this.dv.updateBetModifierColor(g), this.vv.updateBetModifierColor(g, Z.length - 1));
              }, E.prototype.t_ = function (F) {
                {
                  var N = this,
                    Z = this.settingMenuController;
                  this.Wd || this.Fd ? Z.isSettingBetReminderBoardShowed() || (this.zv = this.Lv, this.Kv = this.betSizeValue, this.qv = this.betLevelValue, this.Yv = this.Jv, F.selectedBet !== this.Yv && (this.Md.emit("SlotMenu.GetShowChangeBetReminder", undefined, function (g) {
                    {
                      var A = '';
                      g.response ? (A = shell.I18n.t("BetOptions.BetChangeProgressRemind"), Z.setBetChangeReminderLabel(A)) : N.Md.emit("SlotMenu.GetShowForfeitProgressReminder", undefined, function (G) {
                        G.response && (A = shell.I18n.t("BetOptions.BetChangeForfeitProgressRemind"), Z.setBetChangeReminderLabel(A));
                      }), Z.showBetReminderBoard(q.formatCurrency(parseFloat(N.zv)));
                    }
                  }), this.Xv && this.Xv())) : this.i_(parseFloat(F.selectedBetAmount));
                }
              }, E.prototype.s_ = function (F, N) {
                var Z = RegExp('<' + F + " style=['\"]color:\\s*([^'\"]+)['\"]>", 'gi');
                return N.replace(Z, "<color=$1>").replace('</' + F + '>', "</color>");
              }, E.prototype.e_ = function (F) {
                if (this.Uv && this.Wv) if (F < this.Uv && F <= this.Wv) {
                  {
                    var N = this.s_("span", shell.I18n.t("FeatureBuy.BetForFeatureBuyOnly")),
                      Z = this.s_("span", shell.I18n.t("FeatureBuy.BetSuggestion", {
                        'amount': q.formatCurrency(this.Uv)
                      }));
                    this.settingMenuController.showFeatureBuyToast(N + '\x0a' + Z, 2);
                  }
                } else this.settingMenuController.hideFeatureBuyToast();
              }, E.prototype.increaseBet = function () {
                {
                  if (!this.$v) throw Error("SettingMenuHelper :: increaseBet : bet combination did not generate");
                  var F = Object.keys(this.$v).sort(function (g, A) {
                      var G = parseFloat(g),
                        J = parseFloat(A);
                      return G < J ? -1 : G > J ? 1 : 0;
                    }),
                    N = this.vv.increaseBet(F, this.Jv, this.Lv);
                  this.t_(N), this.e_(+N.selectedBetAmount), this.dv.updateBetModifierColor(N.selectedBet), this.vv.updateBetModifierColor(N.selectedBet, F.length - 1);
                  var Z = this.Jv = N.selectedBet;
                  this.Lv = N.selectedBetAmount, this.betSizeValue = this.$v[F[Z]].betSize, this.betLevelValue = this.$v[F[Z]].betLevel, this.updateBetValues(T(Z, this.$v)), this.Wd || this.Fd || this.Vv && this.Vv(this.betSizeValue, this.betLevelValue), this.playMenuIconPressSound(), this.Md.emit("SettingMenu.PlusButtonPressed");
                }
              }, E.prototype.decreaseBet = function () {
                if (!this.$v) throw Error("SettingMenuHelper :: decreaseBet : bet combination did not generate");
                var F = Object.keys(this.$v).sort(function (g, A) {
                    {
                      var G = parseFloat(g),
                        J = parseFloat(A);
                      return G < J ? -1 : G > J ? 1 : 0;
                    }
                  }),
                  N = this.dv.decreaseBet(F, this.Jv, this.Lv);
                this.t_(N), this.e_(+N.selectedBetAmount), this.dv.updateBetModifierColor(N.selectedBet), this.vv.updateBetModifierColor(N.selectedBet, F.length - 1);
                var Z = this.Jv = N.selectedBet;
                this.Lv = N.selectedBetAmount, this.betSizeValue = this.$v[F[Z]].betSize, this.betLevelValue = this.$v[F[Z]].betLevel, this.updateBetValues(T(Z, this.$v)), this.Wd || this.Fd || this.Vv && this.Vv(this.betSizeValue, this.betLevelValue), this.playMenuIconPressSound(), this.Md.emit("SettingMenu.MinusButtonPressed");
              }, Object.defineProperty(E.prototype, "changeSoundVolume", {
                'set': function (F) {
                  var N = this;
                  this.n_ && (this.o_ && this.o_(), this.n_ = undefined), this.n_ = function () {
                    N.c_(N.soundOn), F && F(N.soundOn);
                  }, this.o_ = q.observeCallback(this, "soundOn")(this.n_);
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.setBalance = function (F, N) {
                var Z = this;
                undefined === N && (N = true);
                var g = this.h_(F);
                this.r_(function (A) {
                  g && Z.playWalletCountingAboveSfx();
                  var G = q.toDecimalWithExp(A && A.balance || F, 2);
                  Z.settingInfoFooter.updateBalance(undefined, G, N), Z.Ev({
                    'balance': G
                  });
                }), this.Md.emit("Wallet.UpdateRollOverBalance");
              }, E.prototype.setWinAmount = function (F, N, Z) {
                undefined === N && (N = true), undefined === Z && (Z = true), this.settingInfoFooter.updateWinAmount(F, N, Z), this.Md.emit("SlotMenu.UpdateWinAmount", F), this.Ev({
                  'totalWin': q.toDecimalWithExp(F, 2)
                });
              }, E.prototype.setAllButtonsInteractable = function (F, N) {
                {
                  undefined === N && (N = true), this.Vd.setAllButtonsInteractable(F), F && this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2));
                }
              }, E.prototype.setLockAccess = function (F, N) {
                this.Vd.setLockAccess(F, N);
              }, E.prototype.isButtonLocked = function (F) {
                return this.Vd.isButtonLocked(F);
              }, E.prototype.setButtonInteractableFlag = function (F, N) {
                {
                  undefined === N && (N = false), this.Vd.setButtonInteractableFlag(F, N);
                }
              }, E.prototype.setButtonInteractable = function (F) {
                this.Vd.setButtonInteractable(F);
              }, E.prototype.setLockAccessAutoSpinPanel = function (F) {
                this.setLockAccess(C.SPIN_OPTIONS, F);
              }, E.prototype.setLockAccessBetPanel = function (F) {
                this.setLockAccess(C.BET_OPTIONS, F);
              }, E.prototype.setLockMoreMenuButton = function (F) {
                {
                  this.setLockAccess(C.MORE_MENU, F);
                }
              }, E.prototype.setHidden = function (F) {
                {
                  this.Td = F, this.settingMenuController.setHidden(F);
                }
              }, E.prototype.isIdle = function () {
                return this.settingMenuController.isIdle();
              }, Object.defineProperty(E.prototype, "isShowBlackTintBg", {
                'set': function (F) {
                  this.xd = F;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.activateWalletNotify = function (F) {
                {
                  this.settingInfoFooter.activateWalletNotify(F);
                }
              }, E.prototype.addSettingInfoFooter = function (F) {
                this.a_ = F, this.Vd.setupOtherButtonInList(C.WALLET, F.interactableWalletButton.bind(F)), F.updateLayout(Y()), F.setFooterLocaleAtlas(this.settingInfoFooterLocaleAtlas), F.setOpenUserProfileMenuCallback(this.yv.bind(this)), F.showBackground(false), F.changeHolder(this.settingMenuController.getSettingInfoFooterFrontHolder()), this.Vd.setupOtherButtonInList(C.BET_OPTIONS, F.interactableBetOptionsButton.bind(F)), F.setOpenBetOptionsMenuCallback(this.gv.bind(this)), this.updateBetLabelCallback(F.updateBetAmount.bind(F)), this.Vd.setupOtherButtonInList(C.WIN, F.interactableWinButton.bind(F)), F.setOpenWinMenuCallback(this.Cv.bind(this, true)), F.boot(), F.setUserProfileSpriteFrameList(this._v, this.Cf), F.onAudioStateUpdate(this.soundOn), this.Md.emit("SettingMenu.SetUpButton", this.Vd.buttonSetUpConfig);
              }, E.prototype.getSettingInfoFooter = function () {
                return this.settingInfoFooter;
              }, Object.defineProperty(E.prototype, "settingInfoFooter", {
                'get': function () {
                  if (!this.a_) throw Error("SettingMenuHelper :: settingInfoFooter : Cannot find settingInfoFooter. Please setup setting info footer first! (addSettingInfoFooter)");
                  return this.a_;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.showSettingInfoFooterBackground = function (F) {
                {
                  this.settingInfoFooter.showBackground(F);
                }
              }, E.prototype.setFreeGameMode = function (F) {
                var N, Z, g, A, G;
                this.isFreeGameMode = F;
                var J = null === (N = this.$d) || undefined === N ? undefined : N.buttonsHolder();
                F ? (this.setLockAccess(C.BET_OPTIONS, true), this.vv.buttonActivate(false), this.dv.buttonActivate(false), (null === (Z = J[0]) || undefined === Z ? undefined : Z.getComponent(cc.Widget)).left = 150, (null === (g = J[3]) || undefined === g ? undefined : g.getComponent(cc.Widget)).right = 150) : (this.setLockAccess(C.BET_OPTIONS, false), this.vv.buttonActivate(true), this.dv.buttonActivate(true), (null === (A = J[0]) || undefined === A ? undefined : A.getComponent(cc.Widget)).left = 60, (null === (G = J[3]) || undefined === G ? undefined : G.getComponent(cc.Widget)).right = 60, this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)));
              }, E.prototype.getCurrentBalance = function () {
                {
                  return this.settingInfoFooter.currentBalance;
                }
              }, E.prototype.additionalBetCalculation = function () {
                if (!this.Nv) throw Error("SettingMenuHelper :: additionalBetCalculation : Please set calculation callback via additionalBetCalculationCallback setter first!");
                return this.Nv(this.betLineValue, this.betLevelValue, this.betSizeValue);
              }, Object.defineProperty(E.prototype, "betLineValue", {
                'get': function () {
                  {
                    return this.Ld;
                  }
                },
                'set': function (F) {
                  this.Md.emit("SlotMenu.SetBetLineValue", F), this.Ld = F, this.preCalculateCombination();
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "betSizeList", {
                'get': function () {
                  {
                    return this.Ed;
                  }
                },
                'set': function (F) {
                  {
                    this.Md.emit("SlotMenu.SetBetSizeList", F), this.Ed = F, this.preCalculateCombination();
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "betSizeValue", {
                'get': function () {
                  {
                    return this.rt;
                  }
                },
                'set': function (F) {
                  this.Md.emit("SlotMenu.SetBetSizeValue", F), this.rt = F;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "minimumBetAmount", {
                'get': function () {
                  return this.Uv;
                },
                'set': function (F) {
                  {
                    this.Md.emit("SlotMenu.SetMinimumBetAmount", F), this.Uv = F, this.preCalculateCombination();
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "featureBuyThreshold", {
                'get': function () {
                  {
                    return this.Wv;
                  }
                },
                'set': function (F) {
                  this.Md.emit("SlotMenu.SetFeatureBuyThreshold", F), this.Wv = F, this.preCalculateCombination();
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "betLevelList", {
                'get': function () {
                  {
                    return this.jd;
                  }
                },
                'set': function (F) {
                  this.Md.emit("SlotMenu.SetBetLevelList", F), this.jd = F, this.preCalculateCombination();
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "betLevelValue", {
                'get': function () {
                  return this.ht;
                },
                'set': function (F) {
                  {
                    this.Md.emit("SlotMenu.SetBetLevelValue", F), this.ht = F;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "baseBet", {
                'get': function () {
                  return this.Dd;
                },
                'set': function (F) {
                  {
                    this.Dd = F, this.Md.emit("SlotMenu.SetBaseBet", F);
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(E.prototype, "soundEnable", {
                'get': function () {
                  return P.soundOn;
                },
                'set': function (F) {
                  this.soundOn = F, P.soundOn = F;
                },
                'enumerable': false,
                'configurable': true
              }), E.prototype.playWalletCountingAboveSfx = function () {
                this.soundEnable && this.Md.emit("Game.PlayUISound", H.WALLET_COUNTING_ABOVE);
              }, E.prototype.playMenuIconPressSound = function () {
                this.soundEnable && this.Md.emit("Game.PlayUISound", H.BUTTON_CLICK);
              }, E.prototype.playCloseBtnPressSound = function () {
                this.soundEnable && this.Md.emit("Game.PlayUISound", H.BACK_OR_CLOSE);
              }, E.prototype.playListItemClickSound = function () {
                this.soundEnable && this.Md.emit("Game.PlayUISound", H.LIST_ITEN_CLICK);
              }, E.prototype.playSliderEffectSound = function () {
                this.soundEnable && this.Md.emit("Game.PlayUISound", H.SLIDER_EFFECT);
              }, E.prototype.tv = function (F) {
                {
                  L.initUIAudioHelper(F);
                }
              }, E.prototype.reset = function () {
                {
                  this.av && this.av(), this.Gv && this.Gv(), this.fv && this.fv(), this.o_ && this.o_(), this.u_ && this.u_(), this.kv = undefined, this.Ov = undefined, this.Iv = undefined, this.n_ = undefined, this.lv = undefined, this.rv = undefined, this.Vd = new D.default();
                }
              }, E.prototype.Bv = function () {
                var F = {};
                F.operationPageIndex = 2;
                this.Md.emit("UserProfile.Show", F);
              }, E.prototype.Pv = function () {
                this.Md.emit("UserProfile.Show");
              }, E.prototype.l_ = function (F) {
                {
                  this.Md.emit("Wallet.ShowWalletList", F);
                }
              }, E.prototype.Ev = function (F) {
                this.Md.emit("Game.TransactionInfoChanged", F);
              }, E.prototype.c_ = function (F) {
                {
                  var N = F ? 'On' : "Off";
                  this.Md.emit("Game.AudioStateChanged", N);
                }
              }, E.prototype.Kd = function () {
                var F = this;
                U.addUIBlockEventCallback("settingmenu", function (N) {
                  F.settingMenuController.setMenuUIBlock(N);
                }), this.Md.on("SlotMenu.StartAutoSpin", function (N) {
                  F.Ov && F.Ov(N);
                }, this), Q && (this.Md.on("Game.ShowOptions", this.openBetMenu, this), this.Md.on("Game.HideOptions", this.f_, this), this.Md.on("SlotMenu.ManualUpdateBetFactorCallback", function (N) {
                  var Z = N.payload,
                    g = Z.betSize,
                    A = Z.betLevel;
                  F.Tv && F.Tv(g, A);
                }, this), this.Md.on("SlotMenu.CancelBetPanelCallback", function () {
                  F.Rv && F.Rv();
                }, this), this.Md.on("SlotMenu.FinishBetPickCallback", function (N) {
                  var Z = N.payload,
                    g = Z.betSize,
                    A = Z.betLevel;
                  F.Hv && F.Hv(g, A);
                }, this)), this.Md.on("Game.OnAudio", function () {
                  {
                    F.soundEnable = true, F.settingInfoFooter.onAudioStateUpdate(true);
                  }
                }), this.Md.on("Game.OffAudio", function () {
                  {
                    F.soundEnable = false, F.settingInfoFooter.onAudioStateUpdate(false);
                  }
                }), this.Md.on("Game.RequestAudioState", function (N) {
                  true === F.soundEnable ? N.response = 'On' : N.response = "Off";
                }), this.Md.on("Game.GetSettingMenuType", function (N) {
                  {
                    N.response = M.NEW;
                  }
                });
              }, E.prototype.qd = function () {
                var F = this;
                this.Md.on("Game.TransactionStateComplete", function (N) {
                  {
                    if (F.d_) {
                      {
                        var Z = N.payload.to;
                        "setup" === Z && F.zd && (F.zd = false), "action" !== Z || F.zd || (F.zd = true);
                      }
                    }
                  }
                }), this.Md.on("Game.TransactionInfoUpdated", function (N) {
                  F.d_ && (F.v_ = N.payload.tbb);
                });
              }, E.prototype.Jd = function () {
                {
                  var F = this;
                  this.Md.emit("Game.RequestSession", undefined, function (N) {
                    var Z = N.response;
                    if (!Z || !Z.gameId) throw Error("SettingMenuHelper:: Game.RequestSession return invalid data");
                    F.Cf = Z.operatorJurisdictionConfig.turboSpinEnable, F._v = Z.operatorJurisdictionConfig.autoPlayConfig, F.d_ = Z.operatorJurisdictionConfig.hideNonProfitEffect, F.Rd = Z.operatorJurisdictionConfig.backButton;
                  }), this.Md.off("Game.Initialized", this.Jd.bind(this));
                }
              }, E.prototype.wv = function (F) {
                F ? this.Md.on("Game.HideOptions", this.f_, this) : this.Md.off("Game.HideOptions", this.f_, this);
              }, E.prototype.f_ = function () {
                this.wv(false), this.Md.emit("SlotMenu.HideBetOptions");
              }, E.prototype.r_ = function (F) {
                F && this.Md.emit("Game.RequestTransactionInfo", undefined, function (N) {
                  F(N.response);
                });
              }, E.prototype.setVerifyInteractable = function (F) {
                var N = F && this.isEnableVRF();
                this.settingInfoFooter.setPGIconsInteractableColor(N), this.settingInfoFooter.interactableWinButton(N);
              }, E.prototype.Av = function (F) {
                {
                  var N = {};
                  N.actionName = F;
                  this.Md.emit("Analytics.Event", N);
                }
              }, E.prototype.i_ = function (F) {
                var N = this;
                this.__ ? this.__() : this.p_ = parseFloat(this.Lv), this.__ = q.delayCallback(0.6)(function () {
                  F !== N.p_ && N.Md.emit("SlotMenu.ChangeBet", F), N.__ = undefined, N.p_ = undefined;
                });
              }, E.prototype.getSettingMenuButtonNode = function (F) {
                {
                  return this.Vd.getButtonNode(F);
                }
              }, E.prototype.h_ = function (F) {
                var N = this.settingInfoFooter;
                if (this.zd && this.d_) {
                  var Z = N.currentBalance,
                    g = +q.toFixed(F - N.currentBalance, 2);
                  if (this.v_ && F > Z && g > this.v_) return true;
                }
                return false;
              }, E.prototype.setFooterBackgroundOpacity = function (F) {
                undefined === F && (F = 127), this.settingInfoFooter.setFooterBackgroundOpacity(F);
              }, __decorate([shell.deprecated("getSettingInfoFooter")], E.prototype, "getSettingInfoFooter", null), __decorate([w], E);
            }
          }(cc.Object))();
          B.settingMenuHelper = R, cc._RF.pop();
        }
      }
      function T(X, E) {
        return (X + 1) / Object.keys(E).length;
      }
      function Y() {
        return shell.isRTLLanguage && shell.isRTLLanguage();
      }
    }, s6],
    'SettingSliderNum': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "89028I5vilAgJwUYY+0IKoT", "SettingSliderNum")) {
        O.__esModule = true, O.default = undefined;
        var y = l("Utils"),
          B = cc.Class({
            'extends': cc.Component,
            'properties': {
              'numberLabel': cc.Label,
              'numSprites': [cc.Sprite],
              'pixelSprites': [cc.SpriteFrame],
              'num': 10,
              'shortLine': cc.Node,
              'onColor': cc.Color,
              'offColor': cc.Color,
              'isMin': false
            },
            'setColor': function (x, C) {
              {
                this.onColor = x, this.offColor = C;
              }
            },
            'setDisplayValue': function (x, C) {
              this.numberLabel.string = C, this.numberLabel.node.active = x;
            },
            'onLoad': function () {
              {
                this.isMin && (this.shortLine.active = false);
              }
            },
            'setLight': function (x) {
              x ? (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
            }
          });
        O.default = B, j.exports = O.default, cc._RF.pop();
      }
    }, s7],
    'SettingSliderSingleNum': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "449bftyQ69GBqYbHra7PRW2", "SettingSliderSingleNum")) {
        O.__esModule = true, O.default = undefined;
        var y = l("Utils"),
          B = cc.Class({
            'extends': cc.Component,
            'properties': {
              'numberLabel': cc.Label,
              'num': 10,
              'onColor': cc.Color,
              'offColor': cc.Color
            },
            'onLoad': function () {
              this.numberLabel.string = this.num;
            },
            'setColor': function (x, C) {
              {
                this.onColor = x, this.offColor = C;
              }
            },
            'setLight': function (x) {
              {
                x ? (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
              }
            }
          });
        O.default = B, j.exports = O.default, cc._RF.pop();
      }
    }, s8],
    'SettingSliderSingle': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "41cdfy0E9FKC7KilcTyf7iZ", "SettingSliderSingle")) {
        O.__esModule = true, O.default = undefined;
        var y = cc.Class({
          'extends': cc.Component,
          'properties': {
            'settingSliderNum': cc.Prefab,
            'numbers': [cc.Float],
            'content': cc.Node,
            'valueLabel': cc.Label,
            'alwaysShow': false
          },
          'onEnable': function () {
            this.b_(), this.node.on("size-changed", this.b_, this);
          },
          'onDisable': function () {
            {
              this.node.off("size-changed", this.b_, this);
            }
          },
          'b_': function () {
            if (this.m_ = cc.Canvas.instance.node.width / 2, this.S_) {
              {
                for (var B = this.g_, x = 0, C = B.length; x < C; x++) B[x].node.x = this.m_ + 183 * x;
                this.updateSlider();
              }
            }
          },
          'setBiggestValue': function () {
            var B = this.numbers.length - 1;
            this.setLight(B), this.content.x = -this.m_ - 183 * B;
          },
          'setNumberList': function (B) {
            this.numbers = B;
          },
          'setValueColor': function (B, x) {
            this.C_ = B, this.y_ = x;
          },
          'setPlaySound': function (B) {
            this.M_ = B;
          },
          'init': function () {
            {
              var B = this;
              this.S_ = false;
              for (var x = this.g_ = [], C = this.numbers, H = this.numbers.length - 1, V = this.content, M = 0, q = this.numbers.length; M < q; M++) {
                var m = cc.instantiate(this.settingSliderNum),
                  D = x[M] = m.getComponent("SettingSliderSingleNum");
                D.setColor(this.C_, this.y_), D.num = C[M], m.x = this.m_ + 183 * M, m.parent = this.content;
              }
              var W = -this.m_ - 183 * H,
                k = -this.m_,
                z = this.node;
              if (z.on(cc.Node.EventType.TOUCH_START, function (v) {
                {
                  z.active && (v.stopPropagation(), B.w_ = v.getLocation().x, B.A_ = V.x);
                }
              }), z.on(cc.Node.EventType.TOUCH_MOVE, function (v) {
                if (z.active) {
                  v.stopPropagation();
                  var b = v.getLocation().x - B.w_,
                    U = B.A_ + b;
                  if (U < W) V.x = W, B.setLight(H);else if (U > k) V.x = k, B.setLight(0);else {
                    var Q = Math.round(b / 183),
                      w = 183 * Q,
                      P = B.A_ + w;
                    V.x = P, B.setLight(-((B.m_ + B.A_) / 183 + Q));
                  }
                }
              }), z.on(cc.Node.EventType.TOUCH_CANCEL, function (v) {
                z.active && (v.stopPropagation(), B.updateValue && B.updateValue(B.P_));
              }), z.on(cc.Node.EventType.TOUCH_END, function (v) {
                z.active && (v.stopPropagation(), B.updateValue && B.updateValue(B.P_));
              }), this.alwaysShow) {
                var L = this.P_ || 0;
                this.setDefaultFirstSliderNum(L);
              } else z.active = false;
              this.S_ = true;
            }
          },
          'setLight': function (B, x) {
            undefined === x && (x = false), B = Math.round(B);
            var C = this.P_;
            if (this.valueLabel ? this.P_ = this.valueLabel.string = this.numbers[B] : this.P_ = this.numbers[B], x || C == this.P_ || this.M_(), B % 1 == 0) {
              var H = this.g_[B];
              if (H == this.B_) return;
              H.setLight(true), this.B_ && this.B_.setLight(false), this.B_ = H;
            } else this.B_ && (this.B_.setLight(false), this.B_ = null);
            this.saveValue && this.saveValue(this.P_);
          },
          'setDefaultFirstSliderNum': function (B) {
            var x = this.numbers.indexOf(B);
            -1 === x && (x = 0);
            var C = 183 * x,
              H = -this.m_ - C;
            this.content.x = H, this.setLight(x, true);
          },
          'setValue': function (B) {
            this.P_ = B;
          },
          'getValue': function () {
            return this.P_;
          },
          'updateSlider': function () {
            this.setDefaultFirstSliderNum(this.P_);
          },
          'testSetSliderNum': function () {
            {
              this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
            }
          },
          'M_': function () {}
        });
        O.default = y, j.exports = O.default, cc._RF.pop();
      }
    }, {}],
    'SettingSlider': [function (l, j, O) {
      'use strict';

      if (!cc._RF.push(j, "357638pYQ9Eibsf8KFNqaZK", "SettingSlider")) {
        O.__esModule = true, O.default = undefined;
        var y = cc.Class({
          'extends': cc.Component,
          'properties': {
            'settingSliderNum': cc.Prefab,
            'numInterval': 10,
            'maxUnit': 10,
            'minNum': 0,
            'content': cc.Node,
            'alwaysShow': false,
            'isPositive': false,
            'showValue': false
          },
          'setValueColor': function (B, x) {
            {
              this.C_ = B, this.y_ = x;
            }
          },
          'init': function () {
            {
              for (var B = this, x = this.g_ = [], C = this.numInterval, H = this.minNum, V = this.maxUnit, M = this.content, q = 0; q <= V; q++) {
                {
                  var m = cc.instantiate(this.settingSliderNum),
                    D = x[q] = m.getComponent("SettingSliderNum");
                  D.setColor(this.C_, this.y_), D.num = H + q * C, m.x = 621 + 210 * q, 0 == q ? D.isMin = true : D.setDisplayValue(this.showValue, D.num), m.parent = M;
                }
              }
              var W = -621 - 210 * V,
                k = this.node;
              if (k.on(cc.Node.EventType.TOUCH_START, function (L) {
                k.active && (L.stopPropagation(), B.w_ = L.getLocation().x, B.A_ = M.x);
              }), k.on(cc.Node.EventType.TOUCH_MOVE, function (L) {
                if (k.active) {
                  {
                    L.stopPropagation();
                    var v = L.getLocation().x - B.w_,
                      b = B.A_ + v;
                    if (b < W) M.x = W, B.setLight(V);else if (b > -621) M.x = -621, B.setLight(0);else {
                      {
                        var U = Math.round(v / 105),
                          Q = 105 * U,
                          w = B.A_ + Q;
                        M.x = w, B.setLight(-((621 + B.A_) / 105 + U) / 2);
                      }
                    }
                  }
                }
              }), k.on(cc.Node.EventType.TOUCH_CANCEL, function (L) {
                k.active && (L.stopPropagation(), B.saveValue && B.saveValue(B.P_));
              }), k.on(cc.Node.EventType.TOUCH_END, function (L) {
                k.active && (L.stopPropagation(), B.saveValue && B.saveValue(B.P_));
              }), this.alwaysShow) {
                {
                  var z = this.P_ || 0;
                  this.setDefaultFirstSliderNum(z);
                }
              } else k.active = false;
            }
          },
          'setLight': function (B, x) {
            if (undefined === x && (x = false), this.P_, !x && this.P_, B % 1 == 0) {
              var C = this.g_[B];
              if (C == this.B_) return void (this.saveValue && this.saveValue(this.P_));
              C.setLight(true), this.B_ && this.B_.setLight(false), this.B_ = C;
            } else this.B_ && (this.B_.setLight(false), this.B_ = null);
            this.saveValue && this.saveValue(this.P_);
          },
          'setDefaultFirstSliderNum': function (B) {
            var x = (B - this.minNum) / 5,
              C = -621 - 105 * x;
            this.content.x = C, this.setLight(x / 2, true);
          },
          'setValue': function (B) {
            this.P_ = B;
          },
          'getValue': function () {
            return this.P_;
          },
          'updateSlider': function () {
            this.setDefaultFirstSliderNum(this.P_);
          },
          'testSetSliderNum': function () {
            this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
          }
        });
        O.default = y, j.exports = O.default, cc._RF.pop();
      }
    }, {}],
    'SettingTurboSpinButton': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "eaed475bBBLf69c2AHexgPy", "SettingTurboSpinButton")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = O("GenericSettingButton"),
            H = O("UIAppearanceHelper"),
            V = O("Utils"),
            M = O("TurboButtonEffect"),
            q = cc._decorator,
            m = q.ccclass,
            D = q.property,
            W = function (z, L) {
              return Math.floor(Math.random() * (L - z + 1)) + z;
            },
            k = function (z) {
              function L() {
                var v = null !== z && z.apply(this, arguments) || this;
                return v.sprite = undefined, v.spriteEffect = undefined, v.titleLabel = undefined, v.turboSpinOn = undefined, v.turboSpinOff = undefined, v.turboSpinEffectOn = undefined, v.turboSpinEffectOff = undefined, v.turboSpinEffectAnim = undefined, v.lightingEffectAnim = undefined, v.spriteLightEffectNode = undefined, v.spriteLightShadowEffectNode = undefined, v.turboButtonEffect = undefined, v.O_ = true, v.I_ = undefined, v.G_ = undefined, v.N_ = [{
                  'animName': "turbo_lighting_style_1",
                  'positionOffsetXLeft': 0,
                  'positionOffsetXRight': W(1, 3),
                  'positionOffsetYLeft': W(0, 3),
                  'positionOffsetYRight': W(0, 6),
                  'scaleX': 2,
                  'scaleY': 2,
                  'rotation': 0
                }, {
                  'animName': "turbo_lighting_style_2",
                  'positionOffsetXLeft': W(0, 4),
                  'positionOffsetXRight': W(0, 10),
                  'positionOffsetYLeft': W(0, 22),
                  'positionOffsetYRight': W(0, 8),
                  'scaleX': 2.3,
                  'scaleY': 2,
                  'rotation': 0
                }, {
                  'animName': "turbo_lighting_style_3",
                  'positionOffsetXLeft': W(0, 11),
                  'positionOffsetXRight': W(0, 22),
                  'positionOffsetYLeft': W(0, 5),
                  'positionOffsetYRight': W(0, 20),
                  'scaleX': 2,
                  'scaleY': 2,
                  'rotation': W(-10, 10)
                }], v;
              }
              return __extends(L, z), L.prototype.onLoad = function () {
                z.prototype.onLoad.call(this), this.turboButtonEffect.getComponent(M.default).setUpdateTurboMiddleIconCallback(this.changeTurboSprite.bind(this)), this.spriteEffect.spriteFrame = this.turboSpinOff;
              }, L.prototype.setTurboSprites = function (v, b) {
                this.turboSpinOn = v, this.turboSpinOff = b;
              }, L.prototype.playTurboLighting = function () {
                this.spriteEffect.spriteFrame = undefined, this.turboSpinEffectAnim.once("finished", this.T_, this), this.O_ ? (this.turboSpinEffectAnim.play("turbo_icon_1st_up"), this.O_ = undefined) : this.turboSpinEffectAnim.play("turbo_icon_up");
              }, L.prototype.stopTurboLighting = function () {
                var v = this.I_;
                this.I_ = undefined, v && v();
                var b = this.G_;
                this.G_ = undefined, b && b(), this.turboSpinEffectAnim.stop(), this.lightingEffectAnim.stop(), this.spriteLightShadowEffectNode.opacity = 0, this.spriteLightEffectNode.getComponent(cc.Sprite).spriteFrame = undefined, this.spriteLightEffectNode.x = 0, this.spriteLightEffectNode.y = 0, this.spriteEffect.node.opacity = 255;
              }, L.prototype.changeTurboSprite = function () {
                var v = this.getTurboSpinCallback && this.getTurboSpinCallback();
                this.sprite.spriteFrame = v ? this.turboSpinOn : this.turboSpinOff;
              }, L.prototype.T_ = function () {
                this.H_(), this.R_();
              }, L.prototype.H_ = function () {
                {
                  var v = this;
                  this.G_ = V.delayCallback(1)(function () {
                    var b = v.N_[W(0, 2)],
                      U = W(0, 1),
                      Q = W(0, 1);
                    v.spriteLightEffectNode.x = U ? b.positionOffsetXRight : -b.positionOffsetXLeft, v.spriteLightEffectNode.y = Q ? b.positionOffsetYRight : -b.positionOffsetYLeft, v.spriteLightEffectNode.scaleX = b.scaleX, v.spriteLightEffectNode.scaleY = b.scaleY, v.spriteLightEffectNode.angle = -b.rotation, v.lightingEffectAnim.once("finished", v.H_, v), v.lightingEffectAnim.play(b.animName);
                  });
                }
              }, L.prototype.R_ = function () {
                var v = this;
                this.I_ = V.delayCallback(3)(function () {
                  {
                    v.turboSpinEffectAnim.once("finished", v.R_, v), v.turboSpinEffectAnim.play("turbo_icon_loop");
                  }
                });
              }, L.prototype.setSpriteScaleSize = function (v) {
                this.sprite.node.setScale(cc.v2(v, v));
              }, L.prototype.setTitle = function (v) {
                this.titleLabel.string = v;
              }, L.prototype.setButtonOnColor = function (v, b) {
                this.k_ = v, this.L_ = b;
              }, L.prototype.setButtonOffColor = function (v, b) {
                this.E_ = v, this.j_ = b;
              }, L.prototype.changeButtonColor = function (v) {
                this.buttonTheme.domainKey = v ? this.k_ : this.E_, this.buttonTheme.colorKey = v ? this.L_ : this.j_, z.prototype.changeButtonColor.call(this, false);
              }, L.prototype.changeButtonPressedColor = function (v) {
                var b = {};
                b.scale = 0.9;
                var U = {};
                U.scale = 1.1;
                var Q = {};
                Q.scale = 1.05;
                var w = {};
                w.scale = 1;
                v ? cc.tween(this.node).to(0.05, b).start() : cc.tween(this.node).to(0.05, U).to(0.05, Q).to(0.05, w).start();
              }, L.prototype.interactableButtonColor = function (v) {
                {
                  if (this.buttonTheme) {
                    var b = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                      U = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled"),
                      Q = v ? b : U;
                    this.turboSpinEffectAnim.node.opacity = Q.a, V.setNodeColorWithOpacity(this.iconSprite, Q), V.setNodeColorWithOpacity(this.spriteEffect.node, Q), V.setNodeColorWithOpacity(this.spriteLightEffectNode, Q), V.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, Q), V.setNodeColorWithOpacity(this.sprite.node, Q);
                  }
                }
              }, L.prototype.changeSpriteEffectColor = function () {
                {
                  if (this.buttonTheme) {
                    var v = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
                    V.setNodeColorWithOpacity(this.spriteEffect.node, v), V.setNodeColorWithOpacity(this.spriteLightEffectNode, v), V.setNodeColorWithOpacity(this.iconSprite, v), V.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, v);
                  }
                }
              }, L.prototype.destroy = function () {
                return this.stopTurboLighting(), z.prototype.destroy.call(this);
              }, __decorate([D(cc.Sprite)], L.prototype, "sprite", undefined), __decorate([D(cc.Sprite)], L.prototype, "spriteEffect", undefined), __decorate([D(cc.Label)], L.prototype, "titleLabel", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinOn", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinOff", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinEffectOn", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinEffectOff", undefined), __decorate([D(cc.Animation)], L.prototype, "turboSpinEffectAnim", undefined), __decorate([D(cc.Animation)], L.prototype, "lightingEffectAnim", undefined), __decorate([D(cc.Node)], L.prototype, "spriteLightEffectNode", undefined), __decorate([D(cc.Node)], L.prototype, "spriteLightShadowEffectNode", undefined), __decorate([D(M.default)], L.prototype, "turboButtonEffect", undefined), __decorate([m], L);
            }(C.default);
          B.default = k, cc._RF.pop();
        }
      }
    }, s9],
    'SimpleAnimationController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "39e88h8Nd5Cp6FXcpdProcy", "SimpleAnimationController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.animation = undefined, q.D_ = undefined, q;
            }
            return __extends(M, V), M.prototype.play = function (q, m) {
              this.node.active = true, this.D_ = m, this.animation.play(q);
            }, M.prototype.stop = function () {
              this.animation.stop(), this.D_ = undefined, this.node.active = false;
            }, M.prototype.U_ = function () {
              var q = this.D_;
              this.D_ = undefined, q && q();
            }, M.prototype.destroy = function () {
              return this.stop(), this.node.destroy(), V.prototype.destroy.call(this);
            }, __decorate([H(cc.Animation)], M.prototype, "animation", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'SimpleStartScroller': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "761fejcJ/9N9I5O3LKCHrhS", "SimpleStartScroller")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = {};
        C.scrollSpeed = 5040;
        C.accelerateDuration = 0.15;
        C.accelerateFactor = 1.68;
        C.accelerateDistance = 378;
        C.bounceDistance = 60;
        C.bounceDuration = 0.15;
        C.bounceFactor = 1.84;
        var H = O("AbstractScroller"),
          M = cc._decorator,
          q = M.ccclass,
          m = M.mixins,
          D = function (W) {
            function k(z, L) {
              this.delay = 0, this.rs = 0, this.as = 0, this.ps = 0, this.W_ = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
              var v = "object" == typeof L;
              for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
              return this.delay = 0, this.rs = 0, this.as = 0, this.ps = 0, this.W_ = 0, this.ns = false, this;
            }
            return __extends(k, W), k.prototype.onPlay = function () {
              {
                this.emit("play", this), this.rs = 0, this.as = this.target.y, this.ps = this.as + this.bounceDistance, this.W_ = this.ps - this.accelerateDistance, this.ns = false;
              }
            }, k.prototype.update = function (z) {
              if (!((z = this.rs += z) <= this.delay)) {
                z -= this.delay;
                var L = this.bounceDuration;
                if (z <= L) {
                  var v = 1 - Math.pow(1 - z / L, this.bounceFactor);
                  this.target.y = this.as + this.bounceDistance * v;
                } else {
                  z -= L;
                  var b = this.accelerateDuration;
                  if (z < b) return v = Math.pow(z / b, this.accelerateFactor), this.target.y = this.ps - this.accelerateDistance * v, void this.emit("accelerate", v, this);
                  this.ns || (this.ns = true, this.emit("accelerate", 1, this)), z -= b, this.target.y = this.W_ - z * this.scrollSpeed;
                }
              }
            }, __decorate([q, m(cc.EventTarget)], k);
          }(H.default);
        B.default = D, cc._RF.pop();
      }
    }, sl],
    'SimpleStopScroller': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "b767cqex8hPhYPEWfkCcZ04", "SimpleStopScroller")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = {};
        C.scrollSpeed = 5040;
        C.decelerateSpeed = 4680;
        C.targetYFunc = undefined;
        C.bounceDistance = 60;
        C.bounceDuration = 0.15;
        C.bounceFactor = 1.84;
        var H = O("AbstractScroller"),
          M = cc._decorator,
          q = M.ccclass,
          m = M.mixins,
          D = function (W) {
            {
              function k(z, L) {
                this.delay = 0, this.rs = 0, this.as = 0, this.os = 0, this.hc = 0, this.ps = 0, this.cf = 0, this.ds = 0, this._s = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
                var v = "object" == typeof L;
                for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
                return this.delay = 0, this.rs = 0, this.as = 0, this.os = 0, this.hc = 0, this.ps = 0, this.cf = 0, this.ds = 0, this._s = 0, this.ns = false, this;
              }
              return __extends(k, W), k.prototype.onPlay = function () {
                {
                  this.emit("play", this), this.rs = 0, this.as = this.target.y, this.hc = this.as - this.scrollSpeed * this.delay, this.os = this.targetYFunc(this, this.hc), this.ps = this.os - this.bounceDistance, this.cf = this.hc - this.ps, this.ds = 2 * this.cf / (this.scrollSpeed + this.decelerateSpeed), this._s = (this.decelerateSpeed - this.scrollSpeed) / this.ds / 2, this.ns = false;
                }
              }, k.prototype.onStop = function () {
                this.emit("stop", this);
              }, k.prototype.update = function (z) {
                if ((z = this.rs += z) <= this.delay) return this.target.y = this.as - this.scrollSpeed * z, true;
                z -= this.delay;
                var L = this.ds;
                if (z < L) return this.target.y = this.hc - this.scrollSpeed * z - this._s * z * z, void this.emit("decelerate", 1 - z / L, this);
                this.ns || (this.ns = true, this.emit("decelerate", 0, this)), z -= L;
                var v = this.bounceDuration;
                if (z < v) {
                  var b = 1 - Math.pow(1 - z / v, this.bounceFactor);
                  this.target.y = this.ps + this.bounceDistance * b;
                } else this.target.y = this.os, this.stop();
              }, __decorate([q, m(cc.EventTarget)], k);
            }
          }(H.default);
        B.default = D, cc._RF.pop();
      }
    }, sj],
    'SliderEx': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "dbb33H+Xs1Dw7xtUJLC1l6D", "SliderEx")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.content = undefined, q.contentHeight = 0, q;
              }
              return __extends(M, V), M.prototype.onEnable = function () {
                {
                  this.node.on(cc.Node.EventType.TOUCH_START, this.Ii, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.on(cc.Node.EventType.TOUCH_END, this.Ti, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ki, this), this.handle && this.handle.isValid && (this.handle.node.on(cc.Node.EventType.TOUCH_START, this.F_, this), this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.handle.node.on(cc.Node.EventType.TOUCH_END, this.Ti, this)), this.x_();
                }
              }, M.prototype.onDisable = function () {
                {
                  this.node.off(cc.Node.EventType.TOUCH_START, this.Ii, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.off(cc.Node.EventType.TOUCH_END, this.Ti, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.ki, this), this.handle && this.handle.isValid && (this.handle.node.off(cc.Node.EventType.TOUCH_START, this.F_, this), this.handle.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.handle.node.off(cc.Node.EventType.TOUCH_END, this.Ti, this)), this.V_();
                }
              }, M.prototype.z_ = function (q) {
                this.K_(q), this.xn(), this.q_();
              }, M.prototype.qi = function (q) {
                var m = -cc.view._scaleY,
                  D = cc.v2(0, q.getScrollY() * m),
                  W = this.node.convertToWorldSpace(this.handle.node.position).x,
                  k = W + D.y / 10;
                this.progress = cc.misc.clamp01(this.progress + (k - W) / this.node.width), this.J_(), this.xn(), this.q_();
              }, M.prototype.x_ = function () {
                this.content && this.content.parent.on(cc.Node.EventType.MOUSE_WHEEL, this.qi, this, true);
              }, M.prototype.V_ = function () {
                {
                  this.content && this.content.parent.off(cc.Node.EventType.MOUSE_WHEEL, this.qi, this, true);
                }
              }, M.prototype.xn = function () {
                this.content && (this.content.y = this.progress * (this.content.height - cc.view.getVisibleSize().height));
              }, __decorate([H(cc.Node)], M.prototype, "content", undefined), __decorate([C], M);
            }
          }(cc.Slider);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'SlotAnalyticsEnum': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "c270fgpIPxIwJGIYJlAbqmn", "SlotAnalyticsEnum") || (Object.defineProperty(y, "__esModule", B), y.SpinStateProcess = y.SpinCredits = y.SpinTrigger = undefined, function (x) {
        {
          x[x.CLICK = 0] = "CLICK", x[x.SPACEBAR = 1] = "SPACEBAR", x[x.AUTOSPIN = 2] = "AUTOSPIN", x[x.FEATURE_BUY = 3] = "FEATURE_BUY";
        }
      }(y.SpinTrigger || (y.SpinTrigger = {})), function (x) {
        {
          x[x.CASH = 1] = "CASH", x[x.INSUFFICIENT = 3] = "INSUFFICIENT", x[x.BET_INVALID = 4] = "BET_INVALID";
        }
      }(y.SpinCredits || (y.SpinCredits = {})), function (x) {
        {
          x[x.REEL_SPINNING = 0] = "REEL_SPINNING", x[x.REEL_STOPPING = 1] = "REEL_STOPPING", x[x.REEL_STOPPED = 2] = "REEL_STOPPED";
        }
      }(y.SpinStateProcess || (y.SpinStateProcess = {})), cc._RF.pop());
    }, {}],
    'SlotAnalyticsHelper': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4d769Qc8epMlozoEYpeBTit", "SlotAnalyticsHelper")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.sendFastStopGA = undefined;
        var x = j("AnalyticsHelper");
        y.sendFastStopGA = function (C, H) {
          {
            var r = {};
            r.type = C;
            r.is_auto = H;
            x.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_STOP_SPIN, r);
          }
        }, cc._RF.pop();
      }
    }, sI],
    'SlotController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "b28d8bhcJFHQLAbJdbBzCKn", "SlotController")) {
        {
          B.__esModule = true, B.default = undefined;
          var x = {};
          x.STOPPED = 0;
          x.SPINNING = 1;
          x.STOPPING = 2;
          var C = O("SlotProperties"),
            H = T(O("SlotView")),
            V = T(O("SlotItemController")),
            M = T(O("SimpleStartScroller")),
            q = T(O("InterruptableScroller")),
            D = T(O("PossibleWinScroller")),
            W = T(O("BounceScatterStopScroller")),
            k = O("AudioManager"),
            z = function (Y) {
              if (Y && Y.__esModule) return Y;
              if (null === Y || "object" != typeof Y && "function" != typeof Y) return {
                'default': Y
              };
              var X = R(undefined);
              if (X && X.has(Y)) return X.get(Y);
              var E = {},
                F = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var N in Y) if ("default" !== N && Object.prototype.hasOwnProperty.call(Y, N)) {
                var Z = F ? Object.getOwnPropertyDescriptor(Y, N) : null;
                Z && (Z.get || Z.set) ? Object.defineProperty(E, N, Z) : E[N] = Y[N];
              }
              return E.default = Y, X && X.set(Y, E), E;
            }(O("SlotStateMachine")),
            L = O("SettingMenuHelper"),
            U = O("PGGDataSource"),
            Q = O("Utils"),
            w = cc.Enum(x),
            P = cc.Class({
              'extends': cc.Component,
              'properties': {
                'slotItem': cc.Prefab,
                'Y_': [],
                'slotViewNodes': [cc.Node],
                'Q_': 0,
                'nu': undefined,
                'eu': undefined,
                'symbolImages': [cc.SpriteFrame],
                'blurredSymbolImages': [cc.SpriteFrame],
                'symbolShadowImages': [cc.SpriteFrame],
                'multiplySymbol': [cc.SpriteFrame],
                'multiplyBlurSymbol': [cc.SpriteFrame],
                'paySelectHolder': cc.Node,
                'fastSpinHolder': cc.Node,
                'scrollerSpineHolder': cc.Node,
                'X_': undefined,
                'Z_': [],
                'tp': [],
                'ip': [],
                'sp': undefined,
                'ep': undefined,
                'np': undefined,
                'op': undefined,
                'cp': undefined,
                'hp': undefined,
                'rp': undefined,
                'ap': undefined
              },
              'init': function (Y, X, E, F) {
                var N = this;
                Y = Y.length > 0 ? Y : [], this.up = Y, this.lp = X, this.fp = this.dp(Y), this.nu = E, this.op = new z.default(), this.vp = F;
                var Z = this._p = this.getComponent("SlotScroller");
                Z.delegate = this, Z.setScrollState(w.STOPPED), C.slotProperties.setSlotController(this), C.slotProperties.registerReusePrefab("slotItem", this.slotItem, V.default, 25);
                var g = this.pp.bind(this);
                this.slotViewNodes.forEach(function (A, G) {
                  var J = A.getComponent("SlotView");
                  J && (J.Xa = G, J.dataSource = N, N.bp(J, G, g), J.scrollToRowAtIndex(1, H.default.RowPositionBottom, false), N.Y_.push(J));
                });
              },
              'setReelData': function (Y, X, E, F) {
                this.fp = this.dp(Y), this.up = Y, this.nu = E, this.lp = X, this.eu = F;
              },
              'setSpinTiming': function (Y, X) {
                {
                  this.ep = Y, this.np = X;
                }
              },
              'setOnClickCallback': function (Y) {
                this.hp = Y;
              },
              'setStopCompletedCallback': function (Y) {
                this.rp = Y;
              },
              'setOnEachStopColumnCallback': function (Y) {
                this.ap = Y;
              },
              'setFastSpinEndCallback': function (Y) {
                {
                  this.mp = Y;
                }
              },
              'setClickEffectController': function (Y) {
                {
                  this.X_ = Y;
                }
              },
              'setPaySelectController': function (Y) {
                Y && this.paySelectHolder.addChild(Y);
              },
              'getStopStyle': function () {
                return this.op.getStopStyle();
              },
              'getFastSpinAnimationController': function () {
                return this.fastSpinHolder.getComponent("FastSpinAnimationController");
              },
              'getScrollerManagerController': function () {
                {
                  return this.scrollerSpineHolder.getComponent("ScrollerManagerController");
                }
              },
              'spin': function (Y) {
                if (undefined === Y && (Y = false), !isNaN(this.ep) && !isNaN(this.np)) {
                  {
                    var X = this._p;
                    X.getScrollState() === w.STOPPED && (X.setScrollState(w.SPINNING), this.Sp(), this.gp(Y), this.op.spin(this.ep, this.np), Y && this.markFastStop(), this.scheduleOnce(this.Cp.bind(this), 0.3));
                  }
                }
              },
              'stopSpin': function () {
                if (this._p.getScrollState() === w.SPINNING) {
                  var Y = U.pgDataSource.transactionModel.piggyFeature;
                  Y && L.settingMenuHelper.turboSpinOn ? this.featureFastStop() : Y ? this.featureStopSpin() : this.op.stop(this.yp.bind(this));
                }
              },
              'fastStop': function () {
                {
                  if (this._p.getScrollState() !== w.STOPPED) {
                    {
                      var Y = U.pgDataSource.transactionModel.piggyFeature;
                      Y && L.settingMenuHelper.turboSpinOn ? this.featureFastStop() : Y ? (this.unmarkFastStop(), this.featureStopSpin()) : this.op.fastStop(this.Mp.bind(this));
                    }
                  }
                }
              },
              'markFastStop': function () {
                this._p.getScrollState() === w.SPINNING && this.op.markFastStop();
              },
              'unmarkFastStop': function () {
                this.op.unmarkFastStop();
              },
              'featureStopSpin': function () {
                this._p.getScrollState() === w.SPINNING && this.op.stop(this.Ap.bind(this));
              },
              'featureFastStop': function () {
                this._p.getScrollState() !== w.STOPPED && this.op.fastStop(this.Pp.bind(this));
              },
              'resetSlot': function (Y, X, E, F) {
                {
                  var N = this;
                  this.setReelData(Y, X, E, F);
                  var Z = this.getSlotItemWithIndex(C.slotProperties.getAllSlotIndexes()),
                    g = this.Y_,
                    A = [900, 600, 300];
                  Z.forEach(function (G, J) {
                    G.active = true;
                    var S = Math.floor(J / C.NumberOfRow),
                      K = G.getComponent("SlotItemController");
                    if (G.y = A[J % C.NumberOfRow], K.clear(), E && Y[J] === C.SlotIndexes.WILD && 4 === J) {
                      var l0 = E[4];
                      N.Bp(g[S], G, l0);
                    } else N.Op(g[S], G, Y[J]);
                    G.y -= N.Ip(X[S]);
                  });
                }
              },
              'dimSlotItemByColumn': function (Y) {
                this.getSlotItemWithIndex(Y).forEach(function (X, E) {
                  {
                    var F = Math.floor(E / C.NumberOfRow) / 20,
                      N = X.getComponent("SlotItemController");
                    (0, Q.delayCallback)(F)(N.blacken.bind(N));
                  }
                });
              },
              'getSlotItemWithIndex': function (Y) {
                var X = this;
                if (this._p.getScrollState() === w.STOPPED) {
                  {
                    var E = [];
                    return Y.forEach(function (F) {
                      if (Number.isInteger(F) && F < C.NumberOfColumn * C.NumberOfRow) {
                        var N = Math.floor(F / C.NumberOfRow),
                          Z = C.NumberOfRow - 1 - F % C.NumberOfRow,
                          g = X.Y_[N].visibleItems()[Z];
                        E.push(g);
                      }
                    }), E;
                  }
                }
              },
              'getSlotViewWithIndex': function (Y) {
                if (this._p.getScrollState() === w.STOPPED && Number.isInteger(Y) && Y < C.NumberOfColumn * C.NumberOfRow) {
                  var X = Math.floor(Y / C.NumberOfRow);
                  return this.Y_[X];
                }
              },
              'didReloadData': function (Y) {
                C.slotProperties.init(Y);
                var X = Y.Xa,
                  E = this.lp,
                  F = this.Ip(E[X]);
                if ((0, Q.delayCallback)(0)(function () {
                  Y.node.children.forEach(function (Z) {
                    Z.y -= F;
                  });
                }), this.Q_++, this.Q_ === this.Y_.length - 1) {
                  {
                    var N = this.vp;
                    this.vp = undefined, N && N(), this.Q_ = 0;
                  }
                }
              },
              'getCount': function () {
                {
                  return 20000;
                }
              },
              'getItem': function (Y, X) {
                var E;
                if (this._p.getScrollState() === w.STOPPING) {
                  var F = Y.Gp;
                  X >= F && (X -= F);
                }
                X < 4 && (E = this.fp[Y.Xa][X]), undefined === E && (E = X % 2 == 0 && Math.random() < 0.3 ? C.SlotIndexes.WILD : this.Np());
                var N = C.slotProperties.dequeueReusableItem("slotItem");
                if (1 === Y.Xa && E === C.SlotIndexes.WILD) {
                  var Z = (this.nu ? this.nu : {})[C.NumberOfRow * Y.Xa + (C.NumberOfRow - X)];
                  Z || (Z = this.Tp()), this.Bp(Y, N, Z);
                } else this.Op(Y, N, E);
                return N;
              },
              'releaseItem': function (Y, X, E) {
                C.slotProperties.enqueueReusableItem(E);
              },
              'getSymbolSpriteFrames': function (Y) {
                var E = this.symbolImages,
                  F = this.symbolShadowImages;
                var N = {};
                N.blurred = this.blurredSymbolImages[X];
                N.normal = E[X];
                N.shadow = F[X];
                return N;
              },
              'getWildSymbolSpriteFrames': function (Y) {
                var X = this.multiplySymbol,
                  E = this.multiplyBlurSymbol;
                switch (Y) {
                  case C.WildSlotIndexes.ONE:
                    var F = {};
                    F.blurred = E[0];
                    F.normal = X[0];
                    return F;
                  case C.WildSlotIndexes.TWO:
                    var N = {};
                    N.blurred = E[1];
                    N.normal = X[1];
                    return N;
                  case C.WildSlotIndexes.FIVE:
                    var Z = {};
                    Z.blurred = E[2];
                    Z.normal = X[2];
                    return Z;
                  case C.WildSlotIndexes.TEN:
                    var g = {};
                    g.blurred = E[3];
                    g.normal = X[3];
                    return g;
                  default:
                    var A = {};
                    A.blurred = E[0];
                    A.normal = X[0];
                    return A;
                }
              },
              'willChangeScrollState': function (Y, X, E) {
                X === w.STOPPED && E === w.STOPPING && this.tp.forEach(function (F) {
                  F.resetInterrupt();
                });
              },
              'getScroller': function (Y, X, E, F) {
                var N = this.eu;
                return F === w.SPINNING ? this.Z_[X] : F === w.STOPPING && 1 === X && N ? this.sp : F === w.STOPPING ? this.tp[X] : undefined;
              },
              'releaseScroller': function () {},
              'didChangeScrollState': function () {},
              'didStopScrolling': function () {
                var Y = this.op;
                Y.getStopStyle() === z.StopStyle.FAST && (k.GeneralAudioPool.spin_reel.isPlaying() && k.GeneralAudioPool.spin_reel.stop(), k.GeneralAudioPool.spin_reel_quickstop.play()), this.ap = undefined, this._p.setScrollState(w.STOPPED), Y.stopped(), this.hp = undefined, this.Hp();
                var X = this.rp;
                this.rp = undefined, X && X();
              },
              'Rp': function (Y, X) {
                {
                  var F = X.target.getComponent("SlotView");
                  if (E > 0.98 && !F.kp) {
                    F.kp = true;
                    for (var N = F.visibleItems(), Z = 0, g = N.length; Z < g; Z++) N[Z].getComponent("SlotItemController").setBlurred(true);
                  }
                }
              },
              'pp': function (Y, X) {
                var E = this._p.indexOfScroller(Y),
                  F = this.lp,
                  N = this.Y_[E],
                  Z = N.indexAtPoint(-(X - N.node.parent.height)) + 2;
                return N.Gp = Z - 1, -N.pointForIndex(Z) - this.Ip(F[E]);
              },
              'Lp': function (Y, X) {
                var F = X.target.getComponent("SlotView"),
                  N = this.op;
                if (E < 0.1 && this.mp && X === this.sp) {
                  {
                    var Z = this.mp;
                    this.mp = undefined, Z && Z();
                  }
                }
                if (E < 0.27 && 1 === F.Xa && k.GeneralAudioPool.spin_reel.isPlaying() && (k.GeneralAudioPool.spin_reel.stop(), N.getStopStyle() !== z.StopStyle.FAST && k.GeneralAudioPool.spin_reel_stop.play()), E < 0.27 && F.kp || X === this.sp && F.kp) {
                  F.kp = false;
                  for (var g = F.visibleItems(), A = 0, G = g.length; A < G; A++) g[A].getComponent("SlotItemController").setBlurred(false);
                }
              },
              'Ep': function (Y) {
                var X = Y.target.getComponent("SlotView");
                X.scrollToRowAtIndexSync(1, H.default.RowPositionBottom, true), this.op.getStopStyle, z.StopStyle.FAST, this.ap && this.ap(X);
              },
              'yp': function () {
                for (var Y = this._p, X = 0; X < C.NumberOfColumn; X++) {
                  var E = this.tp[X] = this.ip[X];
                  switch (X) {
                    case 0:
                      E.delay = 0;
                      break;
                    case 1:
                      E.delay = 0.2;
                      break;
                    case 2:
                      E.delay = 0;
                  }
                }
                Y.setScrollState(w.STOPPING);
              },
              'Mp': function () {
                var Y = this._p;
                this.Hp();
                for (var X = 0; X < C.NumberOfColumn; X++) {
                  var E = this.tp[X] = this.ip[X];
                  E.delay = 0.2, E.interrupt();
                }
                Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
              },
              'Ap': function () {
                var Y = this._p;
                this.Hp();
                for (var X = 0; X < C.NumberOfColumn; X++) {
                  var E = this.tp[X] = this.ip[X];
                  this.eu && 1 === X ? this.sp.delay = 0.8 : (E.delay = 0.2, E.interrupt());
                }
                Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
              },
              'Pp': function () {
                {
                  var Y = this._p;
                  this.Hp();
                  for (var X = 0; X < C.NumberOfColumn; X++) {
                    var E = this.tp[X] = this.ip[X];
                    1 === X ? this.sp.delay = 0.2 : (E.delay = 0.2, E.interrupt());
                  }
                  Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
                }
              },
              'gp': function () {
                for (var Y = this.Z_, X = 0; X < Y.length; X++) Y[X].delay = 1 === X ? 0.3 : 0;
              },
              'Cp': function () {
                {
                  k.GeneralAudioPool.spin_reel.play();
                }
              },
              'Ip': function (Y) {
                return this.cp || (this.cp = C.slotProperties.getSlotItemSize().y / 2), Y === C.SlotIndexes.BLANK ? this.cp : 0;
              },
              'Np': function () {
                var Y = this.symbolImages.length - 2;
                return Math.floor((Y - 1) * Math.random()) + 1;
              },
              'Tp': function () {
                {
                  var Y = this.multiplySymbol.length - 1;
                  return [C.WildSlotIndexes.ONE, C.WildSlotIndexes.TWO, C.WildSlotIndexes.FIVE, C.WildSlotIndexes.TEN][Math.floor(Y * Math.random())];
                }
              },
              'dp': function (Y) {
                for (var X = [], E = 0; E < C.NumberOfColumn; E++) X.push([]);
                if (!Y) return X;
                for (var F = 0; F < C.NumberOfColumn; F++) {
                  var N = X[F],
                    Z = this.Np(),
                    g = this.Np();
                  N[0] = Z, N[3] = g;
                  for (var A = 0; A < C.NumberOfRow; A++) N[A + 1] = Y[F * C.NumberOfRow + C.NumberOfRow - 1 - A];
                }
                return X;
              },
              'bp': function (Y, X, E) {
                var F = {};
                F.scrollSpeed = 4000;
                F.accelerateDuration = 0.2;
                F.accelerateFactor = 1.75;
                F.accelerateDistance = 600;
                F.bounceDistance = 50;
                F.bounceDuration = 0.2;
                F.bounceFactor = 1.84;
                var N,
                  Z = this.Z_[X] = new M.default(Y.node, F);
                if (Z.delay = 0, Z.on("accelerate", this.Rp, this, false), 1 === X) {
                  var g = {};
                  g.scrollSpeed = 6000;
                  g.scatterScrollSpeed = 1600;
                  g.targetYFunc = E;
                  g.decelerateSpeed = 0;
                  g.bounceDistance = 50;
                  g.bounceDuration = 0.3;
                  g.bounceFactor = 1;
                  var A = this.sp = new W.default(Y.node, g);
                  var G = {};
                  G.scrollSpeed = 4000;
                  G.decelerateSpeed = 4000;
                  G.targetYFunc = E;
                  G.bounceDistance = 80;
                  G.bounceDuration = 0.3;
                  G.bounceFactor = 1;
                  A.on("stop", this.Ep, this, false), A.on("decelerate", this.Lp, this, false), (N = this.ip[X] = this.tp[X] = new D.default(Y.node, G)).on("stop", this.Ep, this, false), N.on("decelerate", this.Lp, this, false);
                } else (N = this.ip[X] = this.tp[X] = new q.default(Y.node, {
                  'scrollSpeed': 4000,
                  'decelerateSpeed': 4000,
                  'targetYFunc': E,
                  'bounceDistance': 80,
                  'bounceDuration': 0.3,
                  'bounceFactor': 1
                })).on("stop", this.Ep, this, false), N.on("decelerate", this.Lp, this, false);
              },
              'Op': function (Y, X, E) {
                var F = X.getComponent("SlotItemController"),
                  N = this.getSymbolSpriteFrames(E),
                  Z = N.blurred,
                  g = N.normal,
                  A = N.shadow;
                F.setSymbol(g, Z, A), F.setBlurred(Y.kp);
              },
              'Bp': function (Y, X, E) {
                var F = X.getComponent("SlotItemController"),
                  N = this.getWildSymbolSpriteFrames(E),
                  Z = N.blurred,
                  g = N.normal;
                F.setSymbol(g, Z), F.setBlurred(Y.kp);
              },
              'Sp': function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onSlotRegionClicked, this);
              },
              'Hp': function () {
                {
                  this.node.off(cc.Node.EventType.TOUCH_START, this.onSlotRegionClicked, this);
                }
              },
              'onSlotRegionClicked': function (Y) {
                if (this.hp) {
                  {
                    this.Hp(), Y && (this.X_.showClickEffect(Y.getLocation()), this.X_.showFlash());
                    var X = this.hp;
                    this.hp = undefined, X && X();
                  }
                }
              }
            });
          B.default = P, y.exports = B.default, cc._RF.pop();
        }
      }
      function R(Y) {
        {
          if ("function" != typeof WeakMap) return null;
          var X = new WeakMap(),
            E = new WeakMap();
          return (R = function (F) {
            return F ? E : X;
          })(Y);
        }
      }
      function T(Y) {
        {
          return Y && Y.__esModule ? Y : {
            'default': Y
          };
        }
      }
    }, ss],
    'SlotGameConstants': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "d7af7yj0OxMqZa0P2+9ESqP", "SlotGameConstants") || (Object.defineProperty(y, "__esModule", B), y.DEFAULT_AUTO_SPIN_DELAY_TIME = y.SPIN_BUTTON_TRIGGER_KEY = y.TOTAL_WIN_DISMISS_TIME = y.BIG_WIN_DISMISS_TIME = undefined, y.BIG_WIN_DISMISS_TIME = 6, y.TOTAL_WIN_DISMISS_TIME = 6, y.SPIN_BUTTON_TRIGGER_KEY = cc.macro.KEY.space, y.DEFAULT_AUTO_SPIN_DELAY_TIME = 0.3, cc._RF.pop());
    }, {}],
    'SlotItemController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f8c175XHa1NwpzbTBevI1+l", "SlotItemController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.foreground = undefined, q.content = undefined, q.foregroundSprite = undefined, q.contentSprite = undefined, q.shadowSprite = undefined, q;
            }
            return __extends(M, V), M.prototype.setSymbol = function (q, m, D) {
              {
                this.foregroundSprite.spriteFrame = m, this.contentSprite.spriteFrame = q, this.shadowSprite.spriteFrame = D;
              }
            }, M.prototype.setBlurred = function (q) {
              this.foreground.active = q, this.content.active = !q;
            }, M.prototype.clear = function () {
              var q = this.foreground;
              q.active = false, q.scale = 3;
              var m = this.content;
              m.stopAllActions(), m.active = true, m.scale = 1.5, m.opacity = 255, this.node.zIndex = 0, this.foregroundSprite.spriteFrame = undefined, this.contentSprite.spriteFrame = undefined, this.shadowSprite.spriteFrame = undefined;
            }, M.prototype.unuse = function () {
              this.clear();
            }, M.prototype.reuse = function () {
              this.node.active = true;
            }, M.prototype.jp = function () {}, __decorate([H(cc.Node)], M.prototype, "foreground", undefined), __decorate([H(cc.Node)], M.prototype, "content", undefined), __decorate([H(cc.Sprite)], M.prototype, "foregroundSprite", undefined), __decorate([H(cc.Sprite)], M.prototype, "contentSprite", undefined), __decorate([H(cc.Sprite)], M.prototype, "shadowSprite", undefined), __decorate([C], M);
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'SlotProperties': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "9ee5d2dkm1POa5gUOJWrwrS", "SlotProperties")) {
        B.__esModule = true, B.slotProperties = B.WildSlotIndexes = B.SlotIndexes = B.NumberOfRow = B.NumberOfColumn = undefined;
        var x = {};
        x.WILD = 0;
        x.GOLD_PIG = 1;
        x.INGOT = 2;
        x.JADE = 3;
        x.BAR_3 = 4;
        x.BAR_2 = 5;
        x.BAR_1 = 6;
        x.BLANK = 7;
        var C,
          H = (C = O("CanvasResizeBroadcaster")) && C.__esModule ? C : {
            'default': C
          },
          r = cc.Enum(x);
        B.SlotIndexes = r;
        var V = {};
        V.ONE = 1;
        V.TWO = 2;
        V.FIVE = 5;
        V.TEN = 10;
        var M = cc.Enum(V);
        B.WildSlotIndexes = M, B.NumberOfColumn = 3, B.NumberOfRow = 3;
        var q = new (cc.Class({
          'name': "SlotProperties",
          'extends': cc.Object,
          'ctor': function () {
            {
              this.slotItemCoordinates = [], this.slotItemWorldCoordinates = [], this.dirtyCoordinatesFlag = [];
              for (var m = 0; m < 3; m++) this.slotItemCoordinates.push([]), this.slotItemWorldCoordinates.push([]), this.dirtyCoordinatesFlag.push([]);
              this.Dp = undefined, this._i = {}, this.Up = {}, this.Wp = {}, this.Fp = H.default.subscribe(this.xp.bind(this));
            }
          },
          'setSlotController': function (m) {
            this.Dp = m;
          },
          'init': function (m) {
            var D = m.Xa,
              W = this.slotItemCoordinates,
              k = this.slotItemWorldCoordinates,
              z = this.dirtyCoordinatesFlag;
            if (3 !== W[D].length) {
              var L = m.visibleItems().slice();
              if (L.length > 3) for (var v = L.length - 3, b = 0; b < v; b++) L.pop();
              W[D] = [], k[D] = [], z[D] = [];
              var U = this.Dp.node;
              if (L.reverse(), L.forEach(function (P) {
                var R = P.x,
                  T = P.y,
                  Y = m.node.convertToWorldSpaceAR(cc.v2(R, T)),
                  X = U.convertToNodeSpaceAR(cc.v2(Y.x, Y.y));
                W[D].push(X), k[D].push(Y), z[D].push(false);
              }), !this.slotItemSize) {
                {
                  var Q = m.node.width,
                    w = m.rowHeight;
                  this.slotItemSize = cc.v2(Q, w);
                }
              }
            }
          },
          'getSlotWorldPositionFromIndex': function (m) {
            var D,
              W = this.slotItemCoordinates,
              k = Math.floor(m / 3),
              z = m % 3;
            if (Number.isInteger(m) && m >= 0 && m < 9) return this.dirtyCoordinatesFlag[k][z] ? (D = this.slotItemWorldCoordinates[k][z] = this.Dp.node.convertToWorldSpaceAR(W[k][z]), this.dirtyCoordinatesFlag[k][z] = false) : D = this.slotItemWorldCoordinates[k][z], new cc.Vec2(D.x, D.y);
          },
          'getReelIdFromIndex': function (m) {
            if (Number.isInteger(m) && m < 9) return Math.floor(m / 3);
          },
          'getSlotItemSize': function () {
            {
              return this.slotItemSize;
            }
          },
          'getSlotItemScale': function () {
            return this.slotItemScale;
          },
          'getSlotIndexesExcept': function (m) {
            for (var D = [], W = 0; W < 9; W++) -1 === m.indexOf(W) && D.push(W);
            return D;
          },
          'getAllSlotIndexes': function () {
            {
              for (var m = [], D = 0; D < 9; D++) m.push(D);
              return m;
            }
          },
          'registerReusePrefab': function (m, D, W, k) {
            if (undefined === k && (k = 0), !m || !D) throw Error("incorrect parameter");
            var z = this.Up,
              L = this._i;
            if (!z[m] && !L[m]) {
              {
                z[m] = D, L[m] = W ? new cc.NodePool(W) : new cc.NodePool(), this.Wp[m] = k;
                for (var v = 0; v < k; v++) {
                  var b = cc.instantiate(D);
                  b.reuseIdentifier = m, this.enqueueReusableItem(b);
                }
              }
            }
          },
          'dequeueReusableItem': function (m) {
            var D = this._i[m];
            if (D.size() > 0) return D.get();
            var W = this.Up[m],
              k = cc.instantiate(W);
            return k.reuseIdentifier = m, k;
          },
          'enqueueReusableItem': function (m) {
            var D = this._i[m.reuseIdentifier];
            D.size() < 10 ? D.put(m) : m.destroy();
          },
          'xp': function () {
            this.dirtyCoordinatesFlag.forEach(function (m) {
              {
                m.forEach(function (D, W) {
                  {
                    m[W] = true;
                  }
                });
              }
            });
          }
        }))();
        B.slotProperties = q, cc._RF.pop();
      }
    }, sO],
    'SlotScrollerController.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "c26a6RzZj1KjaK/sUDaiLHB", "SlotScrollerController.spec") || (Object.defineProperty(y, "__esModule", B), y.onStateChange = undefined, y.onStateChange = function (x) {
        {
          var C = System.get("automation") && System.get("automation").GameData;
          x > 0 && C && C.emit("ScrollEvent", 1 === x ? "start" : "stop");
        }
      }, cc._RF.pop());
    }, {}],
    'SlotScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f4834Nvw9tAprbYN6xgZslW", "SlotScroller")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("AutomationDecorator"),
          C = j("SlotScrollerController.spec"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.views = [], W.delegate = undefined, W.Vp = undefined, W.zp = undefined, W.Kp = [], W.qp = [], W;
            }
            return __extends(D, m), D.prototype.scrollerAtIndex = function (W) {
              return this.Kp[W];
            }, D.prototype.indexOfScroller = function (W) {
              return this.Kp.indexOf(W);
            }, D.prototype.getScrollState = function () {
              {
                return this.Vp;
              }
            }, D.prototype.setScrollState = function (W) {
              if (this.enabledInHierarchy) {
                {
                  this.zp = undefined;
                  var k = this.Vp;
                  k !== W && this.Jp(W, k);
                }
              } else this.zp = W;
            }, D.prototype.Jp = function (W, k) {
              var z = this.views,
                L = this.Kp,
                v = this.qp,
                b = this.delegate;
              b.willChangeScrollState(this, W, k), v.length = 0;
              for (var U = 0, Q = z.length; U < Q; U++) {
                var w = L[U],
                  P = b.getScroller(this, U, z[U], W, k, w);
                L[U] = P, w && (w.stop(), b.releaseScroller(this, U, w)), P && v.push(P);
              }
              for (this.Vp = W, U = 0, Q = v.length; U < Q; U++) v[U].play();
              b.didChangeScrollState(this, W, k);
            }, D.prototype.onEnable = function () {
              if (undefined !== this.zp) {
                {
                  var W = this.zp;
                  this.zp = undefined;
                  var k = this.Vp;
                  k !== W && this.Jp(W, k);
                }
              }
            }, D.prototype.onDisable = function () {
              for (var W = this.qp, k = 0, z = W.length; k < z; k++) W[k].stop();
              W.length = 0;
            }, D.prototype.update = function (W) {
              var k = this.qp,
                z = k.length;
              if (z) {
                for (var L = 0; L < z; L++) {
                  var v = k[L];
                  v.isPlaying ? v.update(W) : (k.splice(L, 1), L--, z--);
                }
                z || this.delegate.didStopScrolling(this);
              }
            }, __decorate([M([cc.Node])], D.prototype, "views", undefined), __decorate([x.automationDec({
              'func': C.onStateChange
            })], D.prototype, "_onStateChange", null), __decorate([V], D);
          }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, sy],
    'SlotStateMachine': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f1d53JqS5hGVbtNCz0JAnwN", "SlotStateMachine")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.StopStyle = y.SlotStates = undefined;
          var x,
            C,
            H = j("Utils");
          (function (V) {
            V[V.SPINNING = 0] = "SPINNING", V[V.STOPPING = 1] = "STOPPING", V[V.STOPPED = 2] = "STOPPED";
          })(x = y.SlotStates || (y.SlotStates = {})), function (V) {
            V[V.NORMAL = 0] = "NORMAL", V[V.FAST = 1] = "FAST";
          }(C = y.StopStyle || (y.StopStyle = {}));
          var r = function () {
            function V() {
              this.I = x.STOPPED, this.Yp = C.NORMAL, this.Qp = false, this.Xp = false, this.Zp = undefined, this.$p = undefined;
            }
            return V.prototype.getState = function () {
              return this.I;
            }, V.prototype.getStopStyle = function () {
              {
                return this.Yp;
              }
            }, V.prototype.spin = function (M, q) {
              this.I === x.STOPPED && (this.I = x.SPINNING, H.delayCallback(M)(this.tb.bind(this)), this.Zp = H.delayCallback(q)(this.ib.bind(this)));
            }, V.prototype.markFastStop = function () {
              {
                this.I === x.SPINNING && (this.Yp = C.FAST);
              }
            }, V.prototype.unmarkFastStop = function () {
              this.Yp === C.FAST && this.I === x.SPINNING && (this.Yp = C.NORMAL);
            }, V.prototype.fastStop = function (M) {
              {
                this.I !== x.SPINNING && this.I !== x.STOPPING || (this.Yp = C.FAST, this.I = x.STOPPING, this.$p = M, this.Qp && this.Mp());
              }
            }, V.prototype.stop = function (M) {
              {
                if (this.I === x.SPINNING) {
                  if (this.Yp === C.FAST) return;
                  this.I = x.STOPPING, this.$p = M, this.Xp && this.Wt();
                }
              }
            }, V.prototype.stopped = function () {
              this.I = x.STOPPED, this.cc();
            }, V.prototype.tb = function () {
              this.Qp = true, this.I === x.STOPPING && this.Yp === C.FAST && this.Mp();
            }, V.prototype.ib = function () {
              this.Xp = true, this.I === x.STOPPING && this.Yp === C.NORMAL && this.Wt();
            }, V.prototype.Mp = function () {
              var M = this.Zp;
              this.Zp = undefined, M && M(), this.Wt();
            }, V.prototype.Wt = function () {
              {
                var M = this.$p;
                this.$p = undefined, M && M();
              }
            }, V.prototype.cc = function () {
              this.Yp = C.NORMAL, this.Qp = false, this.Xp = false, this.$p = undefined, this.Zp = undefined;
            }, V;
          }();
          y.default = r, cc._RF.pop();
        }
      }
    }, sB],
    'SlotSystemModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b8e48q3OlREgpqZ/fqigt7Z", "SlotSystemModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("SystemModel"),
            C = j("WinThresholdsModel"),
            H = j("Protoutils"),
            r = function (V) {
              function M() {
                return null !== V && V.apply(this, arguments) || this;
              }
              var q;
              return __extends(M, V), q = M, M.prototype.getProtoMessage = function () {
                var m = {};
                m.ctor = q;
                m.givenName = "Common";
                m.isRoot = true;
                return H.createProtoMessages(D).concat(this.getGameProtoMessage());
              }, M.prototype.getGameProtoMessage = function () {
                {
                  return [];
                }
              }, M.prototype.updateGameInfo = function (m) {
                V.prototype.updateGameInfo.call(this, m);
                var D = m.cs,
                  W = m.ml,
                  k = m.mxl,
                  z = m.wt,
                  L = m.maxwm;
                this.Ed = D || [], this.jd = W || [], this.sb = k, this.eb = L, this.vt = new C.WinThresholdsModel(z);
              }, Object.defineProperty(M.prototype, "betLevelList", {
                'get': function () {
                  {
                    return this.jd;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "betSizeList", {
                'get': function () {
                  return this.Ed;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "maxLineNumber", {
                'get': function () {
                  return this.sb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "maxWinMultipler", {
                'get': function () {
                  return this.eb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "winThresholds", {
                'get': function () {
                  return this.vt;
                },
                'enumerable': false,
                'configurable': true
              }), M.registryKey = "GeneralSlotSystemModel", __decorate([H.api('cs', 11, "double", true, false, false)], M.prototype, "_betSizeList", undefined), __decorate([H.api('ml', 12, "int32", true, false, false)], M.prototype, "_betLevelList", undefined), __decorate([H.api("mxl", 13, "int32", false, false, false)], M.prototype, "_maxLineNumber", undefined), __decorate([H.api('wt', 22, "bytes", false, false, false)], M.prototype, "_winThresholds", undefined), __decorate([H.api("maxwm", 23, "int32", false, false, true)], M.prototype, "_maxWinMultipler", undefined), q = __decorate([H.messageName("SlotGameInfoResponse")], M);
            }(x.default);
          y.default = r, cc._RF.pop();
        }
      }
    }, sx],
    'SlotTransactionModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "d5629sKgMRK16ZrOMxnkzm9", "SlotTransactionModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("BetRepository"),
            C = j("TransactionModel"),
            H = j("Protoutils"),
            V = j("WinLinesModel"),
            M = j("WinValuesModel"),
            q = function (m) {
              function D() {
                return null !== m && m.apply(this, arguments) || this;
              }
              var W;
              return __extends(D, m), W = D, Object.defineProperty(D.prototype, "winLines", {
                'get': function () {
                  {
                    return this.iu;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "winValues", {
                'get': function () {
                  {
                    return this.nb;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "multiplier", {
                'get': function () {
                  return this.ob;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "coinSize", {
                'get': function () {
                  return this.cb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "reels", {
                'get': function () {
                  return this.hb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "gameWinType", {
                'get': function () {
                  return this.rb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "featureBuy", {
                'get': function () {
                  return this.ab;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "currentTotalWin", {
                'get': function () {
                  return this.ub;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "comboWinCount", {
                'get': function () {
                  return this.lb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "featureSpinTypeCount", {
                'get': function () {
                  return this.vb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "parentComboWinCount", {
                'get': function () {
                  return this._b;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "winSymbolsPayout", {
                'get': function () {
                  return this.pb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "hashResult", {
                'get': function () {
                  return this.bb;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "betLevelValue", {
                'get': function () {
                  return this.mb.selectedBetLevelValue;
                },
                'set': function (k) {
                  {
                    this.mb.selectedBetLevelValue = k;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "betSizeValue", {
                'get': function () {
                  return this.mb.selectedBetSizeValue;
                },
                'set': function (k) {
                  this.mb.selectedBetSizeValue = k;
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.updateTransactionInfo = function (k) {
                {
                  var z = k.wp,
                    L = k.lw,
                    b = k.ml,
                    U = k.cs,
                    Q = k.rl,
                    w = k.gwt,
                    P = k.fb,
                    R = k.ctw,
                    T = k.cwc,
                    Y = k.fstc,
                    X = k.pcwc,
                    E = k.rwsp,
                    F = k.hashr;
                  this.iu = z ? new V.WinLinesModel(z) : undefined, this.nb = L ? new M.WinValuesModel(L) : undefined, this.ob = b, this.cb = U, this.hb = Q, this.rb = w, this.ab = P, this.ub = R, this.lb = T, this.vb = Y, this._b = X, this.pb = E, this.bb = F, this.mb || (this.mb = new x.BetRepository(this.ob, this.coinSize)), this.mb.updateRemoteBets(this.ob, this.coinSize), this.updateSlotGameTransactionInfo(k);
                }
              }, D.prototype.getProtoMessage = function () {
                var k = {};
                k.ctor = W;
                k.givenName = "Data";
                k.isRoot = true;
                return H.createProtoMessages(z).concat(this.getGameProtoMessage());
              }, D.prototype.getGameProtoMessage = function () {
                return [];
              }, D.registryKey = "GeneralSlotTransactionModel", __decorate([H.api('wp', 101, "Int32ListCollection", false, false, false, "int32")], D.prototype, "_winLines", undefined), __decorate([H.api('lw', 102, "double", false, false, false, "int32")], D.prototype, "_winValues", undefined), __decorate([H.api('ml', 51, "int32", false, false, false)], D.prototype, "_multiplier", undefined), __decorate([H.api('cs', 52, "double", false, false, false)], D.prototype, "_coinSize", undefined), __decorate([H.api('rl', 53, "int32", true, false, false)], D.prototype, "_reels", undefined), __decorate([H.api("ctw", 54, "double", false, false, false)], D.prototype, "_currentTotalWin", undefined), __decorate([H.api("cwc", 55, "int32", false, false, false)], D.prototype, "_comboWinCount", undefined), __decorate([H.api("fstc", 56, "int32", false, false, false, "int32")], D.prototype, "_featureSpinTypeCount", undefined), __decorate([H.api("pcwc", 57, "int32", false, false, false)], D.prototype, "_parentComboWinCount", undefined), __decorate([H.api("rwsp", 58, "string", false, false, false)], D.prototype, "_winSymbolsPayout", undefined), __decorate([H.api("hashr", 59, "string", false, false, false)], D.prototype, "_hashResult", undefined), __decorate([H.api('fb', 60, "int32", false, false, true)], D.prototype, "_featureBuy", undefined), __decorate([H.api("gwt", 71, "int32", false, false, false)], D.prototype, "_gameWinType", undefined), W = __decorate([H.messageName("SlotCommonResponse")], D);
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, sC],
    'SlotView': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "65850gIkU5ByodRt+g1ZDmx", "SlotView")) {
        y.__esModule = true, y.default = undefined;
        var B = {};
        B.RowPositionBottom = 0;
        B.RowPositionMiddle = 1;
        B.RowPositionTop = 2;
        var x = cc.Class({
          'extends': cc.Component,
          'statics': B,
          'properties': {
            'rowHeight': 0,
            'dataSource': {
              'get': function () {
                {
                  return this.lt;
                }
              },
              'set': function (C) {
                this.lt !== C && (this.lt = C, this.reloadData());
              },
              'visible': false
            },
            'lt': undefined,
            'Sb': false,
            'gb': false,
            'Cb': [],
            'yb': 0,
            'Mb': 0,
            'wb': 0,
            'Ab': 0,
            'Pb': false
          },
          'reloadData': function () {
            this.Sb = false, this.Bb(), this.scheduleOnce(this.reloadDataSync);
          },
          'reloadDataSync': function () {
            this.Sb = false, this.Bb(), this.enabledInHierarchy ? (this.Ob(), this.unschedule(this.reloadDataSync)) : this.gb = true;
          },
          'scrollToRowAtIndex': function (C, H, r) {
            var V = this.pointForIndex(C, H);
            this.setContentOffset(-V, r);
          },
          'scrollToRowAtIndexSync': function (C, H, r) {
            var V = this.pointForIndex(C, H);
            this.setContentOffsetSync(-V, r);
          },
          'setContentOffset': function (C) {
            isNaN(C) || (this.yb = C, this.scheduleOnce(this.Ib));
          },
          'Ib': function () {
            this.setContentOffsetSync(this.yb);
          },
          'setContentOffsetSync': function (C, H) {
            isNaN(C) || (this.Pb = H, this.node.y = C, this.unschedule(this.Ib));
          },
          'indexForItem': function (C) {
            return C.sv_posindex;
          },
          'indexAtPoint': function (C) {
            {
              var H = this.Mb;
              return isNaN(H) ? -1 : (C = cc.misc.clampf(C, 0, H), Math.floor(C / this.rowHeight));
            }
          },
          'pointForIndex': function (C, H) {
            {
              var r = this.Mb,
                V = this.wb;
              if (isNaN(r) || isNaN(V)) return NaN;
              var M = this.rowHeight,
                q = C * M;
              return 1 === H ? q -= (V - M) / 2 : 2 === H && (q -= V - M), cc.misc.clampf(q, 0, r - M);
            }
          },
          'itemAtIndex': function (C) {
            for (var H = this.Cb, r = 0, V = H.length; r < V; r++) {
              {
                var M = H[r];
                if (M.sv_posindex === C) return M;
              }
            }
          },
          'visibleItems': function () {
            return this.Cb;
          },
          'onEnable': function () {
            this.node.on("position-changed", this.Gb, this), this.wb = this.node.parent.height, this.gb ? (this.gb = false, this.Ob(), this.unschedule(this.reloadDataSync)) : this.Gb();
          },
          'onDisable': function () {
            this.node.off("position-changed", this.Gb, this);
          },
          'Gb': function () {
            {
              this.Sb ? this.Pb ? (this.Pb = false, this.Nb()) : this.Tb() : this.Pb = false;
            }
          },
          'Nb': function () {
            var C = -this.node.y,
              H = C - this.Ab;
            if (0 !== H) {
              this.Ab = C;
              for (var V = this.rowHeight, M = Math.max(0, C), q = this.Cb, m = q.length, D = Math.floor(M / V), W = 0; W < m; W++) {
                var k = q[W];
                k.y += H, k.sv_posindex = D + W;
              }
            }
          },
          'Tb': function () {
            var H = this.node,
              V = -H.y,
              q = V - this.Ab;
            if (0 !== q) {
              this.Ab = V;
              var D,
                W,
                k = this.lt,
                z = this.Cb,
                L = z.length,
                U = this.wb,
                Q = this.Mb,
                w = this.rowHeight,
                P = H.width;
              if (q > 0) {
                for (D = Math.max(-w, V - w); L;) {
                  var R = z[0];
                  if (!(R.y <= D)) break;
                  H.removeChild(R), z.shift(), k.releaseItem(this, R.sv_posindex, R), L--;
                }
                if (L) {
                  W = Math.min(Q - w, V + U - w);
                  for (var T = z[L - 1]; T.y < W;) {
                    var Y = T.sv_posindex + 1,
                      X = k.getItem(this, Y);
                    X.height = w, X.width = P, X.x = 0, X.y = Y * w, X.sv_posindex = Y, H.addChild(X), L = z.push(X), T = X;
                  }
                }
              } else {
                {
                  for (W = Math.min(Q - w, V + U); L;) {
                    {
                      var E = z[L - 1];
                      if (!(E.y >= W)) break;
                      H.removeChild(E), z.pop(), k.releaseItem(this, E.sv_posindex, E), L--;
                    }
                  }
                  if (L) {
                    D = Math.max(0, V);
                    for (var F = z[0]; F.y > D;) {
                      var N = F.sv_posindex - 1,
                        Z = k.getItem(this, N);
                      Z.height = w, Z.width = P, Z.x = 0, Z.y = N * w, Z.sv_posindex = N, H.addChild(Z), L = z.unshift(Z), F = Z;
                    }
                  }
                }
              }
              if (!L) {
                {
                  W = Math.min(Q - w, V + U);
                  for (var A = Math.floor((D = Math.max(0, V)) / w), G = Math.floor(W / w); J <= G; J++) {
                    var K = k.getItem(this, J);
                    K.height = w, K.width = P, K.y = J * w, K.sv_posindex = J, H.addChild(K), z.push(K);
                  }
                }
              }
            }
          },
          'Ob': function () {
            {
              var C = this.node;
              C.removeAllChildren(true);
              for (var H = this.Cb, V = this.lt, M = H.length, q = 0; q < M; q++) {
                var m = H[q];
                V.releaseItem(this, m.sv_posindex, m);
              }
              H.splice(0, M);
              var D = V ? V.getCount(this) : 0;
              if (V && D) {
                var W = this.wb,
                  k = this.Mb,
                  z = this.rowHeight,
                  L = C.width,
                  U = -C.y;
                this.Ab = U, U + W > k && (U = k - W, C.y = -U), C.height = k;
                for (var Q = Math.max(0, U), w = Math.min(k - z, U + W), P = Math.floor(Q / z), R = Math.floor(w / z); T <= R; T++) {
                  {
                    var Y = V.getItem(this, T);
                    Y.height = z, Y.width = L, Y.y = T * z, Y.sv_posindex = T, C.addChild(Y), H.push(Y);
                  }
                }
                this.Sb = true, V.didReloadData(this);
              }
            }
          },
          'Bb': function () {
            var C = this.lt;
            if (C) {
              var H = C.getCount(this);
              this.Mb = Math.max(H * this.rowHeight, 0);
            } else this.Mb = NaN;
          }
        });
        y.default = x, O.exports = y.default, cc._RF.pop();
      }
    }, {}],
    'SoundButton': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "47f2aqFJBBCiYjiG/SqB5jv", "SoundButton")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("GenericSettingButton"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.sprite = undefined, m.soundOn = undefined, m.soundOff = undefined, m;
              }
              return __extends(q, M), q.prototype.updateSprite = function (m) {
                this.sprite.spriteFrame = m ? this.soundOn : this.soundOff;
              }, q.prototype.changeButtonPressedColor = function (m) {
                {
                  var D = {};
                  D.scale = 0.9;
                  var W = {};
                  W.scale = 1.1;
                  var k = {};
                  k.scale = 1;
                  m ? cc.tween(this.node).to(0.05, D).start() : cc.tween(this.node).to(0.05, W).to(0.1, k).start();
                }
              }, q.prototype.changeButtonColor = function () {}, __decorate([r(cc.Sprite)], q.prototype, "sprite", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "soundOn", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "soundOff", undefined), __decorate([H], q);
            }
          }(x.default);
        y.default = V, cc._RF.pop();
      }
    }, sH],
    'SpaceBarInterrupter': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "676cajSckdANomyB/3kyE3c", "SpaceBarInterrupter")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.spaceBarInterrupter = undefined;
        var x = j("BVFramework"),
          C = cc._decorator.ccclass,
          H = new (function (r) {
            function V() {
              var M = null !== r && r.apply(this, arguments) || this;
              return M.Hb = [], M.i = false, M.Rb = false, M.kb = false, M.Lb = false, M;
            }
            return __extends(V, r), V.prototype.init = function (M) {
              var q = this,
                m = x.getGameContext();
              m.emit("Game.RequestUIIdleState", undefined, function (D) {
                q.kb = D.response, q.subscribeEventInterrupter("default", undefined, q.kb ? M.spinButtonClickCallback : M.reelClickCallback), q.Eb = M, m.on("Game.BlockUI", q.jb, q), m.on("Game.InUIIdleState", q.Db, q), q.Ub = q.Wb.bind(q), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, q.Ub), m.on("Game.SkipEvent", q.Fb, q), m.on("Game.RequestReplay", q.xb, q), m.on("Game.ReplayQuit", q.Vb, q);
              });
            }, V.prototype.xb = function () {
              {
                this.Lb = true;
              }
            }, V.prototype.Vb = function () {
              {
                this.Lb = false;
              }
            }, V.prototype.subscribeEventInterrupter = function (M, q, m) {
              {
                for (var D = this.Hb, W = 0, k = D.length; W < k; W++) if (D[W].event === M) return;
                var z = {};
                z.event = M;
                z.node = q;
                z.callback = m;
                D.push(z);
              }
            }, V.prototype.unsubscribeEventInterrupter = function (M) {
              for (var q = this.Hb, m = 0, D = q.length; m < D; m++) if (q[m].event === M) {
                q.splice(m, 1);
                break;
              }
            }, V.prototype.pause = function () {
              this.Eb && (this.i || (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), this.i = true));
            }, V.prototype.resume = function () {
              {
                this.Eb && this.i && (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), this.i = false);
              }
            }, V.prototype.stop = function () {
              {
                var M = x.getGameContext();
                M.off("Game.InUIIdleState", this.Db, this), M.off("Game.BlockUI", this.jb, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), M.off("Game.SkipEvent", this.Fb, this), M.off("Game.RequestReplay", this.xb, this), M.off("Game.ReplayQuit", this.Vb, this), this.Eb = undefined, this.Ub = undefined, this.Hb.length = 0;
              }
            }, V.prototype.Wb = function (M) {
              {
                M.keyCode === cc.macro.KEY.space && this.Fb();
              }
            }, V.prototype.Fb = function () {
              for (var M = this.Hb, q = M.length - 1; q >= 0; q--) {
                var m = M[q],
                  D = m.node;
                if (!D) {
                  (W = m.callback) && W();
                  break;
                }
                if (cc.isValid(D)) {
                  {
                    if (D.active) {
                      {
                        var W;
                        (W = m.callback) && W();
                        break;
                      }
                    }
                  }
                } else M.splice(q, 1);
              }
            }, V.prototype.Db = function (M) {
              this.kb = M.payload, this.zb();
            }, V.prototype.jb = function (M) {
              var q = M.payload;
              this.Rb = "boolean" == typeof q ? q : q.isBlocked, this.zb();
            }, V.prototype.zb = function () {
              var M = this.Rb,
                q = this.kb,
                m = this.Lb,
                D = this.Hb[0];
              if (m) D.callback = this.Eb.spinButtonClickCallback;else if (M) D.callback && (D.callback = undefined);else {
                {
                  var W = this.Eb,
                    k = W.spinButtonClickCallback,
                    z = W.reelClickCallback;
                  D.callback = q ? k : z;
                }
              }
            }, __decorate([C("SpaceBarInterrupter")], V);
          }(cc.Object))();
        y.spaceBarInterrupter = H, cc._RF.pop();
      }
    }, sr],
    'SpinButtonController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "43d12n8a1BInJvBu7QtjALE", "SpinButtonController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.SpinButtonMode = y.SpinButtonAnimationState = undefined;
          var x,
            C,
            H = j("SettingMenuHelper"),
            V = j("ButtonHitTest"),
            M = j("SlotAnalyticsEnum"),
            q = cc._decorator.ccclass;
          (function (D) {
            D[D.IDLE = 1] = "IDLE", D[D.SPINNING = 2] = "SPINNING", D[D.STOPPED = 3] = "STOPPED";
          })(x = y.SpinButtonAnimationState || (y.SpinButtonAnimationState = {})), function (D) {
            D[D.ENABLED = 0] = "ENABLED", D[D.DISABLED = 1] = "DISABLED", D[D.AUTOSPIN = 2] = "AUTOSPIN";
          }(C = y.SpinButtonMode || (y.SpinButtonMode = {}));
          var m = function (D) {
            function W() {
              var k = null !== D && D.apply(this, arguments) || this;
              return k.Kb = C.DISABLED, k.qb = x.STOPPED, k.Jb = false, k.Yb = undefined, k.Qb = undefined, k;
            }
            return __extends(W, D), Object.defineProperty(W.prototype, "clickCallback", {
              'get': function () {
                return this.Qb;
              },
              'set': function (k) {
                {
                  this.Qb = k;
                }
              },
              'enumerable': false,
              'configurable': true
            }), W.prototype.showAutoSpinLook = function () {
              {
                this.Yb && this.Yb();
              }
            }, Object.defineProperty(W.prototype, "mode", {
              'get': function () {
                return this.Kb;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(W.prototype, "isHover", {
              'get': function () {
                return this.Jb;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(W.prototype, "isHovered", {
              'get': function () {
                {
                  return this.Jb;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(W.prototype, "animationState", {
              'get': function () {
                return this.qb;
              },
              'enumerable': false,
              'configurable': true
            }), W.prototype.setOnClickCallback = function (k) {
              this.Qb = k;
            }, W.prototype.clearOnClickCallback = function () {
              {
                this.Qb = undefined;
              }
            }, W.prototype.destroy = function () {
              return this.Qb = undefined, this.Yb = undefined, this.Xb(), this.node.destroy(), D.prototype.destroy.call(this);
            }, W.prototype.Xb = function () {
              {
                this.disableMouseHover(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onStopAllAnimations && this.onStopAllAnimations();
              }
            }, W.prototype.init = function () {
              {
                this.enableMouseHover(), this.onDisableButton(), this.onInit && this.onInit();
              }
            }, W.prototype.idle = function () {
              {
                this.qb = x.IDLE, this.Kb !== C.AUTOSPIN && (this.onShowIdleAnimation && this.onShowIdleAnimation(), this.Jb && this.Zb());
              }
            }, W.prototype.spin = function () {
              {
                this.qb = x.SPINNING, this.Kb !== C.AUTOSPIN && (this.Kb !== C.DISABLED && this.onReplaceSpinBlurredSpriteFrame && this.onReplaceSpinBlurredSpriteFrame(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onShowSpinAnimation && this.onShowSpinAnimation());
              }
            }, W.prototype.stopSpin = function () {
              this.qb = x.STOPPED, this.Kb !== C.AUTOSPIN && this.onShowStopSpinningAnimation && this.onShowStopSpinningAnimation();
            }, W.prototype.enableButton = function () {
              this.Kb === C.DISABLED && (this.Kb = C.ENABLED, this.onEnableButton && this.onEnableButton());
            }, W.prototype.disableButton = function () {
              this.Kb === C.ENABLED && (this.Kb = C.DISABLED, this.onDisableButton && this.onDisableButton());
            }, W.prototype.show = function () {
              this.node.active = true;
            }, W.prototype.hide = function () {
              this.node.active = false;
            }, W.prototype.isAutoSpin = function () {
              return this.Kb === C.AUTOSPIN;
            }, W.prototype.enterAutoSpinMode = function (k, z) {
              this.qb === x.IDLE && k > 0 && (this.Kb = C.AUTOSPIN, this.Yb = z, this.showAutoSpinLook(k));
            }, W.prototype.updateAutoSpinCount = function (k) {
              this.Kb === C.AUTOSPIN && this.onUpdateAutoSpinCount && this.onUpdateAutoSpinCount(k);
            }, W.prototype.exitAutoSpinMode = function () {
              if (this.Kb === C.AUTOSPIN) {
                switch (this.Kb = C.ENABLED, this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onExitAutoSpinMode && this.onExitAutoSpinMode(), this.qb) {
                  case x.IDLE:
                    this.onResumeIdle && this.onResumeIdle();
                    break;
                  case x.SPINNING:
                    this.onResumeSpin && this.onResumeSpin();
                    break;
                  case x.STOPPED:
                    this.onResumeStop && this.onResumeStop();
                }
                H.settingMenuHelper.stopSpinOptionButtonAnim && H.settingMenuHelper.stopSpinOptionButtonAnim();
              }
            }, W.prototype.clickSpinButton = function (k) {
              if (undefined === k && (k = M.SpinTrigger.CLICK), true === this.node.active && this.Kb !== C.DISABLED && V.buttonHitTest(this.node)) {
                {
                  var z = this.Qb;
                  z && z(k);
                }
              }
            }, W.prototype.enableMouseHover = function () {
              this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
            }, W.prototype.disableMouseHover = function () {
              this.node.off(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
            }, W.prototype.mouseHovered = function () {
              {
                this.Jb = true, this.Zb();
              }
            }, W.prototype.mouseLeave = function () {
              this.Jb = false, this.onHideMouseOverEffect && this.onHideMouseOverEffect();
            }, W.prototype.Zb = function () {
              {
                var k = this.Kb,
                  z = this.qb;
                (k === C.AUTOSPIN || k !== C.DISABLED && z !== x.STOPPED) && this.onPlayMouseOverEffect && this.onPlayMouseOverEffect();
              }
            }, __decorate([q], W);
          }(cc.Component);
          y.default = m, cc._RF.pop();
        }
      }
    }, sV],
    'SpinButtonEffectController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "61686G+USpOjqGCpo42S7jA", "SpinButtonEffectController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.anim = undefined, q.sparkParticle = undefined, q;
              }
              return __extends(M, V), M.prototype.play = function () {
                this.anim.play(), this.sparkParticle.node.active = true, this.sparkParticle.resetSystem();
              }, M.prototype.Wt = function () {
                this.anim.stop(), this.sparkParticle.node.active = false, this.sparkParticle.stopSystem();
              }, M.prototype.destroy = function () {
                {
                  return this.Wt(), this.node.destroy(), V.prototype.destroy.call(this);
                }
              }, __decorate([H(cc.Animation)], M.prototype, "anim", undefined), __decorate([H(cc.ParticleSystem)], M.prototype, "sparkParticle", undefined), __decorate([C], M);
            }
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'SpinButtonMouseHoverController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "c9f09tETXlEB5wl5YAQLNgt", "SpinButtonMouseHoverController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator,
          C = x.ccclass,
          H = x.property,
          r = function (V) {
            {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.buttonHoverEffectNode = undefined, q.buttonNode = undefined, q;
              }
              return __extends(M, V), M.prototype.init = function () {
                {
                  this.node.active = true, this.mouseHovered();
                }
              }, M.prototype.show = function () {
                this.node.active = true;
              }, M.prototype.hide = function () {
                {
                  this.node.active = false;
                }
              }, M.prototype.stop = function () {
                this.buttonHoverEffectNode.stopAllActions();
              }, M.prototype.mouseHovered = function () {
                {
                  this.mouseLeave(), this.buttonHoverEffectNode.runAction(cc.sequence(cc.spawn(cc.fadeTo(0.2, 255), cc.scaleTo(0.2, 1.5).easing(cc.easeOut(3))), cc.spawn(cc.fadeOut(0.5), cc.scaleTo(0.5, 1.7)), cc.scaleTo(0.3, 1)).repeatForever());
                }
              }, M.prototype.mouseLeave = function () {
                {
                  var q = this.buttonHoverEffectNode;
                  q.stopAllActions(), q.opacity = 0, q.scale = 0.7;
                }
              }, M.prototype.q = function () {
                this.mouseLeave();
              }, M.prototype.destroy = function () {
                return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
              }, __decorate([H(cc.Node)], M.prototype, "buttonHoverEffectNode", undefined), __decorate([H(cc.Node)], M.prototype, "buttonNode", undefined), __decorate([C], M);
            }
          }(cc.Component);
        y.default = r, cc._RF.pop();
      }
    }, {}],
    'SpinButtonViewController.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "53057veQkxJRZfpJDi5Rv1H", "SpinButtonViewController.spec") || (Object.defineProperty(y, "__esModule", B), y.initSpinButtonNode = y.setSpinButtonInteractivity = undefined, y.setSpinButtonInteractivity = function (x) {
        var C = System.get("automation") && System.get("automation").GameData;
        C && C.emit("SpinButtonInteractivity", x);
      }, y.initSpinButtonNode = function (x) {
        var C = System.get("automation") && System.get("automation").GameConfigs;
        C && C.initNodeConfig(x.spinButton, "spin_button");
      }, cc._RF.pop());
    }, {}],
    'SpinConfigHandler': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "932b5xCb0FH57DavWl/zOYi", "SpinConfigHandler")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x), B.initSpinConfig = B.featureConfig = undefined;
        var C = {};
        C.minimumSpinningTime = 0;
        C.regularSpinningTime = 1;
        C.fastStopFeature = false;
        C.turboSpinFeature = false;
        B.featureConfig = H, B.initSpinConfig = function (r) {
          {
            var M = r.jurisdictionModel.singlePlayMinDuration,
              q = M > 0 ? r.minimumSpinningTimeOffset || 0 : r.minimumSpinningTime,
              m = M > 0 ? r.regularSpinningTimeOffset || 0 : r.regularSpinningTime;
            V.minimumSpinningTime = M + q, V.regularSpinningTime = M + m, V.turboSpinFeature = r.jurisdictionModel.turboSpinEnable, V.fastStopFeature = r.jurisdictionModel.turboSpinEnable, B.featureConfig = Object.freeze(V);
          }
        }, cc._RF.pop();
      }
    }, {}],
    'SpinOptionsButton': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "3ee68qGxY9G3q+WVKsHebfZ", "SpinOptionsButton")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("GenericSettingButton"),
          C = cc._decorator,
          H = C.ccclass,
          r = C.property,
          V = function (M) {
            {
              function q() {
                var m = null !== M && M.apply(this, arguments) || this;
                return m.autoSpinCircle = undefined, m.autoSpinCircleNormalSpriteFrame = undefined, m.autoSpinCircleDisableSpriteFrame = undefined, m.$b = undefined, m;
              }
              return __extends(q, M), q.prototype.playAutoSpinAnim = function () {}, q.prototype.stopAutoSpinAnim = function () {}, q.prototype.onLoad = function () {
                M.prototype.onLoad.call(this), this.$b = this.autoSpinCircle.getComponent(cc.Sprite);
              }, q.prototype.interactableButtonColor = function (m) {
                M.prototype.interactableButtonColor.call(this, m), this.$b.spriteFrame = m ? this.autoSpinCircleNormalSpriteFrame : this.autoSpinCircleDisableSpriteFrame;
              }, q.prototype.changeButtonPressedColor = function (m) {
                var D = {};
                D.scale = 0.9;
                var W = {};
                W.scale = 1;
                var k = {};
                k.angle = -20;
                var z = {};
                z.easing = "sineOut";
                var L = {};
                L.angle = 0;
                var v = {};
                v.easing = "sineOut";
                m ? cc.tween(this.node).to(0.05, D).start() : (cc.tween(this.node).to(0.05, W).start(), cc.tween(this.autoSpinCircle).to(0.05, k, z).to(0.05, L, v).start());
              }, __decorate([r(cc.Node)], q.prototype, "autoSpinCircle", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "autoSpinCircleNormalSpriteFrame", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "autoSpinCircleDisableSpriteFrame", undefined), __decorate([H], q);
            }
          }(x.default);
        y.default = V, cc._RF.pop();
      }
    }, sM],
    'SpinState': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f1de36UCZVLKpe2qk9vzSaC", "SpinState")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("SlotAnalyticsEnum"),
            C = j("SlotAnalyticsHelper"),
            H = j("Utils"),
            r = j("SpinConfigHandler"),
            V = function () {
              function M(q, m, D, W) {
                {
                  this.name = "Spin State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.stateDecorator = undefined, this.dataSource = q, this.generalControllers = m.generalControllers, this.finalCallback = D, W && (this.stateDecorator = W, W.triggerFastStop = this.triggerFastStop.bind(this));
                }
              }
              return M.prototype.setAvailableActions = function () {}, M.prototype.clearAvailableActions = function () {}, M.prototype.preExitStateCleanup = function () {}, M.prototype.additionalDestroyCleanups = function () {}, M.prototype.triggerFastStop = function (q) {
                {
                  var m = this.generalControllers,
                    D = m.slotController;
                  C.sendFastStopGA(q, m.spinButtonController.isAutoSpin()), D.setOnClickCallback(undefined), D.markFastStop(), this.stateDecorator && this.stateDecorator.slotFastStopTriggered && this.stateDecorator.slotFastStopTriggered(), this.slotFastStopTriggered();
                }
              }, M.prototype.slotFastStopTriggered = function () {}, M.prototype.onExitState = function (q) {
                q();
              }, M.prototype.run = function () {
                {
                  this.stateDecorator && (this.stateDecorator.stateWillStartSpin && this.stateDecorator.stateWillStartSpin(), this.stateDecorator.setAvailableActions && this.stateDecorator.setAvailableActions()), this.stateWillStartSpin(), this.setAvailableActions(), this.tm(), this.im();
                }
              }, M.prototype.im = function () {
                this.callApi(this.sm.bind(this));
              }, M.prototype.tm = function () {
                var q = this.generalControllers.slotController;
                r.featureConfig.fastStopFeature && q.setOnClickCallback(this.triggerFastStop.bind(this, x.SpinTrigger.CLICK)), this.stateDecorator && this.stateDecorator.startSlotController ? this.stateDecorator.startSlotController() : this.em();
              }, M.prototype.sm = function () {
                {
                  this.vo();
                }
              }, M.prototype.vo = function () {
                var q = this;
                this.stateDecorator && (this.stateDecorator.clearAvailableActions && this.stateDecorator.clearAvailableActions(), this.stateDecorator.preExitStateCleanup && this.stateDecorator.preExitStateCleanup()), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
                  var m = q.finalCallback;
                  q.finalCallback = undefined, q.destroy(), H.deferCallback(true)(function () {
                    H.deferCallback(true)(m);
                  });
                });
              }, M.prototype.destroy = function () {
                this.generalControllers.slotController.setOnClickCallback(undefined), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.stateDecorator && (this.stateDecorator.destroy(), this.stateDecorator = undefined), this.additionalDestroyCleanups();
              }, M.prototype.em = function () {
                this.generalControllers.slotController.spin();
              }, M;
            }();
          y.default = V, cc._RF.pop();
        }
      }
    }, sq],
    'SystemFeatureHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "c93d5OmEfVKSLl/iM1N4BVc", "SystemFeatureHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.checkSpinValidity = y.handleSystemEvent = y.getReevaluateBet = undefined;
        var x = j("SlotAnalyticsEnum"),
          C = j("Utils"),
          H = j("GameEventHandler");
        y.getReevaluateBet = r, y.handleSystemEvent = function (V) {
          var M = V.settingMenuHelper,
            q = V.betChangedHandler;
          C.sequenceCallback(r(M, q))(V.callback);
        }, y.checkSpinValidity = function (V) {
          var M = V.callback,
            q = V.getCostPerSpinFunction,
            m = V.dataSource,
            D = q();
          var W = {};
          W.totalBet = D;
          H.emitRequestPlayEvent(W, function (k) {
            {
              k ? M(x.SpinCredits.CASH) : D > m.playerModel.balance ? M(x.SpinCredits.INSUFFICIENT) : M(x.SpinCredits.BET_INVALID);
            }
          });
        }, cc._RF.pop();
      }
      function r(V, M) {
        return function (q) {
          V.reevaluateBet() ? M ? M(q) : (V.updateBetValues(), q && q()) : q && q();
        };
      }
    }, sm],
    'SystemModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "daa8eblXeJHyaG5qwoh+Te0", "SystemModel")) {
        {
          var O = System.get("bvframework").SystemModel;
          j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'TabBarController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b2f70mOAvdOxZtKjfDu/lHM", "TabBarController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("TabBar"),
          C = j("TabBarItem"),
          H = j("TransitionContext"),
          V = j("ViewController"),
          M = cc._decorator,
          q = M.ccclass,
          m = M.property,
          D = function (W) {
            {
              function k() {
                var z = null !== W && W.apply(this, arguments) || this;
                return z.content = undefined, z.tabBar = undefined, z.bottomNode = undefined, z.tabBarItemPrefab = undefined, z.nm = [], z.Nr = [], z.om = undefined, z.cm = 0, z.Tr = false, z;
              }
              return __extends(k, W), k.prototype.onLoad = function () {
                this.hm(), this.rm(), this.am(), this.node.on("size-changed", this.Rr, this);
              }, k.prototype.onEnable = function () {
                var z = this.om;
                z && (z.enabled = true);
              }, k.prototype.onDisable = function () {
                {
                  var z = this.om;
                  z && (z.enabled = false);
                }
              }, k.prototype.viewWillAppear = function (z) {
                var L = this.om;
                L && L.viewWillAppear(z);
              }, k.prototype.viewDidAppear = function (z) {
                var L = this.om;
                L && L.viewDidAppear(z);
              }, k.prototype.viewWillDisappear = function (z) {
                var L = this.om;
                L && L.viewWillDisappear(z);
              }, k.prototype.viewDidDisappear = function (z) {
                var L = this.om;
                L && L.viewDidDisappear(z);
              }, k.prototype.viewDidLayoutSubviews = function () {}, k.prototype.setControllers = function (z, L, v) {
                if (undefined === L && (L = 0), undefined === v && (v = false), Array.isArray(z)) {
                  this.cm = L, this.Nr = z, this.um(), this.nm = [];
                  for (var b = this.nm, U = 0; U < z.length; U++) {
                    var Q = z[U];
                    Q.node.parent = this.content, this.lm(U);
                    var w = Q.tabBarItem;
                    if (!(w && w instanceof C.default)) {
                      var P = Q.title;
                      (w = cc.instantiate(this.tabBarItemPrefab).getComponent(C.default)).init(P, undefined, undefined, U), Q.tabBarItem = w;
                    }
                    w.selectAction = this.fm.bind(this, U, v), b.push(w), Q.enabled = U === L;
                  }
                  this.tabBar.setItems(b, L);
                  var R = z[L];
                  this.om = R, R.viewWillAppear(false), R.viewDidAppear(false), R.tabBarItem && R.tabBarItem.animFinish && R.tabBarItem.animFinish(), this.dm(L);
                }
              }, k.prototype.getSelectedController = function () {
                return this.om;
              }, k.prototype.getSelectedTabBarItem = function () {
                {
                  return this.tabBar.getSelectedItem();
                }
              }, k.prototype.hideTabBar = function () {
                (this.tabBar.node.active || this.bottomNode.active) && (this.tabBar.node.active = false, this.bottomNode.active = false, this.Rr());
              }, k.prototype.showTabBar = function () {
                this.tabBar.node.active && this.bottomNode.active || (this.tabBar.node.active = true, this.bottomNode.active = true, this.Rr());
              }, k.prototype.lm = function (z) {
                var L = this.Nr[z],
                  v = this.content;
                if (L && L.node.getContentSize() !== v.getContentSize()) {
                  var b = L.node,
                    U = v.width,
                    Q = v.height,
                    w = v.anchorX,
                    P = v.anchorY,
                    R = (b.anchorX - w + z) * U,
                    T = (b.anchorY - P) * Q;
                  b.setContentSize(U, Q), b.setPosition(R, T);
                }
              }, k.prototype.vm = function () {
                {
                  return true === this.tabBar.node.active ? this.safeAreaInsets.bottom : 0;
                }
              }, k.prototype.hm = function () {
                var z = this.vm(),
                  L = this.node,
                  v = L.width,
                  b = L.height;
                this.content.setContentSize(v, b - z);
              }, k.prototype.rm = function () {
                {
                  var z = this.vm(),
                    L = this.node.height;
                  this.tabBar.node.y = z + this.tabBar.node.height - L;
                }
              }, k.prototype.am = function () {
                {
                  if (this.tabBar.node.active) {
                    var z = this.vm(),
                      L = this.node,
                      v = L.width,
                      b = L.height,
                      U = this.bottomNode;
                    U.setContentSize(v, z), U.y = z - b;
                  }
                }
              }, k.prototype.Rr = function () {
                var z = this.cm;
                this.hm(), this.rm(), this.am(), this.lm(z);
              }, k.prototype.dm = function (z) {
                {
                  this.content.x = -z * this.content.width;
                }
              }, k.prototype.fm = function (z, L) {
                {
                  if (!this.Tr && z !== this.cm) {
                    var v = this.Nr;
                    if (!(z >= v.length)) {
                      var b = this.om,
                        U = v[z];
                      if (undefined !== b && undefined !== U) if (this._m(z), this.Tr = true, this.tabBar.selectItemAtIndex(z), this.cm = z, this.om = U, U.setSelect && U.setSelect(), U.enabled = true, b.viewWillDisappear && b.viewWillDisappear(L), U.viewWillAppear && U.viewWillAppear(L), L) {
                        if (this.tabBarControllerDelegate && (this.tabBarControllerDelegate.transitionAnimationForTabBarToRight || this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft)) {
                          var Q;
                          (Q = z > this.cm ? this.tabBarControllerDelegate.transitionAnimationForTabBarToRight() : this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft()) ? this.pm(Q, b, U, z) : (this.dm(z), this.bm(b, U, z));
                        } else this.dm(z), this.bm(b, U, z);
                      } else this.dm(z), this.mm(b, U, z, false);
                    }
                  }
                }
              }, k.prototype.pm = function (z, L, v, b) {
                var U = this,
                  Q = new H.TransitionContext(L, v, L.view, v.view, this.content);
                z.animateTransition(Q, function () {
                  U.mm(L, v, b, true);
                });
              }, k.prototype.bm = function (z, L, v) {
                var b = this,
                  U = L.navigator ? L.navigator : L;
                U.node.opacity = 0;
                var Q = cc.sequence(cc.fadeTo(1, 255).easing(cc.easeSineIn()), cc.callFunc(function () {
                  U.node.opacity = 255, b.mm(z, L, v, true);
                }));
                U.node.runAction(Q);
              }, k.prototype.mm = function (z, L, v, b) {
                {
                  L.tabBarItem && L.tabBarItem.animFinish && L.tabBarItem.animFinish(), L && L.viewDidAppear(b), z && z.viewDidDisappear(b), z && (z.enabled = false), this.Tr = false, this.um();
                }
              }, k.prototype._m = function (z) {
                {
                  var L,
                    v,
                    b = this.cm,
                    U = this.Nr;
                  b > z ? (L = z, v = b) : (L = b, v = z);
                  for (; Q <= v; Q++) U[Q].node.opacity = 255;
                }
              }, k.prototype.um = function () {
                for (var z = this.cm, L = this.Nr, v = 0; v < L.length; v++) v !== z && (L[v].node.opacity = 0);
              }, __decorate([m(cc.Node)], k.prototype, "content", undefined), __decorate([m(x.default)], k.prototype, "tabBar", undefined), __decorate([m(cc.Node)], k.prototype, "bottomNode", undefined), __decorate([m(cc.Prefab)], k.prototype, "tabBarItemPrefab", undefined), __decorate([q], k);
            }
          }(V.default);
        y.default = D, cc._RF.pop();
      }
    }, sD],
    'TabBarItem': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "cd0fbm4LQBEVL5LzWleSsGj", "TabBarItem")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                var q = null !== V && V.apply(this, arguments) || this;
                return q.icon = undefined, q.titleLabel = undefined, q.tintColor = undefined, q.selectedTintColor = undefined, q.Sm = undefined, q.gm = undefined, q.Cm = undefined, q.ym = undefined, q.Mm = undefined, q;
              }
              return __extends(M, V), Object.defineProperty(M.prototype, "tag", {
                'get': function () {
                  return this.ym;
                },
                'set': function (q) {
                  this.ym = q;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "selectAction", {
                'set': function (q) {
                  this.Mm = q;
                },
                'enumerable': false,
                'configurable': true
              }), M.prototype.init = function (q, m, D, W) {
                q && (this.titleLabel.string = q), m && (this.icon.spriteFrame = m, this.Sm = m), this.Cm = D, this.ym = W, this.gm = false;
              }, M.prototype.setupTouchAction = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.Z, this), this.node.on(cc.Node.EventType.TOUCH_END, this.tt, this);
              }, M.prototype.setTintColor = function (q) {
                {
                  this.gm || (this.icon.node.color = q, this.titleLabel.node.color = q), this.tintColor = q;
                }
              }, M.prototype.setSelectedTintColor = function (q) {
                {
                  this.gm && (this.icon.node.color = q, this.titleLabel.node.color = q), this.selectedTintColor = q;
                }
              }, M.prototype.setTitleAttributes = function (q) {
                var m = q.getFontSize(),
                  D = q.getNormalFontColor(),
                  W = q.getFontName(),
                  k = q.getLineHeight();
                this.titleLabel.fontSize = m, this.titleLabel.font = W, this.titleLabel.node.color = D, this.titleLabel.lineHeight = k;
              }, M.prototype.setSelect = function () {
                {
                  var q = this.selectedTintColor;
                  this.icon.node.color = q, this.titleLabel.node.color = q, this.icon.spriteFrame = this.Cm, this.gm = true;
                }
              }, M.prototype.setUnselected = function () {
                {
                  var q = this.tintColor;
                  this.icon.node.color = q, this.titleLabel.node.color = q, this.icon.spriteFrame = this.Sm, this.gm = false;
                }
              }, M.prototype.animFinish = function () {}, M.prototype.Z = function () {}, M.prototype.tt = function (q) {
                q.stopPropagation(), this.Mm && this.Mm();
              }, __decorate([H(cc.Sprite)], M.prototype, "icon", undefined), __decorate([H(cc.Label)], M.prototype, "titleLabel", undefined), __decorate([H(cc.Color)], M.prototype, "tintColor", undefined), __decorate([H(cc.Color)], M.prototype, "selectedTintColor", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'TabBar': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "b8f7436fYdNnryqvtnVtqIL", "TabBar")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = cc._decorator,
            C = x.ccclass,
            H = x.property,
            r = function (V) {
              function M() {
                {
                  var q = null !== V && V.apply(this, arguments) || this;
                  return q.background = undefined, q.itemsContainer = undefined, q.shadow = undefined, q.nm = [], q.Am = undefined, q;
                }
              }
              return __extends(M, V), M.prototype.onLoad = function () {
                var q = this.node.width,
                  m = this.node.height;
                this.background.node.setContentSize(q, m), this.shadow.node.width = q, this.itemsContainer.setContentSize(q, m);
              }, M.prototype.setItems = function (q, m) {
                var D = q.length;
                if (D && !(D < 1)) {
                  for (var W = 0; W < D; W++) {
                    {
                      var k = q[W];
                      k.setupTouchAction(), k.node.parent = this.itemsContainer;
                    }
                  }
                  var z = q[m];
                  z.setSelect(), this.Am = z, this.nm = q;
                }
              }, M.prototype.getItems = function () {
                return this.nm;
              }, M.prototype.selectItemAtIndex = function (q) {
                {
                  if (!(q >= this.nm.length)) {
                    var m = this.Am;
                    m && m.setUnselected();
                    var D = this.nm[q];
                    D.setSelect(), this.Am = D;
                  }
                }
              }, M.prototype.getSelectedItem = function () {
                return this.Am;
              }, M.prototype.setTintColor = function (q) {
                {
                  for (var m = this.nm, D = 0; D < m.length; D++) m[D].setTintColor(q);
                }
              }, M.prototype.setSelectedTintColor = function (q) {
                for (var m = this.nm, D = 0; D < m.length; D++) m[D].setSelectedTintColor(q);
              }, M.prototype.setTitleAttributes = function (q) {
                for (var m = this.nm, D = 0; D < m.length; D++) m[D].setTitleAttributes(q);
              }, M.prototype.setBackgroundImage = function (q, m) {
                q ? this.background.spriteFrame = q : m && (this.background.node.color = m);
              }, __decorate([H(cc.Sprite)], M.prototype, "background", undefined), __decorate([H(cc.Node)], M.prototype, "itemsContainer", undefined), __decorate([H(cc.Sprite)], M.prototype, "shadow", undefined), __decorate([C], M);
            }(cc.Component);
          y.default = r, cc._RF.pop();
        }
      }
    }, {}],
    'TimedWinRollBaseController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "12aa3hO3pdL6oUvYmprts/7", "TimedWinRollBaseController")) {
        {
          var x = {};
          x.value = true;
          Object.defineProperty(B, "__esModule", x);
          var C = {};
          C.big = 0;
          C.mega = 1;
          C.superMega = 2;
          C.overflow = 3;
          var H = O("NumberDisplayInterface"),
            M = cc._decorator,
            q = M.ccclass,
            m = M.property,
            D = function (k) {
              {
                function z() {
                  {
                    var L = null !== k && k.apply(this, arguments) || this;
                    return L.displayController = undefined, L.km = 0, L.Lm = 0, L.Ga = -1, L.Em = 0, L.jm = [], L.Dm = undefined, L.Um = undefined, L.Wm = undefined, L.Fm = [], L.xm = false, L.Vm = -1, L.zm = -1, L.Km = [], L.qm = [], L.Et = [], L.Jm = [], L.Ym = [], L;
                  }
                }
                return __extends(z, k), z.prototype.update = function () {}, z.prototype.setNumbersCallback = function (L) {
                  this.jm = L;
                }, z.prototype.setTimeCallback = function (L, v) {
                  this.Fm = L, this.Um = v;
                }, z.prototype.init = function (L) {
                  this.Et = [L.bigWinThreshold, L.megaWinThreshold, L.superMegaWinThreshold], this.Jm = [L.bigWinDuration, L.megaWinDuration, L.superMegaWinDuration], this.Ga = L.totalWin, this.Ym = [];
                  for (var v = 0; v < 3; v++) this.Ym[v] = this.Jm[v].reduce(function (b, U) {
                    return b + U;
                  });
                  this.Qm();
                }, z.prototype.getWinType = function () {
                  var L = {};
                  L.winStyle = this.Vm;
                  L.winStep = this.zm;
                  return L;
                }, z.prototype.play = function (L) {
                  {
                    this.Xm() && (this.km = 0, this.Em = 0, this.Lm = 0, this.Dm = L, this.displayController.clear(), this.update = this.Zm, this.xm = true);
                  }
                }, z.prototype.skip = function () {
                  var L = this;
                  this.xm && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
                    L.Dm && L.Dm(L.Ga);
                  }));
                }, z.prototype.stop = function (L) {
                  undefined === L && (L = true), L && (this.displayController.clear(), this.Dm = undefined, this.Um = undefined), this.km = 0, this.xm = false, this.update = function () {};
                }, z.prototype.Xm = function () {
                  {
                    return !this.jm || this.jm.length, !(!this.Jm || !this.Et || this.Ga < 0);
                  }
                }, z.prototype.Qm = function () {
                  var L = this.Ga,
                    v = this.Et,
                    b = this.Ym,
                    Q = v[U.superMega] + (v[U.superMega] - v[U.mega]) * b[U.superMega] / b[U.mega],
                    w = [],
                    P = [];
                  L < v[U.mega] ? (this.Vm = U.big, P[U.big] = L, w[U.big] = this.$m(L, 0, v[U.mega], U.big, 0)) : L < v[U.superMega] ? (this.Vm = U.mega, P[U.big] = v[U.mega], w[U.big] = b[U.big], P[U.mega] = L, w[U.mega] = this.$m(L, v[U.mega], v[U.superMega], U.mega, v[U.mega] / b[U.big])) : L < Q ? (this.Vm = U.superMega, P[U.big] = v[U.mega], w[U.big] = b[U.big], P[U.mega] = v[U.superMega], w[U.mega] = b[U.mega], P[U.superMega] = L, w[U.superMega] = this.$m(L, v[U.superMega], Q, U.superMega, (v[U.superMega] - v[U.mega]) / b[U.mega])) : (this.Vm = U.overflow, this.zm = 0, P[U.big] = v[U.mega], P[U.mega] = v[U.superMega], P[U.superMega] = L, w = b), this.Km = w, this.qm = P, this.Wm = W(0, this.qm[0]);
                }, z.prototype.$m = function (L, v, b, U, Q) {
                  for (var w = this.Ym[U], P = this.Jm[U], R = (L - v) / (b - v), T = 0, Y = 0; Y < P.length; Y++) {
                    var X = T + P[Y];
                    if (R < X / w) return Q ? (L - v) / X >= Q ? (this.zm = Y + 1, X) : (this.zm = Y, T) : T && R < (X + T) / 2 / w ? (this.zm = Y, T) : (this.zm = Y + 1, X);
                    T = X;
                  }
                  return T;
                }, z.prototype.Zm = function (L) {
                  var v,
                    b,
                    U,
                    Q,
                    w,
                    P = (this.km += L) - this.Lm,
                    R = this.Km[0];
                  if (P < R) P += L * (0.2 * Math.random() - 0.1), v = this.Wm.evaluate(P / R);else {
                    var T = undefined,
                      Y = undefined;
                    do {
                      T = this.Km.shift(), R = this.Km[0], Y = this.qm.shift(), this.Lm += T, P -= T;
                    } while (undefined !== R && P >= R);
                    if (undefined === R) this.Wm = undefined, this.xm = false, this.update = function () {}, v = this.Ga;else {
                      if (this.Vm === V.overflow && 1 === this.Km.length) {
                        var X = this.Wm.getDistance() / T;
                        this.Wm = (b = Y, U = this.qm[0], w = U - b - (Q = X * R), {
                          'evaluate': function (E) {
                            return b + Q * E + w * Math.pow(2, 20 * (E - 1));
                          }
                        });
                      } else this.Wm = W(Y, this.qm[0]);
                      P += L * (0.2 * Math.random() - 0.1), v = this.Wm.evaluate(P / R);
                    }
                  }
                  this.tS(v), this.Um && this.iS(this.km);
                }, z.prototype.tS = function (L) {
                  {
                    var v = this.jm,
                      b = this.Ga,
                      Q = false,
                      w = [],
                      P = this.Dm;
                    if (undefined !== v) for (; v.length && v[0] <= L;) {
                      var R = v.shift();
                      w.push(R);
                    }
                    b <= L && (this.stop(false), U = b, Q = true, w.push(b), this.Dm = undefined), this.displayController.displayNumber(U, Q, function () {
                      w.forEach(function (T) {
                        P && P(T);
                      });
                    });
                  }
                }, z.prototype.iS = function (L) {
                  var v = this.Fm;
                  if (undefined !== v && v.length && v[0] <= L) {
                    var b = v.shift();
                    this.Um(b);
                  }
                }, __decorate([m({
                  'type': H.default,
                  'override': true
                })], z.prototype, "displayController", undefined), __decorate([q], z);
              }
            }(cc.Component);
          B.default = D, cc._RF.pop();
        }
      }
      function W(k, z) {
        var L = z - k;
        var v = {};
        v.evaluate = function (b) {
          return k + L * b;
        };
        v.getDistance = function () {
          return L;
        };
        return v;
      }
    }, sW],
    'TimedWinRollController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "bbc6c4tBJdFQ76rTU5OtO2a", "TimedWinRollController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberDisplayController"),
          C = j("TimedWinRollBaseController"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            {
              function W() {
                {
                  var k = null !== m && m.apply(this, arguments) || this;
                  return k.displayController = undefined, k;
                }
              }
              var D = {};
              D.type = x.default;
              D.override = true;
              return __extends(W, m), __decorate([M(D)], W.prototype, "displayController", undefined), __decorate([V], W);
            }
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, sk],
    'TimedWinRollCurveController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "ac3b0Ey1QlMtZGe7RPoOsSH", "TimedWinRollCurveController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberCurvedController"),
          C = j("TimedWinRollBaseController"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              var k = null !== m && m.apply(this, arguments) || this;
              return k.displayController = undefined, k;
            }
            var W = {};
            W.type = x.default;
            W.override = true;
            return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, so],
    'TimedWinRollLabelController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "aa2360L0o1DHbvfzQuldvyg", "TimedWinRollLabelController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberLabelController"),
          C = j("TimedWinRollBaseController"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              {
                var k = null !== m && m.apply(this, arguments) || this;
                return k.displayController = undefined, k;
              }
            }
            var W = {};
            W.type = x.default;
            W.override = true;
            return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, sz],
    'TransactionModel': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "54c92i9GeNK1JtqIIU4fhIX", "TransactionModel")) {
        var O = System.get("bvframework").TransactionModel;
        j.exports.default = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'TransactionStateMachineHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "c42f8INb4ZMyJTA7LnNSlci", "TransactionStateMachineHandler")) {
        var O = System.get("bvframework").TransactionStateMachineHandler;
        for (var y in O) O.hasOwnProperty(y) && (j.exports[y] = O[y]);
        j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'TransitionContext': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "9fd10r5SF9AY7ViKPJFg+fR", "TransitionContext")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.TransitionContext = undefined;
          var x = function () {
            {
              function C(H, r, V, M, q) {
                this.sS = H, this.eS = r, this.nS = V, this.oS = M, this.cS = q;
              }
              return C.prototype.getFromController = function () {
                return this.sS;
              }, C.prototype.getToController = function () {
                {
                  return this.eS;
                }
              }, C.prototype.getFromView = function () {
                return this.nS;
              }, C.prototype.getToView = function () {
                return this.oS;
              }, C.prototype.getContainer = function () {
                return this.cS;
              }, C;
            }
          }();
          y.TransitionContext = x, cc._RF.pop();
        }
      }
    }, {}],
    'TransitionEnum': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "ba325vamDZMr5FAGrgPtoRH", "TransitionEnum") || (Object.defineProperty(y, "__esModule", B), y.NavigationControllerOperation = undefined, function (x) {
        x[x.None = 0] = "None", x[x.Push = 1] = "Push", x[x.Pop = 2] = "Pop";
      }(y.NavigationControllerOperation || (y.NavigationControllerOperation = {})), cc._RF.pop());
    }, {}],
    'Transitions': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4f44bvoAJdODZ+ECdfyE6W8", "Transitions")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.ToNormalSpinTransition = undefined;
        var x = function (C) {
          function H() {
            {
              return null !== C && C.apply(this, arguments) || this;
            }
          }
          return __extends(H, C), H.prototype.run = function (r, V) {
            this.hS = r.generalControllers, V && V();
          }, H.prototype.destroy = function () {
            return this.hS = undefined, C.prototype.destroy.call(this);
          }, H;
        }(cc.Object);
        y.ToNormalSpinTransition = x, cc._RF.pop();
      }
    }, {}],
    'TurboButtonEffect': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "5e837vEECVAj4O05haO7Gt+", "TurboButtonEffect")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = cc._decorator.ccclass,
          C = function (H) {
            function r() {
              var V = null !== H && H.apply(this, arguments) || this;
              return V.rS = undefined, V;
            }
            return __extends(r, H), r.prototype.setUpdateTurboMiddleIconCallback = function (V) {
              {
                this.rS = V;
              }
            }, r.prototype.changeTurboSprite = function () {
              {
                this.rS && this.rS();
              }
            }, __decorate([x], r);
          }(cc.Component);
        y.default = C, cc._RF.pop();
      }
    }, {}],
    'TweaksConfig': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "0602bmSQ0NBZrhW+yhcJtSb", "TweaksConfig")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), j("RtConfig"), j("GamePreference"), j("CreatorTweaks"), j("Utils"), j("QuitGame"), j("Printer"), j("TweaksData");
        y.default = undefined, cc._RF.pop();
      }
    }, sc],
    'TweaksData': [function (l, j) {
      'use strict';

      cc._RF.push(j, "b0089xUdQRLiZXeZmKk7dCG", "TweaksData") || (j.exports = {}, j.exports.__esModule = true, cc._RF.pop());
    }, {}],
    'UIAppearanceHelper': [function (m, D, W) {
      'use strict';

      if (!cc._RF.push(D, "f4549VlHlxOL4w7V7h4rhZg", "UIAppearanceHelper")) {
        var k = {};
        k.value = true;
        Object.defineProperty(W, "__esModule", k), W.uiAppearanceHelper = W.getOffsetY = undefined;
        var z = {};
        z.native = 4;
        z.non_native = 3;
        var L = {};
        L.native = 4;
        L.non_native = 5;
        var b = {};
        b.native = 2;
        b.non_native = 2;
        var U = {};
        U.native = 5;
        U.non_native = 4;
        var Q = {};
        Q.windows = z;
        Q.macos = L;
        Q.ios = b;
        Q.android = U;
        var w = {};
        w.native = 0;
        w.non_native = 5;
        var P = {};
        P.native = 2;
        P.non_native = 3;
        var R = {};
        R.native = 0;
        R.non_native = 3;
        var T = {};
        T.native = 4;
        T.non_native = 4;
        var Y = m("BACKUP_DATA"),
          X = function () {
            function K() {}
            return K.prototype.interpret = function (l0) {
              {
                return l0[0];
              }
            }, K;
          }(),
          E = function () {
            function K() {}
            return K.prototype.interpret = function (l0) {
              {
                return new cc.Color(l0[0], l0[1], l0[2], l0[3]);
              }
            }, K;
          }(),
          F = cc._decorator.ccclass,
          N = function (K) {
            {
              function l0() {
                var l1 = K.call(this) || this;
                l1.aS = undefined;
                var l2 = l1.aS = shell.uiAppearance;
                return l2 && (l2.registerInterpreter("font", new X()), l2.registerInterpreter("value", new X()), l2.registerInterpreter("path", new X()), l2.registerInterpreter("color", new E()), l2.registerInterpreter("classname", new X())), l1;
              }
              return __extends(l0, K), l0.prototype.v = function (l1) {
                var l2 = this.aS && this.aS.v(l1);
                return null === l2 && (l2 = S(l1)), l2;
              }, l0.prototype.unregisterInterpreter = function (l1) {
                return this.aS && this.aS.unregisterInterpreter(l1);
              }, __decorate([F("UIAppearanceHelper")], l0);
            }
          }(cc.Object),
          Z = Object.freeze(Q),
          p = Object.freeze({
            'windows': w,
            'macos': P,
            'ios': R,
            'android': T
          }),
          g = shell.I18n.currentLocale,
          A = shell.getBrowserBaseType().toLowerCase(),
          G = 'zh' === g || 'ko' === g || 'ja' === g ? p : Z;
        W.getOffsetY = function () {
          switch (cc.sys.os) {
            case cc.sys.OS_WINDOWS:
              return 'ie' === A || "edge" === A ? G.windows.native : G.windows.non_native;
            case cc.sys.OS_ANDROID:
              return "chrome" === A ? G.android.native : G.android.non_native;
            case cc.sys.OS_OSX:
              return "safari" === A ? G.macos.native : G.macos.non_native;
            case cc.sys.OS_IOS:
              return "mobile safari" === A ? G.ios.native : G.ios.non_native;
            default:
              return G.macos.non_native;
          }
        };
        var J = new N();
        W.uiAppearanceHelper = J, cc._RF.pop();
      }
      function S(K) {
        {
          for (var l0, l1 = K.split('.'), l2 = 0, l3 = l1.length; l2 < l3; l2++) {
            var l4 = l1[l2];
            if (undefined === (l0 = l0 && l0[l4] || Y.default[l4])) return null;
          }
          return l0;
        }
      }
    }, sL],
    'UIAudioConstant': [function (H, r, V) {
      'use strict';

      var M = {};
      M.value = true;
      var q = {};
      q.from = 0;
      q.to = 0.263375;
      q.key = "btnPress";
      var m = {};
      m.from = 1;
      m.to = 1.120979;
      m.key = "listItemClick";
      var D = {};
      D.from = 2;
      D.to = 2.263375;
      D.key = "menuIconPress";
      var W = {};
      W.from = 3;
      W.to = 3.15675;
      W.key = "sliderEffect";
      var k = {};
      k.from = 4;
      k.to = 4.546188;
      k.key = "walletCountingAbove";
      var o = {};
      o.btnPress = q;
      o.listItemClick = m;
      o.menuIconPress = D;
      o.sliderEffect = W;
      o.walletCountingAbove = k;
      o.__duration = 5;
      o.__bitrate = "96kbps";
      cc._RF.push(r, "69d4dxPKH5CVZetz/GKOLO2", "UIAudioConstant") || (Object.defineProperty(V, "__esModule", M), V.UI_AUDIO = undefined, V.UI_AUDIO = o, cc._RF.pop());
    }, {}],
    'UIAudioHelper': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "57810qsxE9IZ4RLOmdbS6tE", "UIAudioHelper")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.loadAudio = y.initUIAudioHelper = y.UIAudioIndex = undefined;
        var x,
          C,
          H,
          V = j("BVFramework"),
          M = j("Utils"),
          q = j("UIAudioConstant");
        (function (D) {
          {
            D[D.BACK_OR_CLOSE = 0] = "BACK_OR_CLOSE", D[D.BUTTON_CLICK = 1] = "BUTTON_CLICK", D[D.LIST_ITEN_CLICK = 2] = "LIST_ITEN_CLICK", D[D.SLIDER_EFFECT = 3] = "SLIDER_EFFECT", D[D.WALLET_COUNTING_ABOVE = 4] = "WALLET_COUNTING_ABOVE";
          }
        })(H = y.UIAudioIndex || (y.UIAudioIndex = {})), y.loadAudio = function (D) {
          {
            if (x) {
              x = undefined, W && W();
            }
            if (C) {
              var z = undefined,
                L = function () {
                  k.off("loaderror", z), D && D();
                };
              z = function (v, b) {
                k.off("load", L), D && D(b);
              }, k.once("load", L), k.once("loaderror", z), k.load();
            } else D && D(Error("UIAudioHelper not initialized"));
          }
        }, y.initUIAudioHelper = function (D) {
          var W = M.getCocosMajor() >= 4 ? "/lib/ui_audio_helper/res/ui_audio" : cc.url.raw("/resources/lib/ui_audio_helper/res/ui_audio.mp3");
          var k = {};
          k.preload = false;
          k.src = W;
          k.sprite = q.UI_AUDIO;
          C = new D(k), V.getGameContext().on("Game.PlayUISound", function (z) {
            var L = m(z && z.payload);
            C && C.play(L);
          });
        }, cc._RF.pop();
      }
      function m(D) {
        switch (D) {
          case H.BUTTON_CLICK:
            return q.UI_AUDIO.menuIconPress.key;
          case H.LIST_ITEN_CLICK:
          case H.SLIDER_EFFECT:
            return q.UI_AUDIO.sliderEffect.key;
          case H.WALLET_COUNTING_ABOVE:
            return q.UI_AUDIO.walletCountingAbove.key;
          case H.BACK_OR_CLOSE:
          default:
            return q.UI_AUDIO.btnPress.key;
        }
      }
    }, sv],
    'UIKitUtils': [function (j, O, y) {
      'use strict';

      function B() {
        return cc.sys.os === cc.sys.OS_IOS;
      }
      var x = {};
      x.value = true;
      cc._RF.push(O, "b3045XdzRhDNrJLCqWLZ6eT", "UIKitUtils") || (Object.defineProperty(y, "__esModule", x), y.isNotBrowserMode = y.deviceHasNotch = y.isIphoneX = y.isIphone = undefined, y.isIphone = B, y.isIphoneX = function () {
        var C = cc.view.getFrameSize();
        return B() && (812 === C.width && 375 === C.height || 375 === C.width && 812 === C.height);
      }, y.deviceHasNotch = function () {
        return shell.environment.hasNotch();
      }, y.isNotBrowserMode = function () {
        return window.navigator.standalone || "app" === shell.getEnvironment();
      }, cc._RF.pop());
    }, {}],
    'UIKit': [function (D, W, k) {
      'use strict';

      var o = {};
      o.value = true;
      var z = {};
      z.height = 139.5;
      z.item_space_x = 48;
      var c = {};
      c.height = 186;
      c.item_space_x = 48;
      var L = {};
      L.landscape = z;
      L.portrait = c;
      var v = {};
      v.bar = L;
      var b = {};
      b.height = 180;
      var U = {};
      U.height = 180;
      var Q = {};
      Q.landscape = b;
      Q.portrait = U;
      var w = {};
      w.bar = Q;
      var h = {};
      h.top = 80;
      h.left = 0;
      h.bottom = 102;
      h.right = 0;
      var P = {};
      P.top = 50;
      P.left = 0;
      P.bottom = 0;
      P.right = 0;
      var R = {};
      R.top = 0;
      R.left = 0;
      R.bottom = 0;
      R.right = 0;
      var T = {};
      T.iphone_x = h;
      T.iphone = P;
      T.normal = R;
      cc._RF.push(W, "cfcacQ0hpxOzKvh1YNNRBbk", "UIKit") || (Object.defineProperty(k, "__esModule", o), k.safeArea = k.TabBarConfigs = k.NavigationConfigs = undefined, k.NavigationConfigs = v, k.TabBarConfigs = w, k.safeArea = Object.freeze(T), cc._RF.pop());
    }, {}],
    'UISetupHandler': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f4567d4xahD3ovewoSIICYp", "UISetupHandler")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.NormalGameUI = y.settingMenuInteractable = y.renderUIBaseOnState = undefined;
        var x = j("PGGDataSource"),
          C = j("SettingMenuHelper"),
          H = j("SlotProperties"),
          r = j("GameRegionUtils");
        y.renderUIBaseOnState = function (M, q, m, D) {
          {
            var W = {};
            W.generalControllers = D;
            new V().setup(W, M);
          }
        }, y.settingMenuInteractable = function (M) {
          C.settingMenuHelper.setAllButtonsInteractable(M);
        };
        var V = function () {
          function M() {}
          return M.prototype.setup = function (q, m) {
            var D, W;
            this._t = q.generalControllers, D = x.pgDataSource.playerModel.balance, W = x.pgDataSource.transactionModel.accumulatedWinAmount, C.settingMenuHelper.setBalance(D), C.settingMenuHelper.setWinAmount(W), this.qh(), this.uS(), m && m();
          }, M.prototype.qh = function () {
            {
              var q = x.pgDataSource.transactionModel,
                m = q.accumulatedWinAmount,
                D = q.fakeReels,
                W = q.reels,
                k = q.winSymbolIndex,
                z = q.piggyFeature,
                L = q.hasWild,
                U = q.wildMultiply,
                Q = q.middleReelsMutiply,
                w = this._t.payTableController;
              if (z && this._t.scrollerManagerController.playSpawn(), m > 0) {
                var P = this._t.slotController,
                  R = this._t.paySelectController,
                  T = this._t.wildMultiplySpineController,
                  Y = this._t.fastSpinAnimationController,
                  X = [];
                if (P.resetSlot(D, W, Q, z), w.playWinFlash(k), Y.activeScrollNode(), W.forEach(function (F, N) {
                  var Z;
                  if (Z = P.getSymbolSpriteFrames(F), F === H.SlotIndexes.WILD) {
                    var g = 1;
                    1 === N && (g = U), T.playWildSpineLoop(g, N);
                  }
                  X.push(Z.normal);
                }), P.getSlotItemWithIndex([1, 4, 7]).forEach(function (F) {
                  {
                    F.active = false;
                  }
                }), R.playNormalPaySelect(X, W), L) {
                  var E = U || 1;
                  w.fadeMultiply(E, false);
                } else w.playWildInactive();
              } else w.playWildActive();
            }
          }, M.prototype.uS = function () {
            var q = x.pgDataSource.transactionModel.accumulatedWinAmount,
              m = this._t.infobarController;
            q > 0 && r.checkUKGCRegion(q) ? m.showWin(q) : m.displayNormalTip();
          }, M;
        }();
        y.NormalGameUI = V, cc._RF.pop();
      }
    }, sb],
    'Utils': [function (j, O) {
      'use strict';

      if (!cc._RF.push(O, "03755Dj0/VFQbz7rFuRrlJG", "Utils")) {
        var y = {};
        y.u0 = "convertToNodeSpace";
        y.u1 = "convertToNodeSpaceAR";
        y.u2 = "getAbsolutePosition";
        y.u3 = "getAbsoluteX";
        y.u4 = "getAbsoluteY";
        y.u5 = "setAbsolutePosition";
        y.u6 = "setAbsoluteX";
        y.u7 = "setAbsoluteY";
        y.u8 = "transferToParent";
        y.u9 = "getSharedScheduler";
        y.u10 = "delayCallback";
        y.u11 = "timeoutCallback";
        y.u12 = "selectorCallback";
        y.u13 = "sequenceCallback";
        y.u14 = "spawnCallback";
        y.u15 = "waterfCallback";
        y.u16 = "condCallback";
        y.u17 = "deferCallback";
        y.u18 = "tickCallback";
        y.u19 = "observeCallback";
        y.u20 = "formatTwoDigit";
        y.u21 = "formatDate";
        y.u22 = "isRTL";
        y.u23 = "getProtocol";
        y.u24 = "getOrigin";
        var B = System.get("common").Utils,
          x = function (H, r) {
            {
              var V = {};
              for (var M in r) H.hasOwnProperty(M) ? V[H[M]] = r[M] : V[M] = r[M];
              return DEBUG, V;
            }
          }(y, B);
        for (var C in x) x.hasOwnProperty(C) && (O.exports[C] = x[C]);
        O.exports.__esModule = true, null == B.sharedScheduler && (O.exports.sharedScheduler = x.getSharedScheduler()), cc._RF.pop();
      }
    }, {}],
    'ViewControllerTransition': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "8e202781KBBRIxVxe3NWQ9e", "ViewControllerTransition")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = function () {
          {
            function C() {}
            return C.prototype.transitionDuration = function () {
              {
                return 0.3;
              }
            }, C.prototype.animateTransition = function () {}, C.prototype.animationEnd = function () {}, C;
          }
        }();
        y.default = x, cc._RF.pop();
      }
    }, {}],
    'ViewController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "ef8ab8zk59N1LEX0M2uhmRU", "ViewController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("UIKitUtils"),
          C = j("UIKit"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            {
              function D() {
                var W = null !== m && m.apply(this, arguments) || this;
                return W.title = '', W.leftItem = undefined, W.middleItem = undefined, W.rightItem = undefined, W.lr = undefined, W.lS = undefined, W;
              }
              return __extends(D, m), Object.defineProperty(D.prototype, "navigator", {
                'get': function () {
                  return this.lr;
                },
                'set': function (W) {
                  {
                    this.lr = W;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "view", {
                'get': function () {
                  return this.node;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(D.prototype, "safeAreaInsets", {
                'get': function () {
                  var W, k, z, L;
                  return this.lS || (this.lS = (W = x.deviceHasNotch(), k = x.isIphone(), z = x.isNotBrowserMode(), L = shell.is1959Supported, W && z && L ? C.safeArea.iphone_x : W && L ? {
                    'top': C.safeArea.normal.top,
                    'left': C.safeArea.iphone_x.left,
                    'bottom': C.safeArea.iphone_x.bottom,
                    'right': C.safeArea.iphone_x.right
                  } : k && z ? C.safeArea.iphone : C.safeArea.normal)), this.lS;
                },
                'enumerable': false,
                'configurable': true
              }), D.prototype.onEnable = function () {}, D.prototype.onDisable = function () {}, D.prototype.viewWillAppear = function () {}, D.prototype.viewDidAppear = function () {}, D.prototype.viewWillDisappear = function () {}, D.prototype.viewDidDisappear = function () {}, D.prototype.viewWillLayoutSubviews = function () {}, D.prototype.viewDidLayoutSubviews = function () {}, __decorate([M(cc.String)], D.prototype, "title", undefined), __decorate([V], D);
            }
          }(cc.Component);
        y.default = q, cc._RF.pop();
      }
    }, sU],
    'WebSocketHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d571cdfj6pHMqHdyAI82QnG", "WebSocketHandler")) {
        {
          var O = System.get("bvframework").WebSocketHandler;
          for (var y in O) O.hasOwnProperty(y) && (j.exports[y] = O[y]);
          j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'WildBounceScroller': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "4ab15AknuJJ3L1MrNZXk77k", "WildBounceScroller")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("SimpleStopScroller"),
            C = cc._decorator.ccclass,
            H = function (r) {
              {
                function V(M, q) {
                  {
                    var m = r.call(this, M, q) || this;
                    return m.es = false, m.ss = 0.3, m;
                  }
                }
                return __extends(V, r), V.prototype.onStop = function () {
                  {
                    r.prototype.onStop.call(this);
                  }
                }, V.prototype.update = function (M) {
                  {
                    if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, void this.stop();
                    if ((M = this.rs += M) <= this.delay) return this.target.y = this.as - this.scrollSpeed * M, true;
                    M -= this.delay;
                    var q = this.ds;
                    if (M < q) return this.target.y = this.hc - this.scrollSpeed * M - this._s * M * M, void this.emit("decelerate", 1 - M / q, this);
                    this.ns || (this.ns = true, this.emit("decelerate", 0, this)), M -= q;
                    var m = this.bounceDuration;
                    if (M < m) this.target.y = this.ps - this.bounceDistance * Math.sin(10 * M);else {
                      M -= m;
                      var D = this.ss;
                      if (M < D) {
                        {
                          var W = cc.misc.lerp(-30, 0, M / D);
                          this.target.y = this.os - W * Math.sin(30 * M);
                        }
                      } else this.target.y = this.os, this.stop();
                    }
                  }
                }, __decorate([C], V);
              }
            }(x.default);
          y.default = H, cc._RF.pop();
        }
      }
    }, sQ],
    'WildMultiplySpineController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "a0cefYe/MJNprA3dL5AZyai", "WildMultiplySpineController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x,
          C = cc._decorator,
          H = C.ccclass,
          r = C.property;
        (function (M) {
          M[M.SHOW = 1] = "SHOW", M[M.HIDE = 2] = "HIDE";
        })(x || (x = {}));
        var V = function (M) {
          function q() {
            {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.multiplySpine = undefined, m.Nu = x.HIDE, m.fS = 0, m.dS = undefined, m;
            }
          }
          return __extends(q, M), q.prototype.playWinMultiply = function (m, D) {
            if (x.SHOW !== this.Nu) {
              this.fS = m;
              var W = 'x' + this.fS + "_win";
              this.dS = D, this.multiplySpine.node.active = true, this.Nu = x.SHOW;
              var k = this.multiplySpine;
              k.clearTrack(0), k.setCompleteListener(this.vS.bind(this)), k.setAnimation(0, W, false);
            }
          }, q.prototype.vS = function () {
            {
              var m = 'x' + this.fS + "_idle",
                D = this.multiplySpine;
              D.clearTrack(0), D.setCompleteListener(undefined), D.setAnimation(0, m, true);
              var W = this.dS;
              this.dS = undefined, W && W();
            }
          }, q.prototype.playIdleMultiply = function () {
            if (x.SHOW !== this.Nu) {
              var m = 'x' + this.fS + "_idle";
              this.multiplySpine.node.active = true, this.Nu = x.SHOW;
              var D = this.multiplySpine;
              D.clearTrack(0), D.setAnimation(0, m, true);
            }
          }, q.prototype.stop = function () {
            {
              if (this.multiplySpine.node.active) {
                {
                  var m = this.multiplySpine;
                  m.clearTrack(0), m.setCompleteListener(undefined), m.setToSetupPose(), this.multiplySpine.node.active = false;
                }
              }
              this.Nu = x.HIDE;
            }
          }, q.prototype.destroy = function () {
            {
              return this.node.destroy(), this.stop(), M.prototype.destroy.call(this);
            }
          }, __decorate([r(sp.Skeleton)], q.prototype, "multiplySpine", undefined), __decorate([H], q);
        }(cc.Component);
        y.default = V, cc._RF.pop();
      }
    }, {}],
    'WildMultiplySpineManager': [function (C, H, V) {
      'use strict';

      if (!cc._RF.push(H, "64277KuIuBLZKCFpqgnu6f3", "WildMultiplySpineManager")) {
        var M = {};
        M.value = true;
        Object.defineProperty(V, "__esModule", M);
        var q = {};
        q.x = 3.5;
        q.y = -0.5;
        var m = {};
        m.x = 5;
        m.y = -5;
        var D = {};
        D.x = -1;
        D.y = -6;
        var W = {};
        W.x = 8;
        W.y = -5;
        var k = {};
        k['1'] = q;
        k['2'] = m;
        k['5'] = D;
        k['10'] = W;
        var z = C("SlotProperties"),
          L = C("WildMultiplySpineController"),
          v = C("AudioManager"),
          b = cc._decorator,
          U = b.ccclass,
          Q = b.property,
          P = function (R) {
            {
              function T() {
                var Y = null !== R && R.apply(this, arguments) || this;
                return Y.multiplySpine = [], Y.multiplySpineNodeList = [], Y._S = [], Y.pS = undefined, Y.bS = [], Y;
              }
              return __extends(T, R), T.prototype.cacheLocalSlotPosition = function (Y) {
                var X = this,
                  E = [1, 4, 7],
                  F = z.slotProperties.getSlotItemSize();
                this.multiplySpineNodeList.forEach(function (N, Z) {
                  var p = z.slotProperties.getSlotWorldPositionFromIndex(E[Z]),
                    g = N.parent.convertToNodeSpaceAR(p),
                    f = F.x / 2,
                    A = F.y / 2;
                  N.setPosition(new cc.Vec2(g.x + f, g.y + A)), X.bS[Z] = N.getPosition();
                }), Y && Y();
              }, T.prototype.playWildSpineStill = function (Y, X, E) {
                this.pS = E, this.mS(Y, X), this.multiplySpine[X].playWinMultiply(Y, this.SS(X)), this._S.push(z.NumberOfRow * X + 1);
              }, T.prototype.SS = function (Y) {
                var X = this;
                return function () {
                  var E = X.pS;
                  X.pS = undefined, E && E(), X.multiplySpine[Y].stop();
                };
              }, T.prototype.playWildSpineLoop = function (Y, X) {
                this.mS(Y, X), this.multiplySpine[X].playWinMultiply(Y, undefined), this._S.push(z.NumberOfRow * X + 1);
              }, T.prototype.playMultipleWinAudio = function (Y) {
                switch (Y) {
                  case z.WildSlotIndexes.ONE:
                    v.GeneralAudioPool.sym_wild_normal.play();
                    break;
                  case z.WildSlotIndexes.TWO:
                    v.GeneralAudioPool.sym_wild_x2.play();
                    break;
                  case z.WildSlotIndexes.FIVE:
                    v.GeneralAudioPool.sym_wild_x5.play();
                    break;
                  case z.WildSlotIndexes.TEN:
                    v.GeneralAudioPool.sym_wild_x10.play();
                }
              }, T.prototype.getHidenSlotIndexList = function () {
                return this._S;
              }, T.prototype.mS = function (Y, X) {
                var E = this.multiplySpineNodeList[X],
                  F = this.bS[X].x + w[Y].x,
                  N = this.bS[X].y + w[Y].y;
                E.setPosition(new cc.Vec2(F, N));
              }, T.prototype.stop = function () {
                this.multiplySpine.forEach(function (Y) {
                  Y.stop();
                }), this._S = [];
              }, T.prototype.destroy = function () {
                return this.stop(), this.node.destroy(), R.prototype.destroy.call(this);
              }, __decorate([Q([L.default])], T.prototype, "multiplySpine", undefined), __decorate([Q([cc.Node])], T.prototype, "multiplySpineNodeList", undefined), __decorate([U], T);
            }
          }(cc.Component);
        V.default = P, cc._RF.pop();
      }
    }, sw],
    'WinHighlight.spec': [function (j, O, y) {
      'use strict';

      var B = {};
      B.value = true;
      cc._RF.push(O, "1aa77YtUcFBUomDDx/cedzg", "WinHighlight.spec") || (Object.defineProperty(y, "__esModule", B), y.showWinHighlight = undefined, y.showWinHighlight = function () {
        {
          var x = System.get("automation") && System.get("automation").GameData;
          x && x.emit("WinHighlightShown");
        }
      }, cc._RF.pop());
    }, {}],
    'WinLinesModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "24a5eWztK9Pkb2VKy4b0JAV", "WinLinesModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.WinLinesModel = undefined;
          var x = function () {
            function C(H) {
              H && (this.gS = JSON.parse(JSON.stringify(H)), this.CS = Object.keys(this.gS));
            }
            return C.prototype.getWinLinesByPosition = function (H) {
              {
                return this.gS[H];
              }
            }, Object.defineProperty(C.prototype, "winPositions", {
              'get': function () {
                return this.CS;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(C.prototype, "rawData", {
              'get': function () {
                return JSON.parse(JSON.stringify(this.gS));
              },
              'enumerable': false,
              'configurable': true
            }), C;
          }();
          y.WinLinesModel = x, cc._RF.pop();
        }
      }
    }, {}],
    'WinRollBaseController': [function (O, y, B) {
      'use strict';

      if (!cc._RF.push(y, "adab7txcZBOsJ6NClaGwrmO", "WinRollBaseController")) {
        var x = {};
        x.value = true;
        Object.defineProperty(B, "__esModule", x);
        var C = {};
        C.playing = -1;
        C.stop = -1;
        var H = O("NumberDisplayInterface"),
          V = cc.Enum(C),
          M = cc._decorator,
          q = M.ccclass,
          m = M.property,
          D = function (W) {
            {
              function k() {
                var z = null !== W && W.apply(this, arguments) || this;
                return z.yS = 2, z.MS = 2, z.wS = 2, z.AS = false, z.PS = false, z.km = 0, z.BS = 0, z.Ga = 0, z.OS = 0, z.Nu = V.stop, z.jm = [], z.Dm = undefined, z.IS = undefined, z.defaultVelocityStallDuration = 8, z.displayController = undefined, z;
              }
              return __extends(k, W), k.prototype.setNumbersCallback = function (z) {
                this.jm = z;
              }, k.prototype.setWinThresholds = function (z, L, v) {
                this.GS = z, this.NS = L, this.TS = v, this.AS = true;
              }, k.prototype.HS = function (z, L, v) {
                return v < this.defaultVelocityStallDuration ? L : z + Math.pow(2, v - this.defaultVelocityStallDuration);
              }, k.prototype.setWinDurations = function (z, L) {
                this.yS = z, this.MS = L, this.PS = true;
              }, k.prototype.setVelocityCalculation = function (z) {
                this.IS = z;
              }, k.prototype.play = function (z, L) {
                {
                  if (this.Xm()) {
                    this.Nu = V.playing, this.Dm = L, this.displayController.clear(), this.km = 0, this.RS = 0, this.BS = 0, this.Ga = z;
                    var v = this.NS;
                    this.kS = this.OS = v / this.yS;
                  }
                }
              }, k.prototype.skip = function () {
                var z = this;
                this.Nu === V.playing && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
                  z.LS(z.Ga), z.Dm = null;
                }));
              }, k.prototype.Xm = function () {
                return this.PS, !this.jm || this.jm.length, this.IS || (this.IS = this.HS), !!this.AS;
              }, k.prototype.stop = function (z) {
                undefined === z && (z = true), z && (this.displayController.clear(), this.Dm = null), this.km = 0, this.Nu = V.stop;
              }, k.prototype.update = function (z) {
                this.Nu === V.playing && (this.RS >= this.TS ? (this.km += z, this.OS = this.IS(this.kS, this.OS, this.km, z), this.RS = this.RS + this.OS * z * (0.9 + 0.2 * Math.random())) : this.RS = this.RS + this.OS * z * (0.9 + 0.2 * Math.random()), this.tS());
              }, k.prototype.LS = function (z) {
                var L = this.MS,
                  v = this.TS,
                  b = this.NS;
                if (z === b) {
                  var U = v - b;
                  this.kS = this.OS = U / L;
                }
                z === v && (this.kS = this.OS = (v - b) / L), this.Dm && this.Dm(z);
              }, k.prototype.tS = function () {
                {
                  var z = this,
                    L = this.RS,
                    v = this.jm,
                    b = this.Ga;
                  if (b <= L) return this.stop(false), void this.displayController.displayNumber(b, true, function () {
                    {
                      z.LS(b), z.Dm = null;
                    }
                  });
                  if (undefined !== v && v.length && v[0] <= L) {
                    var U = v.shift();
                    this.displayController.displayNumber(L, false, function () {
                      z.LS(U);
                    });
                  } else this.displayController.displayNumber(L, false);
                }
              }, __decorate([m(cc.Float)], k.prototype, "defaultVelocityStallDuration", undefined), __decorate([m({
                'type': H.default,
                'override': true
              })], k.prototype, "displayController", undefined), __decorate([q], k);
            }
          }(cc.Component);
        B.default = D, cc._RF.pop();
      }
    }, sh],
    'WinRollController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "00616+xbv9I/qAMwXqWbdkY", "WinRollController")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B);
        var x = j("NumberDisplayController"),
          C = j("WinRollBaseController"),
          H = cc._decorator,
          V = H.ccclass,
          M = H.property,
          q = function (m) {
            function D() {
              {
                return null !== m && m.apply(this, arguments) || this;
              }
            }
            var W = {};
            W.type = x.default;
            W.override = true;
            return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
          }(C.default);
        y.default = q, cc._RF.pop();
      }
    }, sP],
    'WinRollCurveController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "a210c4WXCdAmKbdwKdx5P30", "WinRollCurveController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberCurvedController"),
            C = j("WinRollBaseController"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property,
            q = function (m) {
              function D() {
                return null !== m && m.apply(this, arguments) || this;
              }
              var W = {};
              W.type = x.default;
              W.override = true;
              return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, sR],
    'WinRollLabelController': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "f7e1diBGQ5A8KF1oMrYEMNU", "WinRollLabelController")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B);
          var x = j("NumberLabelController"),
            C = j("WinRollBaseController"),
            H = cc._decorator,
            V = H.ccclass,
            M = H.property,
            q = function (m) {
              function D() {
                return null !== m && m.apply(this, arguments) || this;
              }
              var W = {};
              W.type = x.default;
              W.override = true;
              return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
            }(C.default);
          y.default = q, cc._RF.pop();
        }
      }
    }, sT],
    'WinThresholdsModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "43fa7kpruFLXK4fYDhrIgSc", "WinThresholdsModel")) {
        var B = {};
        B.value = true;
        Object.defineProperty(y, "__esModule", B), y.WinThresholdsModel = undefined;
        var x = j("APIEncryptor"),
          C = j("Utils"),
          H = j("Protoutils"),
          r = function () {
            {
              function M(q) {
                var m = this.deserializer(q),
                  D = m.mw,
                  W = m.bw,
                  k = m.mgw,
                  z = m.smgw;
                this.gS = JSON.parse(JSON.stringify(m)), this.ES = D, this.jS = W, this.DS = k, this.US = z;
              }
              var V;
              return V = M, M.prototype.deserializer = function (q) {
                var m = {};
                m.ctor = V;
                m.givenName = "WinThreshold";
                m.isRoot = true;
                var W = H.createProtoMessages(D);
                return x.decode(q, x.protoNested()[0](W));
              }, M.prototype.getAllThresholds = function (q, m, D) {
                {
                  var W = q * m * D;
                  return {
                    'mediumWinThreshold': C.toDecimalWithExp(W * this.ES, 2),
                    'bigWinThreshold': C.toDecimalWithExp(W * this.jS, 2),
                    'megaWinThreshold': C.toDecimalWithExp(W * this.DS, 2),
                    'superMegaWinThreshold': C.toDecimalWithExp(W * this.US, 2)
                  };
                }
              }, Object.defineProperty(M.prototype, "rawData", {
                'get': function () {
                  return this.gS;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "mediumWin", {
                'get': function () {
                  return this.ES;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "bigWin", {
                'get': function () {
                  {
                    return this.jS;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "megaWin", {
                'get': function () {
                  return this.DS;
                },
                'enumerable': false,
                'configurable': true
              }), Object.defineProperty(M.prototype, "superMegaWin", {
                'get': function () {
                  {
                    return this.US;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), M.registryKey = "WinThreshold", __decorate([H.api('mw', 1, "double", false, false, false)], M.prototype, "_mediumWin", undefined), __decorate([H.api('bw', 2, "double", false, false, false)], M.prototype, "_bigWin", undefined), __decorate([H.api("mgw", 3, "double", false, false, false)], M.prototype, "_megaWin", undefined), __decorate([H.api("smgw", 4, "double", false, false, false)], M.prototype, "_superMegaWin", undefined), V = __decorate([H.messageName("WinThreshold")], M);
            }
          }();
        y.WinThresholdsModel = r, cc._RF.pop();
      }
    }, sY],
    'WinValuesModel': [function (j, O, y) {
      'use strict';

      if (!cc._RF.push(O, "501f6RTfh9LVInQJ/Y+n54G", "WinValuesModel")) {
        {
          var B = {};
          B.value = true;
          Object.defineProperty(y, "__esModule", B), y.WinValuesModel = undefined;
          var x = function () {
            function C(H) {
              H && (this.gS = JSON.parse(JSON.stringify(H)), this.WS = Object.keys(this.gS));
            }
            return C.prototype.getWinValueByPosition = function (H) {
              return this.gS[H];
            }, Object.defineProperty(C.prototype, "winValuePositions", {
              'get': function () {
                return this.WS;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(C.prototype, "rawData", {
              'get': function () {
                return JSON.parse(JSON.stringify(this.gS));
              },
              'enumerable': false,
              'configurable': true
            }), C;
          }();
          y.WinValuesModel = x, cc._RF.pop();
        }
      }
    }, {}],
    'XHRFactory': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "f3dd4hmiBJHSqrMVzx2qXWg", "XHRFactory")) {
        var O = System.get("common").XHRFactory;
        j.exports.XHRFactory = O, j.exports.__esModule = true, cc._RF.pop();
      }
    }, {}],
    'XHRHandler': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "77926JsF5hDL5NbzKF89qZh", "XHRHandler")) {
        {
          var O = System.get("bvframework").XHRHandler;
          for (var y in O) j.exports[y] = O[y];
          j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}],
    'XHRHelper': [function (l, j) {
      'use strict';

      if (!cc._RF.push(j, "d29eaTApqFCCLK6u/sH0xO/", "XHRHelper")) {
        {
          var O = System.get("bvframework").XHRHelper;
          for (var y in O) j.exports[y] = O[y];
          j.exports.__esModule = true, cc._RF.pop();
        }
      }
    }, {}]
  }, {}, ["GameLayout", "AnimParticleSystem", "AnimParticleSystemPoolHandler", "AnimParticleSystemUtils", "Appearance", "ButtonTheme", "LabelTheme", "AdapterEventEmitter", "AudioAdapter", "AudioAdapterConstant", "AudioFactory", "NoSoundAdapter", "AutomationDecorator", "ButtonHitTest", "APIClient", "AnalyticsHelper", "BVFramework", "BVFrameworkEnum", "DataSource", "ErrorHandler", "GameEventHandler", "GameHeaderHelper", "GameInitializationHandler", "GameMaintenanceHandler", "GameMaintenanceModel", "GamePluginModel", "GameTitle", "GameUtils", "LaunchConfig", "NotifyHelper", "OperatorJurisdictionModel", "PlayerModel", "Printer", "QuitGame", "QuitGameWithEvent", "RegionUtils", "RequestHandler", "ResourceQualifierHelper", "RetryHandler", "SystemModel", "TransactionModel", "TransactionStateMachineHandler", "WebSocketHandler", "XHRHandler", "XHRHelper", "ClickEffectController", "APIEncryptor", "CanvasResizeBroadcaster", "CommonDummy", "Deserializer", "FPSTracker", "JSONSerializer", "MultiResHandler", "Preference", "Protoutils", "ResRC", "Serializer", "Utils", "XHRFactory", "CreatorTweaks", "TweaksData", "HitPassThrough", "InfoboardMessageController", "InfoboardMessageController.spec", "JakeSlotGameTemplate", "SpinButtonController", "TweaksConfig", "SlotAnalyticsEnum", "SlotGameConstants", "NormalPrizeDecorator", "NormalResultDecorator", "NormalSpinDecorator", "AutoSpinHandler", "SettingMenuHandlers", "SpinConfigHandler", "SystemFeatureHandler", "SlotAnalyticsHelper", "BetRepository", "SlotSystemModel", "SlotTransactionModel", "WinLinesModel", "WinThresholdsModel", "WinValuesModel", "SlotStateMachine", "IdleState", "PrizeState", "ResultState", "SpinState", "NumberCurvedController", "NumberDisplayController", "NumberDisplayInterface", "NumberLabelController", "NumberRollBaseController", "NumberRollController", "NumberRollCurveController", "NumberRollLabelController", "TimedWinRollBaseController", "TimedWinRollController", "TimedWinRollCurveController", "TimedWinRollLabelController", "WinRollBaseController", "WinRollController", "WinRollCurveController", "WinRollLabelController", "GenericLoadingScreenController", "RefreshWorldHandler", "ResourceLoader", "BetModifierButton", "GenericSettingButton", "SettingMenuController", "SettingSlider", "SettingSliderNum", "SettingSliderSingle", "SettingSliderSingleNum", "SettingTurboSpinButton", "SoundButton", "SpinOptionsButton", "TurboButtonEffect", "SettingMenuAudioConstant", "NumberLabelControllerLite", "SettingInfoFooterController", "SettingMenuButtonHelper", "SettingMenuHelper", "AbstractScroller", "FastStopScroller", "SimpleStartScroller", "SimpleStopScroller", "SlotScroller", "SlotScrollerController.spec", "SlotView", "BACKUP_DATA", "UIAppearanceHelper", "UIAudioConstant", "UIAudioHelper", "BaseListViewCell", "BookView", "Button", "DrawLine", "GridView", "LabelLocalized", "ListView", "ListViewCellUpdateAnim", "ListViewEnum", "NavigationBar", "NavigationController", "NavigationDefaultTransition", "PageControl", "PageControlButton", "ScrollViewEx", "SliderEx", "TabBar", "TabBarController", "TabBarItem", "TransitionContext", "TransitionEnum", "UIKit", "UIKitUtils", "ViewController", "ViewControllerTransition", "AudioManager", "AutoSpinButtonController", "BGMHandler", "BackWorldController", "BigPrizeController", "BigWinController", "CoinParticleController", "FastSpinAnimationController", "FireworkController", "FrontWorldController", "GameAudioAdapter", "GamePreference", "InfobarController", "LanternController", "Main", "MainFireWorkController", "MediumPrizeController", "NormalSpinButtonController", "NumberPaytableController", "PGGAPIClient", "PGGRefreshWorldHandler", "PGSpinButtonController", "PaySelect", "PaySelectController", "PayTableController", "PaytableContainerController", "PaytableGlowController", "PaytableNumberHolderController", "PaytableSymbolController", "PaytableWildEffectController", "PiggyController", "PiggyGoldTweaksConfig", "PiggyParticleFeatureController", "PiggyParticleFeatureManager", "RandomShakingController", "RtConfig", "ScrollerManagerController", "ScrollerSpineController", "SimpleAnimationController", "SlotController", "SlotItemController", "SlotProperties", "SpinButtonEffectController", "SpinButtonMouseHoverController", "Transitions", "WildMultiplySpineController", "WildMultiplySpineManager", "BigWinController.spec", "InfobarController.spec", "PGApiClient.spec", "SpinButtonViewController.spec", "WinHighlight.spec", "ResponsiveHandler", "UISetupHandler", "AudioAssetConfig", "CustomAssetConfig", "GeneralAssetConfig", "LoadingController", "PGBetRequestModel", "PGGDataSource", "PGSlotTransactionModel", "GameRegionUtils", "BounceScatterStopScroller", "InterruptableScroller", "PossibleWinScroller", "ScatterStopScroller", "WildBounceScroller", "PGGIdleState", "PGGNormalGameState", "PGGPrizeState", "PGGResultState", "PGGSpinState", "SpaceBarInterrupter"]);
}();