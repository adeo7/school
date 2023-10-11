import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GradoService } from '../grado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-grados-form',
  templateUrl: './grados-form.component.html',
  styleUrls: ['./grados-form.component.css']
})
export class GradosFormComponent implements OnInit{
  public id=0;
  public frmGrado: FormGroup;

  ngOnInit(): void {
    if (this.id!=0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result=>{
          this.frmGrado.controls["nombre"].setValue(result.data.nombre);
          this.frmGrado.controls["salon"].setValue(result.data.salon);
          this.frmGrado.controls["jornada"].setValue(result.data.jornada);
          console.log(result.data.nombre);
        },
        error=>{

        }
      )
      
    }
  }



  constructor (private service :GradoService,
              private activateRoute: ActivatedRoute,
              private helperService: HelperserviceService,
              private route: Router
    ){
      this.id= this.activateRoute.snapshot.params['id'];
    this.frmGrado = new FormGroup({
      nombre:new FormControl(null,[Validators.required]),
      jornada:new FormControl(null,[Validators.required]),
      salon:new FormControl(null,[Validators.required])
    });
  }

  guardar(){
    if (this.frmGrado.invalid) {
      this.helperService.showNotify("error","Complete los campos")
      return
    }

    let data={
      "nombre":this.frmGrado.controls["nombre"].value,
      "jornada":this.frmGrado.controls["jornada"].value,
      "salon":this.frmGrado.controls["salon"].value
    }
    this.service.save(data,this.id).subscribe(
      result=>{
        this.helperService.showNotify("success","Grado guardado")
      },
      error=>{
        this.helperService.showNotify("error","No se pudo guardar")
      }
    )
  }
  Volver(){
    this.route.navigateByUrl('/grados');
  }
}
