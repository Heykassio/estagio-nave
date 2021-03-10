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

substitua o *name* e *password* pelas credenciais de sua escolha. 

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

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Nave&uri=%7B%22_type%22%3A%22export%22%2C%22__export_format%22%3A4%2C%22__export_date%22%3A%222021-03-10T16%3A50%3A13.827Z%22%2C%22__export_source%22%3A%22insomnia.desktop.app%3Av2021.1.0%22%2C%22resources%22%3A%5B%7B%22_id%22%3A%22req_d1ae10be3bb9477f96d4f248fa33d292%22%2C%22parentId%22%3A%22fld_917c437f9830444696338a524d11af33%22%2C%22modified%22%3A1615389000080%2C%22created%22%3A1615386539533%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fproject-naver%22%2C%22name%22%3A%22store%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22projectId%5C%22%3A1000%2C%5Cn%5Ct%5C%22naverId%5C%22%3A100%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_3592676aa5bc49eaa7fb69e5fe37826b%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1615386539533%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_917c437f9830444696338a524d11af33%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615386530443%2C%22created%22%3A1615386530443%2C%22name%22%3A%22project_naver%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1615386530443%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22parentId%22%3Anull%2C%22modified%22%3A1615263762590%2C%22created%22%3A1615263762590%2C%22name%22%3A%22estagio%22%2C%22description%22%3A%22%22%2C%22scope%22%3A%22collection%22%2C%22_type%22%3A%22workspace%22%7D%2C%7B%22_id%22%3A%22req_36aa6d75c30241f59f8e46c55bee921d%22%2C%22parentId%22%3A%22fld_a1336dab41d146858130eb34d66832a2%22%2C%22modified%22%3A1615312106115%2C%22created%22%3A1615312059820%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fprojects%2F3%22%2C%22name%22%3A%22show%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1615312059820%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_a1336dab41d146858130eb34d66832a2%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615311521848%2C%22created%22%3A1615311521848%2C%22name%22%3A%22projects%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1615311521848%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22req_59b49f986f5b43dba11886abe81679e4%22%2C%22parentId%22%3A%22fld_a1336dab41d146858130eb34d66832a2%22%2C%22modified%22%3A1615387069399%2C%22created%22%3A1615311561826%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fprojects%22%2C%22name%22%3A%22store%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22name%5C%22%3A%5C%22Projeto%20realmente%20bom%5C%22%2C%5Cn%5Ct%5C%22navers%5C%22%3A%5B1%2C2%5D%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_cb1a6b633587486fa67110fc29ef7c9f%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1615311561826%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_6d8d01ee1cd447a4a56106240b1aa8da%22%2C%22parentId%22%3A%22fld_a1336dab41d146858130eb34d66832a2%22%2C%22modified%22%3A1615394868956%2C%22created%22%3A1615311529304%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fprojects%2F%22%2C%22name%22%3A%22index%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1615311529304%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_5f6dc74a69f24a9fae946538866aa3cb%22%2C%22parentId%22%3A%22fld_4f253b678fbe4f1c84024a7184fbbd9e%22%2C%22modified%22%3A1615386648631%2C%22created%22%3A1615311483500%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fnavers%2F1%22%2C%22name%22%3A%22show%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1615311483500%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_4f253b678fbe4f1c84024a7184fbbd9e%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615263775385%2C%22created%22%3A1615263762662%2C%22name%22%3A%22naver%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1614430326683%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22req_f1553219d8764b87a7082aeed6159c7a%22%2C%22parentId%22%3A%22fld_4f253b678fbe4f1c84024a7184fbbd9e%22%2C%22modified%22%3A1615386503546%2C%22created%22%3A1615263762665%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fnavers%2F%22%2C%22name%22%3A%22create%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22name%5C%22%3A%5C%22Kassio%20Costa%5C%22%2C%5Cn%5Ct%5C%22birthdate%5C%22%3A%5C%2205-02-1991%5C%22%2C%5Cn%5Ct%5C%22admission_date%5C%22%3A%5C%2205-02-2020%5C%22%2C%5Cn%5Ct%5C%22job_role%5C%22%3A%5C%22front-end%5C%22%2C%5Cn%5Ct%5C%22projects%5C%22%3A%5B1%2C2%2C%204%5D%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_9f086621d3f24731a07bec3456979e13%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1614430339794%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_b5727d0c2326476989b6e4f311a81d33%22%2C%22parentId%22%3A%22fld_4f253b678fbe4f1c84024a7184fbbd9e%22%2C%22modified%22%3A1615394892699%2C%22created%22%3A1615263762670%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fnavers%2F%22%2C%22name%22%3A%22index%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1614396241854%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22env_9f9f72a3c8e24c75842eec537f6dccbc%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615263762598%2C%22created%22%3A1615263762598%2C%22name%22%3A%22Base%20Environment%22%2C%22data%22%3A%7B%7D%2C%22dataPropertyOrder%22%3Anull%2C%22color%22%3Anull%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1614346943025%2C%22_type%22%3A%22environment%22%7D%2C%7B%22_id%22%3A%22jar_44a380941ff2455082f34f25e4cb5caf%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615263762610%2C%22created%22%3A1615263762610%2C%22name%22%3A%22Default%20Jar%22%2C%22cookies%22%3A%5B%7B%22key%22%3A%22token%22%2C%22value%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhleWthc3Npb0BsaXZlLmNvbSIsIm5vbWUiOiJLYXNzaW8iLCJpYXQiOjE2MTQ2OTEzOTgsImV4cCI6MTYxNDc3Nzc5OH0.y3lkMnLOQhQiznd5TiAESZCHZEPOqGW6RkzMreTTZ38%22%2C%22expires%22%3A%222021-03-03T13%3A23%3A18.000Z%22%2C%22domain%22%3A%22localhost%22%2C%22path%22%3A%22%2F%22%2C%22secure%22%3Atrue%2C%22httpOnly%22%3Atrue%2C%22extensions%22%3A%5B%22SameSite%3DNone%22%5D%2C%22hostOnly%22%3Atrue%2C%22creation%22%3A%222021-02-27T13%3A09%3A59.548Z%22%2C%22lastAccessed%22%3A%222021-03-02T13%3A23%3A18.342Z%22%2C%22id%22%3A%225989096714910076%22%7D%5D%2C%22_type%22%3A%22cookie_jar%22%7D%2C%7B%22_id%22%3A%22spc_9e0bf2b2988b4c12aabee3c1144f364f%22%2C%22parentId%22%3A%22wrk_cd0032fcd8f545f5902a4ff85c6fed98%22%2C%22modified%22%3A1615263762711%2C%22created%22%3A1615263762617%2C%22fileName%22%3A%22estagio%22%2C%22contents%22%3A%22%22%2C%22contentType%22%3A%22yaml%22%2C%22_type%22%3A%22api_spec%22%7D%5D%7D)

## Exercício de Banco de Dados

Resolução do bonus banco de dados [resultado](https://github.com/Heykassio/bonus-nave/blob/main/Bonus.txt);