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

      <DesignSystem />
    </div>
  );
};

export default Ui;
