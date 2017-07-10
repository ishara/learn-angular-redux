/**
 * Created by ishara on 7/9/2017.
 */

export const CMP_ACTION_COMPANY_SELECTED = 'CMP_ACTION_COMPANY_SELECTED';
export const CMP_ACTION_DIVISION_SELECTED = 'CMP_ACTION_DIVISION_SELECTED';
export const CMP_ACTION_BRAND_SELECTED = 'CMP_ACTION_BRAND_SELECTED';
export const CMP_ACTION_USER_DEFAULT = 'CMP_ACTION_USER_DEFAULT';

export interface INameCode {
  code: number,
  name: number
}

export interface ICMPState {
  company: { nameCode: INameCode },
  division: { nameCode: INameCode },
  brand: { nameCode: INameCode },
  lastUpdate: null
}

export const INITIAL_CMP_STATE: ICMPState =
  {
    company: {nameCode: {code: -1, name: -1}},
    division: {nameCode: {code: -1, name: -1}},
    brand: {nameCode: {code: -1, name: -1}},
    lastUpdate: null
  };

function companySelect(state: ICMPState, action: any): ICMPState {
  return Object.assign({}, state,
    {
      company: {nameCode: {code: action.code, name: action.name}}
      , division: {nameCode: {code: -1, name: -1}}
      , brand: {nameCode: {code: -1, name: -1}}
      , lastUpdate: new Date()
    });
}

function defaultSelection(state: ICMPState, action: any): ICMPState {
  return Object.assign({}, state,
    {
      company: {nameCode: {code: 1, name: 1}}
      , division: {nameCode: {code: 1, name: 1}}
      , brand: {nameCode: {code: 1, name: 1}}
    });
}
export function cmpReducer(state: ICMPState = INITIAL_CMP_STATE, action): ICMPState {
  switch (action.type) {
    case CMP_ACTION_COMPANY_SELECTED:
      return companySelect(state, action);
    case CMP_ACTION_USER_DEFAULT:
      return defaultSelection(state, action);
  }
  return state;
}
