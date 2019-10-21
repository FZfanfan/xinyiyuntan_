  // // 图片集锦
  $(".tu").mouseover(function(){
    $(this).stop();
    $(this).animate({ 
        width: "130px",
        height: "130px"
    }, 300);
});

$(".tu").mouseleave(function(){
    $(this).stop();
    $(this).animate({ 
        width: "120px",
        height: "120px"
    }, 300);
});
// 点赞
let falg=false;
$(".icon-zan").click(function(){
    let num=Number($(this).children().html());
    if(falg==false){
        $(this).css("color","#BF545B");
        num=num+1;
        // if(num>=10000){
        //     $(this).children().html("1W+");
        //     falg=true;
        // }else{
        //     falg=true;
        //     $(this).children().html(num);
        // }
        falg=true;
        $(this).children().html(num);
    }else{
        $(this).css("color","gray");
        num=num-1;
        if(num<0){
           num=0;
        }
        $(this).children().html(num);
        // return;
        falg=false;
    }
})

//查看 收起评论
$(".pinglun").css({
    display:"none"
});
let PLkaiguan=false;
$(".icon-pinglun1").click(function(){
   if(PLkaiguan==false){
        $(this).parent().next(".pinglun").css({
            display:"none"
        });
        PLkaiguan=true;
   }else if(PLkaiguan==true){
        $(this).parent().next(".pinglun").css({
            display:"block"
        });
        PLkaiguan=false;
   }
})





//鼠标滑过头像显示个人资料提示框
let myTimer=null;
$(".usertouxiang").mouseleave(function(){
    myTimer=setTimeout(function(){
         $(".GRZLkuang").hide();
    },200)
}).mouseenter(function(){
    $(".GRZLkuang").slideDown();
})

$(".GRZLkuang").mouseenter(function(){
    clearInterval(myTimer);
}).mouseleave(function(){
    $(".GRZLkuang").hide();
})
//退出登录
$(".icon-tuichu1").click(function(){
    removeCookie("username");
    
})