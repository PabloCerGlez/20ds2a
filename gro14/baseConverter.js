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

function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'; //{6}
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; //{7}
    }
    return baseString;
}
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 4));
console.log(baseConverter(100345, 8));