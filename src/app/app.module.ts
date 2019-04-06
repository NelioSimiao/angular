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
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    LancamentosModule,
    PessoasModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
