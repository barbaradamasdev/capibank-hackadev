using Microsoft.AspNetCore.Mvc;

namespace Troopers.Capibank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitularController : ControllerBase
    {
        private List<Titular> titulares;

        public TitularController()
        {
            titulares = new List<Titular>();
        }

        [HttpGet]
        public IActionResult GetAllTitulares()
        {
            return Ok(titulares);
        }

        [HttpGet("{cpf}")]
        public IActionResult GetTitularByCPF(string cpf)
        {
            var titular = titulares.Find(t => t.CPF == cpf);
            if (titular == null)
            {
                return NotFound();
            }
            return Ok(titular);
        }

        [HttpPost]
        public IActionResult CreateTitular([FromBody] Titular novoTitular)
        {
            titulares.Add(novoTitular);
            return CreatedAtAction(nameof(GetTitularByCPF), new { CPF = novoTitular.CPF }, novoTitular);
        }

        [HttpPut("{cpf}")]
        public IActionResult UpdateTitular(string cpf, [FromBody] Titular titularAtualizado)
        {
            var titular = titulares.Find(t => t.CPF == cpf);
            if (titular == null)
            {
                return NotFound();
            }
            titular.Nome = titularAtualizado.Nome;
            titular.DataNascimento = titularAtualizado.DataNascimento;
            titular.NumeroConta = titularAtualizado.NumeroConta;
            titular.Email = titularAtualizado.Email;
            titular.Senha = titularAtualizado.Senha;
            return Ok(titular);
        }

        [HttpDelete("{cpf}")]
        public IActionResult DeleteTitular(string cpf)
        {
            var titular = titulares.Find(t => t.CPF == cpf);
            if (titular == null)
            {
                return NotFound();
            }
            titulares.Remove(titular);
            return NoContent();
        }
    }
}