import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskArrayService } from '../../services/task-array.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor(
    private taskArrayService: TaskArrayService
  ) { }

  ngOnInit() {
    this.getTasks().catch(err => console.log(err));
  }

  onCompleteTask(task: Task) {
    this.taskArrayService.completeTask(task);
  }

  onEditTask(task: Task) {
    this.taskArrayService.updateTask(task);
  }

  private async getTasks() {
    this.tasks = await this.taskArrayService.getTasks();
  }
}
