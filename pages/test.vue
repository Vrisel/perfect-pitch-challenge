<template>
  <div class="d-flex flex-column">
    <p>{{ agent }}</p>
    <a href="/challenge/normal" class="v-btn v-btn--block">/</a>
    <a href="./challenge/normal" class="v-btn v-btn--block">./</a>
  </div>
</template>

<script>
export default {
  name: 'TheTest',
  data() {
    return { agent: '' };
  },
  mounted() {
    this.agent = navigator.userAgent;
  },
};
</script>
