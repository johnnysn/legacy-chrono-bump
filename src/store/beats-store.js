import { initStore } from "../hooks/use-store";

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

const actions = {
  SET_TEMPO: (state, tempo) => {
    if (tempo < 40 || tempo > 240) return {};

    return { tempo: tempo };
  },

  SET_LEVEL: (state, {id, level}) => {
    if (level !== 1 && level !== 2 && level !== 3) return {};
  
    const newitems = [...state.items];
    const itemIndex = newitems.findIndex((i) => i.id === id);
    const item = newitems[itemIndex];
    if (item) {
      newitems[itemIndex] = { ...item, level: level };
      return { items: newitems };
    }
  
    return {};
  },

  SET_COUNT: (state, count) => {
    if (count < 1 || count > 7) return {};
  
    let newitems = [...state.items];
    if (count > state.items.length) {
      for (let i = state.items.length; i < count; i++) {
        newitems.push({ id: i + 1, level: 2 });
      }
    } else if (count < state.items.length) {
      newitems = newitems.slice(0, count);
    }
  
    return { items: newitems };
  },

  SET_BEAT: (state, beat) => {
    if (beat < 0 || beat > state.items.length) return state;
  
    return { beat: beat };
  }
};

const configureBeatsStore = () => {
  initStore(actions, defaultBeatsState);
};

export default configureBeatsStore;