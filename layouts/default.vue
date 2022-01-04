<template>
  <v-app>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-container class="container">
      <v-main class="main">
        <Nuxt />
      </v-main>
      <nuxt-link v-if="!isHome" to="/" class="backToHome">← 처음으로</nuxt-link>
    </v-container>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <footer class="footer">
      <a href="https://vrisel.github.io/" target="_blank" rel="noreferrer">
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
  data() {
    return {
      /* clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js', */
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
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
* {
  box-sizing: border-box;
}

/* layout */
.container {
  max-width: 36rem;
  padding: 0 2rem;
  margin: 3rem auto;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  /* min-height: 100vh; */
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}
.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.backToHome {
  margin: 3rem 0 0;
}
.logo {
  height: 1em;
  margin-left: 0.5rem;
}

/* util */
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}
.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}
.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}
.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}
.borderCircle {
  border-radius: 9999px;
}
.colorInherit {
  color: inherit;
}
.padding1px {
  padding-top: 1px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.listItem {
  margin: 0 0 1.25rem;
}
.lightText {
  color: #666;
}
</style>
