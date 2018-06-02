import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskArrayService } from '../../services/task-array.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task;

  constructor(
    private taskArrayService: TaskArrayService
  ) { }

  ngOnInit() {
    this.task = new Task(null, '', null, null);
  }

  onSaveTask() {
    const task = {...this.task};

    if (task.id) {
      this.taskArrayService.updateTask(task);
    }
    else {
      this.taskArrayService.addTask(task);
    }
  }

  goBack(): void {

  }
}
