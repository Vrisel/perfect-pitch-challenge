<template>
  <main class="d-flex flex-column align-center">
    <h1 class="title">절대음감 챌린지</h1>
    <v-card class="pa-3">
      <v-form class="text-center" @submit.prevent>
        <div class="d-flex flex-column">
          <label class="mb-2">
            Pitch:
            <input
              v-model="pitch"
              name="pitch"
              type="number"
              step="1"
              min="416"
              max="466"
              class="mx-1 grey lighten-2 text-right"
              style="width: 55px; border: 1px solid #000 !important"
            />
            ㎐ A
          </label>
          <PlayButton
            :play-on-render="false"
            button-text="들어보기"
            :frequency="pitch"
            class="mb-4"
          />
          <v-btn
            type="button"
            color="green white--text"
            class="mb-1"
            @click="startChallenge('normal')"
          >
            일반모드
          </v-btn>
          <v-btn
            type="button"
            color="red accent-3 white--text"
            class="mb-1"
            @click="startChallenge('hard')"
          >
            하드모드
          </v-btn>
          <v-btn
            type="button"
            color="orange white--text"
            class="mb-1"
            @click="startChallenge('survival')"
          >
            서바이벌
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </main>
</template>

<script>
import PlayButton from '~/components/PlayButton.vue';
export default {
  name: 'HomePage',
  components: { PlayButton },
  data() {
    return {
      pitch: 440,
    };
  },
  methods: {
    startChallenge(mode = 'normal') {
      let confirmMsg;
      switch (mode) {
        case 'normal':
          confirmMsg =
            '일반 모드에서는 6단계의 난이도로 각 10개의 문제가 주어집니다.';
          break;
        case 'hard':
          confirmMsg =
            '하드 모드에 출제되는 문제는 일반 모드와 같지만, 옥타브까지 정확하게 맞히셔야 합니다.';
          break;
        case 'survival':
          confirmMsg =
            '서바이벌 모드에서는 처음부터 C3~B5 범위(검은건반 포함)의 음이 주어지며, 총 세 번 틀릴 경우 게임이 종료됩니다.';
          break;
        default:
          return;
      }
      if (confirm(confirmMsg)) {
        this.$router.push({
          path: `/challenge/${mode}`,
          query: { pitch: this.pitch },
        });
      }
    },
  },
};
</script>

<style>
.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 20px;
  line-height: 1.15;
  font-size: 2rem;
  font-weight: bolder;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
</style>
