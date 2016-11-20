<?php
session_start();
 

require_once('PHP/myPage.php');


if(isset($_SESSION["user"])){
$login=$_SESSION["user"];

$komenda_pobierz = "SELECT t.acceptor,t.name,t.address,t.value,t.date from Passwords p inner join Transactions t on p.acc_number = t.donor where p.login='$login' and t.confirmed=true";
$wynik_pobierz = mysqli_query($db, $komenda_pobierz);

if (!$wynik_pobierz) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

$pobrane_dane = array();
 
while ($wiersz = mysqli_fetch_row($wynik_pobierz)) 
{
  $pobrane_dane[] = $wiersz;
}


 

echo json_encode($pobrane_dane);


}