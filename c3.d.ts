interface C3 {
    r: number;
    g: number;
    b: number;
}
declare namespace C3 {
    function create(r?: number, g?: number, b?: number): C3;
    function set(out: C3, r?: number, g?: number, b?: number): C3;
    function copy(dst: C3, src: C3): C3;
    function clone(c: C3): C3;
    function equalish(a: C3, b: C3): boolean;
    function toHex(c: C3): number;
    function fromHex(out: C3, hex: number): C3;
    function toHexString(c: C3): string;
    function toArray<T extends {
        [n: number]: number;
    }>(out: T, c: C3): T;
    function fromArray(out: C3, a: ArrayLike<number>): C3;
}
export default C3;
