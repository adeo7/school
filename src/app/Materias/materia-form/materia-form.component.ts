import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from '../materia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit{
  public id=0;
  public frmMateria: FormGroup;

  ngOnInit(): void {
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmMateria.controls["nombre"].setValue(result.data.nombre);
          console.log(result.data.nombre);
        },
        error=>{

        }
      )
      
    }
  }



  constructor (private service :MateriaService,
              private activateRoute: ActivatedRoute,
              private helperService: HelperserviceService,
              private route: Router
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmMateria = new FormGroup({
      nombre:new FormControl(null,[Validators.required])
    });
  }

  guardar(){
    if (this.frmMateria.invalid) {
      alert("El campo no cumple con las validaciones")
      return
    }

    let data={
      "nombre":this.frmMateria.controls["nombre"].value
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        this.helperService.showNotify("success","Materia guardada")
      },
      error=>{
        this.helperService.showNotify("error","No se pudo guardar")
        console.log(data)
        console.log(error)
      }
    )
  }
  Volver(){
    this.route.navigateByUrl('/materia');
  }
}
