<template>
  <div class="d-flex justify-center align-center mb-4">
    <h1 class="mr-3 border pa-3">
      <slot name="level">
        <template v-if="mode === 'survival'">서바이벌</template>
        <template v-else>레벨 {{ `${currentLevel}/${maxLevel}` }}</template>
      </slot>
    </h1>
    <div class="mb-0">
      <p v-if="mode !== 'survival'" class="mb-0">배점: {{ allot }}점</p>
      <p class="mb-0">
        음 범위:
        <span :class="{ 'blue--text': minNote === 'C3' }">
          {{ minNote }}
        </span>
        ~
        <span :class="{ 'red--text': maxNote === 'B5' }">
          {{ maxNote }}
        </span>
      </p>
      <p class="mb-0" :class="{ 'red--text': includeAccidentals }">
        검은건반
        {{ includeAccidentals ? '' : '비' }}포함
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: { type: String, default: 'normal' },
    currentLevel: { type: Number, default: 1 },
    maxLevel: { type: Number, default: 1 },
    allot: { type: Number, default: 0 },
    minNote: { type: String, required: true },
    maxNote: { type: String, required: true },
    includeAccidentals: { type: Boolean, default: false },
  },
};
</script>
