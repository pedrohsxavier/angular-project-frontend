import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url='http://localhost:5432/clientes/tb_cliente';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url);
  }
}
