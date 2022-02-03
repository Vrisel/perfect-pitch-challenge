<template>
  <main class="d-flex flex-column justify-center">
    <template v-if="!finished">
      <ChallengeStatus
        mode="normal"
        :current-level="currentLevel"
        :max-level="maxLevel"
        v-bind="levels[currentLevel - 1]"
      />
      <p class="mb-4 text-center">
        현재 점수: {{ `${currentScore} / ${maxScore}` }}점
        <br />
        틀린 개수: {{ wrongSum }}개
      </p>

      <ChallengeBeforeLevel
        v-if="beforeLevel"
        :is-first-level="currentLevel === 1"
        :level-steps="levelSteps"
        btn-color="red accent-3 white--text"
        :btn-function="
          () => {
            beforeLevel = false;
          }
        "
      />
      <div v-else>
        <p class="float-left mb-0">
          현재 문제: {{ `${currentStep} / ${levelSteps}` }}
          <br />
          피치(Pitch): {{ pitch }}㎐ A
        </p>
        <ChallengeGame
          v-bind="levels[currentLevel - 1]"
          :pitch="pitch"
          mode="hard"
          @answered="gotAnswer($event)"
          @stopped="showResult"
        />
      </div>
    </template>
    <ChallengeResult
      v-else
      mode="hard"
      :pitch="pitch"
      :score="currentScore"
      :wrong-sum="wrongSum"
    />

    <AnswerAlert v-model="alertActive" :is-correct="isCorrect" />
  </main>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'ChallengePage',
  asyncData({ query }) {
    return {
      pitch: parseInt(query.pitch) || 440,
    };
  },
  data() {
    return {
      currentLevel: 1,
      currentStep: 1,
      wrongAnswers: [],
      beforeLevel: true,
      finished: false,
      alertActive: false,
      isCorrect: false,
      levelSteps: process.env.NODE_ENV === 'production' ? 10 : 3,
      levels: [
        {
          allot: 2,
          minNote: 'C4',
          maxNote: 'B4',
          includeAccidentals: false,
        },
        {
          allot: 3,
          minNote: 'C4',
          maxNote: 'B4',
          includeAccidentals: true,
        },
        {
          allot: 4,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: false,
        },
        {
          allot: 7,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: true,
        },
        {
          allot: 6,
          minNote: 'C3',
          maxNote: 'B5',
          includeAccidentals: false,
        },
        {
          allot: 10,
          minNote: 'C3',
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
      this.alertActive = false;
      setTimeout(() => {
        if (isCorrect) {
          this.isCorrect = true;
          this.alertActive = true;
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
          this.isCorrect = false;
          this.alertActive = true;
          Vue.set(
            this.wrongAnswers,
            this.currentLevel - 1,
            this.wrongAnswers[this.currentLevel - 1] + 1
          );
        }
      }, 1);
    },
    showLevelDivider() {
      this.beforeLevel = true;
    },
    showResult() {
      this.finished = true;
    },
  },
};
</script>

<style></style>
