using System.Collections.Generic;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/Imc")]
    public class ImcController : ControllerBase
    {
        private readonly DataContext _context;

        public ImcController(DataContext context) =>
            _context = context;

        // POST: /api/imc/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Imc imc)
        {            

            _context.Imcs.Add(imc);
            _context.SaveChanges();
            return Created("", imc);
        }

        // GET: /api/imc/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Imc> imcs = 
                _context.Imcs.Include(u => u.Usuario).ToList();

            if(imcs.Count == 0) return NotFound();

            return Ok(imcs);
        } 

    }
}