# teste-pratico-lumi

# Projeto Completo

Este repositório contém um projeto com um backend desenvolvido em Node.js utilizando Prisma e um frontend em React utilizando Vite.

## Requisitos

- **Docker** e **Docker Compose** devem estar instalados.
- **Node.js** e **npm** devem estar instalados.

## Configuração do Backend

1. **Navegue até a pasta do backend**:

```bash
cd backend
```

2.	Crie o arquivo .env:
Crie o arquivo .env e preencha com as suas variáveis de ambiente.

```bash
DATABASE_URL="postgresql://docker:docker@localhost:5432/teste-lumi?schema=public"
```

3.	Rodando o Docker Compose:
Para iniciar o banco de dados, execute o comando a seguir na pasta do backend:

```bash
   docker compose up -d
```

4.	Realizando o Seed do Banco de Dados:
Após ter o banco de dados em execução, você pode popular suas tabelas com dados iniciais. Execute o seguinte comando:

```bash
  npx prisma db seed
```
Esse seed fará o processamento dos PDF's das faturas

6.	Inicie o servidor:
Para iniciar o backend, execute:

```bash
  npm install
  npm run dev
```
O servidor roda na porta 3333

## Configuração do Frontend

1.	Navegue até a pasta do frontend:
   ```bash
   cd backend
   ```

2.	Crie o arquivo .env:
Crie o arquivo .env e preencha com as suas variáveis de ambiente.

```bash
REACT_APP_API_URL=http://localhost:3333/
```

2.	Instale as dependências:
Execute o comando abaixo para instalar as dependências do Vite:

```bash
  npm install
```

3.	Inicie a aplicação:
Para iniciar o servidor de desenvolvimento do frontend, execute:

```bash
  npm run dev
```

A aplicação estará acessível em http://localhost:5173.
