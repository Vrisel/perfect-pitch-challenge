<template>
  <div>
    <v-btn
      v-for="note of noteCandidates"
      :key="note"
      class="key"
      :class="note.includes('#') ? 'black-key' : 'white-key'"
      :disabled="note.includes('#') && !includeAccidentals"
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
  },
  data() {
    return {
      noteCandidates: [
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
      ],
    };
  },
};
</script>

<style scoped>
.key {
  text-transform: none !important;
  min-width: 0 !important;
  align-items: flex-end !important;
}
.white-key {
  width: 47px !important;
  height: 145px !important;
  color: black !important;
  background-color: white !important;
}
.black-key {
  width: 24px !important;
  height: 95px !important;
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
