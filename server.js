const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve os arquivos estáticos (CSS, JS, Imagens) da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota 1: Página Inicial do Jogo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota 2: Tela de Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rota 3: Tela de Cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`- Início: http://localhost:${PORT}/`);
    console.log(`- Login: http://localhost:${PORT}/login`);
    console.log(`- Cadastro: http://localhost:${PORT}/cadastro`);
});