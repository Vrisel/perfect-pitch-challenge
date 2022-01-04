const ALLOT = [1, 2, 5];
const MAX_LEVEL = ALLOT.length;
const STEPS = 3;

const state = () => ({
  pitch: 440,
  currentLevel: 1,
  currentStep: 1,
  wrongAnswers: [0, 0, 0],
});

const mutations = {
  initialization(state, pitch = 440) {
    state.pitch = pitch;
    state.currentLevel = 1;
    state.currentStep = 1;
    state.wrongAnswers = [0, 0, 0];
  },
  nextStep(state) {
    state.currentStep += 1;
  },
  levelUp(state) {
    state.currentLevel += 1;
    state.currentStep = 1;
  },
  gotWrongAnswer(state) {
    state.wrongAnswers[state.currentLevel - 1] += 1;
  },
};

const actions = {
  gotCorrectAnswer(context) {
    if (context.state.currentStep >= STEPS) {
      context.commit('levelUp');
    } else {
      context.commit('nextStep');
    }
    const finished = context.state.currentLevel > MAX_LEVEL;
    return new Promise((resolve) => resolve(finished));
  },
};

const getters = {
  currentScore(state) {
    let result = 0;
    for (let i = 0; i < state.currentLevel; i++) {
      result += ALLOT[i] * (state.currentStep - 1) - state.wrongAnswers[i];
    }
    return result;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
