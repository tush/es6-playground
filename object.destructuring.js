function foo() {
    return {a:1, btf:2, c:3,
        dt: {e:4}
    };
}
// var {a: a, b: b, c: c} = foo();
var {a, btf: b, c, dt: {e}, f = 42} = foo();
console.log(a, b, c, e);
