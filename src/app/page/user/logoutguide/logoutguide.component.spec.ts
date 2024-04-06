import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutguideComponent } from './logoutguide.component';

describe('LogoutguideComponent', () => {
  let component: LogoutguideComponent;
  let fixture: ComponentFixture<LogoutguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
