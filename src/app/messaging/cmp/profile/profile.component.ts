import {Component, OnInit} from '@angular/core';
import {ICMPState} from "../cmp-store";
import {NgRedux, select} from "ng2-redux";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @select(s => s.cmpProfile.lastUpdate) lastUpdate;
  @select(s => s.cmpProfile.company.nameCode.name) company;

  constructor(private ngRedux: NgRedux<ICMPState>) {
  }

  ngOnInit() {
  }

}
