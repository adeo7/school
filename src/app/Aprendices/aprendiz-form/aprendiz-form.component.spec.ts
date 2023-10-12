import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizFormComponent } from './aprendiz-form.component';

describe('AprendizFormComponent', () => {
  let component: AprendizFormComponent;
  let fixture: ComponentFixture<AprendizFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprendizFormComponent]
    });
    fixture = TestBed.createComponent(AprendizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
