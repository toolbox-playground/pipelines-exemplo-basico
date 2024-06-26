# Imagem base
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de projeto
COPY . ./

# Restaurar dependências e compilar o projeto
RUN dotnet restore
RUN dotnet build -c Release --no-restore

# Publicar o projeto
RUN dotnet publish -c Release -o out --no-restore

# Imagem final
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos publicados
COPY --from=build /app/out .

# Expor a porta do aplicativo
EXPOSE 8080

# Comando de inicialização do aplicativo
ENTRYPOINT ["dotnet", "dotnet.dll"]