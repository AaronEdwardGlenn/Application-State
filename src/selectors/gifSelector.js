export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
export const isCrazy = state => state.snacks > 5;

export const getGif = state => {

  if(isCrazy(state)) return { status: 'You Crazy!!', img: 'https://media0.giphy.com/media/y7Y3KGJ7l8KbK/giphy.gif' };

  if(isTired(state) && isHungry(state)) return { status: 'ANGRY FACE!', img: 'https://media.giphy.com/media/wVcNP3TnXbl84/giphy.gif' };

  if(isHyper(state) && isHungry(state)) return { status: 'DONT FORGET TO CUP THE BALLS', img: 'https://media1.giphy.com/media/twPGJ3qO2goy4/giphy.gif' };

  if(isTired(state)) return { status: 'You caught the ZZZssss', img: 'https://media1.giphy.com/media/X3Yj4XXXieKYM/giphy.gif' };

  if(isHyper(state)) return { status: 'OMG OMG OMG OMG OMG', img: 'https://31.media.tumblr.com/tumblr_lsbdwcbsYg1qmdonvo1_400.gif' };

  if(isEducated(state)) return { status: 'You smart now', img: 'https://media3.giphy.com/media/ZB9CwEZowWFQzHDqN2/giphy.gif' };

  if(isHungry(state)) return { status: 'I NEED FOOD NOW!', img: 'https://media0.giphy.com/media/146ZStCLIwlC3m/source.gif' };

  return ':)';
};


