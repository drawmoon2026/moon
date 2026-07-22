// module: NodePoolHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function NodePoolHandler(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "2bc29Fr7txALpAImtaamDcx", "NodePoolHandler")) {
    var I = {};
    I.value = true;
    Object.defineProperty(j, "__esModule", I), j.nodePoolHandler = j.NodePoolHandler = undefined;
    var m = function () {
      function X() {
        this.hf = Object.create(null);
      }
      return X.prototype.registerReusableItem = function (Z, T, M, C, V) {
        undefined === C && (C = 0), undefined === V && (V = C);
        var N = this.hf;
        if (V <= 0) throw Error("registerReusableItem error: maxSpawnCount cannot be less than or equal to 0");
        if (!(T instanceof cc.Prefab)) throw Error("registerReusableItem error: only accept prefab instance");
        if (Object.prototype.hasOwnProperty.call(N, Z)) throw Error("registerReusableItem error: registeredItems has defined " + Z);
        if (N[Z] = {
          'nodePool': new cc.NodePool(M),
          'prefab': T,
          'maxSpawnCount': V
        }, C > 0) for (var q = 0; q < C; q++) {
          var f = cc.instantiate(T);
          f.rf = T.data.uuid, this.ki(f, Z);
        }
      }, X.prototype.replaceReusableItem = function (Z, T, M, C, V) {
        undefined === C && (C = 0), undefined === V && (V = C), this.unregisterReusableItem(Z), this.registerReusableItem(Z, T, M, C, V);
      }, X.prototype.dequeueReusableItem = function (Z) {
        {
          var T = this.hf[Z],
            M = T.nodePool,
            C = T.prefab;
          if (M.size() <= 0) {
            {
              var V = cc.instantiate(C);
              return V.rf = C.data.uuid, V;
            }
          }
          return M.get();
        }
      }, X.prototype.enqueueReusableItem = function (Z, T) {
        var M = this.hf[T],
          C = M.nodePool,
          V = M.maxSpawnCount;
        C.size() < V ? this.ki(Z, T) : Z.destroy();
      }, X.prototype.unregisterReusableItem = function (Z) {
        this.clear(Z);
        var T = this.hf;
        this.hf = Object.keys(T).filter(function (M) {
          return M !== Z;
        }).reduce(function (M, C) {
          return M[C] = T[C], M;
        }, {});
      }, X.prototype.unregisterAllReusableItem = function () {
        var Z = this.hf;
        for (var T in Z) Object.prototype.hasOwnProperty.call(Z, T) && this.unregisterReusableItem(T);
      }, X.prototype.clear = function (Z) {
        this.hf[Z] && this.hf[Z].nodePool.clear();
      }, X.prototype.clearAll = function () {
        var Z = this.hf;
        for (var T in Z) Object.prototype.hasOwnProperty.call(Z, T) && this.clear(T);
      }, X.prototype.destroy = function () {
        {
          this.unregisterAllReusableItem();
        }
      }, X.prototype.ki = function (Z, T) {
        {
          var M = this.hf[T],
            C = M.nodePool,
            V = M.prefab;
          Z.rf === V.data.uuid ? (Z.removeFromParent(), C.put(Z)) : Z.destroy();
        }
      }, X;
    }();
    j.NodePoolHandler = m;
    var B = new m();
    j.nodePoolHandler = B, cc._RF.pop();
  }
}
module.exports = NodePoolHandler;
