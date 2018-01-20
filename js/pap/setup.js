var wid = $(`#deTestWai`).parent().width(),
	hid = $(`#deTestWai`).parent().height();

$(`#deTestWai`).prop("width", wid);
$(`#deTestWai`).prop("height", hid);

$(window).resize(function(event) {
	window.location.reload(false);
	// FALLBACKS RELOAD PAGE
	window.location.replace(window.location.pathname + window.location.search + window.location.hash);
	window.location.href = window.location.pathname + window.location.search + window.location.hash;
});