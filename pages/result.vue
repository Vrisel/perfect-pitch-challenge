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
    <div>
      공유하기
      <a target="_blank" :href="shareTwitter" title="트위터로 공유">
        <v-icon large color="blue">mdi-twitter</v-icon>
      </a>
    </div>
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
        this.$store.state.allot.reduce((acc, curr) => acc + curr, 0) *
        this.$store.state.steps
      );
    },
    wrongAnswers() {
      return this.$store.state.wrongAnswers.reduce(
        (acc, curr) => acc + curr,
        0
      );
    },
    shareUrl() {
      return process.env.baseUrl + this.$route.fullPath;
    },
    shareTwitter() {
      const shareText =
        `[절대음감 챌린지] ${this.wrongAnswers}번 틀리고 ${this.score}점 획득!` +
        '\n';
      return `https://twitter.com/intent/tweet?text=${shareText}&url=${this.shareUrl}`;
    },
  },
};
</script>

<style></style>
