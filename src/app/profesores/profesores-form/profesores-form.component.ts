import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadService } from 'src/app/Especialidades/especialidad.service';
import { HelperserviceService } from 'src/services/helperservice.service';
import { ProfesoresServicesService } from '../profesores-services.service';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit{
  public id=0;
  public frmProfesor: FormGroup ;
  public listEspecialidades: any=[];

  ngOnInit(): void {
    this.getEspecilidades();
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmProfesor.controls["nombre"].setValue(result.data.nombre);
          console.log(result.data.nombre);
        },
        error=>{

        }
      )
      
    }
  }



  constructor (private service :ProfesoresServicesService,
              private activateRoute: ActivatedRoute,
              private helperService: HelperserviceService,
              private route: Router,
              private especialidadService: EspecialidadService
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmProfesor = new FormGroup({
      nombre:new FormControl(null,[Validators.required]),
      apellidos:new FormControl(null,[Validators.required]),
      especialidad:new FormControl(null,[Validators.required])
    });
  }

  guardar(){
    if (this.frmProfesor.invalid) {
      this.helperService.showNotify("warning","El campo no cumple con las validaciones")
      return
    }

    let data={
      "nombre":this.frmProfesor.controls["nombre"].value,
      "apellidos":this.frmProfesor.controls["apellidos"].value,
      "especialidad":{
        "id":this.frmProfesor.controls["especialidad"].value
      }
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        this.helperService.showNotify("success","Pofesor guardado correctamente")
      },
      error=>{
        this.helperService.showNotify("error","No se pudo guardar")
      }
    )
  }
  Volver(){
    this.route.navigateByUrl('/profesores');
  }
  getEspecilidades(){
    this.especialidadService.getAll().subscribe(
      result=>{
        this.listEspecialidades=result.data
      }
    ); 
  }
}
