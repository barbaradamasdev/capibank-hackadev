using Microsoft.AspNetCore.Mvc;

namespace Troopers.Capibank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private string usuarioLogado; 

        [HttpPost("login")]
        public IActionResult Login([FromBody] Usuario usuario)
        {
            if (usuario.username == "usuario" && usuario.password == "senha")
            {
               usuarioLogado = usuario.username;
                return Ok("Login bem-sucedido!");
            }
            else
            {
                return BadRequest("Usuário ou senha incorretos. Tente novamente.");
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout([FromBody] string usuario)
        {
            return  (usuarioLogado == usuario) ? Ok("Logout bem-sucedido!") : BadRequest("Error ao fazer logout.");
        }

        [HttpGet("{username}")]
        public IActionResult GetTitularByCPF(string username)
        {
            return Ok($"A senha do usuário '{username}' foi enviada para o email associado.");
        }
    }
}