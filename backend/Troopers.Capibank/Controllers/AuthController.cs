using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

[Route("/api/v1/auth")]
[ApiController]
public class AuthController(IAuthService authService) : ControllerBase
{
    [HttpPost("signup")]
    public SignUpDTO SignUp(SignUpDTO signUpDto)
    {
        return authService.SignUp(signUpDto);
    }

    [HttpPost("login")]
    public LogInDTO LogIn(LogInDTO logInDto) {
        return authService.LogIn(logInDto);
    }
}