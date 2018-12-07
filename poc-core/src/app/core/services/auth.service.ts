import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean;

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  constructor() {
    this._isLoggedIn = false;
  }

  login(username: string, password: string) {
    if (username === 'test' && password === 'test') {
      this._isLoggedIn = true;
    } else {
      throw new Error('Incorrect username or password');
    }
  }

  logout() {
    this._isLoggedIn = false;
  }
}
