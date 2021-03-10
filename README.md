# estagio-nave

# Desafio da vaga de estágio backend da Nave.rs.

## Resolução dos exercícios de lógica
[codesandbox](https://codesandbox.io/s/teste-estagio-template-forked-s5hn5)

## API Rest
Api desenvolvida para o desafio da vaga de estágio de backend da Nave.rs

### Tecnologias usadas:
* Node.JS
* Express
* Knex
* Objection.JS
* PostgreSQL

### Instruções para uso:

#### Banco de dados:
* Instalar o [postgreSQL](https://www.postgresql.org/download/).
* Criar um usuário:

    //substitua o name e password pelas credenciais de sua escolha.
    CREATE USER name WITH PASSWORD password

* Criar uma Database: 

    CREATE DATABASE nave

### Instalação das dependências:

* Caso não tenha, Instale o [Node.JS](https://nodejs.org/en/download/).
* Caso não tenha, instale o [Git](https://git-scm.com/downloads).
* Use o comando:
    git clone https://github.com/Heykassio/estagio-nave.git

* Navegue até a pasta 'estagio-nave'.
* Altere o arquivo config.js com suas credenciais do banco de dados:
    //host do postgresql
    export const dbHost = '';
    //porta do postgresql
    export const dbPort = '';
    //usuário criado anteriormente
    export const dbUser = '';
    //password criada anteriormente
    export const dbPassword = '';

* Use o comando:
    npm install

### Iniciando a API:

* Altere o arquivo config.js com suas credenciais do banco de dados:
    //host do postgresql
    export const dbHost = '';
    //porta do postgresql
    export const dbPort = '';
    //usuário criado anteriormente
    export const dbUser = '';
    //password criada anteriormente
    export const dbPassword = '';

* Após instalar as dependencias:
    npx knex migrate:latest
    npx knex seed:run

* Inicie a api:
    npm start


## ENDPOINTS da API:

### Navers:
GET `/navers` (lista todos os navers).
GET `/navers/:id` (lista um naver pelo id).
POST `/navers`   cadastra um naver, espera um JSON contendo:
    {
        "name": String, 
        "birthdate":DATE(YYYY-MM-DD),
        "admission_date":DATE(YYYY-MM-DD),
        "job_role": String,
        "projects: Array de Números //id de projetos já cadastrados.
    }
    //sendo projects não obrigatório

### Projects:
GET `/projects` (lista todos os projetos).
GET `/projects/:id` (lista um projeto pelo id).
POST `/projects` cadastra um projeto, espera um JSON contendo:
    {
        "name": String,
        "navers": Array de Números //id de navers já cadastrados.
    }
    //sendo navers não obrigatório

### Projects-navers:
POST `/project-naver` associa um naver já existente com um projeto já existente, espera um JSON contendo:
    {
        naverId: Integer, //id de naver já cadastrado.
        projectId: Integer //id de projeto já cadastrado.
    }

A api pode cadastrar navers sem estar relacionados com um projeto e também um projeto sem estar associado com navers. Eles podem ser associados depois usando o endpoint de projects-navers.

## Usando o Insomnia:
