using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Troopers.Capibank.DTOs;
using Troopers.Capibank.Domain.Entities;
using Troppers.Capibank.Data.Context;
using AutoMapper;

namespace Troopers.Capibank.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransacoesController : ControllerBase
    {
        private readonly CapibankContext _context;
        private readonly IMapper _mapper;

        public TransacoesController(CapibankContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult>GetTransacoes()  
        {
            var transacoes = await _context.Transacoes.ToListAsync();

             if (transacoes == null)
            {
                return NotFound();
            }

            return Ok(transacoes);
        }

    }
}