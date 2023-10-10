import { Component, OnInit } from '@angular/core';
import { ProfesoresServicesService } from '../profesores-services.service';
import { Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-profesores-index',
  templateUrl: './profesores-index.component.html',
  styleUrls: ['./profesores-index.component.css']
})
export class ProfesoresIndexComponent implements OnInit {
  public listProfesores :any=[]
  constructor(private service: ProfesoresServicesService,
               private route: Router,
               private helperservice: HelperserviceService){

  }
  ngOnInit(): void {
   this.getProfesores();
  }

  getProfesores(){
    this.service.getAll().subscribe(
      result=>{
        this.listProfesores=result.data
        console.log(this.listProfesores)
      }
    );
  }
  edit(id:any) {
    this.route.navigateByUrl('/profesores/edit/'+id);
  }
  delete(id:any){
   this.service.delete(id).subscribe(
    result=>{
     this.helperservice.showNotify("success","Especialidad Eliminada");
      this.getProfesores();
    },
    error=>{
      this.helperservice.showNotify("error","Ocurrio un error al eliminar");
    }
   );
  }
  new(){
    this.route.navigateByUrl('/profesores/new');
  }

}
