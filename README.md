# 📝 Meu Blog Full Stack - Projeto Educacional

Projeto educacional completo de um blog desenvolvido para ensinar conceitos de desenvolvimento web full stack. Este projeto demonstra a integração entre frontend e backend de forma didática e organizada.

## 🎯 Objetivos de Aprendizado

Este projeto foi criado para ensinar:

- **Backend**: Desenvolvimento de APIs RESTful com Node.js e Express
- **Banco de Dados**: Uso de SQLite para persistência de dados
- **Frontend**: Criação de interfaces com React e TypeScript
- **Integração**: Comunicação entre frontend e backend
- **Boas Práticas**: Código limpo, organizado e bem documentado
- **Arquitetura**: Padrão MVC e componentização

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript para o servidor
- **Express**: Framework web minimalista e flexível
- **SQLite3**: Banco de dados relacional leve e sem necessidade de servidor
- **CORS**: Middleware para permitir requisições do frontend

### Frontend
- **React 19**: Biblioteca para construção de interfaces de usuário
- **TypeScript**: JavaScript com tipagem estática para maior segurança
- **Vite**: Build tool moderna e extremamente rápida
- **React Router**: Biblioteca para navegação entre páginas
- **CSS Puro**: Estilização sem frameworks externos (didático)

## 📁 Estrutura do Projeto

```
meublog-fullstack/
├── backend/                    # API Node.js + Express
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js    # Configuração do SQLite
│   │   ├── models/
│   │   │   └── Postagem.js    # Model de postagem
│   │   ├── controllers/
│   │   │   └── postagensController.js  # Lógica de negócio
│   │   └── routes/
│   │       └── postagens.js   # Definição das rotas
│   ├── server.js              # Arquivo principal do servidor
│   ├── package.json
│   └── README.md              # Documentação do backend
│
├── frontend/                   # Aplicação React + TypeScript
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Loading/
│   │   │   ├── Modal/
│   │   │   └── FormularioPostagem/
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── Home/
│   │   │   ├── PostagemDetalhes/
│   │   │   ├── CriarPostagem/
│   │   │   └── EditarPostagem/
│   │   ├── services/
│   │   │   └── api.ts         # Serviço de comunicação com backend
│   │   ├── types.ts           # Definições de tipos TypeScript
│   │   └── App.tsx            # Componente principal com rotas
│   ├── package.json
│   └── README.md              # Documentação do frontend
│
└── README.md                   # Este arquivo
```

## 🔧 Como Executar o Projeto

### Pré-requisitos

- **Node.js** versão 16 ou superior
- **npm** (gerenciador de pacotes do Node.js)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/mariannedutra/meublog-fullstack.git
cd meublog-fullstack
```

### Passo 2: Configurar e Executar o Backend

```bash
# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install

# Iniciar o servidor
npm start
```

O backend estará rodando em: **http://localhost:3000**

Para modo desenvolvimento com auto-reload:
```bash
npm run dev
```

### Passo 3: Configurar e Executar o Frontend

Em outro terminal:

```bash
# Entrar na pasta do frontend (a partir da raiz do projeto)
cd frontend

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em: **http://localhost:5173**

### Passo 4: Acessar a Aplicação

Abra seu navegador e acesse: **http://localhost:5173**

## 📚 Funcionalidades Implementadas

### Backend (API)
- ✅ **GET /postagens** - Lista todas as postagens
- ✅ **GET /postagens/:id** - Busca uma postagem específica
- ✅ **POST /postagens** - Cria uma nova postagem
- ✅ **PUT /postagens/:id** - Atualiza uma postagem existente
- ✅ **DELETE /postagens/:id** - Deleta uma postagem
- ✅ Validação de dados de entrada
- ✅ Tratamento de erros completo
- ✅ CORS configurado para integração com frontend

### Frontend (Interface)
- ✅ Página inicial com lista de todas as postagens
- ✅ Visualização completa de postagem individual
- ✅ Formulário de criação de nova postagem
- ✅ Formulário de edição de postagem existente
- ✅ Confirmação antes de deletar postagem
- ✅ Navegação entre páginas com React Router
- ✅ Feedback visual (loading, sucesso, erro)
- ✅ Design responsivo para dispositivos móveis
- ✅ Validação de formulários
- ✅ Tratamento de erros da API

