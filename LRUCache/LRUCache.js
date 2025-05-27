class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (this.cache[key]) {
      this.moveToFront(key);
      return this.cache[key].value;
    }
    return null;
  }

  put(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.moveToFront(); // move the node to the front of the cache
    } else {
      if (Object.keys(this.cache).length === this.capacity) {
        this.removeLast();
      }
      this.addToFront(key, value);
    }
  }

  // move a node to the front of the cache
  // (most recently used)
  moveToFront(key) {
    const node = this.cache[key];
    if (node === this.head) {
      return;
    }

    let tempPtr = this.head;
    let prev = null;
    while (tempPtr !== null && tempPtr !== node) {
      prev = tempPtr;
      tempPtr = tempPtr.next;
    }

    // if the node is the tail, we need to update the tail
    if (tempPtr === this.tail) {
      this.tail = prev;
    }

    // update the next pointer of the previous node
    // to skip the current node
    if (prev !== null) {
      prev.next = tempPtr.next;
    }

    // update the head to point to the new node
    tempPtr.next = this.head;
    this.head = tempPtr;
  }

  // add a node to the front of the cache
  // (most recently used)
  addToFront(key, value) {
    const newNode = { key, value, next: null };
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.cache[key] = newNode;
  }

  // remove the least recently used node
  // (the last node in the cache)
  removeLast() {
    if (this.tail == null) {
      return;
    }

    delete this.cache[this.tail.key];
    
    // if the tail is the only node in the cache
    // we need to update the head and tail to null
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      let tempPtr = this.head;
      while (tempPtr.next !== this.tail) {
        tempPtr = tempPtr.next;
      }
      tempPtr.next = null;
      this.tail = tempPtr;
    }
  }
}
