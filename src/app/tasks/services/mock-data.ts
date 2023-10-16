import { Task } from '../models/task.model';
import { TaskList } from '../models/taskList.model';

// export const userTasks: { [key: string]: Task } = {
export const userTasks: TaskList = {
  t0001: {
    userId: 'u0001',
    title: 'Do Sunday Chores',
    description:
      '- Clean the stairs\n- Clean the bathroom\n- Clean the kitchen',
    dueDate: new Date('2023-04-02'),
  },
  t0002: {
    userId: 'u0001',
    title: 'Take care of the Garden',
    description: '- Water the plants\n- Add top soil\n- Harvest vegetables',
    dueDate: new Date('2023-04-01'),
  },
  t0003: {
    userId: 'u0001',
    title: 'Cook for the week',
    description: '- Prep vegetables\n- Brown meat\n- Combine & braise, 6 hrs',
    dueDate: new Date('2023-04-02'),
  },
};
