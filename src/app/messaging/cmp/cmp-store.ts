/**
 * Created by ishara on 7/9/2017.
 */

export const CMP_ACTION_COMPANY_SELECTED = 'CMP_ACTION_COMPANY_SELECTED';
export const CMP_ACTION_DIVISION_SELECTED = 'CMP_ACTION_DIVISION_SELECTED';
export const CMP_ACTION_BRAND_SELECTED = 'CMP_ACTION_BRAND_SELECTED';

export interface INameCode {
  code: number,
  name: number
}

export interface ICMPState {
  company: { nameCode?: INameCode },
  division: { nameCode?: INameCode },
  brand: { nameCode?: INameCode },
  lastUpdate: null
}

export const INITIAL_CMP_STATE: ICMPState =
  {
    company: {nameCode:{code:-1,name:-1}},
    division: {nameCode:{code:-1,name:-1}},
    brand: {nameCode:{code:-1,name:-1}},
    lastUpdate:null
  };

function companySelect(state: ICMPState, action: any) {
  return Object.assign({}, state,
    {
      company: {nameCode: {code: action.code, name: action.name}}
      , division: {nameCode: {code: '', name: ''}}
      , brand: {nameCode: {code: '', name: ''}}
      , lastUpdate: new Date()
    });
}

export function cmpReducer(state: ICMPState = INITIAL_CMP_STATE, action): ICMPState {
  switch (action.type) {
    case CMP_ACTION_COMPANY_SELECTED:
      return companySelect(state, action);
  }
  return state;
}
