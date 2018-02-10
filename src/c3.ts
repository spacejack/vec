interface C3 {
	r: number
	g: number
	b: number
}

namespace C3 {
	export function create (r?: number, g?: number, b?: number): C3 {
		return {
			r: typeof r === 'number' ? r : 0,
			g: typeof g === 'number' ? g : 0,
			b: typeof b === 'number' ? b : 0
		}
	}

	export function set (out: C3, r?: number, g?: number, b?: number) {
		out.r = typeof r === 'number' ? r : out.r
		out.g = typeof g === 'number' ? g : out.g
		out.b = typeof b === 'number' ? b : out.b
		return out
	}

	export function copy (dst: C3, src: C3) {
		dst.r = src.r
		dst.g = src.g
		dst.b = src.b
		return dst
	}

	export function clone (c: C3) {
		return create(c.r, c.g, c.b)
	}

	export function toHex (c: C3) {
		return (c.r * 255) << 16 ^ (c.g * 255) << 8 ^ (c.b * 255) << 0
	}

	export function fromHex (out: C3, hex: number) {
		const h = Math.floor(hex)
		out.r = (h >> 16 & 255) / 255
		out.g = (h >> 8 & 255) / 255
		out.b = (h & 255) / 255
		return out
	}

	export function toHexString (c: C3) {
		return ('000000' + toHex(c).toString(16)).slice(-6)
	}

	export function toArray<T extends {[n: number]: number}> (out: T, c: C3) {
		out[0] = c.r
		out[1] = c.g
		out[2] = c.b
		return out
	}

	export function fromArray (out: C3, a: ArrayLike<number>) {
		out.r = a[0]
		out.g = a[1]
		out.b = a[2]
		return out
	}
}

export default C3
