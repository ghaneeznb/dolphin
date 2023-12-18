import { Component, OnInit } from '@angular/core';
import { IMonitor } from '../../models/monitor.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import { Router } from '@angular/router';
import { GetAllMonitorAction } from '../../store/monitor/actions/monitor.actions';
import { GetAllMonitorSelector } from '../../store/monitor/selectors/monitor.selector';


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
})
export class MonitoringComponent implements OnInit {
  monitor!: IMonitor[];

  constructor(
    private _store: Store<IAppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this._store.dispatch(GetAllMonitorAction());
    this.getMonitor();
  }

  monitoring() {
    this.router.navigate(['/monitoring']);
  }

  private getMonitor() {
    this._store.pipe(select(GetAllMonitorSelector)).subscribe((res: any) => {
      this.monitor = res;
      console.log(res);
    });
  }


}

