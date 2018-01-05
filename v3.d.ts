interface V3 {
    x: number;
    y: number;
    z: number;
}
declare namespace V3 {
    function create(x?: number, y?: number, z?: number): V3;
    function set(out: V3, x?: number, y?: number, z?: number): V3;
    function copy(out: V3, v: V3): V3;
    function clone(v: V3): V3;
    function toArray<T extends {
        [n: number]: number;
    }>(out: T, v: V3): T;
    function fromArray(out: V3, a: ArrayLike<number>): V3;
    function add(out: V3, a: V3, b: V3): V3;
    function sub(out: V3, a: V3, b: V3): V3;
    function multScalar(out: V3, v: V3, s: number): V3;
    function length(v: V3): number;
    function lengthSq(v: V3): number;
    function setLength(out: V3, v: V3, l: number): V3;
    function normalize(out: V3, v: V3): V3;
    function dist(a: V3, b: V3): number;
    function distSq(a: V3, b: V3): number;
    function dot(a: V3, b: V3): number;
    function cross(out: V3, a: V3, b: V3): V3;
}
export default V3;
