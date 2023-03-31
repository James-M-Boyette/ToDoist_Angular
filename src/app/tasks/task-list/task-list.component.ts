import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { throwError } from 'rxjs';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskForm!: FormGroup;
  // showFullDescription = false;
  showFullDescription: { [key: string]: boolean } = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.taskForm = new FormGroup({});
    this.tasks.forEach((task) => {
      const control = new FormControl(false);
      this.taskForm.addControl(task.title, control);
    });
  }

  // toggleDescription(): void {
  //   this.showFullDescription = !this.showFullDescription;
  // }
  toggleDescription(task: Task) {
    this.showFullDescription[task.title] = !this.showFullDescription[task.title];
  }

  deleteSelectedTasks(): void {
    const selectedTasks = Object.keys(this.taskForm.value)
      .filter((taskTitle) => this.taskForm.value[taskTitle])
      .map((taskTitle) => this.tasks.find((task) => task.title === taskTitle));
  
    selectedTasks.forEach((task) => {
      if (task) {
        this.taskService.deleteTask(task);
      } else {
        throw new Error('No task was found');
      }
    });
  
    this.tasks = this.taskService.getTasks();
    this.taskForm.reset();
  }
}
