// module: AnimParticleSystem
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function AnimParticleSystem(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "3142aQR/shASo2uVaU35yUL", "AnimParticleSystem")) {
    exports.__esModule = true, exports.default = undefined;
    var x = {};
    x.LINEAR = 0;
    x.GRAVITY = 1;
    var C = {};
    C.None = 0;
    C.EaseIn = 1;
    C.EaseOut = 2;
    C.EaseInOut = 3;
    C.EaseSineIn = 4;
    C.EaseSineOut = 5;
    C.EaseSineInOut = 6;
    C.EaseCubicActionIn = 7;
    C.EaseCubicActionOut = 8;
    C.EaseCubicActionInOut = 9;
    C.EaseQuinticActionIn = 10;
    C.EaseQuinticActionOut = 11;
    C.EaseQuinticActionInOut = 12;
    C.EaseCircleActionIn = 13;
    C.EaseCircleActionOut = 14;
    C.EaseCircleActionInOut = 15;
    C.EaseElasticIn = 16;
    C.EaseElasticOut = 17;
    C.EaseElasticInOut = 18;
    C.EaseQuadraticActionIn = 19;
    C.EaseQuadraticActionOut = 20;
    C.EaseQuadraticActionInOut = 21;
    C.EaseQuarticActionIn = 22;
    C.EaseQuarticActionOut = 23;
    C.EaseQuarticActionInOut = 24;
    C.EaseExponentialIn = 25;
    C.EaseExponentialOut = 26;
    C.EaseExponentialInOut = 27;
    C.EaseBackIn = 28;
    C.EaseBackOut = 29;
    C.EaseBackInOut = 30;
    C.EaseBounceIn = 31;
    C.EaseBounceOut = 32;
    C.EaseBounceInOut = 33;
    var H = require("AnimParticleSystemUtils"),
      V = cc.Enum(x),
      M = [undefined, {
        'proto': cc.easeIn,
        'needParam': true
      }, {
        'proto': cc.easeOut,
        'needParam': true
      }, {
        'proto': cc.easeInOut,
        'needParam': true
      }, {
        'proto': cc.easeSineIn
      }, {
        'proto': cc.easeSineOut
      }, {
        'proto': cc.easeSineInOut
      }, {
        'proto': cc.easeCubicActionIn
      }, {
        'proto': cc.easeCubicActionOut
      }, {
        'proto': cc.easeCubicActionInOut
      }, {
        'proto': cc.easeQuinticActionIn
      }, {
        'proto': cc.easeQuinticActionOut
      }, {
        'proto': cc.easeQuinticActionInOut
      }, {
        'proto': cc.easeCircleActionIn
      }, {
        'proto': cc.easeCircleActionOut
      }, {
        'proto': cc.easeCircleActionInOut
      }, {
        'proto': cc.easeElasticIn,
        'needParam': true
      }, {
        'proto': cc.easeElasticOut,
        'needParam': true
      }, {
        'proto': cc.easeElasticInOut,
        'needParam': true
      }, {
        'proto': cc.easeQuadraticActionIn
      }, {
        'proto': cc.easeQuadraticActionOut
      }, {
        'proto': cc.easeQuadraticActionInOut
      }, {
        'proto': cc.easeQuarticActionIn
      }, {
        'proto': cc.easeQuarticActionOut
      }, {
        'proto': cc.easeQuarticActionInOut
      }, {
        'proto': cc.easeExponentialIn
      }, {
        'proto': cc.easeExponentialOut
      }, {
        'proto': cc.easeExponentialInOut
      }, {
        'proto': cc.easeBackIn
      }, {
        'proto': cc.easeBackOut
      }, {
        'proto': cc.easeBackInOut
      }, {
        'proto': cc.easeBounceIn
      }, {
        'proto': cc.easeBounceOut
      }, {
        'proto': cc.easeBounceInOut
      }],
      q = cc.Enum(C),
      m = false,
      D = cc.Class({
        'extends': cc.Component,
        'properties': {
          'particlePrefab': {
            'type': cc.Prefab,
            'tooltip': false,
            'default': undefined
          },
          'duration': {
            'type': cc.Float,
            'tooltip': false,
            'default': -1
          },
          'emissionRate': {
            'type': cc.Float,
            'tooltip': false,
            'default': 20,
            'min': 0.1
          },
          'life': {
            'type': cc.Float,
            'tooltip': false,
            'default': 1,
            'min': 0.1
          },
          'lifeVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'particleCount': {
            'type': cc.Integer,
            'tooltip': false,
            'default': 10,
            'min': 1
          },
          'particleMovementEasing': {
            'type': q,
            'tooltip': false,
            'default': q.None
          },
          'particleMovementParam': {
            'visible': function () {
              {
                var W;
                return true === (null == (W = M[this.particleMovementEasing]) ? undefined : W.needParam);
              }
            },
            'type': cc.Float,
            'tooltip': false,
            'default': 0,
            'min': 0
          },
          'startColor': {
            'tooltip': false,
            'default': cc.Color.WHITE
          },
          'startColorVar': {
            'tooltip': false,
            'default': cc.Color.BLACK
          },
          'endColor': {
            'tooltip': false,
            'default': cc.Color.WHITE
          },
          'endColorVar': {
            'tooltip': false,
            'default': cc.Color.BLACK
          },
          'colorDelayRatio': {
            'visible': function () {
              {
                return !this.startColor.equals(this.endColor) || !this.startColorVar.equals(this.endColorVar);
              }
            },
            'type': cc.Float,
            'tooltip': false,
            'range': [0, 1, 0.01],
            'default': 0
          },
          'colorEasing': {
            'visible': function () {
              return !this.startColor.equals(this.endColor) || !this.startColorVar.equals(this.endColorVar);
            },
            'type': q,
            'tooltip': false,
            'default': q.None
          },
          'colorEasingParam': {
            'visible': function () {
              {
                var W;
                return true === (null == (W = M[this.colorEasing]) ? undefined : W.needParam);
              }
            },
            'type': cc.Float,
            'tooltip': false,
            'default': 0,
            'min': 0
          },
          'startAlpha': {
            'type': cc.Float,
            'tooltip': false,
            'default': 255,
            'min': 0
          },
          'startAlphaVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endAlpha': {
            'type': cc.Float,
            'tooltip': false,
            'default': 255,
            'min': 0
          },
          'endAlphaVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'alphaDelayRatio': {
            'visible': function () {
              return this.startAlpha !== this.endAlpha || this.startAlphaVar !== this.endAlphaVar;
            },
            'type': cc.Float,
            'tooltip': false,
            'range': [0, 1, 0.01],
            'default': 0
          },
          'alphaEasing': {
            'visible': function () {
              return this.startAlpha !== this.endAlpha || this.startAlphaVar !== this.endAlphaVar;
            },
            'type': q,
            'tooltip': false,
            'default': q.None
          },
          'alphaEasingParam': {
            'visible': function () {
              var W;
              return true === (null == (W = M[this.alphaEasing]) ? undefined : W.needParam);
            },
            'type': cc.Float,
            'tooltip': false,
            'default': 0,
            'min': 0
          },
          'speed': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'speedVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'angle': {
            'type': cc.Float,
            'tooltip': false,
            'default': 90
          },
          'angleVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 20
          },
          'startScale': {
            'type': cc.Float,
            'tooltip': false,
            'default': 1
          },
          'startScaleVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endScale': {
            'type': cc.Float,
            'tooltip': false,
            'default': 1
          },
          'endScaleVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endScaleIsFactor': {
            'visible': function () {
              return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
            },
            'default': false
          },
          'scaleDelayRatio': {
            'visible': function () {
              return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
            },
            'type': cc.Float,
            'tooltip': false,
            'range': [0, 1, 0.01],
            'default': 0
          },
          'scaleEasing': {
            'visible': function () {
              {
                return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
              }
            },
            'type': q,
            'tooltip': false,
            'default': q.None
          },
          'scaleEasingParam': {
            'visible': function () {
              var W;
              return true === (null == (W = M[this.scaleEasing]) ? undefined : W.needParam);
            },
            'type': cc.Float,
            'tooltip': false,
            'default': 0,
            'min': 0
          },
          'startSpin': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'startSpinVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endSpin': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endSpinVar': {
            'type': cc.Float,
            'tooltip': false,
            'default': 0
          },
          'endSpinLocked': {
            'visible': function () {
              return 0 !== this.startSpinVar;
            },
            'default': false
          },
          'spinDelayRatio': {
            'visible': function () {
              return this.startSpin !== this.endSpin || this.startSpinVar !== this.endSpinVar;
            },
            'type': cc.Float,
            'tooltip': false,
            'range': [0, 1, 0.01],
            'default': 0
          },
          'spinEasing': {
            'visible': function () {
              {
                return this.startSpin !== this.endSpin || this.startSpinVar !== this.endSpinVar;
              }
            },
            'type': q,
            'tooltip': false,
            'default': q.None
          },
          'spinEasingParam': {
            'visible': function () {
              var W;
              return true === (null == (W = M[this.spinEasing]) ? undefined : W.needParam);
            },
            'type': cc.Float,
            'tooltip': false,
            'default': 0,
            'min': 0
          },
          'sourcePos': {
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'sourcePosVar': {
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'emitterMode': {
            'tooltip': false,
            'default': V.LINEAR,
            'type': V
          },
          'gravityVec': {
            'visible': function () {
              return this.emitterMode === V.GRAVITY;
            },
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'gravityVecVar': {
            'visible': function () {
              {
                return this.emitterMode === V.GRAVITY;
              }
            },
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'nodePool': {
            'visible': false,
            'get': function () {
              return this._ || (this._ = new cc.NodePool("AnimParticleSystemPoolHandler")), this._;
            }
          },
          'p': []
        },
        'resetSystem': function (W) {
          {
            undefined === W && (W = true), W && this.stopSystem(true);
            var k = 1 / this.emissionRate;
            this.unschedule(this.m);
            var z = this.duration;
            0 !== z && (this.schedule(this.m, k), z > 0 && (this.unschedule(this.stopSystem), this.scheduleOnce(this.stopSystem, z)));
          }
        },
        'stopSystem': function (W) {
          var k = this;
          undefined === W && (W = false), this.unschedule(this.m), this.unschedule(this.stopSystem), true === W && (this.p.forEach(function (z) {
            z.stopAllActions(), k.nodePool.put(z);
          }), this.p = []);
        },
        'm': function () {
          {
            if (!(this.p.length >= this.particleCount)) {
              {
                var W = this.nodePool.get();
                W || (W = cc.instantiate(this.particlePrefab)), this.S(W), W.getComponent(cc.Animation).play();
              }
            }
          }
        },
        'getLife': function (W, k) {
          {
            return (0, H.getRandomFromRange)(W, k);
          }
        },
        'getSpeed': function (W, k) {
          return (0, H.getRandomFromRange)(W, k);
        },
        'getEmissionAngle': function (W, k) {
          return (0, H.getRandomFromRange)(W, k);
        },
        'getSourceStartScale': function (W, k) {
          {
            return (0, H.getRandomFromRange)(W, k);
          }
        },
        'getSourceStartSpinAngle': function (W, k) {
          return (0, H.getRandomFromRange)(W, k);
        },
        'getSourceStartAlpha': function (W, k) {
          {
            return (0, H.getRandomFromRange)(W, k);
          }
        },
        'getSourceStartColor': function (W, k) {
          {
            return k.equals(cc.Color.BLACK) ? W : new cc.Color((0, H.getRandomFromRange)(W.getR(), k.getR()), (0, H.getRandomFromRange)(W.getG(), k.getG()), (0, H.getRandomFromRange)(W.getB(), k.getB()));
          }
        },
        'getSourceStartPosition': function (W, k) {
          {
            return cc.v2((0, H.getRandomFromRange)(W.x, k.x), (0, H.getRandomFromRange)(W.y, k.y));
          }
        },
        'getSourceEndScale': function (W, k, z, L) {
          return (L ? W : 1) * (0, H.getRandomFromRange)(k, z);
        },
        'getSourceEndSpinAngle': function (W, k, z, L) {
          return L ? W : (0, H.getRandomFromRange)(k, z);
        },
        'getSourceEndAlpha': function (W, k, z) {
          return (0, H.getRandomFromRange)(k, z);
        },
        'getSourceEndColor': function (W, k, z) {
          return z.equals(cc.Color.BLACK) ? k : new cc.Color((0, H.getRandomFromRange)(k.getR(), z.getR()), (0, H.getRandomFromRange)(k.getG(), z.getG()), (0, H.getRandomFromRange)(k.getB(), z.getB()));
        },
        'getSourceEndPositionLinear': function (W, k, z, L) {
          var v = Math.cos(z / 180 * Math.PI) * k * L,
            b = Math.sin(z / 180 * Math.PI) * k * L;
          return cc.v2(W.x + v, W.y + b);
        },
        'getSourceEndPositionGravity': function (W, k, z, L, U, Q) {
          {
            var R = Math.cos(z / 180 * Math.PI) * k * L,
              T = Math.sin(z / 180 * Math.PI) * k * L,
              Y = (0, H.getRandomFromRange)(U.x, Q.x),
              X = (0, H.getRandomFromRange)(U.y, Q.y),
              E = W.x + R / 3,
              F = W.y + T / 3,
              N = W.x + R / 3 * 2,
              Z = W.y + T / 3 * 2,
              G = W.x + R,
              J = W.y + T,
              K = 60 * L / 3,
              l0 = (0, H.getAccelerationDistance)(Y, K),
              l1 = (0, H.getAccelerationDistance)(X, K),
              l2 = 2 * K,
              l3 = (0, H.getAccelerationDistance)(Y, l2),
              l4 = (0, H.getAccelerationDistance)(X, l2),
              l5 = 3 * K,
              l6 = (0, H.getAccelerationDistance)(Y, l5),
              l7 = (0, H.getAccelerationDistance)(X, l5),
              l8 = G > 0 ? 1 : -1;
            return [cc.v2(E - l0 * l8, F - l1), cc.v2(N - l3 * l8, Z - l4), cc.v2(G - l6 * l8, J - l7)];
          }
        },
        'getMoveAction': function (W, k, z, L, v) {
          var b = cc.moveTo(z, k);
          return L ? b.easing(L(v)) : b;
        },
        'getBezierAction': function (W, k, z, L, v) {
          var b = cc.bezierTo(z, k);
          return L ? b.easing(L(v)) : b;
        },
        'getScaleAction': function (W, k, z, L, v, b) {
          if (!v) return 0 === L ? cc.scaleTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.scaleTo(z - L * z, k));
          var U = v(b);
          return 0 === L ? cc.scaleTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.scaleTo(z - L * z, k).easing(U));
        },
        'getRotateAction': function (W, k, z, L, v, b) {
          {
            if (!v) return 0 === L ? cc.rotateTo(z, -k) : cc.sequence(cc.delayTime(L * z), cc.rotateTo(z - L * z, -k));
            var U = v(b);
            return 0 === L ? cc.rotateTo(z, -k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.rotateTo(z - L * z, -k).easing(U));
          }
        },
        'getFadeAction': function (W, k, z, L, v, b) {
          if (!v) return 0 === L ? cc.fadeTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.fadeTo(z - L * z, k));
          var U = v(b);
          return 0 === L ? cc.fadeTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.fadeTo(z - L * z, k).easing(U));
        },
        'getTintAction': function (W, k, z, L, v, b) {
          if (!v) return 0 === L ? cc.tintTo(z, k) : cc.sequence(cc.delayTime(L * z), cc.tintTo(z - L * z, k));
          var U = v(b);
          return 0 === L ? cc.tintTo(z, k).easing(U) : cc.sequence(cc.delayTime(L * z), cc.tintTo(z - L * z, k).easing(U));
        },
        'onDestroy': function () {
          this.nodePool.clear();
        },
        'S': function (W) {
          var k = this,
            z = this.getLife(this.life, this.lifeVar),
            L = this.getSourceStartPosition(this.sourcePos, this.sourcePosVar);
          W.setPosition(L);
          var U = this.getSpeed(this.speed, this.speedVar),
            Q = this.getEmissionAngle(this.angle, this.angleVar),
            R = [];
          if (this.emitterMode === V.LINEAR) {
            var T,
              Y = this.getSourceEndPositionLinear(L, U, Q, z);
            R.push(this.getMoveAction(W.position, Y, z, null == (T = M[this.particleMovementEasing]) ? undefined : T.proto, this.particleMovementEasingParam));
          } else if (this.emitterMode === V.GRAVITY) {
            var X,
              E = this.getSourceEndPositionGravity(L, U, Q, z, this.gravityVec, this.gravityVecVar);
            R.push(this.getBezierAction(W.position, E, z, null == (X = M[this.particleMovementEasing]) ? undefined : X.proto, this.particleMovementEasingParam));
          }
          var F,
            N = W.scale = this.getSourceStartScale(this.startScale, this.startScaleVar),
            Z = this.getSourceEndScale(N, this.endScale, this.endScaleVar, this.endScaleIsFactor);
          N !== Z && this.scaleDelayRatio < 1 && R.push(this.getScaleAction(N, Z, z, this.scaleDelayRatio, null == (F = M[this.scaleEasing]) ? undefined : F.proto, this.scaleEasingParam));
          var G,
            J = W.angle = this.getSourceStartSpinAngle(-this.startSpin, -this.startSpinVar),
            K = this.getSourceEndSpinAngle(J, -this.endSpin, -this.endSpinVar, this.endSpinLocked);
          J !== K && this.spinDelayRatio < 1 && R.push(this.getRotateAction(J, K, z, this.spinDelayRatio, null == (G = M[this.spinEasing]) ? undefined : G.proto, this.spinEasingParam));
          var l0,
            l1 = W.opacity = this.getSourceStartAlpha(this.startAlpha, this.startAlphaVar),
            l2 = this.getSourceEndAlpha(l1, this.endAlpha, this.endAlphaVar);
          if (l1 !== l2 && this.alphaDelayRatio < 1 && R.push(this.getFadeAction(l1, l2, z, this.alphaDelayRatio, null == (l0 = M[this.alphaEasing]) ? undefined : l0.proto, this.alphaEasingParam)), !(this.startColor.equals(cc.Color.WHITE) && this.startColorVar.equals(cc.Color.BLACK) && this.endColor.equals(cc.Color.WHITE) && this.endColorVar.equals(cc.Color.BLACK))) {
            var l3,
              l4 = W.color = this.getSourceStartColor(this.startColor, this.startColorVar),
              l5 = this.getSourceEndColor(l4, this.endColor, this.endColorVar);
            !l4.equals(l5) && this.colorDelayRatio < 1 && R.push(this.getTintAction(l4, l5, z, this.colorDelayRatio, null == (l3 = M[this.colorEasing]) ? undefined : l3.proto, this.colorEasingParam));
          }
          var l6,
            l7 = R.length;
          l7 > 1 ? l6 = cc.sequence(cc.spawn(R), cc.callFunc(function () {
            k.C(W);
          }, this)) : 1 === l7 && (l6 = cc.sequence(R[0], cc.callFunc(function () {
            {
              k.C(W);
            }
          }, this))), this.p.push(W), this.node.addChild(W), W.runAction(l6);
        },
        'M': function (W, k) {
          return m || (m = true), 0.5 * W * k * k;
        },
        'C': function (W) {
          var k = this.p,
            z = k.indexOf(W);
          z > -1 && k.splice(z, 1), this.nodePool.put(W);
        }
      });
    exports.default = D, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = AnimParticleSystem;
