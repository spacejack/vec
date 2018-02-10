declare const require: (moduleName: string) => any
const o = require('ospec')
import testV2 from './test-v2'
import testV3 from './test-v3'

testV2(o)
testV3(o)

o.run()
