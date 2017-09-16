function home() {
    window.scroll(0, 0);
};

setTimeout(home, 130);

window.onwheel = function() {return false};

function onlo() {
    document.getElementById("spinner").style.animation = "nospin 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards 1";
};
window.onload = function() {setTimeout(onlo, 1000);};
