[![.github/workflows/gh-publish.yml](https://github.com/VEERT00X/vmath/actions/workflows/gh-publish.yml/badge.svg)](https://github.com/VEERT00X/vmath/actions/workflows/gh-publish.yml)
[![.github/workflows/npm-publish.yml](https://github.com/VEERT00X/vmath/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/VEERT00X/vmath/actions/workflows/npm-publish.yml)

# @veert00x/vmath - Basic Math and Geometry Functions

**@veert00x/vmath** is a lightweight JavaScript module that provides a set of basic math and geometry functions created by the talented developer **@VEERT00X**. This module is designed to simplify common mathematical operations and calculations in your JavaScript projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Examples](#examples)
- [Contributing](#contributing)
- [Information](#information)

## Installation

You can easily install **@veert00x/vmath** using npm or yarn:

```bash
npm install @veert00x/vmath
```

```bash
yarn add @veert00x/vmath
```

## Usage

To start using the @veert00x/vmath module in your project, simply import it as follows:

```js
const vmath = require('@veert00x/vmath');
```
This will give you access to a wide range of math and geometry functions, including summation, averaging, median calculation, subtraction, multiplication, and divisio

## Functions

Examples of the functions available in the @veert00x/vmath module include:

* `sum` and `summation` : Functions to calculate the sum of an array of numbers.
* `avg` and `average` : Functions to calculate the average of two or more numbers or array of numbers.
* `med` and `median` : Functions to find the median of two or more numbers or array of numbers.
* `subtract` and `subtraction` : Functions for subtracting two or more numbers or array of numbers.
* `multiply` and `multiplication` : Functions for multiplying two or more numbers or array of numbers.
* `divide` and `division`: Functions for dividing two or more numbers or array of numbers.

To view a comprehensive list of functions available in the @veert00x/vmath module, please refer to the [wiki](https://github.com/VEERT00X/vmath/wiki)

## Examples

Here are some basic examples to demonstrate how to use these functions:

```js
const vmath = require('@veert00x/vmath');

const numbers = [1, 2, 3, 4, 5];

const sumResult = vmath.sum(numbers);
console.log(`Sum: ${sumResult}`);

const avgResult = vmath.avg(numbers);
console.log(`Average: ${avgResult}`);

const medianResult = vmath.median(numbers);
console.log(`Median: ${medianResult}`);

const subtractResult = vmath.subtract(10, 5);
console.log(`Subtraction: ${subtractResult}`);

const multiplyResult = vmath.multiply(3, 7);
console.log(`Multiplication: ${multiplyResult}`);

const divideResult = vmath.divide(20, 4);
console.log(`Division: ${divideResult}`);
```

## Contributing

If you have suggestions, feature requests, or would like to report a bug, please feel free to open an issue on the repository. Contributions and improvements are always welcome.

## Information

* This project is licensed under the MIT License
* Author: @VEERT00X

---

Enjoy using @veert00x/vmath in your projects! If you find it helpful, please consider leaving a star on the repository.
