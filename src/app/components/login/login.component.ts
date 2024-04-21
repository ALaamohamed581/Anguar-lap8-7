import { Component } from '@angular/core';
import { UserAutenticationServiceService } from '../../service/user-autentication-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  pass: string = '';
  isUserLooged: boolean;
  constructor(
    private iserAuthenticaionService: UserAutenticationServiceService
  ) {
    this.isUserLooged = this.iserAuthenticaionService.getUserLogged();
  }
  login() {
    this.iserAuthenticaionService.login();
    this.isUserLooged = this.iserAuthenticaionService.getUserLogged();
  }
  logout() {
    this.iserAuthenticaionService.logOut();
    this.isUserLooged = this.iserAuthenticaionService.getUserLogged();
  }
}
