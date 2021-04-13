class Stack {
  constructor() {
    this.items = [];
  }

  // 添加选项到到顶部
  push(item) {
    this.items.push(item);
  }

  // 移除栈顶部选项, 返回移除的元素
  pop() {
    return this.items.pop();
  }

  // 返回顶部元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 栈的元素个数
  size() {
    return this.items.length;
  }

}

function test() {
  const stack = new Stack();
  console.log('stack is empty', stack.isEmpty());

  stack.push(5);
  stack.push(8);
  console.log('stack peek', stack.peek());

  stack.push(11);
  console.log('stack size', stack.size());
  console.log('stack is empty', stack.isEmpty());

  stack.push(15);
  stack.pop();
  stack.pop();
  console.log('stack size', stack.size());
}

test();
