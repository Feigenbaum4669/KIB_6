/*Ustawienie wykonania działań wówczas, gdy strona jest całkowicie wczytana */
$(document).ready(function(){
	
	$('#zaloguj').click(function() {
		alert( "Handler for .click() called." );
		var login = $('#login').val();
		var passwd = $('#passwd').val();
		/*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku pobierz*/
     
        $.ajax({
            type:"GET", /*Informacja o tym, że dane będą pobierane*/
            url:"login.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            contentType:"application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
            dataType:'json', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(json) { /*Funkcja zawiera parametr*/
                     
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                    for (var klucz in json)
                        {
                            var wiersz = json[klucz];  /*Kolejne przebiegi pętli wstawiają nowy klucz*/     
                            var login = wiersz[0];
                            var iter = wiersz[1];
                            var salt = wiersz[2];
                            var hash = wiersz[3];
                             
                            /*Ustalenie sposobu wyświetlania pobranych danych w bloku div*/
                            document.getElementById("loginRes").innerHTML="MADAFAKA</br>";	
                            $("<span>login: "+login+" iter: "+iter+" salt: "+salt+" hash: "+hash+"</span>")
                            .appendTo('#loginRes')
                            .append("<hr>")
                        } 
                     
                     
                     
                 
                },
                 
                 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
             
        });
       
 
   }

     
});