import React, { useState, createContext } from 'react';

const RUN = 'running';
const STOP = 'paused';

export const Context = createContext();

export const PlayStateProvider = ({ children }) => {
  const [state, setState] = useState(STOP);
  const start = () => setState(RUN);
  const stop = () => setState(STOP);
  return (
    <Context.Provider value={{ state, start, stop }}>
      {children}
    </Context.Provider>
  );
};
