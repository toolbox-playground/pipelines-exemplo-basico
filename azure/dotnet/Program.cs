var builder = WebApplication.CreateBuilder(args); // Cria uma instância do WebApplicationBuilder usando os argumentos fornecidos

var app = builder.Build(); // Constrói a aplicação web com base na instância do WebApplicationBuilder

app.UseStaticFiles(); // Configura a aplicação para usar arquivos estáticos, como arquivos CSS, JavaScript e imagens

app.MapGet("/", () => Results.Redirect("/index.html")); // Mapeia a rota raiz ("/") para redirecionar para a página "index.html"

app.Run(); // Executa a aplicação web