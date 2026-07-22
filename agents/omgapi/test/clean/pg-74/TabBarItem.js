// module: TabBarItem
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function TabBarItem(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "cd0fbm4LQBEVL5LzWleSsGj", "TabBarItem")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.icon = undefined, V.titleLabel = undefined, V.tintColor = undefined, V.selectedTintColor = undefined, V.VS = undefined, V.zS = undefined, V.KS = undefined, V.qS = undefined, V.QS = undefined, V;
        }
        return __extends(C, M), Object.defineProperty(C.prototype, "tag", {
          'get': function () {
            return this.qS;
          },
          'set': function (V) {
            this.qS = V;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "selectAction", {
          'set': function (V) {
            this.QS = V;
          },
          'enumerable': false,
          'configurable': true
        }), C.prototype.init = function (V, N, q, f) {
          V && (this.titleLabel.string = V), N && (this.icon.spriteFrame = N, this.VS = N), this.KS = q, this.qS = f, this.zS = false;
        }, C.prototype.setupTouchAction = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.nt, this), this.node.on(cc.Node.EventType.TOUCH_END, this.ct, this);
        }, C.prototype.setTintColor = function (V) {
          this.zS || (this.icon.node.color = V, this.titleLabel.node.color = V), this.tintColor = V;
        }, C.prototype.setSelectedTintColor = function (V) {
          this.zS && (this.icon.node.color = V, this.titleLabel.node.color = V), this.selectedTintColor = V;
        }, C.prototype.setTitleAttributes = function (V) {
          var N = V.getFontSize(),
            q = V.getNormalFontColor(),
            f = V.getFontName(),
            h = V.getLineHeight();
          this.titleLabel.fontSize = N, this.titleLabel.font = f, this.titleLabel.node.color = q, this.titleLabel.lineHeight = h;
        }, C.prototype.setSelect = function () {
          var V = this.selectedTintColor;
          this.icon.node.color = V, this.titleLabel.node.color = V, this.icon.spriteFrame = this.KS, this.zS = true;
        }, C.prototype.setUnselected = function () {
          var V = this.tintColor;
          this.icon.node.color = V, this.titleLabel.node.color = V, this.icon.spriteFrame = this.VS, this.zS = false;
        }, C.prototype.animFinish = function () {}, C.prototype.nt = function () {}, C.prototype.ct = function (V) {
          V.stopPropagation(), this.QS && this.QS();
        }, __decorate([Z(cc.Sprite)], C.prototype, "icon", undefined), __decorate([Z(cc.Label)], C.prototype, "titleLabel", undefined), __decorate([Z(cc.Color)], C.prototype, "tintColor", undefined), __decorate([Z(cc.Color)], C.prototype, "selectedTintColor", undefined), __decorate([X], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = TabBarItem;
