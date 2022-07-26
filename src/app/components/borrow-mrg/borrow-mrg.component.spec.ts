import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowMrgComponent } from './borrow-mrg.component';

describe('BorrowMrgComponent', () => {
  let component: BorrowMrgComponent;
  let fixture: ComponentFixture<BorrowMrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowMrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowMrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
