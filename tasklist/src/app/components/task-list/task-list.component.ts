import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  selectTask(task: Task) {
      this.tasks.forEach(task => {
        task.selected = false;
      });
      task.selected = true;
  }

  selectedTask() {
    return this.tasks.find(task => task.selected);
  }
}
