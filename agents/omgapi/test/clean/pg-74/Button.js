// module: Button
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function Button(j, I, m) {
  'use strict';

  if (!cc._RF.push(I, "0a573tIV9xKS4qfPLe+tVuo", "Button")) {
    var B = {};
    B.value = true;
    Object.defineProperty(m, "__esModule", B);
    var X = {};
    X.Hs = "_transitionFinished";
    X.Os = "_fromColor";
    X.Is = "_toColor";
    X.Ts = "_fromScale";
    X.Es = "_toScale";
    X.Ns = "_pressed";
    var Z = cc.Enum(X),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property,
      V = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.targetCascadeOpacity = false, f.Gs = undefined, f;
        }
        return __extends(q, N), q.prototype.update = function (f) {
          var g = this.target;
          if (!this[Z.Hs] && (this.transition === cc.Button.Transition.COLOR || this.transition === cc.Button.Transition.SCALE)) {
            {
              this.time += f;
              var l,
                K,
                O,
                x = 1;
              if (this.duration > 0 && (x = this.time / this.duration), x >= 1 && (x = 1, this[Z.Hs] = true), this.transition === cc.Button.Transition.COLOR) {
                this[Z.Os].a = g.opacity;
                var p = this[Z.Os].lerp(this[Z.Is], x);
                g.opacity = p.a, p.a = 255, g.color = p;
              } else this.transition === cc.Button.Transition.SCALE && (g.scale = (l = this[Z.Ts], K = this[Z.Es], O = x, cc.misc.lerp(l, K, O)));
            }
          }
        }, q.prototype.Di = function (f) {
          this.Gs = this.node.parent.convertToWorldSpaceAR(f.touch.getLocation()), N.prototype.Di.call(this, f);
        }, q.prototype.ks = function (f) {
          var g;
          this[Z.Ns] ? (g = this.node.parent.convertToWorldSpaceAR(f.touch.getLocation()), this.Gs.sub(g).mag() > 50 && (this[Z.Ns] = false, this.Gs = undefined)) : this.Gs = undefined;
          N.prototype.ks.call(this, f);
        }, __decorate([C(cc.Boolean)], q.prototype, "targetCascadeOpacity", undefined), __decorate([M], q);
      }(cc.Button);
    m.default = V, cc._RF.pop();
  }
}
module.exports = Button;
