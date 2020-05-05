function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push(element) {
    this.dataStore[this.top++] = element
}

function peek() {
    return this.dataStore[this.top - 1]
}

function pop() {
    return this.dataStore[--this.top]
}

function clear() {
    this.top = 0
}

function length() {
    return this.top
}

function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) { //{1}
        rem = Math.floor(decNumber % 2); //{2}
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
    }
    while (!remStack.isEmpty()) { //{5}
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(100));