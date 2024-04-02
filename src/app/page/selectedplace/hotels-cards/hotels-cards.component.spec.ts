import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsCardsComponent } from './hotels-cards.component';

describe('HotelsCardsComponent', () => {
  let component: HotelsCardsComponent;
  let fixture: ComponentFixture<HotelsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
