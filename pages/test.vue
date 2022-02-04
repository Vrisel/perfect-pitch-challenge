<template>
  <div>
    {{ agent }}
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
