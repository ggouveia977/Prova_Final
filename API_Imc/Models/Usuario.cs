using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Usuario
    {
        public Usuario () => CriadoEm = DateTime.Now;
        public int Id { get; set; }

        public string Nome { get; set; }


        public DateTime Nascimento { get; set; }

        public DateTime CriadoEm { get; set; }

    }
}