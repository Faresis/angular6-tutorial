import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskListComponent]
})
export class AppModule { }
