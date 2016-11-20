
function loginCheck(){
var login=document.getElementById("login").value;
var passwd=document.getElementById("passwd").value;	
var l="ala";
var p="kot";
var n1 = login.localeCompare(l); 
var n2 = passwd.localeCompare(p); 
if(n1==0 && n2==0){
document.getElementById("loginRes").innerHTML="Zalogowano pomyślnie.</br>";	
}else{
	document.getElementById("loginRes").innerHTML="Błędny login lub hasło.</br>";	
}
};








