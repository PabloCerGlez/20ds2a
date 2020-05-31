// recurcion simple
function fact(num) {
    if (num == 1) {
        return num
    } else {
        return num * fact(num - 1)
    }
}
console.log(fact(5))


// recurcion con pila
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

function factorial(n) {
    var s = new Stack()
    while (n > 1) {
        s.push(n--)
    }
    var product = 1
    while (s.length() > 0) {
        product *= s.pop()
    }
    return product
}
console.log(factorial(5))