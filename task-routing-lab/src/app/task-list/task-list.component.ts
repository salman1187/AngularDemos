import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { ITask } from '../../Models/ITask';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  allTasks:ITask[] = [];

  constructor(private taskService: TaskService){
    this.allTasks = taskService.getTasks();
  }
  getTimeLeft(task: ITask): { timeLeft: string; overdue: boolean } {
    const dueDate = new Date(task.dueDate);
    const currentTime = new Date();
    const timeDiff = dueDate.getTime() - currentTime.getTime();
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysLeft < 0) {
      return { timeLeft: `Time's Up!`, overdue: true };
    } else {
      return { timeLeft: `${daysLeft} days left`, overdue: false };
    }
  }
}
