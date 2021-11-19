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

export const nextStepSelector = selector({
  key: 'nextStepSelector', 
  get: ({get}) => {
    let nextStep = TILE_COUNT + get(stepState);
    return (nextStep > MAX_NUM ? '' : nextStep);
  }
})