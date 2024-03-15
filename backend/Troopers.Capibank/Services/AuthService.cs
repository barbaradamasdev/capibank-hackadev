using JWT.Algorithms;
using JWT.Builder;
using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.DTO.User;
using Troopers.Capibank.Exceptions;
using Troopers.Capibank.Util.Validators;

namespace Troopers.Capibank.Services;

public interface IAuthService
{
    UserEntity SignUp(UserDto userDto);
    string LogIn(LogInDTO logInDto);
}

public class AuthService(/*IValidator<string> passwordValidator,*/ IUserService userService) : IAuthService
{
    public UserEntity SignUp(UserDto userDto)
    {
        // if (!passwordValidator.Validate(userDto.Password))
        // {
        //     throw new InvalidPasswordException("[Auth] SignUp > Invalid Password!");
        // }

        var entity = userService.Create(userDto);
        return entity;
    }

    public string LogIn(LogInDTO logInDto)
    {
        var entity = userService.GetByEmail(logInDto.Email) ?? throw new ResourceNotFoundException($"User with Email: {logInDto.Email} not found.");
        
        var validPassword = BCrypt.Net.BCrypt.EnhancedVerify(logInDto.Password, entity.Password);
        if (!validPassword)
        {
            throw new InvalidCredentialsException("Invalid credentials!");
        }

        var token = JwtBuilder.Create()
            .WithAlgorithm(new HMACSHA512Algorithm())
            .WithSecret("cap1b4nk")
            .Issuer("Capibank Inc")
            .IssuedAt(DateTime.UtcNow)
            .ExpirationTime(DateTime.UtcNow.AddDays(1))
            .AddClaim("userId", entity.Id)
            .AddClaim("userEmail", entity.Email)
            .AddClaim("userRole", entity.Role)
            .Encode() ?? throw new InvalidCredentialsException("Error while creating the JWT.");

        return token;
    }
}
