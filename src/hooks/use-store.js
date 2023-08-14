import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatchAction = (actionId, payload) => {
    const updatedState = actions[actionId](globalState, payload);
    globalState = { ...globalState, ...updatedState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, []);

  return [globalState, dispatchAction];
};

export default useStore;

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
