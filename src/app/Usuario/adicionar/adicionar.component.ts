import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from './../../Service/service.service';
import { Usuario } from 'src/app/Model/Usuario';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  salvar(usuario: Usuario) {
    this.service.adicionarUsuario(usuario)
      .subscribe(data => {
        alert("Cadastro realizado com sucesso!");
        this.router.navigate(["listar"]);
      });

  }

}
