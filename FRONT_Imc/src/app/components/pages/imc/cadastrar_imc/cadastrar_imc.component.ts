import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Imc } from "src/app/models/Imc";
import { Usuario } from "src/app/models/Usuario";

@Component({
  selector: "app-cadastrar_imc",
  templateUrl: "./cadastrar_imc.component.html",
  styleUrls: ["./cadastrar_imc.component.css"],
})
export class CadastrarImcComponent implements OnInit {

  valor!: number;
  quantidade!: number;
  usuarios!: Usuario[];
  usuarioId!: number;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.http
      .get<Usuario[]>("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
      });
  }

  cadastrar(): void {
    let Imc: Imc = {
      altura: this.valor,
      peso: this.quantidade,
      usuarioId: this.usuarioId,
    };
    console.log(Imc);
    this.http.post<Imc>("https://localhost:5001/api/imc/cadastrar", Imc).subscribe({
      next: (usuario) => {
        this._snackBar.open("Imc cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/imc/listar"]);
      },
    });
  }
}
