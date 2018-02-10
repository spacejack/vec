declare const require: (moduleName: string) => any
const o = require('ospec')
import testV3 from './test-v3'

testV3(o)

o.run()
