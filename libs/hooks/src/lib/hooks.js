import React from 'react';

const defaultMachine = {
  initial: 'green',
  green: 'yellow',
  yellow: 'red',
  red: 'green'
};

export const useMachine = (machine = defaultMachine) => {
  const [color, setColor] = React.useState(machine.initial);

  const next = () => setColor(machine[color]);

  return { color, next };
};

export default useMachine;
