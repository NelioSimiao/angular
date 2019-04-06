import {Component, OnInit, ViewChild} from '@angular/core';
import {PessoaService, pessoaFiltro} from '../pessoa.service';
import {
  LazyLoadEvent,
  ConfirmationService,
} from 'primeng/components/common/api';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css'],
})
export class PessoasPesquisaComponent implements OnInit {
  filtro = new pessoaFiltro();
  @ViewChild('table') grid;

  constructor(
    private pessoaService: PessoaService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    // this.pesquisarPorFiltro();
  }

  totalRegistos = 0;
  pessoas = [];

  pesquisarPorFiltro(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisarPorFiltro(this.filtro).subscribe(
      dados => {
        this.pessoas = dados.content;
        this.totalRegistos = dados.totalElements;
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }
  // este metodo é chamado na tela para fazer busca para actualizcao da tabela
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisarPorFiltro(pagina);
  }

  //Metodo chamado na tela para excluir a pessoa na tabela.
  confirmarExclusao(pessoa: any) {
    console.log(pessoa);
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir ? ',
      accept: () => {
        this.excluir(pessoa);
      },
    });
  }
  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo).subscribe(() => {
      
        //como apaguei voltar a fazer pesquisa para actualizar a tabela
        this.pesquisarPorFiltro(0);
        //para paginacao comecar na pagina gero da tabela da paginacao
        this.grid.first = 0;

        this.toastyService.success('Pessoa excluindo com sucesso!');
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }

  activar(pessoa: any){

  }
}
