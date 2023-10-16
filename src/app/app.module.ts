// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG Imports
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { AnimateModule } from 'primeng/animate';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';

// App Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskService } from './tasks/services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskListComponent,
    TasksComponent,
    TaskAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StyleClassModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    AnimateModule,
    ImageModule,
    CardModule,
    RippleModule,
    DividerModule,
    DataViewModule,
  ],
  providers: [TaskService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
