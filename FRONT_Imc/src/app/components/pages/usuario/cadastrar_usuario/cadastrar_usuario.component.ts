import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario} from "src/app/models/Usuario";

@Component({
  selector: "app-cadastrar_usuario",
  templateUrl: "./cadastrar_usuario.component.html",
  styleUrls: ["./cadastrar_usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  nascimento!: string;
  usuarioId!: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.http.get<Usuario>(`https://localhost:5001/api/usuario/buscar/${id}`).subscribe({
          next: (usuario) => {
            this.nome = usuario.nome;
            this.usuarioId = usuario.id!;
          },
        });
      }
    });
  }


  cadastrar(): void {
    let usuario: Usuario = {
      nome: this.nome,
      nascimento: this.nascimento,
    };
    this.http
      .post<Usuario>("https://localhost:5001/api/usuario/cadastrar", usuario)
      .subscribe({
        next: (usuario) => {
          this._snackBar.open("Usuário cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/usuario/listar"]);
        },
      });
  }
}
