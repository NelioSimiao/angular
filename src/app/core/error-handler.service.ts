import {Injectable} from '@angular/core';
import {ToastyService} from 'ng2-toasty';
import {Observable, throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpParams, HttpErrorResponse,} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private toastyService: ToastyService) {}

  handler(errorResponse: any) {
    console.log(errorResponse);
   this.toastyService.error("Ocorreu um erro ao executar a transação.");
  }
}
