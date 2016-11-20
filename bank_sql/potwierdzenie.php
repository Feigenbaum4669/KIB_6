<?php
session_start();
require_once("PHP/myPage.php");

$P = new WPPTPage('4',"Wykonaj przelew");
$P->SetDescription("Przelew na inne konto");
$P->AddKeywords("przelew, bank");
$P->AddJS("jquery-1.11.1.js");
$P->AddJS("potwierdzenie.js");
$P->AddJS("przelej.js");
$P->AddJS("allign.js");

echo $P->Begin();
?>

<h1>Bank WPPT</h1>
</div>
<p>Członek grupy Banki PWr</p>

<?php 
echo $P->Main(); ?>

<article>
<header>
<h2>Potwierdzenie wykonania przelewu.</h2>
</header>

  <section>
<h3>Instrukcja</h3>
  <p> Przelew został wykonany przelew zgodnie z poniższymi danymi.</p>
  </section>
  
  <section>
   <div class="col-6-6">
        <div class="panel">
            <section>
<h3>Panel potwierdzenia przelewu</h3>
</section>
          Dane wykonanego przelewu:.<br><br>
          <div id="confirmedField">
          
        </div>
          
           
        </div>
        </div>
      </section>
</article>


<?php
 echo  $P->End();
?>  