/**
 * Componente Loading
 *
 * Indicador de carregamento com animação.
 */

import './Loading.css';

interface LoadingProps {
  mensagem?: string;
}

const Loading = ({ mensagem = 'Carregando...' }: LoadingProps) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-mensagem">{mensagem}</p>
    </div>
  );
};

export default Loading;
