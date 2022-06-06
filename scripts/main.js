let canvas = null,
    ctx = null;

function paint(ctx) {
    ctx.fillStyle = '#f7e5e1';
    ctx.fillRect(50, 50, 100, 60);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    paint(ctx);
}

window.addEventListener('load', init, false);