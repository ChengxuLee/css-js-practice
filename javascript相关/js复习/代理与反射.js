//代理
//代理控制对象
// const hd={name:'lee'};
// const proxy=new Proxy(hd,{
//     get (object,property){
//         console.log(object);//{name: 'lee'}
//         console.log(property);//name
//         console.log(object[property]);//lee
//     }
// });
// proxy.name;

//set 和 get 的传参
// const hd={name:'lee'};
// const proxy=new Proxy(hd,{
//     get (object,property){
//       console.log(object[property]);;
//     },
//     set(object,property,value){
//         console.log(value);
//     }
// });
// proxy.name='wang';

//代理控制函数

// function fun(c){
//     return c==1?1:c*fun(c-1);
// }
// let proxy=new Proxy(fun,{
//     apply(func,obj,args){
//         console.log(func); //原函数 ƒ fun(c){
//         console.log(obj); //上下文对象 {}
//         console.log(args); //传入的参数 数组形式[5]
//     }
// });
// proxy.apply({},[5]);

//代理拦截数组
// let arr = [
//   { title: "签单我卡普喔卡鸡尾酒", catogry: "javascrpt" },
//   { title: "分享一下，让我更有动力来录制视频，谢谢你们了 ", catogry: "c++" },
//   { title: "我的语言有问题，new不了对象。", catogry: "mysql" },
// ];
// let proxy=new Proxy(arr,{
//     get(arr,keys){
//         const title=arr[keys].title;
//         const len=5;
//         arr[keys].title=title.length<5?title:title.substr(0,len)+'.'.repeat(5);
//         return arr[keys].title;
//     }
// });

// console.log(proxy[0]);

//vue的数据双向绑定
// function view(){
//     let proxy=new Proxy({},{
//         // get(obj,property){
//         // },
//         set(obj,property,value){
//             document.querySelectorAll(`[v-model="${property}"]`).forEach(item=>{
//               item.value=value;
//             })           
//         },
//         set(obj,property,value){
//             document.querySelectorAll(`[v-bind="${property}"]`).forEach(item=>{
//               item.innerHTML=value;
//             })           
//         }
//     });
//     this.init=function(){
//         const ele=document.querySelectorAll('[v-model]');
//         ele.forEach(item=>{
//             item.addEventListener('keyup',function(){
//                 proxy[this.getAttribute('v-model')]=this.value;
//             })
//         })

//     }
// }

// let v=new view().init();


// JSON转换  JSON.stringify  JSON.parse 
let na=[{name:'lee'},{age:12}]; //[{"name":"lee"},{"age":12}]
console.log(JSON.stringify(na));
let an=`[{"name":"lee"},{"age":12}]`;
console.log(JSON.parse(an));


//JSON.stringify  参数 
JSON.stringify(na,'name',2); //只保留哪个属性 null为默认全部 2为制表符 

//JSON.parse  参数
// let o=JSON.parse(an,(key,value)=>{  //解析后函数 
//     if(value=='lee'){
//         value='wang'+value;
//     }
//     return value;
// })
// console.log(o);



//toJSON 格式化 
// let User={name:'lee',
//         age:15,
//         url='lakwdwlkdw'
//         ,toJSON:function(){
//         return {
//         name:this.name,
//     }
// }}
