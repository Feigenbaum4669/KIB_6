<?php
session_start();
require_once("PHP/myPage.php");

$P = new WPPTPage('2',"Zalogowany");
$P->SetDescription("Logowanie do konta indywidualnego");
$P->AddKeywords("logowanie, bank");
$P->AddJS("allign.js");
$P->AddJS("loginCheck.js");
$P->AddJS("jquery-1.11.1.js");
$P->AddJS("serverComm.js");
$P->AddJS("logged.js");




echo $P->Begin();
?>

<h1>Bank WPPT</h1>
</div>
<p>Członek grupy Banki PWr</p>

<?php 
echo $P->Main(); ?>

<article>
<header>
<h2>
 <div id="loginField">

        </div></h2>
 <p>Logowanie przebiegło pomyslnie.</p>

</header>

  <section>
<h3>Instrukcja</h3>
  <p> Wybierz czynność z lewego menu.</p>
  </section>
  
  
     
</article>


<?php
 echo  $P->End();
?>  