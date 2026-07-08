class MinStack {
    // O(1)
    constructor() {
        this.array = [];
        this.minArray = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.minArray.length) {
            this.minArray.push(val)
        } else {
            const currentMin = this.minArray[this.minArray.length - 1];
            this.minArray.push(Math.min(currentMin, val));
        }




        this.array.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop();
        this.minArray.pop();
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
        return this.minArray[this.minArray.length - 1]
    }
}
