$(function() {


$("img.pj-1").hide();
$("button.pj-1").click(function(event) {
	if ($("img.pj-1").is(":visible")){
		$("img.pj-1").hide();
	} else {
		$("img.pj-1").show();
	}
});

});