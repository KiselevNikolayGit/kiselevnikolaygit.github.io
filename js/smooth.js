console.log("Kiselev Nikolay is good.");    
var vh = document.getElementById("hdr").offsetHeight;

function scrlup() {
    for (var index = 0; index < vh; index++) {
        setTimeout(function() {
            document.body.scrollBy(0, -1);
        }, (index * .6 + (index * 0.002)));
    };
};

function scrldown() {
    for (var index = 0; index < vh; index++) {
        setTimeout(function() {
            document.body.scrollBy(0, 1);
        }, (index * .6 + (index * 0.002)));
    };  
};
