import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent, MessagesComponent, MessagesService, AuthGuard, AuthService, LoginComponent } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent, LoginComponent],
  providers: [AuthGuard, MessagesService, AuthService],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`Core module already loaded. Import it in AppModule only.`);
    }
  }
}
