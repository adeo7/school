import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-especialidades-index',
  templateUrl: './especialidades-index.component.html',
  styleUrls: ['./especialidades-index.component.css']
})
export class EspecialidadesIndexComponent implements OnInit {
  public listEspecialidades :any=[]
  constructor(private service: EspecialidadService, private route: Router){

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
      alert("especialidad eliminada")
      this.getEspecialidades();
    },
    error=>{
      console.log(error);
    }
   );
  }
  new(){
    this.route.navigateByUrl('/especialidades/new');
  }
}
