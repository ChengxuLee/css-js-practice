let obj ={
    myname:'ccc',
    age:18
}

let obj2={
     [obj]:'cc',
}
console.log(obj2[obj.toString()]);
var a=new Set([1,2,1,5,6]);
console.log(a);

// set 的一些方法 delete add size
let set =new Set(['dw','ddw']);// {size: 2, dw, ddw}

console.log(set.size); //3
console.log(set.add('dddd'));//Set(3) {size: 3, dw, ddw, dddd}
console.log(set.delete('dddd'));//true
set.clear();
console.log(set.values()); //Set(0) {size: 0}

// Set 转换成数组
let set =new Set('213456789');
console.log(set);  //Set(9) {size: 9, 2, 1, 3, 4, 5, …}
// set=new Set([...set].filter(item=>item>6)); //Set(3) {size: 3, 7, 8, 9}
// console.log(set);
console.log(Array.from(set));//['2', '1', '3', '4', '5', '6', '7', '8', '9']

// 数组转Set  数组去重
let arr=[1,8,9,6,5,8,9,6,1];
// let set=new Set(arr);
let array=[...new Set(arr)] //[1, 8, 9, 6, 5]
console.log(array); //Set(5) {size: 5, 1, 8, 9, 6, 5}

// set 遍历

let set =new Set('woshivet');
set.forEach((value,key,arr)=>{
    console.log(value,key);
});
for(const value of set){
    console.log(value);
}

// 并集 交集 差集
let a=new Set([1,5,9,8,3]);
let b=new Set([1,2,9,5,3,4,7]);
//并集
console.log(new Set([...a,...b]));
//交集
console.log(
    [...a].filter(item=>{
        return b.has(item);
    })
);
//差集 a-b
console.log(
  [...a].filter(item=> !b.has(item))
);

// item
// 声明一个类
class Node{
    constructor(){
         this.set=new WeakSet();
         this.li=document.querySelectorAll('li');
         this.li.forEach(item=>this.set.add(item));
    }
    run(){
        this.li.forEach((items)=>{
            items.addEventListener('click',(items)=>{
                if(this.set.has(items)){
                    this.set.delete(items);
                    this.items.classList.add('remove');
                }else {
                    this.set.add(items);
                    this.items.classList.remove("remove");
                }

            })
        })
    }
}

let node=new Node().run();

Map

let map=new Map([['wd','a'],['d','c']]); //Map(2) {size: 2, wd => a, d => c}
  console.log(map);
  map.set({},'对象'); //Map(3) {size: 3, wd => a, d => c, {} => 对象}
console.log(map);
map.set([],'数组')//Map(4) {size: 4, wd => a, d => c, {} => 对象, (0) [] => 数组}
console.log(map);

//set get delete has  clear
// console.log(map.get('wd'));// a
let map1=new Map();
map1.set('1','1').set('2','2').set('3','3').set('4','5');
//获得键值
// for (var key of map1.keys()){ //1;2;3;4
// console.log(key);
// }

map1.forEach((keys,value)=>{ //11 22 33 44
    console.log(keys,value);
})

//选课系统

class select {
  constructor() {
    this.li = document.querySelectorAll("ul>li");
    this.info = document.querySelector(".info");
    this.plck=document.querySelector('.plck');
    this.map = new WeakMap();
  }
  run() {
    this.li.forEach((li) => {
      li.querySelector("a").addEventListener("click", (e) => {
        const w = e.target;
        const state = li.getAttribute("select");
        if (state) {
          li.removeAttribute("select");
          this.map.delete(li);
          w.innerHTML = "+";
          w.style.backgroundColor = "green";
        } else {
          li.setAttribute("select", true);
          this.map.set(li);
          w.innerHTML = "-";
          w.style.backgroundColor = "red";
        }
        this.rander();
      });
    });
   
  }
    count(){
       return  [...this.li].reduce((coun,item)=>{
            return coun+=(this.map.has(item)?1:0);
        },0)
}
lesson(){
    return [...this.li].filter((item,index)=>{
        return  this.map.has(item);
    },0).map(item=>`<span>${item.querySelector('span').innerHTML}</span>`);
   
}
  //渲染
  rander(){
   this.info.innerHTML=`当前一共选择了${this.count()}门课程`
    this.plck.innerHTML=`<span>${this.lesson()}</span>`;







                                                                                                                                                           
 }
}

let s = new select().run();
//.map((index,item)=>{return`<span>${item.querySelector('span').innerHTML}</span>`});