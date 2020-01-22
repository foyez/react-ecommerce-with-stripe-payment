import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    { sections.map(({ id, ...rest }) => (
      <MenuItem
        key={ id }
        { ...rest }
      />
    )) }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);