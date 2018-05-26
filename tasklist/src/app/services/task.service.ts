import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return [
      new Task("Task1", "Task1 detailed description"),
      new Task("Task2", "Task2 detailed description")
    ];
  }
}
