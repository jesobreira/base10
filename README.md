# Base10 Encoder/Decoder

This algorithm works like Base64 but uses numbers only as the output encoded string.

_Not sure why you would want it, tho._

Please note that due to the limited character set, the output strings are going too long.

## Examples

```
const base10 = require('base10')

const original = "Hello, world!";
console.log('Original string: ' + original)

const encoded = base10.encode(original);
console.log('Encoded string: ' + encoded);

const decoded = base10.decode(encoded);
console.log('Decoded string: ' + decoded);
```

