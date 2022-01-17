<template>
  <div>
    <PlayButton
      :play-on-render="true"
      button-text="다시 듣기"
      :frequency="frequency"
      class="float-right my-2"
    />
    <div class="clearfix mb-4" />
    <AnswerButtons
      :include-accidentals="includeAccidentals"
      class="my-3"
      @click="checkAnswer($event)"
    />
  </div>
</template>

<script>
import AnswerButtons from './AnswerButtons.vue';
import PlayButton from './PlayButton.vue';
export default {
  components: { PlayButton, AnswerButtons },
  props: {
    pitch: { type: Number, default: 440 },
    minNote: { type: String, required: true },
    maxNote: { type: String, required: true },
    includeAccidentals: { type: Boolean, required: true },
    // eslint-disable-next-line vue/require-default-prop
    allot: Number, // DOM에 남지 않도록 처리
  },
  data() {
    return {
      answer: this.randomNote(
        this.minNote,
        this.maxNote,
        this.includeAccidentals
      ),
    };
  },
  computed: {
    frequency() {
      return this.pitch * Math.pow(2, this.noteToInt(this.answer) / 12);
    },
  },
  methods: {
    checkAnswer(note) {
      if (note === this.answer.slice(0, this.answer.length - 1)) {
        alert('정답!');
        this.$emit('answered', true);
        this.nextAnswer();
      } else {
        alert('땡!');
        this.$emit('answered', false);
      }
    },
    nextAnswer() {
      this.answer = this.randomNote(
        this.minNote,
        this.maxNote,
        this.includeAccidentals
      );
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
  },
};
</script>

<style></style>
