// module: ShiftSlotHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ShiftSlotHandler(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "5095e/LtCtNm4QFOnCv7NGF", "ShiftSlotHandler")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("Utils"),
      X = require("AudioManager"),
      Z = require("MJDataSource"),
      T = require("AudioConstant"),
      M = require("SlotHandler"),
      C = function () {
        function V() {
          this.Qm = undefined, this.Oa = undefined, this.Ym = undefined, this.Zm = undefined, this.Xm = undefined, this.$m = undefined, this.tb = undefined, this.ib = undefined, this.sb = undefined, this.eb = undefined, this.nb = undefined, this.ob = undefined, this.cb = undefined, this.hb = undefined, this.rb = undefined, this.ab = undefined, this.ub = undefined, this.lb = undefined;
        }
        return Object.defineProperty(V.prototype, "slowDropDelay", {
          'set': function (N) {
            this.sb = N;
          },
          'enumerable': false,
          'configurable': true
        }), V.prototype.init = function (N) {
          {
            this.Qm = N.slotItemHolder, this.Oa = N.slotViews, this.Ym = N.slotItemPool, this.Zm = N.numberOfRow, this.Xm = N.symbolSize.height, this.$m = N.symbolSpawnSpacing, this.tb = N.columnDropInterval, this.ib = N.slowDropDelay, this.sb = this.ib, this.eb = N.columnSlowDropInterval, this.nb = N.acceleration, this.ob = N.accelerationFactor, this.cb = N.bounceDistance, this.hb = N.bounceDistanceFactor, this.rb = N.bounceDuraion, this.ab = N.bounceFactor, this.ub = [], this.lb = true;
          }
        }, V.prototype.reset = function () {
          this.sb = this.ib;
        }, V.prototype.playEffect = function (N, q, K) {
          {
            for (var x, L = this, U = this.Oa, k = this.Xm, Y = this.$m, z = 0, P = 0, G = function (QI, Qm, Qt) {
                {
                  P++, L.fb(QI, Qm, Qt, function () {
                    {
                      z === P && K && K();
                    }
                  });
                }
              }, W = function (QI, Qm) {
                {
                  L.vb(QI, Qm);
                }
              }, D = M.slotHandler.isTurboMode(), J = 0, Q0 = [], Q1 = N.length - 1; Q1 >= 0; Q1--) N[Q1].length && (Q0[Q1] = J, D || (J += this.tb));
            if (q) {
              var Q2 = J + this.sb;
              x = [], Q1 = 0;
              for (var Q3 = N.length; Q1 < Q3; Q1++) N[Q1].length && (x[Q1] = Q2, Q2 += this.eb);
            }
            var Q4 = q ? k : k + Y;
            for (Q1 = 0, Q3 = N.length; Q1 < Q3; Q1++) {
              {
                var Q5 = N[Q1];
                if (Q5.length) {
                  {
                    for (var Q6 = U[Q1].getFunctionalItems(), Q7 = Q0[Q1], Q8 = 0, Q9 = function (QI) {
                        {
                          var Qm = Q6[QI];
                          Qm.visible ? Q8 && (z++, Qm.node.runAction(QQ._b(Q7, -k * Q8, function () {
                            W(false, 99);
                          }, function () {
                            {
                              G(Qm, false, 99);
                            }
                          }))) : Q8 += Qm.symbolRow;
                        }
                      }, QQ = this, QF = Q6.length - 1; QF >= 0; QF--) Q9(QF);
                    for (var QR = Q6[0], Qn = cc.v2(QR.node.x, QR.node.y + Y + k * (this.Zm - QR.positionIndex - (QR.symbolRow - 1) / 2)), Qc = function (QI, Qm) {
                        var Qt = Qm - 1 - QI,
                          QB = Qj.mb(Q5[Qt], Q1, Q6[0].slotItemIndex + (QI + 1)),
                          QX = QB.node;
                        Qj.Qm.addChild(QX), QX.position = Qn.add(cc.v2(0, QI * Q4)), z++, q ? QX.runAction(Qj._b(x[Q1], -k * Q8 - Y, function () {
                          W(true, QI);
                        }, function () {
                          G(QB, true, QI);
                        })) : QX.runAction(Qj._b(Q7, -k * Q8 - Y * (QI + 1), function () {
                          {
                            W(true, 99);
                          }
                        }, function () {
                          {
                            G(QB, true, 99);
                          }
                        }));
                      }, Qj = this, Qi = (QF = 0, Q5.length); QF < Qi; QF++) Qc(QF, Qi);
                  }
                }
              }
            }
          }
        }, V.prototype.releaseAllSlotItem = function () {
          var N = this,
            q = this.ub;
          q.forEach(function (f) {
            return N.Ym.releaseSlotItem(f);
          }), q.length = 0;
        }, V.prototype._b = function (N, q, f, g) {
          {
            var l = this,
              K = M.slotHandler.isTurboMode() ? 5 * this.nb : this.nb,
              O = Math.sqrt(2 * -q / K),
              x = this.cb - q * this.hb,
              p = 0.5 * (this.rb + O * this.hb);
            return cc.sequence(cc.delayTime(N), cc.moveBy(O, cc.v2(0, q)).easing(cc.easeIn(this.ob)), cc.callFunc(function () {
              {
                l.lb && (f(), l.lb = false, B.delayCallback(0.05)(l.bb.bind(l)));
              }
            }), cc.moveBy(p, cc.v2(0, x)).easing(cc.easeOut(this.ab)), cc.moveBy(p, cc.v2(0, -x)).easing(cc.easeIn(this.ab)), cc.callFunc(g));
          }
        }, V.prototype.mb = function (N, q, f) {
          {
            var g = this.Ym.getSlotItem(N, false, q, f);
            return this.ub.push(g), g;
          }
        }, V.prototype.bb = function () {
          this.lb = true;
        }, V.prototype.vb = function (N, q) {
          {
            Z.mjDataSource.transactionModel.previousTransactionInfo.sc > 1 ? 0 === q ? X.playAudio(T.GENERAL_AUDIO.heartbeatSlowdrop.key) : N || X.playAudio(T.GENERAL_AUDIO.symbolCollapse.key) : X.playAudio(T.GENERAL_AUDIO.symbolCollapse.key);
          }
        }, V.prototype.fb = function (N, q, f, g) {
          {
            g();
          }
        }, V;
      }();
    exports.default = C, cc._RF.pop();
  }
}
module.exports = ShiftSlotHandler;
