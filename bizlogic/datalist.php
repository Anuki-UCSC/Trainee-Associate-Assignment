<?php

header("Access-Control-Allow-Origin: *");

require("./index.php");

$trp = mysqli_query($connection, "SELECT * from user");
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
print json_encode($rows); 



?>