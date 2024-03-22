using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

[Route("[controller]")]
[ApiController]
public class AutenticacaoController(IAutenticacaoService autenticacaoService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
    {
        var token = await autenticacaoService.Login(loginDTO);

        var cookieOptions = new CookieOptions
        {
            Path = "/",
            Expires = DateTimeOffset.UtcNow.AddDays(16),
            HttpOnly = true
        };

        Response.Cookies.Append("Token", token, cookieOptions);
        return Ok();
    }
}