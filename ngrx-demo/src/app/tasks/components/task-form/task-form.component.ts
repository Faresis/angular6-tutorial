import { Store, select } from '@ngrx/store';
import { AppState, getSelectedTask } from './../../../core/+store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as TasksActions from './../../../core/+store/tasks/tasks.actions';

import { Observable, Subscription } from 'rxjs';

import { TaskModel } from './../../models/task.model';
import { AutoUnsubscribe } from './../../../core';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
@AutoUnsubscribe()
export class TaskFormComponent implements OnInit {
  task: TaskModel;
  private sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.sub = this.store.pipe(select(getSelectedTask))
    .subscribe(task => {
      this.task = task ? task : new TaskModel();
    });
    this.route.paramMap.subscribe(params => {
      const id = params.get('taskID');
      if (id) {
        this.store.dispatch(new TasksActions.GetTask(+id));
      }
    });
  }

  onSaveTask() {
    const task = { ...this.task };
    if (task.id) {
      this.store.dispatch(new TasksActions.UpdateTask(task));
    } else {
      this.store.dispatch(new TasksActions.CreateTask(task));
    }
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
