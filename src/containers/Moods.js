import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import {
  isCrazy,
  isTired,
  isHungry,
  isHyper,
  isEducated
} from '../actions/countClicks';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
  { name: 'CRAZY', text: 'Crazy', stateName: 'crazy' },
];


export const getFace = state => {
  if(isCrazy(state)) return <img src={'https://media0.giphy.com/media/y7Y3KGJ7l8KbK/giphy.gif'}></img>;
  if(isTired(state) && isHungry(state)) return <img src={'https://media.giphy.com/media/wVcNP3TnXbl84/giphy.gif'}></img>;
  if(isHyper(state) && isHungry(state)) return <img src={'https://media1.giphy.com/media/twPGJ3qO2goy4/giphy.gif'}></img>;
  if(isTired(state)) return <img src={'https://media1.giphy.com/media/X3Yj4XXXieKYM/giphy.gif'}></img>;
  if(isHyper(state)) return <img src={'https://31.media.tumblr.com/tumblr_lsbdwcbsYg1qmdonvo1_400.gif'}></img>;
  if(isEducated(state)) return <img src={'https://media3.giphy.com/media/ZB9CwEZowWFQzHDqN2/giphy.gif'}></img>;
  if(isHungry(state)) return <img src={'https://media0.giphy.com/media/146ZStCLIwlC3m/source.gif'}></img>;

  return ':)';
};

export function UpdateEmojiCount() {
const [coffees, setCoffees] = useState(0)
const [snacks, setSnacks] = useState(0)
const [naps, setNaps] = useState(0)
const [studies, setStudies] = useState(0)
const [crazy, setCrazy] = useState(0)

return (
  <div>
    <button value={coffees} onClick={() => setCoffees(coffees + 1)}></button>
  </div>
);

}

export default class Moods extends Component {
  state = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
    crazy: 0
  }
}

  handleSelection = name => {
    switch(name) {
      case 'DRINK_COFFEE':
        this.setState(state => ({ coffees: state.coffees + 1 }));
        break;
      case 'EAT_SNACK':
        this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        this.setState(state => ({ studies: state.studies + 1 }));
        break;
      case 'CRAZY':
        this.setState(state => ({ crazy: state.crazy + 1 }));
        break;
      default:
        console.log(`unhandled name: ${name}`);
    }
  }
  

  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
  }

