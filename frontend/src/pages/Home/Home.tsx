/**
 * Página Home
 *
 * Lista todas as postagens do blog.
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscarPostagens } from '../../services/api';
import { Postagem } from '../../types';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import './Home.css';

const Home = () => {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    carregarPostagens();
  }, []);

  const carregarPostagens = async () => {
    try {
      setCarregando(true);
      setErro('');
      const dados = await buscarPostagens();
      setPostagens(dados);
    } catch (error) {
      setErro('Erro ao carregar postagens. Verifique se o backend está rodando.');
      console.error(error);
    } finally {
      setCarregando(false);
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

  const obterResumo = (conteudo: string, tamanho = 150) => {
    if (conteudo.length <= tamanho) return conteudo;
    return conteudo.substring(0, tamanho) + '...';
  };

  if (carregando) {
    return <Loading mensagem="Carregando postagens..." />;
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1>Meu Blog</h1>
        <Button onClick={() => navigate('/nova')}>
          Nova Postagem
        </Button>
      </div>

      {erro && (
        <div className="erro-mensagem">
          <p>{erro}</p>
          <Button onClick={carregarPostagens}>Tentar Novamente</Button>
        </div>
      )}

      {!erro && postagens.length === 0 && (
        <div className="vazio">
          <p>Nenhuma postagem encontrada.</p>
          <p>Que tal criar a primeira?</p>
          <Button onClick={() => navigate('/nova')}>
            Criar Primeira Postagem
          </Button>
        </div>
      )}

      <div className="postagens-grid">
        {postagens.map((postagem) => (
          <Card
            key={postagem.id}
            onClick={() => navigate(`/postagem/${postagem.id}`)}
          >
            <h3>{postagem.titulo}</h3>
            <p>{obterResumo(postagem.conteudo)}</p>
            <p className="card-data">{formatarData(postagem.data_criacao)}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
