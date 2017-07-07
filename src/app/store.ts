import {INCREMENT} from "./action";
/**
 * Created by ishara on 7/7/2017.
 */

export interface IAppState {
  counter: number;
  message?: {
    newMessage: number;
  }
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  message: {
    newMessage: 0

  }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT : {
      return {counter: state.counter + 1, message: {newMessage: state.message.newMessage + 2}};
    }

  }
  return state;
}
