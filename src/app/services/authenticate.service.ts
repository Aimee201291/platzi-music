import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials) {
    return new Promise((accept, reject) => {
      if (credentials.email == "test@test.com" && credentials.password == "12345") {
        accept("Login correcto")
      } else {
        reject("Login incorrecto");
      }
    })
  }

}
