import { TaskStatus } from './task.enum';

export interface Task {
  id: number;
  title: string;
  details: string;
  status: TaskStatus;
}
