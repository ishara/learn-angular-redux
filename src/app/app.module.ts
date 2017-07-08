import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgRedux, NgReduxModule} from "ng2-redux";

import {AppComponent} from "./app.component";
import {INITIAL_STATE, rootReducer} from "./store";

import {MessagingModule} from "./messaging/messaging.module";
import {TodosModule} from "./messaging/tasking/todos.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    TodosModule,
    MessagingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
