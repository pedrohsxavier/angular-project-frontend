import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarComponent } from './Usuario/adicionar/adicionar.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { ListarComponent } from './Usuario/listar/listar.component';


const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
