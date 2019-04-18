import {Component, OnInit} from '@angular/core';
import {Pessoa} from 'src/app/core/model';
import {FormControl} from '@angular/forms';
import {ToastyService} from 'ng2-toasty';
import {PessoaService} from '../pessoa.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css'],
})
export class PessoaCadastroComponent implements OnInit {
  pessoa = new Pessoa();

  constructor(
    private toastyService: ToastyService,
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService

  ) {}

  ngOnInit() {}

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa);


    this.pessoaService.adicionar(this.pessoa).subscribe(
      Pessoa => {
        this.toastyService.success('Pessoa cadastrada com sucesso.');
        form.reset();
        this.pessoa = new Pessoa();
      },
      error => {
        console.log(error)
        this.errorHandlerService.handler(error);
      }
    );
  }
}
