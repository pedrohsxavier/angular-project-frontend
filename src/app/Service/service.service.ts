import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  usuario: Usuario[];

  constructor(private http: HttpClient) { }

  url='http://localhost:8080/projeto-CRUD/usuarios';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url);
  }
}
