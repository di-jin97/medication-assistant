<?php
ob_start();
session_start();
    $username = "user";
    $password = "password";

    if (isset($_SESSION['login']) && $_SESSION['login']== true){
        header("Location:success.php");
    }
    
    if (isset($_POST['username']) && isset($_POST['password'])){
        if($_POST['username'] == $username && $_POST['password'] == $password){
            $_SESSION['login']==true;
            header("Location: success.php");
        }
        
        else{
            echo 'Your Username or Password is invalid';
        }
         
    }
?>

<html>
    <head>
    <style>a{TEXT-DECORATION:none}</style> 
    <title>Login in</title>
    <link href="style.css" rel="stylesheet" type="text/css">
        </head>
    <body>
    <div align = "center">
    <b style="color:blue; font-size: 20">Medication</b><br/>    
    <b style="color:blue; font-size: 20">Assistant</b><br/><br/><br/>
        
                <form method="post" action="">
                    <label style="color: blue">Username: </label><br/>
                    <input type="text" name="username" placeholder="username" required/><br/>
                    
                    <label style="color:blue">Password:</label><br/>
                    <input type="password" name="password" placeholder="**********" required/><br/><br/>
                    <input type="submit" value="Login" style="font-size: 20"><br/><br/>
                    
                    <a href="register.html">Create Account</a><br/>
                    Forgot <a href="forget.html">password?</a>
            </form>
        </div>
    </body>
</html>
