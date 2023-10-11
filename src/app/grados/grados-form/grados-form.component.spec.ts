import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosFormComponent } from './grados-form.component';

describe('GradosFormComponent', () => {
  let component: GradosFormComponent;
  let fixture: ComponentFixture<GradosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosFormComponent]
    });
    fixture = TestBed.createComponent(GradosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
