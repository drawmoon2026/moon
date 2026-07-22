// module: TabBar
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function TabBar(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "b8f7436fYdNnryqvtnVtqIL", "TabBar")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = cc._decorator,
        X = B.ccclass,
        Z = B.property,
        T = function (M) {
          function C() {
            var V = null !== M && M.apply(this, arguments) || this;
            return V.background = undefined, V.itemsContainer = undefined, V.shadow = undefined, V.TS = [], V.YS = undefined, V;
          }
          return __extends(C, M), C.prototype.onLoad = function () {
            var V = this.node.width,
              N = this.node.height;
            this.background.node.setContentSize(V, N), this.shadow.node.width = V, this.itemsContainer.setContentSize(V, N);
          }, C.prototype.setItems = function (V, N) {
            {
              var q = V.length;
              if (q && !(q < 1)) {
                {
                  for (var f = 0; f < q; f++) {
                    var h = V[f];
                    h.setupTouchAction(), h.node.parent = this.itemsContainer;
                  }
                  var g = V[N];
                  g.setSelect(), this.YS = g, this.TS = V;
                }
              }
            }
          }, C.prototype.getItems = function () {
            return this.TS;
          }, C.prototype.selectItemAtIndex = function (V) {
            if (!(V >= this.TS.length)) {
              var N = this.YS;
              N && N.setUnselected();
              var q = this.TS[V];
              q.setSelect(), this.YS = q;
            }
          }, C.prototype.getSelectedItem = function () {
            {
              return this.YS;
            }
          }, C.prototype.setTintColor = function (V) {
            {
              for (var N = this.TS, q = 0; q < N.length; q++) N[q].setTintColor(V);
            }
          }, C.prototype.setSelectedTintColor = function (V) {
            for (var N = this.TS, q = 0; q < N.length; q++) N[q].setSelectedTintColor(V);
          }, C.prototype.setTitleAttributes = function (V) {
            for (var N = this.TS, q = 0; q < N.length; q++) N[q].setTitleAttributes(V);
          }, C.prototype.setBackgroundImage = function (V, N) {
            {
              V ? this.background.spriteFrame = V : N && (this.background.node.color = N);
            }
          }, __decorate([Z(cc.Sprite)], C.prototype, "background", undefined), __decorate([Z(cc.Node)], C.prototype, "itemsContainer", undefined), __decorate([Z(cc.Sprite)], C.prototype, "shadow", undefined), __decorate([X], C);
        }(cc.Component);
      exports.default = T, cc._RF.pop();
    }
  }
}
module.exports = TabBar;
