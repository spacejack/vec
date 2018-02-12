import V3 from './v3';
interface Q4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
declare namespace Q4 {
    function create(x?: number, y?: number, z?: number, w?: number): Q4;
    function set(out: Q4, x?: number, y?: number, z?: number, w?: number): Q4;
    function copy(out: Q4, q: Q4): Q4;
    function clone(q: Q4): Q4;
    function equalish(a: Q4, b: Q4): boolean;
    function toArray<T extends {
        [n: number]: number;
    }>(out: T, q: Q4, offset?: number): T;
    function fromArray(out: Q4, a: ArrayLike<number>, offset?: number): Q4;
    function inverse(out: Q4, q: Q4): Q4;
    function mult(out: Q4, a: Q4, b: Q4): Q4;
    function multV3(out: V3, q: Q4, v: V3): V3;
    /** Get angle around X */
    function angleX(q: Q4): number;
    function angleY(q: Q4): number;
    function angleZ(q: Q4): number;
    function length(q: Q4): number;
    function normalize(out: Q4, q: Q4): Q4;
    function fromEuler(out: Q4, x: number, y: number, z: number, order?: string): Q4;
    function fromUnitVectors(out: Q4, vFrom: V3, vTo: V3): Q4;
}
export default Q4;
