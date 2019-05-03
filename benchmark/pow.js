/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable func-names */
const Benchmark = require('benchmark');

const Complex = require('complex.js');
const { pow } = require('../index');

const suite = new Benchmark.Suite();

const i = Math.random();

suite.add('complex.js#pow', () => {
  new Complex([i, i]).pow([i, i]);
});
suite.add('fast-complex#pow', () => {
  pow([i, i], [i, i]);
});
suite.on('cycle', (event) => {
  console.log(String(event.target));
});
suite.on('complete', function () {
  console.log(`Fastest is ${this.filter('fastest').map('name')}`);
});
suite.run({ async: false });
