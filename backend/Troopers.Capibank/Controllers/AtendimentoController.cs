using Microsoft.AspNetCore.Mvc;
using System;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Controllers
{
    public class AtendimentoController : Controller
    {
        // Método para exibir a página de detalhes do atendimento
        public IActionResult Detalhes(int idChamado)
        {
            // Aqui você buscaria o atendimento pelo ID no banco de dados
            Atendimento atendimento = BuscarAtendimentoPorId(idChamado);
            if (atendimento == null)
            {
                return NotFound(); // Retorna 404 se o atendimento não for encontrado
            }
            return View(atendimento);
        }

        // Método para concluir um chamado de atendimento
        public IActionResult ConcluirChamado(int idChamado)
        {
            // Aqui você buscaria o atendimento pelo ID no banco de dados
            Atendimento atendimento = BuscarAtendimentoPorId(idChamado);
            if (atendimento == null)
            {
                return NotFound(); // Retorna 404 se o atendimento não for encontrado
            }

            atendimento.ConcluirChamado(); // Chama o método ConcluirChamado da entidade Atendimento

            // Aqui você salvaria as alterações no banco de dados

            return RedirectToAction("Detalhes", new { idChamado = atendimento.IdChamado });
        }

        // Método para abrir um novo chamado de atendimento
        public IActionResult AbrirChamado()
        {
            // Aqui você criaria uma nova instância de Atendimento com os dados fornecidos
            Atendimento novoAtendimento = new Atendimento
            {
                IdChamado = GerarNovoIdChamado(), // Supondo que você tenha algum método para gerar um novo ID de chamado
                CriadoEm = DateTime.Now
            };

            // Aqui você salvaria o novo atendimento no banco de dados

            return RedirectToAction("Detalhes", new { idChamado = novoAtendimento.IdChamado });
        }

        // Método fictício para buscar um atendimento pelo ID (simulando acesso ao banco de dados)
        private Atendimento BuscarAtendimentoPorId(int idChamado)
        {
            // Aqui você faria a lógica para buscar o atendimento no banco de dados
            // Por simplicidade, vamos apenas retornar um atendimento fictício
            return new Atendimento
            {
                IdChamado = idChamado,
                Descricao = "Descrição do atendimento",
                EstaResolvido = false,
                CriadoEm = DateTime.Now,
                AtualizadoEm = DateTime.Now,
                FinalizadoEm = DateTime.MinValue
            };
        }

        // Método fictício para gerar um novo ID de chamado (simulando geração de ID único)
        private int GerarNovoIdChamado()
        {
            // Aqui você implementaria a lógica para gerar um novo ID de chamado único
            // Por simplicidade, vamos apenas retornar um ID fictício incremental
            return 12345;
        }
    }
}
