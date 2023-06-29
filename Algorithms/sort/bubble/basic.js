function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) { // 会遍历每一个数字，每次冒泡一个数字
    for (let j = 0; j < i; j++) { // 在当前外循环节点内，排序子数组
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);// 交换相邻两个位置
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  let i = arr.length - 1;
  while(i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if(arr[j] < arr[j + 1]) {
        pos = j; // 遇到数据交换时，记录当前交换位置，可以节省一定时间
        swap(arr, j, j + 1);
      }
    }
    i = pos;
  }
}

function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]; // es6 数组解析赋值
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr));
