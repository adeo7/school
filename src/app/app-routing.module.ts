import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesIndexComponent } from './Especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './Especialidades/especialidades-form/especialidades-form.component';
import { ProfesoresIndexComponent } from './profesores/profesores-index/profesores-index.component';
import { ProfesoresFormComponent } from './profesores/profesores-form/profesores-form.component';
import { GradosIndexComponent } from './grados/grados-index/grados-index.component';
import { GradosFormComponent } from './grados/grados-form/grados-form.component';
import { MateriaIndexComponent } from './Materias/materia-index/materia-index.component';
import { MateriaFormComponent } from './Materias/materia-form/materia-form.component';
import { AprendizIndexComponent } from './Aprendices/aprendiz-index/aprendiz-index.component';
import { AprendizFormComponent } from './Aprendices/aprendiz-form/aprendiz-form.component';

const routes: Routes = [
  {
    path: 'especialidades',
    component: EspecialidadesIndexComponent
  },
  {
    path: 'especialidades/new',
    component: EspecialidadesFormComponent
  },
  {
    path:'especialidades/edit/:id',
    component: EspecialidadesFormComponent
  },
  {
    path: 'profesores',
    component: ProfesoresIndexComponent
  },
  {
    path: 'profesores/new',
    component: ProfesoresFormComponent
  },
  {
    path:'profesores/edit/:id',
    component: ProfesoresFormComponent
  },
  {
    path:'grados',
    component: GradosIndexComponent
  },
  {
    path:'grados/new',
    component: GradosFormComponent
  },
  {
    path:'grados/edit/:id',
    component: GradosFormComponent
  },
  {
    path:'materia',
    component: MateriaIndexComponent
  },
  {
    path:'materia/new',
    component: MateriaFormComponent
  },
  {
    path:'materia/edit/:id',
    component: MateriaFormComponent
  },
  {
    path:'aprendiz',
    component: AprendizIndexComponent
  },
  {
    path:'aprendiz/new',
    component: AprendizFormComponent
  },
  {
    path:'aprendiz/edit/:id',
    component: AprendizFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
