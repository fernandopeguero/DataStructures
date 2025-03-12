class hashMap {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key, arraylen) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            hashCode = (hashCode * primeNumber + value) % (arraylen || 2);
        }

        return hashCode;
    }

    set(key, value) {
        const hashValue = hash(key, this.list.length);

        this.list.splice(hashValue, 0, value);
    }

    get(key) {
        const hashKey = hash(key, this.list.length);

        if (this.list[hashKey]) {
            return this.list[hashKey];
        }

        return null;
    }
}

const hMap = new hashMap();
