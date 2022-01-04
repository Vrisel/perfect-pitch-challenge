import Vue from 'vue';

const ALLOT = [1, 2, 5];
const MAX_LEVEL = ALLOT.length;
const STEPS = 3;

const state = () => ({
  pitch: 440,
  currentLevel: 1,
  currentStep: 1,
  wrongAnswers: [],
  allot: ALLOT,
  steps: STEPS,
});

const mutations = {
  initialization(state, pitch = 440) {
    state.pitch = pitch;
    state.currentLevel = 1;
    state.currentStep = 1;
    for (let i = 0; i < MAX_LEVEL; i++) {
      state.wrongAnswers[i] = 0;
    }
  },
  nextStep(state) {
    state.currentStep += 1;
  },
  levelUp(state) {
    state.currentLevel += 1;
    state.currentStep = 1;
  },
  gotWrongAnswer(state) {
    Vue.set(
      state.wrongAnswers,
      state.currentLevel - 1,
      state.wrongAnswers[state.currentLevel - 1] + 1
    );
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
    for (let i = 0; i < state.currentLevel - 1; i++) {
      result += ALLOT[i] * STEPS - state.wrongAnswers[i];
    }
    result +=
      ALLOT[state.currentLevel - 1] * (state.currentStep - 1) -
        state.wrongAnswers[state.currentLevel - 1] || 0;
    return result;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
