import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

const PlayButton = dynamic(() => import("../components/playButton.js"), {
  ssr: false,
});

export default function Challenge() {
  const router = useRouter();
  const { pitch } = router.query;

  const [level, setLevel] = useState(1);
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState("A4");

  function nextAnswer() {
    switch (level) {
      case 1:
        setAnswer(randomNote(4, 4, false));
        break;
      case 2:
        setAnswer(randomNote(4, 5, false));
        break;
      case 3:
        setAnswer(randomNote(4, 5, true));
        break;
      default:
        break;
    }
  }

  function checkAnswer(note) {
    if (note === answer.slice(0, answer.length - 1)) {
      alert("정답!");
      if (step >= 3) {
        setStep(1);
        setLevel(level + 1);
      } else {
        setStep(step + 1);
      }
    } else {
      alert("땡!");
    }
  }
  useEffect(() => nextAnswer(), [step]);

  return (
    <Layout>
      <p>
        Level: {level}
        <br />
        Step: {step}
        <br />
        Pitch: {pitch}Hz
      </p>
      <PlayButton frequency={getFrequency(answer, pitch)} />

      <div>
        {(level < 3
          ? ["C", "D", "E", "F", "G", "A", "B"]
          : ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
        ).map((note) => {
          return (
            <button onClick={() => checkAnswer(note)} key={note}>
              {note}
            </button>
          );
        })}
      </div>
    </Layout>
  );
}

function randomNote(minOctave, maxOctave, includeAccidentals = false) {
  const octave =
    minOctave + Math.round(Math.random() * (maxOctave - minOctave));
  const candidates = !includeAccidentals
    ? ["C", "D", "E", "F", "G", "A", "B"]
    : ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const note =
    candidates[Math.floor(Math.random() * (!includeAccidentals ? 7 : 12)) - 1];
  return note + octave;
}

function getFrequency(note, pitch) {
  const octave =
    parseInt(note.slice(note.length - 2)) ||
    parseInt(note.slice(note.length - 1));
  if (octave < 1 || octave > 9) {
    throw new Error("범위 초과");
  }

  let step = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }[
    note[0].toUpperCase()
  ];
  if (step == undefined) {
    throw new Error("입력 오류");
  }
  step += note[1] === "#" ? 1 : note[1] === "b" ? -1 : 0;

  return pitch * Math.pow(2, step / 12) * (octave - 3);
}
