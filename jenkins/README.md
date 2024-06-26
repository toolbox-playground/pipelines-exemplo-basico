# Jenkins

O Jenkins é um popular servidor de automação de código aberto amplamente utilizado para pipelines de integração contínua e entrega contínua (CI/CD). Ele fornece uma plataforma poderosa e flexível para automatizar processos de desenvolvimento de software.

Uma das principais características do Jenkins é sua integração perfeita com o Docker. O Docker é uma plataforma de containerização que permite empacotar aplicativos e suas dependências em containers leves e portáteis. Ao combinar o Jenkins com o Docker, você pode facilmente criar e gerenciar ambientes de compilação isolados, garantindo compilações consistentes e reproduzíveis em diferentes máquinas.

Usar o Jenkins com o Docker oferece várias vantagens. Em primeiro lugar, permite provisionar e gerenciar facilmente agentes de compilação como containers Docker, fornecendo uma maneira escalável e eficiente de executar seus pipelines de CI/CD. Você pode criar vários containers com diferentes configurações, permitindo a execução paralela de compilações e testes.

Além disso, o Docker fornece um ambiente consistente para suas compilações, eliminando o problema de "funciona na minha máquina". Você pode definir uma imagem Docker com todas as ferramentas e dependências necessárias para o seu projeto, garantindo que cada compilação seja executada no mesmo ambiente, independentemente da máquina hospedeira.

O Jenkins também oferece plugins que aprimoram sua integração com o Docker. Por exemplo, o plugin Docker Pipeline permite definir seus pipelines de CI/CD usando um Jenkinsfile, que pode incluir etapas específicas do Docker, como construir e enviar imagens Docker, executar containers e executar comandos dentro dos containers.

Em resumo, o Jenkins e o Docker formam uma combinação poderosa para automatizar processos de desenvolvimento de software. Ao aproveitar as capacidades de containerização do Docker, você pode obter compilações consistentes, utilização eficiente de recursos e pipelines de CI/CD escaláveis.

