function toggleMenu(){
	var el = document.getElementById("innerMenu");
	if (el.style.display != 'block'){
		el.style.display = 'block';
	} else {
		el.style.display = 'none';
	}
}

window.onload = function(){
	document.getElementById("showMenu").onclick = toggleMenu;
}

window.onresize=function(){
var xd=window.innerWidth;
if(xd>760){
document.getElementById("innerMenu").style.display='inline'
}
}

