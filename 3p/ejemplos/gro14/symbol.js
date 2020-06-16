function Stack() {
    let items = []
    this.push = function(element) {
        items.push(element)
    }
    this.pop = function() {
        return items.pop()
    }
    this.peek = function() {
        return items[items.length - 1]
    }
    this.isEmpty = function() {
        return items.length == 0
    }
    this.size = function() {
        return items.length
    }
    this.clear = function() {
        items = []
    }
    this.print = function() {
        console.log(items.toString())
    }
}

let stack = new Stack();
stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]];
stack.print();