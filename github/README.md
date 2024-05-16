# Fluxo de Trabalho do GitHub Actions

![Toolbox Playground](../img/toolbox-playground.png)

## O que é o Fluxo de Trabalho do GitHub Actions

Um repositório com um exemplo de arquivo de fluxo de trabalho a ser usado no GitHub Actions.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) é um arquivo de configuração usado no GitHub Actions. Ele define o processo de integração contínua para um repositório no GitHub.

O GitHub Actions é uma ferramenta de integração e entrega contínua (CI/CD) fornecida pelo GitHub. Ele permite automatizar a compilação, teste e implantação de um aplicativo sempre que houver uma alteração no repositório.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) contém a definição de estágios e jobs que serão executados durante o processo de integração contínua. Cada estágio representa uma etapa do processo, como compilação, teste ou implantação, e cada job representa uma tarefa específica a ser executada dentro desse estágio.

No arquivo, você pode definir os jobs necessários para compilar o aplicativo, como instalar dependências, compilar o código-fonte e executar testes. Você também pode configurar a implantação do aplicativo em um ambiente de produção ou teste.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) é escrito em YAML, uma linguagem de marcação fácil de ler e escrever. Ele permite definir as etapas e tarefas de maneira clara e organizada.

Ao adicionar ou modificar o arquivo [.github/workflows/main.yml](.github/workflows/main.yml) em um repositório do GitHub, o GitHub Actions usará essa configuração para automatizar o processo de integração contínua, executando os jobs definidos no arquivo sempre que houver uma alteração no repositório. Isso ajuda a garantir que o código seja compilado e testado de forma consistente e confiável.

Vamos analisar cada linha de código no arquivo [.github/workflows/main.yml](.github/workflows/main.yml) fornecido e entender o que ela faz:

- `name`: O nome do fluxo de trabalho. Isso é exibido na interface do GitHub Actions.

- `on`: O evento que aciona o fluxo de trabalho. Neste caso, está definido como `push`, o que significa que o fluxo de trabalho será acionado sempre que houver um push no repositório.

- `jobs`: Cada job é definido como uma seção separada no arquivo YAML. Os jobs são executados em paralelo dentro de cada estágio.

- Job `build`: Este job é responsável por compilar o projeto. Ele usa o `ubuntu-latest` como ambiente virtual para executar os comandos.

    `runs-on`: O ambiente virtual no qual o job será executado. Neste caso, está definido como `ubuntu-latest`.

    Os comandos executados neste job são:

    `cd app`: Navegar para o diretório "app".
    `npm install`: Instalar as dependências do projeto usando o npm.

- Job `test`: Este job é responsável por executar os testes do projeto. Semelhante ao job `build`, ele usa o `ubuntu-latest` como ambiente virtual.

    `runs-on`: O ambiente virtual no qual o job será executado. Neste caso, está definido como `ubuntu-latest`.

    Os comandos executados neste job são:

    `cd app`: Navegar para o diretório "app".
    `npm test`: Executar os testes do projeto usando o npm.

Essas são as explicações para cada linha do código YAML fornecido. Cada linha desempenha um papel específico na definição do processo de integração contínua e na execução dos jobs necessários para compilar e testar o aplicativo.
