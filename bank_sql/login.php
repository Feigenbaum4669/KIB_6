<?php
session_start();
 

require_once('PHP/myPage.php');

if(isset($_POST['login'])&&isset($_POST['passwd'])){
$login= $_POST['login']; 
$password= $_POST['passwd']; 

global $admin;



  
  
$zapytanie_pobierz = "SELECT hash FROM Passwords WHERE login = '$login'";

$wynik_pobierz = mysqli_query($db, $zapytanie_pobierz);


	
	if (!$wynik_pobierz) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

    


$row = (mysqli_fetch_assoc($wynik_pobierz));

$hash=$row['hash'];

global $authen;
$authen=false;

if (password_verify($password, $hash)) {
    $authen=true;
} 

if($authen){
	$_SESSION["user"] = $login;
	$_SESSION["admin"] = "false";
}else{
	$zapytanie_pobierz = "SELECT hash FROM Admins WHERE login = '$login'";
	$wynik_pobierz = mysqli_query($db, $zapytanie_pobierz);
	
	if (!$wynik_pobierz) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
    }
    
    $row = (mysqli_fetch_assoc($wynik_pobierz));

$hash=$row['hash'];

if (password_verify($password, $hash)) {
    $authen=true;
    $_SESSION["user"] = $login;
	$_SESSION["admin"] = true;
    
} 

}



echo $authen;
}




 
 




 
?>




