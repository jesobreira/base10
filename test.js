const base10 = require('./')

const original = "Hello, world!";
console.log('Original string: ' + original)

const encoded = base10.encode(original);
console.log('Encoded string: ' + encoded);

const decoded = base10.decode(encoded);
console.log('Decoded string: ' + decoded);