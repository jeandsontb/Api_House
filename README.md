<h4 align="center"> 
	🚧 API rest full para o sistema House 🚧
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=October&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

HOUSE - Essa é uma api para um sistema de reserva de aluguéis de imóveis, ele pode inserir um imóvel assim como também fazer as reservas.

## 🎨 BackEnd

Esta API está configurada para ser usada em qualquer aplicação

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [Yarn][yarn]
- [Vscode][vscode]

## 💡 Como executar o projeto

💡 Para que o backend execute é necessário verificar os pré-requisitos

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/jeandsontb/House

# Vá para a pasta da aplicação 
$ cd ApiHouse

# Instale as dependências
$ npm install ou yarn add

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333

```

```bash
  End Points 
  # Para criar um usuário - http://localhost:3333/sessions 
  $ Passa um json { "email": "xxxx@xxx.xxx" }
  
  # Para criar uma nova residência para alugar - http://localhost:3333/houses
  $ Passa um Multpart com os seguintes dados:
      - thumbnail           ( File - seleciona uma imagem )
      - description         ( texto - xxxxxxx )
      - price               ( numero - 000000 )
      - location            ( texto - xxxxxxx )
      - status              ( boolean - true ou false )
      
  # Para Atualizar ou editar uma postagem - http://localhost:3333/houses/_id - identificador da residencia cadastrada
  $ Passa um Multpart com os seguintes dados:
      - thumbnail           ( File - seleciona uma imagem )
      - description         ( texto - xxxxxxx )
      - price               ( numero - 000000 )
      - location            ( texto - xxxxxxx )
      - status              ( boolean - true ou false )
      
      no header tem que passar o identificador - user_id com o valor do id do usuário
      
  # Para listar todas as residencias disponíveis - http://localhost:3333/houses
  
  # Para deletar uma postagem - http://localhost:3333/houses
  $ Passa um json - { "house_id": "id da residencia" }
  
      no header tem que passar o identificador - user_id com o valor do id do usuário
      
  # Para listar o dahboard das residencias cadastradas pelo usuário - http://localhost:3333/dashboard
      
      no header tem que passar o identificador - user_id com o valor do id do usuário
      
  # Para criar uma reserva - http://localhost:3333/houses/id_da_residencia/reserve
  $ Passa um json com a data da reserva - { "date": "26 de dezembro de 2020" }
    
      no header tem que passar o identificador - user_id com o valor do id do usuário
    
  # Para listar as reservas - http://localhost:3333/reserves
  
      no header tem que passar o identificador - user_id com o valor do id do usuário
      
  # Para deletar uma reserva - http://localhost:3333/reserves/cancel
  $ Passa um json com o identificador da reserva a ser deletata - { "reserve_id": "5f8dc8dd63d45a2d24aca355" }
  
      no header tem que passar o identificador - user_id com o valor do id do usuário
  
```

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Jeandson Tenorio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/