// module: NumberLabelController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberLabelController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "b6e176hgIFCvo12TMjQIRc7", "NumberLabelController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("NumberDisplayInterface"),
      X = F("Utils"),
      Z = cc._decorator.ccclass,
      T = function (M) {
        function C() {
          {
            var V = null !== M && M.apply(this, arguments) || this;
            return V.df = false, V.mf = 0, V.bf = 0, V.nc = undefined, V;
          }
        }
        return __extends(C, M), C.prototype.onLoad = function () {
          this.mf = this.numberContainer.scaleX, this.bf = this.numberContainer.scaleY, this.Sf(), this.numberContainer.on(cc.Node.EventType.SIZE_CHANGED, this.resizeNumberIfNeeded, this);
        }, C.prototype.setPrefix = function (V) {
          {
            this.Nf = V;
          }
        }, C.prototype.displayNumber = function (V, N, q) {
          undefined === N && (N = true), this.Gf = q;
          var f = this.getNumberList(V, N);
          if (this.nc.string = this.Nf ? this.Nf + f : f, N) {
            {
              var h = this.Gf;
              this.Gf = null, h && h();
            }
          }
        }, C.prototype.getNumberList = function (V, N) {
          var q = /(?:\d+)(?:\.\d+)?/gm.exec(V.toString());
          if (q) {
            var f = parseFloat(q[0]),
              h = this.pf(f, N);
            return "number" == typeof V ? h : V.replace(q[0], h);
          }
          return V.toString();
        }, C.prototype.pf = function (V, N) {
          {
            var f = '',
              h = 1;
            this.enableShortenNumber && V > 999 && (h = 1000, f = 'k');
            var g = !X.getDefaultCurrencyFormat().hideDecimal && this.enableDecimal;
            return q = g ? Math.floor(q / h) : Math.round(q / h), this.enableComma && (q = this.numberWithComma(q)), g && (q += this.yf(V, N)), q + f;
          }
        }, C.prototype.yf = function (V, N) {
          var q,
            f,
            g,
            l = X.getDefaultCurrencyFormat().decimalSeparator;
          this.enableShortenNumber && V > 999 ? (q = Math.round(V / 100) / 10, f = 2, g = N ? '' : l + '0') : (q = V, f = 3, g = l + '00');
          var K = q.toString();
          if (-1 !== K.indexOf(l)) for (g = K.substring(K.indexOf(l), K.indexOf(l) + f); g.length !== f;) g += '0';
          return g;
        }, C.prototype.clear = function () {
          {
            this.nc.string = '', this.Mf();
          }
        }, C.prototype.resizeNumberIfNeeded = function () {
          {
            var V = this;
            if (!this.df) {
              var N = this.numberContainer.width,
                q = this.maxContainerSize / N,
                f = N * this.numberContainer.scaleX,
                g = this.Gf;
              if (this.Gf = null, isFinite(q) && !this.df && Math.round(f) > this.maxContainerSize) {
                this.df = true;
                var l = q - 0.06,
                  K = function () {
                    V.df = false, g && g();
                  };
                this.Bf ? this.Bf(this.numberContainer, l, q, K) : this.wf(l, q, K);
              } else X.delayCallback(0)(function () {
                g && g();
              });
            }
          }
        }, C.prototype.Mf = function () {
          {
            this.mf && this.bf && (this.numberContainer.scaleX = this.mf, this.numberContainer.scaleY = this.bf);
          }
        }, C.prototype.wf = function (V, N, q) {
          this.numberContainer.runAction(cc.sequence(cc.scaleTo(0.08, V), cc.scaleTo(0.05, N), cc.callFunc(q, this)));
        }, C.prototype.Sf = function () {
          this.nc = this.numberContainer.getComponent(cc.Label), this.nc || (this.nc = this.numberContainer.addComponent(cc.Label), this.nc.fontSize = 45, this.nc.lineHeight = 60, this.nc.string = '');
        }, C.prototype.onDestroy = function () {
          {
            this.Gf = null, this.Bf = null;
          }
        }, __decorate([Z], C);
      }(B.default);
    I.default = T, cc._RF.pop();
  }
}
module.exports = NumberLabelController;
