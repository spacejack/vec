import V2 from '../src/v2'

const v = V2.create()
v.x = 1
v.y = 2
const l = V2.length(v)
console.log('length:', l)
const lsq = V2.lengthSq(v)
console.log('length squared:', lsq)
console.log('tests ok')
