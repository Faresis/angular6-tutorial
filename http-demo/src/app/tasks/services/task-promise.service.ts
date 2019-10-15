import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TaskModel } from './../models/task.model';
import { TasksServicesModule } from '../tasks-services.module';

@Injectable({
  providedIn: TasksServicesModule
})
export class TaskPromiseService {
  private taskUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Promise<TaskModel[]> {
    return this.http
      .get(this.taskUrl)
      .toPromise()
      .then(response => response as TaskModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}

