/**
 * Model de Postagem
 *
 * Define todas as operações do banco de dados relacionadas às postagens.
 * Cada método retorna uma Promise para facilitar o uso com async/await.
 */

const { db } = require('../config/database');

class Postagem {
  /**
   * Busca todas as postagens ordenadas por data (mais recentes primeiro)
   * @returns {Promise<Array>} Lista de postagens
   */
  static buscarTodas() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM postagens ORDER BY data_criacao DESC';

      db.all(sql, [], (erro, linhas) => {
        if (erro) {
          reject(erro);
        } else {
          resolve(linhas);
        }
      });
    });
  }

  /**
   * Busca uma postagem específica por ID
   * @param {number} id - ID da postagem
   * @returns {Promise<Object>} Postagem encontrada
   */
  static buscarPorId(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM postagens WHERE id = ?';

      db.get(sql, [id], (erro, linha) => {
        if (erro) {
          reject(erro);
        } else {
          resolve(linha);
        }
      });
    });
  }

  /**
   * Cria uma nova postagem
   * @param {Object} postagem - Dados da postagem {titulo, conteudo}
   * @returns {Promise<Object>} Postagem criada com seu ID
   */
  static criar(postagem) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO postagens (titulo, conteudo) VALUES (?, ?)';

      db.run(sql, [postagem.titulo, postagem.conteudo], function(erro) {
        if (erro) {
          reject(erro);
        } else {
          // this.lastID contém o ID da postagem recém-criada
          resolve({
            id: this.lastID,
            ...postagem
          });
        }
      });
    });
  }

  /**
   * Atualiza uma postagem existente
   * @param {number} id - ID da postagem
   * @param {Object} postagem - Novos dados {titulo, conteudo}
   * @returns {Promise<Object>} Resultado da atualização
   */
  static atualizar(id, postagem) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE postagens SET titulo = ?, conteudo = ? WHERE id = ?';

      db.run(sql, [postagem.titulo, postagem.conteudo, id], function(erro) {
        if (erro) {
          reject(erro);
        } else {
          // this.changes indica quantas linhas foram afetadas
          if (this.changes === 0) {
            reject(new Error('Postagem não encontrada'));
          } else {
            resolve({
              id: id,
              ...postagem,
              modificacoes: this.changes
            });
          }
        }
      });
    });
  }

  /**
   * Deleta uma postagem
   * @param {number} id - ID da postagem
   * @returns {Promise<Object>} Resultado da deleção
   */
  static deletar(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM postagens WHERE id = ?';

      db.run(sql, [id], function(erro) {
        if (erro) {
          reject(erro);
        } else {
          if (this.changes === 0) {
            reject(new Error('Postagem não encontrada'));
          } else {
            resolve({
              mensagem: 'Postagem deletada com sucesso',
              id: id,
              modificacoes: this.changes
            });
          }
        }
      });
    });
  }
}

module.exports = Postagem;
