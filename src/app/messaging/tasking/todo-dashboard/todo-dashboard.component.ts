import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { CLEAR_TODOS } from '../actions';
import {IAppState} from "../../../store";

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(s => s.tasking.todos) todos;
  @select(s => s.tasking.lastUpdate) lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
