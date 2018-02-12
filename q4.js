"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var v3_1 = require("./v3");
// Scratchpad objects
var _v0 = v3_1.default.create(0, 0, 0); // tslint:disable-line variable-name
var _v1 = v3_1.default.create(0, 0, 0); // tslint:disable-line variable-name
var Q4;
(function (Q4) {
    function create(x, y, z, w) {
        return {
            x: typeof x === 'number' ? x : 0,
            y: typeof y === 'number' ? y : 0,
            z: typeof z === 'number' ? z : 0,
            w: typeof w === 'number' ? w : 1
        };
    }
    Q4.create = create;
    function set(out, x, y, z, w) {
        out.x = typeof x === 'number' ? x : out.x;
        out.y = typeof y === 'number' ? y : out.y;
        out.z = typeof z === 'number' ? z : out.z;
        out.w = typeof w === 'number' ? w : out.w;
        return out;
    }
    Q4.set = set;
    function copy(out, q) {
        out.x = q.x;
        out.y = q.y;
        out.z = q.z;
        out.w = q.w;
        return out;
    }
    Q4.copy = copy;
    function clone(q) {
        return create(q.x, q.y, q.z, q.w);
    }
    Q4.clone = clone;
    function equalish(a, b) {
        return common_1.equalish(a.x, b.x) && common_1.equalish(a.y, b.y) && common_1.equalish(a.z, b.z) && common_1.equalish(a.w, b.w);
    }
    Q4.equalish = equalish;
    function toArray(out, q, offset) {
        if (offset === void 0) { offset = 0; }
        out[offset + 0] = q.x;
        out[offset + 1] = q.y;
        out[offset + 2] = q.z;
        out[offset + 3] = q.w;
        return out;
    }
    Q4.toArray = toArray;
    function fromArray(out, a, offset) {
        if (offset === void 0) { offset = 0; }
        out.x = a[offset + 0];
        out.y = a[offset + 1];
        out.z = a[offset + 2];
        out.w = a[offset + 3];
        return out;
    }
    Q4.fromArray = fromArray;
    function inverse(out, q) {
        out.x = -q.x;
        out.y = -q.y;
        out.z = -q.z;
        out.w = -q.w;
        return out;
    }
    Q4.inverse = inverse;
    function mult(out, a, b) {
        var qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
        var qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;
        out.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        out.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        out.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        out.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        return out;
    }
    Q4.mult = mult;
    function multV3(out, q, v) {
        var x = v.x, y = v.y, z = v.z;
        var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // q*v
        var ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
        out.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return out;
    }
    Q4.multV3 = multV3;
    function angle(x, y) {
        return Math.atan2(y, x);
    }
    /** Get angle around X */
    function angleX(q) {
        // transform a vector by the quaternion, then get its angle from y,z
        _v0.x = 0;
        _v0.y = -1;
        _v0.z = 0;
        multV3(_v1, q, _v0);
        return angle(_v1.y, _v1.z);
    }
    Q4.angleX = angleX;
    function angleY(q) {
        _v0.x = 1;
        _v0.y = 0;
        _v0.z = 0;
        multV3(_v1, q, _v0);
        return angle(_v1.x, _v1.z);
    }
    Q4.angleY = angleY;
    function angleZ(q) {
        _v0.x = 1;
        _v0.y = 0;
        _v0.z = 0;
        multV3(_v1, q, _v0);
        return angle(_v1.x, _v1.y);
    }
    Q4.angleZ = angleZ;
    function length(q) {
        return Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
    }
    Q4.length = length;
    function normalize(out, q) {
        var l = length(q);
        if (l === 0) {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            out.w = 1;
        }
        else {
            l = 1 / l;
            out.x = q.x * l;
            out.y = q.y * l;
            out.z = q.z * l;
            out.w = q.w * l;
        }
        return out;
    }
    Q4.normalize = normalize;
    function fromEuler(out, x, y, z, order) {
        order = order || 'XYZ';
        var c1 = Math.cos(x / 2);
        var c2 = Math.cos(y / 2);
        var c3 = Math.cos(z / 2);
        var s1 = Math.sin(x / 2);
        var s2 = Math.sin(y / 2);
        var s3 = Math.sin(z / 2);
        if (order === 'XYZ') {
            out.x = s1 * c2 * c3 + c1 * s2 * s3;
            out.y = c1 * s2 * c3 - s1 * c2 * s3;
            out.z = c1 * c2 * s3 + s1 * s2 * c3;
            out.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'YXZ') {
            out.x = s1 * c2 * c3 + c1 * s2 * s3;
            out.y = c1 * s2 * c3 - s1 * c2 * s3;
            out.z = c1 * c2 * s3 - s1 * s2 * c3;
            out.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        else if (order === 'ZXY') {
            out.x = s1 * c2 * c3 - c1 * s2 * s3;
            out.y = c1 * s2 * c3 + s1 * c2 * s3;
            out.z = c1 * c2 * s3 + s1 * s2 * c3;
            out.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'ZYX') {
            out.x = s1 * c2 * c3 - c1 * s2 * s3;
            out.y = c1 * s2 * c3 + s1 * c2 * s3;
            out.z = c1 * c2 * s3 - s1 * s2 * c3;
            out.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        else if (order === 'YZX') {
            out.x = s1 * c2 * c3 + c1 * s2 * s3;
            out.y = c1 * s2 * c3 + s1 * c2 * s3;
            out.z = c1 * c2 * s3 - s1 * s2 * c3;
            out.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'XZY') {
            out.x = s1 * c2 * c3 - c1 * s2 * s3;
            out.y = c1 * s2 * c3 - s1 * c2 * s3;
            out.z = c1 * c2 * s3 + s1 * s2 * c3;
            out.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        return out;
    }
    Q4.fromEuler = fromEuler;
    var EPS = 0.000001;
    function fromUnitVectors(out, vFrom, vTo) {
        var v = _v0;
        var r = v3_1.default.dot(vFrom, vTo) + 1;
        if (r < EPS) {
            r = 0;
            if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                v3_1.default.set(v, -vFrom.y, vFrom.x, 0);
            }
            else {
                v3_1.default.set(v, 0, -vFrom.z, vFrom.y);
            }
        }
        else {
            v3_1.default.cross(v, vFrom, vTo);
        }
        out.x = v.x;
        out.y = v.y;
        out.z = v.z;
        out.w = r;
        normalize(out, out);
        return out;
    }
    Q4.fromUnitVectors = fromUnitVectors;
})(Q4 || (Q4 = {}));
exports.default = Q4;
