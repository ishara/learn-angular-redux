import {BrowserModule} from '@angular/platform-browser';
import {isDevMode, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from "ng2-redux";
import {IAppState, INITIAL_STATE, rootReducer} from "./store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, devTool: DevToolsExtension) {
    let devToolEnhancer = isDevMode ? [devTool.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [],devToolEnhancer);
  }
}
