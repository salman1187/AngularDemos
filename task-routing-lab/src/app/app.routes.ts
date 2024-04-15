import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [

    {path: 'tasks', component: TaskListComponent},
    {path: '', component: TaskListComponent},
    {path: 'task/:id', component: TaskDetailsComponent},
    {path: 'editTask/:id', component: TaskFormComponent},
    {path: 'editTask', component: TaskFormComponent},
    {path: 'createTask', component: CreateTaskComponent}
];
