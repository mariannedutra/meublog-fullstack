/**
 * Componente Card
 *
 * Card reutilizável para exibir conteúdo.
 */

import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <div
      className={`card ${className} ${onClick ? 'card-clicavel' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
