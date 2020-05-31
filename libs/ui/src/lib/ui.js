import React from 'react';
import styled from '@emotion/styled';
const StyledUi = styled.div`
  color: pink;
`;
export const Ui = (props) => {
  return (
    <StyledUi>
      <h1>Welcome to ui!</h1>
    </StyledUi>
  );
};
export default Ui;
