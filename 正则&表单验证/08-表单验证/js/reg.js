window.addEventListener('DOMContentLoaded',function(){
    //————顶部——————
var tel=document.getElementById('tel');
var qq=document.getElementById('qq');
var nc=document.getElementById('nc');
var msg=document.getElementById('msg');
var pwd=document.getElementById('pwd');
var surepwd=document.getElementById('surepwd');
    tel.addEventListener('blur',function(){
        var judgetel =/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;  
        obj=this;
        judge(judgetel,obj);
            
    })
    //qq
    qq.addEventListener('blur',function(){
        var judgetel =/[1-9][0-9]{4,}/;  
        obj=this;
        judge(judgetel,obj);       
    })
    
   //nc
   nc.addEventListener('blur',function(){
    var judgetel =/[1-9][0-9]{4,}/;  
    obj=this;
    judge(judgetel,obj);       
})

   //msg
   msg.addEventListener('blur',function(){
    var judgetel =/[1-9][0-9]{4,}/;  
    obj=this;
    judge(judgetel,obj);       
})

   //pwd
   pwd.addEventListener('blur',function(){
    //强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
    var judgetel =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/;  
    obj=this;
    judge(judgetel,obj);       
})

//surepwd
surepwd.addEventListener('blur',function(){ 
    var remind=this.nextElementSibling;
    var myname=this.previousElementSibling.innerText.slice(0,-1);
    if(this.value==pwd.value){
        remind.innerHTML='<span>'+myname+'输入正确</span>';
        remind.className='success';
    }else{
        remind.innerHTML='<span>'+myname+'输入错误</span>';
        remind.className='error';
    }    
})
    //通用函数
function judge(j,obj){
    var remind=obj.nextElementSibling;
    var myname=obj.previousElementSibling.innerText.slice(0,-1);
     //正则判断         
    if(j.test(obj.value)==true){
     remind.innerHTML='<span>'+myname+'输入正确</span>';
     remind.className='success';
     }else{
         remind.innerHTML='<span>'+myname+'输入错误</span>';
     remind.className='error';
     }

}






    //————底部——————
})