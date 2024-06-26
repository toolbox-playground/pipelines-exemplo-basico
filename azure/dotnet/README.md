# Hello World .Net com Docker
![Toolbox](../img/toolbox-playground.png)

## Uso Local

Para usar o projeto Hello World .Net com Docker, siga estes passos:

1. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixar e instalar o Docker a partir do site oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

2. Certifique-se que você está dentro do diretório `hello-world-com-docker-languages/dotnet`.

3. Construa a imagem Docker:
    ```bash
    docker build -t hello-world-dotnet .
    ```
    Obs.: Certifique-se que seu Docker está rodando.

4. Execute o contêiner Docker:
    ```bash
    docker run -p 8080:8080 hello-world-dotnet
    ```

5. Abra seu navegador e visite `http://localhost:8080` para ver a mensagem "Bem-Vindo ao Hello World .Net Asp da ToolBox Playground".
