import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMonitor } from '../models/monitor.model';


@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<Array<IMonitor>> {
    return this.http.get<Array<IMonitor>>(``);
  }
}