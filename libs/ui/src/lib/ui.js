/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';

import { DesignSystem } from '@gsong/design-system';

export const Ui = () => {
  const { color, next } = useMachine();

  return (
    <div css={{ color }}>
      <h1>Welcome to ui!</h1>
      <button onClick={next}>Toggle</button>

      <div
        css={{
          border: '1px solid lightgray',
          marginTop: '2rem',
          padding: '1rem'
        }}
      >
        <DesignSystem />
      </div>
    </div>
  );
};

const useMachine = () => {
  const machine = {
    initial: 'green',
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  };

  const [color, setColor] = React.useState(machine.initial);

  const next = () => setColor(machine[color]);

  return { color, next };
};

export default Ui;
