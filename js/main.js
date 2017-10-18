alert("SITE IS NOT SUCH NOT YOU KNOW WHAT I MEEN?");

var windowWidth = window.screen.width < window.outerWidth ?
window.screen.width : window.outerWidth;
var mobile = windowWidth < 500;

$("#main-header").css("height", $("#logo").css("height"));

function show_nav() {

};

show_nav();

$("#compass").click(function() {
    show_nav();
});
