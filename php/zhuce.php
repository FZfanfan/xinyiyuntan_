<?php
     header("Content-type:text/html;charset=utf-8");

     //1、接收前端的数据
    $username = $_POST['username'];
    $userpass = $_POST['password'];
    $email = $_POST['email'];
    $photo = $_POST['photo'];
     //2、处理
     //1)、链接数据库(搭桥)
     $conn=mysql_connect("localhost","root","root");
     if(!$conn){
         echo("数据库出错".mysql_error());
     }else{
         //2、选择库(选择目的地)
         mysql_select_db("xinyiyuntan",$conn);
         //3、执行SQL语句(数据传输)
        $sqlstr="select * from user where username='$username'";
        $result=mysql_query($sqlstr,$conn);
        $rows=mysql_num_rows($result);//获得结果的行数
        if($rows>0){
            //关闭数据库
            mysql_close($conn);
            echo"-1";//用户名被使用
        }else{
            $sqlstr="insert into user(username,password,email,photo)values('$username','$userpass','$email','$photo')";
            $result=mysql_query($sqlstr,$conn);
            mysql_close($conn);
            //3、响应
            if($result!=1){
                echo"0";//注册失败
            }else{
                echo"1";//注册成功
            }
        }
     }
?>