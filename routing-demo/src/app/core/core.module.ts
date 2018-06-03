import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent, MessagesComponent, MessagesService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`Core module already loaded. Import it in AppModule only.`);
    }
  }
}
