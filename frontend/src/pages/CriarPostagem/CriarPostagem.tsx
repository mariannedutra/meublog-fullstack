/**
 * Página de Criar Postagem
 *
 * Permite criar uma nova postagem no blog.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarPostagem } from '../../services/api';
import FormularioPostagem from '../../components/FormularioPostagem/FormularioPostagem';
import Button from '../../components/Button/Button';
import './CriarPostagem.css';

const CriarPostagem = () => {
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (titulo: string, conteudo: string) => {
    try {
      setCarregando(true);
      setErro('');
      const novaPostagem = await criarPostagem({ titulo, conteudo });
      navigate(`/postagem/${novaPostagem.id}`, { replace: true });
    } catch (error) {
      setErro('Erro ao criar postagem. Tente novamente.');
      console.error(error);
      setCarregando(false);
    }
  };

  return (
    <div className="criar-postagem">
      <div className="criar-header">
        <Button onClick={() => navigate('/')} tipo="secundario">
          ← Cancelar
        </Button>
        <h1>Nova Postagem</h1>
      </div>

      {erro && (
        <div className="erro-mensagem">
          <p>{erro}</p>
        </div>
      )}

      <FormularioPostagem
        onSubmit={handleSubmit}
        textoBotao="Publicar Postagem"
        carregando={carregando}
      />
    </div>
  );
};

export default CriarPostagem;
