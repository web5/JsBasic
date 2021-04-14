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
    console.log(3) // resolve
  })

  // 宏任务 3
  console.log(2)
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

// example1();
// console.log('==========');
example2();
