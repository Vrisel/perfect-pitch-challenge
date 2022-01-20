<template>
  <main class="d-flex flex-column justify-center">
    <template v-if="!finished">
      <ChallengeStatus v-bind="level" mode="survival" />
      <p class="mb-4 text-center">
        맞힌 개수: {{ currentScore }}개
        <br />
        틀린 개수: {{ wrongAnswers }}개
      </p>

      <template v-if="beforeLevel">
        <p class="text-center">
          <strong>세 번 틀릴 때까지 문제가 계속해서 나옵니다.</strong>
        </p>
        <v-btn x-large @click="beforeLevel = false">시작!</v-btn>
      </template>
      <div v-else>
        <p class="float-left mb-0">Pitch: {{ pitch }}㎐ A</p>
        <ChallengeGame
          v-bind="level"
          :pitch="pitch"
          @answered="gotAnswer($event)"
        />
      </div>
    </template>
    <ChallengeResult
      v-else
      mode="survival"
      :pitch="pitch"
      :score="currentScore"
      :wrong-sum="wrongAnswers"
    />

    <AnswerAlert
      v-model="alertActive"
      :wrong-answers="wrongAnswers"
      :is-correct="isCorrect"
    />
  </main>
</template>

<script>
import ChallengeStatus from '~/components/ChallengeStatus.vue';
import ChallengeGame from '~/components/ChallengeGame.vue';
import ChallengeResult from '~/components/ChallengeResult.vue';
import AnswerAlert from '~/components/AnswerAlert.vue';
export default {
  name: 'ChallengeSurvival',
  components: { ChallengeStatus, ChallengeGame, ChallengeResult, AnswerAlert },
  asyncData({ query }) {
    return {
      pitch: parseInt(query.pitch) || 440,
    };
  },
  data() {
    return {
      currentScore: 0,
      wrongAnswers: 0,
      beforeLevel: true,
      finished: false,
      alertActive: false,
      isCorrect: false,
      level: {
        allot: 1,
        minNote: 'C3',
        maxNote: 'B5',
        includeAccidentals: true,
      },
    };
  },
  head() {
    return {
      title: `현재 점수: ${this.currentScore}점`,
    };
  },
  methods: {
    gotAnswer(isCorrect) {
      this.alertActive = false;
      setTimeout(() => {
        if (isCorrect) {
          this.isCorrect = true;
          this.alertActive = true;
          this.currentScore += 1;
        } else {
          this.isCorrect = false;
          this.alertActive = true;
          this.wrongAnswers += 1;
          if (this.wrongAnswers >= 3) this.showResult();
        }
      }, 1);
    },
    showResult() {
      this.finished = true;
    },
  },
};
</script>

<style></style>
