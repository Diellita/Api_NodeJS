
# CRIANDO API NODE JS

Descrição: Nesse projeto construi uma conexão com banco de dados onde é possível:
1- Inserir novo cadastro
2- Atualizar cadastro existentente
3- Consultar cadastros
4- Excluir cadastros

# PRÉ-REQUISITOS:

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
1-[MongoDBCompass](https://www.mongodb.com/try/download/compass)
2-[Node.js](https://nodejs.org/en/download/)
3-[Postman](https://www.postman.com/downloads/)
4-[VSCode](https://code.visualstudio.com/download)

# PASSO A PASSO DE COMO CRIAR API NODE JS:

1- Crie uma pasta no seu computador com o nome do projeto
2- Acesse a pasta através do VS Code
3- Para criar o arquivo Packege, entre no terminal do VSCode e insira o comando: npm init
4- Para instalar o gerenciador de requisições rotas e URLs insira no terminal do VSCode o comando: npm install express
5- Crie um arquivo JS no projeto
6- Inclua no arquivo JS a dependencia do express e crie a porta de acesso (8080)
**O servidor inciará na porta:8080 - acesse <http://localhost:8080>** 
*** Comece a utilizar a porta via Postman para facitar o desenvolvimento ***
7- Para salvar as modificações do seu porojeto automaticamente insira no terminal do VSCode o comando: npm install -D nodemon 
8- Para iniciar o nodemon insira no terminal do VSCode o comando: nodemon nomeDoSeuArquivo.js
9- Para instalar a dependêcia do banco de dados, insira no terminal do VSCode o comando: npm install --save mongodb
* Para pausar ou reiniciar o terminal do VSCode tecle CTRL+C
10- Instale o tradutor de banco de dados para JS em seu projeto, para isso insira no terminal do VSCode o comando: npm install --save mongoose
11- Inclua uma dependêcia do moogoose em seu seu arquivo JS
12- Faça a conexão do banco de dados com sua pasta raiz (veja o exemplo abaixo):
------------------------------------------------------------------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/nomeDaPastaRaiz", {
    useMongoClient: true
})
------------------------------------------------------------------------------------------------------------------
13- Para iniciar ou atualizar a conexão com o banco de dados insira no terminal do VSCode o seguinte comando: node nomeDoArquivo.js
14- Agora crie as funcionalidades da sua API 

# FUNCIONALIDADES

PUT é utilizada para criar novos registros. 
GET é utilizado para consultar dados registrados.
POST é utilizado para atualizar registros.
DELETE é para deletar um registro ou mais. 

# ENDPOINTS

1- [PUT] http://localhost:8080/usuarios/inserir
2- [GET] http://localhost:8080/usuarios/consultar
3- [POST] http://localhost:8080/usuarios/atualizar
4- [DELETE] http://localhost:8080/usuarios/deletar


# PASSO A PASSO DE COMO UTILIZAR O API NODE JS:

1- Crie no Mongodb Compass uma Database com nome de: salestime
2- Crie no dentro da Database salestime uma Collection com nome de: usuarios
3- No terminal do VSCode insira CTRL+C para reiniciar a aplicação
4- Insira no terminal do VSCode: node servidor.js
5- No Postman via BODY e em fortmato JSON insira a porta: http://localhost:8080/usuarios/inserir
(para testar o PUT onde é possível cadastrar um novo usuário).
*** Os campos de cadastros e seus tipos são: ***

 nome: String
 nascimento:Date
 cpf: String
 telefone: String
 email:String

6- No Postman via BODY e em fortmato JSON insira a porta: http://localhost:8080/usuarios/consultar
(para testar o GET onde é possível consultar a lista de usuários cadastrados).
*** Para consultar a lista de usuários cadastrados basta inserir a porta e clicar no botão Send ***

7- No Postman via BODY e em fortmato JSON insira a porta: http://localhost:8080/usuarios/atualizar
(para testar o POST onde é possível atualizar um usuário). 
*** Para atualizar um usuário insira o ID do usuário e preencha todos os campos ***

 nome: String
 nascimento:Date
 cpf: String
 telefone: String
 email:String

8- No Postman via BODY e em fortmato JSON insira a porta: http://localhost:8080/usuarios/deletar
(para testar o DELETE onde é possível deletar um usuário).
*** Para excluir um usuário cadastrado insira o seu ID ***

#### OBSERVAÇÃO: TODAS AS REQUISIÇÕES VIA POSTMAN SERÃO NO BODY E EM FORMADO JSON ###

# AUTORA

* Dielle de Oliveira Ribeiro
* Email: prof.dielle@gmail.com
