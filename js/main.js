var elems = document.getElementsByClassName("prapp");

window.addEventListener('scroll', function() {
	// Чет не гладенько, даже хз
	var pos = window.pageYOffset * 0.02;
	for (i = 0; i < elems.length; i++) {
		elems.item(i).style.backgroundPosition = "0% ".concat((50 + pos).toString()).concat("%");
	};
});