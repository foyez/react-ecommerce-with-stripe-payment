import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrapperComponent => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  ) : (
      <WrapperComponent { ...rest } />
    );
};

export default WithSpinner;