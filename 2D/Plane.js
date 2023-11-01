const { parallelogram } = require('./parallelogram.js');
const { rectangle } = require('./rectangle.js');
const { square, sqr } = require('./square.js');
const { trapezoid } = require('./trapezoid.js');
const { triangle } = require('./triangle.js');
const { rhombus } = require('./rhombus.js');
const { circle } = require('./circle.js');
const { ellipse } = require('./ellipse.js');

const Plane = {
    parallelogram,
    rectangle,
    square,
    sqr,
    trapezoid,
    triangle,
    rhombus,
    circle,
    ellipse,
};

module.exports = {
    Plane,
};

// Path: package/2D/Plane.js
