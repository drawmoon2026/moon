// module: NavigationBar
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function NavigationBar(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "0dc7dijGWtKO4QKzl8UL9Pz", "NavigationBar")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
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
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = NavigationBar;
