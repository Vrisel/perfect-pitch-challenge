<template>
  <v-btn type="button" :disabled="disabled" @click="generateSound">
    <slot name="default">
      {{ buttonText }}
      <v-icon>mdi-volume-high</v-icon>
    </slot>
  </v-btn>
</template>

<script>
import * as Tone from 'tone';
export default {
  props: {
    frequency: { type: Number, required: true },
    buttonText: { type: String, default: '다시 듣기' },
    playOnRender: { type: Boolean, default: false },
    step: { type: Number, default: 0 },
  },
  data() {
    return {
      disabled: false, // this.playOnRender,
      synth: undefined,
    };
  },
  watch: {
    step() {
      if (this.playOnRender) {
        this.generateSound();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.synth = new Tone.Synth({ volume: -3 }).toDestination();
      if (this.playOnRender) {
        this.generateSound();
      }
    });
  },
  destroyed() {
    this.synth.dispose();
  },
  methods: {
    generateSound() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 3000);
      this.synth.triggerAttackRelease(this.frequency, 2);
    },
  },
};
</script>
