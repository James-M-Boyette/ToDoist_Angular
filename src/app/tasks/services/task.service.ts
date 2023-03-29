import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { userTasks } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = Object.values(userTasks);

  constructor() {}

  getTasks(): Task[] {
    console.log(`TaskService.getTasks(): ${this.tasks}`)
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

  updateTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks[index] = task;
    }
  }
}


