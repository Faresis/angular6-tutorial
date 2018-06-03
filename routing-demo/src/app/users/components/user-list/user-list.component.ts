import { Component, OnInit } from '@angular/core';
import { UserArrayService } from '../../services/user-array.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();
  }

  onEditUser(user: User): void {
    const link = ['/users/edit', user.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', user.id];
    // this.router.navigate(link, {relativeTo: this.route});
  }
}
