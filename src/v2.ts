import {equalish as eq} from './common'

interface V2 {
	x: number
	y: number
}

namespace V2 {
	export function create (x?: number, y?: number): V2 {
		return {
			x: typeof x === 'number' ? x : 0,
			y: typeof y === 'number' ? y : 0
		}
	}

	export function set (out: V2, x?: number, y?: number): V2 {
		out.x = typeof x === 'number' ? x : out.x
		out.y = typeof y === 'number' ? y : out.y
		return out
	}

	export function copy (out: V2, v: V2): V2 {
		out.x = v.x
		out.y = v.y
		return out
	}

	export function clone (v: V2): V2 {
		return create(v.x, v.y)
	}

	export function equalish (a: V2, b: V2): boolean {
		return eq(a.x, b.x) && eq(a.y, b.y)
	}

	export function toArray<T extends {[n: number]: number}> (out: T, v: V2): T {
		out[0] = v.x
		out[1] = v.y
		return out
	}

	export function fromArray (out: V2, a: ArrayLike<number>): V2 {
		out.x = a[0]
		out.y = a[1]
		return out
	}

	export function add (out: V2, a: V2, b: V2): V2 {
		out.x = a.x + b.x
		out.y = a.y + b.y
		return out
	}

	export function sub (out: V2, a: V2, b: V2): V2 {
		out.x = a.x - b.x
		out.y = a.y - b.y
		return out
	}

	export function scale (out: V2, v: V2, s: number): V2 {
		out.x = v.x * s
		out.y = v.y * s
		return out
	}

	export function length (v: V2): number {
		return Math.sqrt(v.x * v.x + v.y * v.y)
	}

	export function lengthSq (v: V2): number {
		return v.x * v.x + v.y * v.y
	}

	export function setLength (out: V2, v: V2, l: number): V2 {
		let s = length(v)
		if (s > 0) {
			s = l / s
			out.x = v.x * s
			out.y = v.y * s
		} else {
			out.x = l
			out.y = 0
		}
		return out
	}

	export function normalize (out: V2, v: V2): V2 {
		return setLength(out, v, 1)
	}

	export function dist (a: V2, b: V2): number {
		const dx = b.x - a.x
		const dy = b.y - a.y
		return Math.sqrt(dx * dx + dy * dy)
	}

	export function distSq (a: V2, b: V2): number {
		const dx = b.x - a.x
		const dy = b.y - a.y
		return dx * dx + dy * dy
	}

	export function dot (a: V2, b: V2): number {
		return a.x * b.x + a.y * b.y
	}

	export function angle (v: V2): number {
		return Math.atan2(v.y, v.x)
	}

	export function rotate (out: V2, v: V2, r: number): V2 {
		const c = Math.cos(r),
			s = Math.sin(r),
			x = v.x, y = v.y
		out.x = x * c - y * s
		out.y = x * s + y * c
		return out
	}

	/** nx,ny should be normalized; vx,vy length will be preserved */
	export function reflect (out: V2, v: V2, n: V2): V2 {
		const d = dot(n, v)
		out.x = v.x - 2 * d * n.x
		out.y = v.y - 2 * d * n.y
		return out
	}

	/** Multiply V2 by a 2x2 matrix (4 elements) */
	export function multM2 (out: V2, v: V2, m: ArrayLike<number>): V2 {
		const x = v.x, y = v.y
		out.x = m[0] * x + m[2] * y
		out.y = m[1] * x + m[3] * y
		return out
	}

	/** Multiply V2 by a 3x3 matrix (9 elements) */
	export function multM3 (out: V2, v: V2, m: ArrayLike<number>): V2 {
		const x = v.x, y = v.y
		out.x = m[0] * x + m[3] * y + m[6]
		out.y = m[1] * x + m[4] * y + m[7]
		return out
	}
}

export default V2
