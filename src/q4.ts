import {V3, v3set, v3create, v3dot, v3cross} from './v3'

export interface Q4 {
	x: number
	y: number
	z: number
	w: number
}

export function q4create (x?: number, y?: number, z?: number, w?: number): Q4 {
	return {
		x: typeof x === 'number' ? x : 0,
		y: typeof y === 'number' ? y : 0,
		z: typeof z === 'number' ? z : 0,
		w: typeof w === 'number' ? w : 1
	}
}

export function q4set (out: Q4, x?: number, y?: number, z?: number, w?: number): Q4 {
	out.x = typeof x === 'number' ? x : out.x
	out.y = typeof y === 'number' ? y : out.y
	out.z = typeof z === 'number' ? z : out.z
	out.w = typeof w === 'number' ? w : out.w
	return out
}

export function q4copy (out: Q4, q: Q4): Q4 {
	out.x = q.x
	out.y = q.y
	out.z = q.z
	out.w = q.w
	return out
}

export function q4clone (q: Q4): Q4 {
	return q4create(q.x, q.y, q.z, q.w)
}

export function q4inverse (out: Q4, q: Q4): Q4 {
	out.x = -q.x; out.y = -q.y; out.z = -q.z; out.w = -q.w
	return out
}

export function q4mult (out: Q4, a: Q4, b: Q4): Q4 {
	const qax = a.x, qay = a.y, qaz = a.z, qaw = a.w
	const qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w
	out.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby
	out.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz
	out.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx
	out.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz
	return out
}

export function q4multV3 (out: V3, q: Q4, v: V3): V3 {
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
export function q4angleX (q: Q4): number {
	// transform a vector by the quaternion, then get its angle from y,z
	_v0.x = 0.0; _v0.y = -1.0; _v0.z = 0.0
	q4multV3(_v1, q, _v0)
	return angle(_v1.y, _v1.z)
}

export function q4angleY (q: Q4): number {
	_v0.x = 1.0; _v0.y = 0.0; _v0.z = 0.0
	q4multV3(_v1, q, _v0)
	return angle(_v1.x, _v1.z)
}

export function q4angleZ (q: Q4): number {
	_v0.x = 1.0; _v0.y = 0.0; _v0.z = 0.0
	q4multV3(_v1, q, _v0)
	return angle(_v1.x, _v1.y)
}

export function q4length (q: Q4): number {
	return Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w)
}

export function q4normalize (out: Q4, q: Q4): Q4 {
	let l = q4length(q)
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

export function q4fromEuler(
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

export function q4fromUnitVectors (out: Q4, vFrom: V3, vTo: V3): Q4 {
	const v = _v0
	let r = v3dot(vFrom, vTo) + 1
	if (r < EPS) {
		r = 0
		if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
			v3set(v, -vFrom.y, vFrom.x, 0)
		} else {
			v3set(v, 0, -vFrom.z, vFrom.y)
		}
	} else {
		v3cross(v, vFrom, vTo)
	}
	out.x = v.x
	out.y = v.y
	out.z = v.z
	out.w = r
	q4normalize(out, out)
	return out
}

// Scratchpad objects
const _v0 = v3create(0, 0, 0)
const _v1 = v3create(0, 0, 0)
