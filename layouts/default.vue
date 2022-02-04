<template>
  <v-app>
    <v-container
      class="flex-auto px-8 py-16 d-flex flex-column justify-space-between"
    >
      <Nuxt class="align-self-center" />
    </v-container>

    <footer class="py-8 border-top">
      <a
        href="https://vrisel.vercel.app/"
        target="_blank"
        rel="noreferrer"
        class="d-flex flex-row justify-center align-center"
      >
        <span>Made by <strong>VRISEL</strong></span>
        <v-img
          eager
          src="/vrisel.png"
          alt="Vrisel Logo"
          max-width="16"
          max-height="16"
        />
      </a>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      title: '',
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'index';
    },
  },
};
</script>

<style lang="scss">
/* global */
a:not(.v-btn) {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

/* util */
.flex-auto {
  flex: auto;
}
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}
.border {
  border: 1px solid #{$border-color-default};
}
.border-top {
  border-top: 1px solid #{$border-color-default};
}
</style>
