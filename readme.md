# vec

A Minimal set of vector and color functions and structures. Works standalone or to ease interop within an application between various 3rd party libraries that use their own, incompatible, class-based implementations.

`v3`* functions will work for any structure having x, y, z number properties. `c3*` functions will work for any structure having r, g, b properties, etc.

Intended to ease type incombatibility issues when using Typescript but also avoids pitfalls of using class methods on objects that may be incompatibile when writing plain JS.

There are advantages to working with arrays instead of structs but structs may feel more user-friendly and may interop more easily with 3rd party libs.

Plain objects may (in some cases) be faster than arrays. Using the `*create` functions rather than `{...}` may also improve performance as objects of the same shape will be constructed from the same call site.

## Examples:

```typescript
import {v3copy} from 'vec/v3'

// Safely copy from one type to another without type errors
const v1 = new CANNON.Vec3(1,2,3)
const v2 = new THREE.Vector3()
v3copy(v2, v1)

// Create a plain object
const v3 = v3create()
v3copy(v3, v2)

// Compute distance between different vector instance types
import {v3dist} from 'vec/v3'
const d = v3dist(v1, v2)

// Can use 2D functions on XY components of 3D vectors
import {v2dist} from 'vec/v2'
const dXY = v2dist(v1, v2)
```
