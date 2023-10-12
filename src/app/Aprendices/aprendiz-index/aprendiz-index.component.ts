import { Component, OnInit } from '@angular/core';
import { AprendizService } from '../aprendiz.service';
import { Router } from '@angular/router';
import { HelperserviceService } from 'src/services/helperservice.service';

@Component({
  selector: 'app-aprendiz-index',
  templateUrl: './aprendiz-index.component.html',
  styleUrls: ['./aprendiz-index.component.css']
})
export class AprendizIndexComponent implements OnInit {
  public listAprendices :any=[]
  constructor(private service: AprendizService,
               private route: Router,
               private helperservice: HelperserviceService){

  }
  ngOnInit(): void {
   this.getAprendices();
  }

  getAprendices(){
    this.service.getAll().subscribe(
      result=>{
        this.listAprendices=result.data
      }
    );
  }
  edit(id:any) {
    this.route.navigateByUrl('/aprendiz/edit/'+id);
  }
  delete(id:any){
   this.service.delete(id).subscribe(
    result=>{
     this.helperservice.showNotify("success","Aprendiz Eliminado");
      this.getAprendices();
    },
    error=>{
      this.helperservice.showNotify("error","Ocurrio un error al eliminar");
    }
   );
  }
  new(){
    this.route.navigateByUrl('/aprendiz/new');
  }

}
