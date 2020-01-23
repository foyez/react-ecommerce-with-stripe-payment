import React from 'react';

import { ButtonContainer } from './Button.styles';

const Button = ({ children, ...rest }) => (
  <ButtonContainer { ...rest }>
    { children }
  </ButtonContainer>
);

export default Button;