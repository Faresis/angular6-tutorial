import { select } from '@ngrx/store';
import { getTasksLoaded } from './../../core/+store';
import * as TasksActions from './../../core/+store/tasks/tasks.actions';
import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

export function checkStore(store): Observable<boolean> {
  return store.pipe(
    select(getTasksLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(new TasksActions.GetTasks());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}

