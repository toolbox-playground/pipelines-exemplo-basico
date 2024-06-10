# Jenkins

O Jenkins é um popular servidor de automação de código aberto amplamente utilizado para pipelines de integração contínua e entrega contínua (CI/CD). Ele fornece uma plataforma poderosa e flexível para automatizar processos de desenvolvimento de software.

Uma das principais características do Jenkins é sua integração perfeita com o Docker. O Docker é uma plataforma de containerização que permite empacotar aplicativos e suas dependências em containers leves e portáteis. Ao combinar o Jenkins com o Docker, você pode facilmente criar e gerenciar ambientes de compilação isolados, garantindo compilações consistentes e reproduzíveis em diferentes máquinas.

Usar o Jenkins com o Docker oferece várias vantagens. Em primeiro lugar, permite provisionar e gerenciar facilmente agentes de compilação como containers Docker, fornecendo uma maneira escalável e eficiente de executar seus pipelines de CI/CD. Você pode criar vários containers com diferentes configurações, permitindo a execução paralela de compilações e testes.

Além disso, o Docker fornece um ambiente consistente para suas compilações, eliminando o problema de "funciona na minha máquina". Você pode definir uma imagem Docker com todas as ferramentas e dependências necessárias para o seu projeto, garantindo que cada compilação seja executada no mesmo ambiente, independentemente da máquina hospedeira.

O Jenkins também oferece plugins que aprimoram sua integração com o Docker. Por exemplo, o plugin Docker Pipeline permite definir seus pipelines de CI/CD usando um Jenkinsfile, que pode incluir etapas específicas do Docker, como construir e enviar imagens Docker, executar containers e executar comandos dentro dos containers.

Em resumo, o Jenkins e o Docker formam uma combinação poderosa para automatizar processos de desenvolvimento de software. Ao aproveitar as capacidades de containerização do Docker, você pode obter compilações consistentes, utilização eficiente de recursos e pipelines de CI/CD escaláveis.

## Passo-a-passo

Foi utlizado o [How to automate jenkins setup with docker and jenkins configuration as code](https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-setup-with-docker-and-jenkins-configuration-as-code) como fonte de conhecimento.

## Arquivo de configuração do Jenkins

Para saber mais sobre o arquivo [casc.yaml](casc.yaml]), após subir o jenkins, acesse [http://localhost:8080/manage/configuration-as-code/reference](http://localhost:8080/manage/configuration-as-code/reference)