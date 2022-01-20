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

      <template v-if="betweenLevel">
        <p class="text-center">
          <strong>레벨 당 {{ levelSteps }}문제가 출제됩니다.</strong>
        </p>
        <v-btn x-large @click="betweenLevel = false">시작!</v-btn>
      </template>
      <div v-else>
        <p class="float-left mb-0">
          Step: {{ `${currentStep} / ${levelSteps}` }}
          <br />
          Pitch: {{ pitch }}㎐ A
        </p>
        <ChallengeGame
          v-bind="levels[currentLevel - 1]"
          :pitch="pitch"
          @answered="gotAnswer($event)"
        />
      </div>
    </template>
    <ChallengeResult
      v-else
      :pitch="pitch"
      :score="currentScore"
      :wrong-sum="wrongSum"
    />

    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      bottom
      :color="isCorrect ? 'success' : 'error'"
      content-class="text-center"
    >
      {{ isCorrect ? '정답😆' : '아까워요😢' }}
    </v-snackbar>
  </main>
</template>

<script>
import Vue from 'vue';
import ChallengeGame from '~/components/ChallengeGame.vue';
import ChallengeResult from '~/components/ChallengeResult.vue';
export default {
  name: 'ChallengePage',
  components: { ChallengeGame, ChallengeResult },
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
      betweenLevel: true,
      finished: false,
      snackbar: false,
      isCorrect: false,
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
          maxNote: 'B4',
          includeAccidentals: true,
        },
        {
          allot: 3,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: false,
        },
        {
          allot: 4,
          minNote: 'C4',
          maxNote: 'B5',
          includeAccidentals: true,
        },
        {
          allot: 5,
          minNote: 'C3',
          maxNote: 'B5',
          includeAccidentals: false,
        },
        {
          allot: 6,
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
      if (isCorrect) {
        this.snackbar = false;
        this.isCorrect = true;
        this.snackbar = true;
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
        this.snackbar = false;
        this.isCorrect = false;
        this.snackbar = true;
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
