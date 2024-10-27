class StringBuilder { 
    #value = [];
    constructor(initialValue = '') { 
        this.#value = Array.from(initialValue);
    }
    getValue() { 
        return this.#value.join('');
    }
    padEnd(str = '') { 
        this.#value.push(str);
    }
    padStart(str = '') { 
        let newArr = [];
        newArr.push(str, ...this.#value);
        this.#value = newArr;
    }
    padBoth(str = '') { 
        let newArr = [];
        newArr.push(str, ...this.#value);
        this.#value = newArr;
        this.#value.push(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
