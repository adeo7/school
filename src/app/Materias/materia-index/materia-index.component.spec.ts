import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaIndexComponent } from './materia-index.component';

describe('MateriaIndexComponent', () => {
  let component: MateriaIndexComponent;
  let fixture: ComponentFixture<MateriaIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaIndexComponent]
    });
    fixture = TestBed.createComponent(MateriaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