Neste repositório será utlizado a imagem docker do jenkins (jenkins/jenkins:lts-jdk17)[https://hub.docker.com/r/jenkins/jenkins/]

## Fazendo um Fork do Repositório

Para iniciar, você precisa fazer um fork do repositório [toolbox-playground/pipelines-exemplo-basico](https://github.com/toolbox-playground/pipelines-exemplo-basico). Siga os passos abaixo para fazer um fork:

1. Acesse o [repositório original](https://github.com/toolbox-playground/pipelines-exemplo-basico) que você deseja fazer um fork.
2. No canto superior direito da página, clique no botão "Fork".
3. Isso criará uma cópia do repositório em sua conta do GitHub.

Depois de ter feito o fork, você pode clonar o repositório para a sua máquina local para fazer as alterações desejadas.

## Passo-a-passo

1. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixar e instalar o Docker a partir do site oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

2. Crie uma conta no [Docker Hub](https://hub.docker.com/) e crie um repositório.

3. Certifique-se que você está dentro do diretório `jenkins-pipeline`.

4. Construa a imagem Docker:
    ```bash
    docker build -t jenkins:local -f DockerfileJenkins
    ```
    Obs.: Certifique-se que seu Docker está rodando.

5. Execute o contêiner Docker:
    ```bash
    docker run --name jenkins --rm -p 8080:8080 -p 50000:50000 --volume jenkins-data:/var/jenkins_home --volume /var/run/docker.sock:/var/run/docker.sock --env JENKINS_ADMIN_ID=admin --env JENKINS_ADMIN_PASSWORD=password jenkins:local
    ```
    Essa configuração é usada quando para permitir que o contêiner Docker acesse o daemon do Docker no host, permitindo que ele execute operações relacionadas ao Docker, como criar, iniciar ou parar outros contêineres.

6. Abra seu navegador e visite `http://localhost:8080` para ver a página inicial do Jenkins.

7. Será solicitado o usuário e senha, que foram definidos no docker run, --env JENKINS_ADMIN_ID=`admin` --env JENKINS_ADMIN_PASSWORD=`password`

## Arquivo de configuração do Jenkins

Foi utlizado o [How to automate jenkins setup with docker and jenkins configuration as code](https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-setup-with-docker-and-jenkins-configuration-as-code) como fonte de conhecimento.

Para saber mais sobre o arquivo [casc.yaml](casc.yaml]), após subir o jenkins, acesse [http://localhost:8080/manage/configuration-as-code/reference](http://localhost:8080/manage/configuration-as-code/reference)

No arquivo [Jenkinsfile](./dotnet/Jenkinsfile) coloque os valores corretos da seguinte variráveis:
- DOCKER_NAMESPACE: Nome da Organização ou de usuário.
- DOCKER_REPOSITORY: Nome do repositório
- DOCKER_TAG: Nome da tag, normalmente é `latest`.

Após alterar, faça o commit e o push para o seu repositório.

## Uso

### Configurando uma Multibranch Pipeline

Para configurar uma Multibranch Pipeline no Jenkins e definir segredos para o usuário e senha do Docker e do GitHub, siga os passos abaixo:

1. Acesse o Jenkins em seu navegador, digitando o endereço `http://localhost:8080`.

2. Faça login com suas credenciais de administrador informado no `docker run`. No modelo acima são `admin` e `password`.

3. No painel de controle do Jenkins, clique em "Novo Tarefa" para criar um novo projeto.

4. Na página de criação do projeto, digite um nome para o projeto, neste exemplo foi utilizado `Pipeline Jenkins`, e selecione "Multibranch Pipeline" como o tipo de projeto.

5. Clique em "Tudo certo" para confirmar a criação do projeto.

6. Na página de configuração do projeto, vá até a seção "Branch Sources":

- Clique em Add source e depois em GitHub.

- Adicione as credenciais do GitHub clicando em `+Add` e selecionando `Pipeline Juenkins`.

- Na nova janela, em `Domain` selecione `Global credentials (unrestricted)`.

- Em `Kind` selecione `Username with password` e prencha o `Username` com o seu usário GitHub e `Password` com sua senha. Você também pode colocar um token de acesso pessoal, leia sobre em [token de acesso pessoal](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

- Preencha o ID com a designação que deseja dar a credencial, neste exemplo foi escrito `toolboxgithub`.

- Clique em `Create`

7 `Repository HTTPS URL`: coloque o enredeço do respositório. Neste exemplo é o `https://github.com/seu-usuario/pipelines-exemplo-basico`.
Certifique-se de substituir o `seu-usuario` pelo seu usuário GitHub.

8. Na seção "Build Configuration", by Jenkinsfile e no Script Path escreva `jenkins/dotnet/Jenkinsfile`

9. Clique em salvar.

10. Clique em `Credentials`:

- Em `Stores scoped to Pipeline Jenkins`, clique `Pipeline Jenkins`.

- Na nova janela, em `Domain` selecione `Global credentials (unrestricted)`.

- Em `Kind` selecione `Username with password` e prencha o `Username` com o seu usário Docker e `Password` com seu token[Access Token](https://docs.docker.com/security/for-developers/access-tokens/).

- Preencha o ID com a designação que deseja dar a credencial, neste exemplo foi escrito `toolboxdocker`.

- Clique em `Create`

16. Clique em "Salvar" para salvar as configurações do projeto.

Agora você configurou uma Multibranch Pipeline no Jenkins e definiu segredos para o usuário e senha do Docker e do GitHub. 

Na tela que irá aparecer, aguarde ate ser finalizada a pipeline, isso mesmo, a pipeline já foi disparada. Após finalizar, clique em Histórico de Compilações. 

Clique no link Pipeline Jenkins >> main e você verá o que foi feito pela pipeline.
