import {Component, OnInit} from '@angular/core';
import {CMP_ACTION_COMPANY_SELECTED, ICMPState} from "../cmp-store";
import {NgRedux} from "ng2-redux";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  levelNum: number;
  levels: Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
  ];

  constructor(private ngRedux: NgRedux<ICMPState>) {
  }

  ngOnInit() {
  }

  toNumber() {
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
    this.ngRedux.dispatch({type: CMP_ACTION_COMPANY_SELECTED, code: this.levelNum, name: this.levelNum});

  }
}
