// console.log('11');
//简单选择排序
// function selectSort(arr){ //选择排序
//     var min;
//     for(var i=0;i<arr.length-1;i++){ //选择最小的元素
//         min=i;
//         for(var j=i+1;j<arr.length;j++){ //比较
//             if(arr[min]>arr[j])
//             min=j;
//         }
//         if(arr[i]!=arr[min]){
//             var tmp=arr[min];
//             arr[min]=arr[i];
//             arr[i]=tmp;
//         }
//
//     }
//     console.log(arr);
// }
// selectSort([1,2,3,5,9,3,2,9,77,0]);

//类的声明
// class User{};
// console.log(typeof User); //function
// let lee=class{}
// console.log(typeof lee); //function
//
// let wang={
//     show(){
//
//     }
// }
//完整语法
// class Article{
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     getName(){
//         return this.name;
//     }
// }
//
// let lee=new Article('lee',15);
// console.log(lee.name,lee.age)
// console.log(lee.getName())

// function Lee(){}
// class wang{}
//
// console.log(Lee.prototype.constructor===wang.prototype.constructor);
// class Lee{
//     show(){
//         console.log('1')
//     }
// }
// console.log(Lee); //show 在父级 类似于之前的提取公共方法到 构造函数的prototype上

// Object.getOwnPropertyNames() 获取属性名
// class User{
//     site='lee';
//     constructor(name){
//         this.name=name;
//     }

// }

// let lee=new User('lee');
// console.log(Object.getOwnPropertyNames(lee));//  ['name']

//class创建的 方法自动把遍历特征改成了false emurable=false 因此不会被遍历
//而 构造函数创建的 默认 emurable=true
// function User(name){
//     this.name=name;
// };
// User.prototype.show=function(){} //使用函数不希望show方法被遍历 可以判断
// // console.log(JSON.stringify(Object.getOwnPropertyDescriptors(User.prototype,'show',{}),null,2));
// let lee=new User('lee');
// for(var keys in lee){
//     if(lee.hasOwnProperty(keys)){
//         console.log(keys);  //能够遍历name 但不能遍历 show方法
//     }
// }

// class User{
//     constructor(name){
//         this.name=name;
//     }
//     show(){

//     }
// };
// // console.log(JSON.stringify(Object.getOwnPropertyDescriptors(User.prototype,'show',{}),null,2));
// let wang=new User('wang');
// for(var keys in wang){
//    console.log(keys); //show 不会被遍历出来
// }

//构造函数 的this指向默认为 windows 在严格模式下为unndfined
//class 的this指向默认为 unndfined

// class User{
//     show(){
//         function test(){
//             console.log(this);//undefined
//         }
//         test()
//     }

// }
// function ACR(){
//     console.log(this);
// }
// let lee=new User();
// lee.show();
// ACR(); //Window

// class Request{
//     static host='https://www.baidu.com';
//     api(url){
//         return Request.host+`/${url}`;
//     }
// }

// let obj =new Request();
// console.log(obj.api('accccc'));

//静态方法
// function User(){
//    User.prototype.show=function(){};
// }
//     User.show=function(){};//函数的方法是函数 它的prototype.
// console.log();

//普通函数方法和静态方法

// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   static create(name){
//      return new this(name);
//   }
// }
// let lee=Person.create('lee');
// console.log(lee);

//静态方法 课程管理系统 获取课程
// const batchdata = [
//   { name: "js", price: 300 },
//   { name: "vue.js", price: 212 },
//   { name: "python", price: 98 },
// ];
// class Lesson{
//   constructor(data){
//   this.model=data;
//   }
//   static creeate(batchdata){
//       return batchdata.map(item=>new Lesson(item));
//   }
//   static maxPrice(lesson){
//     return lesson.sort((a,b)=> b.price-a.price)[0];
//   }
//   get price(){
//       return this.model.price;
//   }
//   static totalPrice(lesson){
//       return lesson.reduce((c,t)=>c+t.price,0);
//   }
// }

// let lesson=Lesson.creeate(batchdata);
// console.log(Lesson.maxPrice(lesson).price);
// console.log(Lesson.totalPrice(lesson));

//命名规则保护属性

// class User{
//     _url={}; //_url 下划线开头表示受保护
//       constructor(name,age){
//           this.name=name;
//           this.age=age;
//       }
//       set url(url){
//           if((/^https?\/\/www.[0-z]{3,10}.(com|cn|org|edu)$/i).test(url)){
//             throw new Error('错误警告');
//           }
//           this._url=url;
//       }
// }
// let lee=new User('lee',18);
// // lee.name='wang';  //随意修改
// // console.log(lee.name);
// lee.url='https//www.baidu.com';

// Symbol 定义 protected
// const HOST = Symbol();
// class Father{
//   [HOST] = "https//www.baidu.com";
// }
// class User extends Father{
//   constructor(host) {
//       super();
//     this[HOST]= host;
//   }
//       get() {
//       return this[HOST];
//       }
//   set host(url) {
//     if (/^https?\/\/www.[0-z]{3,10}.(com|cn|org|edu)$/i.test(url)) {
//       throw new Error("错误警告");
//     }
//     this[HOST] = url;
//   }
// }
// let lee = new User('https//www.baidu.com');
// // lee.url='https//www.baidu.com';
// // console.log(lee);
// lee.host='https//www.baidu.com';
// console.log(lee);


//weakMao保护  protected

// const host =new WeakMap();
// class Father{
//   constructor(){
//     host.set(this,'https//www.13245.com');
//   }
//   get host() {
//     return host.get(this);
//     };
//   set host(url) {
//   if (/^https?\/\/www.[0-z]{3,10}.(com|cn|org|edu)$/i.test(url)) {
//     throw new Error("错误警告");
//   }
//    host.set(this,url);
// }
// }
// class User extends Father{
//   constructor(host) {
//       super();
//     this.host=host;
//   }
    
// }
// let lee = new User('111');
// // lee.url='https//www.baidu.com';
// // console.log(lee);
// // lee.host='https//www.baidu.com';
// console.log(lee.host);

//私有属性 #

// class User{
//     #url={}; // #表示私有属性其他不可访问
//       constructor(name,age){
//           this.name=name;
//           this.age=age;
//       }
//       #check=()=>{// #表示私有方法其他不可访问
//         console.log('我是私有方法');
//       }
//       set url(url){// #表示私有属性其他不可访问
//           if((/^https?\/\/www.[0-z]{3,10}.(com|cn|org|edu)$/i).test(url)){
//             throw new Error('错误警告');
//           }
//           this._url=url;
//       }
// }
// let lee=new User('lee',18);
// console.log(lee.check());//lee.check is not a function
// console.log(lee.#check());// Private field '#check' must be declared in an enclosing class

//继承是原型的继承 不是构造函数的继承
 // Admin.prototype=User.prototype 直接将 Admin实例指向User的原型 
 //  Admin.prototype =Object.create(User.prototype) 创建一个新的对象 实例指向这个对象 对象指向User原型
 //先实例再改变原型对象的指向 实例还是指向 原来的原型
//  function Admin(){
//      this.name='admin';
//  };
//  function User(){
//     this.name='user';

//  };
//  let lee=new Admin();
//  Admin.prototype=Object.create(User.prototype);
//Admin.prototype.constructor=Admin;  需要重新设置否则指向错误
//  Admin.prototype.role=function(){};
// //  lee.role() //lee.role is not a function
// console.log(lee.__proto__); //Admin(){
//后实例对象 先改变原型   Admin.prototype.__proto__=User.prototype;不受影响
//     function Admin(){
//         this.name='admin';
//     };
//     function User(){
//        this.name='user';
   
//     };
   
//     Admin.prototype=Object.create(User.prototype);
//     Admin.prototype.role=function(){};
//    //  lee.role() //lee.role is not a function
//    let lee=new Admin();
//    console.log(lee.__proto__); //User {role: ƒ}

//继承后 lee可以使用User的方法 自己也可以重写 派生类也可以调用基类的方法 
//User.prototype.show();


// class中属性的继承
// class User{
//     constructor(name){
//         this.name=name;
//     }

// }
// class Admin extends User{
//     constructor(name){
//        super(name);
//     }

// }
// let lee =new Admin('lee'); //name:'lee'  [[Prototype]]:User
// console.log(lee);

// class中方法的继承 方法始终在原型上 而属性时实例出来的方法 

// class User{
//         show(){
//             console.log('我是show');
//         }  
//     }
// class Admin extends User{}

// let lee=new Admin();

// lee.show()//我是show

//super可以在原型链上查找 向上攀升 。
//super 不加方法调用父类的构造函数super放在第一行 

// 静态继承 静态方法和静态属性

// class User{
// static name='lee';
// static show(){
//     console.log('this.name');
// }
// }
// class Admin extends User{
//     // super()
// }

// // let wang=new Admin();
// console.log(Admin.name);
// Admin.show();
// // wang.name;
// // wang.show(); 


//instanceof isPrototypeOf
// let a={};
// let b={
//     __proto__:a
// }
// console.log(a.isPrototypeOf(b));//true

// class User{}
// class Admin extends User{}
// let c=new Admin();
// console.log(c instanceof Admin);//true
// console.log(c instanceof User);//true



