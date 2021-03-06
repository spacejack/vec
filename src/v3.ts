import {equalish as eq} from './common'

interface V3 {
	x: number
	y: number
	z: number
}

namespace V3 {
	export function create (x?: number, y?: number, z?: number): V3 {
		return {
			x: typeof x === 'number' ? x : 0,
			y: typeof y === 'number' ? y : 0,
			z: typeof z === 'number' ? z : 0
		}
	}

	export function set (out: V3, x?: number, y?: number, z?: number): V3 {
		out.x = typeof x === 'number' ? x : out.x
		out.y = typeof y === 'number' ? y : out.y
		out.z = typeof z === 'number' ? z : out.z
		return out
	}

	export function copy (out: V3, v: V3): V3 {
		out.x = v.x
		out.y = v.y
		out.z = v.z
		return out
	}

	export function clone (v: V3): V3 {
		return create(v.x, v.y, v.z)
	}

	export function equalish (a: V3, b: V3): boolean {
		return eq(a.x, b.x) && eq(a.y, b.y) && eq(a.z, b.z)
	}

	export function toArray<T extends {[n: number]: number}> (out: T, v: V3, offset = 0): T {
		out[offset + 0] = v.x
		out[offset + 1] = v.y
		out[offset + 2] = v.z
		return out
	}

	export function fromArray (out: V3, a: ArrayLike<number>, offset = 0): V3 {
		out.x = a[offset + 0]
		out.y = a[offset + 1]
		out.z = a[offset + 2]
		return out
	}

	export function add (out: V3, a: V3, b: V3): V3 {
		out.x = a.x + b.x
		out.y = a.y + b.y
		out.z = a.z + b.z
		return out
	}

	export function sub (out: V3, a: V3, b: V3): V3 {
		out.x = a.x - b.x
		out.y = a.y - b.y
		out.z = a.z - b.z
		return out
	}

	export function scale (out: V3, v: V3, s: number): V3 {
		out.x = v.x * s
		out.y = v.y * s
		out.z = v.z * s
		return out
	}

	export function length (v: V3): number {
		return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
	}

	export function lengthSq (v: V3): number {
		return v.x * v.x + v.y * v.y + v.z * v.z
	}

	export function setLength (out: V3, v: V3, l: number): V3 {
		let s = length(v)
		if (s > 0) {
			s = l / s
			out.x = v.x * s
			out.y = v.y * s
			out.z = v.z * s
		} else {
			out.x = l
			out.y = 0
			out.z = 0
		}
		return out
	}

	export function normalize (out: V3, v: V3): V3 {
		return setLength(out, v, 1)
	}

	export function dist (a: V3, b: V3): number {
		const dx = b.x - a.x
		const dy = b.y - a.y
		const dz = b.z - a.z
		return Math.sqrt(dx * dx + dy * dy + dz * dz)
	}

	export function distSq (a: V3, b: V3): number {
		const dx = b.x - a.x
		const dy = b.y - a.y
		const dz = b.z - a.z
		return dx * dx + dy * dy + dz * dz
	}

	export function dot (a: V3, b: V3): number {
		return a.x * b.x + a.y * b.y + a.z * b.z
	}

	export function cross (out: V3, a: V3, b: V3): V3 {
		const ax = a.x, ay = a.y, az = a.z,
			bx = b.x, by = b.y, bz = b.z
		out.x = ay * bz - az * by
		out.y = az * bx - ax * bz
		out.z = ax * by - ay * bx
		return out
	}

	/** Multiply V3 by a 3x3 matrix (9 elements) */
	export function multM3 (out: V3, v: V3, m: ArrayLike<number>): V3 {
		const x = v.x, y = v.y, z = v.z
		out.x = x * m[0] + y * m[3] + z * m[6]
		out.y = x * m[1] + y * m[4] + z * m[7]
		out.z = x * m[2] + y * m[5] + z * m[8]
		return out
	}

	/** Multiply V3 by a 4x4 matrix (16 elements) */
	export function multM4 (out: V3, v: V3, m: ArrayLike<number>): V3 {
		const x = v.x, y = v.y, z = v.z
		const w = (m[3] * x + m[7] * y + m[11] * z + m[15]) || 1
		out.x = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
		out.y = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
		out.z = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
		return out
	}
}

export default V3
