function hash(key, arraylen) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        hashCode = (hashCode * primeNumber + value) % arraylen;
    }

    return hashCode;
}

class hashMap {
    constructor() {}
}
