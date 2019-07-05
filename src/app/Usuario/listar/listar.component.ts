import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from './../../Service/service.service';
import { Usuario } from 'src/app/Model/Usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {

    this.service.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      })
  }

  editar(usuario: Usuario): void {
    localStorage.setItem("id", usuario.id.toString());
    this.router.navigate(["editar"])
  }

  deletar(usuario: Usuario) {
    this.service.deleteUsuario(usuario)
      .subscribe(data => {
        this.usuarios=this.usuarios.filter(c=>c!==usuario);
        alert("Usuário excluído com sucesso!");
      })
  }

}
