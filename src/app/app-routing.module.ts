import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesIndexComponent } from './Especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './Especialidades/especialidades-form/especialidades-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
