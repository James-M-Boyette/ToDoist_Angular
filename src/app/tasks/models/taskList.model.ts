import { Task } from './task.model';

export interface TaskList {
  [key: string]: Task;
  [key: number]: Task;
}