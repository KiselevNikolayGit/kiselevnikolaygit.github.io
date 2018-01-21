$(function() {


UIkit.notification(
	`Здраствуй! Как вы заметили тут ничего не работает. А пока вы читали это уведомление скрипт собрал всю информацию о вас и вашем устройстве. Приятно познакомится. Шутка. Я не ожидал, что ты дочитаешь не свернув. <br><span uk-icon="heart"></span>`,
	{
		pos: 'bottom-right',
		status: "danger",
		timeout: 0
	}
);

var iscookied = LoadCookie("iscookied");

if (iscookied != "yeah") {
	CreateCookie("iscookied", "yeah");
	UIkit.notification(
		`Мы используем файлы <a target="_blank" href="https://ru.wikipedia.org/wiki/Cookie">cookie</a> для хранения ваших настроек и предпочтений.`,
		{pos: 'bottom-right'}
	);
};

var wid = $("#drawer").parent().width(),
	hid = 300;

$("#drawer").prop("width", wid);
$("#drawer").prop("height", hid);

$(window).resize(function(event) {
	window.location.reload(false);
	// FALLBACKS RELOAD PAGE
	window.location.replace(window.location.pathname + window.location.search + window.location.hash);
	window.location.href = window.location.pathname + window.location.search + window.location.hash;
});


});