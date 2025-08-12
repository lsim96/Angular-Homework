import { Injectable, signal } from '@angular/core';
import { Task } from '../../feature/task-manager/models/task.model';
import { tasksMock } from '../../feature/task-manager/task-manager.mock';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  loadTasks() {
    this.tasks.set(tasksMock);

    console.log(this.tasks());
  }
}
