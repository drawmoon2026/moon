// module: ResRC
// Cocos 模块函数,参数 (require, module, exports) = (F, c)
function ResRC(F, c) {
  'use strict';

  if (!cc["_RF"]["push"](c, "741a8m7jWlDQowhgiMh2U/V", "ResRC")) {
    var j = {};
    j["unloadBundleAsset"] = "releaseBundleAsset";
    j["unload"] = "release";
    j["unloadBundle"] = "releaseBundle";
    j["deleteBundle"] = "removeBundle";
    j["loadByBundleAsset"] = "loadBundleAsset";
    j["loadRemoteBySingle"] = "loadRemoteSingle";
    var I = function (B, X) {
      var Z = {};
      for (var T in X) B["hasOwnProperty"](T) ? Z[B[T]] = X[T] : Z[T] = X[T];
      return Z;
    }(j, System["get"]("common")["ResRC"]);
    for (var m in I) I["hasOwnProperty"](m) && (c["exports"][m] = I[m]);
    c["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = ResRC;
