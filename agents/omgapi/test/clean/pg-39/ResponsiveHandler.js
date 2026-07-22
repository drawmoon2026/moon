// module: ResponsiveHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ResponsiveHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "01f6djrQWNE6qfr49hbxdjd", "ResponsiveHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("CanvasResizeBroadcaster"),
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
            m.updateAlignment();
          });
        }, __decorate([r([cc.Widget])], q.prototype, "fullScreenWidgets", undefined), __decorate([r(cc.Node)], q.prototype, "edgeMarker", undefined), __decorate([H], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = ResponsiveHandler;
