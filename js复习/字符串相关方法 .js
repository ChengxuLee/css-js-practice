// // let a='dd';
// // let b=new String('cccdd');
// // a.color='red';
// // b.color='red';
// // console.log(a.color); //不是对象 
// // console.log(b.color);
// // console.log(b.charAt(1));
// // console.log(b.charCodeAt('C'));
// // console.log(String.fromCharCode(189, 43, 190, 61));//静态 String.fromCharCode() 方法返回由指定的 UTF-16 代码单元序列创建的字符串。
// // console.log(a.length);
// // console.log(b.length);
// // console.log(a.toString());
// // console.log(b.toString());
// // console.log(a.valueOf());
// // console.log(b.valueOf());


// //join split concat 
// //强烈建议使用赋值操作符（+, +=）代替 concat 方法。
// var a=[5,9,8,9,5,1,3,2];
// var str='62154612';
// console.log(str.split(',')); //['62154612']
// console.log(str.split('',3)); //['6', '2', '1'] 空串
// console.log(str.split(' ',3));//['62154612'] 空的字符串 
//字符串解构  
// let l='hkhw';
// console.log([...l]);//['h', 'k', 'h', 'w']

// console.log(a.join()); //5,9,8,9,5,1,3,2
// console.log(a.join('')); //59895132
// console.log(a.join(' ')); //5 9 8 9 5 1 3 2
// console.log(a.join('-')); //5-9-8-9-5-1-3-2

// console.log(a.concat(88));//[5, 9, 8, 9, 5, 1, 3, 2, 88]
// console.log(a.concat([5,8,9,1,[5]]));//[5, 9, 8, 9, 5, 1, 3, 2, 5, 8, 9, 1, Array(1)]
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array1);//['a', 'b', 'c']
// console.log(array2);//['d', 'e', 'f']
// console.log(array3);//['a', 'b', 'c', 'd', 'e', 'f']

// let a1=[1,2,3,4];
// let str1 ='1234';
// console.log(a1.slice(2,3));
// console.log(str1okk.slice(2,3));

// // substr substring slice区别 
// //相同点 返回新字符串和concat一样 
// // let stringValue = "hello world"; 
// // console.log(stringValue.slice(-3)); // "rld" 
// // console.log(stringValue.substring(-3)); // "hello world" 自动转换成0 
// // console.log(stringValue.substr(-3)); // "rld" 
// // console.log(stringValue.slice(3, -4)); // "lo w" 
// // console.log(stringValue.substring(3, -4)); // "hel" 自动转换成0  
// // console.log(stringValue.substr(3, -4)); // "" (empty string) 

//indexOf lastIndexOf 第二个参数代表跨过前面的
// let stringValue = "hello world"; 
// console.log(stringValue.indexOf("o", 6)); // 7  从头向后 
// console.log(stringValue.lastIndexOf("o", 6)); // 4  从后向头

//startsWith endsWith includes 
// let c='hello evening';
// console.log(c.startsWith('e',3));   //false
// console.log(c.endsWith('e',3));     //false
// console.log(c.includes('e',3));     //true

// //trim() trimLeft() trimRight（） repeat() 
// let stringValue = " hello world "; 
// let trimmedStringValue = stringValue.trim(); 
// console.log(stringValue); // " hello world " 
// console.log(trimmedStringValue); // "hello world" 

// // padStart()和 padEnd()方法
// // padStart()和 padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至
// // 满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格

// let cc = "foo"; 
// console.log(cc.padStart(6)); // " foo" 
// console.log(cc.padStart(9, ".")); // "......foo" 
// console.log(cc.padEnd(6)); // "foo " 
// console.log(cc.padEnd(9, ".")); // "foo......"                                                                                                                                                                                               

// let colorText = "red,blue,green,yellow"; 
// let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""] 
// let colors4 = colorText.split(/[,]+/); // ['red', 'blue', 'green', 'yellow']
// console.log(colors3);
// console.log(colors4);0
// var array = new Uint32Array(50);
// window.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }