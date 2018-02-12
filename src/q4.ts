import {equalish as eq} from './common'
import V3 from './v3'

// Scratchpad objects
const _v0 = V3.create(0, 0, 0) // tslint:disable-line variable-name
const _v1 = V3.create(0, 0, 0) // tslint:disable-line variable-name

interface Q4 {
	x: number
	y: number
	z: number
	w: number
}

namespace Q4 {
	export function create (x?: number, y?: number, z?: number, w?: number): Q4 {
		return {
			x: typeof x === 'number' ? x : 0,
			y: typeof y === 'number' ? y : 0,
			z: typeof z === 'number' ? z : 0,
			w: typeof w === 'number' ? w : 1
		}
	}

	export function set (out: Q4, x?: number, y?: number, z?: number, w?: number): Q4 {
		out.x = typeof x === 'number' ? x : out.x
		out.y = typeof y === 'number' ? y : out.y
		out.z = typeof z === 'number' ? z : out.z
		out.w = typeof w === 'number' ? w : out.w
		return out
	}

	export function copy (out: Q4, q: Q4): Q4 {
		out.x = q.x
		out.y = q.y
		out.z = q.z
		out.w = q.w
		return out
	}

	export function clone (q: Q4): Q4 {
		return create(q.x, q.y, q.z, q.w)
	}

	export function equalish (a: Q4, b: Q4): boolean {
		return eq(a.x, b.x) && eq(a.y, b.y) && eq(a.z, b.z) && eq(a.w, b.w)
	}

	export function toArray<T extends {[n: number]: number}> (out: T, q: Q4, offset = 0) {
		out[offset + 0] = q.x
		out[offset + 1] = q.y
		out[offset + 2] = q.z
		out[offset + 3] = q.w
		return out
	}

	export function fromArray (out: Q4, a: ArrayLike<number>, offset = 0) {
		out.x = a[offset + 0]
		out.y = a[offset + 1]
		out.z = a[offset + 2]
		out.w = a[offset + 3]
		return out
	}

	export function inverse (out: Q4, q: Q4): Q4 {
		out.x = -q.x; out.y = -q.y; out.z = -q.z; out.w = -q.w
		return out
	}

	export function mult (out: Q4, a: Q4, b: Q4): Q4 {
		const qax = a.x, qay = a.y, qaz = a.z, qaw = a.w
		const qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w
		out.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby
		out.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz
		out.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx
		out.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz
		return out
	}

	export function multV3 (out: V3, q: Q4, v: V3): V3 {
		const x = v.x,
			y = v.y,
			z = v.z
		const qx = q.x,
			qy = q.y,
			qz = q.z,
			qw = q.w
		// q*v
		const ix = qw * x + qy * z - qz * y,
			iy = qw * y + qz * x - qx * z,
			iz = qw * z + qx * y - qy * x,
			iw = -qx * x - qy * y - qz * z

		out.x = ix * qw + iw * -qx + iy * -qz - iz * -qy
		out.y = iy * qw + iw * -qy + iz * -qx - ix * -qz
		out.z = iz * qw + iw * -qz + ix * -qy - iy * -qx
		return out
	}

	function angle (x: number, y: number): number {
		return Math.atan2(y, x)
	}

	/** Get angle around X */
	export function angleX (q: Q4): number {
		// transform a vector by the quaternion, then get its angle from y,z
		_v0.x = 0; _v0.y = -1; _v0.z = 0
		multV3(_v1, q, _v0)
		return angle(_v1.y, _v1.z)
	}

	export function angleY (q: Q4): number {
		_v0.x = 1; _v0.y = 0; _v0.z = 0
		multV3(_v1, q, _v0)
		return angle(_v1.x, _v1.z)
	}

	export function angleZ (q: Q4): number {
		_v0.x = 1; _v0.y = 0; _v0.z = 0
		multV3(_v1, q, _v0)
		return angle(_v1.x, _v1.y)
	}

	export function length (q: Q4): number {
		return Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w)
	}

	export function normalize (out: Q4, q: Q4): Q4 {
		let l = length(q)
		if (l === 0) {
			out.x = 0
			out.y = 0
			out.z = 0
			out.w = 1
		} else {
			l = 1 / l
			out.x = q.x * l
			out.y = q.y * l
			out.z = q.z * l
			out.w = q.w * l
		}
		return out
	}

	export function fromEuler(
		out: Q4, x: number, y: number, z: number, order?: string
	): Q4 {
		order = order || 'XYZ'

		const c1 = Math.cos(x / 2)
		const c2 = Math.cos(y / 2)
		const c3 = Math.cos(z / 2)
		const s1 = Math.sin(x / 2)
		const s2 = Math.sin(y / 2)
		const s3 = Math.sin(z / 2)

		if (order === 'XYZ') {
			out.x = s1 * c2 * c3 + c1 * s2 * s3
			out.y = c1 * s2 * c3 - s1 * c2 * s3
			out.z = c1 * c2 * s3 + s1 * s2 * c3
			out.w = c1 * c2 * c3 - s1 * s2 * s3
		} else if (order === 'YXZ') {
			out.x = s1 * c2 * c3 + c1 * s2 * s3
			out.y = c1 * s2 * c3 - s1 * c2 * s3
			out.z = c1 * c2 * s3 - s1 * s2 * c3
			out.w = c1 * c2 * c3 + s1 * s2 * s3
		} else if (order === 'ZXY') {
			out.x = s1 * c2 * c3 - c1 * s2 * s3
			out.y = c1 * s2 * c3 + s1 * c2 * s3
			out.z = c1 * c2 * s3 + s1 * s2 * c3
			out.w = c1 * c2 * c3 - s1 * s2 * s3
		} else if (order === 'ZYX') {
			out.x = s1 * c2 * c3 - c1 * s2 * s3
			out.y = c1 * s2 * c3 + s1 * c2 * s3
			out.z = c1 * c2 * s3 - s1 * s2 * c3
			out.w = c1 * c2 * c3 + s1 * s2 * s3
		} else if (order === 'YZX') {
			out.x = s1 * c2 * c3 + c1 * s2 * s3
			out.y = c1 * s2 * c3 + s1 * c2 * s3
			out.z = c1 * c2 * s3 - s1 * s2 * c3
			out.w = c1 * c2 * c3 - s1 * s2 * s3
		} else if (order === 'XZY') {
			out.x = s1 * c2 * c3 - c1 * s2 * s3
			out.y = c1 * s2 * c3 - s1 * c2 * s3
			out.z = c1 * c2 * s3 + s1 * s2 * c3
			out.w = c1 * c2 * c3 + s1 * s2 * s3
		}

		return out
	}

	const EPS = 0.000001

	export function fromUnitVectors (out: Q4, vFrom: V3, vTo: V3): Q4 {
		const v = _v0
		let r = V3.dot(vFrom, vTo) + 1
		if (r < EPS) {
			r = 0
			if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
				V3.set(v, -vFrom.y, vFrom.x, 0)
			} else {
				V3.set(v, 0, -vFrom.z, vFrom.y)
			}
		} else {
			V3.cross(v, vFrom, vTo)
		}
		out.x = v.x
		out.y = v.y
		out.z = v.z
		out.w = r
		normalize(out, out)
		return out
	}
}

export default Q4
