<?php
//header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");







require("./index.php");

// print_r($_POST);
$postdata=file_get_contents("php://input");

// print_r($postdata);
// echo $postdata;

if(isset($postdata)&& !empty($postdata)){


    $request=json_decode($postdata);

    //print_r($request);

    //initiaze
    $email=$request->email;
    $password=$request->password;

    
    
     $hash_password=md5($password);


    //select

    $sql="SELECT * FROM  user WHERE password='$hash_password' AND email='$email'";
    $result=mysqli_query($connection,$sql);
    print_r($result);
    if(mysqli_num_rows($result)==1){
        http_response_code(201);
     // echo "<br>success1111111111111111111111111";
    }else{
         echo "UserName Or Password Invalid";
       //  http_response_code(422);
    }
//96e79218965eb72c92a549dd5a330112
//96e79218965eb72c92a549dd5a330112

}






// header("Access-Control-Allow-Origin: *");

//     $json =file_get_contents('php://input'); 
//     print_r($json);
    //    $email = $json['email']; 
       
    //    $password = $json['password']; 


//        $hash_password=md5($password);
//        $userData =''; $query = "select * from users where username='$username' and password='$password'"; 
//        $result= $db->query($query);
//        $rowCount=$result->num_rows;
             
//         if($rowCount>0)
//         {
//             $userData = $result->fetch_object();
//             $user_id=$userData->user_id;
//             $userData = json_encode($userData);
//             echo '{"userData":'.$userData.'}';

            
//         }
//         else 
//         {
//             echo '{"error":"Wrong username and password"}';
//         }
// print json_encode($rows); 



?>