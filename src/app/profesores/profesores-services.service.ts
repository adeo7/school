import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresServicesService {
  private urlBase = 'http://localhost:8000/api/profesores';
  private httpHeader:HttpHeaders

  constructor(private Http:HttpClient) {
    this.httpHeader = new HttpHeaders();
    this.httpHeader.append('Content-Type', 'application/json');
   }

  getAll() {
    return this.Http.get<any>(this.urlBase,{ headers :this.httpHeader })
  }

  save(data:any,id:any) {
    if (id!=undefined) {
      return this.Http.put<any>(this.urlBase + '/'+ id,data,{headers :this.httpHeader})  
    }else{
      return this.Http.post<any>(this.urlBase,data,{headers :this.httpHeader})
    }
   
  }

  getById(id:number) {
    return this.Http.get<any>(this.urlBase+'/'+id,{headers :this.httpHeader})
  }

  delete(id:number) {
    return this.Http.delete<any>(this.urlBase+'/'+id.toString(),{headers :this.httpHeader})
  }
}
