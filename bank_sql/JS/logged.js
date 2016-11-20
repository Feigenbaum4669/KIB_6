
$(document).ready(function(){
 $.ajax({
            type:'POST', /*Informacja o tym, że dane będą pobierane*/
            url:'getLogin.php', /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            dataType:'text', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(output) { /*Funkcja zawiera parametr*/
     				 document.getElementById("loginField").innerHTML="Witamy, "+output+"!";
                 
                },
                 
                 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
             
        });
                    
       



});


