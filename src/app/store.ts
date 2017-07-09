import {combineReducers} from "redux";
import {IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer} from "./messaging/store";
import {ITaskingState, TASKING_INITIAL_STATE, taskingReducer} from "./messaging/tasking/store";
import {cmpReducer, ICMPState, INITIAL_CMP_STATE} from "./messaging/cmp/cmp-store";

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
  cmpProfile: ICMPState
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE,
  cmpProfile: INITIAL_CMP_STATE
}

export const rootReducer = combineReducers({
  tasking: taskingReducer,
  messaging: messagingReducer,
  cmpProfile: cmpReducer
});
