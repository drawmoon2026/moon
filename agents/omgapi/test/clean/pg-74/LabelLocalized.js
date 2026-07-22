// module: LabelLocalized
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, c)
function LabelLocalized(Q, F, c) {
  'use strict';

  if (!cc["_RF"]["push"](F, "f5f30hTmFFOcLgg2elp0I0D", "LabelLocalized")) {
    {
      c["__esModule"] = !0, c["default"] = void 0;
      var j = cc["Class"]({
        'extends': cc["Component"],
        'editor': !1,
        'properties': {
          'key': {
            'tooltip': !1,
            'default': '',
            'notify': function () {
              this['ec']();
            }
          }
        },
        'onLoad': function () {
          this['nc'] = this["node"]["getComponent"](cc["Label"]), this['nc'] || (this['nc'] = this["node"]["getComponent"](cc["RichText"])), this['ec']();
        },
        'ec': function () {
          {
            var I = this['nc'];
            I && (I["string"] = shell["I18n"]['t'](this["key"]));
          }
        }
      });
      c["default"] = j, F["exports"] = c["default"], cc["_RF"]["pop"]();
    }
  }
}
module.exports = LabelLocalized;
