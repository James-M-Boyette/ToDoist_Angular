import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  onAddTaskButtonClick(){
    console.log(`'Add Task' button clicked`);
  }
}