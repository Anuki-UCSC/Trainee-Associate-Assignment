<?php

$server="localhost";
$user="root";
$password="";
$database="exam";

$connection=new mysqli($server,$user,$password,$database);

if($connection->connect_error){
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
      }
}

?>