
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  loginUser(model: IUser): Observable<boolean> {
    return model.username === "ghanee.znb@gmail.com" && model.password === "1234" ? of(true) : of(false);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('authToken') ? true : false;
  }
}
