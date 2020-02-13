import {
  DRINK_COFFEE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY,
  CRAZY
} from '../actions/countClicks';

export default function reudcer(state, action) {
  switch(action.type) {
    case DRINK_COFFEE: 
      return { ...state, count: state.count + 1 };
    case EAT_SNACK: 
      return { ...state, count: state.count + 1 };
    case TAKE_NAP: 
      return { ...state, count: state.count + 1 };
    case STUDY: 
      return { ...state, count: state.count + 1 };
    case CRAZY: 
      return { ...state, count: state.count + 1 };
    default: 
      return state; 


  }
}
