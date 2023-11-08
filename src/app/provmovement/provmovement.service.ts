import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provmovement } from './provmovement';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvmovementService {
  private urlEndPoint:string = 'http://localhost:8080/api/movimientos';

  constructor(private http: HttpClient) { }

  getProvMovements(): Observable<Provmovement[]> {
    return this.http.get<Provmovement[]>(this.urlEndPoint)
  }
}
