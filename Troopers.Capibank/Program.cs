using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Troopers.Capibank.Repositories;
using Troopers.Capibank.Services;
using Troppers.Capibank.Data.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var conexao = builder.Configuration.GetConnectionString("SQLite");

builder.Services.AddDbContext<CapibankContext>(context => 
context.UseSqlite(conexao));

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IContaCorrenteRepository, ContaCorrenteRepository>();
builder.Services.AddScoped<IContaCorrenteService, ContaCorrenteService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    var xmlComentarios = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlComentariosPath = Path.Combine(AppContext.BaseDirectory, xmlComentarios);
    options.IncludeXmlComments(xmlComentariosPath);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
