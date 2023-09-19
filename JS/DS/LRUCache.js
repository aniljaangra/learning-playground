class DLLNode {
  constructor (key, value) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {

  print(){
    let tempArr = []
    let node = this.head.next;
    while(node){
      if(node.key)
        tempArr.push(node.key)
      node = node.next;
    }
    console.log(tempArr)
  }
  constructor (capacity) {
    this.keys = {};
    this.head = new DLLNode('','');
    this.tail = new DLLNode('','');
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.size = 0; // New variable to keep track of the current number of elements in the cache
  }

  insertNode(node){
    const realTail = this.tail.prev;
    realTail.next = node;
    node.prev = realTail;
    node.next = this.tail;
    this.tail.prev = node;
    this.size++;
    this.keys[node.key] = node;
  }

  removeNode(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
    delete this.keys[node.key]
  }

  get(key){
    const node = this.keys[key];
    if(node){
      this.removeNode(node);
      this.insertNode(node);
      this.print();
      return node.value;
    }
  }

  set(key, value){
    const node = new DLLNode(key,value);
    this.insertNode(node)

    if(this.size > this.capacity){
      this.removeNode(this.head.next)
    }
    this.print();
  }

}

const lruCache = new LRUCache(5);
lruCache.set(1, 100);
lruCache.set(2, 101);
lruCache.set(3, 102);
lruCache.set(4, 103);
lruCache.set(5, 104);
lruCache.set(6, 106);
lruCache.get(3);
lruCache.set(7, 107);
lruCache.get(5);

