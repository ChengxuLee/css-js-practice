// ？一个或0个 ?: 不记录组 忽略
// 案例 提取网址 
let net= `https://www.bilibili.com/` //通信协议 域名信息 存放位置
let reg=/https?.\/\/\w+.\w+.(com|org|cn)/gi;
console.log(reg.exec(net));//https://www.bilibili.com'
let reg2=/https?.\/\/(\w+.\w+.(com|org|cn))\//gi;
console.log(reg2.exec(net));
// exec 结果  0为全部 1为第一个() 2为第二个 
// 0:'https://www.bilibili.com/'
// 1:'www.bilibili.com'
// 2:'com'
将网址导入数组
let arr=[];
while(res=reg.exec(net)){
    arr.push(res[1]);// ['com']
}
console.dir(arr);

// 重复匹配 * 0或多   ？0或1  + 1或多
// 有原子组生效整个原子组 
let a='hddddd';
let b='djdjkde';
console.log(a.....(/hd+/));  //'hddddd'
console.log(b.match(/(dj)+/));  //'djdj'

// 网站用户名验证 
var uname=document.querySelector(`[name="uname"]`); 
uname.addEventListener('click',function(e){

     value=e.target.value;

});

// 禁止贪婪 {2,100}？ 2个  {*}？ 0个  ?? 0个 
// 所有 span 标签改成 h3 颜色 红色
let main=document.querySelector('main');
let reg=/<span>([\s\S]+?)<\/span>/gi;
console.log(main.innerHTML);
main.innerHTML=main.innerHTML.replace(reg,(v,p1)=>{
    return `<h1 style="color:red">${p1}</h1>`;
});
let hd=main.innerHTML.matchAll(reg);
console.tabel(hd);


// $0匹配全部内容 $1匹配原子组内容 $&匹配前面  $' 匹配后面 ?<> 起别名 

// 断言匹配 （?=）后面是……  （？<=  ）前面是……  (?！)后面不是…… (?<！) 前面不是……
let a='家里我立刻就叫我以，家里看垃圾屋大王卡AWK';//家里我立刻就叫我以，   看垃圾屋大王卡AWK
let b=/家里(?=看)/
console.log(a.replace(b,'   '));

// 断言匹配 手机号中间四位 ****

let phone ='13200000000';
let reg=/(?<=\d{4})\d{4}(?=\d+)/;//1320****000
console.log(phone.replace(reg,'****'));
