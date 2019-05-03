# fast-complex

Faster complex numbers in JavaScript

[![NPM](https://nodei.co/npm/fast-complex.png)](https://nodei.co/npm/fast-complex/)

[![](https://data.jsdelivr.com/v1/package/npm/fast-complex/badge)](https://www.jsdelivr.com/package/npm/fast-complex)
[![HitCount](http://hits.dwyl.io/lxsmnsyc/fast-complex.svg)](http://hits.dwyl.io/lxsmnsyc/fast-complex)

| Platform | Build Status |
| --- | --- |
| Linux | [![Build Status](https://travis-ci.org/LXSMNSYC/fast-complex.svg?branch=master)](https://travis-ci.org/LXSMNSYC/fast-complex) |
| Windows | [![Build status](https://ci.appveyor.com/api/projects/status/mkjwe462uk80axx4?svg=true)](https://ci.appveyor.com/project/LXSMNSYC/fast-complex) |


[![codecov](https://codecov.io/gh/LXSMNSYC/fast-complex/branch/master/graph/badge.svg)](https://codecov.io/gh/LXSMNSYC/fast-complex)
[![Known Vulnerabilities](https://snyk.io/test/github/LXSMNSYC/fast-complex/badge.svg?targetFile=package.json)](https://snyk.io/test/github/LXSMNSYC/fast-complex?targetFile=package.json)

## Why

Most complex number libraries avaiable in JavaScript are pretty slow, uses classes, and sometimes immutable. `fast-complex` aims to be fast (as all complex libraries should be).

## Install

NPM

```bash
npm i fast-complex
```

CDN

* jsDelivr
```html
<script src="https://cdn.jsdelivr.net/npm/rx-cancellable/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rx-scheduler/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/fast-complex/dist/index.min.js"></script>
```

* unpkg
```html
<script src="https://unpkg.com/rx-cancellable/dist/index.min.js"></script>
<script src="https://unpkg.com/rx-scheduler/dist/index.min.js"></script>
<script src="https://unpkg.com/fast-complex/dist/index.min.js"></script>
```

## Usage

### Loading the module

#### CommonJS

```js
const Complex = require('fast-complex');
```

Loading the CommonJS module provides the Complex object.

#### Browser

Loading the JavaScript file for the fast-complex provides the Complex object

## Documentation

You can read the documentation at the [official doc site](https://lxsmnsyc.github.io/fast-complex/)

## Build

Clone the repo first, then run the following to install the dependencies

```bash
npm install
```

To build the coverages, run the test suite, the docs, and the distributable modules:

```bash
npm run build
```

## Benchmarks

Benchmark against [complex.js](https://www.npmjs.com/package/complex.js)

```

abs:
complex.js#abs x 9,933,531 ops/sec ±2.09% (94 runs sampled)
fast-complex#abs x 253,642,051 ops/sec ±0.29% (97 runs sampled)
Fastest is fast-complex#abs

acos:
complex.js#acos x 2,925,969 ops/sec ±1.29% (90 runs sampled)
fast-complex#acos x 49,749,701 ops/sec ±2.06% (88 runs sampled)
Fastest is fast-complex#acos

acosh:
complex.js#acosh x 3,740,378 ops/sec ±0.77% (92 runs sampled)
fast-complex#acosh x 47,722,386 ops/sec ±5.30% (84 runs sampled)
Fastest is fast-complex#acosh

add:
complex.js#add x 4,458,950 ops/sec ±0.34% (97 runs sampled)
fast-complex#add x 35,650,100 ops/sec ±0.67% (93 runs sampled)
Fastest is fast-complex#add

arg:
complex.js#arg x 9,839,039 ops/sec ±0.83% (92 runs sampled)
fast-complex#arg x 101,340,095 ops/sec ±1.82% (91 runs sampled)
Fastest is fast-complex#arg

asin:
complex.js#asin x 2,938,570 ops/sec ±0.61% (91 runs sampled)
fast-complex#asin x 6,228,202 ops/sec ±7.72% (73 runs sampled)
Fastest is fast-complex#asin

asinh:
complex.js#asinh x 2,884,275 ops/sec ±8.94% (77 runs sampled)
fast-complex#asinh x 33,226,055 ops/sec ±14.06% (72 runs sampled)
Fastest is fast-complex#asinh

atan:
complex.js#atan x 4,389,152 ops/sec ±5.22% (81 runs sampled)
fast-complex#atan x 16,479,614 ops/sec ±4.87% (77 runs sampled)
Fastest is fast-complex#atan

atanh:
complex.js#atanh x 7,616,215 ops/sec ±1.68% (91 runs sampled)
fast-complex#atanh x 903,661,538 ops/sec ±0.10% (96 runs sampled)
Fastest is fast-complex#atanh

ceil:
complex.js#ceil x 8,732,558 ops/sec ±0.57% (96 runs sampled)
fast-complex#ceil x 581,520,940 ops/sec ±27.17% (66 runs sampled)
Fastest is fast-complex#ceil

conjugate:
complex.js#conjugate x 7,946,390 ops/sec ±0.61% (92 runs sampled)
fast-complex#conjugate x 128,600,156 ops/sec ±2.42% (89 runs sampled)
Fastest is fast-complex#conjugate

cos:
complex.js#cos x 6,520,740 ops/sec ±0.28% (92 runs sampled)
fast-complex#cos x 902,064,871 ops/sec ±0.57% (96 runs sampled)
Fastest is fast-complex#cos

cosh:
complex.js#cosh x 6,361,678 ops/sec ±1.78% (92 runs sampled)
fast-complex#cosh x 910,624,377 ops/sec ±0.51% (96 runs sampled)
Fastest is fast-complex#cosh

div:
complex.js#div x 3,636,951 ops/sec ±0.84% (96 runs sampled)
fast-complex#div x 35,337,742 ops/sec ±0.97% (94 runs sampled)
Fastest is fast-complex#div

exp:
complex.js#exp x 6,039,567 ops/sec ±0.91% (92 runs sampled)
fast-complex#exp x 889,482,520 ops/sec ±0.06% (94 runs sampled)
Fastest is fast-complex#exp

floor:
complex.js#floor x 8,781,547 ops/sec ±0.47% (95 runs sampled)
fast-complex#floor x 888,314,890 ops/sec ±0.24% (98 runs sampled)
Fastest is fast-complex#floor

ln:
complex.js#log x 6,272,608 ops/sec ±0.78% (93 runs sampled)
fast-complex#ln x 885,876,785 ops/sec ±0.23% (93 runs sampled)
Fastest is fast-complex#ln

log10:
complex.js#log(10) x 6,174,428 ops/sec ±0.71% (89 runs sampled)
fast-complex#log10 x 405,703,546 ops/sec ±34.30% (49 runs sampled)
Fastest is fast-complex#log10

mul:
complex.js#mul x 4,173,618 ops/sec ±0.76% (91 runs sampled)
fast-complex#mul x 16,153,860 ops/sec ±0.82% (95 runs sampled)
Fastest is fast-complex#mul

negate:
complex.js#negate x 8,648,611 ops/sec ±0.32% (94 runs sampled)
fast-complex#negate x 889,886,684 ops/sec ±0.18% (94 runs sampled)
Fastest is fast-complex#negate

pow:
complex.js#pow x 3,114,318 ops/sec ±0.30% (96 runs sampled)
fast-complex#pow x 9,008,175 ops/sec ±0.52% (94 runs sampled)
Fastest is fast-complex#pow

reciprocal:
complex.js#inverse x 8,028,073 ops/sec ±0.32% (90 runs sampled)
fast-complex#reciprocal x 301,359,863 ops/sec ±29.73% (37 runs sampled)
Fastest is fast-complex#reciprocal

sign:
complex.js#sign x 7,446,547 ops/sec ±0.50% (92 runs sampled)
fast-complex#sign x 886,266,554 ops/sec ±0.12% (96 runs sampled)
Fastest is fast-complex#sign

sin:
complex.js#sin x 5,579,571 ops/sec ±0.24% (95 runs sampled)
fast-complex#sin x 889,485,146 ops/sec ±0.04% (97 runs sampled)
Fastest is fast-complex#sin

sinh:
complex.js#sinh x 5,925,036 ops/sec ±0.48% (96 runs sampled)
fast-complex#sinh x 910,799,202 ops/sec ±0.43% (94 runs sampled)
Fastest is fast-complex#sinh

sqrt:
complex.js#sqrt x 7,238,014 ops/sec ±0.58% (93 runs sampled)
fast-complex#sqrt x 238,295,802 ops/sec ±0.27% (93 runs sampled)
Fastest is fast-complex#sqrt

sub:
complex.js#sub x 3,825,745 ops/sec ±4.47% (83 runs sampled)
fast-complex#sub x 10,662,337 ops/sec ±6.11% (61 runs sampled)
Fastest is fast-complex#sub

tan:
complex.js#tan x 4,006,442 ops/sec ±4.76% (75 runs sampled)
fast-complex#tan x 885,185,662 ops/sec ±0.96% (94 runs sampled)
Fastest is fast-complex#tan

tanh:
complex.js#tanh x 4,193,491 ops/sec ±5.60% (75 runs sampled)
fast-complex#tanh x 875,495,330 ops/sec ±0.35% (90 runs sampled)
Fastest is fast-complex#tanh
```