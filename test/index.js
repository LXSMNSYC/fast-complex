/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import assert from 'assert';
import {
  conjugate, I, NAN, zero,
  negate, ONE, NI, abs,
  acos, equals, acosh, asinh,
  asin, atan, atanh, tanh,
  tan, sinh, sin, cos,
  cosh, ceil, floor, exp,
  ln, log10, sqrt, euler,
  polar, sign, add, div,
  mul,
  pow,
  sub,
  reciprocal,
  arg,
} from '../src';

describe('fast-complex', () => {
  /**
   *
   */
  describe('abs', () => {
    it('should return a number', () => {
      assert(typeof abs([1, 0]) === 'number');
    });
    it('should return the vector length of the complex', () => {
      assert(abs([1, 0]) === 1);
    });
    it('should return the same value if the given value is a number', () => {
      assert(abs(1) === 1);
    });
    it('should return NaN if the given value is not a complex.', () => {
      assert(isNaN(abs()));
    });
  });
  /**
   *
   */
  describe('acos', () => {
    it('should return an Array', () => {
      assert(acos([1, 0]) instanceof Array);
    });
    it('should return the inverse cosine of the complex', () => {
      assert(equals(acos([1, 1]), [0.9045568943023813, -1.0612750619050355]));
    });
    it('should return the inverse cosine complex of the given number', () => {
      assert(equals(acos(1), [Math.acos(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === acos());
    });
  });
  /**
   *
   */
  describe('acosh', () => {
    it('should return an Array', () => {
      assert(acosh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic inverse cosine of the complex', () => {
      assert(equals(acosh([1, 1]), [1.0612750619050355, 0.9045568943023813]));
    });
    it('should return the hyperbolic inverse cosine complex of the given number', () => {
      assert(equals(acosh(1), [Math.acosh(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === acosh());
    });
  });
  /**
   *
   */
  describe('add', () => {
    it('should return an Array', () => {
      assert(add([1, 1], [1, 1]) instanceof Array);
    });
    it('should return the sum of two complex', () => {
      assert.deepEqual(add([1, 1], [1, 1]), [2, 2]);
    });
    it('should return the sum of a complex and a number', () => {
      assert.deepEqual(add([1, 1], 1), [2, 1]);
    });
    it('should return the sum of a number and a complex', () => {
      assert.deepEqual(add(1, [1, 1]), [2, 1]);
    });
    it('should return the sum of a number and a number', () => {
      assert.deepEqual(add(1, 1), [2, 0]);
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === add());
    });
  });
  /**
   *
   */
  describe('arg', () => {
    const eq = (a, b) => Math.abs(a - b) <= 1e7 * Math.max(1, Math.abs(a), Math.abs(b));
    it('should return a number', () => {
      assert(typeof arg([1, 0]) === 'number');
    });
    it('should return the angle of the complex', () => {
      assert(eq(arg([1, 1]), 1.1071487177940904));
    });
    it('should return 0 if the given value is a number', () => {
      assert(eq(arg(1), 0));
    });
    it('should return NaN if the given value is not a complex.', () => {
      assert(isNaN(arg()));
    });
  });
  /**
   *
   */
  describe('asin', () => {
    it('should return an Array', () => {
      assert(asin([1, 0]) instanceof Array);
    });
    it('should return the inverse sine of the complex', () => {
      assert(equals(asin([1, 1]), [0.6662394324925153, 1.0612750619050355]));
    });
    it('should return the inverse sine complex of the given number', () => {
      assert(equals(asin(1), [Math.asin(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === asin());
    });
  });
  /**
   *
   */
  describe('asinh', () => {
    it('should return an Array', () => {
      assert(asinh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic inverse sine of the complex', () => {
      assert(equals(asinh([1, 1]), [1.0612750619050357, 0.6662394324925153]));
    });
    it('should return the hyperbolic inverse sine complex of the given number', () => {
      assert(equals(asinh(1), [Math.asinh(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === asinh());
    });
  });
  /**
   *
   */
  describe('atan', () => {
    it('should return an Array', () => {
      assert(atan([1, 0]) instanceof Array);
    });
    it('should return the inverse tangent of the complex', () => {
      assert(equals(atan([1, 1]), [1.0172219678978514, 0.40235947810852507]));
    });
    it('should return the inverse tangent complex of the given number', () => {
      assert(equals(atan(1), [Math.atan(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === atan());
    });
  });
  /**
   *
   */
  describe('atanh', () => {
    it('should return an Array', () => {
      assert(atanh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic inverse tangent of the complex', () => {
      assert(equals(atanh([1, 1]), [0.4023594781085251, 1.0172219678978514]));
    });
    it('should return the hyperbolic inverse tangent complex of the given number', () => {
      assert(equals(atanh(0.5), [Math.atanh(0.5), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === atanh());
    });
  });
  /**
   *
   */
  describe('ceil', () => {
    it('should return an Array', () => {
      assert(ceil([1, 0]) instanceof Array);
    });
    it('should return the ceiling of the complex', () => {
      assert(equals(ceil([0.5, 0.5]), [1, 1]));
    });
    it('should return the ceiling complex of the given number', () => {
      assert(equals(ceil(0.5), [Math.ceil(0.5), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === ceil());
    });
  });
  /**
   *
   */
  describe('conjugate', () => {
    it('should return an Array', () => {
      assert(conjugate(I) instanceof Array);
    });
    it('should negate the imaginary part of a complex', () => {
      assert.deepEqual(conjugate(I), NI);
    });
    it('should return an Array which real part is that of the value if the value is a number.', () => {
      assert.deepEqual(conjugate(1), ONE);
    });
    it('should return a NaN complex if the given value is not a complex.', () => {
      assert(conjugate() === NAN);
    });
  });
  /**
   *
   */
  describe('cos', () => {
    it('should return an Array', () => {
      assert(cos([1, 0]) instanceof Array);
    });
    it('should return the cosine of the complex', () => {
      assert(equals(cos([1, 1]), [0.8337300251311491, -0.9888977057628651]));
    });
    it('should return the cosine complex of the given number', () => {
      assert(equals(cos(1), [Math.cos(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === cos());
    });
  });
  /**
   *
   */
  describe('cosh', () => {
    it('should return an Array', () => {
      assert(cosh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic cosine of the complex', () => {
      assert(equals(cosh([1, 1]), [0.8337300251311491, 0.9888977057628651]));
    });
    it('should return the hyperbolic cosine complex of the given number', () => {
      assert(equals(cosh(1), [Math.cosh(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === cosh());
    });
  });
  /**
   *
   */
  describe('div', () => {
    it('should return an Array', () => {
      assert(div([1, 1], [1, 1]) instanceof Array);
    });
    it('should return the quotient of two complex', () => {
      assert.deepEqual(div([1, 1], [1, 1]), [1, 0]);
    });
    it('should return the quotient of a complex and a number', () => {
      assert.deepEqual(div([1, 1], 1), [1, 1]);
    });
    it('should return the quotient of a number and a complex', () => {
      assert.deepEqual(div(1, [1, 1]), [1, 1]);
    });
    it('should return the quotient of a number and a number', () => {
      assert.deepEqual(div(1, 1), [1, 0]);
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === div());
    });
  });
  /**
   *
   */
  describe('exp', () => {
    it('should return an Array', () => {
      assert(exp([1, 0]) instanceof Array);
    });
    it('should return the exp of the complex', () => {
      assert(equals(exp([1, 1]), [1.4686939399158851, 2.2873552871788423]));
    });
    it('should return the ceiling complex of the given number', () => {
      assert(equals(exp(1), [Math.exp(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === exp());
    });
  });
  /**
   *
   */
  describe('euler', () => {
    it('should return an Array', () => {
      assert(euler(1) instanceof Array);
    });
    it('should return the euler of the complex', () => {
      assert(equals(euler(1), [0.5403023058681398, 0.8414709848078965]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === euler());
    });
  });
  /**
   *
   */
  describe('floor', () => {
    it('should return an Array', () => {
      assert(floor([1, 0]) instanceof Array);
    });
    it('should return the floor of the complex', () => {
      assert(equals(floor([0.5, 0.5]), [0, 0]));
    });
    it('should return the ceiling complex of the given number', () => {
      assert(equals(floor(0.5), [Math.floor(0.5), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === floor());
    });
  });
  /**
   *
   */
  describe('ln', () => {
    it('should return an Array', () => {
      assert(ln([1, 0]) instanceof Array);
    });
    it('should return the ln of the complex', () => {
      assert(equals(ln([1, 1]), [0.34657359027997264, 0.7853981633974483]));
    });
    it('should return the ceiling complex of the given number', () => {
      assert(equals(ln(1), [Math.log(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === ln());
    });
  });
  /**
   *
   */
  describe('log10', () => {
    it('should return an Array', () => {
      assert(log10([1, 0]) instanceof Array);
    });
    it('should return the log10 of the complex', () => {
      assert(equals(log10([1, 1]), [0.15051499783199057, 0.3410940884604603]));
    });
    it('should return the ceiling complex of the given number', () => {
      assert(equals(log10(1), [Math.log10(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === log10());
    });
  });
  /**
   *
   */
  describe('mul', () => {
    it('should return an Array', () => {
      assert(mul([1, 1], [1, 1]) instanceof Array);
    });
    it('should return the product of two complex', () => {
      assert.deepEqual(mul([1, 1], [1, 0]), [1, 1]);
    });
    it('should return the product of a complex and a number', () => {
      assert.deepEqual(mul([1, 1], 1), [1, 1]);
    });
    it('should return the product of a number and a complex', () => {
      assert.deepEqual(mul(1, [1, 1]), [1, 1]);
    });
    it('should return the product of a number and a number', () => {
      assert.deepEqual(mul(1, 1), [1, 0]);
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === mul());
    });
  });
  /**
   *
   */
  describe('negate', () => {
    it('should return an Array', () => {
      assert(negate(ONE) instanceof Array);
    });
    it('should negate the real and imaginary part of a complex', () => {
      assert.deepEqual(negate([1, 1]), [-1, -1]);
    });
    it('should return an Array which real part is that of the value if the negated value is a number.', () => {
      assert.deepEqual(negate(1), [-1, 0]);
    });
    it('should return a NaN complex if the given value is not a complex.', () => {
      assert(negate() === NAN);
    });
  });
  /**
   *
   */
  describe('polar', () => {
    it('should return an Array', () => {
      assert(polar(1, 1) instanceof Array);
    });
    it('should return the polar of the complex', () => {
      assert(equals(polar(1, 1), [0.5403023058681398, 0.8414709848078965]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === polar());
    });
  });
  /**
   *
   */
  describe('pow', () => {
    it('should return an Array', () => {
      assert(pow([1, 1], [1, 1]) instanceof Array);
    });
    it('should return the power of two complex', () => {
      assert(equals(pow([1, 1], [1, 0]), [1, 1]));
    });
    it('should return the power of a complex and a number', () => {
      assert(equals(pow([1, 1], 1), [1, 1]));
    });
    it('should return the power of a number and a complex', () => {
      assert(equals(pow(1, [1, 1]), [1, 0]));
    });
    it('should return the power of a number and a number', () => {
      assert(equals(pow(1, 1), [1, 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === pow());
    });
  });
  /**
   *
   */
  describe('reciprocal', () => {
    it('should return an Array', () => {
      assert(reciprocal([1, 0]) instanceof Array);
    });
    it('should return the reciprocal of the complex', () => {
      assert(equals(reciprocal([1, 1]), [0.5, -0.5]));
    });
    it('should return the reciprocal complex of the given number', () => {
      assert(equals(reciprocal(1), [1, 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === reciprocal());
    });
  });
  /**
   *
   */
  describe('sign', () => {
    it('should return an Array', () => {
      assert(sign([1, 0]) instanceof Array);
    });
    it('should return the sine of the complex', () => {
      assert(equals(sign([1, 1]), [0.7071067811865475, 0.7071067811865475]));
    });
    it('should return the sine complex of the given number', () => {
      assert(equals(sign(1), [Math.sign(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === sign());
    });
  });
  /**
   *
   */
  describe('sin', () => {
    it('should return an Array', () => {
      assert(sin([1, 0]) instanceof Array);
    });
    it('should return the sine of the complex', () => {
      assert(equals(sin([1, 1]), [1.2984575814159773, 0.6349639147847361]));
    });
    it('should return the sine complex of the given number', () => {
      assert(equals(sin(1), [Math.sin(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === sin());
    });
  });
  /**
   *
   */
  describe('sinh', () => {
    it('should return an Array', () => {
      assert(sinh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic sine of the complex', () => {
      assert(equals(sinh([1, 1]), [0.6349639147847361, 1.2984575814159773]));
    });
    it('should return the hyperbolic sine complex of the given number', () => {
      assert(equals(sinh(1), [Math.sinh(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === sinh());
    });
  });
  /**
   *
   */
  describe('sqrt', () => {
    it('should return an Array', () => {
      assert(sqrt([1, 0]) instanceof Array);
    });
    it('should return the log10 of the complex', () => {
      assert(equals(sqrt([1, 1]), [1.09868411346781, 0.45508986056222733]));
    });
    it('should return the square root complex of the given number', () => {
      assert(equals(sqrt(1), [Math.sqrt(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === sqrt());
    });
  });
  /**
   *
   */
  describe('sub', () => {
    it('should return an Array', () => {
      assert(sub([1, 1], [1, 1]) instanceof Array);
    });
    it('should return the power of two complex', () => {
      assert(equals(sub([1, 1], [1, 1]), [0, 0]));
    });
    it('should return the power of a complex and a number', () => {
      assert(equals(sub([1, 1], 1), [0, 1]));
    });
    it('should return the power of a number and a complex', () => {
      assert(equals(sub(1, [1, 1]), [0, 1]));
    });
    it('should return the power of a number and a number', () => {
      assert(equals(sub(1, 1), [0, 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === sub());
    });
  });
  /**
   *
   */
  describe('tan', () => {
    it('should return an Array', () => {
      assert(tan([1, 0]) instanceof Array);
    });
    it('should return the tangent of the complex', () => {
      assert(equals(tan([1, 1]), [0.27175258531951174, 1.0839233273386948]));
    });
    it('should return the tangent complex of the given number', () => {
      assert(equals(tan(1), [Math.tan(1), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === tan());
    });
  });
  /**
   *
   */
  describe('tanh', () => {
    it('should return an Array', () => {
      assert(tanh([1, 0]) instanceof Array);
    });
    it('should return the hyperbolic tangent of the complex', () => {
      assert(equals(tanh([1, 1]), [1.0839233273386948, 0.27175258531951174]));
    });
    it('should return the hyperbolic tangent complex of the given number', () => {
      assert(equals(tanh(0.5), [Math.tanh(0.5), 0]));
    });
    it('should return NaN Complex if the given value is not a complex.', () => {
      assert(NAN === tanh());
    });
  });
  /**
   *
   */
  describe('zero', () => {
    it('should return an Array', () => {
      assert(zero() instanceof Array);
    });
    it('should return a complex with 0 real and imaginary part.', () => {
      const x = zero();
      assert(x[0] === 0 && x[1] === 0);
    });
  });
});
