 # Pipeline Harness CI/CD

![Toolbox Playground](../img/toolbox-playground.png)

## O que é o Harness

O Harness é uma ferramenta de automação de pipelines de integração contínua (CI) e entrega contínua (CD) que permite automatizar o processo de construção, teste e implantação de um aplicativo. Ele fornece uma maneira fácil e eficiente de definir e executar pipelines de CI/CD para projetos Node.js.

O arquivo [pipeline-nodejs.yaml](pipeline-nodejs.yaml) contém a definição de um pipeline de integração contínua para um projeto Node.js. Ele define as configurações gerais do pipeline, como o nome, identificador, projeto ao qual pertence, organização, tags e propriedades adicionais. Além disso, o arquivo define as etapas do pipeline, cada uma com seu nome, identificador, descrição, tipo e especificações.

Cada etapa do pipeline pode ter várias configurações, como clonar o código-fonte, especificações da plataforma de execução, configurações de tempo de execução e configurações de execução da etapa. Dentro de cada etapa, é possível definir uma lista de passos a serem executados, cada um com seu tipo, nome, identificador e especificações.

No caso do arquivo fornecido, o pipeline possui uma etapa com um único passo do tipo "Run". Esse passo utiliza o shell "Sh" e executa o comando "cd app && npm install". Esse comando é responsável por navegar até o diretório "app" e executar o comando "npm install" para instalar as dependências do projeto.

O arquivo [pipeline-nodejs.yaml](pipeline-nodejs.yaml) é escrito em YAML, uma linguagem de marcação que é fácil de ler e escrever. Ele permite definir as configurações do pipeline de forma clara e organizada, facilitando a manutenção e compreensão do processo de CI/CD.

Ao adicionar ou modificar o arquivo [pipeline-nodejs.yaml](pipeline-nodejs.yaml) em um projeto, o Harness utilizará essa definição para automatizar o processo de integração contínua, executando as etapas e passos definidos no arquivo. Isso ajuda a garantir que o código seja construído, testado e implantado de forma consistente e confiável.

O arquivo [pipeline-nodejs.yaml](pipeline-nodejs.yaml) contém a definição de um pipeline de integração contínua (CI) para um projeto Node.js.

Vamos analisar cada linha do código do arquivo [pipeline-nodejs.yaml](pipeline-nodejs.yaml) fornecido e entender o que ela faz:

- `pipeline`: Define as configurações gerais do pipeline.
    - `name`: Nome do pipeline.
    - `identifier`: Identificador único do pipeline.
    - `projectIdentifier`: Identificador do projeto ao qual o pipeline pertence.
    - `orgIdentifier`: Identificador da organização.
    - `tags`: Tags associadas ao pipeline.
    - `properties`: Propriedades adicionais do pipeline.
        - `ci`: Configurações específicas para integração contínua.
            - `codebase`: Configurações do repositório de código.
                - `connectorRef`: Referência ao conector de integração (neste caso, GitHub).
                - `repoName`: Nome do repositório do código.
                - `build`: Configurações de compilação (a serem preenchidas).

- `stages`: Define as etapas do pipeline.
    - `stage`: Define uma etapa específica.
        - `name`: Nome da etapa.
        - `identifier`: Identificador único da etapa.
        - `description`: Descrição da etapa.
        - `type`: Tipo da etapa (neste caso, CI).
        - `spec`: Especificações da etapa.
            - `cloneCodebase`: Indica se o código deve ser clonado.
            - `platform`: Configurações da plataforma de execução.
                - `os`: Sistema operacional (Linux).
                - `arch`: Arquitetura (Amd64).
            - `runtime`: Configurações de tempo de execução.
                - `type`: Tipo de tempo de execução (Cloud).
                - `spec`: Especificações adicionais do tempo de execução.
            - `execution`: Configurações de execução da etapa.
                - `steps`: Lista de passos a serem executados.
                    - `step`: Define um passo específico.
                        - `type`: Tipo do passo (neste caso, Run).
                        - `name`: Nome do passo.
                        - `identifier`: Identificador único do passo.
                        - `spec`: Especificações do passo.
                            - `shell`: Shell a ser utilizado (Sh).
                            - `command`: Comando a ser executado ("cd app && npm install").
