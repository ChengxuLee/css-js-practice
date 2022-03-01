var that;

class Tab{
    constructor (id) {
    that=this;
     this.main=document.querySelector(id);

     this.fsession=this.main.querySelector('.tabscon');  
     this.add=this.main.querySelector('.tabadd');
     this.ul=this.main.querySelectorAll('.fisrstnav ul:first-child');
     this.init();
    }
    init(){
        this.update();
        that.add.onclick=that.addTab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick= this.toggleTab;
            this.close[i].onclick=this.remooveTab; 
            this.spans[i].ondblclick=this.editTab;
            this.section[i].ondblclick=this.editTab;
        }
    }
    //清除函数clear

    // 点击切换
toggleTab() {
    that.clearClass();
    this.className='liactive';
    that.section[this.index].className='conactive';
   
};
//获取li和ession
update(){
    this.lis=this.main.querySelectorAll('li');
    this.section=this.main.querySelectorAll('section'); 
    this.close=this.main.querySelectorAll('.icon-guanbi');
    this.spans=this.main.querySelectorAll('.fisrstnav li span:first-child');
}
// //添加
clearClass(){
    for(var i=0;i<this.lis.length;i++){
        this.lis[i].className='';
        this.section[i].className='';
    }
}
addTab(){
    var rand=Math.random();
    that.clearClass();
    var li=' <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML('beforeend',li);
    var se=' <section class="conactive">'+rand+'</section>';
    that.fsession.insertAdjacentHTML('beforeend',se);
    that.init();
};

//删除
remooveTab(e){
    e.stopPropagation();
    var index=this.parentNode.index;
    // that.li[this.index].remove();
    that.lis[index].remove();
    that.section[index].remove();
    that.init();
    // if(that.lis[index]) return;
    //原来激活的存在就不执行下面 最后的点击后 class不为liactive
    if(document.querySelector('.liactive')) return ;
    //让前一个点击
    index--;
    that.lis[index]&&that.lis[index].click();
}
// //修改        
editTab(){
    var str=this.innerHTML;
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty0;
    this.innerHTML='<input type="text" />';
    var input=this.children[0];
    input.value=str;
    input.select();
    input.onblur=function(){
       this.parentNode.innerHTML=this.value;
    }
    input.onkeyup=function(e){
        if(e.keyCode===13){
            this.blur();
        }
    }
}
}
var tab =new Tab('#tab'); //传入