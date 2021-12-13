import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
let API_URL = `${environment.apiURL}`
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:HttpClient) { }

  login(data): Observable<any>{
    return this.http.post<any>(API_URL + '/login', data);
  }
}
