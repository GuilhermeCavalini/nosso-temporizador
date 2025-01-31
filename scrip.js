function atualizarContador(){
    const dataInicial = new Date("2024-12-14T11:21:11");
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerText = `
    ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos
    `;
}

setInterval(atualizarContador, 1000);

atualizarContador();
