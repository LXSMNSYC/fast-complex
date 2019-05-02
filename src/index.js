/* eslint-disable no-nested-ternary */

/**
 * @ignore
 */
const {
  sqrt: msqrt, min, max, ceil: mceil,
  floor: mfloor, abs: mabs, exp: mexp,
  log: mlog, cos: mcos, sin: msin, tan: mtan,
  asin: masin, acos: macos, atan: matan, atan2: matan2,
  cosh: mcosh, sinh: msinh, tanh: mtanh, sign: msign,
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
export const isComplex = x => (x instanceof Array && isNumber(x[0]) && isNumber(x[1]))
  || x instanceof Float32Array
  || x instanceof Float64Array;

export const zero = () => [0, 0];

export const conjugate = c => (isComplex(c) && [c[0], -c[1]]) || zero();

export const negate = c => (isComplex(c) && [-c[0], -c[1]]) || zero();

export const add = (a, b) => (
  (isComplex(a) && (
    (isComplex(b) && [a[0] + b[0], a[1] + b[1]])
    || (isNumber(b) && [a[0] + b, a[1]])
    || zero()
  ))
  || (isComplex(b) && isNumber(a) && [a + b[0], b[1]])
  || zero()
);

export const sub = (a, b) => (
  (isComplex(a) && (
    (isComplex(b) && [a[0] - b[0], a[1] - b[1]])
    || (isNumber(b) && [a[0] - b, a[1]])
    || zero()
  ))
  || (isComplex(b) && isNumber(a) && [a - b[0], b[1]])
  || zero()
);

export const mul = (a, b) => (
  (isComplex(a) && (
    (isComplex(b) && [
      a[0] * b[0] - a[1] * b[1],
      a[0] * b[1] + a[1] * b[0],
    ])
    || (isNumber(b) && [
      a[0] * b,
      a[1] * b,
    ])
    || zero()
  ))
  || (isComplex(b) && isNumber(a) && [
    a * b[0],
    a * b[1],
  ])
  || zero()
);

export const div = (a, b) => (
  (isComplex(a) && (
    (isComplex(b) && [
      (a[0] * b[0] + a[1] * b[1]) / b[0] * b[0] + b[1] * b[1],
      (a[1] * b[0] - a[0] * b[1]) / b[0] * b[0] + b[1] * b[1],
    ])
    || (isNumber(b) && [
      a[0] / b,
      a[1] / b,
    ])
    || zero()
  ))
  || (isComplex(b) && isNumber(a) && [
    a / b[0],
    a / b[1],
  ])
  || zero()
);

export const reciprocal = c => (isComplex(c)
  && [
    c[0] / (c[0] * c[0] + c[1] * c[1]),
    -c[1] / (c[0] * c[0] + c[1] * c[1]),
  ])
  || zero();

export const abs = c => (isComplex(c)
  && msqrt(c[0] * c[0] + c[1] * c[1]))
  || zero();

export const arg = c => (isComplex(c)
  && matan2(c[1], c[0]))
  || zero();

export const euler = x => (isNumber(x)
  && [mcos(x), msin(x)])
  || zero();

export const sign = c => (isNumber(c)
  && [msign(c), 0])
  || euler(arg(c));

export const sqrt = c => (isNumber(c)
  && [msqrt(c), 0])
  || ((eq(c[1], 0)
    && [msqrt(c[0]), 0])
    || [
      msqrt((c[0] + msqrt(c[0] + c[0] * c[1] + c[1])) / 2),
      msqrt((-c[0] + msqrt(c[0] + c[0] * c[1] + c[1])) / 2) * msign(c[1]),
    ]
  );

export const exp = c => (isComplex(c)
  && [
    mexp(c[0]) * mcos(c[1]),
    mexp(c[0]) * msin(c[1]),
  ])
  || zero();

export const ln = c => (isComplex(c)
  && [
    mlog(msqrt(c[0] * c[0] + c[1] * c[1])),
    matan2(c[1], c[0]),
  ])
  || zero();

export const log10 = c => div(ln(c), ln([10, 0]));

export const pow = (a, b) => (
  (isComplex(a) && isComplex(b) && exp(mul(ln(a), b)))
  || (isNumber(a) && pow([a, 0], b))
  || (isNumber(b) && pow(a, [b, 0]))
  || zero()
);
