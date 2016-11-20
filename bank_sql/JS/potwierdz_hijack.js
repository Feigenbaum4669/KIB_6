
           
           

$(document).ready(function(){
	
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
} 



var v1=getCookie("nrkonta");
var v2=getCookie("nazwa");
var v3=getCookie("adres");
var v4=getCookie("kwota");




            
     				 document.getElementById("confirmField").innerHTML="<label for=\"numer_konta\">numer konta: </label>"+v1+"<br><label for=\"nazwa\">nazwa: </label>"+v2+"<br><label for=\"adres\">adres: </label>"+v3+"<br><label for=\"kwota\">kwota: </label> "+v4;
        
                    
       



});
/*
$(document).ready(function(){
 $.ajax({
            type:'POST', 
            url:'getTransferData.php',
            dataType:'json', 
             
                
                success: function(output) { 
       // alert( output);
     				 document.getElementById("confirmField").innerHTML="<label for=\"numer_konta\">numer konta: </label>"+output[0]+"<br><label for=\"nazwa\">nazwa: </label>"+output[1]+"<br><label for=\"adres\">adres: </label>"+output[2]+"<br><label for=\"kwota\">kwota: </label> "+output[3];
                 
                },
                 
                 
               
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                   
                }
             
        });
                    
       



});*/



