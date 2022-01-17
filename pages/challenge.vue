<template>
  <main class="d-flex flex-column justify-center">
    <template v-if="!finished">
      <div class="d-flex justify-center align-center mb-4">
        <h1 class="mr-3 border pa-3">레벨 {{ currentLevel }}</h1>
        <p class="mb-0">
          배점: {{ levels[currentLevel - 1].allot }}점
          <br />
          음 범위: {{ levels[currentLevel - 1].minNote }} ~
          {{ levels[currentLevel - 1].maxNote }}
          <br />
          검은건반
          {{ levels[currentLevel - 1].includeAccidentals ? '' : '비' }}포함
        </p>
      </div>
      <p class="mb-4 text-center">
        현재 점수: {{ `${currentScore} / ${maxScore}` }}점
        <br />
        틀린 개수: {{ wrongSum }}개
      </p>
      <template v-if="betweenLevel">
        <v-btn x-large @click="betweenLevel = false">시작!</v-btn>
      </template>
      <div v-show="!betweenLevel" class="mb-4">
        <p class="float-left mb-0">
          Step: {{ `${currentStep} / ${levelSteps}` }}
          <br />
          Pitch: {{ pitch }}㎐ A
        </p>
        <ChallengeGame
          v-show="!betweenLevel"
          v-bind="levels[currentLevel - 1]"
          @answered="gotAnswer($event)"
        />
      </div>
    </template>
    <ChallengeResult
      v-else
      :pitch="pitch"
      :score="currentScore"
      :max-score="maxScore"
      :wrong-sum="wrongSum"
    />
  </main>
</template>

<script>
import Vue from 'vue';
import ChallengeGame from '~/components/ChallengeGame.vue';
import ChallengeResult from '~/components/ChallengeResult.vue';
export default {
  name: 'ChallengePage',
  components: { ChallengeGame, ChallengeResult },
  props: {
    pitch: { type: Number, default: 440 },
  },
  data() {
    return {
      currentLevel: 1,
      currentStep: 1,
      wrongAnswers: [],
      betweenLevel: true,
      finished: false,
      levelSteps: process.env.NODE_ENV === 'production' ? 10 : 3,
      levels: [
        {
          allot: 1,
          minNote: 'C4',
          maxNote: 'B4',
          includeAccidentals: false,
        },
        {
          allot: 2,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: false,
        },
        {
          allot: 5,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: true,
        },
      ],
    };
  },
  head() {
    return {
      title: `현재 점수: ${this.currentScore}점`,
    };
  },
  computed: {
    maxLevel() {
      return this.levels.length;
    },
    allots() {
      return this.levels.map((level) => level.allot);
    },
    maxScore() {
      let result = 0;
      for (let i = 0; i < this.currentLevel - 1; i++) {
        result += this.allots[i] * this.levelSteps;
      }
      result +=
        this.allots[this.currentLevel - 1] * (this.currentStep - 1) || 0;
      return result;
    },
    currentScore() {
      return this.maxScore - this.wrongSum;
    },
    wrongSum() {
      return this.wrongAnswers.reduce((acc, curr) => acc + curr, 0);
    },
  },
  created() {
    this.wrongAnswers = Array.from({ length: this.maxLevel }, () => 0);
  },
  methods: {
    gotAnswer(isCorrect) {
      if (isCorrect) {
        if (this.currentStep >= this.levelSteps) {
          this.currentStep = 1;
          this.currentLevel += 1;
          if (this.currentLevel <= this.maxLevel) {
            this.showLevelDivider();
          } else {
            this.showResult();
          }
        } else {
          this.currentStep += 1;
        }
      } else {
        Vue.set(
          this.wrongAnswers,
          this.currentLevel - 1,
          this.wrongAnswers[this.currentLevel - 1] + 1
        );
      }
    },
    showLevelDivider() {
      this.betweenLevel = true;
    },
    showResult() {
      this.finished = true;
    },
  },
};
</script>

<style></style>
