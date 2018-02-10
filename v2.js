"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var V2;
(function (V2) {
    function create(x, y) {
        return {
            x: typeof x === 'number' ? x : 0,
            y: typeof y === 'number' ? y : 0
        };
    }
    V2.create = create;
    function set(out, x, y) {
        out.x = typeof x === 'number' ? x : out.x;
        out.y = typeof y === 'number' ? y : out.y;
        return out;
    }
    V2.set = set;
    function copy(out, v) {
        out.x = v.x;
        out.y = v.y;
        return out;
    }
    V2.copy = copy;
    function clone(v) {
        return create(v.x, v.y);
    }
    V2.clone = clone;
    function equalish(a, b) {
        return common_1.equalish(a.x, b.x) && common_1.equalish(a.y, b.y);
    }
    V2.equalish = equalish;
    function toArray(out, v) {
        out[0] = v.x;
        out[1] = v.y;
        return out;
    }
    V2.toArray = toArray;
    function fromArray(out, a) {
        out.x = a[0];
        out.y = a[1];
        return out;
    }
    V2.fromArray = fromArray;
    function add(out, a, b) {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
        return out;
    }
    V2.add = add;
    function sub(out, a, b) {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
        return out;
    }
    V2.sub = sub;
    function scale(out, v, s) {
        out.x = v.x * s;
        out.y = v.y * s;
        return out;
    }
    V2.scale = scale;
    function length(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    V2.length = length;
    function lengthSq(v) {
        return v.x * v.x + v.y * v.y;
    }
    V2.lengthSq = lengthSq;
    function setLength(out, v, l) {
        var s = length(v);
        if (s > 0) {
            s = l / s;
            out.x = v.x * s;
            out.y = v.y * s;
        }
        else {
            out.x = l;
            out.y = 0;
        }
        return out;
    }
    V2.setLength = setLength;
    function normalize(out, v) {
        return setLength(out, v, 1);
    }
    V2.normalize = normalize;
    function dist(a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    V2.dist = dist;
    function distSq(a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        return dx * dx + dy * dy;
    }
    V2.distSq = distSq;
    function dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }
    V2.dot = dot;
    function angle(v) {
        return Math.atan2(v.y, v.x);
    }
    V2.angle = angle;
    function rotate(out, v, r) {
        var c = Math.cos(r), s = Math.sin(r), x = v.x, y = v.y;
        out.x = x * c - y * s;
        out.y = x * s + y * c;
        return out;
    }
    V2.rotate = rotate;
    /** nx,ny should be normalized; vx,vy length will be preserved */
    function reflect(out, v, n) {
        var d = dot(n, v);
        out.x = v.x - 2 * d * n.x;
        out.y = v.y - 2 * d * n.y;
        return out;
    }
    V2.reflect = reflect;
    /** Multiply V2 by a 2x2 matrix (4 elements) */
    function multM2(out, v, m) {
        var x = v.x, y = v.y;
        out.x = m[0] * x + m[2] * y;
        out.y = m[1] * x + m[3] * y;
        return out;
    }
    V2.multM2 = multM2;
    /** Multiply V2 by a 3x3 matrix (9 elements) */
    function multM3(out, v, m) {
        var x = v.x, y = v.y;
        out.x = m[0] * x + m[3] * y + m[6];
        out.y = m[1] * x + m[4] * y + m[7];
        return out;
    }
    V2.multM3 = multM3;
})(V2 || (V2 = {}));
exports.default = V2;
