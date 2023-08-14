import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

interface Objective {
  id: number;
  code: string;
  owner: string;
  name: string;
  description: string;
  perspective: Perspective;
}

interface Perspective {
  id: number;
  name: string;
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  objectives: Objective[] = [];
  perspectives: Perspective[] = [];
  searchText: string = '';
  selectedTab = 'perspectives';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getObjectives().subscribe({
      next: (data) => {
        this.objectives = data;
      },
      error: (error) => {
        console.error('Error fetching data in component:', error);
      },
    });
    this.apiService.getPerspectives().subscribe({
      next: (data) => {
        this.perspectives = data;
      },
      error: (error) => {
        console.error('Error fetching data in component:', error);
      },
    });
  }
}
