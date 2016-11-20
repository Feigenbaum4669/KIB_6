<?php
session_start();
if(isset($_SESSION["acc_number"])&&$_SESSION["name"]&&$_SESSION["address"]&&$_SESSION["value"]){
$nrkonta=$_SESSION["acc_number"];
$nazwa=$_SESSION["name"];
$adres=$_SESSION["address"];
$kwota=$_SESSION["value"];

echo json_encode(array($nrkonta,$nazwa,$adres,$kwota));
}
?>



