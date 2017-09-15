var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var y = window.scrollY;

function scrlup() {
    y = window.scrollY;
    while (y > h) {
        y = y - h
    };
    window.scrollBy({
        top: -window.innerHeight - y,
        left: 0, 
        behavior: 'smooth' 
    });
};

function scrldown() {
    y = window.scrollY;
    while (y > h) {
        y = y - h
    };
    window.scrollBy({
        top: window.innerHeight + y,
        left: 0, 
        behavior: 'smooth' 
    });
};
