import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  @Output() completeTask = new EventEmitter<Task>();
  @Output() editTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onCompleteTask() {
    this.completeTask.emit(this.task);
  }

  onEditTask() {
    this.editTask.emit(this.task);
  }
}
