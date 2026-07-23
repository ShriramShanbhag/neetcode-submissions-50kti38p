class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.keyQ = [];
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) {
            return -1
        }

        let v = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, v);
        return v;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.map.delete(key);
        }
        this.map.set(key, value);

        if(this.map.size > this.capacity) {
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey)
        }
    }
}
