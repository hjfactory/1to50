import {atom, selector} from 'recoil';

/////////////////////////////////
// 게임 모드
const MODE_WELCOME  = 0;
const MODE_GAME     = 1;
const MODE_FINISH   = 2;

export {MODE_WELCOME, MODE_GAME, MODE_FINISH};

export const modeState = atom({
  key: 'modeState', 
  default: MODE_WELCOME
});

/////////////////////////////////
// 게임 시간
export const timeState = atom({
  key: 'timeState', 
  default: 0
})

/////////////////////////////////
// step: 현재 눌러야할 번호
// nextStep: 다음에 눌러야할 번호(50 초과 시 공백)
const TILE_COUNT = 25;
const MAX_NUM = 50;

export const stepState = atom({
  key: 'stepState', 
  default: 1
});

export const nextStepSelector = selector({
  key: 'nextStepSelector', 
  get: ({get}) => {
    let nextStep = TILE_COUNT + get(stepState);
    return (nextStep > MAX_NUM ? '' : nextStep);
  }
});

/////////////////////////////////
