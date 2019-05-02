'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable no-nested-ternary */

/**
 * @ignore
 */
const {
  sqrt: msqrt, min, max, ceil,
  floor, abs: mabs, exp, 
  log, cos, sin, tan,
  asin, acos, atan, atan2,
  cosh, sinh, tanh, sign: msign,
} = Math;
/**
 * @ignore
 */
const EPSILON = 1e-5;
/**
 * @ignore
 */
const eq = (a, b) => mabs(a - b) <= EPSILON * max(1, mabs(a), mabs(b));
/**
 * @ignore
 */
const isNumber = x => typeof x === 'number';
/**
 * @ignore
 */
const isComplex = x => (x instanceof Array && isNumber(x[0]) && isNumber(x[1]))
  || x instanceof Float32Array
  || x instanceof Float64Array;

const zero = () => [0, 0];

const conjugate = c => (isComplex(c)
  ? [c[0], -c[1]]
  : zero());

const negate = c => (isComplex(c)
  ? [-c[0], -c[1]]
  : zero());

const add = (a, b) => {
  if (isComplex(a)) {
    if (isComplex(b)) {
      return [
        a[0] + b[0],
        a[1] + b[1],
      ];
    }
    if (isNumber(b)) {
      return [
        a[0] + b,
        a[1],
      ];
    }
  } else if (isComplex(b) && isNumber(a)) {
    return [
      a + b[0],
      b[1],
    ];
  }
  return zero();
};

const sub = (a, b) => {
  if (isComplex(a)) {
    if (isComplex(b)) {
      return [
        a[0] - b[0],
        a[1] - b[1],
      ];
    }
    if (isNumber(b)) {
      return [
        a[0] - b,
        a[1],
      ];
    }
  } else if (isComplex(b) && isNumber(a)) {
    return [
      a - b[0],
      b[1],
    ];
  }
  return zero();
};

const mul = (a, b) => {
  if (isComplex(a)) {
    if (isComplex(b)) {
      return [
        a[0] * b[0] - a[1] * b[1],
        a[0] * b[1] + a[1] * b[0],
      ];
    }
    if (isNumber(b)) {
      return [
        a[0] * b,
        a[1] * b,
      ];
    }
  } else if (isComplex(b) && isNumber(a)) {
    return [
      a * b[0],
      a * b[1],
    ];
  }
  return zero();
};

const div = (a, b) => {
  if (isComplex(a)) {
    if (isComplex(b)) {
      return [
        (a[0] * b[0] + a[1] * b[1]) / b[0] * b[0] + b[1] * b[1],
        (a[1] * b[0] - a[0] * b[1]) / b[0] * b[0] + b[1] * b[1],
      ];
    }
    if (isNumber(b)) {
      return [
        a[0] / b,
        a[1] / b,
      ];
    }
  } else if (isComplex(b) && isNumber(a)) {
    return [
      a / b[0],
      a / b[1],
    ];
  }
  return zero();
};

const reciprocal = c => (isComplex(c)
  ? [
    c[0] / (c[0] * c[0] + c[1] * c[1]),
    -c[1] / (c[0] * c[0] + c[1] * c[1]),
  ]
  : zero()
);

const abs = c => (isComplex(c)
  ? msqrt(c[0] * c[0] + c[1] * c[1])
  : zero()
);

const arg = c => (isComplex(c)
  ? atan2(c[1], c[0])
  : zero()
);

const euler = x => (isNumber(x)
  ? [cos(x), sin(x)]
  : zero()
);

const sign = c => (isNumber(c)
  ? [msign(c), 0]
  : euler(arg(c))
);

const sqrt = c => (isNumber(c)
  ? [msqrt(c), 0]
  : (eq(c[1], 0)
    ? [msqrt(c[0]), 0]
    : [
      msqrt((c[0] + msqrt(c[0] + c[0] * c[1] + c[1])) / 2),
      msqrt((-c[0] + msqrt(c[0] + c[0] * c[1] + c[1])) / 2) * msign(c[1]),
    ]
  )
);

exports.abs = abs;
exports.add = add;
exports.arg = arg;
exports.conjugate = conjugate;
exports.div = div;
exports.euler = euler;
exports.isComplex = isComplex;
exports.mul = mul;
exports.negate = negate;
exports.reciprocal = reciprocal;
exports.sign = sign;
exports.sqrt = sqrt;
exports.sub = sub;
exports.zero = zero;
