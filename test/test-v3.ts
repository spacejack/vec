import {equalish} from '../src/common'
import V3 from '../src/v3'

export default function testV3 (o: any) {
	o.spec('V3', () => {

		o('create', () => {
			const v = V3.create()
			o(V3.equalish(v, {x: 0, y: 0, z: 0})).equals(true)
		})

		o('create from values', () => {
			const v = V3.create(1, 2, 3)
			o(V3.equalish(v, {x: 1, y: 2, z: 3})).equals(true)
		})

		o('clone', () => {
			const v = V3.clone({x: 1, y: 2, z: 3})
			o(V3.equalish(v, {x: 1, y: 2, z: 3})).equals(true)
		})

		o('copy', () => {
			const v = V3.copy(V3.create(), V3.create(1, 2, 3))
			o(V3.equalish(v, {x: 1, y: 2, z: 3})).equals(true)
		})

		o('set', () => {
			const v = V3.create()
			V3.set(v, 1, 2, 3)
			o(V3.equalish(v, {x: 1, y: 2, z: 3})).equals(true)
		})

		o('add', () => {
			const a = V3.create(1, 2, 3)
			const b = V3.create(4, 5, 6)
			const v = V3.add(V3.create(), a, b)
			o(V3.equalish(v, {x: 5, y: 7, z: 9})).equals(true)
			o(V3.equalish(a, {x: 1, y: 2, z: 3})).equals(true)
			o(V3.equalish(b, {x: 4, y: 5, z: 6})).equals(true)
		})

		o('sub', () => {
			const a = V3.create(1, 3, 5)
			const b = V3.create(4, 3, 2)
			const v = V3.sub(V3.create(), a, b)
			o(V3.equalish(v, {x: -3, y: 0, z: 3})).equals(true)
			o(V3.equalish(a, {x: 1, y: 3, z: 5})).equals(true)
			o(V3.equalish(b, {x: 4, y: 3, z: 2})).equals(true)
		})

		o('scale', () => {
			const a = V3.create(1, 2, 3)
			const out = V3.scale(V3.create(), a, 2)
			o(V3.equalish(out, {x: 2, y: 4, z: 6})).equals(true)
		})

		o('length', () => {
			const a = V3.create(1, 2, 3)
			const l = V3.length(a)
			o(equalish(l, 3.741657)).equals(true)
		})

		o('lengthSq', () => {
			const a = V3.create(1, 2, 3)
			const l = V3.lengthSq(a)
			o(equalish(l, 14)).equals(true)
		})

		o('dist', () => {
			const a = V3.create(1, 2, 3), b = V3.create(4, 5, 6)
			const d = V3.dist(a, b)
			o(equalish(d, 5.196152)).equals(true)
		})

		o('distSq', () => {
			const a = V3.create(1, 2, 3), b = V3.create(4, 5, 6)
			const d = V3.distSq(a, b)
			o(equalish(d, 27)).equals(true)
		})

		o('normalize', () => {
			const a = V3.create(0, 0, 5)
			const out = V3.normalize(V3.create(), a)
			o(equalish(V3.length(out), 1)).equals(true)
		})

		o('setLength', () => {
			const a = V3.create(0, 5, 0)
			const out = V3.setLength(V3.create(), a, 3)
			o(equalish(V3.length(out), 3)).equals(true)
		})

		o('dot', () => {
			const a = V3.create(1, 2, 3)
			const b = V3.create(4, 5, 6)
			const d = V3.dot(a, b)
			o(equalish(d, 32)).equals(true)
		})

		o('cross', () => {
			const a = V3.create(1, 2, 3)
			const b = V3.create(4, 5, 6)
			const c = V3.cross(V3.create(), a, b)
			o(V3.equalish(c, {x: -3, y: 6, z: -3})).equals(true)
		})

		o('multM3 identity', () => {
			const v = V3.create(1, 2, 3)
			const m = [1, 0, 0, 0, 1, 0, 0, 0, 1]
			const out = V3.multM3(V3.create(), v, m)
			o(V3.equalish(out, V3.create(1, 2, 3))).equals(true)
		})

		o('multM3 rotate X 90', () => {
			const v = V3.create(0, 1, 0)
			const m = [1, 0, 0, 0, 0, 1, 0, -1, 0]
			const out = V3.multM3(V3.create(), v, m)
			o(V3.equalish(out, V3.create(0, 0, 1))).equals(true)
		})

		o('multM3 rotate Y 90', () => {
			const v = V3.create(1, 0, 0)
			const m = [0, 0, -1, 0, 1, 0, 1, 0, 0]
			const out = V3.multM3(V3.create(), v, m)
			o(V3.equalish(out, V3.create(0, 0, -1))).equals(true)
		})

		o('multM3 rotate Z 90', () => {
			const v = V3.create(1, 0, 0)
			const m = [0, 1, 0, -1, 0, 0, 0, 0, 1]
			const out = V3.multM3(V3.create(), v, m)
			o(V3.equalish(out, V3.create(0, 1, 0))).equals(true)
		})

		o('multM4 identity', () => {
			const v = V3.create(1, 2, 3)
			const m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
			const out = V3.multM4(V3.create(), v, m)
			o(V3.equalish(out, V3.create(1, 2, 3))).equals(true)
		})

		o('multM4 perspective', () => {
			const v = V3.create(10, 20, 30)
			const m = [
				0.75, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, -1.02, -1,
				0, 0, -2.02, 0
			]
			const out = V3.multM4(V3.create(), v, m)
			o(V3.equalish(V3.create(-0.25, -0.666666, 1.087333), out)).equals(true)
		})
	})
}
