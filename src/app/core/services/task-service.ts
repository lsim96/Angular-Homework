import { LoggerService } from './logger-service';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../../feature/task-manager/models/task.model';
import { tasksMock } from '../../feature/task-manager/task-manager.mock';
import { TaskStatus } from '../../feature/task-manager/models/task.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  loggerService = inject(LoggerService);

  loadTasks() {
    this.tasks.set(tasksMock);
  }

  updateTaskStatus(taskId: number, taskStatus: string) {
    this.tasks.update((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) {
          return task;
        }
        if (taskStatus === 'PENDING') {
          return { ...task, status: TaskStatus.PENDING };
        } else if (taskStatus === 'COMPLETE') {
          return { ...task, status: TaskStatus.COMPLETED };
        }
        return task;
      }),
    );
  }

  addNewTask(taskTitle: string, taskDetails: string) {
    const list = this.tasks();
    const nextId = list.length ? Math.max(...list.map((t) => t.id)) + 1 : 1;

    const newTask: Task = {
      id: nextId,
      title: taskTitle,
      details: taskDetails,
      status: TaskStatus.PENDING,
    };
    console.log(newTask);

    this.tasks.update((prev) => [...prev, newTask]);

    this.loggerService.logAction(`New task added: {
      title: ${newTask.title}
      }`);
  }

  pendingTasks = computed(
    () => this.tasks().filter((el) => el.status === TaskStatus.PENDING).length,
  );

  completedTasks = computed(
    () =>
      this.tasks().filter((el) => el.status === TaskStatus.COMPLETED).length,
  );

  clearAllTasks() {
    this.tasks.set([]);
    this.loggerService.logAction('All tasks have been cleared!');
  }
}
