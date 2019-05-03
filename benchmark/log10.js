/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable func-names */
const Benchmark = require('benchmark');

const Complex = require('complex.js');
const { log10 } = require('../index');

const suite = new Benchmark.Suite();

const i = Math.random();

suite.add('complex.js#log(10)', () => {
  new Complex([i, i]).log().div(Math.log(10));
});
suite.add('fast-complex#log10', () => {
  log10([i, i]);
});
suite.on('cycle', (event) => {
  console.log(String(event.target));
});
suite.on('complete', function () {
  console.log(`Fastest is ${this.filter('fastest').map('name')}`);
});
suite.run({ async: false });
