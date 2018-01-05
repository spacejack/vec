"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C3;
(function (C3) {
    function create(r, g, b) {
        return {
            r: typeof r === 'number' ? r : 0,
            g: typeof g === 'number' ? g : 0,
            b: typeof b === 'number' ? b : 0
        };
    }
    C3.create = create;
    function set(out, r, g, b) {
        out.r = typeof r === 'number' ? r : out.r;
        out.g = typeof g === 'number' ? g : out.g;
        out.b = typeof b === 'number' ? b : out.b;
        return out;
    }
    C3.set = set;
    function copy(dst, src) {
        dst.r = src.r;
        dst.g = src.g;
        dst.b = src.b;
        return dst;
    }
    C3.copy = copy;
    function clone(c) {
        return create(c.r, c.g, c.b);
    }
    C3.clone = clone;
    function toHex(c) {
        return (c.r * 255) << 16 ^ (c.g * 255) << 8 ^ (c.b * 255) << 0;
    }
    C3.toHex = toHex;
    function fromHex(out, hex) {
        hex = Math.floor(hex);
        out.r = (hex >> 16 & 255) / 255;
        out.g = (hex >> 8 & 255) / 255;
        out.b = (hex & 255) / 255;
        return out;
    }
    C3.fromHex = fromHex;
    function toHexString(c) {
        return ('000000' + toHex(c).toString(16)).slice(-6);
    }
    C3.toHexString = toHexString;
    function toArray(out, c) {
        out[0] = c.r;
        out[1] = c.g;
        out[2] = c.b;
        return out;
    }
    C3.toArray = toArray;
    function fromArray(out, a) {
        out.r = a[0];
        out.g = a[1];
        out.b = a[2];
        return out;
    }
    C3.fromArray = fromArray;
})(C3 || (C3 = {}));
exports.default = C3;
