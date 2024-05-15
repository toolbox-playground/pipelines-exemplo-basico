# pipeline-nodejs.yaml

Este arquivo contém a definição de um pipeline de integração contínua (CI) para um projeto Node.js.

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
