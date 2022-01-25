<template>
  <div>
    <v-btn
      v-for="note of noteCandidates"
      :key="note"
      class="key"
      :class="note.includes('#') ? 'black-key' : 'white-key'"
      :disabled="isDisabled[note]"
      @click="$emit('click', note)"
    >
      {{ note }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    includeAccidentals: { type: Boolean, default: false },
    disabled: {
      type: Array,
      default() {
        return [];
      },
    },
    octave: { type: [Number, String], default: '' },
  },
  computed: {
    noteCandidates() {
      return [
        'C',
        'C#',
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
        'A',
        'A#',
        'B',
      ].map((note) => note + this.octave);
    },
    isDisabled() {
      return this.noteCandidates.reduce((acc, curr) => {
        acc[curr] =
          (!this.includeAccidentals && curr.includes('#')) ||
          this.disabled.includes(curr);
        return acc;
      }, {});
    },
  },
};
</script>

<style scoped>
.key {
  text-transform: none !important;
  min-width: 0 !important;
  align-items: flex-end !important;
  font-size: inherit !important;
}
.white-key {
  width: 3.9167em !important;
  height: calc(var(--height) * 1) !important;
  color: black !important;
  background-color: white !important;
}
.black-key {
  width: 2em !important;
  height: calc(var(--height) * 0.655172) !important;
  color: white !important;
  background-color: black !important;
  position: absolute;
  z-index: 50;
  transform: translateX(-50%);
}
.black-key.v-btn--disabled:disabled {
  color: rgba(255, 255, 255, 0.7) !important;
  background-color: rgba(160, 160, 160, 1) !important;
}
.black-key:hover {
  opacity: 1;
  background-color: #555 !important;
}
</style>
