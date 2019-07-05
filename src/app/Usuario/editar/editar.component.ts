import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/Model/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }

  editar() {
    const id = localStorage.getItem("id");
    this.service.getUsuarioId(+id)
      .subscribe(data => {
        this.usuario = data;
      });
  }

  atualizar(usuario: Usuario) {
    this.service.updateUsuario(usuario)
      .subscribe(data => {
        this.usuario = data;
        alert("Dados atualizados com sucesso!");
        this.router.navigate(["listar"]);
      })
  }

}
