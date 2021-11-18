import {atom, selector} from 'recoil';

export const stepState = atom({
  key: 'stepState', 
  default: 1
});

const TILE_COUNT = 25;
const MAX_NUM = 50;

var currentStep = 1;

export const stepSelector = selector({
  key: 'stepSelector', 
  get: ({get}) => {
    console.log('stepSelector', currentStep)
    return currentStep > MAX_NUM ? '' : currentStep
  },
  // get: ({get}) => (get(stepState) > MAX_NUM ? '' : get(stepState)),
});

export const nextStepSelector = selector({
  key: 'nextStepSelector', 
  get: ({get}) => {
    console.log('run next step!!!');
    let nextStep = MAX_NUM + currentStep;

    currentStep++;
    
    console.log('nextStepSelector', currentStep);

    if(nextStep > MAX_NUM ) {
      return '';
    }
    else {
      return nextStep;
    }

    // set(stepState, get(stepState) + 1);
  }
})