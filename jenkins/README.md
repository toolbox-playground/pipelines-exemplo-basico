# Jenkins

O Jenkins é um popular servidor de automação de código aberto amplamente utilizado para pipelines de integração contínua e entrega contínua (CI/CD). Ele fornece uma plataforma poderosa e flexível para automatizar processos de desenvolvimento de software.

Uma das principais características do Jenkins é sua integração perfeita com o Docker. O Docker é uma plataforma de containerização que permite empacotar aplicativos e suas dependências em containers leves e portáteis. Ao combinar o Jenkins com o Docker, você pode facilmente criar e gerenciar ambientes de compilação isolados, garantindo compilações consistentes e reproduzíveis em diferentes máquinas.

Usar o Jenkins com o Docker oferece várias vantagens. Em primeiro lugar, permite provisionar e gerenciar facilmente agentes de compilação como containers Docker, fornecendo uma maneira escalável e eficiente de executar seus pipelines de CI/CD. Você pode criar vários containers com diferentes configurações, permitindo a execução paralela de compilações e testes.

Além disso, o Docker fornece um ambiente consistente para suas compilações, eliminando o problema de "funciona na minha máquina". Você pode definir uma imagem Docker com todas as ferramentas e dependências necessárias para o seu projeto, garantindo que cada compilação seja executada no mesmo ambiente, independentemente da máquina hospedeira.

O Jenkins também oferece plugins que aprimoram sua integração com o Docker. Por exemplo, o plugin Docker Pipeline permite definir seus pipelines de CI/CD usando um Jenkinsfile, que pode incluir etapas específicas do Docker, como construir e enviar imagens Docker, executar containers e executar comandos dentro dos containers.

Em resumo, o Jenkins e o Docker formam uma combinação poderosa para automatizar processos de desenvolvimento de software. Ao aproveitar as capacidades de containerização do Docker, você pode obter compilações consistentes, utilização eficiente de recursos e pipelines de CI/CD escaláveis.

