import { TasksState } from './tasks/tasks.state';
import { UsersState } from './users/users.state';

export interface AppState {
  tasks: TasksState;
  users: UsersState;
}

