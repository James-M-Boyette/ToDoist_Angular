import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  taskForm!: FormGroup;
  showFullDescription: { [key: string]: boolean } = {};

  private taskSubscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Initialize with an empty FormGroup
    this.taskForm = new FormGroup({});

    // Subscribe to the task list
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
      this.initTaskForm(this.tasks);
    });
  }

  private initTaskForm(tasks: Task[]): void {
    const controls: { [key: string]: FormControl } = {};

    tasks.forEach((task) => {
      controls[task.title] = new FormControl(false);
    });

    this.taskForm = new FormGroup(controls);
  }

  toggleDescription(task: Task) {
    this.showFullDescription[task.title] =
      !this.showFullDescription[task.title];
  }

  private fetchTasks(): void {
    this.taskSubscription = this.taskService.getTasks().subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
        this.initTaskForm(this.tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  addNewTask(newTask: Task): void {
    this.taskService.addNewTask(newTask).subscribe({
      next: () => {},
      error: (error) => {
        console.error('Error adding new task:', error);
      },
    });
  }

  deleteSelectedTasks(): void {
    const selectedTasksTitles = Object.keys(this.taskForm.value).filter(
      (taskTitle) => this.taskForm.value[taskTitle]
    );

    selectedTasksTitles.forEach((taskTitle) => {
      const task = this.tasks.find((t) => t.title === taskTitle);
      if (task && task.taskId) {
        this.taskService.deleteTask(task.taskId).subscribe(
          () => {
            // Handle successful deletion
          },
          (error) => {
            // Handle error
          }
        );
      }
    });

    // Refresh task list
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
    this.taskForm.reset();
  }

  toggleTaskCompletion(task: Task) {
    if (!task.taskId) {
      console.error('Task ID is undefined.');
      return;
    }

    task.completed = !task.completed;
    this.taskService
      .updateTaskCompleted(task.taskId, task.completed)
      .subscribe({
        next: () => {
          // Refresh the task list or update the UI as needed
        },
        error: (error) => {
          console.error('An error occurred:', error);
        },
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.taskSubscription.unsubscribe();
  }
}
