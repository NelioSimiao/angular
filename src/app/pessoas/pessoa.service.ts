import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';



export class pessoaFiltro {
  nome: string;
  pagina = 0;
  intensPorPagina = 3;
}
@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  pessoaUrl = 'http://localhost:8090/pessoas';
  constructor(private http: HttpClient) {}
 

  

  // busca pessoas  por filtro na base
  pesquisarPorFiltro(filtro: pessoaFiltro): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let httpParams = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.intensPorPagina.toString());

    if (filtro.nome) {
      console.log(filtro.nome);
      filtro.nome
      httpParams = httpParams.set('nome', filtro.nome);
    }

    return this.http.get(this.pessoaUrl+'?filtrar', {
      headers: httpHeaders,
      params: httpParams,
    }).pipe(catchError(this.errorHandler));
  }

  // apaga usuario na base por Id
  excluir(codigo: number): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(this.pessoaUrl + '/' + codigo, {
      headers: httpHeaders,
    }).pipe(catchError(this.errorHandler));
  }

  // busca todas pessoas na base
  pesquisar(): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http
      .get(this.pessoaUrl, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }



   // actualiza na base por ID
  actualiza(codigo: number): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(this.pessoaUrl + '/' + codigo, {
      headers: httpHeaders,
    }).pipe(catchError(this.errorHandler));
  }


   // activa a pessoa 
  activar(codigo: number): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.put(this.pessoaUrl + '/' + codigo, {
      headers: httpHeaders,
    }).pipe(catchError(this.errorHandler));
  }



  
  private errorHandler(error: any) {
    return throwError(error);
  }
}
