/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';

export const DesignSystem = () => {
  const [color, setColor] = React.useState('blue');

  const toggleColor = () =>
    color === 'blue' ? setColor('green') : setColor('blue');

  return (
    <div css={{ color }}>
      <h1>Welcome to design-system!</h1>
      <button onClick={() => toggleColor()}>Toggle</button>
    </div>
  );
};

export default DesignSystem;
