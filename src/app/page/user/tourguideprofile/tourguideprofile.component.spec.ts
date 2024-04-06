import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideprofileComponent } from './tourguideprofile.component';

describe('TourguideprofileComponent', () => {
  let component: TourguideprofileComponent;
  let fixture: ComponentFixture<TourguideprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourguideprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourguideprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
