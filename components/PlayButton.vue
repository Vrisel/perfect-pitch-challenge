<template>
  <v-btn type="button" :disabled="disabled" @click="generateSound">
    다시 듣기
  </v-btn>
</template>

<script>
export default {
  props: {
    frequency: { type: Number, required: true },
  },
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    generateSound() {
      this.disabled = true;
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ac.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = this.frequency;

      // 초기 볼륨 0
      const gn = ac.createGain();
      gn.gain.setValueAtTime(0, ac.currentTime);
      osc.connect(gn);
      gn.connect(ac.destination);

      osc.start();
      // fade in
      gn.gain.linearRampToValueAtTime(0.5, ac.currentTime + 0.5);
      gn.gain.setValueAtTime(0.5, ac.currentTime + 2);
      // fade out
      gn.gain.linearRampToValueAtTime(0.0001, ac.currentTime + 2.5);

      setTimeout(() => {
        gn.disconnect(ac.destination);
        osc.disconnect(gn);
        this.disabled = false;
      }, 3000);
    },
  },
};
</script>

<style></style>
