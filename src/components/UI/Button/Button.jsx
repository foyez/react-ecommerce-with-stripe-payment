import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogle, ...rest }) => (
  <button
    className={ `${isGoogle && 'google'} btn` }
    { ...rest }
  >
    { children }
  </button>
);

export default Button;