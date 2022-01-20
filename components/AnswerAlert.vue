<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    bottom
    vertical
    :color="isCorrect ? 'success' : 'error'"
    content-class="text-center mr-0"
  >
    <slot name="default">
      <template v-if="isCorrect">정답😆</template>
      <template v-else>
        아까워요😢
        <template v-if="wrongAnswers">
          <br />
          (남은 기회 {{ 3 - wrongAnswers }}번)
        </template>
      </template>
    </slot>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
    isCorrect: { type: Boolean, required: true },
    wrongAnswers: { type: Number, default: 0 },
  },
  data() {
    return {
      snackbar: this.value,
      timeout: 2000,
    };
  },
  watch: {
    value(val) {
      this.timeout = val ? 2000 : 0;
      this.snackbar = val;
    },
    snackbar(val) {
      this.snackbar = val;
      this.$emit('input', val);
    },
  },
};
</script>
