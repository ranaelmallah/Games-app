import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedLastMonthComponent } from './released-last-month.component';

describe('ReleasedLastMonthComponent', () => {
  let component: ReleasedLastMonthComponent;
  let fixture: ComponentFixture<ReleasedLastMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleasedLastMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasedLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
