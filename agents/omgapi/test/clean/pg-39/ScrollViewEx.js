// module: ScrollViewEx
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function ScrollViewEx(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4403eAPMfNGO4d5KWMoVrU7", "ScrollViewEx")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.speed = 1, q.freeCells = [], q.snapPause = false, q.snapDone = false, q.nextAppearTarget = undefined, q.snapFinish = undefined, q.clickPos = undefined, q.clickTarget = undefined, q.timer = undefined, q;
        }
        return __extends(M, V), M.prototype.cellsInsertToParent = function () {
          {
            if (this.freeCells.length) {
              {
                for (var q = 0; q < this.content.children.length; q++) this.freeCells[q] && (this.freeCells[q].cellNode.parent = this.content.children[q], this.freeCells[q].cellNode.setPosition(cc.v2(0, 0)), this.Ai(this.freeCells[q].cellNode));
                this.freeCells = [];
              }
            }
            this.snapPause = false;
          }
        }, M.prototype.cellsPullOutFromParent = function (q) {
          {
            if (!this.freeCells.length) {
              this.snapPause = true, this.setSnapDone(true);
              for (var m = 0; m < this.content.children.length; m++) {
                var D = this.content.children[m].children[0];
                if (D) {
                  {
                    this.hf(D);
                    var W = D.parent.convertToWorldSpaceAR(D.getPosition()),
                      k = q.convertToNodeSpaceAR(W);
                    this.freeCells[m] = {
                      'cellNode': D,
                      'position': k,
                      'index': m
                    }, this.freeCells[m].cellNode.setPosition(k), this.freeCells[m].cellNode.parent = q;
                  }
                }
              }
              return this.freeCells;
            }
          }
        }, M.prototype.setSnapPause = function (q) {
          this.snapPause = q;
        }, M.prototype.setSnapDone = function (q) {
          this.snapDone = q;
        }, M.prototype.isSnapDone = function () {
          return this.snapDone;
        }, M.prototype.setNextAppearTarget = function (q) {
          {
            this.nextAppearTarget = q;
          }
        }, M.prototype.setSnapFinish = function (q) {
          this.snapFinish = q;
        }, M.prototype.Ai = function (q) {
          q.on(cc.Node.EventType.TOUCH_START, this.rf, this), q.on(cc.Node.EventType.TOUCH_END, this.af, this), q.on(cc.Node.EventType.TOUCH_MOVE, this.uf, this), q.on(cc.Node.EventType.TOUCH_CANCEL, this.lf, this);
        }, M.prototype.hf = function (q) {
          q.off(cc.Node.EventType.TOUCH_START, this.rf, this), q.off(cc.Node.EventType.TOUCH_END, this.af, this), q.off(cc.Node.EventType.TOUCH_MOVE, this.uf, this), q.off(cc.Node.EventType.TOUCH_CANCEL, this.lf, this);
        }, M.prototype.rf = function (q) {
          var m = q.touch.getLocation();
          this.clickPos = m, this.clickTarget = q.currentTarget, this.timer = Date.now();
        }, M.prototype.uf = function () {}, M.prototype.af = function (q) {
          if (this.clickPos) {
            var m = q.touch.getLocation(),
              D = this.clickPos,
              W = this.timer;
            this.Hi(D.x, m.x) || this.Hi(D.y, m.y) || !W || Date.now() - W > 120 || this.ff();
          }
        }, M.prototype.lf = function (q) {
          {
            if (this.clickPos) {
              var m = q.touch.getLocation(),
                D = this.clickPos,
                W = this.timer;
              this.Hi(D.x, m.x) || this.Hi(D.y, m.y) || !W || Date.now() - W > 120 || this.ff();
            }
          }
        }, M.prototype.Hi = function (q, m) {
          return Math.abs(m - q) > 100;
        }, M.prototype.Oi = function (q, m, D, W, k) {
          {
            if (undefined === W && (W = 1), z = cc.v2(q, 0), L = cc.v2(m, 0), z.sub(L).mag() <= 1) return this.setSnapDone(true), k && k(), m;
            var z,
              L,
              v = q + (D *= W) * (m - q);
            return q >= m ? v <= m && (k && k(), v = m) : v >= m && (k && k(), v = m), v;
          }
        }, M.prototype.ff = function () {
          this.clickTarget = undefined, this.timer = undefined;
        }, __decorate([H(cc.Integer)], M.prototype, "speed", undefined), __decorate([C], M);
      }(cc.ScrollView);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = ScrollViewEx;
