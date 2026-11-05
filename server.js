const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Permite que o servidor acesse a pasta 'public' (onde estão css, js, img)
app.use(express.static(path.join(__dirname, 'public')));

// Rota 1: Página de Login (agora configurada como a primeira página a abrir)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rota 2: Página de Cadastro (Criar Conta)
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// Rota 3: Página Inicial do Jogo (Acessada após o login)
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Página de Login: http://localhost:${PORT}/`);
    console.log(`Página de Cadastro: http://localhost:${PORT}/cadastro`);
    console.log(`Página Inicial do Jogo: http://localhost:${PORT}/inicio`);
});