# Portfólio Pessoal — Desenvolvimento de Sistemas

**Aluno:** Washington Luis Pereira

## Descrição do portfólio

Este projeto é um portfólio pessoal desenvolvido como atividade de evolução da Agenda 15 do curso Técnico em Desenvolvimento de Sistemas. O site apresenta o perfil do aluno, suas habilidades e tecnologias de interesse, projetos desenvolvidos e formas de contato.

O objetivo é demonstrar, de maneira visual e organizada, conhecimentos adquiridos durante a formação e apresentar exemplos práticos de desenvolvimento.

## Tecnologias utilizadas

- **HTML5:** estruturação do conteúdo da página.
- **CSS3:** identidade visual, responsividade, efeitos e animações.
- **Bootstrap 5.3.3:** organização do layout, sistema de grid, componentes e menu responsivo.
- **JavaScript:** animações, interações e comportamentos dinâmicos.
- **Devicon:** ícones das tecnologias.

## Link do site publicado

https://wlp-informatica.github.io/portfolio/

> O endereço acima corresponde ao endereço previsto para o repositório `portfolio`. Ele ficará acessível depois que o GitHub Pages estiver ativado e concluir a publicação.

## Funcionamento do projeto

O portfólio funciona como uma página única (*one-page*). O menu de navegação direciona o visitante às seções Perfil, Habilidades, Projetos e Contato por meio de links internos.

O Bootstrap é utilizado para organizar o conteúdo em colunas responsivas e para criar o menu adaptável a telas menores. O arquivo `css/style.css` define a aparência personalizada do site, incluindo cores, espaçamentos, tipografia, cartões e efeitos visuais. O arquivo `js/script.js` controla as animações e as interações da página.

A seção Projetos apresenta três trabalhos:

- **TERMOKILN:** projeto de monitoramento de temperatura com ESP32, comunicação MQTT e aplicação em Python.
- **WLP RAT:** aplicativo mobile para registro de atendimentos, com funcionamento offline, SQLite e sincronização.
- **Scanner de Rede:** ferramenta em Python para verificar dispositivos e portas em uma rede.

## Recurso novo adicionado

Foi adicionado um conjunto de **animações e efeitos interativos**, além da estrutura básica apresentada na aula:

1. animação de entrada suave para textos, cartões e seções durante a rolagem;
2. barras de habilidades que são preenchidas com animação quando a seção aparece;
3. efeito de elevação e destaque nos cartões de projetos ao passar o mouse;
4. botão flutuante para retornar ao topo da página.

## Como o recurso novo foi implementado

As animações de entrada utilizam a API `IntersectionObserver` do JavaScript. O observador verifica quando elementos com a classe `.reveal` entram na área visível da tela e adiciona a classe `.visible`. No CSS, as propriedades `opacity`, `transform` e `transition` produzem o efeito de surgimento suave.

As barras de habilidades começam com largura zero. Cada barra possui um atributo `data-progress`, que informa o percentual configurado. Quando a seção de habilidades aparece na tela, o JavaScript lê esse valor e altera a largura da barra. A propriedade `transition` no CSS anima o preenchimento.

O efeito dos cartões é implementado com a pseudoclasse `:hover`, utilizando `transform`, `box-shadow` e `transition` para elevar e destacar o cartão quando o ponteiro do mouse passa sobre ele.

O botão de retorno ao topo é controlado por JavaScript: ele aparece depois que o visitante rola a página e, ao ser clicado, executa `window.scrollTo` com comportamento de rolagem suave.

## Repositório GitHub

https://github.com/wlp-informatica/portfolio
