import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from './task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
 
  getTitleCount(): number {
    return this.taskForm.get('title')?.value?.length
  }
  getDescriptionCount(): number {
    return this.taskForm.get('description')?.value?.length
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
