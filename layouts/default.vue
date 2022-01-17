<template>
  <v-app>
    <v-container
      class="flex-auto px-8 py-16 d-flex flex-column justify-space-between"
    >
      <Nuxt class="align-self-center" />
      <v-btn v-if="!isHome" to="/" class="mt-6 align-self-end">
        ← 처음으로
      </v-btn>
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

<style>
/* global */
a:not(.v-btn) {
  /* color: inherit; */
  text-decoration: none;
}
a:not(.v-btn):hover {
  text-decoration: underline;
}

/* layout */
.container {
  max-width: 36rem;
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
  border: 1px solid #eaeaea;
}
.border-top {
  border-top: 1px solid #eaeaea;
}
</style>
