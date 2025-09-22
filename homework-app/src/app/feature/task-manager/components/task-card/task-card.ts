import { Component, inject, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../../../core/services/task-service';
import { LoggerService } from '../../../../core/services/logger-service';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-task-card',
  imports: [Button],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input.required<Task>();

  taskService = inject(TaskService);
  loggerService = inject(LoggerService);

  tasks = this.taskService.tasks;

  onStatusClick(task: Task, taskStatus: string) {
    this.taskService.updateTaskStatus(task.id, taskStatus);
    this.loggerService.logAction(taskStatus);
  }
}
