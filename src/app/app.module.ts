import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, Component, ViewChild, LOCALE_ID} from '@angular/core';
import {AppComponent} from './app.component';

import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/components/common/api';

import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {LancamentoService} from './lancamentos/lancamento.service';
import {PessoaService} from './pessoas/pessoa.service';

import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {LancamentoCadastroComponent} from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosPesquisaComponent} from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import {PessoasPesquisaComponent} from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {path: 'lancamentos', component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo', component: LancamentoCadastroComponent},
  {path: 'pessoas', component: PessoasPesquisaComponent},
];
@NgModule({
  declarations: [AppComponent],




  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    LancamentosModule,
    PessoasModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [LancamentoService, PessoaService, ConfirmationService],
  bootstrap: [AppComponent],
   exports: [RouterModule]
})
export class AppModule {}
