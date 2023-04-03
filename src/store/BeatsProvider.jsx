import { useReducer } from "react";
import BeatsContext from "./beats-context";

const defaultBeatsState = {
  items: [
    { id: 1, level: 3 },
    { id: 2, level: 2 },
    { id: 3, level: 2 },
    { id: 4, level: 2 },
  ],
  beat: 0,
  tempo: 100,
};

const setTempo = (state, tempo) => {
  return { ...state, tempo: tempo };
};

const setLevel = (state, id, level) => {
  if (level !== 1 && level !== 2 && level !== 3) return state;

  const itemIndex = state.items.findIndex((i) => i.id === id);
  const item = state.items[itemIndex];
  if (item) {
    const newitems = [...state.items];
    newitems[itemIndex] = { ...item, level: level };
    return { ...state, items: newitems };
  }

  return state;
};

const setCount = (state, count) => {
  if (count < 1 || count > 7) return state;

  let newitems = [...state.items];
  if (count > state.items.length) {
    for (let i = state.items.length; i < count; i++) {
      newitems.push({ id: i + 1, level: 2 });
    }
  } else if (count < state.items.length) {
    newitems = newitems.slice(0, count);
  }

  return { ...state, items: newitems };
};

const setBeat = (state, beat) => {
  if (beat < 0 || beat > state.items.length) return state;

  return { ...state, beat: beat };
}

const beatsReducer = (state, action) => {
  if (action.type === "setTempo") {
    return setTempo(state, action.tempo);
  } else if (action.type === "setLevel") {
    return setLevel(state, action.id, action.level);
  } else if (action.type === "setCount") {
    return setCount(state, action.count);
  } else if (action.type === "setBeat") {
    return setBeat(state, action.beat);
  }

  return defaultBeatsState;
};

const BeatsProvider = ({ children }) => {
  const [beatsState, dispatchBeatsAction] = useReducer(
    beatsReducer,
    defaultBeatsState
  );

  const beatsContext = {
    ...beatsState,
    setTempo: (tempo) =>
      dispatchBeatsAction({ type: "setTempo", tempo: tempo }),
    setCount: (count) =>
      dispatchBeatsAction({ type: "setCount", count: count }),
    setLevel: (id, level) =>
      dispatchBeatsAction({ type: "setLevel", id: id, level: level }),
    setBeat: (beat) =>
      dispatchBeatsAction({ type: "setBeat", beat: beat }),
  };

  return (
    <BeatsContext.Provider value={beatsContext}>
      {children}
    </BeatsContext.Provider>
  );
};

export default BeatsProvider;
