import { Component, OnInit } from '@angular/core';
import { UserArrayService } from '../../services/user-array.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;
  private editedUser: User;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();

    this.route.paramMap
    .pipe(
      switchMap((params: Params) => this.userArrayService.getUser(+params.get('editedUserID')))
    )
    .subscribe(
      (user: User) => {
        this.editedUser = {...user};
        console.log('Last time you edited user ${JSON.stringify(this.editedUser)}');
      },
      err => console.log(err)
    );
  }

  onEditUser(user: User): void {
    const link = ['/users/edit', user.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', user.id];
    // this.router.navigate(link, {relativeTo: this.route});
  }

  isEdited(user: User) {
    if (this.editedUser) {
      return user.id === this.editedUser.id;
    }
    return false;
  }
}
