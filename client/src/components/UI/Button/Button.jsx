import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogle, inverted, ...rest }) => (
  <button
    className={ `${inverted && 'inverted'} ${isGoogle && 'google'} btn` }
    { ...rest }
  >
    { children }
  </button>
);

export default Button;