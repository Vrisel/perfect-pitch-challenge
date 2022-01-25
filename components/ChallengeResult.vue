<template>
  <v-container class="d-flex flex-column text-center">
    <h1 class="mb-4">🎊최종결과🎊</h1>
    <p>{{ resultText }}</p>
    <v-btn x-large @click="shareGame">
      결과 공유하기
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
    <v-btn color="secondary" class="mt-12 align-self-end" @click="goHome">
      <v-icon>mdi-home</v-icon>
      처음으로
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    mode: { type: String, default: 'normal' },
    pitch: { type: Number, required: true },
    score: { type: Number, required: true },
    wrongSum: { type: Number, required: true },
  },
  computed: {
    shareUrl() {
      return 'https://vrisel.github.io/perfect-pitch-challenge';
    },
    resultText() {
      let modeText = '';
      switch (this.mode) {
        case 'normal':
          modeText = '🎼일반';
          break;
        case 'survival':
          modeText = '🔥서바이벌';
          break;
        default:
          break;
      }
      return `${modeText} 모드(${this.pitch}㎐ 피치)에서 ${this.score}점 획득!`;
    },
    shareText() {
      return `[🎹절대음감 챌린지] ${this.resultText}\n` + '도전해보기⏩';
    },
  },
  methods: {
    async shareGame() {
      if (
        typeof navigator.share !== 'undefined' &&
        /[Ww]indows?/.test(navigator.userAgent) === false
      ) {
        await navigator.share({
          // title: '🎹절대음감 챌린지',
          text: this.shareText,
          url: this.shareUrl,
        });
      } else {
        navigator.clipboard
          .writeText(`${this.shareText} ${this.shareUrl}`)
          .then(() => alert('공유 메시지가 복사되었습니다!'))
          .catch(() =>
            alert('공유 메시지를 복사하는 과정에서 오류가 발생했습니다.')
          );
      }
    },
    goHome() {
      if (confirm('결과가 초기화됩니다. 첫 화면으로 돌아가시겠습니까?')) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>
