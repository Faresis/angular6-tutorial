import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent, SpinnerService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  providers: [SpinnerService],
  exports: [SpinnerComponent],
})
export class SharedModule { }
