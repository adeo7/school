import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-especialidades-index',
  templateUrl: './especialidades-index.component.html',
  styleUrls: ['./especialidades-index.component.css']
})
export class EspecialidadesIndexComponent implements OnInit {
  public listEspecialidades :any=[];
  constructor(private service: EspecialidadService,
               private route: Router,
               private helperservice: HelperserviceService){

  }
  ngOnInit(): void {
   this.getEspecialidades();
  }

  getEspecialidades(){
    this.service.getAll().subscribe(
      result=>{
        this.listEspecialidades=result.data
      }
    );
  }
  edit(id:any) {
    this.route.navigateByUrl('/especialidades/edit/'+id);
  }
  delete(id:any){
   this.service.delete(id).subscribe(
    result=>{
     this.helperservice.showNotify("success","Especialidad Eliminada");
      this.getEspecialidades();
    },
    error=>{
      this.helperservice.showNotify("error","Ocurrio un error al eliminar");
    }
   );
  }
  new(){
    this.route.navigateByUrl('/especialidades/new');
  }
}
