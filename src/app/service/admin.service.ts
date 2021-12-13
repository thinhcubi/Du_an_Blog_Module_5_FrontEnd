import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.API_URL + 'users');
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(environment.API_URL + `users/${id}`);
  }
}
