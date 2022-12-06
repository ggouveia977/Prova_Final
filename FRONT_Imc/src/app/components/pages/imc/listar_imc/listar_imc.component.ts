import { Imc } from "src/app/models/Imc";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-listar_imc",
  templateUrl: "./listar_imc.component.html",
  styleUrls: ["./listar_imc.component.css"],
})
export class ListarImcComponent implements OnInit {
  imcs!: Imc[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Imc[]>("https://localhost:5001/api/imc/listar")
      .subscribe({
        next: (imcs) => {
          this.imcs = imcs;
        },
      });
  }
}
