import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperHotelComponent } from './upper-hotel.component';

describe('UpperHotelComponent', () => {
  let component: UpperHotelComponent;
  let fixture: ComponentFixture<UpperHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
