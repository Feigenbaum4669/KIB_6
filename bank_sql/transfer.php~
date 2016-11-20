<?php
session_start();
 

require_once('PHP/myPage.php');


if(isset($_SESSION["acc_number"])&&$_SESSION["name"]&&$_SESSION["address"]&&$_SESSION["value"]&&$_SESSION["user"]){
$login=$_SESSION["user"];
$nrkontaAkceptor=$_SESSION["acc_number"];
$nazwa=$_SESSION["name"];
$adres=$_SESSION["address"];
$kwota=$_SESSION["value"];

$zapytanie_pobierz = "SELECT acc_number FROM Passwords WHERE login = '$login'";
$wynik_pobierz = mysqli_query($db, $zapytanie_pobierz);

if (!$wynik_pobierz) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

$row = (mysqli_fetch_assoc($wynik_pobierz));

$nrkontaDonor=$row['acc_number'];

$komenda_pobierz = "INSERT INTO Transactions (donor, acceptor,name,address,value) VALUES ('$nrkontaDonor', '$nrkontaAkceptor','$nazwa','$adres','$kwota')";
 mysqli_query($db, $komenda_pobierz);

echo true;


}


  
  








 
 




 
?>




