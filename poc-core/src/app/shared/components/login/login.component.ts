import { LoggerService } from '@app/shared/services/logger.service';
import { AuthService } from '@app/core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService, private logger: LoggerService) { }

  onSubmit() {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password);
    this.logger.log('login called');
  }
}
