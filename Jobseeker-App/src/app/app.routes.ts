import { JobList } from './feature/job-finder/components/job-list/job-list';
import { Routes } from '@angular/router';
import { Home } from './feature/job-finder/home/home';
import { NotFound } from './core/components/not-found/not-found';
import { Profile } from './feature/job-finder/profile/profile';
import { Company } from './feature/job-finder/company/company';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./feature/job-finder/components/job-list/job-list').then(
        (c) => c.JobList
      ),
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'company/:id',
    component: Company,
  },
  {
    path: '**',
    component: NotFound,
  },
];
