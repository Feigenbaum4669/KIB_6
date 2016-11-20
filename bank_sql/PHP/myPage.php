<?php
global $STRONY;
 $STRONY=[];

 

require_once('baza.php');
/* MODEL */



/* VIEW */

$HEADER_0 =<<<EOT
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <title>{{TITLE}}</title>
  <meta name="description" content= "{{DESCRIPTION}}">
  <meta name="keywords" content= "{{KEYWORDS}}">  
  <meta name="viewport" content= "width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="IMG/favicon.ico" type="image/x-icon">
  <link rel="icon" href="IMG/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />
EOT;

$HEADER_1 =<<<EOT
</head>
<body>
<div id="pageContainer">
<div id="mHeader">
<img id="logo" src="IMG/InfWPPT.png" alt="">
EOT;


$MAIN =<<<EOT

<div class="row">
<div class="col-2-6">
<div id="leftMenu"> 
<div id="showMenu">
Menu &#9776;
</div>
<div id="innerMenu">
<nav>
<ul>
{{ITEMS}}
</ul>
</nav>
</div>
</div>
</div>

<div class="col-4-6">
<div id="content"> 
EOT;

$FOOTER = <<<EOT

</div>
</div>
</div>

<div class="col-6-6">
<footer>
<p>Copyrigth &copy; 2016 WPPT PWr</p>
</footer>
</div>

</div>
</body> 
</html> 
EOT;







/* CONTROLLER */

class WPPTPage{
	
  private $id = '';
  private $Title = "";
  private $description = "";
  private $keywords    = "Politechnika Wrocławska, WPPT, Katedra Informatyyki";
  private /*. string[int] .*/$css      = [];
  private /*. string[int] .*/$jsfiles  = [];
  
	public function showMenu(){
		global $STRONY;
$STRONY = [

['id'=>'1',  'name'=>"Wyloguj",      'href'=>"index.php" ],
['id'=>'3',  'name'=>"Wykonaj przelew",      'href'=>"przelew.php" ],
['id'=>'5',  'name'=>"Historia",      'href'=>"historia.php" ],
];	
}

  public function AddCSS(/*. string .*/ $s) {
    $this->css[] = (string) str_replace("{{C}}", $s, 
	"<link href='CSS/{{C}}' rel='stylesheet'>");
  }

  public function AddJS(/*. string .*/ $s) {
    $this->css[] = (string) str_replace("{{J}}", $s, "<script src='JS/{{J}}'></script>");
  }

  public function SetDescription(/*. string .*/ $s) {
    $this->description = $s;
  }

  public function AddKeywords(/*. string .*/ $s) {
    $this->keywords.= "," . $s;
  }

  /**
  * @param string $id
  * @return void
  **/
  function __construct($id, $T = "") {
    $this->id    = $id;
    $this->Title = $T;
    $this->AddCSS("grid.css");
	 $this->AddCSS("mystyleGrid.css");
	 $this->AddJS("mechanics.js");
   if(isset($_SESSION['user'])){
   $this->showMenu();
   }
	 

  }

  /**
  * @return string
  **/
  private function Menu() {
   
  global $STRONY; 
    
 
    

   
    $ITEM   = "<li><a href='{{HREF}}'>{{NAME}}</a></li>";
    $ACTIVE = "<li class='home'>{{NAME}}</li>";
    $S = "";
    for ($i=0; $i<count($STRONY); $i++){
      
      if ($STRONY[$i]["id"]===$this->id) {
        $T= $ACTIVE;
      } else {
        $T= (string) str_replace("{{HREF}}", $STRONY[$i]["href"], $ITEM);
      };
      
      $T = (string) str_replace("{{NAME}}" , $STRONY[$i]["name"],  $T);
      $S.= $T . "\n";
    }
    return $S;
  }

  /**
  * @return string
  **/
  public function Begin() {
    //var_dump($this->css);
    global $HEADER_0, $HEADER_1;

    $S = (string) str_replace("{{TITLE}}", $this->Title,  $HEADER_0);
    $S = (string) str_replace("{{DESCRIPTION}}", $this->description, $S);
    $S = (string) str_replace("{{KEYWORDS}}", $this->keywords, $S);

    // dodajemy style    
    $X = "";
    for ($i=0;$i<count($this->css);$i++) {
      $X.= "  " .$this->css[$i] . "\n";
    }
    if ($X !== "") {
      $S.= "\n" . $X . "\n";
    }

    // Dodajemy javascript'y
    $X = "";
    for ($i=0;$i<count($this->jsfiles);$i++) {
      $X.= $this->jsfiles[$i] . "\n";
    }
    if ($X !== "") {
      $S.= "\n" . $X;
    }
    $S.=$HEADER_1;
    return preg_replace('/^\h*\v+/m', '', $S);
  }
  
  /**
  * @return string
  **/
  public function Main() {
  	//Wstawiamy menu
  	global $MAIN;
  	 $U="";
  	 $U = (string) str_replace("{{ITEMS}}", $this->Menu(), $U);
    $U.= (string) str_replace("{{ITEMS}}", $this->Menu(), $MAIN);
    // usuwamy puste linie
    return preg_replace('/^\h*\v+/m', '', $U);
  	}

  /**
  * @return string
  **/
  public function End() {
    global $FOOTER;
    return $FOOTER;
  }
  

 
}
?>
