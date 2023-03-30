import { createContext } from "react";

const BeatsContext = createContext({
  items: [],
  tempo: 100,
  beat: 0,
  setTempo: (tempo) => {},
  setLevel: (id, level) => {},
  setCount: (count) => {},
  setBeat: (beat) => {}
});

export default BeatsContext;