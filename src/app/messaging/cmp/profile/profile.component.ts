import { Component, OnInit } from '@angular/core';
import { CMP_ACTION_USER_DEFAULT, ICMPState } from '../cmp-store';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @select(s => s.cmpProfile.lastUpdate) lastUpdate;
  @select(s => s.cmpProfile.company.nameCode.name) company;
  @select(s => s.cmpProfile) cmpProfile;

  constructor(private ngRedux: NgRedux<ICMPState>) {
  }

  ngOnInit() {
  }

  userDefault() {
    this.ngRedux.dispatch({type: CMP_ACTION_USER_DEFAULT})
  }
}
