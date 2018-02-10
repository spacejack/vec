"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var epsilon = 0.000001;
function getEpsilon(e) {
    return epsilon;
}
exports.getEpsilon = getEpsilon;
function setEpsilon(e) {
    epsilon = e;
}
exports.setEpsilon = setEpsilon;
function equalish(a, b) {
    return Math.abs(a - b) <= epsilon * Math.max(1, Math.abs(a), Math.abs(b));
}
exports.equalish = equalish;
