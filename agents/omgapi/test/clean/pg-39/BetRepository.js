// module: BetRepository
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function BetRepository(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "14dfa+lfKlIS5vAzSig9n4q", "BetRepository")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), exports.BetRepository = undefined;
      var x = function () {
        function C(H, r) {
          this.ht = H, this.rt = r, this.at = H, this.ut = r;
        }
        return Object.defineProperty(C.prototype, "selectedBetLevelValue", {
          'get': function () {
            return this.at;
          },
          'set': function (H) {
            {
              this.at = H;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "selectedBetSizeValue", {
          'get': function () {
            return this.ut;
          },
          'set': function (H) {
            this.ut = H;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "betLevelValue", {
          'get': function () {
            {
              return this.ht;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "betSizeValue", {
          'get': function () {
            return this.rt;
          },
          'enumerable': false,
          'configurable': true
        }), C.prototype.updateRemoteBets = function (H, r) {
          this.ht = this.at = H, this.rt = this.ut = r;
        }, C;
      }();
      exports.BetRepository = x, cc._RF.pop();
    }
  }
}
module.exports = BetRepository;
