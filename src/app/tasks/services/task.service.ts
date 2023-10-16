import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Task } from '../models/task.model';
import { userTasks } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = Object.values(userTasks);
  private apiURL = 'http://localhost:8850/tasks';

  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    []
  );
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchTasks();
  }

  private fetchTasks() {
    this.http.get<Task[]>(this.apiURL).subscribe(
      (tasks) => this.tasksSubject.next(tasks),
      (error) => console.error('Error fetching tasks:', error)
    );
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiURL}/${id}`);
  }

  addNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task).pipe(
      tap((newTask: Task) => {
        const currentTasks = this.tasksSubject.getValue();
        this.tasksSubject.next([...currentTasks, newTask]);
      })
    );
  }

  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiURL}/${id}`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
