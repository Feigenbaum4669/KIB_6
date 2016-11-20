function alignMyDivs(){
  var els = [document.getElementById("code1"), 
  document.getElementById("code2"), ];
  
  //Niech przegladarka sama przeliczy potrzebne wysokości
  for (var i=0;i<els.length;i++){
	els[i].style.height = "auto";
  }
  //Wyznaczamy maksimum z wysokości
  var h = 0;
  for (i=0; i<els.length; i++){
	h = Math.max(h,els[i].clientHeight);
  }
  //Ustawiamy sami wysokości
  for (var i=0;i<els.length;i++){
	els[i].style.height = h + "px";
  }
}

window.onload = function(){
	alignMyDivs();
	window.onresize = alignMyDivs;
}