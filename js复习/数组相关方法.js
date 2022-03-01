// 类数组对象
// 1、argumments对象：arguments对象用于保存数组中的实参，可以直接通过arguments[0]访问函数的第一个实参

// 2、document.getElementsByTagName()：返回一个类数组对象

// 3、字符串String：一个可读的类数组对象，可以通过str[0]获取第一个字符，str.length获取字符串的长度

function arr(){

[...arguments].forEach(function(item){

        console.log(item);
});

}
arr(1,2,3,4)

// 数组增删改查
// slice 和 splice
var a=[1,2,3,4,5];  
console.log(a.slice(2));  //slice 左闭右开区间 创建新的数组
console.log(a.slice(2,5));
console.log(a.slice(-2));
console.log(a.slice(-3,-1));

//字符串型 把类数组转换成数组
var b='defee256';
console.log(b.slice(2)); //字符串截取
console.log(Array.prototype.slice.call(b)); //['d', 'e', 'f', 'e', 'e', '2', '5', '6']

//arguments 类数组对象
function q(){
  console.log(Array.prototype.slice.call(arguments)); //[1, 5, 9, 8, 10, 6]
}
q(1,5,9,8,10,6)

//splice 修改原数组 返回值为 新数组 
var e=[1,5,6,7,8,9];
console.log(e.splice()); //没有删除的元素 返回[]
// console.log(e.splice(1)); //从下标为1开始删除 
console.log(e.splice(1,3)); //从下标为1开始删除3个元素
//可以添加元素
var f=[1,5,6,7,8,9];
console.log(f,f.splice(0,0,'s')); // 第三个位置为要添加的元素 ['s', 1, 5, 6, 7, 8, 9]  

//查找 indexof lastidexof
var g=[1,5,6,7,8,9];
console.log(g.indexOf(6));
console.log(g.lastIndexOf(6)); //从后向前 返回值一样 
console.log(g.includes(6)); //是否包含
//查找  find findIndex
var g2=[1,5,6,7,8,9];
console.log(g2.find(6));  //返回第一个值
console.log(g2.findIndex(6));  //返回第一个索引

// 1、findIndex()和indexOf方法实现都是通过循环遍历查找。

// 2、findIndex()的应用场景要比indexOf广泛一些，可以查找大于等于小于，表达式可以随便写，indexOf就只能在第一层查找相等的值。

// 3、findIndex()实际上相当于一个for循环，只不过找到了你不需要自己退出。

function test(){
this.a=function(){

}
}
//
test.b=function(){}
//
test.prototype.slice=function(){

}

//填充 fill()
var a1=[5,1,8,9,3,2];
var a2='anjdhjw';
console.log(a1.fill(6));  //全部填充6
console.log(a1.fill(1,3,6));  //1-2 填充6
console.log(Array(6));  //长度为6的空数组，内容empty
console.log(Array.of(6));//创建一个有6的数组 
console.log(Array.from(a2));//用于伪数组对象或可迭代对象 ==Array.prototype……

对象的方法
var obj={
    a:1,
    b:2,
    c:3,
    d:4
};
// console.log(Object.keys(obj)); //打印键
// console.log(Object.values(obj)); //打印值
// console.log(Object.entries(obj)); //打印键和值

//数组的方法
var arr=[5,6,4,7,8];

console.log(arr.keys()); //打印键
console.log(arr.values()); //打印值
console.log(arr.entries()); //打印键和值


reduce使用场景
var arr=[5,9,1,3,7,5];
arr.reduce(function(acc,value){

    return acc+value;
},0)
var arr1=[5,9,1,3,7,5];
arr1.reduce(
    (acc,value)=> acc+value,0
)


数组增删改查
slice 和 splice
var a=[1,2,3,4,5];  
console.log(a.slice(2));  //slice 左闭右开区间 创建新的数组
console.log(a.slice(2,5));
console.log(a.slice(-2));
console.log(a.slice(-3,-1));

//字符串型 把类数组转换成数组
var b='defee256';
console.log(b.slice(2)); //字符串截取
console.log(Array.prototype.slice.call(b)); //['d', 'e', 'f', 'e', 'e', '2', '5', '6']

//arguments 类数组对象
function q(){
  console.log(Array.prototype.slice.call(arguments)); //[1, 5, 9, 8, 10, 6]
}
q(1,5,9,8,10,6)

//splice 修改原数组 返回值为 新数组 
var e=[1,5,6,7,8,9];
console.log(e.splice()); //没有删除的元素 返回[]
// console.log(e.splice(1)); //从下标为1开始删除 
console.log(e.splice(1,3)); //从下标为1开始删除3个元素
//可以添加元素
var f=[1,5,6,7,8,9];
console.log(f,f.splice(0,0,'s')); // 第三个位置为要添加的元素 ['s', 1, 5, 6, 7, 8, 9]  

//查找 indexof lastIndexof
var g=[1,5,6,7,8,9];
console.log(g.indexOf(6));
console.log(g.lastIndexOf(6)); //从后向前 返回值一样 
console.log(g.includes(6)); //是否包含
//查找  find findIndex
var g2=[1,5,6,7,8,9];
console.log(g2.find(6));  //返回第一个值
console.log(g2.findIndex(6));  //返回第一个索引

// 1、findIndex()和indexOf方法实现都是通过循环遍历查找。

// 2、findIndex()的应用场景要比indexOf广泛一些，可以查找大于等于小于，表达式可以随便写，indexOf就只能在第一层查找相等的值。

// 3、findIndex()实际上相当于一个for循环，只不过找到了你不需要自己退出。

function test(){
this.a=function(){

}
}
//
test.b=function(){}
//
test.prototype.slice=function(){

}

//填充 fill()
var a1=[5,1,8,9,3,2];
var a2='anjdhjw';
console.log(a1.fill(6));  //全部填充6
console.log(a1.fill(1,3,6));  //1-2 填充6
console.log(Array(6));  //长度为6的空数组，内容empty
console.log(Array.of(6));//创建一个有6的数组 
console.log(Array.from(a2));//用于伪数组对象或可迭代对象 ==Array.prototype……