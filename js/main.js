// Kisel made dat shit.


var windowWidth = window.screen.width < window.outerWidth ?
window.screen.width : window.outerWidth;
var mobile = windowWidth < 500;

function home() {
    window.scroll(0, 0);
};
setTimeout(home, 130);

function onlo() {
    document.getElementById("spinner").style.animation = "nospin 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards 1";
    alert("Николай Киселев работает над тем, чтоб хоть что-то перестало не работать и отвелекать от работы.");
};
window.onload = function() {setTimeout(onlo, 50);};

if (mobile) {
    $(".m-fail").css("flex-direction", "column");
    $(".m-fail-grid").css("width", "100%");
    $(".m-fail-text").css("font-size", "75%");
    $(".m-fail-hide").css("display", "none");
};


// МНЕ ОЧЕНЬ ЖАЛЬ ЧТО ПРИШЛОСЬ ПИСАТЬ
// СКРИПТ НА ПИТОНЕ ДЛЯ СЛЕДУЮЩИХ СТРОК.
// ЧТО-ТО ЦИКЛЫ В JS НЕ ПОСЛУШНЫЕ СОВСЕМ.


$("#d1").click(function() {
    $('html, body').animate({
        scrollTop: $("#it2").offset().top
    }, 1000);
});

$("#d2").click(function() {
    $('html, body').animate({
        scrollTop: $("#it3").offset().top
    }, 1000);
});

$("#d3").click(function() {
    $('html, body').animate({
        scrollTop: $("#it4").offset().top
    }, 1000);
});

$("#d4").click(function() {
    $('html, body').animate({
        scrollTop: $("#it5").offset().top
    }, 1000);
});

$("#u2").click(function() {
    $('html, body').animate({
        scrollTop: $("#it1").offset().top
    }, 1000);
});

$("#u3").click(function() {
    $('html, body').animate({
        scrollTop: $("#it2").offset().top
    }, 1000);
});

$("#u4").click(function() {
    $('html, body').animate({
        scrollTop: $("#it3").offset().top
    }, 1000);
});

$("#u5").click(function() {
    $('html, body').animate({
        scrollTop: $("#it4").offset().top
    }, 1000);
});