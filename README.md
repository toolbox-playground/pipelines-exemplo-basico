# exemplos-pipelines

![Toolbox Playground](img/toolbox-playground.png)

## O que é o exemplos-pipelines

Este repositório contém exemplos de configuração de pipelines. Um pipeline é uma sequência de etapas automatizadas que são executadas para construir, testar e implantar um projeto de software. Esses exemplos mostram como configurar pipelines para diferentes cenários, como compilação de código, execução de testes automatizados e implantação em ambientes de produção.

Ao usar esses exemplos, você pode aprender como configurar pipelines eficientes e confiáveis para automatizar o processo de desenvolvimento de software. Isso pode ajudar a melhorar a qualidade do código, acelerar a entrega de novos recursos e facilitar a colaboração entre membros da equipe.

Os pipelines geralmente são configurados usando ferramentas de integração contínua/entrega contínua (CI/CD), como o Jenkins, GitLab CI/CD, Azure DevOps, entre outros. Essas ferramentas permitem definir as etapas do pipeline, como compilação, teste, empacotamento e implantação, e automatizar sua execução sempre que houver alterações no código-fonte.

Os exemplos neste repositório podem servir como ponto de partida para configurar seus próprios pipelines de acordo com as necessidades do seu projeto.

## Uso

1. Abra o terminal ou prompt de comando e navegue até um diretório de sua prefrência. Substitua `suapasta` pelo nome do seu diretório:
   ```bash
   cd suapasta
   ```

2.Clone este repositório para sua máquina local através do comando abaixo:
```bash
git clone https://github.com/toolbox-playground/pipelines-exemplo-basico
```

3. Navegue até o diretório que você acabou de clonar.

   ```bash
    cd pipelines-exemplo-basico
   ```

4. Escolha a pipeline de sua prefrência disponível:

- BitBucket:

1. Navegue até o diretório BitBucket.
   ```bash
   cd bitbucket
   ```
2. Siga as instruções do [BitBucket](./bitbucket/README.md).

- GitHub:

1. Navegue até o diretório GitHub.
   ```bash
   cd github
   ```
2. Siga as instruções do [GitHub](./github/README.md)

- GitLab:

1. Navegue até o diretório GitLab.
   ```bash
   cd gitlab
   ```
2. Siga as instruções do [GitLab](./gitlab/README.md)

- Harness:

1. Navegue até o diretório Harness.
   ```bash
   cd harness
   ```
2. Siga as instruções do [Harness](./harness/README.md)

- Azure:

1. Navegue até o diretório Azure.
   ```bash
   cd azure
   ```
2. Siga as instruções do [Azure](./azure/README.md)

- Jenkins: 

1. Navegue até o diretório Jenkins.
   ```bash
   cd jenkins
   ```
2. Siga as instruções do [Jenkins](./jenkins/README.md)

## Desafio GitHub

Para aprofundar um conhecimentos, faça o seguinte desafio no GitHub Actions:

Crie uma pipeline complexa para fazer build de uma aplicação qualquer, pode ser até seu Hello World! Porém, desta vez, ao invés de simplesmente fazer o build, você deve escolher sua ferramenta CI/Cd preferida e criar uma pipeline que tenha os seguintes stages/jobs:
1. Um trigger ou evento para que a pipeline inicie automaticamente ao alterar qualquer código no repositório.
2. Um stage de build para realizar o compilar e buildar sua aplicação e empacotar essa aplicação em uma imagem docker.
3. Você deve enviar seu container para um container registry qualquer.
4. Um stage de testes que seja capaz de baixar seu container e executar sua aplicação - esse stage/job deve conter ao menos os testes unitário e ou de cobertura de código com sonarqube ou sonarcloud.
5. Um stage dedicado a segurança que seja capaz de fazer download do seu repositório para scanear seu código ou então baixar seu containee e executar ele para percorrer uma varredura de código com Snyk ou outra ferramenta similar.
6. O deploy da sua aplicação deve ser feito na infraestrutura de algum cloud provider, como por exemplo no Azure container instances ou Google Cloud Run ou AWS ECS.

## Solução do Desafio utilizando GCP

Siga as instruções do [Desafio GitHub Actions](./challenges/github/README.md)

## Contribuindo

Contribuições são bem-vindas! Por favor, leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
