<template>
  <main class="d-flex flex-column align-center">
    <h1 class="title">절대음감 챌린지</h1>
    <v-card class="pa-3">
      <v-form
        :action="`./challenge/${mode}`"
        class="text-center"
        @submit="formSubmit"
      >
        <div class="d-flex flex-column">
          <label class="mb-2">
            피치(Pitch):
            <input
              v-model="pitch"
              name="pitch"
              type="number"
              step="1"
              class="mx-1 grey lighten-2 text-right"
              style="width: 55px; border: 1px solid #000 !important"
            />
            ㎐ A4
          </label>
          <PlayButton
            :play-on-render="false"
            button-text="들어보기"
            :frequency="pitch"
            class="mb-4"
          />
          <v-btn
            type="submit"
            color="green white--text"
            class="mb-1"
            @click="mode = 'normal'"
          >
            일반모드
          </v-btn>
          <v-btn
            type="submit"
            color="red accent-3 white--text"
            class="mb-1"
            @click="mode = 'hard'"
          >
            하드모드
          </v-btn>
          <v-btn
            type="submit"
            color="orange white--text"
            class="mb-1"
            @click="mode = 'survival'"
          >
            서바이벌
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      pitch: 440,
      mode: '',
    };
  },
  computed: {
    confirmMsg() {
      switch (this.mode) {
        case 'normal':
          return '일반 모드에서는 6단계의 난이도로 각 10개의 문제가 주어집니다.';
        case 'hard':
          return '하드 모드에 출제되는 문제는 일반 모드와 같지만, 옥타브까지 정확하게 맞히셔야 합니다.';
        case 'survival':
          return '서바이벌 모드에서는 처음부터 C3~B5 범위(검은건반 포함)의 음이 주어지며, 총 세 번 틀릴 경우 게임이 종료됩니다.';
        default:
          return '';
      }
    },
  },
  methods: {
    formSubmit(e) {
      if (confirm(this.confirmMsg)) {
        // Safari를 특정할 방법이 없어서 Apple 기기 전체에 적용...
        if (navigator.userAgent.includes('Mac OS')) {
          return true;
        } else {
          e.preventDefault();
          this.$router.push({
            path: `/challenge/${this.mode}`,
            query: { pitch: this.pitch },
          });
        }
      } else {
        e.preventDefault();
        return false;
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
