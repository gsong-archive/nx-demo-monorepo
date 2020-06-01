/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useMachine } from '@gsong/hooks';

export const DesignSystem = () => {
  const { color, next } = useMachine({
    initial: 'purple',
    purple: 'blue',
    blue: 'orange',
    orange: 'gray',
    gray: 'purple'
  });

  return (
    <div css={{ color }}>
      <h1>Welcome to design-system!</h1>
      <button onClick={next}>Toggle</button>
    </div>
  );
};

export default DesignSystem;
