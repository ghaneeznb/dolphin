import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnit } from '../models/unit.model';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<Array<IUnit>> {
    return this.http.get<Array<IUnit>>(``);
  }
}
