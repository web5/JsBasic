function test() {
    if(1) {
        let a = 2;
        var b = 2;
    }
    console.log(a); // 报错，a is not defined
    console.log(b); // 2 // 变量提升
    console.log(c); // undefined, // 变量提升, 先申明，但是未定义
    console.log(d); // 报错  Cannot access 'd' before initialization
    var c = 2;
    let d = 2;
}

test();
