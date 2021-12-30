import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const PlayButton = ({ frequency }) => {
  const [disabled, setDisabled] = useState(false);

  function generateSound(frequency) {
    setDisabled(true);
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ac.createOscillator();
    osc.type = "sine";
    osc.frequency.value = frequency;

    // 초기 볼륨 0
    const gn = ac.createGain();
    gn.gain.setValueAtTime(0, ac.currentTime);
    osc.connect(gn);
    gn.connect(ac.destination);

    osc.start();
    // fade in
    gn.gain.linearRampToValueAtTime(0.5, ac.currentTime + 0.5);
    gn.gain.setValueAtTime(0.5, ac.currentTime + 2);
    // fade out
    gn.gain.linearRampToValueAtTime(0.0001, ac.currentTime + 2.5);

    setTimeout(() => {
      gn.disconnect(ac.destination);
      osc.disconnect(gn);
      setDisabled(false);
    }, 3000);
  }

  // useEffect(() => generateSound(frequency), []);

  return (
    <>
      <button
        type="button"
        onClick={() => generateSound(frequency)}
        disabled={disabled}
      >
        다시 듣기
      </button>
    </>
  );
};

export default PlayButton;
