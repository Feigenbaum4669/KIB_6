<?php

session_start();
require_once('PHP/myPage.php');

if(isset($_POST['nrkonta'])&&isset($_POST['nazwa'])&&isset($_POST['adres'])&&isset($_POST['kwota'])){
 
$nrkonta=$_POST['nrkonta']; 
$nazwa=$_POST['nazwa']; 
$adres=$_POST['adres']; 
$kwota=$_POST['kwota']; 


$_SESSION["acc_number"]=$nrkonta;
$_SESSION["name"]=$nazwa;
$_SESSION["address"]=$adres;
$_SESSION["value"]=$kwota;

echo true;

}else{
	echo false;
}


?>


