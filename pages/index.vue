<template>
  <main class="d-flex flex-column align-center">
    <h1 class="text-h5 font-weight-bold ma-5 text-center">절대음감 챌린지</h1>
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
