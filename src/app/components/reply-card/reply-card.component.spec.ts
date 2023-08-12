import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCardComponent } from './reply-card.component';

describe('ReplyCardComponent', () => {
  let component: ReplyCardComponent;
  let fixture: ComponentFixture<ReplyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplyCardComponent]
    });
    fixture = TestBed.createComponent(ReplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
