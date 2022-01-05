<template>
  <v-container>
    <div>
      <h1>최종결과</h1>
      <p>
        점수: {{ `${score} / ${maxScore}` }}점
        <br />
        틀린 개수: 총 {{ wrongSum }}개
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
  props: {
    pitch: { type: Number, required: true },
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    wrongSum: { type: Number, required: true },
  },
  computed: {
    shareUrl() {
      return process.env.baseUrl;
    },
    shareTwitter() {
      const shareText =
        `[🎹절대음감 챌린지] ${this.pitch}㎐ 피치에서 ${this.wrongSum}번 틀리고 ${this.score}점 획득!\n` +
        '도전해보기⏩';
      return (
        `https://twitter.com/intent/tweet` +
        `?text=${encodeURIComponent(shareText)}` +
        `&url=${this.shareUrl}`
      );
    },
  },
};
</script>

<style></style>
