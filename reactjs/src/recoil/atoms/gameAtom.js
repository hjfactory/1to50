import {atom, selector} from 'recoil';

export const stepState = atom({
  key: 'stepState', 
  default: 1
});

export const nextStepState = atom({
  key: 'nextStepState', 
  default: 26
});

const TILE_COUNT = 25;
const MAX_NUM = 50;

// var currentStep = 1;

// export const stepSelector = selector({
//   key: 'stepSelector', 
//   get: ({get}) => (get(stepState) > MAX_NUM ? '' : get(stepState)),
//   set: ({get}, {set}) => {

//   }
// });

export const nextStepSelector = selector({
  key: 'nextStepSelector', 
  get: ({get}) => {
    console.log('run next step!!!');
    let nextStep = TILE_COUNT + get(stepState);
    
    // console.log('nextStepSelector', currentStep);

    if(nextStep > MAX_NUM ) {
      return '';
    }
    else {
      return nextStep;
    }

    // set(stepState, get(stepState) + 1);
  }
})