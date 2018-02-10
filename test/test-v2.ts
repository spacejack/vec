import {equalish} from '../src/common'
import V2 from '../src/v2'

export default (o: any) => o.spec('V2', () => {

	o('create', () => {
		const v = V2.create()
		o(V2.equalish(v, {x: 0, y: 0})).equals(true)
	})

	o('create from values', () => {
		const v = V2.create(1, 2)
		o(V2.equalish(v, {x: 1, y: 2})).equals(true)
	})

	o('clone', () => {
		const v = V2.clone({x: 1, y: 2})
		o(V2.equalish(v, {x: 1, y: 2})).equals(true)
	})

	o('copy', () => {
		const v = V2.copy(V2.create(), V2.create(1, 2))
		o(V2.equalish(v, {x: 1, y: 2})).equals(true)
	})

	o('set', () => {
		const v = V2.create()
		V2.set(v, 1, 2)
		o(V2.equalish(v, {x: 1, y: 2})).equals(true)
	})

	o('add', () => {
		const a = V2.create(1, 2)
		const b = V2.create(4, 5)
		const v = V2.add(V2.create(), a, b)
		o(V2.equalish(v, {x: 5, y: 7})).equals(true)
		o(V2.equalish(a, {x: 1, y: 2})).equals(true)
		o(V2.equalish(b, {x: 4, y: 5})).equals(true)
	})

	o('sub', () => {
		const a = V2.create(1, 3)
		const b = V2.create(4, 3)
		const v = V2.sub(V2.create(), a, b)
		o(V2.equalish(v, {x: -3, y: 0})).equals(true)
		o(V2.equalish(a, {x: 1, y: 3})).equals(true)
		o(V2.equalish(b, {x: 4, y: 3})).equals(true)
	})

	o('scale', () => {
		const a = V2.create(1, 2)
		const out = V2.scale(V2.create(), a, 2)
		o(V2.equalish(out, {x: 2, y: 4})).equals(true)
	})

	o('length', () => {
		const a = V2.create(1, 2)
		const l = V2.length(a)
		o(equalish(l, 2.236067)).equals(true)
	})

	o('lengthSq', () => {
		const a = V2.create(1, 2)
		const l = V2.lengthSq(a)
		o(equalish(l, 5)).equals(true)
	})

	o('dist', () => {
		const a = V2.create(1, 2), b = V2.create(3, 4)
		const d = V2.dist(a, b)
		o(equalish(d, 2.828427)).equals(true)
	})

	o('distSq', () => {
		const a = V2.create(1, 2), b = V2.create(3, 4)
		const d = V2.distSq(a, b)
		o(equalish(d, 8)).equals(true)
	})

	o('normalize', () => {
		const a = V2.create(0, 5)
		const out = V2.normalize(V2.create(), a)
		o(equalish(V2.length(out), 1)).equals(true)
	})

	o('setLength', () => {
		const a = V2.create(5, 0)
		const out = V2.setLength(V2.create(), a, 3)
		o(equalish(V2.length(out), 3)).equals(true)
	})

	o('dot', () => {
		const a = V2.create(1, 2)
		const b = V2.create(3, 4)
		const d = V2.dot(a, b)
		o(equalish(d, 11)).equals(true)
	})

	o('multM3 identity', () => {
		const v = V2.create(1, 2)
		const m = [1, 0, 0, 0, 1, 0, 0, 0, 1]
		const out = V2.multM3(V2.create(), v, m)
		o(V2.equalish(out, V2.create(1, 2))).equals(true)
	})

})
