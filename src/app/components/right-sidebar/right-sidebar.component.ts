import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {

  openDrawer = false;

  get drawerStyles() {
    return {
      'max-width': this.openDrawer ? '367.25px' : '0',
      'width': this.openDrawer ? '367.25px' : '0',
      'left': this.openDrawer ? '0' : '-367.25px',
      'transition': 'max-width 0.3s, width 0.3s, left 0.3s',
    };
  }

  constructor(){}

  toggleDrawer(){
    this.openDrawer = !this.openDrawer;
  }

}
