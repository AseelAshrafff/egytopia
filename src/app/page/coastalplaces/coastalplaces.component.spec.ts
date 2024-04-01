import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoastalplacesComponent } from './coastalplaces.component';

describe('CoastalplacesComponent', () => {
  let component: CoastalplacesComponent;
  let fixture: ComponentFixture<CoastalplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoastalplacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoastalplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
