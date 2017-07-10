import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppState } from '../../../store';
import { NgRedux } from 'ng2-redux';
import { INameCode } from '../cmp-store';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  levelNum: number;
  levels: Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
  ];

  division: INameCode;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      this.division = ngRedux.getState().cmpProfile.division.nameCode;
      this.levelNum = this.division.name;
    });
  }

  ngOnInit() {
  }

  toNumber() {
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
}
