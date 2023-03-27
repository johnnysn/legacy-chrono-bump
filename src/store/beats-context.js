import { createContext } from "react";

const BeatsContext = createContext({
  items: [],
  tempo: 100,
  setTempo: (tempo) => {},
  setLevel: (id, level) => {},
  setCount: (count) => {}
});

export default BeatsContext;