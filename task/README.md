# 代码说明

```javascript

+setTimeout(_ => {
-  console.log(4)
+})

+new Promise(resolve => {
+  resolve()
+  console.log(1)
+}).then(_ => {
-  console.log(3)
+})

+console.log(2)

```

### 待确认问题

setTimeout 里面的回调函数是微任务，还是宏任务