Neste repositório será utlizado a imagem docker do jenkins [jenkins/jenkins:lts-jdk17](https://hub.docker.com/r/jenkins/jenkins/)

## Pré-requisitos

1. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixar e instalar o Docker a partir do site oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

2. Certifique-se de ter o Git instalado em sua máquina. Você pode baixar e instalar o Git a partir do site oficial: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

3. Crie uma conta no Docker Hub, [https://hub.docker.com/signup/](https://hub.docker.com/signup/), e crie um repositório.


4. Faça um fork do repositório [ https://github.com/toolbox-playground/pipelines-jenkins-exemplo-basico]( https://github.com/toolbox-playground/pipelines-jenkins-exemplo-basico). Siga os passos abaixo para fazer um fork:

a. Acesse o repositório [https://github.com/toolbox-playground/pipelines-jenkins-exemplo-basico](https://github.com/toolbox-playground/pipelines-jenkins-exemplo-basico).

b. No canto superior direito da página, clique no botão "Fork".

c. Isso criará uma cópia do repositório em sua conta do GitHub.

5. Depois de ter feito o fork, você pode clonar o repositório para a sua máquina local com o seguinte comando:

```bash
git clone https://github.com/seu-usuario/pipelines-jenkins-exemplo-basico
```
Lembre-se de substituir `seu-usuario` pelo seu usuário do GitHub.

6. Acesse o diretório que você acabou de clonar: `pipelines-jenkins-exemplo-basico`.

7. Com sua IDE de preferência, faça as seguintes alterações:

Navegue até pasta `dotnet`, abra o arquivo [Jenkinsfile](./dotnet/Jenkinsfile) e altere os valores das seguintes variáveis conforme criado no Docker Hub:

`DOCKER_NAMESPACE`: Namespace criado no Docker Hub.

`DOCKER_REPOSITORY`: Nome do repositório criado no Docker Hub.

Obs.: Não altere o DOCKER_TAG e o DOCKER_CREDS.

8. Após alterar, salve o arquivo e faça o commit e o push para o seu repositório com os seguintes comandos:

```bash
git commit -m "Edit Jenkinsfile"
git push
```
## Iniciando o Jenkins

1. Dentro do diretório `pipelines-jenkins-exemplo-basico` construa a imagem Docker com o seguinte comando:

```bash
docker build -t jenkins:local -f DockerfileJenkins
```
Obs.: Certifique-se que seu Docker está rodando.

2. Execute o contêiner Docker com o seguinte comando (Linux e Mac):
```bash
docker run --name jenkins --rm -p 8080:8080 -p 50000:50000 
--volume jenkins-data:/var/jenkins_home 
--volume /var/run/docker.sock:/var/run/docker.sock 
--env JENKINS_ADMIN_ID=admin --env JENKINS_ADMIN_PASSWORD=password 
jenkins:local
```

Este trecho `— volume /var/run/docker.sock:/var/run/docker.sock` do comando acima monta o socket do Docker da máquina host no contêiner para permitir que o contêiner use o Docker da máquina host.

Para máquinas que usam Windows, deve-se substituir esse trecho por `— volume //var/run/docker.sock:/var/run/docker.sock`. Conforme comando abaixo:

```bash
docker run  --name jenkins --rm -p 8080:8080 -p 50000:50000 
--volume jenkins-data:/var/jenkins_home 
--volume //var/run/docker.sock:/var/run/docker.sock 
--env JENKINS_ADMIN_ID=admin 
--env JENKINS_ADMIN_PASSWORD=password
jenkins:local
```

## Configurando uma Multibranch Pipeline

Para configurar uma Multibranch Pipeline no Jenkins e definir segredos para o usuário e senha do Docker e do GitHub, siga os passos abaixo:

1. Acesse o Jenkins em seu navegador, digitando o endereço `http://localhost:8080`.

2. Faça login com suas credenciais de administrador informado no `docker run`. No modelo acima são `admin` e `password`.

3. Clique em `Gerenciar Jenkins`.

4. Vá até Segurança e clique em `Credentials`.

5. Clique em `System`.

6. Clique em `Global credentials (unrestricted)`.

7. Clique em `Add Credentials`

a. Vamos adicionar as credenciais do GitHub:
- Em `Kind` selecione `Username with password` e preencha o `Username` com o seu usuário GitHub . Usaremos um token em `Password`, para criá-lo acesse [https://github.com/settings/tokens/new?scopes=repo,user](https://github.com/settings/tokens/new?scopes=repo,user).
- Na tela de criação do Token, em note coloque `Jenkins Token` e clique em `Generate token`.
- Copie o token gerado e coloque em `Password`
- Preencha o `ID` e `Description` com `toolboxgithub`.
- Clique em `Add`

b. Clique novamente em `Add Credentials`, vamos criar o token do Docker Hub:
- Em `Kind` selecione `Username with password` e preencha o `Username` com o seu usário do Docker Hub. Usaremos um token em `Password`. Para criar o token acesse [https://hub.docker.com/settings/security](https://hub.docker.com/settings/security) e clique em `New Access Token`.
- Preencha o `Access Token Description` com `Jenkins Token` e clique em `generate`.
- Copie o token gerado e coloque em `Password`
- Preencha o `ID` e `Description` com `toolboxdocker`.
- Clique em `Add`

8. Clique em `Painel de Controle` e depois clique em `Nova Tarefa` para criar um novo projeto.

9. Na página de criação do projeto, digite um nome para o projeto, neste exemplo foi utilizado `Pipeline Jenkins`, e selecione "Multibranch Pipeline" como o tipo de projeto.

10. Clique em `Tudo certo` para confirmar a criação do projeto.

11. Na página de configuração do projeto, vá até a seção `Branch Sources` e clique em `Add source` e depois em `GitHub`.

12. Em Credentials selecione `toolboxgithub`.

13. Em `Repository HTTPS URL`: coloque o endereço do respositório que você clonou, que deve ser algo assim: `https://github.com/seu-usuario/pipelines-jenkins-exemplo-basico`. Substitua seu-usuario pelo seu nome de usuário no GitHub.

14. Na seção `Build Configuration`, deixe o `Mode by Jenkinsfile` e no `Script Path` escreva `dotnet/Jenkinsfile`.

15. Clique em `Save`.

Agora que você configurou uma Multibranch Pipeline no Jenkins e definiu segredos para o usuário e senha do Docker Hub e do GitHub, na tela que irá aparecer, aguarde ate ser finalizada a pipeline, isso mesmo, a pipeline já foi disparada.

Após finalizar com sucesso, clique em `Histórico de Compilações`.

Clique no link `Pipeline Jenkins >> main` e você verá o que foi feito pela pipeline.

Como desafio, dentro do mesmo repositório tem uma pasta chamada nodejs que possui um aplicação simples em Node.js com os arquivos Dockerfile e Jenkinsfile, tente rodar essa pipeline no Jenkins.