// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// App Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskEntryComponent } from './task-entry/task-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
