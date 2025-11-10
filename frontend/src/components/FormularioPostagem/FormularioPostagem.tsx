/**
 * Componente FormularioPostagem
 *
 * Formulário reutilizável para criar e editar postagens.
 */

import { useState, FormEvent } from 'react';
import Button from '../Button/Button';
import './FormularioPostagem.css';

interface FormularioPostagemProps {
  tituloInicial?: string;
  conteudoInicial?: string;
  onSubmit: (titulo: string, conteudo: string) => Promise<void>;
  textoBotao: string;
  carregando: boolean;
}

const FormularioPostagem = ({
  tituloInicial = '',
  conteudoInicial = '',
  onSubmit,
  textoBotao,
  carregando,
}: FormularioPostagemProps) => {
  const [titulo, setTitulo] = useState(tituloInicial);
  const [conteudo, setConteudo] = useState(conteudoInicial);
  const [erros, setErros] = useState<{ titulo?: string; conteudo?: string }>({});

  const validarFormulario = (): boolean => {
    const novosErros: { titulo?: string; conteudo?: string } = {};

    if (!titulo.trim()) {
      novosErros.titulo = 'O título é obrigatório';
    }

    if (!conteudo.trim()) {
      novosErros.conteudo = 'O conteúdo é obrigatório';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    await onSubmit(titulo, conteudo);
  };

  return (
    <form className="formulario-postagem" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o título da postagem"
          disabled={carregando}
          className={erros.titulo ? 'input-erro' : ''}
        />
        {erros.titulo && <span className="mensagem-erro">{erros.titulo}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="conteudo">Conteúdo</label>
        <textarea
          id="conteudo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Digite o conteúdo da postagem"
          rows={12}
          disabled={carregando}
          className={erros.conteudo ? 'input-erro' : ''}
        />
        {erros.conteudo && <span className="mensagem-erro">{erros.conteudo}</span>}
      </div>

      <Button type="submit" disabled={carregando}>
        {carregando ? 'Salvando...' : textoBotao}
      </Button>
    </form>
  );
};

export default FormularioPostagem;
