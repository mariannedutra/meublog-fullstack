/**
 * Página de Editar Postagem
 *
 * Permite editar uma postagem existente.
 */

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarPostagemPorId, atualizarPostagem } from '../../services/api';
import { type Postagem } from '../../types';
import FormularioPostagem from '../../components/FormularioPostagem/FormularioPostagem';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import './EditarPostagem.css';

const EditarPostagem = () => {
  const { id } = useParams<{ id: string }>();
  const [postagem, setPostagem] = useState<Postagem | null>(null);
  const [carregandoPostagem, setCarregandoPostagem] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    carregarPostagem();
  }, [id]);

  const carregarPostagem = async () => {
    try {
      setCarregandoPostagem(true);
      setErro('');
      const dados = await buscarPostagemPorId(Number(id));
      setPostagem(dados);
    } catch (error) {
      setErro('Erro ao carregar postagem.');
      console.error(error);
    } finally {
      setCarregandoPostagem(false);
    }
  };

  const handleSubmit = async (titulo: string, conteudo: string) => {
    try {
      setSalvando(true);
      setErro('');
      await atualizarPostagem(Number(id), { titulo, conteudo });
      navigate(`/postagem/${id}`, { replace: true });
    } catch (error) {
      setErro('Erro ao atualizar postagem. Tente novamente.');
      console.error(error);
      setSalvando(false);
    }
  };

  if (carregandoPostagem) {
    return <Loading mensagem="Carregando postagem..." />;
  }

  if (erro && !postagem) {
    return (
      <div className="editar-postagem">
        <div className="erro-mensagem">
          <p>{erro}</p>
          <Button onClick={() => navigate('/')}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  if (!postagem) {
    return (
      <div className="editar-postagem">
        <div className="erro-mensagem">
          <p>Postagem não encontrada.</p>
          <Button onClick={() => navigate('/')}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="editar-postagem">
      <div className="editar-header">
        <Button onClick={() => navigate(`/postagem/${id}`)} tipo="secundario">
          ← Cancelar
        </Button>
        <h1>Editar Postagem</h1>
      </div>

      {erro && (
        <div className="erro-mensagem">
          <p>{erro}</p>
        </div>
      )}

      <FormularioPostagem
        tituloInicial={postagem.titulo}
        conteudoInicial={postagem.conteudo}
        onSubmit={handleSubmit}
        textoBotao="Salvar Alterações"
        carregando={salvando}
      />
    </div>
  );
};

export default EditarPostagem;
