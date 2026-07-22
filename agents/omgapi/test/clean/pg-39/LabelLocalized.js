// module: LabelLocalized
// Cocos 模块函数,参数 (require, module, exports) = (l, module, exports)
function LabelLocalized(l, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "f5f30hTmFFOcLgg2elp0I0D", "LabelLocalized")) {
    exports.__esModule = true, exports.default = undefined;
    var y = cc.Class({
      'extends': cc.Component,
      'editor': false,
      'properties': {
        'key': {
          'tooltip': false,
          'default': '',
          'notify': function () {
            this.rc();
          }
        }
      },
      'onLoad': function () {
        this.ac = this.node.getComponent(cc.Label), this.ac || (this.ac = this.node.getComponent(cc.RichText)), this.rc();
      },
      'rc': function () {
        var B = this.ac;
        B && (B.string = shell.I18n.t(this.key));
      }
    });
    exports.default = y, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = LabelLocalized;
