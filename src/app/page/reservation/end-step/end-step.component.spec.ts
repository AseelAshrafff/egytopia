import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndStepComponent } from './end-step.component';

describe('EndStepComponent', () => {
  let component: EndStepComponent;
  let fixture: ComponentFixture<EndStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
