import { Injectable } from '@angular/core';
import { ITask } from '../Models/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITask[] = [];
  
  constructor() { 
    this.tasks = [
      {
        taskId: 1,
        title: "Task 1",
        description: "Description of Task 1",
        dueDate: new Date("2024-04-20")
      },
      {
        taskId: 2,
        title: "Task 2",
        description: "Description of Task 2",
        dueDate: new Date("2024-04-25")
      },
      {
        taskId: 3,
        title: "Task 3",
        description: "Description of Task 3",
        dueDate: new Date("2024-05-01")
      },
      {
        taskId: 4,
        title: "Task 4",
        description: "Description of Task 4",
        dueDate: new Date("2024-05-10")
      },
      {
        taskId: 5,
        title: "Task 5",
        description: "Description of Task 5",
        dueDate: new Date("2024-05-15")
      }
    ];  
  }
  addTask(newTask: ITask): void {
    this.tasks.push(newTask);
  }
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.taskId !== taskId);
  }
  editTask(taskId: number, updatedTask: ITask): void {
    const index = this.tasks.findIndex(task => task.taskId === taskId);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
  getTasks() {
    return this.tasks;
  }
  getTaskById(id: number) {
    return this.tasks.find(t => t.taskId == id);
  }
}
