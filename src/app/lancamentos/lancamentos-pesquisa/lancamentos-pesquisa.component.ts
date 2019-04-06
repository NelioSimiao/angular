import {Component, OnInit, ViewChild} from '@angular/core';

import {
  LazyLoadEvent,
  ConfirmationService,
} from 'primeng/components/common/api';

import {LancamentoService, LancamentoFiltro} from '../lancamento.service';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from 'src/app/core/error-handler.service';

import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
})
export class LancamentosPesquisaComponent implements OnInit {
  filtro = new LancamentoFiltro();
  totalRegistos = 0;
  lancamentos = [];
  @ViewChild('table') grid;

  ngOnInit() {
    //  this.pesquisar();
  }

  constructor(
    private lancamentosService: LancamentoService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentosService.pesquisar(this.filtro).subscribe(
      dados => {
        this.totalRegistos = dados.totalElements;
        this.lancamentos = dados.content;
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir ? ',
      accept: () => {
        this.excluir(lancamento);
      },
    });
  }

  excluir(lancamento: any) {
    this.lancamentosService.excluir(lancamento.codigo).subscribe(() => {
      //como apaguei voltar a fazer pesquisa para actualizar a tabela
      this.pesquisar(0);
      //para paginacao comecar na pagina gero da tabela da paginacao
      this.grid.first = 0;

      this.toastyService.success('Lançamento excluindo com sucesso!');
    },   
      error => {
      this.errorHandlerService.handler(error);
    });
  }
}
