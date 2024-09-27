import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  getNota():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/notas/')
  }
}
