import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedplaceComponent } from './selectedplace.component';

describe('SelectedplaceComponent', () => {
  let component: SelectedplaceComponent;
  let fixture: ComponentFixture<SelectedplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
