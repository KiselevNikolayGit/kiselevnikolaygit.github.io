$(function() {


$("img.pj-1").hide();
$("button.pj-1").click(function(event) {
	if ($("img.pj-1").is(":visible")){
		$("img.pj-1").hide();
	} else {
		$("img.pj-1").show();
	}
});

setTimeout(function() { $(".jsprogress000").addClass('active'); }, 00 / 3);
setTimeout(function() { $(".jsprogress005").addClass('active'); }, 500 / 3);
setTimeout(function() { $(".jsprogress010").addClass('active'); }, 1000 / 3);
setTimeout(function() { $(".jsprogress015").addClass('active'); }, 1500 / 3);
setTimeout(function() { $(".jsprogress020").addClass('active'); }, 2000 / 3);
setTimeout(function() { $(".jsprogress025").addClass('active'); }, 2500 / 3);
setTimeout(function() { $(".jsprogress030").addClass('active'); }, 3000 / 3);
setTimeout(function() { $(".jsprogress035").addClass('active'); }, 3500 / 3);
setTimeout(function() { $(".jsprogress040").addClass('active'); }, 4000 / 3);
setTimeout(function() { $(".jsprogress045").addClass('active'); }, 4500 / 3);
setTimeout(function() { $(".jsprogress050").addClass('active'); }, 5000 / 3);
setTimeout(function() { $(".jsprogress055").addClass('active'); }, 5500 / 3);
setTimeout(function() { $(".jsprogress065").addClass('active'); }, 6500 / 3);
setTimeout(function() { $(".jsprogress070").addClass('active'); }, 7000 / 3);
setTimeout(function() { $(".jsprogress075").addClass('active'); }, 7500 / 3);
setTimeout(function() { $(".jsprogress080").addClass('active'); }, 8000 / 3);
setTimeout(function() { $(".jsprogress085").addClass('active'); }, 8500 / 3);
setTimeout(function() { $(".jsprogress090").addClass('active'); }, 9000 / 3);
setTimeout(function() { $(".jsprogress095").addClass('active'); }, 9500 / 3);
setTimeout(function() { $(".jsprogress100").addClass('active'); }, 10000 / 3);

setTimeout(function() {

	$(".jswake").show();
	$(".jswake").animate({
		opacity: 1,
	}, 250);

}, 11000 / 3);


});