import { Component, Input, OnInit } from '@angular/core';
import { OpenDrawerService } from 'src/app/services/open-drawer/open-drawer.service';

interface Perspectives {
  id: number;
  name: string;
}
interface Objectives {
  id: number;
  code: string;
  owner: string;
  name: string;
  description: string;
  perspective: Perspectives;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() perspectives: Perspectives[] = [];
  @Input() objectives: Objectives[] = [];
  @Input() searchValue: string = "";
  isDrawerOpen: boolean = false;
  active = 1;
  page = 15;

  constructor(private openDrawerService: OpenDrawerService) {}

  ngOnInit() {
    this.openDrawerService.isDrawerOpen$.subscribe((isOpen) => {
      this.isDrawerOpen = isOpen;
    });
  }
}
