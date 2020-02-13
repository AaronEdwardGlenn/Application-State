export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
export const isCrazy = state => state.snacks < 1;

export const getGif = state => {
  if(isCrazy(state)) return <img src={'https://media0.giphy.com/media/y7Y3KGJ7l8KbK/giphy.gif'}></img>;
  if(isTired(state) && isHungry(state)) return <img src={'https://media.giphy.com/media/wVcNP3TnXbl84/giphy.gif'}></img>;
  if(isHyper(state) && isHungry(state)) return <img src={'https://media1.giphy.com/media/twPGJ3qO2goy4/giphy.gif'}></img>;
  if(isTired(state)) return <img src={'https://media1.giphy.com/media/X3Yj4XXXieKYM/giphy.gif'}></img>;
  if(isHyper(state)) return <img src={'https://31.media.tumblr.com/tumblr_lsbdwcbsYg1qmdonvo1_400.gif'}></img>;
  if(isEducated(state)) return <img src={'https://media3.giphy.com/media/ZB9CwEZowWFQzHDqN2/giphy.gif'}></img>;
  if(isHungry(state)) return <img src={'https://media0.giphy.com/media/146ZStCLIwlC3m/source.gif'}></img>;

  return ':)';
};
