  // // 图片集锦
  $(".tu").mouseover(function(){
    $(this).animate({ 
        width: "130px",
        height: "130px"
    }, 300);
});

$(".tu").mouseleave(function(){
$(this).animate({ 
    width: "120px",
    height: "120px"
}, 300);
});
// 评论区 点赞
let num=Number($("#zan").html());
let falg=false;
$(".icon-zan").click(function(){
    if(falg==false){
        $(this).css("color","#BF545B");
        num=num+1;
        // if(num>=10000){
        //     $("#zan").html("1W+");
        //     falg=true;
        // }else{
        //     falg=true;
        //     $("#zan").html(num);
        // }
        falg=true;
        $("#zan").html(num);
    }else{
        $(this).css("color","gray");
        num=num-1;
        if(num<0){
           num=0;
        }
        $("#zan").html(num);
        // return;
        falg=false;
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