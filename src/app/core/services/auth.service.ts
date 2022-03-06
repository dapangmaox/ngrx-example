import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Credentials, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ username, password }: Credentials): Observable<User> {
    if (username !== '大胖猫' && password !== '123456') {
      return throwError(() => '用户名或密码不正确');
    }
    return of({ id: 1, name: '大胖猫' });
  }
}
