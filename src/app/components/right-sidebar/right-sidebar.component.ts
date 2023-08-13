import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent {
  comments = [];
  openDrawer = false;

  get drawerStyles() {
    return {
      'max-width': this.openDrawer ? '367.25px' : '0',
      width: this.openDrawer ? '367.25px' : '0',
      left: this.openDrawer ? '0' : '-367.25px',
      transition: 'max-width 0.2s, width 0.2s, left 0.2s',
    };
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getComments().subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (error) => {
        console.error('Error fetching data in component:', error);
      },
    });
  }

  toggleDrawer() {
    this.openDrawer = !this.openDrawer;
  }
}
