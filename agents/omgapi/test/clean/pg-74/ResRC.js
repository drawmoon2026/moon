// module: ResRC
// Cocos 模块函数,参数 (require, module, exports) = (F, module)
function ResRC(F, module) {
  'use strict';

  if (!cc._RF.push(module, "741a8m7jWlDQowhgiMh2U/V", "ResRC")) {
    var j = {};
    j.unloadBundleAsset = "releaseBundleAsset";
    j.unload = "release";
    j.unloadBundle = "releaseBundle";
    j.deleteBundle = "removeBundle";
    j.loadByBundleAsset = "loadBundleAsset";
    j.loadRemoteBySingle = "loadRemoteSingle";
    var I = function (B, X) {
      var Z = {};
      for (var T in X) B.hasOwnProperty(T) ? Z[B[T]] = X[T] : Z[T] = X[T];
      return Z;
    }(j, System.get("common").ResRC);
    for (var m in I) I.hasOwnProperty(m) && (module.exports[m] = I[m]);
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = ResRC;
