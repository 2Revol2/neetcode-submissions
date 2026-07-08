class MinStack {
    // O(n)
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return  Math.min(...this.array)
    }
}
