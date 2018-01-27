interface V2 {
    x: number;
    y: number;
}
declare namespace V2 {
    function create(x?: number, y?: number): V2;
    function set(out: V2, x?: number, y?: number): V2;
    function copy(out: V2, v: V2): V2;
    function clone(v: V2): V2;
    function toArray<T extends {
        [n: number]: number;
    }>(out: T, v: V2): T;
    function fromArray(out: V2, a: ArrayLike<number>): V2;
    function add(out: V2, a: V2, b: V2): V2;
    function sub(out: V2, a: V2, b: V2): V2;
    function multScalar(out: V2, v: V2, s: number): V2;
    function length(v: V2): number;
    function lengthSq(v: V2): number;
    function setLength(out: V2, v: V2, l: number): V2;
    function normalize(out: V2, v: V2): V2;
    function dist(a: V2, b: V2): number;
    function distSq(a: V2, b: V2): number;
    function dot(a: V2, b: V2): number;
    function angle(v: V2): number;
    function rotate(out: V2, v: V2, r: number): V2;
    /** nx,ny should be normalized; vx,vy length will be preserved */
    function reflect(out: V2, v: V2, n: V2): V2;
    /** Multiply V2 by a 2x2 matrix (4 elements) */
    function multM2(out: V2, v: V2, m: ArrayLike<number>): V2;
    /** Multiply V2 by a 3x3 matrix (9 elements) */
    function multM3(out: V2, v: V2, m: ArrayLike<number>): V2;
}
export default V2;
