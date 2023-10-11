import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFormComponent } from './materia-form.component';

describe('MateriaFormComponent', () => {
  let component: MateriaFormComponent;
  let fixture: ComponentFixture<MateriaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaFormComponent]
    });
    fixture = TestBed.createComponent(MateriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
