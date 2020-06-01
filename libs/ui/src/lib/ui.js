/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';

import { DesignSystem } from '@gsong/design-system';

export const Ui = () => {
  const [color, setColor] = React.useState('red');

  const toggleColor = () =>
    color === 'red' ? setColor('pink') : setColor('red');

  return (
    <div css={{ color }}>
      <h1>Welcome to ui!</h1>
      <button onClick={() => toggleColor()}>Toggle</button>

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

export default Ui;
