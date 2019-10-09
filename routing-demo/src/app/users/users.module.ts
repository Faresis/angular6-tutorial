import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule, userRouterComponents } from './users-routing.module';
import { UserComponent, UserArrayService, UserResolveGuard } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule,
  ],
  declarations: [userRouterComponents, UserComponent],
  providers: [UserArrayService, UserResolveGuard]
})
export class UsersModule { }
