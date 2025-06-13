AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contagemRegressiva = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diferenca = timeStampDoEvento - timeStampAtual;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (diferenca < 0) {
        clearInterval(contagemRegressiva);
        document.getElementById('contador').innerHTML = 'Evento Encerrado';
    }
}, 1000);