import { ResponseUsers } from './user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://reqres.in/api/users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<ResponseUsers>{
     return this.http.get<ResponseUsers>(this.url);
  }
}
