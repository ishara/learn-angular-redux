import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  levelNum: number;
  levels: Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  toNumber() {
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
}
