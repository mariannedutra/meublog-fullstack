/**
 * Componente Button
 *
 * Botão reutilizável com diferentes variantes de estilo.
 */

import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  tipo?: 'primario' | 'secundario' | 'perigo';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  tipo = 'primario',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`botao botao-${tipo}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
