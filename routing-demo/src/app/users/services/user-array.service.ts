import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const userList: Array<User> = [
  new User(1, 'Anna', 'Borisova'),
  new User(2, 'Boris', 'Vlasov'),
  new User(3, 'Gennadiy', 'Dmitriev')
];

const userListObservable: Observable<Array<User>> = of(userList);

@Injectable({
  providedIn: 'root'
})
export class UserArrayService {
  constructor() { }

  getUsers(): Observable<User[]> {
    return userListObservable;
  }

  getUser(id: string | number): Observable<User> {
    return this.getUsers().pipe(
      map((users: Array<User>) => users.find(user => user.id === +id)),
      catchError(err => throwError('Error in getUser method'))
    );
  }

  addUser(user: User): void {
    userList.push(user);
  }

  updateUser(user: User): void {
    const i = userList.findIndex(u => u.id === user.id);

    if (i > -1) {
      userList.splice(i, 1, user);
    }
  }
}
