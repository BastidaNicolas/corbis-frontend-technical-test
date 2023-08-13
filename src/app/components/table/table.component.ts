import { Component, Input } from '@angular/core';

interface Perspectives {
  id: number;
  name: string;
}
interface Objectives {
  id: number;
  code: string;
  name: string;
  description: string;
  perspective: Perspectives;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() perspectives: Perspectives[] = [];
  @Input() objectives: Objectives[] = [];
  active = 1;
}
