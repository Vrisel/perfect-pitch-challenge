<template>
  <div>
    <v-btn
      v-for="note of noteCandidates"
      :key="note"
      class="key"
      :class="colorClasses(note)"
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
  methods: {
    colorClasses(note) {
      const isBlack = note.includes('#');
      const classes = [isBlack ? 'black-key' : 'white-key'];
      const octave = /[-]?\d+$/.exec(note);
      if (!octave) return classes;
      
      if (octave[0] < 4) {
        classes.push('blue--text');
        if (isBlack) {
          classes.push('text--lighten-2')
        }
      } else if (octave[0] > 4) {
        classes.push('red--text');
        if (isBlack) {
          classes.push('text--lighten-2')
        }
      }
      return classes;
    }
  },
};
</script>

<style lang="scss" scoped>
.key {
  text-transform: none;
  min-width: 0 !important;
  align-items: flex-end;
  font-size: inherit;
  &.white-key {
    width: 3.9167em;
    height: calc(var(--height) * 1);
    color: black;
    background-color: white;
  }
  &.black-key {
    width: 2em;
    height: calc(var(--height) * 0.655172);
    color: white;
    background-color: black;
    position: absolute;
    z-index: 1;
    transform: translateX(-50%);
  }
}
.black-key.v-btn--disabled:disabled {
  /* color: rgba(255, 255, 255, 0.7) !important; */
  background-color: rgba(160, 160, 160, 1) !important;
}
.black-key:hover {
  opacity: 1;
  background-color: #555 !important;
}
</style>
