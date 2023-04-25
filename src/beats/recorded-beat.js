const audios = [
  new Audio("click1.mp3"),
  new Audio("click2.mp3"),
  new Audio("click3.mp3"),
];

const recordedBeat = (level) => {
  const audio = audios[level - 1];

  audio.play();
  audio.currentTime = 0;
};

export default recordedBeat;
