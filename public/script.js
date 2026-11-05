document.addEventListener('DOMContentLoaded', () => {
    const btnJogar = document.getElementById('btn-jogar');
    const btnConfig = document.getElementById('btn-config');
    const btnSair = document.getElementById('btn-sair');
    const btnSom = document.getElementById('btn-som');

    let somMutado = false;

    btnJogar.addEventListener('click', () => {
        console.log('Iniciando o jogo...');
        // window.location.href = '/fase1'; 
    });

    btnConfig.addEventListener('click', () => {
        console.log('Abrindo menu de configurações...');
    });

    btnSair.addEventListener('click', () => {
        console.log('Fechando o jogo...');
    });

    btnSom.addEventListener('click', () => {
        somMutado = !somMutado;
        if (somMutado) {
            btnSom.style.opacity = '0.6';
            console.log('Som desativado');
        } else {
            btnSom.style.opacity = '1';
            console.log('Som ativado');
        }
    });
});