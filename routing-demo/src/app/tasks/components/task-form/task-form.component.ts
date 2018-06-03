import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskArrayService } from '../../services/task-array.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task;

  constructor(
    private taskArrayService: TaskArrayService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.task = new Task(null, '', null, null);

    this.route.paramMap
    .pipe(
      switchMap((params: Params) => this.taskArrayService.getTask(+params.get('taskId'))))
    .subscribe(
      task => this.task = {...task},
      err => console.log(err)
    )
  }

  onSaveTask() {
    const task = {...this.task};

    if (task.id) {
      this.taskArrayService.updateTask(task);
    }
    else {
      this.taskArrayService.addTask(task);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
