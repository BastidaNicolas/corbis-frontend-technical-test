import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { OpenDrawerService } from 'src/app/services/open-drawer/open-drawer.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
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

  constructor(
    private apiService: ApiService,
    private openDrawerService: OpenDrawerService
  ) {}

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
    this.openDrawerService.isDrawerOpen$.subscribe((isOpen) => {
      this.openDrawer = isOpen;
    });
  }

  toggleDrawer() {
    this.openDrawerService.toggleDrawer();
  }
}
