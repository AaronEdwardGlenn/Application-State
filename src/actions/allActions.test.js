import { eat_snack, drink_coffee, take_nap, study, crazy, DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, CRAZY } from './allActions'; 


describe('face actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drink_coffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a EAT_SNACK action', () => {
    const action = eat_snack();
    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a TAKE_NAP action', () => {
    const action = take_nap();
    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a STUDY action', () => {
    const action = study();
    expect(action).toEqual({
      type: STUDY
    });
  });

  it('creates a CRAZY action', () => {
    const action = crazy();
    expect(action).toEqual({
      type: CRAZY
    });
  });
});
