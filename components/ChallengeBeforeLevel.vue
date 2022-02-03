<template>
  <div class="text-center">
    <template v-if="isFirstLevel">
      <slot name="default">
        <p class="mb-2">
          레벨 당 <strong>{{ levelSteps }}문제</strong>가 출제됩니다.
        </p>
      </slot>
      <p>
        ※만약 시작해도 아무 소리도 나지 않는다면 <strong>새로고침</strong>을
        해주세요.
        <br />
        단, 진행 상황은 초기화됩니다.
      </p>
    </template>
    <slot v-else name="levelup">
      <p>
        <strong>레벨 업!</strong>
        <br />
        위쪽에서 바뀐 조건을 확인해주세요.
      </p>
    </slot>
    <v-btn x-large block :color="btnColor" @click="btnFunction"> 시작! </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    isFirstLevel: {
      type: Boolean,
      default: true,
    },
    levelSteps: {
      type: Number,
      default: process.env.NODE_ENV === 'production' ? 10 : 3,
    },
    btnColor: {
      type: String,
      default: '',
    },
    btnFunction: {
      type: Function,
      default: () => this.$emit('click'),
    },
  },
};
</script>
