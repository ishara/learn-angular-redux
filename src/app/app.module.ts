import {BrowserModule} from "@angular/platform-browser";
import { isDevMode, NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { DevToolsExtension, NgRedux, NgReduxModule } from "ng2-redux";

import {AppComponent} from "./app.component";
import {INITIAL_STATE, rootReducer} from "./store";

import {MessagingModule} from "./messaging/messaging.module";
import {TodosModule} from "./messaging/tasking/todos.module";
import {CMPModule} from "./messaging/cmp/cmp.module";

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
    MessagingModule,
    CMPModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>,devTool: DevToolsExtension){
    let enhancers = isDevMode() ? devTool.enhancer():[];
    ngRedux.configureStore(rootReducer, INITIAL_STATE,[],enhancers);
  }
}
