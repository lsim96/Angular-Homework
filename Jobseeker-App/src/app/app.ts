import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { JobList } from './feature/job-finder/components/job-list/job-list';
import { InfoPanel } from './feature/job-finder/components/info-panel/info-panel';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
