import {
  OnInit,
  AfterViewInit,
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskService } from './services/task.service'; // Import your service here
import { Task } from './models/task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, AfterViewInit {
  // @ViewChildren(TaskCreateComponent) taskCreateComponents!: QueryList<TaskCreateComponent>;
  @ViewChild(TaskCreateComponent) taskCreateComponent!: TaskCreateComponent;
  taskCreateVisible = false;
  taskAddVisible = true;

  tasks: Task[] = [];

  taskSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });

    if (this.taskCreateComponent) {
      this.taskCreateComponent.cancel.subscribe(() => {
        console.log(`toggleTaskAddVisibility() was run`);
        this.toggleTaskAddVisibility();
      });
    }
  }

  constructor(private taskService: TaskService) {}

  ngAfterViewInit() {}

  fetchTasks() {
    this.taskService.getTasks().subscribe(
      (data) => (this.tasks = data),
      (error) => console.error(error)
    );
  }

  toggleTaskAddVisibility() {
    this.taskCreateVisible = !this.taskCreateVisible;
    this.taskAddVisible = !this.taskAddVisible;
  }

  onCancel() {
    console.log(`onCancel was run`);
    this.toggleTaskAddVisibility();
  }

  taskClicked = false;
  selectedTask!: Task;

  onTaskClicked(task: Task) {
    this.taskClicked = true;
    this.selectedTask = task;
  }
}
