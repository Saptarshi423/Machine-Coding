class Queue {
  #frontIndex;
  #rearIndex;
  #items;
  constructor() {
    this.#frontIndex = 0;
    this.#rearIndex = 0;
    this.#items = [];
  }
  enequeue(item) {
    this.#items[this.#rearIndex] = item;
    this.#rearIndex++;
  }
  dequeue() {
    this.#items.shift();
  }
  peek() {
    return this.#items[0];
  }
  isEmpty() {
    return this.#items.length == 0;
  }
  printQueue(){
    this.#items.forEach((item)=>{
        console.log(item);
    })
  }
}

var queue = new Queue();
console.log(queue)
queue.enequeue(1);
queue.enequeue(2);
queue.enequeue(3);
queue.enequeue(4);
queue.printQueue()

