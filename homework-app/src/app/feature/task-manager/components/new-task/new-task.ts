import { Component, inject } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { TaskService } from '../../../../core/services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [Button],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  taskService = inject(TaskService);
  taskTitle = '';
  taskDetails = '';

  taskAdded() {
    if (this.taskTitle === '' || this.taskDetails === '') {
      return;
    }

    this.taskService.addNewTask(this.taskTitle, this.taskDetails);

    const titleInput = document.getElementById('title') as HTMLInputElement;
    const detailsInput = document.getElementById('details') as HTMLInputElement;

    if (titleInput) titleInput.value = '';
    if (detailsInput) detailsInput.value = '';
  }

  titleChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.taskTitle = target.value;
  }

  detailsChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.taskDetails = target.value;
  }
}
