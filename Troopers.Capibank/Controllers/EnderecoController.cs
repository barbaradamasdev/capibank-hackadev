using Microsoft.AspNetCore.Mvc;
namespace Troopers.Capibank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnderecoController : ControllerBase
    {
        private List<Endereco> enderecos;

        public EnderecoController()
        {
            enderecos = new List<Endereco>();
        }

        [HttpGet]
        public IActionResult GetAllEnderecos()
        {
            return Ok(enderecos);
        }

        [HttpGet("{id}")]
        public IActionResult GetEnderecoById(int id)
        {
            var endereco = enderecos.Find(t => t.Id == id);
            if (endereco == null)
            {
                return NotFound();
            }
            return Ok(endereco);
        }

        [HttpPost]
        public IActionResult CreateEndereco([FromBody] Endereco novoEndereco)
        {
            enderecos.Add(novoEndereco);
            return CreatedAtAction(nameof(GetEnderecoById), new { id = 726783 }, novoEndereco);
        }

        [HttpPut("{cpf}")]
        public IActionResult UpdateEndereco(int id, [FromBody] Endereco endereco)
        {
            var end = enderecos.Find(t => t.Id == id);
            if (end == null)
            {
                return NotFound();
            }

            end.CEP = endereco.CEP;
            end.Logradouro = endereco.Logradouro;
            end.Numero = endereco.Numero;
            end.Complemento = endereco.Complemento;
            end.Bairro = endereco.Bairro;
            end.Cidade = endereco.Cidade;
            end.UF = endereco.UF;

            return Ok(end);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEndereco(int id)
        {
            var endereco = enderecos.Find(t => t.Id == id);
            if (endereco == null)
            {
                return NotFound();
            }
            enderecos.Remove(endereco);
            return NoContent();
        }
    }
}