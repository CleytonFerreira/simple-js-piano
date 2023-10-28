# Simple JS Piano
![Simple JS Piano](/src/share-img.png)

## Sobre o projeto
Projeto de piano virtual simples feito para o bootcamp [Potência Tech iFood - Desenvolvimento de Jogos](https://web.dio.me/track/potencia-tech-ifood-desenvolvimento-de-jogos?ref=CG&utm_source=ativos-90D&utm_medium=plataforma&utm_campaign=ifood-potencia-tech-2023&utm_term=banner-modal&utm_content=trilha-jogos-inscricoes-abertas), parceria da plataforma [iFood](https://www.ifood.com.br/) com a comunidade de aprendizado [DIO](https://web.dio.me).

## Aprendizados
- Criação de layout complexo com CSS;
- Manipulação do elemento HTML range, pouco utilizado em projetos mas que oferece muitas possibilidades interessantes;
- Através do CSS, customização da aparência do elemento HTML checkbox, deixando ele com a aparência de um toggle switch;
- Adição e remoção de classes dinamicamente;
- Reprodução de arquivos .wav por meio de event listeners do teclado.

**Diferenças em relação ao projeto original disponibilizado na plataforma:**

- No projeto original, duas ou mais teclas não podiam ser tocadas juntas, gerando um erro. Para resolver o problema é adicionado um objeto `Audio` na função `playTune`. Cada tecla pressionada cria um novo objeto, para que desta forma seja possível tocar acordes;
- Quando uma tecla era mantida pressionada o mesmo arquivo .wav era reproduzido várias vezes. Para resolver o problema foi criado um objeto `keysDown` que mantém um registro das teclas que ainda estão pressionadas, e o arquivo .wav é reproduzido uma única vez.

[Clique aqui](https://cleytonferreira.github.io/simple-js-piano/) para acessar o projeto.

## Considerações sobre o projeto
- Existem APIs de áudio que podem adicionar vários recursos a esta interface, como outros instrumentos e efeitos;
- Verificar uma solução para reproduzir os áudios de modo mais performático, carregando os arquivos rapidamente e respondendo ao toque das teclas de forma imediata;
- A [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) documentada na MDN dá a possibilidade de usarmos o aplicativo com controladores de jogos;
- No caso de uma solução em Node.js, a mesma lógica pode ser aplicada a um app de bateria onde podemos acessar pastas do sistema de arquivos com kits de bateria pré-definidos.