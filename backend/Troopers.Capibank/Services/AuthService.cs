using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.Exceptions;
using Troopers.Capibank.Util.Validators;

namespace Troopers.Capibank.Services;

public interface IAuthService
{
    SignUpDTO SignUp(SignUpDTO signUpDto);
    LogInDTO LogIn(LogInDTO logInDto);
}

public class AuthService(IValidator<string> passwordValidator) : IAuthService
{
    public SignUpDTO SignUp(SignUpDTO signUpDto)
    {
        if (!passwordValidator.Validate(signUpDto.Password!))
        {
            throw new InvalidPasswordException("[Auth] SignUp > Invalid Password!");
        }

        return signUpDto;
    }

    public LogInDTO LogIn(LogInDTO logInDto)
    {
        return logInDto;
    }
}
