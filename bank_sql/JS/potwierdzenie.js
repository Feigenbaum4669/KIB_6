
           
           

$(document).ready(function(){
 $.ajax({
            type:'POST', 
            url:'getTransferData.php',
            dataType:'json', 
             
               
                success: function(output) { 
       // alert( output);
     				 document.getElementById("confirmedField").innerHTML="<label for=\"numer_konta\">numer konta: </label>"+output[0]+"<br><label for=\"nazwa\">nazwa: </label>"+output[1]+"<br><label for=\"adres\">adres: </label>"+output[2]+"<br><label for=\"kwota\">kwota: </label> "+output[3];
                 
                },
                 
                 
               
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                   
                }
             
        });
                    
       



});
