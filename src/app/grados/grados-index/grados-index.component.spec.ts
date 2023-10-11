import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosIndexComponent } from './grados-index.component';

describe('GradosIndexComponent', () => {
  let component: GradosIndexComponent;
  let fixture: ComponentFixture<GradosIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosIndexComponent]
    });
    fixture = TestBed.createComponent(GradosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
