import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url='http://localhost:8080/api/cliente';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url);
  }

  adicionarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }

  getUsuarioId(id: number) {
    return this.http.get<Usuario>(this.url+"/"+id);
  }

  atualizarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.url+"/"+usuario.id, usuario);
  }
}
