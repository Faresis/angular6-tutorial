import { Component, OnInit } from '@angular/core';
import { UserArrayService } from '../../services/user-array.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private userArrayService: UserArrayService
  ) { }

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();
  }
}
