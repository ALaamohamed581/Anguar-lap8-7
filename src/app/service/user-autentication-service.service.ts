import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserAutenticationServiceService {
  users: Iuser[] = [];
  pass:string=''
  isUserLogged: boolean = false;
  private authentiacitonSubject: BehaviorSubject<boolean>;
  constructor() {
    this.authentiacitonSubject = new BehaviorSubject<boolean>(false);
  }
  login() {
    localStorage.setItem('token', 'jsdb;KWBG;WBLEGUWEFBLEWBLWHEBfliwiwgkhasf');
    this.authentiacitonSubject.next(true);
  }

  logOut() {
    localStorage.removeItem('token');
    this.authentiacitonSubject.next(false);
  }
  getUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authentiacitonSubject;
  }
  //BOuns Day three sogin up page

  CreateUser(u: Iuser) {
    this.users.push(u);
    console.log(this.users);
    return this.users;
  }
}
