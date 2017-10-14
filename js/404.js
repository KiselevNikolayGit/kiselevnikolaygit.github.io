var start = new Date;

setInterval(function() {
    $("#counter").text(parseInt(-(new Date - start) / 1000 + 10 + 1) + "");
}, 1000);