import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: User;

  @Output() editUser: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  onEditUser() {
    this.editUser.emit(this.user);
  }
}
