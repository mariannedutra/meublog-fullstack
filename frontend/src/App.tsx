/**
 * Componente Principal da Aplicação
 *
 * Configura as rotas usando React Router.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PostagemDetalhes from './pages/PostagemDetalhes/PostagemDetalhes';
import CriarPostagem from './pages/CriarPostagem/CriarPostagem';
import EditarPostagem from './pages/EditarPostagem/EditarPostagem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postagem/:id" element={<PostagemDetalhes />} />
          <Route path="/nova" element={<CriarPostagem />} />
          <Route path="/editar/:id" element={<EditarPostagem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
