# Pipeline GitLab

![Toolbox Playground](../img/toolbox-playground.png)

## O que é o Pipeline GitLab

Um repositório com exemplo de um arquivo pipeline para ser usado no GitLab Pipelines.

O arquivo [.gitlab-ci.yml](.gitlab-ci.yml) é um arquivo de configuração usado no GitLab CI/CD. Ele define o processo de integração contínua para um repositório no GitLab.

O GitLab CI/CD é uma ferramenta de integração contínua e entrega contínua (CI/CD) fornecida pelo GitLab. Ele permite automatizar a construção, teste e implantação de um aplicativo sempre que houver uma alteração no repositório.

O arquivo [.gitlab-ci.yml](.gitlab-ci.yml) contém a definição dos estágios e jobs que serão executados durante o processo de integração contínua. Cada estágio representa uma etapa do processo, como construção, teste ou implantação, e cada job representa uma tarefa específica a ser executada dentro desse estágio.

No arquivo, você pode definir os jobs necessários para construir o aplicativo, como a instalação de dependências, a compilação do código-fonte e a execução de testes. Também é possível configurar a implantação do aplicativo em um ambiente de produção ou de teste.

O arquivo [.gitlab-ci.yml](.gitlab-ci.yml) é escrito em YAML, uma linguagem de marcação que é fácil de ler e escrever. Ele permite que você defina as etapas e tarefas de forma clara e organizada.

Ao adicionar ou modificar o arquivo [.gitlab-ci.yml](.gitlab-ci.yml) em um repositório GitLab, o GitLab CI/CD usará essa configuração para automatizar o processo de integração contínua, executando os jobs definidos no arquivo sempre que houver uma alteração no repositório. Isso ajuda a garantir que o código seja construído e testado de forma consistente e confiável.

Vamos analisar cada linha do código do arquivo [.gitlab-ci.yml](.gitlab-ci.yml) fornecido e entender o que ela faz:

- `stages`: Os estágios são definidos na seção stages e determinam a ordem em que os jobs serão executados. Neste caso, temos dois estágios: build (construção) e test (teste).

- `default`: Esta é uma chave que define configurações padrão que serão aplicadas a todos os jobs no pipeline, a menos que sejam explicitamente substituídas.

- `image`: sta é uma subchave sob default: que define a imagem Docker a ser usada para os jobs. node:lts-alpine3.19 é a imagem Docker que estamos usando.

- `Jobs`: Cada job é definido como uma seção separada no arquivo YAML. Os jobs são executados em paralelo dentro de cada estágio.

- Job `build_job`: Este job é responsável pela construção do projeto. Ele usa a imagem node:lts-alpine3.19 como base para executar os comandos.

    `Cache`: O cache de dependências é configurado usando a chave node-modules, o que permite que as dependências sejam armazenadas em cache para evitar a reinstalação a cada execução. O caminho para o cache das dependências é definido como app/node_modules/.

    Os comandos executados neste job são:

    `cd app`: Navega para o diretório "app".
    `npm install`: Instala as dependências do projeto usando o npm.

- Job `test_job`: Este job é responsável pelos testes do projeto. Assim como o build_job, ele usa a imagem node:lts-alpine3.19 como base.

    `Cache`: O cache de dependências também é configurado usando a chave node-modules e o caminho app/node_modules/.

    Os comandos executados neste job são:

    `cd app`: Navega para o diretório "app".
    `npm test`: Executa os testes do projeto usando o npm.

Essas são as explicações para cada linha do código YAML fornecido. Cada linha desempenha um papel específico na definição do processo de integração contínua e na execução dos jobs necessários para construir e testar o aplicativo.
