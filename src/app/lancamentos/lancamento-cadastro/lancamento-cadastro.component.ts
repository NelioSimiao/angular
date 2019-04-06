import {Component, OnInit} from '@angular/core';
import {CategoriaService} from 'src/app/categoria.service';
import {ErrorHandlerService} from 'src/app/core/error-handler.service';
import {PessoaService} from 'src/app/pessoas/pessoa.service';
import {Lancamento} from 'src/app/core/model';
import {FormControl} from '@angular/forms';
import {LancamentoService} from '../lancamento.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css'],
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [];
  lancamento = new Lancamento();

  pessoasArray = [];
  constructor(
    private categoriaService: CategoriaService,
    private errorHandlerService: ErrorHandlerService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService
  ) {}

  // busca todas categorias na base
  pesquisarCategorias() {
    this.categoriaService.pesquisar().subscribe(
      categorias => {
        this.categorias = categorias.map(c => ({
          label: c.nome,
          value: c.codigo,
        }));
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }

  // busca todos na base
  pesquisarTodosPessoas() {
    this.pessoaService.pesquisarTodos().subscribe(
      pessoas => {
        this.pessoasArray = pessoas.map(p => ({label: p.nome, value: p.codigo}));
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }

  salvar(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento).subscribe(
      Lancamento => {
        console.log(Lancamento);
        this.toastyService.success('Lançamento adicionado com sucesso.');
        form.reset();
        this.lancamento = new Lancamento();
      },
      error => {
        this.errorHandlerService.handler(error);
      }
    );
  }

  ngOnInit() {
    this.pesquisarTodosPessoas();
    this.pesquisarCategorias(); 
  }
}
