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
    playOnRender: { type: Boolean, default: true },
  },
  data() {
    return {
      disabled: false, // this.playOnRender,
      synth: undefined,
    };
  },
  beforeMount() {
    this.synth = new Tone.Synth().toDestination();
  },
  /* // 제대로 작동을 안 함.. 
    mounted() {
    if (this.playOnRender) {
      setTimeout(() => this.generateSound(), 500);
    }
  }, */
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
