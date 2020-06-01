/** @jsx jsx */
import { jsx } from '@emotion/core';

import { DesignSystem } from '@gsong/design-system';
import { useMachine } from '@gsong/hooks';

export const Ui = () => {
  const { color, next } = useMachine({
    initial: 'aqua',
    aqua: 'red',
    red: 'purple',
    purple: 'aqua'
  });

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

export default Ui;
