import { TaskStatus } from './models/task.enum';
import { Task } from './models/task.model';

export const tasksMock: Task[] = [
  {
    id: 1,
    title: 'Buy groceries',
    details: 'Milk, bread, eggs, cheese, and fresh vegetables',
    status: TaskStatus.PENDING,
  },
  {
    id: 2,
    title: 'Finish Angular project',
    details: 'Implement the task management feature and fix styling issues',
    status: TaskStatus.PENDING,
  },
  {
    id: 3,
    title: 'Gym workout',
    details: 'Leg day: squats, lunges, and deadlifts',
    status: TaskStatus.COMPLETED,
  },
  {
    id: 4,
    title: 'Call plumber',
    details: 'Fix leaking kitchen sink before the weekend',
    status: TaskStatus.PENDING,
  },
  {
    id: 5,
    title: 'Read a book',
    details: 'Continue reading "Clean Code" by Robert C. Martin',
    status: TaskStatus.COMPLETED,
  },
];
