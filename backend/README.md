# Backend do Blog - API RESTful

Backend do projeto educacional de blog desenvolvido com Node.js, Express e SQLite.

## 🚀 Tecnologias

- **Node.js**: Runtime JavaScript
- **Express**: Framework web minimalista
- **SQLite3**: Banco de dados relacional leve
- **CORS**: Middleware para permitir requisições do frontend

## 📁 Estrutura de Pastas

```
backend/
├── src/
│   ├── config/
│   │   └── database.js       # Configuração do SQLite
│   ├── models/
│   │   └── Postagem.js       # Model de postagem
│   ├── controllers/
│   │   └── postagensController.js  # Lógica de negócio
│   └── routes/
│       └── postagens.js      # Definição das rotas
├── server.js                 # Arquivo principal
├── package.json              # Dependências do projeto
└── database.sqlite           # Banco de dados (criado automaticamente)
```

## 🔧 Como Executar

### 1. Instalar Dependências

```bash
cd backend
npm install
```

### 2. Iniciar o Servidor

```bash
npm start
```

O servidor iniciará na porta **3001**: `http://localhost:3001`

### Modo Desenvolvimento (com auto-reload)

```bash
npm run dev
```

## 📚 API Endpoints

### Listar Todas as Postagens
```
GET http://localhost:3001/postagens
```

**Resposta:**
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
```
GET http://localhost:3001/postagens/:id
```

### Criar Nova Postagem
```
POST http://localhost:3001/postagens
Content-Type: application/json

{
  "titulo": "Título da Postagem",
  "conteudo": "Conteúdo da postagem..."
}
```

### Atualizar Postagem
```
PUT http://localhost:3001/postagens/:id
Content-Type: application/json

{
  "titulo": "Título Atualizado",
  "conteudo": "Conteúdo atualizado..."
}
```

### Deletar Postagem
```
DELETE http://localhost:3001/postagens/:id
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: postagens

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Chave primária (auto-incremento) |
| titulo | TEXT | Título da postagem (obrigatório) |
| conteudo | TEXT | Conteúdo da postagem (obrigatório) |
| data_criacao | DATETIME | Data de criação (automático) |

## 📖 Conceitos Importantes

### MVC (Model-View-Controller)
Este projeto segue o padrão MVC adaptado para API:
- **Model** (src/models): Interage com o banco de dados
- **Controller** (src/controllers): Contém a lógica de negócio
- **Routes** (src/routes): Define os endpoints da API

### Promises e Async/Await
Todas as operações de banco de dados usam Promises para facilitar o código assíncrono.

### Tratamento de Erros
Cada endpoint possui tratamento de erros apropriado com códigos HTTP corretos:
- **200**: Sucesso
- **201**: Criado
- **400**: Requisição inválida
- **404**: Não encontrado
- **500**: Erro no servidor
