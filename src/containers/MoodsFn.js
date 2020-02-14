import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { allOfTheActions } from '../actions/allActions';
import { getGif } from '../selectors/gifSelector';
import countReducer from '../reducers/countReducer';

const MoodsFn = () => {
  const [state, dispatch] = useReducer(countReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
    craziez: 0
  }); 

  let moodStatus = getGif(state);
  console.log(imgUrl);
  

  let [eat_snack, drink_coffee, take_nap, study, crazy] = allOfTheActions;

  let dispatchObj = [
    {
      text: 'Drink Coffee', 
      function: () => dispatch(drink_coffee()),
      count: state.coffees 
    },
    {
      text: 'Eat Snack', 
      function: () => dispatch(eat_snack()),
      count: state.snacks 
    },
    {
      text: 'Take that Nap', 
      function: () => dispatch(take_nap()),
      count: state.naps 
    },
    {
      text: 'Study Sesh', 
      function: () => dispatch(study()),
      count: state.studies 
    },
    {
      text: 'Go Cray Cray', 
      function: () => dispatch(crazy()),
      count: state.craziez 
    }
  ];

  return (
    <>

      <Controls dispatch={dispatchObj} />
      <Face emoji={moodStatus} />

    </>
  );
};

export default MoodsFn; 

