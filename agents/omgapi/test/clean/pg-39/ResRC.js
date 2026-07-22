// module: ResRC
// Cocos 模块函数,参数 (require, module, exports) = (j, module)
function ResRC(j, module) {
  'use strict';

  if (!cc._RF.push(module, "741a8m7jWlDQowhgiMh2U/V", "ResRC")) {
    var y = {};
    y.r0 = "releaseBundleAsset";
    y.r1 = "release";
    y.r2 = "releaseBundle";
    y.r3 = "removeBundle";
    y.r4 = "loadBundleAsset";
    y.r5 = "loadRemoteSingle";
    var B = function (C, H) {
      var r = {};
      for (var V in DEBUG, H) C.hasOwnProperty(V) ? r[C[V]] = H[V] : r[V] = H[V];
      return DEBUG, r;
    }(y, System.get("common").ResRC);
    for (var x in B) B.hasOwnProperty(x) && (module.exports[x] = B[x]);
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = ResRC;
