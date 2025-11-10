/**
 * Tipos TypeScript do Projeto
 *
 * Define todas as interfaces e tipos usados na aplicação.
 */

// Interface da Postagem
export interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  data_criacao: string;
}

// Tipo para criar uma nova postagem (sem id e data)
export interface NovaPostagem {
  titulo: string;
  conteudo: string;
}

// Tipo para atualizar uma postagem
export interface AtualizarPostagem {
  titulo: string;
  conteudo: string;
}

// Interface para respostas de erro da API
export interface ErroApi {
  erro: string;
  mensagem?: string;
}
