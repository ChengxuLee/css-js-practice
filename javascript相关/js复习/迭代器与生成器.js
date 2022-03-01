// 检查是否存在默认迭代器属性可以暴露这个工厂函数：
let num = 1; 
let obj = {}; 
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined 
console.log(obj[Symbol.iterator]); // undefined 
let str = 'abc'; 
let arr = ['a', 'b', 'c']; 
let map = new Map().set('a', 1).set('b', 2).set('c', 3); 
let set = new Set().add('a').add('b').add('c'); 
let els = document.querySelectorAll('div'); 
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] } 
console.log(arr[Symbol.iterator]); // f values() { [native code] } 
console.log(map[Symbol.iterator]); // f values() { [native code] } 
console.log(set[Symbol.iterator]); // f values() { [native code] } 
console.log(els[Symbol.iterator]); // f values() { [native code] } 
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {} 
console.log(arr[Symbol.iterator]()); // ArrayIterator {} 
console.log(map[Symbol.iterator]()); // MapIterator {} 
console.log(set[Symbol.iterator]()); // SetIterator {} 
console.log(els[Symbol.iterator]()); // ArrayIterator {}

// 如果对象原型链上的父类实现了 Iterable 接口，那这个对象也就实现了这个接口：
class FooArray extends Array {} 
let fooArr = new FooArray('foo', 'bar', 'baz'); 
for (let el of fooArr) { 
 console.log(el); 
} 
let arr=[1,5,9,9,6,2,55];
console.log(arr);
console.log(arr[Symbol.iterator]());
console.log(Object.getPrototypeOf(arr)==arr.__proto__);
let ite=arr[Symbol.iterator]();
let ite=makeIterator(arr);
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
迭代器手写 
function makeIterator(arr){
    let index=0;
    return {
        next(){
            if(index<arr.length){
                return {
                    value:arr[index++],done:false
                }
            }else{
                return {
                    value:undefined,done:true
                }
            }
        }

    }
}

生成器
生成器函数声明(箭头函数不能定义生成器)
function* generatorFn() {} 
// 生成器函数表达式
let generatorFn = function* () {} 
// 作为对象字面量方法的生成器函数
let foo = { 
 * generatorFn() {} 
} 
// 作为类实例方法的生成器函数
class Foo { 
 * generatorFn() {} 
} 
// 作为类静态方法的生成器函数
class Bar { 
 static * generatorFn() {} 
} 
function* magenerator(){
    // console.log(1);
    // yield 1;
    // console.log(1);
    // return 1;
    // console.log(2);
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
}
let v=magenerator();
console.log(v.next());
console.log(magenerator().next());

传参
function * cgenerator(){
    let value1=yield 1;
    console.log(value1);
    let value2=yield 2;
    console.log(value2);
    let value3=yield 3;
    console.log(value3);
    yield 4;
    yield 5;
}
// console.log(generator().next('one'));
let oo=cgenerator();
console.log(oo.next('one'));
console.log(oo.next('two'));
console.log(oo.next('three'));

数组解构
let [myname,...age]=['lee',18,48,84];//lee 18 48 84
console.log(myname,...age);

test   

function *generator1(){
    yield 1;
    yield 2;
}
console.log(generator1().next());
console.log(generator1().next());
function c(){
    console.log('c');
}
let d=c;
d();


// yield*最有用的地方是实现递归操作，此时生成器可以产生自身。看下面的例子：
function* nTimes(n) { 
 if (n > 0) { 
 yield* nTimes(n - 1); //3 2 1 
 yield n - 1; 
 } 
} 
for (const x of nTimes(3)) { 
 console.log(x); 
} 
0 
1 
2 

// 用处  为不具备iterator的属性提供遍历
let obj = {
    name: '小马哥',
    age: 18,
    sex: '男'
}
function* objEntries(obj){
    //获取对象所有的key保存到数组
   let propKeys = Object.keys(obj);
   for(let propkey of propKeys){
       yield [propkey,obj[propkey]]
   }
}
obj[Symbol.iterator] = objEntries
console.log(obj)
for(let [key,val] of objEntries(obj)){
    console.log(`${key}:${val}`)
}
