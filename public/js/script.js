document.addEventListener('DOMContentLoaded', () => {
    
    // ======== CONTROLES DA PÁGINA INICIAL ========
    const btnEntrar = document.getElementById('btn-entrar');
    const btnJogar = document.getElementById('btn-jogar');
    const btnSom = document.getElementById('btn-som');
    let somMutado = false;

    if (btnEntrar) {
        btnEntrar.addEventListener('click', () => {
            // Leva o usuário para a tela de Login
            window.location.href = '/login';
        });
    }

    if (btnJogar) {
        btnJogar.addEventListener('click', () => {
            console.log('Iniciando fase 1...');
            // Futuramente: window.location.href = '/fase1';
        });
    }

    if (btnSom) {
        btnSom.addEventListener('click', () => {
            somMutado = !somMutado;
            btnSom.style.opacity = somMutado ? '0.6' : '1';
        });
    }

    // ======== CONTROLES DA PÁGINA DE LOGIN ========
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); 
            // Simula verificação de sucesso e envia para a Página Inicial
            window.location.href = '/'; 
        });
    }

    // ======== CONTROLES DA PÁGINA DE CADASTRO ========
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simula a criação da conta e envia o usuário para fazer Login
            alert('Conta criada com sucesso!');
            window.location.href = '/login';
        });
    }
});