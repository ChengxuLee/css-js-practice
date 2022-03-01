// //原型对象
// let arr=[1,5,6,8,6,1];
// console.log(Object.getPrototypeOf(arr));// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// let arr2=[1,5,6,8,6,1];
// arr2=Object.create(null);
// console.log(Object.getPrototypeOf(arr2));//null 没有原型对象
// console.log(arr.__proto__==Object.getPrototypeOf(arr)); //true __proto__ 不推荐使用了
//
// 原型和本身都有某方法优先执行自己的
// let f=[2,5];
// console.log(f); //无getname 方法 原型上也没有 可以自己添加
// f.__proto__.getname=function(){console.log('name');}
// console.log(f.getname());//name
// f.getname=function(){console.log('myname');}
// console.log(f.getname());//myname
//
// 对象__proto__和其构造函数的prototype关系
// let a=new Array();
// console.log(a.__proto__==Array.prototype);//true
// let b='';
// console.log(b.__proto__==String.prototype);//true
// function User(){}
// let c=new User();
// console.log(c.__proto__==User.prototype);//true
//
// 设置对象的原型
//
// let son={name:'son'};
// let father={name:'father'};
// // console.log(son.show());//son.show is not a function 此时二者都没用该方法
// Object.setPrototypeOf(son,father);
// father.show=function(){console.log(this.name)}  //给father设置方法show();
// console.log(father.show()); //father
// console.log(son.show()); //son
//
// // 构造函数 原型__proto__ 原型对象 prototype
// // 总结来说 对象的__proto__指向构造函数的原型对象 Array.prototype
// // 对象和原型对象都通过constructor指回构造函数
// let e=new Array();
// console.log(e.__proto__==Array.prototype);//true
// console.log(Array==Array.prototype.constructor);//true
// console.log(Array==e.constructor);//true
//
// // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// function Father(){}
// let son=new Father();
// console.log(son instanceof Father);//true
// console.log(son instanceof Object);//true
//
// function A(){}
// function B(){}
// let b=new B();
// //相当于把A.prototype 的__proto__向上指向b 则 objec>B.prototype>b>A.prototype>a
// //因此b也属于a的原型链上的一环
// A.prototype=b;
// let a=new A();
// console.log(a instanceof A);//true
// console.log(a instanceof B);//true
// console.log(b instanceof A);//false
// console.log(b instanceof B);//true
//
// Object.isPrototypeOf // a是否在b的原型链上出现
//
// let a={};
// let b={};
// console.log(a.isPrototypeOf(b));//false
// console.log(Object.prototype.isPrototypeOf(b));//true
// Object.setPrototypeOf(b,a);
// console.log(a.isPrototypeOf(b));//true
//
//
// //属性检测 in 和 hasOwnProperty  这里区分 instanceof它是针对构造函数而言
// //in会检测该对象及其原型链
// let a1={url:'llllll'};
// let a2={name:'lee'};
//
// console.log('name' in a1); //false 原型链及本身没有name属性
// Object.setPrototypeOf(a1,a2);
// console.log('name' in a1); //true 原型链及本身有name属性
//
// //hasOwnProperty只会检测该对象
// console.log(a1.hasOwnProperty('name')); //false
//
//
// // 借用 ：DOM筛选借用数组的 filter
// // 当需要过滤掉某些DOM元素时 DOM对象并没有filter方法于是只能借用数组的
// // 例： <button class="vi-1"></button>
// // <button class="vi-1"></button>
// // <button class="vi-2"></button>
// // <button class="vi-2"></button>
//
// let btn=document.querySelectorAll('button'); //item=>item.hasAttribute('class="vi-1"');
// let a=Array.prototype.filter.call(btn,item=>item.className=='vi-1');//[button.vi-1, button.vi-1]
// console.log(a);
//
// // 提取公共方法放在原型上 避免多次创建浪费空间
// // 这种方式每次调用就会在内存中开辟一块空间调用show()
// function User(name,age){
//     this.name=name;
//     this.age=age;
//     this.show=function(){
//         console.log(this.name);
//     }
// }
// let lee=new User('lee');
// let wang=new User('wang');
// lee.show();//lee
// wang.show();// wang
//
// // 改版 提取公共方法给原型对象 这样对象就可以继承下来
// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// User.prototype.show=function(){
//     console.log(this.name);
// }
// let lee=new User('lee');
// let wang=new User('wang1');
// lee.show();//lee
// wang.show();// wang

//Object.create 和__proto__ Object.setPrototype
//Object.create是以前使用的版本 只能设置 无法读取因此改成了 __proto__

// let lee={
//         myname:'lee',
// }
// let wang={};  
// console.log(wang.hasOwnProperty('myname'));//false
// // wang=Object.create(lee,{
// //        myname:{
// //         value:'wang'
// //        } 
// // });
// wang.__proto__=lee; //非标准 
// // wang.__proto__={myname:'wang'};
// console.log(Object.getPrototypeOf(wang));//myname:'lee'


//标准设置和获取
//Object.setPrototypeOf设置原型 ==__proto__  Object.getPrototypeOf
// let lee={
//     name:'lee'
// }
// let wang={
//    show:function(){
//         console.log('ccc');
//     }
// }
// Object.setPrototypeOf(lee,wang);
// // Object.getPrototypeOf();
// lee.show();



// 为什么 __proto___=91 不能改变__proto__只能改变属性
let lee={name:'lee'};
lee.__proto__=91;
console.log(lee);//name:'lee'
lee.__proto__={age:10}
console.log(lee);//age:10 改变了lee原型的name  

// let lee1={
//      name:{},
//      get proto(){
//        return this.name;      
//      },   
//      set proto(obj){ //传入的值 就是上面的 lee.__proto__=91;
//         if(obj instanceof Object){
//                 return this.name=obj;
//         }
//      }
// }

// // lee1.proto=91;console.log(lee1);  //name:'lee'
// lee1.proto={age:10};console.log(lee1);//name:{age: 10}

// 如果一定要设置某种属性 可以将继承设置为 null
// let lee2={};
// lee2=Object.create(null);
// lee2.__proto__=91;
// console.log(lee2.__proto__);//91


//继承是原型的继承 而不是 构造函数的继承