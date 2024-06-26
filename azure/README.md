# Fluxo de Trabalho do Azure DevOps

![Toolbox Playground](img/toolbox-playground.png)

## O que é o Fluxo de Trabalho do Azure DevOps

Um repositório com um exemplo de arquivo de fluxo de trabalho a ser usado no Azure DevOps.

O arquivo [azure-pipelines.yml](azure-pipelines.yml) é um arquivo de configuração usado no Azure DevOps. Ele define o processo de integração contínua para um repositório no GitHub.

O Azure DevOps é uma ferramenta de integração e entrega contínua (CI/CD) fornecida pelo GitHub. Ele permite automatizar a compilação, teste e implantação de um aplicativo sempre que houver uma alteração no repositório.

O arquivo [azure-pipelines.yml](azure-pipelines.yml) contém a definição de estágios e jobs que serão executados durante o processo de integração contínua. Cada estágio representa uma etapa do processo, como compilação, teste ou implantação, e cada job representa uma tarefa específica a ser executada dentro desse estágio.

No arquivo, você pode definir os jobs necessários para compilar o aplicativo, como instalar dependências, compilar o código-fonte e executar testes. Você também pode configurar a implantação do aplicativo em um ambiente de produção ou teste.

O arquivo [azure-pipelines.yml](azure-pipelines.yml) é escrito em YAML, uma linguagem de marcação fácil de ler e escrever. Ele permite definir as etapas e tarefas de maneira clara e organizada.

Ao adicionar ou modificar o arquivo [azure-pipelines.yml](azure-pipelines.yml) em um repositório do Azure DevOps, essa configuração será usada para automatizar o processo de integração contínua, executando os jobs definidos no arquivo sempre que houver uma alteração no repositório. Isso ajuda a garantir que o código seja compilado e testado de forma consistente e confiável.

O arquivo [azure-pipelines.yml](azure-pipelines.yml) define uma pipeline de CI/CD para um aplicativo .Net. A pipeline é acionada por commits nas branches master e releases/*, exceto quando o commit altera apenas o arquivo README.md.

Variáveis
As variáveis do pipeline são definidas no grupo `toolboxGCP`.

Estágios
A pipeline é dividida em vários estágios:

Push para o Docker Hub
Ele realiza o checkout do repositório, constrói uma imagem Docker com base no Dockerfile encontrado no repositório, faz login no Docker Hub e faz push da imagem para o Docker Hub. As tags da imagem Docker são definidas como o ID do build e latest.

Deploy
Este estágio depende do estágio de push para o Docker Hub. Ele instala o Python versão 3.x, instala as dependências do Google, autentica com o Google Cloud usando uma service key e faz o deploy da imagem Docker para o Cloud Run.

Observações
Certifique-se de substituir $(docker_namespace)/$(docker_repository) com o nome do seu repositório no Docker Hub e $(serviceAccountKey) e $(projectId) com suas respectivas chaves de serviço e ID do projeto do Google Cloud.

## Service Connection

No Azure DevOps, um service connection é uma configuração que permite que você se conecte a serviços externos, como repositórios de código, serviços de nuvem, bancos de dados e muito mais. Ele fornece as credenciais e as configurações necessárias para estabelecer essa conexão.

Um service connection é usado para permitir que o Azure DevOps acesse recursos externos durante a execução de pipelines, tarefas de build ou implantação de aplicativos. Ele pode ser usado para autenticar e autorizar o acesso a serviços externos, como o Docker Hub, Azure Container Registry, GitHub, Azure Key Vault, entre outros.

Ao criar um service connection, você precisa fornecer as informações de autenticação necessárias, como nome de usuário, senha, token de acesso ou chave de API, dependendo do serviço externo que está sendo conectado. Essas informações são armazenadas de forma segura no Azure DevOps e podem ser usadas por pipelines e tarefas para acessar os recursos externos.

O service connection permite que você centralize e gerencie as configurações de conexão em um único local, facilitando a reutilização e a manutenção. Além disso, ele oferece a capacidade de conceder permissões de acesso a pipelines específicas ou a todas as pipelines do projeto.

No exemplo de código fornecido, o tutorial mostra como criar um service connection para o Docker Hub no Azure DevOps. Ele orienta você a acessar as configurações de service connections, selecionar "Docker Registry" como o tipo de conexão, fornecer seu Docker ID e Docker Password (gerado como um Access Token no Docker Hub), e definir um nome para o service connection.

Criar o service connection para o Docker Hub

1. Clique em `Project settings`, que fica no canto inferior esquerdo da tela, depois clique em `Service connections`.
2. Clique em `New service connection`.
3. Selecionar `Docker Registry` e clicar em `Next`.
4. Preencher o `Docker ID` com o seu usuário do Docker Hub
5. Preencher o `Docker Password` com o Access Tokens gerado no Docker Hub. Link de como fazer [Access Token](https://docs.docker.com/security/for-developers/access-tokens/)
6. Preencher o `Service connection name` com `Docker Hub Toolbox`.
7. Marcar o checkbox `Grant access permission to all pipelines`.
8. Clicar em `Save`.

## Variáveis de Grupo
 
Os Grupos de Variáveis no Azure DevOps são uma maneira de definir e gerenciar conjuntos de variáveis que podem ser usados em vários pipelines ou etapas dentro de um pipeline.

Ao criar um Grupo de Variáveis, você pode armazenar e gerenciar informações sensíveis, como chaves de API, strings de conexão ou senhas, de maneira segura. Essas variáveis podem então ser referenciadas em seus arquivos de pipeline YAML, tornando mais fácil manter e atualizar suas configurações de pipeline.

Para criar um Grupo de Variáveis no Azure DevOps, você pode navegar até a seção Grupos de Variáveis nas configurações do seu projeto. A partir daí, você pode definir as variáveis e seus valores, e especificar o escopo do Grupo de Variáveis (por exemplo, nível de projeto ou específico do pipeline).

Uma vez criado, você pode referenciar as variáveis do Grupo de Variáveis em seus arquivos de pipeline YAML usando a palavra-chave variables. Isso permite que você centralize o gerenciamento de suas variáveis e garanta consistência em seus pipelines.

Lembre-se de garantir que qualquer informação sensível armazenada nos Grupos de Variáveis seja devidamente protegida e o acesso seja restrito a usuários autorizados.

As varáveis abaixo devem ser salvas nas Variable Groups com o Variable group name `ToolbocGCP`.

1. docker_namespace: Namespace do seu repositório no Docker Hub
2. docker_repository: Nome do seu repositório no Docker Hub
3. serviceAccountKey: chave da conta de serviço do GCP em Base64, pegar o resultado do comando abaixo e salvar. Obs.: O comando abaixo é do Linux.
```bash
    base64 -w 0 suachave.json
```
4. projectId: Id do Projeto no GCP

Ao criar as variáveis, aquelas que forem julgadas dados sensíveis devem ser salvar como `secret`. Para fazer isso, após digitar o value, clique no cadeado a frente.

## Criar a Pipeline

1. No menu lateral esquerdo, vá até `Pipelines` e clique em `Pipelines`.
2. Clique em `New pipeline`.
3. Selecione `Azure Repos Git`.
4. Selecione o seu repositório.
5. Clique em `Existing Azure Pipelines YAML file`.
6. Em `Select an existing YAML file`, selecione em `Branch` master e em `Path` /azure-pipelines.yml. e clique em `Continue`.
7. Depois clique em `Run`.