/**
 * Página de Detalhes da Postagem
 *
 * Exibe uma postagem completa com opções de editar e deletar.
 */

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarPostagemPorId, deletarPostagem } from '../../services/api';
import { Postagem } from '../../types';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import './PostagemDetalhes.css';

const PostagemDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const [postagem, setPostagem] = useState<Postagem | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [deletando, setDeletando] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    carregarPostagem();
  }, [id]);

  const carregarPostagem = async () => {
    try {
      setCarregando(true);
      setErro('');
      const dados = await buscarPostagemPorId(Number(id));
      setPostagem(dados);
    } catch (error) {
      setErro('Erro ao carregar postagem.');
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };

  const handleDeletar = async () => {
    try {
      setDeletando(true);
      await deletarPostagem(Number(id));
      navigate('/', { replace: true });
    } catch (error) {
      setErro('Erro ao deletar postagem.');
      console.error(error);
      setDeletando(false);
      setMostrarModal(false);
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (carregando) {
    return <Loading mensagem="Carregando postagem..." />;
  }

  if (erro || !postagem) {
    return (
      <div className="postagem-detalhes">
        <div className="erro-mensagem">
          <p>{erro || 'Postagem não encontrada.'}</p>
          <Button onClick={() => navigate('/')}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="postagem-detalhes">
      <Button onClick={() => navigate('/')} tipo="secundario">
        ← Voltar
      </Button>

      <Card className="postagem-card">
        <h1>{postagem.titulo}</h1>
        <p className="postagem-data">{formatarData(postagem.data_criacao)}</p>
        <div className="postagem-conteudo">
          {postagem.conteudo.split('\n').map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
      </Card>

      <div className="postagem-acoes">
        <Button
          onClick={() => navigate(`/editar/${postagem.id}`)}
          tipo="primario"
        >
          Editar Postagem
        </Button>
        <Button
          onClick={() => setMostrarModal(true)}
          tipo="perigo"
          disabled={deletando}
        >
          {deletando ? 'Deletando...' : 'Deletar Postagem'}
        </Button>
      </div>

      {mostrarModal && (
        <Modal
          titulo="Confirmar Exclusão"
          mensagem="Tem certeza que deseja deletar esta postagem? Esta ação não pode ser desfeita."
          onConfirmar={handleDeletar}
          onCancelar={() => setMostrarModal(false)}
          confirmacaoTexto="Sim, deletar"
          cancelarTexto="Cancelar"
        />
      )}
    </div>
  );
};

export default PostagemDetalhes;
