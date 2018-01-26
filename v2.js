"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var V2;
(function (V2) {
    function create(x, y) {
        return {
            x: typeof x === 'number' ? x : 0,
            y: typeof y === 'number' ? y : 0,
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
    function multScalar(out, v, s) {
        out.x = v.x * s;
        out.y = v.y * s;
        return out;
    }
    V2.multScalar = multScalar;
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
        if (s > 0.0) {
            s = l / s;
            out.x = v.x * s;
            out.y = v.y * s;
        }
        else {
            out.x = l;
            out.y = 0.0;
        }
        return out;
    }
    V2.setLength = setLength;
    function normalize(out, v) {
        return setLength(out, v, 1.0);
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
    function det(a, b) {
        return a.x * b.y - a.y * b.x;
    }
    V2.det = det;
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
        out.x = v.x - 2.0 * d * n.x;
        out.y = v.y - 2.0 * d * n.y;
        return out;
    }
    V2.reflect = reflect;
})(V2 || (V2 = {}));
exports.default = V2;
