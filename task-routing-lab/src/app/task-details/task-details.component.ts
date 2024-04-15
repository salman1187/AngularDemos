import { Component, OnInit } from '@angular/core';
import { ITask } from '../../Models/ITask';
import { ActivatedRoute, OutletContext, RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{
  task:ITask|undefined = {taskId: 0, title: '', description: '', dueDate: new Date()};

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    const tid = this.route.snapshot.paramMap.get("id");

    if (tid !== null) {
        this.task = this.taskService.getTaskById(parseInt(tid, 10));
    } else {
        console.error("ID is null.");
    }
  }
  deleteTask() {
    if (this.task?.taskId !== undefined) {
      this.taskService.deleteTask(this.task.taskId);
      this.router.navigateByUrl('/tasks');
    } else {
      console.error("Task ID is undefined.");
    }
  }
  
  

}
