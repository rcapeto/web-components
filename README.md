# Arquitetura Web Components 
Criação de uma POC para testar e experimentar uma arquitetura baseada em web-components, onde podemos trabalhar com diferentes frameworks e diferentes versões de bibliotecas em uma só aplicação.


## Arquitetura da aplicação

### Shell
- Tecnologia: Angular v.15;
- Importa todos os web-components.

### mfe-react
- Tecnologia: React v.18 com vite;
- Está sendo disponibilizado os web-components: `mfe-button` e `mfe-router`;
- `mfe-button`: Componente de botão;
- `mfe-router`: Uma micro-aplicação com rotas. 


### mfe-angular-1
- Tecnologia: Angular v.16
- Está sendo disponibilizado o web-component: `angular-card`;
- `angular-card`: Um card de erro.

### mfe-angular-2
- Tecnologia: Angular v.16
- Está sendo disponibilizado o web-component: `angular-router`;
- `angular-router`: Uma micro-aplicação com rotas.

## Como executar o projeto
1. Primeiramente instale todas as dependências de todos os projetos

_Lembre-se de navegar para cada pasta os comandos abaixo_

```bash
npm install
# or
yarn
```

2. Nas pastas dos mfe's execute o comando `preview` para ocorrer o build e disponibilizar o web-component

```bash
npm run preview
#or
yarn preview
```

3. Na pasta do shell `shell-angular` execute o projeto normalmente com:

```bash
npm start
# or
yarn start
```

Pronto! Seu projeto já está sendo executado [nesse endereço](http://localhost:4200).