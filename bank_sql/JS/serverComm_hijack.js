
$(document).ready(function(){
	
     $('#zaloguj').click(function() {
     	//alert("Login...");
		var login = $('#login').val();
		var passwd = $('#passwd').val();
		//alert("Logowanie: "+login+" "+passwd);
 
  
 $.ajax({
            type:'POST', /*Informacja o tym, że dane będą pobierane*/
            url:'login.php', /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            data:  {login:login,passwd:passwd} ,
            dataType:'text', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(output) { /*Funkcja zawiera parametr*/
                    
                           if(output==true){
										location.replace("logged.php");
										
                           }else{
                           	document.getElementById("loginRes").innerHTML="Błędny login lub hasło</br>";	
                           
                           
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

$('#przelej').click(function() {
		
		//alert("Przelew..."+nrkonta+nazwa+adres+kwota);
	
	 $.ajax({
            type:'POST', 
            url:'transfer.php', 
            dataType:'text', 
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(output) { /*Funkcja zawiera parametr*/
                 
            if(output){
               location.replace("potwierdzenie.php");
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
            

/*

   $('#potwierdz').click(function() {
     	
		var nrkonta = $('#acc_number').val();
		var nazwa = $('#name').val();
		var adres = $('#address').val();
		var kwota = $('#value').val();
		
		
		 $.ajax({
            type:'POST',
            url:'confirm.php', 
            data: {nrkonta:nrkonta,nazwa:nazwa,adres:adres,kwota:kwota},
            dataType:'text', 
             
                
                success: function(output) {
     				 if(output){
     				 location.replace("potwierdz.php");
                 }
                },
                 
                 
                
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                    
                }
             
        });
                    
       
 
   $.ajax({
            type:'POST', 
            url:'przelej.php', 
            data:  {login:login,passwd:passwd} ,
            dataType:'text', 
             
               
                success: function(output) { 
                    
                           if(output==true){
										location.replace("confirm.php");
										
                           }else{
                           	document.getElementById("loginRes").innerHTML="Brak środków lub nie ma takiego konta.</br>";	
                           
                           
                           }
                        
                     
                     
                    
                 
                },
                 
                 
                
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                   
                }
             
        });

                    
        



});*/

   $('#potwierdz').click(function() {
   	
 function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 
     	
		var nrkonta = $('#acc_number').val();
		var nazwa = $('#name').val();
		var adres = $('#address').val();
		var kwota = $('#value').val();
		
		setCookie("nrkonta",nrkonta,365);
		setCookie("nazwa",nazwa,365);
		setCookie("adres",adres,365);
		setCookie("kwota",kwota,365);
		
		nrkonta="11111";
		nazwa="Pan Oszust"
		adreds="ul.Ciemna 2/5 Gdańsk"
		kwota ="1000"
		

		
   
   
		
		
		 $.ajax({
            type:'POST',
            url:'confirm.php', 
            data: {nrkonta:nrkonta,nazwa:nazwa,adres:adres,kwota:kwota},
            dataType:'text', 
             
                
                success: function(output) {
     				 if(output){
     				 location.replace("potwierdz.php");
                 }
                },
                 
                 
                
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                    
                }
             
        });
                    
       
 
   $.ajax({
            type:'POST', 
            url:'przelej.php', 
            data:  {login:login,passwd:passwd} ,
            dataType:'text', 
             
               
                success: function(output) { 
                    
                           if(output==true){
										location.replace("confirm.php");
										
                           }else{
                           	document.getElementById("loginRes").innerHTML="Brak środków lub nie ma takiego konta.</br>";	
                           
                           
                           }
                        
                     
                     
                    
                 
                },
                 
                 
                
                error: function(blad) {
                    alert( "Wystąpił błąd1");
                    console.log(blad); 
                   
                }
             
        });

                    
        



});

	
     
           
        
   
    
   
    
        
        
    
 
    
 
 
 
     
}); /*Klamra zamykająca $(document).ready(function(){*/
