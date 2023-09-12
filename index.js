function stringToByteArray(str) {
    let byteArray = [];
    for (let i = 0; i < str.length; i++) {
        byteArray.push(str.charCodeAt(i));
    }
    return byteArray;
}

function byteArrayToNumber(bytes) {
    let num = BigInt(0);
    for (let i = 0; i < bytes.length; i++) {
        num = (num << BigInt(8)) + BigInt(bytes[i]);
    }
    return num;
}

function encodeToBase10(str) {
    let byteArray = stringToByteArray(str);
    let num = byteArrayToNumber(byteArray);
    return num.toString(); // This is in base10
}

function numberToByteArray(num) {
    let byteArray = [];
    while (num > 0) {
        byteArray.unshift(Number(num & BigInt(0xFF)));
        num = num >> BigInt(8);
    }
    return byteArray;
}

function byteArrayToString(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

function decodeFromBase10(base10Str) {
    let num = BigInt(base10Str);
    let byteArray = numberToByteArray(num);
    return byteArrayToString(byteArray);
}

module.exports = { encode: encodeToBase10, decode: decodeFromBase10 }