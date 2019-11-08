import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { Store, select } from '@ngrx/store';
import { AutoUnsubscribe } from './../../../core/decorators';
import * as UsersActions from './../../../core/+store/users/users.actions';
import { AppState, getUsers, getUsersError, getEditedUser } from './../../../core/+store';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
@AutoUnsubscribe('subscription')
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserModel>>;
  usersError$: Observable<Error | string>;
  private subscription: Subscription;

  private editedUser: UserModel;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(getUsers));
    this.usersError$ = this.store.pipe(select(getUsersError));
    
    this.subscription = this.store.pipe(select(getEditedUser))
    .subscribe(
      user => {
        this.editedUser = user;
        console.log(`Last time you edited user ${JSON.stringify(this.editedUser)}`);
      },
      err => console.log(err)
    );

    this.store.dispatch(new UsersActions.GetUsers());
  }

  onEditUser(user: UserModel) {
    const link = ['/users/edit', user.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', user.id];
    // this.router.navigate(link, {relativeTo: this.route});
  }

  isEdited(user: UserModel) {
    if (this.editedUser) {
      return user.id === this.editedUser.id;
    }
    return false;
  }

  onDeleteUser(user: UserModel) {
    this.store.dispatch(new UsersActions.DeleteUser(user));
  }
}
