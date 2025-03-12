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
            hashCode = (hashCode * primeNumber + value) % arraylen;
        }

        return hashCode;
    }

    set(key, value) {
        const hashValue = this.hash(key, this.keyMap.length);

        this.keyMap[hashValue] = value;
    }

    get(key) {
        const hashKey = this.hash(key, this.keyMap.length);

        if (this.list[hashKey]) {
            return this.list[hashKey];
        }

        return null;
    }

    has(key) {
        const hashValue = this.hash(key, this.keyMap.length);

        if (this.keyMap[hashValue]) return true;

        return false;
    }
}

const map = new hashMap();

map.set("panel", "siete");
map.set("espaci", "paz");
map.set("entension", "alegria");
map.set("mark", "decisiones");
