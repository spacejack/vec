"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
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
    function equalish(a, b) {
        return common_1.equalish(a.r, b.r) && common_1.equalish(a.g, b.g) && common_1.equalish(a.b, b.b);
    }
    C3.equalish = equalish;
    function toArray(out, c, offset) {
        if (offset === void 0) { offset = 0; }
        out[offset + 0] = c.r;
        out[offset + 1] = c.g;
        out[offset + 2] = c.b;
        return out;
    }
    C3.toArray = toArray;
    function fromArray(out, a, offset) {
        if (offset === void 0) { offset = 0; }
        out.r = a[offset + 0];
        out.g = a[offset + 1];
        out.b = a[offset + 2];
        return out;
    }
    C3.fromArray = fromArray;
    function toHex(c) {
        return (c.r * 255) << 16 ^ (c.g * 255) << 8 ^ (c.b * 255) << 0;
    }
    C3.toHex = toHex;
    function fromHex(out, hex) {
        var h = Math.floor(hex);
        out.r = (h >> 16 & 255) / 255;
        out.g = (h >> 8 & 255) / 255;
        out.b = (h & 255) / 255;
        return out;
    }
    C3.fromHex = fromHex;
    function toHexString(c) {
        return ('000000' + toHex(c).toString(16)).slice(-6);
    }
    C3.toHexString = toHexString;
})(C3 || (C3 = {}));
exports.default = C3;
