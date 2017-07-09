import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  levelNum:number;
  levels:Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
  ];
  constructor() { }

  ngOnInit() {
  }
  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
}
