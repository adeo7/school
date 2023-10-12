import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { EspecialidadesIndexComponent } from './Especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './Especialidades/especialidades-form/especialidades-form.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresIndexComponent } from './profesores/profesores-index/profesores-index.component';
import { ProfesoresFormComponent } from './profesores/profesores-form/profesores-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GradosIndexComponent } from './grados/grados-index/grados-index.component';
import { GradosFormComponent } from './grados/grados-form/grados-form.component';
import { MateriaIndexComponent } from './Materias/materia-index/materia-index.component';
import { MateriaFormComponent } from './Materias/materia-form/materia-form.component';
import { AprendizIndexComponent } from './Aprendices/aprendiz-index/aprendiz-index.component';
import { AprendizFormComponent } from './Aprendices/aprendiz-form/aprendiz-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadesIndexComponent,
    EspecialidadesFormComponent,
    ProfesoresIndexComponent,
    ProfesoresFormComponent,
    GradosIndexComponent,
    GradosFormComponent,
    MateriaIndexComponent,
    MateriaFormComponent,
    AprendizIndexComponent,
    AprendizFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      autoDismiss: false,
      positionClass: "toast-bottom-right",
    }),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
