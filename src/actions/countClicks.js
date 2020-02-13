export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drink_coffee = () => ({
  type: DRINK_COFFEE
});

export const EAT_SNACK = 'EAT_SNACK';
export const eat_snack = () => ({
  type: EAT_SNACK
});

export const TAKE_NAP = 'TAKE_NAP';
export const take_nap = () => ({
  type: TAKE_NAP
});

export const STUDY = 'STUDY';
export const study = () => ({
  type: STUDY
});

export const CRAZY = 'CRAZY';
export const crazy = () => ({
  type: CRAZY
});

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
export const isCrazy = state => state.crazy > 10;

