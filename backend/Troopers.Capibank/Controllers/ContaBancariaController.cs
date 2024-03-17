using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Troopers.Capibank.Models;
using Troopers.Capibank.Interfaces;

namespace Troopers.Capibank.Controllers
{
    public class ContaBancariaController : Controller
    {
        private static List<ContaBancaria> _contas = new List<ContaBancaria>();

        // GET: ContaBancaria
        public IActionResult Index()
        {
            return View(_contas);
        }

        // GET: ContaBancaria/Details/5
        public IActionResult Details(int? numeroConta)
        {
            if (numeroConta == null)
            {
                return NotFound();
            }

            var conta = _contas.Find(c => c.NumeroConta == numeroConta);
            if (conta == null)
            {
                return NotFound();
            }

            return View(conta);
        }

        // GET: ContaBancaria/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ContaBancaria/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("NumeroConta,Titular,SituacaoConta")] ContaBancaria conta)
        {
            if (ModelState.IsValid)
            {
                _contas.Add(conta);
                return RedirectToAction(nameof(Index));
            }
            return View(conta);
        }

        // GET: ContaBancaria/Delete/5
        public IActionResult Delete(int? numeroConta)
        {
            if (numeroConta == null)
            {
                return NotFound();
            }

            var conta = _contas.Find(c => c.NumeroConta == numeroConta);
            if (conta == null)
            {
                return NotFound();
            }

            return View(conta);
        }

        // POST: ContaBancaria/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int numeroConta)
        {
            var conta = _contas.Find(c => c.NumeroConta == numeroConta);
            _contas.Remove(conta);
            return RedirectToAction(nameof(Index));
        }
    }
}
