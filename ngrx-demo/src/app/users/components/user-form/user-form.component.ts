import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getUsersOriginalUser, getSelectedUserByUrl } from './../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';
import * as UsersActions from './../../../core/+store/users/users.actions';

// rxjs
import { Observable, of, Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import {
  AutoUnsubscribe,
  DialogService,
  CanComponentDeactivate
} from './../../../core';
import { UserModel } from './../../models/user.model';

@AutoUnsubscribe()
@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, CanComponentDeactivate {
  user: UserModel;
  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.sub = this.store.pipe(select(getSelectedUserByUrl)).subscribe(user => this.user = user);
  }

  onSaveUser() {
    const user = { ...this.user };
    if (user.id)
      this.store.dispatch(new UsersActions.UpdateUser(user));
    else
      this.store.dispatch(new UsersActions.CreateUser(user));
  }

  onGoBack() {
    this.store.dispatch(new RouterActions.Back());
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = [];
    return this.store.pipe(
      select(getUsersOriginalUser),
      switchMap(originalUser => {
        for (const key in originalUser) {
          flags.push(originalUser[key] === this.user[key]);
        }
        if (flags.every(el => el)) {
          return of(true);
        }
        return this.dialogService.confirm('Discard changes?');
      })
    );
  }
}
