<template>
  <div>
    <p>
      Level: {{ level }}
      <br />
      Step: {{ step }}
      <br />
      Pitch: {{ pitch }}Hz
    </p>
    <PlayButton :frequency="frequency" />

    <div>
      <v-btn
        v-for="note of noteCandidates"
        :key="note"
        @click="checkAnswer(note)"
      >
        {{ note }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import PlayButton from '~/components/PlayButton.vue';
export default {
  name: 'ChallengePage',
  components: { PlayButton },
  props: {
    pitch: { type: Number, default: 440 },
  },
  data() {
    return {
      level: 1,
      step: 1,
      answer: '',
    };
  },
  computed: {
    frequency() {
      console.log(this.answer);
      const octave =
        parseInt(this.answer.slice(this.answer.length - 2)) ||
        parseInt(this.answer.slice(this.answer.length - 1));
      if (octave < 1 || octave > 9) {
        throw new Error('범위 초과');
      }

      let noteNumber = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }[
        this.answer.charAt(0).toUpperCase()
      ];
      if (noteNumber === undefined) {
        throw new Error('입력 오류');
      }
      noteNumber +=
        this.answer.charAt(1) === '#'
          ? 1
          : this.answer.charAt(1) === 'b'
          ? -1
          : 0;

      return this.pitch * Math.pow(2, noteNumber / 12) * (octave - 3);
    },
    noteCandidates() {
      return this.level > 3
        ? ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        : ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    },
  },
  watch: {
    step() {
      switch (this.level) {
        case 1:
          this.answer = this.randomNote(4, 4, false);
          break;
        case 2:
          this.answer = this.randomNote(4, 5, false);
          break;
        case 3:
          this.answer = this.randomNote(4, 5, true);
          break;
        default:
          alert('끝!');
      }
    },
  },
  beforeMount() {
    this.answer = this.randomNote(4, 4, false);
  },
  methods: {
    nextAnswer() {
      switch (this.level) {
        case 1:
          this.answer = this.randomNote(4, 4, false);
          break;
        case 2:
          this.answer = this.randomNote(4, 5, false);
          break;
        case 3:
          this.answer = this.randomNote(4, 5, true);
          break;
        default:
          break;
      }
    },
    checkAnswer(note) {
      if (note === this.answer.slice(0, this.answer.length - 1)) {
        alert('정답!');
        if (this.step >= 3) {
          if (this.level >= 3) {
            alert('끝!');
          } else {
            this.step = 1;
            this.level += 1;
          }
        } else {
          this.step += 1;
        }
        // this.nextAnswer();
      } else {
        alert('땡!');
      }
    },
    randomNote(minOctave, maxOctave, includeAccidentals = false) {
      const octave =
        minOctave + Math.round(Math.random() * (maxOctave - minOctave));
      const candidates = !includeAccidentals
        ? ['C', 'D', 'E', 'F', 'G', 'A', 'B']
        : ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const note =
        this.noteCandidates[Math.floor(Math.random() * candidates.length) - 1];
      return note + octave;
    },
  },
};
</script>

<style></style>
