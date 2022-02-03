<template>
  <div>
    <PlayButton
      :play-on-render="true"
      :frequency="frequency"
      :step="step"
      button-text="다시 듣기"
      class="float-right my-2"
    />
    <div class="clearfix mb-4" />
    <PianoButtons
      v-for="octave of octaves"
      :key="octave"
      :octave="octave"
      :include-accidentals="includeAccidentals"
      :disabled="disabled"
      class="my-3"
      :class="`keyboard-${octaves.length}`"
      @click="checkAnswer($event)"
    />
    <v-btn color="secondary" class="float-right" @click="stopGame">
      그만하기
    </v-btn>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // v-bind에 묶여서 "allot"이 넘어오지 않도록
  props: {
    pitch: { type: Number, default: 440 },
    mode: { type: String, default: 'normal' },
    minNote: { type: String, required: true },
    maxNote: { type: String, required: true },
    includeAccidentals: { type: Boolean, required: true },
  },
  data() {
    return {
      step: 1,
      answer: this.randomNote(
        this.minNote,
        this.maxNote,
        this.includeAccidentals
      ),
      disabled: [],
    };
  },
  computed: {
    frequency() {
      return this.pitch * Math.pow(2, this.noteToInt(this.answer) / 12);
    },
    octaves() {
      if (this.mode !== 'hard') {
        return [''];
      } else {
        /* 
          정규식 의미
          ^[A-G] : A~G로 시작함
          [b#]? : b 또는 #이 한 글자 있을 수도 있음
          (~) : 안의 항목을 포획함
            [-]? : - 기호가 한 글자 있을 수도 있음
            \d+$ : 한 자리 이상의 숫자로 끝남
        */
        const minOctave =
          parseInt(this.minNote.match(/^[A-G][b#]?([-]?\d+$)/)[1]) || 4;
        const maxOctave =
          parseInt(this.maxNote.match(/^[A-G][b#]?([-]?\d+$)/)[1]) || 4;
        if (minOctave > maxOctave) throw new Error('옥타브 범위 오류');

        const result = [];
        for (let i = minOctave; i <= maxOctave; i++) {
          result.push(i);
        }
        return result;
      }
    },
  },
  methods: {
    checkAnswer(note) {
      if (note === this.answer) {
        this.$emit('answered', true);
        this.nextAnswer();
        this.step += 1;
        this.disabled = [note];
      } else if (note === this.answer.slice(0, -1)) {
        this.$emit('answered', true);
        this.nextAnswer();
        this.step += 1;
        this.disabled = [];
      } else {
        this.$set(this.disabled, this.disabled.length, note);
        this.$emit('answered', false);
      }
    },
    nextAnswer() {
      let randomAnswer;
      while (true) {
        randomAnswer = this.randomNote(
          this.minNote,
          this.maxNote,
          this.includeAccidentals
        );
        if (this.answer !== randomAnswer) break;
      }
      this.answer = randomAnswer;
    },
    randomNote(minNote, maxNote, includeAccidentals = false) {
      const minCode = this.noteToInt(minNote);
      const maxCode = this.noteToInt(maxNote);
      let randomCode =
        minCode + Math.round(Math.random() * (maxCode - minCode));
      let note = this.intToNote(randomCode);
      if (!includeAccidentals && note.includes('#')) {
        if (minCode === maxCode) {
          throw new Error('범위 오류');
        }
        randomCode += randomCode < maxCode ? 1 : -1;
        note = this.intToNote(randomCode);
      }
      return note;
    },
    noteToInt(expression) {
      // A4 === 0
      try {
        const [note, octave] = expression
          // A-G로 시작, b 또는 #이 뒤따라올 수 있음,
          // - 부호가 붙을 수 있음, 1개 이상의 숫자로 끝남
          .match(/(^[A-G][b#]?)([-]?\d+)$/)
          .slice(1, 3);
        return (
          { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }[note.charAt(0)] +
          (note.charAt(1) === '#' ? 1 : note.charAt(1) === 'b' ? -1 : 0) +
          (octave - 4) * 12
        );
      } catch {
        throw new Error('노트 입력 오류');
      }
    },
    intToNote(intCode) {
      // A4 === 0
      const rem = ((intCode % 12) + 12) % 12;
      // ↓ A,A#,B(0,1,2)는 옥타브가 다름
      const octave = Math.floor(intCode / 12) + (rem < 3 ? 4 : 5);
      const note = [
        'A',
        'A#',
        'B',
        'C',
        'C#',
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
      ][rem];
      return note + octave;
    },
    stopGame() {
      if (confirm('챌린지를 중단하고 결과를 확인하시겠습니까?')) {
        this.$emit('stopped');
      }
    },
  },
};
</script>

<style scoped>
.keyboard-1,
.keyboard-2,
.keyboard-3 {
  font-size: 12px;
}
.keyboard-1 {
  --height: 12em;
}
.keyboard-2 {
  --height: calc(145px / 1.5);
}
.keyboard-3 {
  --height: calc(145px / 2);
}
</style>
