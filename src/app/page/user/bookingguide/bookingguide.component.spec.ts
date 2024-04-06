import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingguideComponent } from './bookingguide.component';

describe('BookingguideComponent', () => {
  let component: BookingguideComponent;
  let fixture: ComponentFixture<BookingguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
