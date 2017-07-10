import { Component, OnInit } from '@angular/core';
import { CMP_ACTION_COMPANY_SELECTED, ICMPState, INameCode } from "../cmp-store";
import { NgRedux, select } from "ng2-redux";
import { IAppState } from '../../../store';
import { StringifyOptions } from 'querystring';
import { async } from 'rxjs/scheduler/async';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @select((s: IAppState) => s.cmpProfile.company.nameCode.name) namex: number;
  levelNum: number;
  levels: Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
  ];

  constructor(private ngRedux: NgRedux<IAppState>) {
    /*
     ngRedux.subscribe((() => {
     console.log(ngRedux.getState());
     let iNameCode: INameCode = ngRedux.getState().cmpProfile.company.nameCode;
     this.namex = iNameCode.name;
     }))
     */

  }

  ngOnInit() {
  }

  toNumber() {
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
    this.ngRedux.dispatch({type: CMP_ACTION_COMPANY_SELECTED, code: this.levelNum, name: this.levelNum});

  }
}
