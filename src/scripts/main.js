const contador = document.getElementById('contador')
const dataDoAniversario = new Date("Apr 26, 2024 00:00:01");
const timesTempDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const distanciaAteOAniversario = timesTempDoAniversario - timesTempAtual



    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);

    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);

    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs);



    contador.innerHTML = `${diasAteOAniversario} dias ${horasAteOAniversario} horas ${minutosAteOAniversario} minutos`;

    if(distanciaAteOAniversario < 0){
        clearInterval(contaAsHoras);
        contador.innerHTML = 'Evento Expirado'
    }

}, 1000);