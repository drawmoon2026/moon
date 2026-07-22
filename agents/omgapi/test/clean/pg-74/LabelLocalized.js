// module: LabelLocalized
// Cocos 模块函数,参数 (require, module, exports) = (Q, module, exports)
function LabelLocalized(Q, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "f5f30hTmFFOcLgg2elp0I0D", "LabelLocalized")) {
    {
      exports.__esModule = true, exports.default = undefined;
      var j = cc.Class({
        'extends': cc.Component,
        'editor': false,
        'properties': {
          'key': {
            'tooltip': false,
            'default': '',
            'notify': function () {
              this.ec();
            }
          }
        },
        'onLoad': function () {
          this.nc = this.node.getComponent(cc.Label), this.nc || (this.nc = this.node.getComponent(cc.RichText)), this.ec();
        },
        'ec': function () {
          {
            var I = this.nc;
            I && (I.string = shell.I18n.t(this.key));
          }
        }
      });
      exports.default = j, module.exports = exports.default, cc._RF.pop();
    }
  }
}
module.exports = LabelLocalized;
