import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMrgComponent } from './device-mrg.component';

describe('DeviceMrgComponent', () => {
  let component: DeviceMrgComponent;
  let fixture: ComponentFixture<DeviceMrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
