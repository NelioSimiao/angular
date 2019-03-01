import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent{

  lancamentos=[
    {
   codigo: 1,
   descricao: 'Salariomensal',
   dataVencimento:  new Date (2018,5,25),
   dataPagamento: new Date (2018,5,25),
   valor: 6500,
   tipo:  'DESPESA' ,
   categoria: 'Outros',
   pessoa: 'Rosa' },
  { codigo: 1,
   descricao: 'Salariomensal',
   dataVencimento:  new Date (2018,5,25),
   dataPagamento:  new Date (2018,5,25),
   valor: 6500,
   tipo:  'RECEITA' ,
   categoria: 'Outros',
   pessoa: 'Rosa' },
{
 codigo: 2,
 descricao: 'Salari de escola',
 dataVencimento: '2018-02-07',
 dataPagamento: null,
 valor: 6500,
 tipo:  'RECEITA' ,
 categoria: 'Outros',
 pessoa: 'Rosa' }];



}
