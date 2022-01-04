<template>
  <v-container>
    <div>
      <h1>최종결과</h1>
      <p>
        점수: {{ `${score} / ${maxScore}` }}점
        <br />
        틀린 개수: 총 {{ wrongAnswers }}개
      </p>
    </div>
    <div>공유하기</div>
  </v-container>
</template>

<script>
export default {
  name: 'ResultPage',
  computed: {
    score() {
      return this.$store.getters.currentScore;
    },
    maxScore() {
      return (
        this.$store.state.allot.reduce((acc, curr) => acc + curr) *
        this.$store.state.steps
      );
    },
    wrongAnswers() {
      return this.$store.state.wrongAnswers.reduce((acc, curr) => acc + curr);
    },
  },
};
</script>

<style></style>
