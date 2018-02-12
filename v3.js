"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var V3;
(function (V3) {
    function create(x, y, z) {
        return {
            x: typeof x === 'number' ? x : 0,
            y: typeof y === 'number' ? y : 0,
            z: typeof z === 'number' ? z : 0
        };
    }
    V3.create = create;
    function set(out, x, y, z) {
        out.x = typeof x === 'number' ? x : out.x;
        out.y = typeof y === 'number' ? y : out.y;
        out.z = typeof z === 'number' ? z : out.z;
        return out;
    }
    V3.set = set;
    function copy(out, v) {
        out.x = v.x;
        out.y = v.y;
        out.z = v.z;
        return out;
    }
    V3.copy = copy;
    function clone(v) {
        return create(v.x, v.y, v.z);
    }
    V3.clone = clone;
    function equalish(a, b) {
        return common_1.equalish(a.x, b.x) && common_1.equalish(a.y, b.y) && common_1.equalish(a.z, b.z);
    }
    V3.equalish = equalish;
    function toArray(out, v, offset) {
        if (offset === void 0) { offset = 0; }
        out[offset + 0] = v.x;
        out[offset + 1] = v.y;
        out[offset + 2] = v.z;
        return out;
    }
    V3.toArray = toArray;
    function fromArray(out, a, offset) {
        if (offset === void 0) { offset = 0; }
        out.x = a[offset + 0];
        out.y = a[offset + 1];
        out.z = a[offset + 2];
        return out;
    }
    V3.fromArray = fromArray;
    function add(out, a, b) {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
        out.z = a.z + b.z;
        return out;
    }
    V3.add = add;
    function sub(out, a, b) {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
        out.z = a.z - b.z;
        return out;
    }
    V3.sub = sub;
    function scale(out, v, s) {
        out.x = v.x * s;
        out.y = v.y * s;
        out.z = v.z * s;
        return out;
    }
    V3.scale = scale;
    function length(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    V3.length = length;
    function lengthSq(v) {
        return v.x * v.x + v.y * v.y + v.z * v.z;
    }
    V3.lengthSq = lengthSq;
    function setLength(out, v, l) {
        var s = length(v);
        if (s > 0) {
            s = l / s;
            out.x = v.x * s;
            out.y = v.y * s;
            out.z = v.z * s;
        }
        else {
            out.x = l;
            out.y = 0;
            out.z = 0;
        }
        return out;
    }
    V3.setLength = setLength;
    function normalize(out, v) {
        return setLength(out, v, 1);
    }
    V3.normalize = normalize;
    function dist(a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var dz = b.z - a.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    V3.dist = dist;
    function distSq(a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var dz = b.z - a.z;
        return dx * dx + dy * dy + dz * dz;
    }
    V3.distSq = distSq;
    function dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    V3.dot = dot;
    function cross(out, a, b) {
        var ax = a.x, ay = a.y, az = a.z, bx = b.x, by = b.y, bz = b.z;
        out.x = ay * bz - az * by;
        out.y = az * bx - ax * bz;
        out.z = ax * by - ay * bx;
        return out;
    }
    V3.cross = cross;
    /** Multiply V3 by a 3x3 matrix (9 elements) */
    function multM3(out, v, m) {
        var x = v.x, y = v.y, z = v.z;
        out.x = x * m[0] + y * m[3] + z * m[6];
        out.y = x * m[1] + y * m[4] + z * m[7];
        out.z = x * m[2] + y * m[5] + z * m[8];
        return out;
    }
    V3.multM3 = multM3;
    /** Multiply V3 by a 4x4 matrix (16 elements) */
    function multM4(out, v, m) {
        var x = v.x, y = v.y, z = v.z;
        var w = (m[3] * x + m[7] * y + m[11] * z + m[15]) || 1;
        out.x = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out.y = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out.z = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }
    V3.multM4 = multM4;
})(V3 || (V3 = {}));
exports.default = V3;
