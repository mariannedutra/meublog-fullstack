/**
 * Configuração do Banco de Dados SQLite
 *
 * Este arquivo gerencia a conexão com o banco de dados SQLite
 * e cria a tabela de postagens se ela não existir.
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados
const caminhoDb = path.resolve(__dirname, '../../database.sqlite');

// Criar conexão com o banco de dados
const db = new sqlite3.Database(caminhoDb, (erro) => {
  if (erro) {
    console.error('❌ Erro ao conectar no banco de dados:', erro.message);
  } else {
    console.log('✅ Conectado ao banco de dados SQLite');
  }
});

/**
 * Inicializa o banco de dados criando a tabela de postagens
 * @returns {Promise} Promise que resolve quando a tabela é criada
 */
const inicializarBancoDados = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS postagens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        conteudo TEXT NOT NULL,
        data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    db.run(sql, (erro) => {
      if (erro) {
        console.error('❌ Erro ao criar tabela:', erro.message);
        reject(erro);
      } else {
        console.log('✅ Tabela de postagens pronta');
        resolve();
      }
    });
  });
};

module.exports = { db, inicializarBancoDados };
