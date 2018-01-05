"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    function toArray(out, v) {
        out[0] = v.x;
        out[1] = v.y;
        out[2] = v.z;
        return out;
    }
    V3.toArray = toArray;
    function fromArray(out, a) {
        out.x = a[0];
        out.y = a[1];
        out.z = a[2];
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
    function multScalar(out, v, s) {
        out.x = v.x * s;
        out.y = v.y * s;
        out.z = v.z * s;
        return out;
    }
    V3.multScalar = multScalar;
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
        if (s > 0.0) {
            s = l / s;
            out.x = v.x * s;
            out.y = v.y * s;
            out.z = v.z * s;
        }
        else {
            out.x = l;
            out.y = 0.0;
            out.z = 0.0;
        }
        return out;
    }
    V3.setLength = setLength;
    function normalize(out, v) {
        return setLength(out, v, 1.0);
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
})(V3 || (V3 = {}));
exports.default = V3;
