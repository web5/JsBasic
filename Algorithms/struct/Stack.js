class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmty() {
    return this.count === 0;
  }

  pop() {
    if(this.isEmty) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count]
    return result;
  }

  peek() {
    if(this.isEmty) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

console.log(stack);

console.log(stack.count);

