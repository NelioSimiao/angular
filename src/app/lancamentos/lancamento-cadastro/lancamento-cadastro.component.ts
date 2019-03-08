import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [
    { label: 'Alimetacao', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  pessoas = [
    { label: 'Nelio Simiao Muchisse', value: 1 },
    { label: 'Mateus joao Mateu', value: 2 },
    { label: 'Dassone Alfredo Mecamo', value: 3},

  ];
  constructor() { }

  ngOnInit() {
  }

}
