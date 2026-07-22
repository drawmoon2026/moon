// module: TabBarItem
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function TabBarItem(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "cd0fbm4LQBEVL5LzWleSsGj", "TabBarItem")) {
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
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = TabBarItem;
