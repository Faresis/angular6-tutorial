import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TasksActions from './tasks.actions';

import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap } from 'rxjs/operators';
import { TaskModel } from '../../../tasks/models/task.model';

import { TaskPromiseService } from './../../../tasks/services';

@Injectable()
export class TasksEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private taskPromiseService: TaskPromiseService
  ) {
    console.log('[TASKS EFFECTS]');
  }

  @Effect()
  getTasks$: Observable<Action> = this.actions$.pipe(
    ofType<TasksActions.GetTasks>(TasksActions.TasksActionTypes.GET_TASKS),
    switchMap((action: TasksActions.GetTasks) =>
      this.taskPromiseService.getTasks()
        .then(tasks => new TasksActions.GetTasksSuccess(tasks))
        .catch(err => new TasksActions.GetTasksError(err))
    )
  );

  @Effect()
  getTask$: Observable<Action> = this.actions$.pipe(
    ofType<TasksActions.GetTask>(TasksActions.TasksActionTypes.GET_TASK),
    pluck('payload'),
    switchMap(payload => 
      this.taskPromiseService.getTask(+payload)
        .then(task => new TasksActions.GetTaskSuccess(task))
        .catch(err => new TasksActions.GetTaskError(err))
    )
  );

  @Effect()
  updateTask$: Observable<Action> = this.actions$.pipe(
    ofType<TasksActions.UpdateTask>(TasksActions.TasksActionTypes.UPDATE_TASK),
    pluck('payload'),
    concatMap((payload: TaskModel) => 
      this.taskPromiseService.updateTask(payload)
        .then(task => {
          this.router.navigate(['/home']);
          return new TasksActions.UpdateTaskSuccess(task);
        })
        .catch(err => new TasksActions.UpdateTaskError(err))
    )
  );
}

