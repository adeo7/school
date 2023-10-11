import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesIndexComponent } from './Especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './Especialidades/especialidades-form/especialidades-form.component';
import { ProfesoresIndexComponent } from './profesores/profesores-index/profesores-index.component';
import { ProfesoresFormComponent } from './profesores/profesores-form/profesores-form.component';
import { GradosIndexComponent } from './grados/grados-index/grados-index.component';
import { GradosFormComponent } from './grados/grados-form/grados-form.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
