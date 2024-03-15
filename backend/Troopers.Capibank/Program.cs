using Microsoft.EntityFrameworkCore;
using Troppers.Capibank.Data.Context;

using Troopers.Capibank.Util.Validators;
using Troopers.Capibank.Services;
using Troopers.Capibank.Exceptions;
using Troopers.Capibank.Repositories;
using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.Mappers;
using Troopers.Capibank.DTO.User;
using Troopers.Capibank.DTO.Auth;

var builder = WebApplication.CreateBuilder(args);

// Add logging.
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Add services to the container.
var conexao = builder.Configuration.GetConnectionString("SQLite");
builder.Services.AddDbContext<CapibankContext>(context => context.UseSqlite(conexao));

builder.Services.AddScoped<IAddressRepository, AddressRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddScoped<IValidator<string>, PasswordValidator>();

builder.Services.AddScoped<IMapper<UserEntity, UserDto>, UserMapper>();
builder.Services.AddScoped<IMapper<AddressEntity, AddressDto>, AddressMapper>();

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

app.MapControllers();

app.Run();