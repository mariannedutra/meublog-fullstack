/**
 * Servidor Principal do Backend
 *
 * Este é o ponto de entrada da aplicação backend.
 * Configura o Express, CORS e as rotas da API.
 */

const express = require('express');
const cors = require('cors');
const { inicializarBancoDados } = require('./src/config/database');
const postagensRoutes = require('./src/routes/postagens');

// Criação da aplicação Express
const app = express();
const PORTA = 3001;

// Middlewares
app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite receber JSON no body das requisições

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API do Blog está funcionando!',
    versao: '1.0.0'
  });
});

// Rotas da API
app.use('/postagens', postagensRoutes);

// Inicializar o banco de dados e depois iniciar o servidor
inicializarBancoDados()
  .then(() => {
    app.listen(PORTA, () => {
      console.log(`🚀 Servidor rodando na porta ${PORTA}`);
      console.log(`📝 Acesse: http://localhost:${PORTA}`);
      console.log(`📊 API de postagens: http://localhost:${PORTA}/postagens`);
    });
  })
  .catch(erro => {
    console.error('❌ Erro ao inicializar banco de dados:', erro);
    process.exit(1);
  });
