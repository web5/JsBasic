/**
 * 宏任务，微任务执行顺序
 */



function example1() {
  // 宏任务1，但是settimeout有一个最小延时
  setTimeout(_ => console.log(4))

  // 宏任务1
  new Promise(resolve => {
    resolve() // 微任务中的任务
    console.log(1) // 微任务中的任务
  }).then(_ => {
    console.log(3) // resolve 回调执行的是宏任务
  })

  // 宏任务 3
  console.log(2)

  // event loop 队列 为[console.log(1), console.log(2), console.log(3), console.log(4)]
  // 我们需要弄清楚的是，是什么时候加入进去的
}

function example2() {
  setTimeout(_ => console.log(4))

  new Promise(resolve => {
    resolve()
    console.log(1)
  }).then(_ => {
    console.log(3)
    Promise.resolve().then(_ => {
      console.log('before timeout')
    }).then(_ => {
      Promise.resolve().then(_ => {
        console.log('also before timeout')
      })
    })
  })
  console.log(2)
}

// setImmediate与setTimeout的区别
function example3() {
  setTimeout(_ => console.log('setTimeout'))
  setImmediate(_ => console.log('setImmediate'))
  setTimeout(_ => console.log('setTimeout'))
setImmediate(_ => console.log('setImmediate'))

// let countdown = 1e9

// while(countdown--) { } // 我们确保这个循环的执行速度会超过定时器的倒计时，导致这轮循环没有结束时，setTimeout已经可以执行回调了，所以会先执行`setTimeout`再结束这一轮循环，也就是说开始执行`setImmediate`
}

// process.nextTick
function example4() {

}

// async/await
function example5() {
  setTimeout(_ => console.log(4))

  async function main() {
    console.log(1)
    await Promise.resolve()
    console.log(3)
  }

  main()

  console.log(2);
}

//

// example1();
// console.log('==========');
// example2();
// example3();
example5();

