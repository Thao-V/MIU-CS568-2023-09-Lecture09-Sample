export default function counterReducer(state, action){
  switch(action.type){
    case ACTION_TYPES.INC_C1:
      return {...state, count1: action.payload};
    case ACTION_TYPES.INC_C2:
      return {...state, count2: state.count2 + 1};
    case ACTION_TYPES.INIT:
      return {...action.payload};
    default:
      return state;
  }
}

let INC_C1 = 'INC_C1'
export const ACTION_TYPES = {
  INC_C1,
  INC_C2: 'INC_C2',
  INIT: "Init"
}