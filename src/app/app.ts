import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { TaskList } from "./feature/task-manager/components/task-list/task-list";
import { NewTask } from "./feature/task-manager/components/new-task/new-task";

@Component({
  selector: 'app-root',
  imports: [Header, TaskList, NewTask],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
