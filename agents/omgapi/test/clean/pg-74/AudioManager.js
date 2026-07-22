// module: AudioManager
// Cocos 模块函数,参数 (require, module, exports) = (Z, V, q)
function AudioManager(Z, V, q) {
  'use strict';

  if (!cc._RF.push(V, "6a5f8k2CmxLcIKeoijbk69G", "AudioManager")) {
    var K = {};
    K.value = true;
    Object.defineProperty(q, "__esModule", K), q.stopVocal = q.scheduleVocals = q.unscheduleVocals = q.resetIdleVocals = q.getIdleVocals = q.setWinCount = q.getWinCount = q.playVocal = q.fadeAudio = q.setAudioVolume = q.pauseAudio = q.stopAudio = q.playAudio = q.audioId = q.vox = q.generalGameAudio = q.updatePlayRate = q.crossFadeAudio = q.toggleEffectMuted = q.toggleMusicMuted = q.GeneralAudioPool = q.releaseAudioPool = q.releaseAudio = q.loadAudio = q.toggleAudioGameStarted = q.unregisterAudio = q.registerAudio = q.init = q.AUDIO_TYPE = q.multiWinVocals = q.winVocals = q.randomVocals = undefined;
    var Y = Z("GameAudioAdapter"),
      z = Z("SettingMenuHelper"),
      W = Z("RtConfig"),
      J = Z("NoSoundAdapter"),
      Q0 = Z("AudioConstant"),
      Q1 = Z("Utils"),
      Q2 = Object.create(null);
    q.GeneralAudioPool = Q2;
    var Q3 = Object.create(null),
      Q4 = Object.create(null);
    q.audioId = Q4;
    var Q5 = {};
    Q5.SOUND = 0;
    Q5.MUSIC = 1;
    var Q6 = [],
      Q7 = 1;
    q.AUDIO_TYPE = Q8, q.randomVocals = [Q0.VOX.voxRandom01.key, Q0.VOX.voxRandom02.key, Q0.VOX.voxRandom03.key, Q0.VOX.voxRandom04.key, Q0.VOX.voxRandom05.key, Q0.VOX.voxRandom06.key, Q0.VOX.voxRandom07.key, Q0.VOX.voxRandom08.key, Q0.VOX.voxRandom09.key, Q0.VOX.voxRandom10.key, Q0.VOX.voxRandom11.key, Q0.VOX.voxRandom12.key], q.winVocals = [Q0.VOX.voxPayoutFacai.key, Q0.VOX.voxPayoutHongzhong.key, Q0.VOX.voxPayoutBaiban.key, Q0.VOX.voxPayout8wan.key, Q0.VOX.voxPayout5tong.key, Q0.VOX.voxPayout5tiao.key, Q0.VOX.voxPayout3tong.key, Q0.VOX.voxPayout2tong.key, Q0.VOX.voxPayout2tiao.key], q.multiWinVocals = [Q0.VOX.voxPayoutMultiSym01.key, Q0.VOX.voxPayoutMultiSym02.key];
    var Q9,
      QQ = false,
      QF = false,
      QR = __spread(q.randomVocals),
      Qn = 0,
      Qc = undefined,
      Qj = 3,
      Qi = "audio/";
    Q2.bgm_mg = undefined, Q2.bgm_fs = undefined;
    var QI,
      Qm,
      Qt = ["bgm_mg", "bgm_fs"];
    q.generalGameAudio = QI, q.vox = Qm, q.init = function () {
      var Qs;
      Object.keys(Qs = Q2).forEach(function (Qb) {
        var QL = -1 !== Qt.indexOf(Qb) ? Q8.MUSIC : Q8.SOUND;
        Qs[Qb] = QB(Qb, QL);
      }), Q2.bgm_mg.setLoop(true), Q2.bgm_fs.setLoop(true), cc.game.on(cc.game.EVENT_HIDE, Qh), cc.game.on(cc.game.EVENT_SHOW, Qg), q.generalGameAudio = QI = QX("general_audio", Q8.SOUND, Q0.GENERAL_AUDIO), q.vox = Qm = QX("vox", Q8.SOUND, Q0.VOX), QN(true), Qq(true);
    }, q.registerAudio = function (Qs, Qb) {
      {
        var QL = Qb ? Q8.MUSIC : Q8.SOUND;
        if (QQ) {
          var QH = z.settingMenuHelper.soundEnable;
          Qs.setMute(QH);
        }
        return Q3[QL] || (Q3[QL] = []), Q3[QL].push(Qs), Qs.setRate(Q7), QL;
      }
    }, q.unregisterAudio = function (Qs, Qb) {
      var QL = Q3[Qb],
        QH = QL.indexOf(Qs);
      if (-1 === QH) throw Error("Audio Manager :: unRegisterAudio : audio not found");
      QL.splice(QH, 1);
    }, q.setAudioVolume = function (Qs, Qb, QL) {
      undefined === QL && (QL = QI), Q4[Qs] && !QL.isPlaying(Q4[Qs]) || QL && QL.setVolume(Qb, Q4[Qs]);
    }, q.fadeAudio = function (Qs, Qb, QL, QH, QU) {
      {
        undefined === QU && (QU = QI), Q4[Qs] && !QU.isPlaying(Q4[Qs]) || QU && QU.fade(Qb, QL, QH, Q4[Qs]);
      }
    }, q.playAudio = function (Qs, Qb, QL) {
      QT(Q0.GENERAL_AUDIO, QI, Qs, Qb, QL);
    }, q.playVocal = QC, q.stopAudio = QV, q.pauseAudio = function (Qs, Qb) {
      undefined === Qb && (Qb = QI), QM(Qs, Qb) && Qb && Qb.pause(Q4[Qs]);
    }, q.toggleAudioGameStarted = function () {
      {
        QQ = true, QN(!z.settingMenuHelper.soundEnable), Qq(!z.settingMenuHelper.soundEnable);
      }
    }, q.toggleMusicMuted = QN, q.toggleEffectMuted = Qq, q.crossFadeAudio = function (Qs, Qb, QL) {
      undefined === QL && (QL = 1), Qb.setVolume(0), Qb.play(), Qb.fade(0, QL, 1000), 0 === Qs.getVolume() ? Qs.stop() : (Qs.fade(Qs.getVolume(), 0, 1000), Qs.once("fade", function () {
        Qs.stop();
      }));
    }, q.updatePlayRate = function (Qs) {
      for (var Qb in Q3) {
        {
          if (Q3[Qb]) for (var QL = Q3[Qb], QH = 0, QU = QL.length; QH < QU; QH++) QL[QH].setRate(Qs);
          Q7 = Qs;
        }
      }
    }, q.loadAudio = function (Qs, Qb) {
      {
        var QL = function () {
            Qs.off("loaderror", QH), Qb && Qb();
          },
          QH = function (QU, Qr) {
            Qs.off("load", QL), Qb && Qb(Qr, QU);
          };
        return Qs.once("load", QL), Qs.once("loaderror", QH), Qs.load();
      }
    }, q.releaseAudioPool = function (Qs) {
      Object.keys(Qs).forEach(function (Qb) {
        Qf(Qs[Qb]);
      });
    }, q.releaseAudio = Qf, q.setWinCount = function (Qs) {
      Qn = Qs;
    }, q.getWinCount = function () {
      return Qn;
    }, q.getIdleVocals = Ql, q.resetIdleVocals = QK, q.scheduleVocals = QO, q.stopVocal = function () {
      {
        Q9 && QV(Q9);
      }
    }, q.unscheduleVocals = Qp, cc._RF.pop();
  }
  function QB(Qs, Qb) {
    undefined === Qb && (Qb = Q8.SOUND);
    var QL = {
      'preload': false,
      'src': QZ("mp3/" + Qs),
      'mute': true
    };
    return '1' === W.cs_Launch.noAudio ? new J.default(QL) : new Y.default(QL, Qb);
  }
  function QX(Qs, Qb, QL) {
    undefined === Qb && (Qb = Q8.SOUND);
    var QH = {
      'preload': false,
      'src': QZ("mp3/" + Qs),
      'mute': true,
      'sprite': QL
    };
    return '1' === W.cs_Launch.noAudio ? new J.default(QH) : new Y.default(QH, Qb);
  }
  function QZ(Qs) {
    return Qi + Qs;
  }
  function QT(Qs, Qb, QL, QH, QU) {
    Qs.hasOwnProperty(QL) && (QU ? Qb && Qb.play(Q4[QL]) : (Q4[QL] = Qb && Qb.play(QL), QH && Qb && Qb.setLoop(true, Q4[QL])));
  }
  function QM(Qs, Qb) {
    {
      return undefined === Qb && (Qb = QI), Q4[Qs] && Qb.isPlaying(Q4[Qs]);
    }
  }
  function QC(Qs, Qb, QL) {
    QT(Q0.VOX, Qm, Qs, Qb, QL);
  }
  function QV(Qs, Qb) {
    {
      undefined === Qb && (Qb = QI), QM(Qs, Qb) && Qb && Qb.stop(Q4[Qs]);
    }
  }
  function QN(Qs) {
    undefined === Qs && (Qs = false), Q3[Q8.MUSIC] && Q3[Q8.MUSIC].map(function (Qb) {
      {
        Qb.setMute(Qs);
      }
    });
  }
  function Qq(Qs) {
    undefined === Qs && (Qs = false), Q3[Q8.SOUND] && Q3[Q8.SOUND].map(function (Qb) {
      Qb.setMute(Qs);
    });
  }
  function Qf(Qs) {
    {
      return Qs.unload();
    }
  }
  function Qh() {
    QF || (QF = true, Object.keys(Q2).forEach(function (Qs) {
      {
        var Qb = Q2[Qs];
        Qb.pause(), Q6.push(Qb);
      }
    }), QI.pause(), Q6.push(QI), Qm.pause(), Q6.push(Qm));
  }
  function Qg() {
    if (QF) {
      {
        QF = false;
        for (var Qs = 0, Qb = Q6.length; Qs < Qb; Qs++) Q6[Qs].resume();
        Q6.length = 0;
      }
    }
  }
  function Ql() {
    return QR;
  }
  function QK() {
    QR = __spread(q.randomVocals);
  }
  function QO() {
    {
      Qc = Q1.delayCallback(Qj)(Qx), Qj >= 12 && (Qj = 3), Qj += 3;
    }
  }
  function Qx() {
    Qp(), Ql().length <= 0 && QK(), QC(Ql()[0]), Q9 = Ql().splice(0, 1), QO();
  }
  function Qp() {
    {
      Qc && Qc(), Qc = undefined;
    }
  }
}
module.exports = AudioManager;
