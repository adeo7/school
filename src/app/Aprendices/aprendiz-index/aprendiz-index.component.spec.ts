import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizIndexComponent } from './aprendiz-index.component';

describe('AprendizIndexComponent', () => {
  let component: AprendizIndexComponent;
  let fixture: ComponentFixture<AprendizIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprendizIndexComponent]
    });
    fixture = TestBed.createComponent(AprendizIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
