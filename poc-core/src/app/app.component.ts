import { AuthService } from '@app/core/services/auth.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-core';
  constructor(public authService: AuthService) {}
}
