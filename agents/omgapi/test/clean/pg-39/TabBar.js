// module: TabBar
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function TabBar(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "b8f7436fYdNnryqvtnVtqIL", "TabBar")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
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
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = TabBar;
