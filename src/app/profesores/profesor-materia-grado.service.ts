import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorMateriaGradoService {
  private urlBase = 'http://localhost:8000/api/PMG';
  private httpHeader:HttpHeaders

  constructor(private Http:HttpClient) {
    this.httpHeader = new HttpHeaders();
    this.httpHeader.append('Content-Type', 'application/json');
   }

  getAll(idProfesor :number) {
    return this.Http.get<any>(this.urlBase+'/'+idProfesor,{ headers :this.httpHeader })
  }

  save(data:any) {
      return this.Http.post<any>(this.urlBase,data,{headers :this.httpHeader})
  }
  delete(id:number) {
    return this.Http.delete<any>(this.urlBase+'/'+id.toString(),{headers :this.httpHeader})
  }
}
