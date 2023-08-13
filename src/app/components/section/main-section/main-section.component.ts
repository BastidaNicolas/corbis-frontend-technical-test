import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  objectives = [];
  perspectives = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getObjectives().subscribe({
      next: (data) => {
        this.objectives = data;
        console.log('getObjectives', data);
      },
      error: (error) => {
        console.error('Error fetching data in component:', error);
      },
    });
    this.apiService.getPerspectives().subscribe({
      next: (data) => {
        this.perspectives = data;
        console.log('getPerspectives', data);
      },
      error: (error) => {
        console.error('Error fetching data in component:', error);
      },
    });
  }
}
