import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TasksActions from './tasks.actions';

import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { TaskPromiseService } from './../../../tasks/services';

@Injectable()
export class TasksEffects {
  constructor(
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
}

