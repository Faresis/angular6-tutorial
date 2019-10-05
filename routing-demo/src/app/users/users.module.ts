import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule, userRouterComponents } from './users-routing.module';
import { UserComponent, UserArrayService, UserResolveGuard } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [userRouterComponents, UserComponent],
  providers: [UserArrayService, UserResolveGuard]
})
export class UsersModule { }
