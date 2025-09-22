import { computed, inject, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/job-finder/models/jobs.model';
import { jobsMock } from '../../feature/job-finder/job-finder.mock';
import { Company } from '../../feature/job-finder/models/company.model';

@Injectable({
  providedIn: 'root',
})
export class JobSeekerService {
  jobs = signal<Job[]>([]);
  workTypeJobs = signal<Job[]>(jobsMock);
  selectedCompany = signal<Company>(null);

  sortDirection: 'asc' | 'desc' = 'desc';

  loadJobs() {
    this.jobs.set(jobsMock);
  }

  applyForJob(jobId: number) {
    this.jobs.update((prev) => {
      return prev.map((job) => {
        if (job.id !== jobId) {
          return job;
        }
        return { ...job, isApplied: true };
      });
    });
  }

  cancelJobApplication(jobId: number) {
    this.jobs.update((prev) => {
      return prev.map((job) => {
        if (job.id !== jobId) {
          return job;
        }
        return { ...job, isApplied: false };
      });
    });
  }

  sortBySalary(type: 'salary') {
    const fitleredJobs = [...this.jobs()];

    fitleredJobs.sort((a, b) => {
      if (type === 'salary') {
        return this.sortDirection === 'asc'
          ? a.startingSalary - b.startingSalary
          : b.startingSalary - a.startingSalary;
      }

      return 0;
    });

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.jobs.set(fitleredJobs);
  }

  sortByWorkType(workType?: string) {
    const filteredJobs =
      !workType || workType === 'Select'
        ? this.workTypeJobs()
        : this.workTypeJobs().filter((job) => job.workType === workType);

    this.jobs.set(filteredJobs);
  }

  companyDetails(id: number): Company | undefined {
    const job = this.jobs().find((job) => job.id === id);

    if (!job) return undefined;

    const company = {
      id: job.id,
      companyName: job.companyName,
      companyLogo: job.companyLogo,
      companyAddress: job.companyAddress,
      companyIndustry: job.companyIndustry,
      companyWebsite: job.companyWebsite,
    };

    this.selectedCompany.set(company);

    return company;
  }

  getCompanyById(id: number) {
    if (this.selectedCompany()) return;

    this.companyDetails(id);
  }

  totalJobs = computed(
    () => this.jobs().filter((job) => job.isApplied === false).length
  );

  appliedToJobs = computed(
    () => this.jobs().filter((job) => job.isApplied === true).length
  );
}
