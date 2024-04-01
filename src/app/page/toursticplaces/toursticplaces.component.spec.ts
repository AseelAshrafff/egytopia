import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursticplacesComponent } from './toursticplaces.component';

describe('ToursticplacesComponent', () => {
  let component: ToursticplacesComponent;
  let fixture: ComponentFixture<ToursticplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToursticplacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursticplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
