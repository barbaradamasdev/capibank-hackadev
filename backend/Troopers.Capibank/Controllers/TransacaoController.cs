using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Troopers.Capibank.Domain.Entities;

namespace Troopers.Capibank.Controllers
{
    public class TransacaoController : Controller
    {
        private static List<Transacao> _transacoes = new List<Transacao>();

        // GET: Transacao
        public IActionResult Index()
        {
            return View(_transacoes);
        }

        // GET: Transacao/Details/5
        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transacao = _transacoes.Find(t => t.IdTransacao == id);
            if (transacao == null)
            {
                return NotFound();
            }

            return View(transacao);
        }

        // GET: Transacao/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Transacao/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("IdTransacao,TipoTransacao,ValorTransacao,DataTransacao,Situacao")] Transacao transacao)
        {
            if (ModelState.IsValid)
            {
                _transacoes.Add(transacao);
                return RedirectToAction(nameof(Index));
            }
            return View(transacao);
        }

        // GET: Transacao/Delete/5
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transacao = _transacoes.Find(t => t.IdTransacao == id);
            if (transacao == null)
            {
                return NotFound();
            }

            return View(transacao);
        }

        // POST: Transacao/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var transacao = _transacoes.Find(t => t.IdTransacao == id);
            _transacoes.Remove(transacao);
            return RedirectToAction(nameof(Index));
        }
    }
}
