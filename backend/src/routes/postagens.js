/**
 * Rotas de Postagens
 *
 * Define todas as rotas da API relacionadas às postagens.
 */

const express = require('express');
const router = express.Router();
const {
  listarPostagens,
  buscarPostagem,
  criarPostagem,
  atualizarPostagem,
  deletarPostagem
} = require('../controllers/postagensController');

// GET /postagens - Lista todas as postagens
router.get('/', listarPostagens);

// GET /postagens/:id - Busca uma postagem específica
router.get('/:id', buscarPostagem);

// POST /postagens - Cria uma nova postagem
router.post('/', criarPostagem);

// PUT /postagens/:id - Atualiza uma postagem
router.put('/:id', atualizarPostagem);

// DELETE /postagens/:id - Deleta uma postagem
router.delete('/:id', deletarPostagem);

module.exports = router;
