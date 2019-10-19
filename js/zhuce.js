$("#btnReg").click(function(){
    if(feikong()==true && $("#username").checkusername()!=0 && $("#email").checkemail()!=0 && $("#password").checkpassword()!=0 && $("#quepassword").checkquepassword()!=0){
        //1、创建XMLHttpRequest对象
     var xhr = new XMLHttpRequest();
     //2、设置请求参数
     xhr.open("post","php/zhuce.php",true);
     //3、设置回调参数
     xhr.onreadystatechange=function(){
         if(xhr.readyState==4 && xhr.status==200){
             if(xhr.responseText=="-1"){
                 $(".tishi").text("用户名被人使用");
             }else if(xhr.responseText=="0"){
                 $(".tishi").text("注册失败");
             }else if(xhr.responseText=="1"){
                 $(".tishi").text("注册成功");
                 location.href="denglu.html"  
             }
         }
     }
     //post方式：设置请求头
     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
     let sendstr = `username=${$("#username").val()}&password=${$("#password").val()}&email=${$("#email").val()}&photo=${$("#photo").val()}`;
     xhr.send(sendstr);
    }   
 })
 
 
 
 //上传头像
 $("#photo").on("change",function(){
     var filePath = $(this).val(), //获取到input的value，里面是文件的路径
     fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
     src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
      
     // 检查是否是图片
     if( !fileFormat.match(/.png|.jpg|.jpeg/)) { 
     error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg'); 
     return; 
     }  
     $('#touxiang').attr('src',src);
     });
 
 
 
 function feikong(){
      //非空判断
      if($("#username").val()==""||$("#password").val()==""||$("#quepassword").val()==""||$("#email").val()==""||$("#photo").val()==""){
         alert("带*号的不能为空");
         return false;
     }else{
         return true;
     }
 }  
 
 //验证用户名
 jQuery.fn.extend({
     checkusername:function(){
         var r = /^([\u4e00-\u9fa5]|[a-zA-Z]){2,8}$/;
         if(r.test($(this).val())){
             return 1;
         }else {
             return 0;
         }
     },
 //验证密码   以字母开头，长度在6~18之间，只能包含字母、数字和下划线
     checkpassword:function(){
         var r = /^[a-zA-Z]\w{5,17}$/;
         if(r.test($(this).val())){
             return 1;
         }else {
             return 0;
         } 
     },
 //验证密码输入两次是否一致
     checkquepassword:function(){
         if($("#password").val()==$("#quepassword").val()){
             return 1;
         }else if($("#password").val() != $("#quepassword").val()){
             return 0;
         }
     },
 //验证邮箱
     checkemail:function(){
         var r = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
         if(r.test($(this).val())){
            return 1;
         }else {
             return 0;
         }
     },
   });


 //验证用户名 用户名只能由字母和汉字组成、不少于2位不超过8位！
 $(".username").blur(function(){
     if($(this).checkusername()==0){
         $(".tishi").html("亲，用户名只能由字母和汉字组成、不少于2位不超过8位！");
     }else if($(this).checkusername()==1){
         $(".tishi").html("");
     }
 })
 //验证密码   以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 $(".password").blur(function(){
     if($(this).checkpassword()==0){
         $(".tishi").html("亲，密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
     }else if($(this).checkpassword()==1){
         $(".tishi").html("");
     }
 })
 //验证密码是否一致
 $("#quepassword").blur(function(){
     if($(this).checkquepassword()==0){
         $(".tishi").text("亲，两次密码输入不一致！");
     }else if($(this).checkquepassword()==1){
         $(".tishi").text("");
     }
 })
 //验证邮箱
 $("#email").blur(function(){
     if($(this).checkemail()==0){
         $(".tishi").html("亲，邮箱格式不正确，亲重新输入！");
     }else if($(this).checkemail()==1){
         $(".tishi").html("");
     }
 })


 //重置
 $("#chongzhi").click(function(){
     $("#username").val("");
     $("#password").val(""); 
     $("#quepassword").val(""); 
     $("#email").val("");
     $("#photo").val("");
     $("#touxiang").val("");
 })
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //      get请求
 //     function checkuser(obj){
 //     let xhr =new XMLHttpRequest();
 
 //     //2 设置请求参数
 //     xhr.open("get","checkuser.php?username="+$("#username").value,true);
 
 //     //3 设置回调函数
 //     xhr.onreadystatechange = function(){
 //         if(xhr.readyState==4 && xhr.status==200){
 //             //5 接收请求
 //             obj.nextElementSibling.innerHTML =  xhr.responseText;
 //         }
 //     }
 //     //4 发送请求
 //     xhr.send();
 // }
 
 