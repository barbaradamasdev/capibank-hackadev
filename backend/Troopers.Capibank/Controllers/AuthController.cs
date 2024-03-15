using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.DTO.User;
using Troopers.Capibank.Mappers;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

[Route("/api/v1/auth")]
[ApiController]
public class AuthController(IAuthService authService, IMapper<UserEntity, UserDto> userMapper) : ControllerBase
{
    [HttpPost("signup")]
    public IActionResult SignUp(UserDto signUpDto)
    {
        var entity = authService.SignUp(signUpDto);
        entity.Role = UserRole.CLIENT;

        var dto = userMapper.FromEntity(entity);
        dto.Password = "";

        var response = new ObjectResult(dto)
        {
            StatusCode = StatusCodes.Status201Created
        };

        return response;
    }

    [HttpPost("login")]
    public IActionResult LogIn(LogInDTO logInDto) {
        var token = authService.LogIn(logInDto);

        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Path = "/"
        };

        Response.Cookies.Append("ILoveCapibank", token, cookieOptions);

        return new OkResult();
    }
}