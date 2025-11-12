# Frontend do Blog - React + TypeScript

Frontend do projeto educacional de blog desenvolvido com React, Vite e TypeScript.

## 🚀 Tecnologias

- **React 19**: Biblioteca JavaScript para construir interfaces
- **TypeScript**: JavaScript com tipagem estática
- **Vite**: Build tool moderna e rápida
- **React Router**: Navegação entre páginas
- **CSS Puro**: Estilos sem frameworks externos

## 📁 Estrutura de Pastas

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   ├── Loading/
│   │   ├── Modal/
│   │   └── FormularioPostagem/
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/
│   │   ├── PostagemDetalhes/
│   │   ├── CriarPostagem/
│   │   └── EditarPostagem/
│   ├── services/            # Serviços e APIs
│   │   └── api.ts
│   ├── types.ts             # Tipos TypeScript
│   ├── App.tsx              # Componente principal com rotas
│   ├── App.css              # Estilos do App
│   ├── index.css            # Estilos globais
│   └── main.tsx             # Ponto de entrada
├── public/                  # Arquivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependências
├── tsconfig.json            # Configuração TypeScript
└── vite.config.ts           # Configuração Vite
```

## 🔧 Como Executar

### 1. Instalar Dependências

```bash
cd frontend
npm install
```

### 2. Configurar URL da API

A URL da API está definida em `src/services/api.ts`. Por padrão é `http://localhost:3001`.

### 3. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O frontend iniciará na porta **5173**: `http://localhost:5173`

### 4. Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📄 Páginas

### Home (/)
- Lista todas as postagens do blog
- Exibe resumo de cada postagem
- Botão para criar nova postagem
- Clique em um card para ver detalhes

### Detalhes da Postagem (/postagem/:id)
- Exibe postagem completa
- Botões para editar e deletar
- Modal de confirmação antes de deletar

### Nova Postagem (/nova)
- Formulário para criar postagem
- Validação de campos obrigatórios
- Feedback de sucesso/erro

### Editar Postagem (/editar/:id)
- Formulário pré-preenchido
- Validação de campos
- Feedback de sucesso/erro

## 🎨 Componentes Reutilizáveis

### Button
Botão com três variantes: primário, secundário e perigo.

```tsx
<Button onClick={handleClick} tipo="primario">
  Clique aqui
</Button>
```

### Card
Card para exibir conteúdo com visual consistente.

```tsx
<Card onClick={handleClick}>
  <h3>Título</h3>
  <p>Conteúdo</p>
</Card>
```

### Loading
Indicador de carregamento animado.

```tsx
<Loading mensagem="Carregando dados..." />
```

### Modal
Modal para confirmações e diálogos.

```tsx
<Modal
  titulo="Confirmar"
  mensagem="Tem certeza?"
  onConfirmar={handleConfirmar}
  onCancelar={handleCancelar}
/>
```

### FormularioPostagem
Formulário completo para criar/editar postagens.

```tsx
<FormularioPostagem
  tituloInicial="Título"
  conteudoInicial="Conteúdo"
  onSubmit={handleSubmit}
  textoBotao="Salvar"
  carregando={false}
/>
```

## 📖 Conceitos TypeScript

### Interfaces
O projeto usa interfaces para definir tipos de dados:

```typescript
interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  data_criacao: string;
}
```

### Props Tipadas
Todos os componentes têm props fortemente tipadas:

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  tipo?: 'primario' | 'secundario' | 'perigo';
}
```

## 🎯 Funcionalidades

- ✅ Listagem de postagens com paginação visual
- ✅ Visualização de postagem completa
- ✅ Criação de novas postagens
- ✅ Edição de postagens existentes
- ✅ Exclusão com confirmação
- ✅ Feedback visual (loading, erros, sucesso)
- ✅ Design responsivo para mobile
- ✅ Navegação com React Router
- ✅ Tratamento de erros da API
- ✅ Validação de formulários

## 📱 Responsividade

Todos os componentes são responsivos e se adaptam a diferentes tamanhos de tela:
- Desktop: Layout em grid com múltiplas colunas
- Tablet: Layout adaptado com menos colunas
- Mobile: Layout em coluna única

## 🔍 Dicas de Estudo

### Para Entender Hooks
- `useState`: Gerencia estado local dos componentes
- `useEffect`: Executa efeitos colaterais (carregar dados)
- `useNavigate`: Navega programaticamente entre rotas
- `useParams`: Acessa parâmetros da URL

### Para Entender TypeScript
- Veja os tipos em `src/types.ts`
- Note como as interfaces garantem type safety
- Observe o autocomplete no VSCode

### Para Entender CSS
- Cada componente tem seu próprio arquivo CSS
- Estilos seguem padrão BEM (Block Element Modifier)
- CSS Grid e Flexbox para layouts

## 🚦 Próximos Passos (Sugestões)

1. Adicionar sistema de categorias
2. Implementar busca de postagens
3. Adicionar paginação
4. Sistema de likes/curtidas
5. Comentários nas postagens
6. Upload de imagens
7. Editor de texto rico (WYSIWYG)
8. Modo escuro
