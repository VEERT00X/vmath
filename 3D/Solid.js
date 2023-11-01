const { cone } = require('./cone.js');
const { cube } = require('./cube.js');
const { cuboid } = require('./cuboid.js');
const { cylinder } = require('./cylinder.js');
const { pyramid } = require('./pyramid.js');
const { sphere } = require('./sphere.js');
const { sqrpyramid } = require('./sqrpyramid.js');

const Solid = {
    cone,
    cube,
    cuboid,
    cylinder,
    pyramid,
    sphere,
    sqrpyramid,
};

module.exports = {
    Solid,
};

// Path: package/3D/Solid.js
