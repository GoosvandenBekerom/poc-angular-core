import { AuthService } from './services/auth.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should only be injected in AppModule');
    }
  }
}
