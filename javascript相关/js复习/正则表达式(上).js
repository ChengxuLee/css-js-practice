// 获取字符串中的数字
// let w=/c/;
// let n='lkjkk66+fa62395faw65';

// let cn=[...n].filter(a=>!Number.isNaN(parseInt(a)));//return new array 
// console.log(cn.join(''));
// console.log(n.test('n'));
// let n=prompt('请输入正则表达式');
// console.log(n);

// 通过输入正则 改变文章内容
// let div=document.querySelector('div');
// let con=prompt('请输入正则或需要匹配的字符');
// let reg=new RegExp(con,'g');
// div.innerHTML=div.innerHTML.replace(reg,n=>{
//         return `<span style="color:red">${n}</span>`
// })

// 正则中的[]
// let a='hawd56fe56aw0';
// let b=/[5W0]/;
// console.log(b.test(a)); //返回值 true
// console.log(a.match(b)); //返回值 数组 内容为对应的匹配

// 正则中的 .
// 代表普通的. 和 任意字符 可以使用转义字符
// let price='2.5';
// let price2='2#5';
// console.log(/\d+.\d/.test(price));
// console.log(/\d+.\d/.test(price2)); //使用转义字符 \.

//  /D 非数字  /d 数字  /s 空白  /S 非空白  [^ ] 取反
// let a=`zhangsan；010-98561528  iisi:021-56295962`;
// let b=/\d{3}-\d{3,8}/g;
// console.log(a.match(b));

//  \w 字母 数字 下划线  \W 非字母 数字 下划线
// [\d\D]  [\W\w]  匹配所有字符

// 提取 课程名称和 价格 到数组 如 [name:'js',price:'200元']
// let y=`
//      #1  js,200元 #
//      #2  php,300元 #
//      #9  callll,200元 #  厚度人
//      #3  node.js,200元 #
// `;
// let finish=/^\s*#\d\s+\w+.+\s+#$/gm;
// let v=y.match(finish).map(function(item){
//   item=item.replace(/^\s*#\d\s+/,'').replace(/\s+#$/,'');
//   return [myname,price]=item.split(',');
// }

//     )
//     console.log(v);
//  \p{}匹配 
// \p{L}	表示任意语言中的字母字符（包括英文字母和汉字）；
// \p{N}	所有数字，类似于 \d 4
// [\p{N}\p{L}]	所有数字和所有字母，类似于 \w 4
// \P{L}	不是字母，等价于 [^\p{L}]
// \P{N}	不是数字，等价于 [^\p{N}]
// let reg=/\p{P}/gu;  //P只匹配标点符号  
// console.log(v.match(reg));
// let reg3=/\p{N}/gu;  //N只匹配数字 
// console.log(v.match(reg3));
// let v='上45456gdd额456你ees^&*((^家56的545方法';
// let reg2=/\p{L}/gu;  //L表示任意语言中的字母字符（包括英文字母和汉字）；
// console.log(v.match(reg2));


// exec match test   及两种声明方式的区别
// let v='ak56w0564faw54wk';
// let reg=new RegExp('\\w','g'); //构造函数方法必须写两个 \\
// // let reg=/\w/g;
// console.log(v.match(reg)); //字符串的方法 返回 数组 打印组信息
// console.log(reg.exec(v)); // 正则的方法 返回 布尔值 其lastindex值每次都不一样 打印组信息
// console.log(reg.test(v)); // 正则的方法 返回 布尔值 

// //exec 的打印
// while(res=reg.exec(v)){
// console.log(res);
// }

// //声明方式的区别

// let reg1=new RegExp('\\w','g'); //构造函数方法必须写两个 \\w
// let reg2=/\w/g; //变量方式写一个即可 \w

// //区别2 //想要在正则中添加 变量只能用构造函数方式
// let c='110';
// let reg2=/kjs+c+ss/g; //非字符串 不可以加变量
// let reg1=new RegExp('kjs'+c+'ss','g');  //字符串 可以加变量

// g和+
// let a='woawjf6+5+56';
// let b=/[a-z]+/;  // ['woawjf'] 整体匹配
// let c=/[a-z]/g;  // ['w', 'o', 'a', 'w', 'j', 'f'] 单独匹配
// let d=/[a-z]+/g; // ['woawjf']

// console.log(a.match(b));
// console.log(a.match(c));
// console.log(a.match(d));

// 用户账号 以字母开头 长度5-8位
// let inp=document.querySelector('input');
// let reg=/^[a-z]\w{4,7}$/i;
// inp.addEventListener('keyup',function(){
//   console.log(this.value.match(reg));
// });

// 只选择中文 
// let zh='j十九大56a64kjw灯具按尔康';
// //1、排除法
// let reg=/[^a-z0-9]+/; 
// // console.log(zh.match(reg)); //['十九大']
// //2、\p{sc=Han}  ***注意u***
// let reg2=/\p{sc=Han}+/u;
// console.log(zh.match(reg2)); //['十九大']

// 原子组() 原子[]表
// let c='().jaww(wlk).+';
// let d=/[()]/g; //() .  +  放在[]内部 只是普通符号 
// console.log(c.match(d));// ['(', ')', '(', ')']

// 删除DOM操作 
// let body=document.body;
// let reg=/<(h[0-9])>[\s\S]*<\/\1>/gi;
// body.innerHTML=body.innerHTML.replace(reg,'');

// 删除DOM操作 
// let body=document.body;
// let reg=/<(h[0-9])>[\s\S]*<\/\1>/gi;
// body.innerHTML=body.innerHTML.replace(reg,'');

// 原子组引用完成替换操作  例：h标签换成p标签
// let h=`
// <h1>我是标签1</h1>
// <p>wosi</p>
// <h1>我是标签1</h1>
// <p>wosi</p>
// <h1>我是标签1</h1>
// <p>wosi</p>
// <h2>我是标签2</h2>
// <h2>我是标签2</h2>` //******这里出现两个h2时 第一个<h2>会和第二个</h2结合> */
// ;
// // let reg=/<(h[1-6])>([\s\S]*)<\/\1>/ig;
// let reg=/<(h[1-6])>([^<>h\s]*)<\/\1>/ig; 
// console.log(h.replace(reg,(p1,p2,p3)=>{ //P1是<h1>我是标签1</h1> p2 是第一个原子组
//     return `<p>${p3}</p>`;
// }));

