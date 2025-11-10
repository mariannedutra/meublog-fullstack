/**
 * Serviço de API
 *
 * Contém todas as funções para comunicação com o backend.
 * Cada função retorna uma Promise para facilitar o uso com async/await.
 */

import { Postagem, NovaPostagem, AtualizarPostagem } from '../types';

// URL base da API - ajuste se necessário
const API_URL = 'http://localhost:3001';

/**
 * Busca todas as postagens
 */
export const buscarPostagens = async (): Promise<Postagem[]> => {
  const resposta = await fetch(`${API_URL}/postagens`);

  if (!resposta.ok) {
    throw new Error('Erro ao buscar postagens');
  }

  return resposta.json();
};

/**
 * Busca uma postagem específica por ID
 */
export const buscarPostagemPorId = async (id: number): Promise<Postagem> => {
  const resposta = await fetch(`${API_URL}/postagens/${id}`);

  if (!resposta.ok) {
    if (resposta.status === 404) {
      throw new Error('Postagem não encontrada');
    }
    throw new Error('Erro ao buscar postagem');
  }

  return resposta.json();
};

/**
 * Cria uma nova postagem
 */
export const criarPostagem = async (postagem: NovaPostagem): Promise<Postagem> => {
  const resposta = await fetch(`${API_URL}/postagens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postagem),
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.erro || 'Erro ao criar postagem');
  }

  const dados = await resposta.json();
  return dados.postagem;
};

/**
 * Atualiza uma postagem existente
 */
export const atualizarPostagem = async (
  id: number,
  postagem: AtualizarPostagem
): Promise<Postagem> => {
  const resposta = await fetch(`${API_URL}/postagens/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postagem),
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.erro || 'Erro ao atualizar postagem');
  }

  const dados = await resposta.json();
  return dados.postagem;
};

/**
 * Deleta uma postagem
 */
export const deletarPostagem = async (id: number): Promise<void> => {
  const resposta = await fetch(`${API_URL}/postagens/${id}`, {
    method: 'DELETE',
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.erro || 'Erro ao deletar postagem');
  }
};
