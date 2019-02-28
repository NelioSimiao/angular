import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{

  pessoas=[
    {
  nome: 'Nelio Simiao',
   cidade: 'Maputo',
   estado: 'Provincia',
   status: 'Activo'},
   {
    nome: 'Nelio Simiao',
     cidade: 'Maputo',
     estado: 'Provincia',
     status: 'Activo'},
     {
      nome: 'Nelio Simiao',
       cidade: 'Maputo',
       estado: 'Provincia',
       status: 'Activo'}];
}
