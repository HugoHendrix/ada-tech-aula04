# MotorHub
## Loja de carros esportivos
Bem-vindo ao repositório MotorHub! Este é o lugar onde armazenamos o código-fonte e a documentação relacionados ao nosso emocionante projeto de carros esportivos de luxo. 

## Aula 4 da Formação Vem Ser Tech

Este repositório faz parte da Aula 4 da Formação Vem Ser Tech da Ada Tech em parceria com o iFood. Aqui, você encontrará os recursos e informações relevantes para o desenvolvimento do projeto relacionado a esta aula.



## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cinza01       | ![#404258](https://via.placeholder.com/10/404258?text=+) #404258 |
| Cinza02       | ![#474e68](https://via.placeholder.com/10/474e68?text=+) #474E86 |
| Cinza03       | ![#00b48a](https://via.placeholder.com/10/50577A?text=+) #50577A |
| Cinza04       | ![#6B728E](https://via.placeholder.com/10/6b728e?text=+) #6B728E |




# **Classes do Bootstrap no `<body>` e no `header`:**

### `container-fluid`

Assim como no **`<body>`**, essa classe cria um contêiner de largura total dentro do elemento **`<header>`**. Ele é usado para garantir que o conteúdo do cabeçalho se ajuste à largura da tela.

**Classes do Bootstrap no `<header>`:**

- **`container-fluid`**
    - `container-fluid`Essa classe é aplicada ao elemento **`<body>`** para criar um contêiner de largura total. Ela faz com que o conteúdo dentro do contêiner ocupe toda a largura disponível da tela. Em outras palavras, o conteúdo se estende até as bordas da janela do navegador.
- **`row`**
    - `row`A classe **`row`** é usada para criar uma linha dentro do contêiner. As colunas (elementos com classe **`col-*`**) devem ser colocadas dentro de uma linha para formar um sistema de grade, onde os elementos podem ser organizados em colunas alinhadas verticalmente.
- **`align-items-center`**
    - `align-items-center`Essa classe alinha verticalmente os elementos dentro da linha. No contexto do **`<header>`**, isso é usado para centralizar verticalmente os elementos, como o logotipo e os botões de navegação.
- **`col-md-4`**
- **`col-md-8`**
    
    ### `col-md-4` e `col-md-8`
    
    **`col-md-4`** e **`col-md-8`**: Essas classes definem o layout da grade de colunas dentro da linha. No caso, a classe **`col-md-4`** define que a primeira coluna ocupará 4 das 12 colunas disponíveis em dispositivos de tamanho médio (md), enquanto a classe **`col-md-8`** define que a segunda coluna ocupará 8 das 12 colunas. Isso cria uma estrutura de 4 colunas de largura e 8 colunas de largura no **`<header>`**. As classes **`col-*`** são usadas para criar layouts responsivos, onde o número de colunas pode mudar dependendo do tamanho da tela.
    
- **`btn`**
- **`btn-primary`**
    
    ### `btn` e`btn-primary`
    
    **`btn`** e **`btn-primary`**: Essas classes do Bootstrap são usadas para estilizar os links como botões. **`btn`** aplica estilos de botão genéricos e **`btn-primary`** define a cor de fundo do botão como primária (tipicamente, azul) para indicar um botão de ação principal.
    
- **`mr-2`**
    
    ### `mr-2`
    
    Esta classe aplica uma margem à direita (espaço em branco) de tamanho médio (2 unidades) ao elemento. No contexto dos botões de navegação, isso cria um espaço em branco de tamanho médio entre os botões "Sobre" e "Carros Disponíveis" para separá-los visualmente.
    

---

# **Classes do Bootstrap no `<main>`:**

- `container-fluid`
    - `container-fluid`: Esta classe é aplicada ao elemento `<main>`. Assim como no `<body>` e no `<header>`, o `container-fluid` cria um contêiner de largura total dentro do `<main>`. Ele é usado para garantir que o conteúdo dentro dele ocupe toda a largura disponível da tela.
- `row`
    - `row`: A classe `row` é usada dentro do contêiner para criar uma nova linha. As colunas (elementos com classes `col-*`) são geralmente colocadas dentro das linhas para criar um sistema de grade. Isso permite organizar o conteúdo em colunas alinhadas verticalmente.
- `col-md-3`
- `col-md-9`
    - `col-md-3` e `col-md-9`: Essas classes definem a estrutura de colunas dentro da linha. No caso, `col-md-3` define que a primeira coluna ocupará 3 das 12 colunas disponíveis em dispositivos de tamanho médio (md), enquanto `col-md-9` define que a segunda coluna ocupará 9 das 12 colunas. Isso cria uma estrutura de 3 colunas de largura e 9 colunas de largura dentro da linha. Essas classes são parte do sistema de grade do Bootstrap e são usadas para criar layouts responsivos.
- `text-center`
    - `text-center`: A classe `text-center` é aplicada ao elemento `<section>` com a classe `saudacao`. Ela centraliza o texto horizontalmente dentro desse elemento. Isso significa que o texto dentro dessa seção será centralizado na página.
- `m-1`
- `mt-5`
    - `m-1` e `mt-5`: A classe `m-1` aplica uma margem de tamanho pequeno (1 unidade) em todos os lados do elemento. No contexto do código, ela é usada na seção onde se encontra o carrossel. A classe `mt-5` aplica uma margem superior de tamanho grande (5 unidades) ao elemento. Isso cria um espaço em branco considerável entre as seções.
- `container`
    - `container`: Essa classe é aplicada ao elemento `<div>` após o carrossel. Ela cria um novo contêiner de largura fixa. Ao contrário de `container-fluid`, que ocupa toda a largura da tela, `container` cria um contêiner com largura fixa, garantindo que o conteúdo dentro dele seja apresentado em uma largura definida, centralizada na tela.
- `rounded`
    - `rounded`: A classe `rounded` é usada na última seção e é aplicada ao elemento `<div>`. Ela arredonda as bordas do elemento, dando a ele cantos arredondados. Isso é frequentemente usado para criar elementos com cantos suaves e arredondados em vez de cantos afiados.

---

Essas classes do Bootstrap são fundamentais para criar layouts responsivos, centralizar conteúdo horizontal e verticalmente, aplicar margens e criar elementos com cantos arredondados. Elas desempenham um papel crucial na organização e estilização do conteúdo da página.

---

---

---

# **Classes do Bootstrap no Carrossel (`#meuCarrossel`)**:

- `carousel`
    - `carousel`: Esta classe é aplicada ao elemento `<div>` que envolve todo o carrossel. Ela define o carrossel em si e fornece a estrutura básica para a exibição de imagens ou conteúdo em um formato de carrossel.
- `carousel-indicators`
    - **`carousel-indicators`**: Esta classe é aplicada a uma lista ordenada (**`<ol>`**) dentro do carrossel. Ela é usada para criar indicadores (pontos) que representam cada item no carrossel. Os indicadores permitem aos usuários navegar entre os diferentes itens do carrossel.
- `carousel-inner`
    - **`carousel-inner`**: Esta classe é aplicada a um elemento **`<div>`** que envolve os itens do carrossel. É responsável por definir a área onde os itens do carrossel são exibidos.
- `carousel-item`
    - **`carousel-item`**: Esta classe é aplicada a cada item individual dentro do carrossel. Cada item corresponde a um slide no carrossel e pode conter imagens, texto, vídeos ou qualquer outro conteúdo que você deseja exibir no carrossel. A classe **`carousel-item`** é usada para estilizar e estruturar cada slide.
- `carousel-control-prev`
- `carousel-control-next`
    - `carousel-control-prev` e `carousel-control-next`: Essas classes são aplicadas aos elementos que representam os controles de navegação do carrossel. `carousel-control-prev` é usado para o controle de navegação anterior (seta para a esquerda), e `carousel-control-next` é usado para o controle de navegação seguinte (seta para a direita). Eles são geralmente botões que os usuários podem clicar para navegar manualmente entre os slides do carrossel.

Essas classes são parte da estrutura padrão de um carrossel Bootstrap e são usadas para criar um componente de carrossel interativo e responsivo em seu site. O carrossel é uma maneira eficaz de exibir várias imagens ou informações de forma atraente e interativa.

---

---

# **Classes do Bootstrap n review do video**:

- `container-fluid`
    - `container-fluid`: Essa classe é aplicada ao elemento `<section>` que envolve o primeiro review. Ela cria um contêiner de largura total, fazendo com que o conteúdo dentro dele ocupe toda a largura disponível da tela, similar ao uso em outros contêineres.
- `custom-container`
    - `custom-container`: Esta classe é aplicada a um elemento `<div>` dentro do contêiner de review. Ela é usada para criar um estilo de contêiner personalizado, diferente dos contêineres padrão do Bootstrap. Pode ser usada para personalizar o estilo do contêiner de acordo com as necessidades do design.
- `m-3`
    - `m-3`: A classe `m-3` é aplicada ao elemento que contém o título do review. Ela aplica uma margem de tamanho médio (3 unidades) em todos os lados do elemento. Isso cria um espaço em branco entre o texto do título e as bordas do contêiner.
- `titulo-destaque`
    - `titulo-destaque`: A classe `titulo-destaque` é aplicada ao elemento de título do review. Ela estiliza o texto do título, geralmente aplicando cores, tamanho de fonte ou outras propriedades visuais para destacar o título e chamar a atenção do leitor. Essa classe é provavelmente usada para dar destaque ao título do review.

---

---

# **Classes do Bootstrap no formulário de contato**:

- `container-fluid`
    - `container-fluid`: Essa classe é aplicada ao elemento `<section>` que envolve o formulário de contato. Semelhante ao seu uso anterior, ela cria um contêiner de largura total, garantindo que o conteúdo dentro dele ocupe toda a largura disponível da tela.
- `custom-container`
    - `custom-container`: A classe `custom-container` é aplicada a um elemento `<div>` dentro do contêiner do formulário de contato. Ela é usada para criar um estilo personalizado para esse contêiner, permitindo a customização do estilo do contêiner de acordo com o design específico do formulário.
- `mb-3`
    - `mb-3`: A classe `mb-3` é aplicada a vários elementos no formulário, incluindo os rótulos (labels) e os campos de entrada (input). Ela aplica uma margem na parte inferior (espaço em branco) de tamanho médio (3 unidades) entre os elementos adjacentes. Isso cria espaço entre os campos do formulário para melhorar a legibilidade e a estética.
- `form-label`
    - `form-label`: A classe `form-label` é aplicada aos rótulos (labels) do formulário. Ela estiliza os rótulos, garantindo que fiquem alinhados adequadamente com os campos de entrada correspondentes. Além disso, ela geralmente aplica estilos para garantir uma boa legibilidade.
- `form-control`
    - `form-control`: A classe `form-control` é aplicada aos campos de entrada (input) no formulário. Ela estiliza os campos de entrada, tornando-os mais atraentes e consistentes com o estilo do Bootstrap. Além disso, ela define uma largura padrão para os campos de entrada, garantindo uma apresentação uniforme.
- `invalid-feedback`
    - `invalid-feedback`: Esta classe é aplicada a elementos que exibem mensagens de feedback quando um campo de entrada não atende aos critérios de validação. Ela estiliza a mensagem de feedback, tornando-a visível para o usuário e fornecendo informações sobre como corrigir um campo inválido.
- `btn`
- `btn-primary`
    - `btn` e `btn-primary`: As classes `btn` e `btn-primary` são aplicadas ao botão de envio no formulário de contato. `btn` estiliza o botão como um botão de ação, enquanto `btn-primary` define a cor de fundo do botão como primária (tipicamente, azul) para indicar que é o botão de envio principal do formulário.

# **Classes do Bootstrap no `<footer>`:**

- `bg-dark`
    - `bg-dark`: A classe `bg-dark` é aplicada ao elemento `<footer>`. Ela define o fundo do rodapé com uma cor escura (provavelmente preto ou outra cor escura). Isso ajuda a criar um contraste visual com o conteúdo do rodapé, geralmente exibido em cores claras, tornando o texto mais legível.
- `text-white`
    - `text-white`: A classe `text-white` é aplicada ao elemento `<footer>`. Ela define a cor do texto dentro do rodapé como branco. Isso é usado em conjunto com `bg-dark` para garantir que o texto seja claramente visível sobre o fundo escuro.
- `py-4`
    - `py-4`: A classe `py-4` é aplicada a um elemento dentro do rodapé, especificamente para fornecer preenchimento (espaço em branco) na parte superior e inferior (py significa padding vertical) do elemento. O valor "4" indica o tamanho do preenchimento, que pode ser personalizado.
- `container`
    - `container`: Assim como nas seções anteriores, a classe `container` é aplicada a um elemento dentro do rodapé. Isso cria um contêiner de largura fixa, garantindo que o conteúdo dentro dele seja apresentado em uma largura específica e centralizada na tela.
- `col-md-4`
    - `col-md-4`: A classe `col-md-4` é aplicada a um elemento dentro do rodapé. Ela define que esse elemento ocupará 4 das 12 colunas disponíveis em dispositivos de tamanho médio (md), criando um layout responsivo.
- `list-unstyled`
    - `list-unstyled`: A classe `list-unstyled` é aplicada a uma lista não ordenada (`<ul>`) dentro do rodapé. Ela remove os estilos de lista padrão, como marcadores, para criar uma lista sem estilos, que é comumente usada para criar links de navegação no rodapé.
- `social-icons`
    - `social-icons`: A classe `social-icons` é aplicada a um elemento dentro da lista de ícones de rede social no rodapé. Ela pode ser usada para estilizar os ícones das redes sociais, como Facebook, Twitter, Instagram, etc.
- `fab`
- `fas`
    - `fab` e `fas`: Essas classes são aplicadas aos ícones de redes sociais, indicando a família de ícones Font Awesome. `fab` é usada para ícones de marcas (por exemplo, ícones do Facebook, Twitter) e `fas` é usada para ícones de estilo sólido (por exemplo, ícones de envelope de e-mail, telefone).

---
