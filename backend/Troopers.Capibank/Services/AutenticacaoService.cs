using JWT.Builder;
using Troopers.Capibank.DTOs.Request;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Services;

public interface IAutenticacaoService
{
    Task<string> Login(LoginDTO loginDto);
}

public class AutenticacaoService(ITitularService titularService) : IAutenticacaoService
{
    public async Task<string> Login(LoginDTO loginDto)
    {
        var token = JwtBuilder.Create()
            .WithAlgorithm(new JWT.Algorithms.HMACSHA256Algorithm())
            .WithSecret("capibank")
            .ExpirationTime(DateTimeOffset.UtcNow.AddDays(16).ToUnixTimeSeconds())
            .Issuer("Capibank Inc")
            .AddClaim("email", loginDto.Email)
            .Encode();

        return token;
    }
}