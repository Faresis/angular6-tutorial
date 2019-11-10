import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getTasksData } from './../../core/+store';
import * as RouterActions from './../../core/+store/router/router.actions';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { TasksServicesModule } from '../tasks-services.module';
import { checkStore } from './check-store.function';

@Injectable({
  providedIn: TasksServicesModule
})
export class TaskExistsGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('taskID');
        return this.hasTask(id);
      })
    );
  }

  private hasTask(id: number): Observable<boolean> {
    return this.store.pipe(
      select(getTasksData),
      map(tasks => !!tasks.find(task => task.id === id)),
      tap(result => {
        if (!result) {
          this.store.dispatch(new RouterActions.Go({ path: ['/home'] }));
        }
      }),
      take(1)
    );
  }
}

