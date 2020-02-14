import countReducer from './countReducer';
import { drink_coffee, eat_snack, take_nap, study, crazy } from '../actions/allActions';

describe('countReducer functionality', () => {
  it('nada occours when actions === false', () => {
    const action = { type: 'UNEXPECTED' };
    const newState = countReducer({}, action);
    expect(newState).toEqual({});
  });

  it('DRINK_COFFEE functionality ', () => {
    const action = drink_coffee();
    const initialState = { coffees: 0 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('EAT_SNACK functionality', () => {
    const action = eat_snack();
    const initialState = { snacks: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ snacks: 2 });
  });

  it('TAKE_NAP funcitonality', () => {
    const action = take_nap();
    const initialState = { naps: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });

  it('STUDY functionaliyt', () => {
    const action = study();
    const initialState = { studies: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });
  });

  it('CRAZY functionality', () => {
    const action = crazy();
    const initialState = { craziez: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ craziez: 2 });
  });
});
