$(".denglu").click(function(){
    if(feikong()==true){
        //1、创建XMLHttpRequest对象
     var xhr = new XMLHttpRequest();
     //2、设置请求参数
     xhr.open("post","php/denglu.php",true);
     //3、设置回调参数
     xhr.onreadystatechange=function(){
         if(xhr.readyState==4 && xhr.status==200){
             if(xhr.responseText==1){
                addCookie("username",$("#username").val(),7);
                $(".tishi").text("登录成功，马上跳转到首页").css("color","black");
                location.href="xinyi.html";  
             }else if(xhr.responseText==0){
                $(".tishi").text("亲，用户名或者密码不对").css("color","red");
             }                
         }
     }
     //post方式：设置请求头
     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
     let sendstr = `username=${$("#username").val()}&password=${$("#password").val()}`;
     xhr.send(sendstr);
    }   
 })


 function feikong(){
    //非空判断
    if($("#username").val()==""||$("#password").val()==""){
       alert("用户名和密码不能为空");
       return false;
   }else{
       return true;
   }
} 