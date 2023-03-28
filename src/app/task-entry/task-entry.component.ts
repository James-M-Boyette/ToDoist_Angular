import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from './task.model';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.scss']
})
export class TaskEntryComponent implements OnInit {
  fruits = ['apple', 'banana', 'orange'];
  taskForm!: FormGroup;

  // titleCount: number
 
  getTitleCount(): number {
    return this.taskForm.get('title')?.value?.length
  }
  getDescriptionCount(): number {
    return this.taskForm.get('description')?.value?.length
  }

  // Placeholders for the form
  titlePlaceholder = 'Enter task title';
  descriptionPlaceholder = 'Enter task title';
  taskDueDatePlaceholder = 'Enter task title';
  userProjects = [
    { projectName: 'Work' },
    { projectName: 'Chores' },
    { projectName: 'Hobby Time' },
  ];
  

  constructor() {
  }

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
  

  onSubmit(): void {
    console.log(`user's submission: `, this.taskForm);
    const userSubmission: Task = {
      title: this.taskForm.get('title')?.value,
      description: this.taskForm.get('description')?.value,
      dueDate: this.taskForm.get('dueDate')?.value,
    };
  }
}
