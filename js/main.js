var windowWidth = window.screen.width < window.outerWidth ?
window.screen.width : window.outerWidth;
var mobile = windowWidth < 500;

function show_nav() {
    if ($("#nav-in").css("display") != "none") {
        $("#nav-in").css("display", "none");
        $("#nav-out").css("width", "auto");
        $("#nav-out").css("height", "auto");
        if (mobile) {
            $("#nav-field").show();
        };
    } else {
        l = $("#nav-field").height();
        $("#nav-in").css("display", "flex");
        if (mobile) {
            $("#nav-out").css("height", l + "px");
            $("#nav-out").css("width", windowWidth + "px");
            $("#nav-field").hide();
        } else {
            $("#nav-out").css("width", "50%");
        };
    };
};

show_nav();

$("#compass").click(function() {
    show_nav();
});
