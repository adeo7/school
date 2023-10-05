import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especialidades-form',
  templateUrl: './especialidades-form.component.html',
  styleUrls: ['./especialidades-form.component.css']
})
export class EspecialidadesFormComponent implements OnInit {
  
  public id=0;
  public frmEspecialidad: FormGroup;

  ngOnInit(): void {
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmEspecialidad.controls["nombre"].setValue(result.data.nombre);
          console.log(result.data.nombre);
        },
        error=>{

        }
      )
      
    }
  }



  constructor (private service :EspecialidadService,
              private activateRoute: ActivatedRoute
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmEspecialidad = new FormGroup({
      nombre:new FormControl(null,[Validators.required])
    });
  }

  guardar(){
    if (this.frmEspecialidad.invalid) {
      alert("El campo no cumple con las validaciones")
      return
    }

    let data={
      "nombre":this.frmEspecialidad.controls["nombre"].value
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        alert("especialidad guardada")
      },
      error=>{
        console.log(error)
      }
    )
  }
}
