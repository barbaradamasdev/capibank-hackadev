using Microsoft.EntityFrameworkCore;
using Troppers.Capibank.Data.Context;

using Troopers.Capibank.Util.Validators;
using Troopers.Capibank.Services;
using Troopers.Capibank.Exceptions;
using Troopers.Capibank.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add logging.
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Add services to the container.
var conexao = builder.Configuration.GetConnectionString("SQLite");
builder.Services.AddDbContext<CapibankContext>(context => context.UseSqlite(conexao));

builder.Services.AddScoped<IAddressRepository, AddressRepository>();

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IAddressService, AddressService>();

builder.Services.AddScoped<IValidator<string>, PasswordValidator>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddExceptionHandler<InvalidPasswordExceptionHandler>();

var app = builder.Build();
app.UseExceptionHandler(opt => {});

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