import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AprendizService } from '../aprendiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';
import { EspecialidadService } from 'src/app/Especialidades/especialidad.service';
import { GradoService } from 'src/app/grados/grado.service';

@Component({
  selector: 'app-aprendiz-form',
  templateUrl: './aprendiz-form.component.html',
  styleUrls: ['./aprendiz-form.component.css']
})
export class AprendizFormComponent implements OnInit{
  public id=0;
  public frmAprendiz: FormGroup ;
  public listGrados: any=[];

  ngOnInit(): void {
    this.getEspecilidades();
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmAprendiz.controls["nombre"].setValue(result.data.nombre);
          this.frmAprendiz.controls["apellidos"].setValue(result.data.apellido);
          this.frmAprendiz.controls["grado"].setValue(result.data.grado.id);
        },
        error=>{
          console.log(error);
        }
      )
      
    }
  }



  constructor (private service :AprendizService,
              private activateRoute: ActivatedRoute,
              private helperService: HelperserviceService,
              private route: Router,
              private gradoService: GradoService
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmAprendiz = new FormGroup({
      nombre:new FormControl(null,[Validators.required]),
      apellidos:new FormControl(null,[Validators.required]),
      grado:new FormControl(null,[Validators.required])
    });
  }

  guardar(){
    if (this.frmAprendiz.invalid) {
      this.helperService.showNotify("warning","El campo no cumple con las validaciones")
      return
    }

    let data={
      "nombre":this.frmAprendiz.controls["nombre"].value,
      "apellido":this.frmAprendiz.controls["apellidos"].value,
      "grado":{
        "id":this.frmAprendiz.controls["grado"].value
      }
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        this.helperService.showNotify("success","Aprendiz guardado correctamente")
      },
      error=>{
        this.helperService.showNotify("error","No se pudo guardar")
      }
    )
  }
  Volver(){
    this.route.navigateByUrl('/aprendiz');
  }
  getEspecilidades(){
    this.gradoService.getAll().subscribe(
      result=>{
        this.listGrados=result.data
      }
    ); 
  }
}
