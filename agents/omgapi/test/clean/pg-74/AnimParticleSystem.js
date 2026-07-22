// module: AnimParticleSystem
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function AnimParticleSystem(j, I, m) {
  'use strict';

  if (!cc._RF.push(I, "3142aQR/shASo2uVaU35yUL", "AnimParticleSystem")) {
    m.__esModule = true, m.default = undefined;
    var B = {};
    B.LINEAR = 0;
    B.GRAVITY = 1;
    var X = {};
    X.None = 0;
    X.EaseIn = 1;
    X.EaseOut = 2;
    X.EaseInOut = 3;
    X.EaseSineIn = 4;
    X.EaseSineOut = 5;
    X.EaseSineInOut = 6;
    X.EaseCubicActionIn = 7;
    X.EaseCubicActionOut = 8;
    X.EaseCubicActionInOut = 9;
    X.EaseQuinticActionIn = 10;
    X.EaseQuinticActionOut = 11;
    X.EaseQuinticActionInOut = 12;
    X.EaseCircleActionIn = 13;
    X.EaseCircleActionOut = 14;
    X.EaseCircleActionInOut = 15;
    X.EaseElasticIn = 16;
    X.EaseElasticOut = 17;
    X.EaseElasticInOut = 18;
    X.EaseQuadraticActionIn = 19;
    X.EaseQuadraticActionOut = 20;
    X.EaseQuadraticActionInOut = 21;
    X.EaseQuarticActionIn = 22;
    X.EaseQuarticActionOut = 23;
    X.EaseQuarticActionInOut = 24;
    X.EaseExponentialIn = 25;
    X.EaseExponentialOut = 26;
    X.EaseExponentialInOut = 27;
    X.EaseBackIn = 28;
    X.EaseBackOut = 29;
    X.EaseBackInOut = 30;
    X.EaseBounceIn = 31;
    X.EaseBounceOut = 32;
    X.EaseBounceInOut = 33;
    var Z = j("AnimParticleSystemUtils"),
      T = cc.Enum(B),
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
      C = cc.Enum(X),
      V = false,
      N = cc.Class({
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
            'type': C,
            'tooltip': false,
            'default': C.None
          },
          'particleMovementParam': {
            'visible': function () {
              var q;
              return true === (null == (q = M[this.particleMovementEasing]) ? undefined : q.needParam);
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
              return !this.startColor.equals(this.endColor) || !this.startColorVar.equals(this.endColorVar);
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
            'type': C,
            'tooltip': false,
            'default': C.None
          },
          'colorEasingParam': {
            'visible': function () {
              var q;
              return true === (null == (q = M[this.colorEasing]) ? undefined : q.needParam);
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
            'type': C,
            'tooltip': false,
            'default': C.None
          },
          'alphaEasingParam': {
            'visible': function () {
              var q;
              return true === (null == (q = M[this.alphaEasing]) ? undefined : q.needParam);
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
              {
                return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
              }
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
              return this.startScale !== this.endScale || this.startScaleVar !== this.endScaleVar;
            },
            'type': C,
            'tooltip': false,
            'default': C.None
          },
          'scaleEasingParam': {
            'visible': function () {
              {
                var q;
                return true === (null == (q = M[this.scaleEasing]) ? undefined : q.needParam);
              }
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
              return this.startSpin !== this.endSpin || this.startSpinVar !== this.endSpinVar;
            },
            'type': C,
            'tooltip': false,
            'default': C.None
          },
          'spinEasingParam': {
            'visible': function () {
              var q;
              return true === (null == (q = M[this.spinEasing]) ? undefined : q.needParam);
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
            'default': T.LINEAR,
            'type': T
          },
          'gravityVec': {
            'visible': function () {
              {
                return this.emitterMode === T.GRAVITY;
              }
            },
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'gravityVecVar': {
            'visible': function () {
              {
                return this.emitterMode === T.GRAVITY;
              }
            },
            'tooltip': false,
            'default': cc.v2(0, 0)
          },
          'nodePool': {
            'visible': false,
            'get': function () {
              return this.u || (this.u = new cc.NodePool("AnimParticleSystemPoolHandler")), this.u;
            }
          },
          'l': []
        },
        'resetSystem': function (q) {
          undefined === q && (q = true), q && this.stopSystem(true);
          var f = 1 / this.emissionRate;
          this.unschedule(this._);
          var g = this.duration;
          0 !== g && (this.schedule(this._, f), g > 0 && (this.unschedule(this.stopSystem), this.scheduleOnce(this.stopSystem, g)));
        },
        'stopSystem': function (q) {
          {
            var f = this;
            undefined === q && (q = false), this.unschedule(this._), this.unschedule(this.stopSystem), true === q && (this.l.forEach(function (g) {
              g.stopAllActions(), f.nodePool.put(g);
            }), this.l = []);
          }
        },
        '_': function () {
          if (!(this.l.length >= this.particleCount)) {
            {
              var q = this.nodePool.get();
              q || (q = cc.instantiate(this.particlePrefab)), this.m(q), q.getComponent(cc.Animation).play();
            }
          }
        },
        'getLife': function (q, f) {
          return (0, Z.getRandomFromRange)(q, f);
        },
        'getSpeed': function (q, f) {
          return (0, Z.getRandomFromRange)(q, f);
        },
        'getEmissionAngle': function (q, f) {
          return (0, Z.getRandomFromRange)(q, f);
        },
        'getSourceStartScale': function (q, f) {
          return (0, Z.getRandomFromRange)(q, f);
        },
        'getSourceStartSpinAngle': function (q, f) {
          return (0, Z.getRandomFromRange)(q, f);
        },
        'getSourceStartAlpha': function (q, f) {
          {
            return (0, Z.getRandomFromRange)(q, f);
          }
        },
        'getSourceStartColor': function (q, f) {
          return f.equals(cc.Color.BLACK) ? q : new cc.Color((0, Z.getRandomFromRange)(q.getR(), f.getR()), (0, Z.getRandomFromRange)(q.getG(), f.getG()), (0, Z.getRandomFromRange)(q.getB(), f.getB()));
        },
        'getSourceStartPosition': function (q, f) {
          return cc.v2((0, Z.getRandomFromRange)(q.x, f.x), (0, Z.getRandomFromRange)(q.y, f.y));
        },
        'getSourceEndScale': function (q, f, g, l) {
          return (l ? q : 1) * (0, Z.getRandomFromRange)(f, g);
        },
        'getSourceEndSpinAngle': function (q, f, g) {
          return (0, Z.getRandomFromRange)(f, g);
        },
        'getSourceEndAlpha': function (q, f, g) {
          return (0, Z.getRandomFromRange)(f, g);
        },
        'getSourceEndColor': function (q, f, g) {
          return g.equals(cc.Color.BLACK) ? f : new cc.Color((0, Z.getRandomFromRange)(f.getR(), g.getR()), (0, Z.getRandomFromRange)(f.getG(), g.getG()), (0, Z.getRandomFromRange)(f.getB(), g.getB()));
        },
        'getSourceEndPositionLinear': function (q, f, g, l) {
          var K = Math.cos(g / 180 * Math.PI) * f * l,
            O = Math.sin(g / 180 * Math.PI) * f * l;
          return cc.v2(q.x + K, q.y + O);
        },
        'getSourceEndPositionGravity': function (q, K, O, x, L, H) {
          var U = Math.cos(O / 180 * Math.PI) * K * x,
            k = Math.sin(O / 180 * Math.PI) * K * x,
            Y = (0, Z.getRandomFromRange)(L.x, H.x),
            z = (0, Z.getRandomFromRange)(L.y, H.y),
            P = q.x + U / 3,
            G = q.y + k / 3,
            W = q.x + U / 3 * 2,
            D = q.y + k / 3 * 2,
            J = q.x + U,
            E = q.y + k,
            Q0 = 60 * x / 3,
            Q1 = (0, Z.getAccelerationDistance)(Y, Q0),
            Q2 = (0, Z.getAccelerationDistance)(z, Q0),
            Q3 = 2 * Q0,
            Q4 = (0, Z.getAccelerationDistance)(Y, Q3),
            Q5 = (0, Z.getAccelerationDistance)(z, Q3),
            Q6 = 3 * Q0,
            Q7 = (0, Z.getAccelerationDistance)(Y, Q6),
            Q8 = (0, Z.getAccelerationDistance)(z, Q6),
            Q9 = J > 0 ? 1 : -1;
          return [cc.v2(P - Q1 * Q9, G - Q2), cc.v2(W - Q4 * Q9, D - Q5), cc.v2(J - Q7 * Q9, E - Q8)];
        },
        'getMoveAction': function (q, f, g, l, K) {
          {
            var O = cc.moveTo(g, f);
            return l ? O.easing(l(K)) : O;
          }
        },
        'getBezierAction': function (q, f, g, l, K) {
          var O = cc.bezierTo(g, f);
          return l ? O.easing(l(K)) : O;
        },
        'getScaleAction': function (q, f, g, l, K, O) {
          if (!K) return 0 === l ? cc.scaleTo(g, f) : cc.sequence(cc.delayTime(l * g), cc.scaleTo(g - l * g, f));
          var x = K(O);
          return 0 === l ? cc.scaleTo(g, f).easing(x) : cc.sequence(cc.delayTime(l * g), cc.scaleTo(g - l * g, f).easing(x));
        },
        'getRotateAction': function (q, f, g, l, K, O) {
          if (!K) return 0 === l ? cc.rotateTo(g, -f) : cc.sequence(cc.delayTime(l * g), cc.rotateTo(g - l * g, -f));
          var x = K(O);
          return 0 === l ? cc.rotateTo(g, -f).easing(x) : cc.sequence(cc.delayTime(l * g), cc.rotateTo(g - l * g, -f).easing(x));
        },
        'getFadeAction': function (q, f, g, l, K, O) {
          if (!K) return 0 === l ? cc.fadeTo(g, f) : cc.sequence(cc.delayTime(l * g), cc.fadeTo(g - l * g, f));
          var x = K(O);
          return 0 === l ? cc.fadeTo(g, f).easing(x) : cc.sequence(cc.delayTime(l * g), cc.fadeTo(g - l * g, f).easing(x));
        },
        'getTintAction': function (q, f, g, l, K, O) {
          {
            if (!K) return 0 === l ? cc.tintTo(g, f) : cc.sequence(cc.delayTime(l * g), cc.tintTo(g - l * g, f));
            var x = K(O);
            return 0 === l ? cc.tintTo(g, f).easing(x) : cc.sequence(cc.delayTime(l * g), cc.tintTo(g - l * g, f).easing(x));
          }
        },
        'm': function (q) {
          var K = this,
            O = this.getLife(this.life, this.lifeVar),
            x = this.getSourceStartPosition(this.sourcePos, this.sourcePosVar);
          q.setPosition(x);
          var L = this.getSpeed(this.speed, this.speedVar),
            H = this.getEmissionAngle(this.angle, this.angleVar),
            U = [];
          if (this.emitterMode === T.LINEAR) {
            {
              var k,
                Y = this.getSourceEndPositionLinear(x, L, H, O);
              U.push(this.getMoveAction(q.position, Y, O, null == (k = M[this.particleMovementEasing]) ? undefined : k.proto, this.particleMovementEasingParam));
            }
          } else if (this.emitterMode === T.GRAVITY) {
            {
              var z,
                P = this.getSourceEndPositionGravity(x, L, H, O, this.gravityVec, this.gravityVecVar);
              U.push(this.getBezierAction(q.position, P, O, null == (z = M[this.particleMovementEasing]) ? undefined : z.proto, this.particleMovementEasingParam));
            }
          }
          var G,
            W = q.scale = this.getSourceStartScale(this.startScale, this.startScaleVar),
            D = this.getSourceEndScale(W, this.endScale, this.endScaleVar, this.endScaleIsFactor);
          W !== D && this.scaleDelayRatio < 1 && U.push(this.getScaleAction(W, D, O, this.scaleDelayRatio, null == (G = M[this.scaleEasing]) ? undefined : G.proto, this.scaleEasingParam));
          var J,
            E = q.angle = this.getSourceStartSpinAngle(-this.startSpin, -this.startSpinVar),
            Q0 = this.getSourceEndSpinAngle(E, -this.endSpin, -this.endSpinVar);
          E !== Q0 && this.spinDelayRatio < 1 && U.push(this.getRotateAction(E, Q0, O, this.spinDelayRatio, null == (J = M[this.spinEasing]) ? undefined : J.proto, this.spinEasingParam));
          var Q1,
            Q2 = q.opacity = this.getSourceStartAlpha(this.startAlpha, this.startAlphaVar),
            Q3 = this.getSourceEndAlpha(Q2, this.endAlpha, this.endAlphaVar);
          if (Q2 !== Q3 && this.alphaDelayRatio < 1 && U.push(this.getFadeAction(Q2, Q3, O, this.alphaDelayRatio, null == (Q1 = M[this.alphaEasing]) ? undefined : Q1.proto, this.alphaEasingParam)), !(this.startColor.equals(cc.Color.WHITE) && this.startColorVar.equals(cc.Color.BLACK) && this.endColor.equals(cc.Color.WHITE) && this.endColorVar.equals(cc.Color.BLACK))) {
            {
              var Q4,
                Q5 = q.color = this.getSourceStartColor(this.startColor, this.startColorVar),
                Q6 = this.getSourceEndColor(Q5, this.endColor, this.endColorVar);
              !Q5.equals(Q6) && this.colorDelayRatio < 1 && U.push(this.getTintAction(Q5, Q6, O, this.colorDelayRatio, null == (Q4 = M[this.colorEasing]) ? undefined : Q4.proto, this.colorEasingParam));
            }
          }
          var Q7,
            Q8 = U.length;
          Q8 > 1 ? Q7 = cc.sequence(cc.spawn(U), cc.callFunc(function () {
            K.p(q);
          }, this)) : 1 === Q8 && (Q7 = cc.sequence(U[0], cc.callFunc(function () {
            K.p(q);
          }, this))), this.l.push(q), this.node.addChild(q), q.runAction(Q7);
        },
        'S': function (q, f) {
          return V || (V = true), 0.5 * q * f * f;
        },
        'p': function (q) {
          var f = this.l,
            g = f.indexOf(q);
          g > -1 && f.splice(g, 1), this.nodePool.put(q);
        }
      });
    m.default = N, I.exports = m.default, cc._RF.pop();
  }
}
module.exports = AnimParticleSystem;
