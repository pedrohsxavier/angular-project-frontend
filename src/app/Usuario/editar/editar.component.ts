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
    let id=localStorage.getItem("id");
    this.service.getUsuarioById(+id)
      .subscribe(data => {
        this.usuario = data;
      })
  }

}
