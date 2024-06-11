# Desafio GitHub Actions

![Toolbox Playground](img/toolbox-playground.png)

## O que é o Desafio GitHub Actions

Este repositório tem por finalidade exemplificar o uso do GitHub Actions para automatizar o processo de build, testes, deploy na Cloud Run e análise de código utilizando o SonarCloud e o Snyk.

## GitHub Actions
O GitHub Actions é uma plataforma de automação que permite criar fluxos de trabalho personalizados para o seu repositório. Neste desafio, utilizamos o GitHub Actions para executar as seguintes etapas:

1. **Build**: O fluxo de trabalho inicia com a compilação do código-fonte do projeto.
2. **Testes**: Em seguida, são executados os testes automatizados para garantir a qualidade do código.
3. **SonarCloud**: Após os testes, o código é analisado pelo SonarCloud para identificar possíveis problemas de qualidade, vulnerabilidades e bugs.
4. **Snyk**: Além disso, o Snyk é utilizado para verificar a segurança das dependências do projeto e identificar possíveis vulnerabilidades.
5. **Deploy na Cloud Run**: Por fim, o fluxo de trabalho realiza o deploy do projeto na Cloud Run, uma plataforma de execução de contêineres gerenciada pelo Google Cloud.

## SonarCloud
O SonarCloud é uma plataforma de análise estática de código que fornece informações detalhadas sobre a qualidade do código, vulnerabilidades, bugs, code smells, cobertura de testes, entre outros. Para utilizar o SonarCloud, é necessário seguir os seguintes passos:

1. Criar uma conta no SonarCloud em [sonarcloud.io](https://sonarcloud.io/).
2. Criar um novo projeto e importar o repositório do GitHub.
3. Configurar o projeto, definindo permissões e opções de análise.
4. Gerar um token de análise para autenticar o scanner do SonarCloud.
5. Configurar o scanner SonarCloud na ferramenta de construção utilizada no projeto.
6. Executar a análise do SonarScanner como parte do processo de build.

## Snyk
O Snyk é uma ferramenta de segurança de código aberto que verifica as dependências do projeto em busca de vulnerabilidades e fornece recomendações para corrigi-las. Para utilizar o Snyk, siga os seguintes passos:

1. Criar uma conta no Snyk em [snyk.io](https://snyk.io/).
2. Gerar um token de autenticação no painel do Snyk.
3. Adicionar o token aos segredos do GitHub no repositório.
4. Configurar o Snyk no fluxo de trabalho do GitHub Actions para verificar as dependências do projeto.

## Action Secrets

As varáveis abaixo devem ser salvas como secrets no GitHub Actions

1. DOCKER_NAMESPACE: Namespace do seu repositório
2. DOCKER_PASSWORD: Access Tokens gerado no Docker Hub. Link de como fazer [Access Token](https://docs.docker.com/security/for-developers/access-tokens/)
3. DOCKER_REGISTRY: docker.io
4. DOCKER_REPOSITORY: Nome do seu repositório no Docker Hub
5. DOCKER_USERNAME: Usuário do Docker Hub
6. SERVICE_ACCOUNT: Conta de serviço do GCP utilizada pelo WIF
7. SNYK_TOKEN: Token de autenticação do SNYK
8. SONAR_ORG:  Nome da organização no SonarCloud
9. SONAR_PROJECT_KEY: Chave do projeto no SonarCloud
10. SONAR_PROJECT_NAME: Nome do projeto no SonarCloud
11. SONAR_TOKEN: Token de autenticação para o SonarCloud
12. WORKLOAD_IDENTIFIER_PROVIDER: URL do Pool do Identificador de Carga de Trabalho

E salvar DOCKER_REGISTRY: docker.io também como Repository Variables.

## Deploy na Cloud Run
A Cloud Run é uma plataforma de execução de contêineres gerenciada pelo Google Cloud. Para realizar o deploy na Cloud Run, é necessário seguir os seguintes passos:

1. Criar um Workload Identifier Federation para autenticar as ações do GitHub.
2. Configurar o Workload Identifier Federation no projeto do Google Cloud.
3. Adicionar o Workload Identifier Provider e o Service Account aos segredos do GitHub no repositório.
4. Utilizar a ação do GitHub Marketplace Action [Deploy Cloud Run](https://github.com/marketplace/actions/deploy-to-cloud-run) para realizar o deploy na Cloud Run.
5. Configurar as permissões de acesso na Cloud Run para permitir invocações não autenticadas.

Após realizar o deploy, é possível acessar a Cloud Run para verificar o serviço e configurar a autenticação, se necessário.


## Federação de Identificador de Carga de Trabalho (WIF Workload Identity Federation)

Foi utilizado neste exemplo o Workload Identity Federation (WIF), link para estudo [WIF](https://cloud.google.com/iam/docs/workload-identity-federation?hl=pt-br).

## Deploy na Cloud Run usando Workload Identifier Federation

Criando o Workload Identifier Federation. 
Fonte [Secure your use of third party tools with identity federation](https://cloud.google.com/blog/products/identity-security/secure-your-use-of-third-party-tools-with-identity-federation)

```bash
gcloud iam workload-identity-pools create github-toolbox-actions-pool \
--location="global" \
--description="The pool to authenticate GitHub actions." \
--display-name="GitHub Actions Pool"
```

Lembrar de substituir assertion.repository_owner para o seu.

```bash
gcloud iam workload-identity-pools providers create-oidc github-actions-oidc \
--workload-identity-pool="github-toolbox-actions-pool" \
--issuer-uri="https://token.actions.githubusercontent.com/" \
--attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner,attribute.branch=assertion.sub.extract('/heads/{branch}/')" \
--location=global \
--attribute-condition="assertion.repository_owner=='toolbox-playground'"
```

Lembrar de substituir a service-accounts para a sua chave de serviço, o principalSet para o seu provedor criado no GCP e nome do repositório que você quer autorizar.

```bash
gcloud iam service-accounts add-iam-policy-binding github-actions@toolbox-sandbox-388523.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
--member="principalSet://iam.googleapis.com/projects/794011605223/locations/global/workloadIdentityPools/github-toolbox-actions-pool/attribute.repository/toolbox-playground/pipelines-exemplo-basico"
```

### Acesso para usuários não autenticados

Após realizado o deploy:
1. Ir até [Cloud Run](https://console.cloud.google.com/run)
2. Clicar na cloud run `nodejs-toolbox-playground`
3. Clicar em `Segurança`
4. Em Autenticação, marca `Allow unauthenticated invocations` para permitir acesso a Cloud Run.

Uma recomendação do produto Cloud Run é que sistemas CI/CD não definam ou alterem as configurações para permitir invocações não autenticadas. Novas implantações são automaticamente serviços privados, enquanto a implantação de uma revisão de um serviço público (não autenticado) preservará a configuração IAM de público (não autenticado). Para mais informações, consulte [Controlando o acesso em um serviço individual](https://cloud.google.com/run/docs/securing/managing-access).