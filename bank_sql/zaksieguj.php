<?php
 session_start();
require_once('PHP/myPage.php');


if(isset($_POST['id']){
$id=$_POST['id'];

$komenda_pobierz = "UPDATE `Transactions` SET `confirmed` = '1' WHERE `Transactions`.`id` = $id";
$wynik_pobierz=mysqli_query($db, $komenda_pobierz);
if (!$wynik_pobierz) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}
 

echo true;


}

?>


  
  








 
 




 
?>




