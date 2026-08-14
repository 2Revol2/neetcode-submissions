class MinStack {
    // O(n)
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
        }

        if(this.minArray[this.minArray.length - 1] > val) {
           this.minArray.push(val)
        }


        this.array.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.minArray[this.minArray.length - 1] === this.array[this.array.length - 1]) {
            this.minArray.pop()
        }

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
        return this.minArray[this.minArray.length - 1]
    }
}
