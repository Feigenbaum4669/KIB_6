
           
           

$(document).ready(function(){
 $.ajax({
            type:'POST', /*Informacja o tym, że dane będą pobierane*/
            url:'getHistory.php', /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            dataType:'json', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(json) { /*Funkcja zawiera parametr*/
                //alert( json);
                 for (var klucz in json)
                        {
                        
                        	 var output=json[klucz]   
                           
                            
                            document.getElementById("historyField").innerHTML+="<label for=\"numer_konta\">numer konta: </label>"+output[0]+"<br><label for=\"nazwa\">nazwa: </label>"+output[1]+"<br><label for=\"adres\">adres: </label>"+output[2]+"<br><label for=\"kwota\">kwota: </label> "+output[3]+"<br><label for=\"data\">data: </label> "+output[4]+"<br><br>";
                           
                             
                         
                        } 
                     
     				 
                 
                },
                 
                 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
             
        });
                    
       



});