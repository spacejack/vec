# vec

A Minimal set of vector and color functions and structures. Works standalone or to ease interop within an application between various 3rd party libraries that use their own, incompatible, class-based implementations.

`V3.*` functions will work for any structure having x, y, z number properties. `C3.*` functions will work for any structure having r, g, b properties, etc.

Intended to ease type incombatibility issues when using Typescript but also avoids pitfalls of using class methods on objects that may be incompatibile when writing plain JS.

There are advantages to working with arrays instead of structs but structs may feel more user-friendly and may interop more easily with 3rd party libs.

Plain objects may (in some cases) be faster than arrays. Using the `*.create` functions rather than `{...}` may also improve performance as objects of the same shape will be constructed from the same call site.

## Examples:

```typescript
import V3 from 'vec/v3'

// Safely copy from one type to another without type errors
const a = new CANNON.Vec3(1,2,3)
const b = new THREE.Vector3()
V3.copy(b, a)

// Create a plain object
const c = V3.create()
V3.copy(c, b)

// Compute distance between different vector instance types
const d = V3.dist(a, b)

// Can use 2D functions on XY components of 3D vectors
import V2 from 'vec/v2'
const dXY = V2.dist(a, b)
```
