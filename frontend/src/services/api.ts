/**
 * Serviço de API
 *
 * Contém todas as funções para comunicação com o backend.
 * Usamos axios para fazer as requisições HTTP de forma simples.
 */

import axios from 'axios';
import type { Postagem, NovaPostagem, AtualizarPostagem } from '../types';

// URL base da API - ajuste se necessário
const API_URL = 'http://localhost:3000';

/**
 * Busca todas as postagens
 */
export const buscarPostagens = async (): Promise<Postagem[]> => {
  const resposta = await axios.get(`${API_URL}/postagens`);
  return resposta.data;
};

/**
 * Busca uma postagem específica por ID
 */
export const buscarPostagemPorId = async (id: number): Promise<Postagem> => {
  const resposta = await axios.get(`${API_URL}/postagens/${id}`);
  return resposta.data;
};

/**
 * Cria uma nova postagem
 */
export const criarPostagem = async (postagem: NovaPostagem): Promise<Postagem> => {
  const resposta = await axios.post(`${API_URL}/postagens`, postagem);
  return resposta.data.postagem;
};

/**
 * Atualiza uma postagem existente
 */
export const atualizarPostagem = async (
  id: number,
  postagem: AtualizarPostagem
): Promise<Postagem> => {
  const resposta = await axios.put(`${API_URL}/postagens/${id}`, postagem);
  return resposta.data.postagem;
};

/**
 * Deleta uma postagem
 */
export const deletarPostagem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/postagens/${id}`);
};