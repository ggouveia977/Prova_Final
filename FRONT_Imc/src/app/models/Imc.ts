import { Usuario } from "./Usuario";

export interface Imc {
  id?: number;
  altura: number;
  peso: number;
  usuarioId: number;
  usuario?: Usuario;
  criadoEm?: Date;
}
