import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { ITask } from '../../Models/ITask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  task: ITask = { taskId: 0, title: '', description: '', dueDate: new Date() };
  isNewTask: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const tid = this.route.snapshot.paramMap.get("id");

    if (tid !== null) {
      const foundTask = this.taskService.getTaskById(parseInt(tid, 10));
      if (foundTask !== undefined) {
        this.task = foundTask;
        this.isNewTask = false;
      } else {
        console.error("Task not found for ID:", tid);
      }
    } else {
      console.error("ID is null. Creating a new task.");
    }
  }

  saveTask() {
    if (this.isNewTask) {
      const tasksLength = this.taskService.getTasks().length + 1;
      this.task.taskId = tasksLength;
      this.taskService.addTask(this.task);
    } else {
      this.taskService.editTask(this.task.taskId, this.task);
    }
    this.router.navigateByUrl('/tasks');
  }
}