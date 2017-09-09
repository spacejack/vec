export interface V3 {
	x: number
	y: number
	z: number
}

export function v3create (x?: number, y?: number, z?: number): V3 {
	return {
		x: typeof x === 'number' ? x : 0,
		y: typeof y === 'number' ? y : 0,
		z: typeof z === 'number' ? z : 0
	}
}

export function v3set (out: V3, x?: number, y?: number, z?: number) {
	out.x = typeof x === 'number' ? x : out.x
	out.y = typeof y === 'number' ? y : out.y
	out.z = typeof z === 'number' ? z : out.z
	return out
}

export function v3copy (out: V3, v: V3) {
	out.x = v.x
	out.y = v.y
	out.z = v.z
	return out
}

export function v3clone (v: V3) {
	return v3create(v.x, v.y, v.z)
}

export function v3toArray<T extends {[n: number]: number}> (out: T, v: V3) {
	out[0] = v.x
	out[1] = v.y
	out[2] = v.z
	return out
}

export function v3fromArray (out: V3, a: ArrayLike<number>) {
	out.x = a[0]
	out.y = a[1]
	out.z = a[2]
	return out
}

export function v3add (out: V3, a: V3, b: V3) {
	out.x = a.x + b.x
	out.y = a.y + b.y
	out.z = a.z + b.z
	return out
}

export function v3sub (out: V3, a: V3, b: V3) {
	out.x = a.x - b.x
	out.y = a.y - b.y
	out.z = a.z - b.z
	return out
}

export function v3multScalar (out: V3, v: V3, s: number) {
	out.x = v.x * s
	out.y = v.y * s
	out.z = v.z * s
	return out
}

export function v3length (v: V3) {
	return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
}

export function v3lengthSq (v: V3) {
	return v.x * v.x + v.y * v.y + v.z * v.z
}

export function v3setLength (out: V3, v: V3, l: number) {
	let s = v3length(v)
	if (s > 0.0) {
		s = l / s
		out.x = v.x * s
		out.y = v.y * s
		out.z = v.z * s
	}
	else {
		out.x = l
		out.y = 0.0
		out.z = 0.0
	}
	return out
}

export function v3normalize (out: V3, v: V3) {
	return v3setLength(out, v, 1.0)
}

export function v3dist (a: V3, b: V3) {
	const dx = b.x - a.x
	const dy = b.y - a.y
	const dz = b.z - a.z
	return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

export function v3distSq (a: V3, b: V3) {
	const dx = b.x - a.x
	const dy = b.y - a.y
	const dz = b.z - a.z
	return dx * dx + dy * dy + dz * dz
}

export function v3dot (a: V3, b: V3) {
	return a.x * b.x + a.y * b.y + a.z * b.z
}

export function v3cross (out: V3, a: V3, b: V3) {
	const ax = a.x, ay = a.y, az = a.z,
		bx = b.x, by = b.y, bz = b.z
	out.x = ay * bz - az * by
	out.y = az * bx - ax * bz
	out.z = ax * by - ay * bx
	return out
}
