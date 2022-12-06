import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-listar_usuario',
  templateUrl: './listar_usuario.component.html',
  styleUrls: ['./listar_usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>
      ("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        }
      });
  }

}
