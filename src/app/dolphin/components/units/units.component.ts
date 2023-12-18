import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import { GetAllUnitAction, GetAllUnitSelector } from '../../store/unit';
import { IUnit } from '../../models/unit.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units!: IUnit[];

  constructor(
    private _store: Store<IAppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(GetAllUnitAction());
    this.getUnits();
  }

  monitoring() {
    this.router.navigate(['/monitoring']);
  }

  private getUnits() {
    this._store.pipe(select(GetAllUnitSelector)).subscribe(res => {
      this.units = res;
      console.log(res);
    });
  }


}
