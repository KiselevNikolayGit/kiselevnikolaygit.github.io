$("#container").css('height', '100vh');

var wid = $("#deTestWai").parent().width(),
	clihei = $("#container").height(),
	headrehei = $("#container>header").height();

var hid = clihei - headrehei;

$("#deTestWai").prop("width", wid);
$("#deTestWai").prop("height", hid);

$(window).resize(function(event) {
	window.location.reload(false);
	// FALLBACKS RELOAD PAGE
	window.location.replace(window.location.pathname + window.location.search + window.location.hash);
	window.location.href = window.location.pathname + window.location.search + window.location.hash;
});