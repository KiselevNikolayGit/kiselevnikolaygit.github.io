var vw = document.getElementById("hdr").offsetHeight

function scrlup() {
    window.scrollBy({
        top: -vw,
        left: 0, 
        behavior: 'smooth' 
    });
};

function scrldown() {
    window.scrollBy({
        top: vw,
        left: 0, 
        behavior: 'smooth' 
    });
};
