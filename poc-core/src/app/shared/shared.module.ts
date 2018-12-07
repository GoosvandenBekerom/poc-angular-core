import { LoggerService } from './services/logger.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TitleComponent,
    LoginComponent
  ],
  exports: [
    TitleComponent,
    LoginComponent,
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        LoggerService,
      ]
    };
  }
}
