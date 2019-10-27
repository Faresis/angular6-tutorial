import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskModel } from './../../models/task.model';

import * as TasksActions from './../../../core/+store/tasks/tasks.actions';
import { Store, select } from '@ngrx/store';
import { AppState, TasksState } from './../../../core/+store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasksState$: Observable<TasksState>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.tasksState$ = this.store.pipe(select('tasks'));

    this.store.dispatch(new TasksActions.GetTasks());
  }

  onCreateTask() {
    const link = ['/add'];
    this.router.navigate(link);
  }

  onCompleteTask(task: TaskModel): void {
    this.store.dispatch(new TasksActions.DoneTask(task));
  }

  onEditTask(task: TaskModel): void {
    const link = ['/edit', task.id];
    this.router.navigate(link);
  }

  onDeleteTask(task: TaskModel) {
    this.store.dispatch(new TasksActions.DeleteTask(task));
  }
}

