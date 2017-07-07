import {Component} from "@angular/core";
import {NgRedux, select} from "ng2-redux";
import {IAppState} from "./store";
import {INCREMENT} from "./action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select('counter') coun;
  @select(['message', 'newMessage']) even;
  // @select((s: IAppState) => s.message.newMessage) even;
  /*
   counter = 0;

   increment()  //non redux way
   {
   this.counter++;
   }
   */

  constructor(private ngRedux: NgRedux<IAppState>) {
    /*
     ngRedux.subscribe(() => {
     this.counter = ngRedux.getState().counter
     })
     */
  }

  increment() {
    this.ngRedux.dispatch({type: INCREMENT})
  }
}
