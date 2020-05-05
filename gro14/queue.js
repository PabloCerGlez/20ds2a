function Queue() {
    let items = []
    this.enqueue = function(element) {
        items.push(element)
    }
    this.denqueue = function() {
        return items.shift()
    }
    this.front = function() {
        return items[0]
    }
    this.isEmpty = function() {
        return items.length == 0
    }
    this.size = function() {
        return items.length
    }
    this.print = function() {
        console.log(items.toString())
    }
}

function hotPotato(nameList, num) {
    let queue = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    let eliminted = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.denqueue())
        }
        eliminted = queue.denqueue()
        console.log(eliminted + 'was eliminated from the hot potato game.')
    }
    return queue.denqueue()
}
let names = ['john', 'jack', 'camila', 'ingrid', 'carlos']
let winner = hotPotato(names, 7)
console.log('the winner is:' + winner)