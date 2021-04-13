function test() {
    if(1) {
        let a = 2;
        var b = 2;
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    var c =2;
    let d = 2;
}

test();