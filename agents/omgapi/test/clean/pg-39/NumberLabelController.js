// module: NumberLabelController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberLabelController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "b6e176hgIFCvo12TMjQIRc7", "NumberLabelController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("NumberDisplayInterface"),
        C = require("Utils"),
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
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = NumberLabelController;
