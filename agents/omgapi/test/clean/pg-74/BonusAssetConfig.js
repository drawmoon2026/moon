// module: BonusAssetConfig
// Cocos 模块函数,参数 (require, module, exports) = (m, B, X)
function BonusAssetConfig(m, B, X) {
  'use strict';

  if (!cc._RF.push(B, "8935bDsi8lNBqAOuycnrTEt", "BonusAssetConfig")) {
    var Z = {};
    Z.value = true;
    Object.defineProperty(X, "__esModule", Z), X.bonusAssetConfig = undefined;
    var T = {};
    T.name = "remaining_free_spin_controller";
    T.url = "load_res/remaining_free_spin_controller";
    T.type = cc.Prefab;
    T.isLocalized = false;
    var M = {};
    M.name = "free_spin_controller";
    M.url = "load_res/free_spin_controller";
    M.type = cc.Prefab;
    M.isLocalized = false;
    var C = {};
    C.name = "free_spin_effect_controller";
    C.url = "load_res/free_spin_effect_controller";
    C.type = cc.Prefab;
    C.isLocalized = false;
    var V = {};
    V.name = "free_spins";
    V.url = "texture/free_spins/free_spins";
    V.type = cc.SpriteAtlas;
    V.isLocalized = true;
    var N = [T, M, C, V];
    X.bonusAssetConfig = N, cc._RF.pop();
  }
}
module.exports = BonusAssetConfig;
