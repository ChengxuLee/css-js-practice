var a=Symbol('c');
var b=Symbol('c');
// console.log(a==b);
// console.log(typeof a);

//使用符号包装对象

var sym=Symbol();
var c=new Object(sym);
// console.log(typeof c);

//全局符号\
var l=Symbol.for('fu'); //0'fu'为字符串键
var w=Symbol.for('fu'); //相当于 w=l
// console.log(l==w);
// console.log(0);

//查询全局注册表 
var o=Symbol('ww');
var m=Symbol.for('ww');
console.log(Symbol.keyFor(o)); //普通符号
console.log(Symbol.keyFor(m)); //全局符号


 //内置符号 略
