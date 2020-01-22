import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import Collections from '../Collections/Collections';
import './CollectionsOverview.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    { collections.map(({ id, ...rest }) => (
      <Collections key={ id } { ...rest } />
    )) }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);