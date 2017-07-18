var elems = document.getElementsByClassName("prapp");

window.addEventListener('scroll', function() {
	var pos = window.pageYOffset * 0.04;
	for (i = 0; i < elems.length; i++) {
		elems.item(i).style.backgroundPosition = "0% ".concat((pos).toString()).concat("%");
	};
});