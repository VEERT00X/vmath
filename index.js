const BasicSum = require('./Basic/summation.js');
const BasicAvg = require('./Basic/average.js');
const BasicMed = require('./Basic/median.js');
const BasicSub = require('./Basic/subtraction.js');
const BasicMul = require('./Basic/multiplication.js');
const BasicDiv = require('./Basic/division.js');

const { sum, summation } = BasicSum;
const { avg, average } = BasicAvg;
const { med, median } = BasicMed;
const { subtract, subtraction } = BasicSub;
const { multiply, multiplication } = BasicMul;
const { divide, division } = BasicDiv;

module.exports = {
    sum,
    summation,
    avg,
    average,
    med,
    median,
    subtract,
    subtraction,
    multiply,
    multiplication,
    divide,
    division
};


// Path: package/index.js
// version 1.0.1