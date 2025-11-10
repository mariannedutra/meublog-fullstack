/**
 * Componente Modal
 *
 * Modal reutilizável para confirmações e diálogos.
 */

import './Modal.css';
import Button from '../Button/Button';

interface ModalProps {
  titulo: string;
  mensagem: string;
  onConfirmar: () => void;
  onCancelar: () => void;
  confirmacaoTexto?: string;
  cancelarTexto?: string;
}

const Modal = ({
  titulo,
  mensagem,
  onConfirmar,
  onCancelar,
  confirmacaoTexto = 'Confirmar',
  cancelarTexto = 'Cancelar',
}: ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onCancelar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-titulo">{titulo}</h2>
        <p className="modal-mensagem">{mensagem}</p>
        <div className="modal-acoes">
          <Button onClick={onCancelar} tipo="secundario">
            {cancelarTexto}
          </Button>
          <Button onClick={onConfirmar} tipo="perigo">
            {confirmacaoTexto}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
