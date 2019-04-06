import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

import * as moment from 'moment';
import {ErrorHandlerService} from '../core/error-handler.service';
import {Lancamento} from '../core/model';
export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  intensPorPagina = 5;
}

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  lancamentosUrl = 'http://localhost:8090/lancamentos';
  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  pesquisar(filtro: LancamentoFiltro): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let httpParams = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.intensPorPagina.toString());

    if (filtro.descricao) {
      httpParams = httpParams.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      httpParams = httpParams.set(
        'dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD')
      );
    }
    if (filtro.dataVencimentoFim) {
      httpParams = httpParams.set(
        'dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD')
      );
    }
    return this.http
      .get(this.lancamentosUrl, {
        headers: httpHeaders,
        params: httpParams,
      })
      .pipe(catchError(this.errorHandler));
  }

  excluir(codigo: number): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http
      .delete(this.lancamentosUrl + '/' + codigo, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  adicionar(lancamento: Lancamento): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http
      .post(this.lancamentosUrl, lancamento, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
