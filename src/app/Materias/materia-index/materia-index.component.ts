import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-materia-index',
  templateUrl: './materia-index.component.html',
  styleUrls: ['./materia-index.component.css']
})
export class MateriaIndexComponent implements OnInit{
  public listMateria :any=[];
  constructor(private service: MateriaService,
               private route: Router,
               private helperservice: HelperserviceService){

  }
  ngOnInit(): void {
   this.getEspecialidades();
  }

  getEspecialidades(){
    this.service.getAll().subscribe(
      result=>{
        this.listMateria=result.data
      }
    );
  }
  edit(id:any) {
    this.route.navigateByUrl('/materia/edit/'+id);
  }
  delete(id:any){
   this.service.delete(id).subscribe(
    result=>{
     this.helperservice.showNotify("success","Materia Eliminada");
      this.getEspecialidades();
    },
    error=>{
      this.helperservice.showNotify("error","Ocurrio un error al eliminar");
    }
   );
  }
  new(){
    this.route.navigateByUrl('/materia/new');
  }
}
