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

setTimeout(function() {

	$(".jswake").show();
	$(".jswake").animate({
		opacity: 1,
	}, 250);
	$("[data-retext]").each(function( index ) {
		var data = $(this).data("retext");
		$(this).html(data);
	});

}, 6000 / 3);


});