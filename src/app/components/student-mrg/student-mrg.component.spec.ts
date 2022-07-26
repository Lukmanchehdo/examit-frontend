import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMrgComponent } from './student-mrg.component';

describe('StudentMrgComponent', () => {
  let component: StudentMrgComponent;
  let fixture: ComponentFixture<StudentMrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
