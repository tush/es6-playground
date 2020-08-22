function foo() {
    return [1,2,3,[4,5,6]];
}
var [a,b=42,c,...args] = foo();
// console.log(a, b, c, args);
var x = [a,b=42,c,...args] = foo();
// console.log(x);

// var obj = new Object();
// var [obj.a,obj.b=42,obj.c,...obj.args] = foo();
// console.log(o);

var aa = [1,2,3];

[x, y, ...aa] = [0, ...aa, 4]
// console.log(x, y, aa);