import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../services/task.service';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
  @Output() cancel = new EventEmitter<void>();

  getTitleCount(): number {
    return this.taskForm.get('title')?.value?.length;
  }
  getDescriptionCount(): number {
    return this.taskForm.get('description')?.value?.length;
  }

  // User's projects
  userProjects = [
    { projectName: 'Work' },
    { projectName: 'Chores' },
    { projectName: 'Hobby Time' },
  ];

  // Description touched
  descriptionTouched = false;
  setDescriptionTouched() {
    this.descriptionTouched = true;
    console.log('touched? ', this.descriptionTouched);
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(null, [
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
      description: new FormControl<Date | null>(null, [
        Validators.maxLength(16384),
      ]),
      dueDate: new FormControl(null),
      userProjects: new FormControl(null),
    });
  }

  get isTitleEmptyOrWhitespace(): boolean {
    const title = this.taskForm.get('title')?.value;
    return !title || !title.trim();
  }

  onCancel() {
    console.log(`CANCEL clicked!`);
    this.cancel.emit();
  }

  onSubmit(): void {
    // Validate form controls here if needed
    if (this.taskForm.valid) {
      const newTask: Task = {
        userId: 'u0001', // TODO: Replace with dynamic userId
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
        dueDate: this.taskForm.get('dueDate')?.value
          ? new Date(this.taskForm.get('dueDate')?.value)
          : null,
      };

      this.taskService.addNewTask(newTask).subscribe(
        (task) => {
          console.log('Task created:', task);
          // Add additional logic here, e.g., navigate to the task list or clear the form
        },
        (error) => {
          console.log('Error creating task:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
