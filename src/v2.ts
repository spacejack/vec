export interface V2 {
	x: number
	y: number
}

export function v2create (x?: number, y?: number): V2 {
	return {
		x: typeof x === 'number' ? x : 0,
		y: typeof y === 'number' ? y : 0,
	}
}

export function v2set (out: V2, x?: number, y?: number) {
	out.x = typeof x === 'number' ? x : out.x
	out.y = typeof y === 'number' ? y : out.y
	return out
}

export function v2copy (out: V2, v: V2) {
	out.x = v.x
	out.y = v.y
	return out
}

export function v2clone (v: V2) {
	return v2create(v.x, v.y)
}

export function v2toArray<T extends {[n: number]: number}> (out: T, v: V2) {
	out[0] = v.x
	out[1] = v.y
	return out
}

export function v2fromArray (out: V2, a: ArrayLike<number>) {
	out.x = a[0]
	out.y = a[1]
	return out
}

export function v2add (out: V2, a: V2, b: V2) {
	out.x = a.x + b.x
	out.y = a.y + b.y
	return out
}

export function v2sub (out: V2, a: V2, b: V2) {
	out.x = a.x - b.x
	out.y = a.y - b.y
	return out
}

export function v2multScalar (out: V2, v: V2, s: number) {
	out.x = v.x * s
	out.y = v.y * s
	return out
}

export function v2length (v: V2) {
	return Math.sqrt(v.x * v.x + v.y * v.y)
}

export function v2lengthSq (v: V2) {
	return v.x * v.x + v.y * v.y
}

export function v2setLength (out: V2, v: V2, l: number) {
	let s = v2length(v)
	if (s > 0.0) {
		s = l / s
		out.x = v.x * s
		out.y = v.y * s
	}
	else {
		out.x = l
		out.y = 0.0
	}
	return out
}

export function v2normalize (out: V2, v: V2) {
	return v2setLength(out, v, 1.0)
}

export function v2dist (a: V2, b: V2) {
	const dx = b.x - a.x
	const dy = b.y - a.y
	return Math.sqrt(dx * dx + dy * dy)
}

export function v2distSq (a: V2, b: V2) {
	const dx = b.x - a.x
	const dy = b.y - a.y
	return dx * dx + dy * dy
}

export function v2dot (a: V2, b: V2) {
	return a.x * b.x + a.y * b.y
}

export function v2det (a: V2, b: V2) {
	return a.x * b.y - a.y * b.x
}

/** nx,ny should be normalized; vx,vy length will be preserved */
export function v2reflect (out: V2, v: V2, n: V2) {
	const d = v2dot(n, v)
	out.x = v.x - 2.0 * d * n.x
	out.y = v.y - 2.0 * d * n.y
	return out
}
