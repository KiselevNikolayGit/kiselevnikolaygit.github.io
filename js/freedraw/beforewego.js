function LoadCookie(Key) {
  return $.cookie(Key);
};

function CreateCookie(Key, Value) {
  $.cookie(Key, Value, {
    expires: 7,
    path: '/'
  });
};

function RemoveCookie(Key) {
  $.removeCookie(Key, {
    path: '/'
  });
};

$(function() {
	
	UIkit.notification(
		`Мы постоянно сохраняем ваши рисунки в памяти, для вашего комфорта`,
		{pos: 'bottom-right'}
	);

})

function normalizeCan() {
	$("#container").css('height', '100vh');
	var wid = $("#deTestWai").parent().width(),
		clihei = $("#container").height(),
		headrehei = $("#container>header").height();

	var hid = clihei - headrehei;

	$("#deTestWai").prop("width", wid);
	$("#deTestWai").prop("height", hid);
	$("#deTestWai").prop('style', '');
};

normalizeCan();

$(window).resize(function(event) {
	normalizeCan();
	callPolice();
});;
