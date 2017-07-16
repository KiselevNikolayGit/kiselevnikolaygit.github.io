window.onscroll = function() {
	pos = window.pageYOffset * -0.1;
	var ypos = pos.toString();
	document.getElementById("paralax").style.backgroundPosition = "0px ".concat(ypos).concat("px");
};