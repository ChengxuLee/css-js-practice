let myname='lee';
let grade=[
    {lessonName:'js',score:100},
    {lessonName:'docker',score:50}
]
function average(myname,grade){
    let total=grade.reduce((count,item,index)=>count+item.score,0);
    console.log(`${myname}的平均成绩是${total/grade.length}`);
}
average(myname,grade);
'use strict';

//面向对象写法————————————————————————————————————————————
let user={
    myname:'lee',
    grade:[
        {lessonName:'js',score:100},
        {lessonName:'docker',score:50}
    ],
   average(){
        let total=this.grade.reduce((count,item,index)=>count+item.score,0);
        console.log(`${this.myname}的平均成绩是${total/this.grade.length}`);
    }
} 

user.average();
数组添加元素几种方式 
扩展参数
let arr1=[1,5,9,7,8,9];
let a=[...arr1,5];
console.log(a);
//push & shift
let arr2=[1,5,9,7,8,9];
let b=arr2.push(6,8);//[1, 5, 9, 7, 8, 9, 6, 8]
console.log(arr2);
let c=arr2.unshift(0,0);//[0, 0, 1, 5, 9, 7, 8, 9, 6, 8]
console.log(arr2);
//splice
let arr3=[1,2,6,5,4,8];
arr3.splice(3,0,1);
console.log(arr3);//1, 2, 6, 1, 5, 4, 8]
concat
console.log(arr.concat(1));

展开语法完成参数合并

function upload(params){
    let config={
        type:'*gif,jpg',
        size:200
    };
    config={...config,...params};
    console.log(config);
}
upload({type:'ccc',size:1000});

// 解构————————————————————————————————
// 解构语法 1
let a={
    myname:'lee',
    age:18
}
let { myname:e,age:b}=a;
console.log(e,b); //lee 18
let {myname,age}=a;
console.log(myname,age); //lee 18

function user({myname,age}){
    console.log(myname,age);
}
user({myname:'lee',age:18});

//解构语法 2
let {random}=Math; //可以解构部分
console.log(random());
//解构语法 3
let arr=[1,2,5,8,9];
let [a,b]=arr;
console.log(a);
//简写 解构语法 4
let myname='lee',age=18;
let op={myname,age};
console.log(op);

// 解构语法 5
let url={
    myname:'lee',
    age:{title:'dd'}
};
let {myname,age:{title}}=url;
console.log({myname,title});

// 解构语法 5 案例：参数合并
function creatElement(option={}){
    let {width=200,height=500,backgroundColor='red'}=option;
    let div=document.createElement('div');
    div.style.width=width+'px';
    div.style.height=width+'px';
    div.style.backgroundColor=backgroundColor;
    document.body.appendChild(div);
}
creatElement({width:500,height:500,backgroundColor:'green'});

// 解构语法 6
function prin({name,age}){

    console.log(name,age);//{name: 'cc', age: 10}
}
console.log({name:'cc',age:10});
第二种写法 
function prin(name,{sex,age}){

    console.log(name,sex,age);//{name: 'cc', age: 10}
}
console.log('cc',{sex:'man',age:10});//cc {sex: 'man', age: 10} 

// 原型属性检测 hasOwnProperty  in 
let arr=[1,2,3,5,9,8];
console.log(arr.hasOwnProperty('length')); //true
console.log(arr.hasOwnProperty('concat')); //false //concat是数组原型上的属性
// console.log(arr.concat(1));
console.log('concat' in  arr); //true //in 可以查看原型上的属性

// 检测是否设置主机地址 
function oss(options){
if(!options.hasOwnProperty("host")){
    throw new Error('没有正确的主机地址');
}
}
oss({user:'admin'});

// setPrototypeOf  设置原型属性
let a={
    nam:'lee'
};
let b={
    age:10
};
Object.setPrototypeOf(a,b);
console.log(a);//{nam: 'lee'}
console.log(a.hasOwnProperty('age')); //false
console.log('age' in a); //true
// Object.assign 属性合并
function upload(params){
 let options={
     size:1222
 }   
options=Object.assign(options,params);
console.log(JSON.stringify(options,null,2));
}
upload({size:99,type:"jpeg"});

工厂函数  (公共函数谁用谁调用传参)

function factory(myname,myage){
   return {
    myname,myage,
    info(){
        console.log(`${this.myname}的年龄是${this.myage}`);
    }
   }
}

let lee=factory('lee',18);
let wang=factory('wang',26);
lee.info();
wang.info();


构造函数 
function Struct(myname,myage){
   this.myname=myname;
   this.myage=myage;
   this.show=function(){
       console.log(this.myname+this.myage);
   }
}
let lee=new Struct('lee',18);
lee.show();  //lee18

let p={};
console.log(p);