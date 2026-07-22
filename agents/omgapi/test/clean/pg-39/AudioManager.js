// module: AudioManager
// Cocos 模块函数,参数 (require, module, exports) = (require, B, exports)
function AudioManager(require, B, exports) {
  'use strict';

  if (!cc._RF.push(B, "3b2af3+HL5O7bowqEmzJqBf", "AudioManager")) {
    var H = {};
    H.value = true;
    Object.defineProperty(exports, "__esModule", H), exports.crossFadeAudio = exports.updatePlayRate = exports.toggleEffectMuted = exports.toggleMusicMuted = exports.GeneralAudioPool = exports.releaseAudioPool = exports.releaseAudio = exports.loadAudio = exports.toggleAudioGameStarted = exports.unregisterAudio = exports.registerAudio = exports.init = exports.AUDIO_TYPE = undefined;
    var V = require("GameAudioAdapter"),
      M = require("SettingMenuHelper"),
      q = require("RtConfig"),
      D = require("NoSoundAdapter"),
      W = Object.create(null);
    exports.GeneralAudioPool = W;
    var k = {};
    k.SOUND = 0;
    k.MUSIC = 1;
    var z = Object.create(null);
    exports.AUDIO_TYPE = L;
    var U = false,
      Q = false,
      w = 1,
      P = [],
      R = "audio/";
    W.bgm_mg = undefined, W.prize_win = undefined, W.prize_win_end = undefined, W.bgm_bigwin = undefined, W.bgm_bigwin_cue = undefined, W.bgm_bigwin_end = undefined, W.bgm_bigwin_firework = undefined, W.spin_btn = undefined, W.spin_reel_quickstop = undefined, W.spin_reel_stop = undefined, W.spin_reel = undefined, W.fs_fastspin = undefined, W.reel_nearwin_slowdown = undefined, W.sym_wild_normal = undefined, W.sym_wild_nowin = undefined, W.cha_afterbigwin = undefined, W.cha_inactive = undefined, W.cha_prize_win_a = undefined, W.cha_prize_win_b = undefined, W.cha_prize_win_c = undefined, W.feature_raise_angpau = undefined, W.angpau_shiny = undefined, W.sym_wild_x2 = undefined, W.sym_wild_x5 = undefined, W.sym_wild_x10 = undefined;
    var T = ["bgm_mg", "bgm_bigwin"];
    exports.init = function () {
      {
        var A;
        Object.keys(A = W).forEach(function (G) {
          var J = -1 !== T.indexOf(G) ? L.MUSIC : L.SOUND;
          A[G] = Y(G, J);
        }), W.bgm_mg.setLoop(true), W.spin_reel.setLoop(true), X(true), E(true), cc.game.on(cc.game.EVENT_HIDE, N), cc.game.on(cc.game.EVENT_SHOW, Z);
      }
    }, exports.registerAudio = function (A, G) {
      {
        var J = G ? L.MUSIC : L.SOUND;
        if (U) {
          var K = M.settingMenuHelper.soundEnable;
          A.setMute(K);
        }
        return z[J] || (z[J] = []), z[J].push(A), A.setRate(w), J;
      }
    }, exports.unregisterAudio = function (A, G) {
      var J = z[G],
        K = J.indexOf(A);
      if (-1 === K) throw Error("Audio Manager :: unRegisterAudio : audio not found");
      J.splice(K, 1);
    }, exports.updatePlayRate = function (A) {
      for (var G in z) if (z[G]) for (var J = z[G], K = 0, l0 = J.length; K < l0; K++) J[K].setRate(A);
      w = A;
    }, exports.toggleAudioGameStarted = function () {
      U = true, X(!M.settingMenuHelper.soundEnable), E(!M.settingMenuHelper.soundEnable);
    }, exports.toggleMusicMuted = X, exports.toggleEffectMuted = E, exports.crossFadeAudio = function (A, G, J) {
      {
        undefined === J && (J = 1), G.setVolume(0), G.play(), G.fade(0, J, 1000), 0 === A.getVolume() ? A.stop() : (A.fade(A.getVolume(), 0, 1000), A.once("fade", function () {
          A.stop();
        }));
      }
    }, exports.loadAudio = function (A, G) {
      var J = function () {
          A.off("loaderror", K), G && G();
        },
        K = function (l0, l1) {
          {
            A.off("load", J), G && G(l1, l0);
          }
        };
      return A.once("load", J), A.once("loaderror", K), A.load();
    }, exports.releaseAudioPool = function (A) {
      Object.keys(A).forEach(function (G) {
        F(A[G]);
      });
    }, exports.releaseAudio = F, cc._RF.pop();
  }
  function Y(A, G) {
    undefined === G && (G = L.SOUND);
    var J,
      K,
      l0 = {
        'preload': false,
        'src': (J = "mp3/" + A, K = R + J, K),
        'mute': true
      };
    return '1' === q.cs_Launch.noAudio ? new D.default(l0) : new V.default(l0, G);
  }
  function X(A) {
    {
      undefined === A && (A = false), z[L.MUSIC] && z[L.MUSIC].map(function (G) {
        G.setMute(A);
      });
    }
  }
  function E(A) {
    undefined === A && (A = false), z[L.SOUND] && z[L.SOUND].map(function (G) {
      G.setMute(A);
    });
  }
  function F(A) {
    {
      return A.unload();
    }
  }
  function N() {
    {
      if (!Q) {
        Q = true;
        var A = [];
        Object.keys(W).forEach(function (K) {
          A.push(W[K]);
        });
        for (var G = 0, J = A.length; G < J; G++) A[G].pause(), P.push(A[G]);
      }
    }
  }
  function Z() {
    if (Q) {
      Q = false;
      for (var A = 0, G = P.length; A < G; A++) P[A].resume();
      P.length = 0;
    }
  }
}
module.exports = AudioManager;
