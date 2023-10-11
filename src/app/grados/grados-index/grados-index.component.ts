import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadService } from 'src/app/Especialidades/especialidad.service';
import { HelperserviceService } from 'src/services/helperservice.service';
import { GradoService } from '../grado.service';

@Component({
  selector: 'app-grados-index',
  templateUrl: './grados-index.component.html',
  styleUrls: ['./grados-index.component.css']
})
export class GradosIndexComponent implements OnInit {
  public listGrados :any=[];
  constructor(private service: GradoService,
               private route: Router,
               private helperservice: HelperserviceService){

  }
  ngOnInit(): void {
   this.getGrados();
  }

  getGrados(){
    this.service.getAll().subscribe(
      result=>{
        this.listGrados=result.data
        console.log(this.listGrados);
      }
    );
  }
  edit(id:any) {
    this.route.navigateByUrl('/grados/edit/'+id);
  }
  delete(id:any){
   this.service.delete(id).subscribe(
    result=>{
     this.helperservice.showNotify("success","Grado Eliminado");
      this.getGrados();
    },
    error=>{
      this.helperservice.showNotify("error","Ocurrio un error al eliminar");
    }
   );
  }
  new(){
    this.route.navigateByUrl('/grados/new');
  }
}
