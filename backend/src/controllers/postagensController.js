/**
 * Controller de Postagens
 *
 * Contém a lógica de negócio para cada rota.
 * Faz a ponte entre as rotas e o model.
 */

const Postagem = require('../models/Postagem');

/**
 * Lista todas as postagens
 */
const listarPostagens = async (req, res) => {
  try {
    const postagens = await Postagem.buscarTodas();
    res.json(postagens);
  } catch (erro) {
    console.error('Erro ao listar postagens:', erro);
    res.status(500).json({
      erro: 'Erro ao buscar postagens',
      mensagem: erro.message
    });
  }
};

/**
 * Busca uma postagem específica por ID
 */
const buscarPostagem = async (req, res) => {
  try {
    const { id } = req.params;
    const postagem = await Postagem.buscarPorId(id);

    if (!postagem) {
      return res.status(404).json({
        erro: 'Postagem não encontrada'
      });
    }

    res.json(postagem);
  } catch (erro) {
    console.error('Erro ao buscar postagem:', erro);
    res.status(500).json({
      erro: 'Erro ao buscar postagem',
      mensagem: erro.message
    });
  }
};

/**
 * Cria uma nova postagem
 */
const criarPostagem = async (req, res) => {
  try {
    const { titulo, conteudo } = req.body;

    // Validação dos dados
    if (!titulo || !conteudo) {
      return res.status(400).json({
        erro: 'Título e conteúdo são obrigatórios'
      });
    }

    if (titulo.trim().length === 0 || conteudo.trim().length === 0) {
      return res.status(400).json({
        erro: 'Título e conteúdo não podem estar vazios'
      });
    }

    const novaPostagem = await Postagem.criar({ titulo, conteudo });

    res.status(201).json({
      mensagem: 'Postagem criada com sucesso',
      postagem: novaPostagem
    });
  } catch (erro) {
    console.error('Erro ao criar postagem:', erro);
    res.status(500).json({
      erro: 'Erro ao criar postagem',
      mensagem: erro.message
    });
  }
};

/**
 * Atualiza uma postagem existente
 */
const atualizarPostagem = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    // Validação dos dados
    if (!titulo || !conteudo) {
      return res.status(400).json({
        erro: 'Título e conteúdo são obrigatórios'
      });
    }

    if (titulo.trim().length === 0 || conteudo.trim().length === 0) {
      return res.status(400).json({
        erro: 'Título e conteúdo não podem estar vazios'
      });
    }

    const postagemAtualizada = await Postagem.atualizar(id, { titulo, conteudo });

    res.json({
      mensagem: 'Postagem atualizada com sucesso',
      postagem: postagemAtualizada
    });
  } catch (erro) {
    console.error('Erro ao atualizar postagem:', erro);

    if (erro.message === 'Postagem não encontrada') {
      return res.status(404).json({
        erro: 'Postagem não encontrada'
      });
    }

    res.status(500).json({
      erro: 'Erro ao atualizar postagem',
      mensagem: erro.message
    });
  }
};

/**
 * Deleta uma postagem
 */
const deletarPostagem = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Postagem.deletar(id);

    res.json(resultado);
  } catch (erro) {
    console.error('Erro ao deletar postagem:', erro);

    if (erro.message === 'Postagem não encontrada') {
      return res.status(404).json({
        erro: 'Postagem não encontrada'
      });
    }

    res.status(500).json({
      erro: 'Erro ao deletar postagem',
      mensagem: erro.message
    });
  }
};

module.exports = {
  listarPostagens,
  buscarPostagem,
  criarPostagem,
  atualizarPostagem,
  deletarPostagem
};
