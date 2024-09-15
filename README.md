# Projeto: API CRUD de Usuários com Node.js, Express, MongoDB e Prisma

Este projeto é uma API RESTful para gerenciamento de usuários, utilizando Node.js, Express, Prisma ORM e MongoDB como banco de dados.

## Estrutura do Projeto

```
├── node_modules/
├── prisma/
│   └── schema.prisma
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
```

### Principais Dependências

- **Express**: Framework web para Node.js, utilizado para criar e gerenciar rotas HTTP.
- **Prisma**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados MongoDB.
- **Nodemon**: Ferramenta que reinicia automaticamente o servidor sempre que mudanças são feitas no código.

## Como Configurar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone <url_do_repositorio>
   cd routes-user
   ```

2. **Instale as dependências:**

   Utilize o npm para instalar as dependências listadas no `package.json` (observe as dependências comuns e de Desenvolvimento):

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados:**

   O arquivo `schema.prisma` contém a definição do banco de dados e deve estar configurado corretamente com o MongoDB. Certifique-se de que as variáveis de ambiente estejam configuradas no arquivo `.env`.

4. **Inicie o servidor:**

   Utilize o comando abaixo para rodar o servidor em ambiente de desenvolvimento, utilizando o `nodemon`:

   ```bash
   npm run dev
   ```

   O servidor estará rodando na porta `3000`.

## Endpoints da API

### GET `/usuarios`

Retorna todos os usuários cadastrados.

#### Exemplo de resposta:

```json
[
  {
    "id": "1",
    "email": "usuario1@example.com",
    "age": 25,
    "name": "Usuário 1"
  },
  {
    "id": "2",
    "email": "usuario2@example.com",
    "age": 30,
    "name": "Usuário 2"
  }
]
```

### POST `/usuarios`

Cria um novo usuário.

#### Corpo da requisição:

```json
{
  "email": "usuario3@example.com",
  "age": 28,
  "name": "Usuário 3"
}
```

#### Exemplo de resposta:

```json
{
  "id": "3",
  "email": "usuario3@example.com",
  "age": 28,
  "name": "Usuário 3"
}
```

### PUT `/usuarios/:id`

Atualiza um usuário existente com base no `id`.

#### Corpo da requisição:

```json
{
  "email": "usuario3modificado@example.com",
  "age": 29,
  "name": "Usuário 3 Modificado"
}
```

#### Exemplo de resposta:

```json
{
  "id": "3",
  "email": "usuario3modificado@example.com",
  "age": 29,
  "name": "Usuário 3 Modificado"
}
```

### DELETE `/usuarios/:id`

Deleta um usuário existente com base no `id`.

#### Exemplo de resposta:

```json
{
  "message": "Usuário deletado."
}
```

## Prisma - Modelo do Banco de Dados

O modelo do Prisma define a tabela de `User` no MongoDB. O arquivo `schema.prisma` é responsável por essa configuração:

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int
}
