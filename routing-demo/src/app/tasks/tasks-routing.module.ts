import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent, TaskFormComponent } from '.';

const routes: Routes = [
  {
    path: 'home',
    component: TaskListComponent,
    data: {
      title: 'Task Manager',
      meta: [{
        name: 'description',
        content: 'Task Manager Application. This is an ASP application'
      },
      {
        name: 'keywords',
        content: 'Angular tutorial, SPA Application, Routing'
      }]
    }
  },
  {
    path: 'edit/:taskId',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }

