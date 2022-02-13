//浅拷贝的三种方式
//1、循环遍历
let a={name:'lee',age:18,url:'study.com'};
let b={};
for (const key in a) {
    b[key]=a[key];
}
console.log(a);//{name: 'lee', age: 18, url: 'study.com'}
console.log(b);//{name: 'lee', age: 18, url: 'study.com'}

//2、Object.assign
let c={name:'lee',age:18,url:'study.com'};
let d={};
Object.assign(d,c);
console.log(c);//{name: 'lee', age: 18, url: 'study.com'}
console.log(d);//{name: 'lee', age: 18, url: 'study.com'}

//3、 ...扩展运算符
let e={name:'lee',age:18,url:'study.com'};
let f={};
console.log(f={...e});//{name: 'lee', age: 18, url: 'study.com'}

//深拷贝
let obj={
    myname:'lee',
    arr:[1,5,2,6,5,4],
    hobby:{
        sing:'i and you',
        jump:'pijin',
        rap:'rap'
    }
}

function deepCopy(obj){
    let res=obj instanceof Array?[]:{};
    for (const [keys,value] of Object.entries(obj)) {
        res[keys]=typeof value=='Object'?deepCopy(value):value;
    }
    return res;
}
console.log(deepCopy(obj));