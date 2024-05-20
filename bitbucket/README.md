# Pipeline BitBucket

![Toolbox Playground](../img/toolbox-playground.png)

## O que é o Pipeline BitBucket

Um repositório com exemplo de um arquivo pipeline para ser usado no BitBucket Pipelines.

O arquivo [bitbucket-pipelines.yml](bitbucket-pipelines.yml) é um arquivo de configuração usado no Bitbucket Pipelines. Ele define o processo de integração contínua para um repositório no Bitbucket.

O Bitbucket Pipelines é uma ferramenta de integração contínua e entrega contínua (CI/CD) fornecida pelo Bitbucket. Ele permite automatizar a construção, teste e implantação de um aplicativo sempre que houver uma alteração no repositório.

O arquivo [bitbucket-pipelines.yml](bitbucket-pipelines.yml) contém a definição dos estágios e passos que serão executados durante o processo de integração contínua. Cada estágio representa uma etapa do processo, como construção, teste ou implantação, e cada passo representa uma tarefa específica a ser executada dentro desse estágio.

No arquivo, você pode definir os passos necessários para construir o aplicativo, como a instalação de dependências, a compilação do código-fonte e a execução de testes. Também é possível configurar a implantação do aplicativo em um ambiente de produção ou de teste.

O arquivo [bitbucket-pipelines.yml](bitbucket-pipelines.yml) é escrito em YAML, uma linguagem de marcação que é fácil de ler e escrever. Ele permite que você defina as etapas e tarefas de forma clara e organizada.

Ao adicionar ou modificar o arquivo [bitbucket-pipelines.yml](bitbucket-pipelines.yml) em um repositório Bitbucket, o Bitbucket Pipelines usará essa configuração para automatizar o processo de integração contínua, executando os passos definidos no arquivo sempre que houver uma alteração no repositório. Isso ajuda a garantir que o código seja construído e testado de forma consistente e confiável.

Vamos analisar cada linha do código do arquivo [bitbucket-pipelines.yml](bitbucket-pipelines.yml) fornecido e entender o que ela faz:

- `pipelines`: Isso define a seção "pipelines" do arquivo YAML. As pipelines são usadas para definir os passos ou estágios de um processo de integração contínua.

- `default`: Isso define a seção "default" dentro da seção "pipelines". A seção "default" é usada para definir os passos padrão que serão executados quando nenhum outro estágio específico for especificado.

- `- step`: Isso define um passo dentro da seção "default". Um passo é uma tarefa específica que será executada durante o processo de integração contínua.

- `name: Build and Test`: Isso define o nome do passo como "Build and Test". É uma descrição opcional que ajuda a identificar o objetivo do passo.

- `image: node:lts-alpine3.19`: Isso define a imagem do Docker a ser usada para executar o passo. Neste caso, a imagem "node:lts-alpine3.19" será usada, que contém o Node.js instalado.

- `caches`: Isso define a seção "caches" dentro do passo. Os caches são usados para armazenar dados em cache entre as execuções dos passos, a fim de melhorar o desempenho.

    - `node`: Isso define um cache chamado "node". Neste caso, o cache "node" será usado para armazenar as dependências do Node.js, a fim de evitar a necessidade de instalá-las novamente a cada execução.

- `script`: Isso define a seção "script" dentro do passo. A seção "script" contém os comandos que serão executados durante o passo.

    - `apk update && apk add nodejs npm`: Essa linha atualiza o sistema operacional Alpine usando o comando `apk update` e, em seguida, instala o Node.js e o npm usando o comando `apk add nodejs npm`. O Alpine é uma distribuição Linux leve usada frequentemente em contêineres Docker.

    - `cd app`: Essa linha navega para o diretório "app". É comum ter um diretório específico para o código-fonte do aplicativo dentro do repositório.

    - `npm install`: Essa linha instala as dependências do projeto usando o npm. O npm é o gerenciador de pacotes padrão para o ecossistema do Node.js.

    - `npm test`: Essa linha executa os testes do projeto usando o npm. Os testes são uma parte importante do processo de desenvolvimento de software, pois ajudam a garantir que o código esteja funcionando corretamente.

O arquivo para pipeline deve ter o nome `bitbucket-pipelines.yml` obrigatoriamente, e estar na raiz do projeto.

Essas são as explicações para cada linha do código YAML fornecido. Cada linha desempenha um papel específico na definição do processo de integração contínua e na execução dos passos necessários para construir e testar o aplicativo.