# desafio-fullstack-api_ber_valim

<h1>API para cadastrar clientes e seus respectivos contatos</h1>

<h3>Descrição da aplicação:</h3>

<p>Esta API REST é responsável por cadastrar clientes que podem ter muitos contatos associados. Nesta API, utilizei o PRISMA como ORM para fazer a interação com o banco de dados, serialização de dados com ZOD, utilização de postgresql como banco de dados, json web token para gerar tokens criptografados, dotenv para proporcionar a segurança dos dados sensíveis,bcrypt js para executar o hash da senha e express-async-errors para personalizar os erros na aplicação. 
</p>

<h2>Endpoints da API:</h2>

| Método | Endpoint       | Descrição                                     | Autenticação e Autorização               |
| ------ | -------------- | --------------------------------------------- | ---------------------------------------- |
| GET    | /clientes      | Retorna todos os clientes cadastrados         | Apenas administradores                   |
| GET    | /clientes/{id} | Retorna um cliente específico pelo ID         | Admins e donos da conta                  |
| POST   | /clientes      | Cadastra um novo cliente                      | Qualquer cliente, token não é necessário |
| PATCH  | /clientes/{id} | Atualiza os dados de um cliente específico    | Admins e donos da conta                  |
| DELETE | /clientes/{id} | Exclui um cliente pelo ID                     | Admins e donos da conta                  |
| POST   | /login         | Gerar um token de autenticação                | qualquer cliente, token não é necessário |
| POST   | /contact       | Adiciona um novo contato para um cliente      | Donos da conta                           |
| GET    | /contact       | Lista todos os contatos                       | Apenas administradores                   |
| GET    | /contact /{id} | Listar os contatos que pertencem a um cliente | Admin e cliente dono da conta            |
| DELETE | /contact /{id} | Deletar o contato que pertence a u cliente    | Admin e cliente dono da conta            |
| PATCH  | /contact /{id} | Atualizar o contato que pertence a um cliente | Admin e cliente dono da conta            |

<h2>Passos para a API rodar:</h2>

<ul>

<li>
Clone o reposítório de forma local
</li>
<li>Utilize o comando npm install para instalar todas as dependências</li>
<li>Utilize o comando npx prisma migrate dev--nome migration para rodar as migrações </li>
<li>Para rodar o servidor, utilize o npm run dev</li>
<li>Para um melhor entendimento a respeito da API e de cada rota, acesse a documentação em "http://localhost:3333/api-documentation/".Para ter acesso a esta rota, é necessário rodar o servidor</li>

<ul>

<h2>Link do deploy:https://desafio-fullstack-api.onrender.com/api-documentation/<h2>
