# Desafio TechBiz Forense

Um projeto desenvolvido para análise investigativa de dados utilizando React e tecnologias modernas do ecossistema front-end.

## Instalação

1. Clone este repositório `https://github.com/lpcomp/desafio-techbiz-forense.git`.
2. Instale as dependências usando `npm install`.

OBS: Certifique-se de ter o Node.js instalado (recomenda-se a versão 16 ou superior) para rodar o projeto.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces.
- **Ant Design (antd)**: Biblioteca de componentes para design consistente.
- **Styled Components**: Estilização baseada em componentes.
- **Less**: Pré-processador CSS para maior flexibilidade no design.
- **Vite**: Ferramenta de build moderna e rápida.
- **TypeScript**: Superset de JavaScript com tipagem estática.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o servidor de desenvolvimento com hot-reload.

### `npm run build`

Compila o projeto para produção. Inclui a construção dos tipos TypeScript e do bundle otimizado.

### `npm run lint`

Executa o ESLint para análise de código e reporte de problemas.

### `npm run preview`

Visualiza o aplicativo em produção após a construção.

## Estrutura do Projeto

```plaintext
src/
├── assets/         # Pastas com imagens e svgs
├── components/     # Componentes reutilizáveis
├── models/         # Iterfaces e types
├── services/       # Comunicação com APIs e mocks relacionados
├── styles/         # Arquivos de estilização global
├── utils/          # Funções auxiliares
└── App.tsx         # Ponto de entrada da aplicação
```