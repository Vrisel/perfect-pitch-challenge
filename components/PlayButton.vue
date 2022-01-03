<template>
  <v-btn type="button" :disabled="disabled" @click="generateSound">
    다시 듣기
  </v-btn>
</template>

<script>
import * as Tone from 'tone';
export default {
  props: {
    frequency: { type: Number, required: true },
  },
  data() {
    return {
      disabled: false,
      synth: undefined,
    };
  },
  beforeMount() {
    this.synth = new Tone.Synth().toDestination();
  },
  destroyed() {
    this.synth.dispose();
  },
  methods: {
    generateSound() {
      this.disabled = true;

      this.synth.triggerAttackRelease(this.frequency, 2);

      setTimeout(() => {
        this.disabled = false;
      }, 3000);
    },
  },
};
</script>

<style></style>
