import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar_usuario/cadastrar_usuario.component';
import { ListarImcComponent } from "./components/pages/imc/listar_imc/listar_imc.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarImcComponent } from "./components/pages/imc/cadastrar_imc/cadastrar_imc.component";
import { ListarUsuarioComponent } from "./components/pages/usuario/listar_usuario/listar_usuario.component";

const routes: Routes = [
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "pages/usuario/cadastrar/:id",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "pages/usuario/listar",
    component: ListarUsuarioComponent,
  },
  {
    path: "pages/imc/cadastrar",
    component: CadastrarImcComponent,
  },
  {
    path: "pages/imc/listar",
    component: ListarImcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
