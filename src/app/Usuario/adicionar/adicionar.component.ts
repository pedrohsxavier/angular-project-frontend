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

  usuario: Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  adicionar(usuario: Usuario) {
    this.service.createUsuario(usuario)
      .subscribe(data => {
        alert("Cadastro realizado com sucesso!");
        this.router.navigate(["listar"]);
      })

  }

}
