const fechaContador = new Date('jan 1, 2022 00:00:00').getTime();

function anoNuevo() {
    const ahora = new Date().getTime();
    gap = fechaContador - ahora;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const d = Math.floor(gap / (dias));
    const h = Math.floor((gap % (dias)) / (horas));
    const m = Math.floor((gap % (horas)) / (minutos));
    const s = Math.floor((gap % (minutos)) / (segundos));

    document.getElementById('dias').innerText = d;
    document.getElementById('horas').innerText = h;
    document.getElementById('minutos').innerText = m;
    document.getElementById('segundos').innerText = s;    
}

setInterval(function () {
    anoNuevo();
    
})