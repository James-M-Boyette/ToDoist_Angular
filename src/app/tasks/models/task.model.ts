// export interface Task {
//     title: string;
//     description: string;
//     dueDate: Date;
//   }

export interface Task {
  taskId?: string; // Making it optional for new Task objects that haven't been saved yet
  userId: string; // Assuming this will always be set, but make it optional if not
  parentTaskId?: string; // Optional because it's optional in the backend
  title: string;
  description: string;
  subTasks?: Task[] | null | undefined; // Optional because a task may or may not have sub-tasks
  dueDate?: Date | null | undefined; // Optional because it's optional in the backend
  completed?: boolean; // Optional because it has a default value in the backend
}
