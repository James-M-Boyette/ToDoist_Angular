// import { Component, OnInit, ViewChild } from '@angular/core';
// import { TaskCreateComponent } from './task-create/task-create.component';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.scss']
// })
// export class TasksComponent implements OnInit {
//   @ViewChild(TaskCreateComponent) taskCreateComponent!: TaskCreateComponent;
//   taskCreateVisible = false
//   taskAddVisible = true

//   ngOnInit() {
//     // this.taskCreateComponent.cancel.subscribe(() => {
//     //   this.toggleTaskAddVisibility();
//     // });
//   }

//   ngAfterViewInit() {
//     this.taskCreateComponent.cancel.subscribe(() => {
//       this.toggleTaskAddVisibility();
//     });
//   }

//   toggleTaskAddVisibility() {
//     this.taskCreateVisible = !this.taskCreateVisible
//     this.taskAddVisible = !this.taskAddVisible
//   }

//   onCancel() {
//     console.log(`onCancel was run`);
//     this.toggleTaskAddVisibility();
//   }
  
// }

import { OnInit, AfterViewInit, Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TaskCreateComponent } from './task-create/task-create.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {
  // @ViewChildren(TaskCreateComponent) taskCreateComponents!: QueryList<TaskCreateComponent>;
  @ViewChild(TaskCreateComponent) taskCreateComponent!: TaskCreateComponent;
  taskCreateVisible = false;
  taskAddVisible = true;

  
  ngOnInit() {
    // Had to wrap this in a conditional to satisfy TypeScript, which kept complaining that 'cancel' was undefined
    if (this.taskCreateComponent) {
      this.taskCreateComponent.cancel.subscribe(() => {
        console.log(`toggleTaskAddVisibility() was run`);
        this.toggleTaskAddVisibility();
      });
    }
  }

  ngAfterViewInit() {
     // this.taskCreateComponents.forEach(component => {
    //   component.cancel.subscribe(() => {
          // this.onCancel();
    //     this.toggleTaskAddVisibility();
    //   });
    // });
  }

  toggleTaskAddVisibility() {
    this.taskCreateVisible = !this.taskCreateVisible;
    this.taskAddVisible = !this.taskAddVisible;
  }

  onCancel() {
    console.log(`onCancel was run`);
    this.toggleTaskAddVisibility();
  }
}
