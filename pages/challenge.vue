<template>
  <div>
    <p>
      Level: {{ level }}
      <br />
      Step: {{ `${step} / ${maxStep}` }}
      <br />
      Pitch: {{ pitch }}Hz
    </p>
    <PlayButton :frequency="frequency" />
    <AnswerButtons
      :include-accidentals="level > 2"
      class="my-3"
      @click="checkAnswer($event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AnswerButtons from '~/components/AnswerButtons.vue';
import PlayButton from '~/components/PlayButton.vue';
export default {
  name: 'ChallengePage',
  components: { PlayButton, AnswerButtons },
  props: {
    pitch: { type: Number, default: 440 },
  },
  data() {
    return {
      answer: this.randomNote('C4', 'B4', false),
    };
  },
  computed: {
    ...mapState({
      level: 'currentLevel',
      step: 'currentStep',
    }),
    maxStep() {
      return this.$store.state.steps;
    },
    frequency() {
      try {
        return this.pitch * Math.pow(2, this.noteToInt(this.answer) / 12);
      } catch {
        throw new Error('입력 오류');
      }
    },
  },
  mounted() {
    this.$store.commit('initialization', this.pitch);
  },
  methods: {
    checkAnswer(note) {
      if (note === this.answer.slice(0, this.answer.length - 1)) {
        alert('정답!');
        this.$store.dispatch('gotCorrectAnswer').then((finished) => {
          if (finished) {
            this.$router.push({ path: 'result', query: {} });
          } else {
            this.nextAnswer();
          }
        });
      } else {
        alert('땡!');
        this.$store.commit('gotWrongAnswer');
      }
    },
    nextAnswer() {
      switch (this.level) {
        case 1:
          this.answer = this.randomNote('C4', 'B4', false);
          break;
        case 2:
          this.answer = this.randomNote('C4', 'B5', false);
          break;
        case 3:
          this.answer = this.randomNote('C4', 'B5', true);
          break;
        default:
          alert('끝!');
      }
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
