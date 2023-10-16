Yes, I want to add the following functionality:
I want, whenever the user clicks a 'task' in the 'task-list' element, to replace that specific task in the dom with the task-create component. Eventually, I'll want to populate the task-create component with this tasks data so that the data can be edited. So, to sum-up, the user sees any tasks they've saved in a list, and I want them to be able to click on a given task, see the 'task-create' component appear at the task's position in the list, and allow the user to edit that task. 

To start, here is my parent 'task' .html:
```
<div class="flex flex-column justify-content-center">
  <div class="flex">
    <div class="flex-auto">
      <app-task-list>The List of Tasks Loads here ...</app-task-list>
    </div>
  </div>
  <div class="flex">
    <div class="flex-auto" *ngIf="taskAddVisible">
      <app-task-add  (click)="toggleTaskAddVisibility()">The Task Add Component Loads here ...</app-task-add>
    </div>
  </div>
  <div class="flex">
    <div class="flex-auto" *ngIf="taskCreateVisible">
      <app-task-create (cancel)="onCancel()">The Task Entry Component Loads here ...</app-task-create>
    </div>
  </div>
</div>```
And this is my task-list .html:
```
<div id='form-wrapper' class="surface-card w-full lg:w-6" style="margin:auto !important">
  <form [formGroup]="taskForm">
    <div class="p-grid p-nogutter">
      <div class="p-col">
        <div *ngFor="let task of tasks" class="pt-2">
          <div class="card">
            <div class="p-grid">
              <div class="p-col">
                <div id='task-title' class="p-row p-checkbox-circle pb-3 align-items-center">
                  <p-checkbox formControlName="{{ task.title }}" value="{{ task.title }}" inputId="{{ task.title }}"
                  class="p-checkbox-icon p-circle p-checkbox-rounded" ></p-checkbox>
                  <label class="ml-4" for="{{ task.title }}">{{ task.title }}</label>
                </div>
                <div class="p-row">
                  <div id='task-description'(click)="toggleDescription(task)" class="ml-6 p-text-left pb-2">
                    <span *ngIf="!showFullDescription[task.title]">
                      {{ task.description.split('\n')[0] }}
                      <span *ngIf="task.description.split('\n').length > 1">...</span>
                    </span>
                    <pre *ngIf="showFullDescription[task.title]">{{ task.description }}</pre>
                  </div>
                  <p-divider></p-divider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>```