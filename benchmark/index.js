/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const tests = [
  'abs',
  'acos',
  'acosh',
  'add',
  'arg',
  'asin',
  'asinh',
  'atan',
  'atanh',
  'ceil',
  'conjugate',
  'cos',
  'cosh',
  'div',
  'euler',
  'exp',
  'floor',
  'ln',
  'log10',
  'mul',
  'negate',
  'pow',
  'reciprocal',
  'sign',
  'sin',
  'sinh',
  'sqrt',
  'sub',
  'tan',
  'tanh',
];

for (let i = 0; i < tests.length; i += 1) {
  console.log('');
  console.log(`${tests[i]}:`);
  require(`./${tests[i]}`);
}
