import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadService } from 'src/app/Especialidades/especialidad.service';
import { HelperserviceService } from 'src/services/helperservice.service';
import { ProfesoresServicesService } from '../profesores-services.service';
import { MateriaService } from 'src/app/Materias/materia.service';
import { GradoService } from 'src/app/grados/grado.service';
import { ProfesorMateriaGradoService } from '../profesor-materia-grado.service';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit{
  public id=0;
  public frmProfesor: FormGroup ;
  public frmProfesorMateriaGrado: FormGroup ;
  public listEspecialidades: any=[];
  public listMaterias: any=[];
  public listGrados: any=[];
  public listProfesorMateriasGrados: any=[];

  ngOnInit(): void {
    this.getList();
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmProfesor.controls["nombre"].setValue(result.data.nombre);
          this.frmProfesor.controls["apellidos"].setValue(result.data.apellido);
          this.frmProfesor.controls["especialidad"].setValue(result.data.especialidad.id);
          console.log(result.data.especialidad);
        },
        error=>{
          console.log(error);
        }
      )
      
    }
  }



  constructor (private service :ProfesoresServicesService,
              private activateRoute: ActivatedRoute,
              private helperService: HelperserviceService,
              private route: Router,
              private especialidadService: EspecialidadService,
              private materiaService: MateriaService,
              private gradosService: GradoService,
              private PMGservice: ProfesorMateriaGradoService
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmProfesor = new FormGroup({
      nombre:new FormControl(null,[Validators.required]),
      apellidos:new FormControl(null,[Validators.required]),
      especialidad:new FormControl(null,[Validators.required])
    });
    this.frmProfesorMateriaGrado= new FormGroup({
      materia:new FormControl(null,[Validators.required]),
      grado:new FormControl(null,[Validators.required])

    });
  }

  guardar(){
    if (this.frmProfesor.invalid) {
      this.helperService.showNotify("warning","El campo no cumple con las validaciones")
      return
    }

    let data={
      "nombre":this.frmProfesor.controls["nombre"].value,
      "apellido":this.frmProfesor.controls["apellidos"].value,
      "especialidad":{
        "id":this.frmProfesor.controls["especialidad"].value
      }
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        this.helperService.showNotify("success","Pofesor guardado correctamente")
      },
      error=>{
        console.log(error)
        this.helperService.showNotify("error","No se pudo guardar")
      }
    )
  }
  Volver(){
    this.route.navigateByUrl('/profesores');
  }
  getList(){
    this.especialidadService.getAll().subscribe(
      result=>{
        this.listEspecialidades=result.data
      }
    ); 
    this.materiaService.getAll().subscribe(
      result=>{
        this.listMaterias=result.data
      }
    ); 
    this.gradosService.getAll().subscribe(
      result=>{
        this.listGrados=result.data
      }
    ); 
    this.PMGservice.getAll(this.id).subscribe(
      result=>{
       
        this.listProfesorMateriasGrados=result.data
      }
    ); 
  }
 
  guardarMateriaGrado(){
    if (this.frmProfesorMateriaGrado.invalid) {
      this.helperService.showNotify("warning","El campo no cumple con las validaciones")
      return
    }

    let data={
      "profesor":{
        "id":this.id
      },
      "materia":{
        "id":this.frmProfesorMateriaGrado.controls["materia"].value
      },
      "grado":{
        "id":this.frmProfesorMateriaGrado.controls["grado"].value
      }
    }
    this.PMGservice.save(data).subscribe(
      result=>{
        this.helperService.showNotify("success","Materias y grados asociados")
      },
      error=>{
        this.helperService.showNotify("error","No se pudo asociar")
      }
    )
  }
  DeleteRelacion(id:number){
    this.PMGservice.delete(id).subscribe(
      result=>{
        this.helperService.showNotify("success","Relación Eliminada")
        this.getList();
      },
      error=>{
        this.helperService.showNotify("error","Ocurrio un error al eliminar");
      }
    );
  }
}