## 📊 API Endpoints

### Listar Todas as Postagens
```http
GET http://localhost:3000/postagens
```

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "titulo": "Minha Primeira Postagem",
    "conteudo": "Este é o conteúdo da postagem...",
    "data_criacao": "2024-01-15 10:30:00"
  }
]
```

### Buscar Postagem Específica
```http
GET http://localhost:3000/postagens/:id
```

### Criar Nova Postagem
```http
POST http://localhost:3000/postagens
Content-Type: application/json

{
  "titulo": "Título da Postagem",
  "conteudo": "Conteúdo da postagem..."
}
```

### Atualizar Postagem
```http
PUT http://localhost:3000/postagens/:id
Content-Type: application/json

{
  "titulo": "Título Atualizado",
  "conteudo": "Conteúdo atualizado..."
}
```

### Deletar Postagem
```http
DELETE http://localhost:3000/postagens/:id
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: postagens

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Chave primária (auto-incremento) |
| titulo | TEXT | Título da postagem (obrigatório) |
| conteudo | TEXT | Conteúdo da postagem (obrigatório) |
| data_criacao | DATETIME | Data de criação (gerado automaticamente) |

O banco de dados SQLite é criado automaticamente no arquivo `backend/database.sqlite` quando o servidor é iniciado pela primeira vez.

## 🎨 Componentes Principais do Frontend

### Button
Botão reutilizável com variantes de estilo (primário, secundário, perigo).

### Card
Card para exibir conteúdo com visual consistente.

### Loading
Indicador de carregamento com animação.

### Modal
Modal para confirmações e diálogos importantes.

### FormularioPostagem
Formulário completo e validado para criar/editar postagens.

## 📖 Conceitos Importantes Demonstrados

### Backend
- **Padrão MVC**: Separação de responsabilidades (Model, Controller, Routes)
- **Promises e Async/Await**: Código assíncrono moderno
- **RESTful API**: Arquitetura de API bem estruturada
- **Tratamento de Erros**: Respostas HTTP apropriadas
- **Validação de Dados**: Verificação de dados antes de processar

### Frontend
- **Hooks do React**: useState, useEffect, useNavigate, useParams
- **TypeScript**: Tipagem estática para maior segurança
- **Componentização**: Componentes reutilizáveis e bem organizados
- **React Router**: Navegação SPA (Single Page Application)
- **Axios**: Requisições HTTP para o backend
- **CSS Modular**: Cada componente com seu próprio CSS

## 🎓 Dicas

### Para Começar
1. Estude primeiro o backend - entenda como a API funciona
2. Use ferramentas como Postman ou Insomnia para testar a API
3. Depois explore o frontend - veja como os componentes consomem a API
4. Modifique o código aos poucos e observe os resultados

### Exercícios Sugeridos
1. Adicione um campo "autor" nas postagens
2. Implemente um sistema de categorias
3. Adicione busca de postagens por título
4. Crie paginação para a lista de postagens

### Próximos Passos
1. Implementar upload de imagens
2. Adicionar modo escuro
3. Adicionar autenticação de usuários
4. Implementar página/sistema de favoritos
5. Criar sistema de comentários 

## 🐛 Solução de Problemas

### O backend não inicia
- Verifique se o Node.js está instalado: `node --version`
- Certifique-se de ter executado `npm install` na pasta backend
- Verifique se a porta 3000 não está em uso

### O frontend não se conecta ao backend
- Verifique se o backend está rodando em http://localhost:3000
- Confirme se o CORS está configurado corretamente
- Verifique a URL da API em `frontend/src/services/api.ts`

### Erro ao criar postagem
- Verifique se título e conteúdo não estão vazios
- Confirme se o backend está acessível
- Veja o console do navegador para mais detalhes

## 📝 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

---

**Desenvolvido com 💜 para fins educacionais**
