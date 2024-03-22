import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
   apiUrl="https://rpwebapps.us/clients/personal_drive/api/"

  login(body: any):Observable<any>{
    return this.http.post(this.apiUrl + "login", body)
   } 

}
