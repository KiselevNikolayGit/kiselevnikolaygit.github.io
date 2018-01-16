var canvas = document.getElementById('deTestWai'),
    context = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 95;
}

resizeCanvas();