import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenDrawerService {
  private isDrawerOpenSubject = new BehaviorSubject<boolean>(false);
  isDrawerOpen$: Observable<boolean> = this.isDrawerOpenSubject.asObservable();

  constructor() {}

  toggleDrawer() {
    this.isDrawerOpenSubject.next(!this.isDrawerOpenSubject.value);
  }
}
