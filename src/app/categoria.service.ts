import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  categoriasUrl = 'http://localhost:8090/categorias';
  constructor(private http: HttpClient) {}

  pesquisar(): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http
      .get(this.categoriasUrl, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: any) {
    return throwError(error);
  }
}
