import React from 'react';

import './Collections.scss';
import CollectionItem from './CollectionItem/CollectionItem.jsx';

const Collections = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{ title }</h1>
    <div className="preview">
      { items
        .slice(0, 4)
        .map((item) => (
          <CollectionItem key={ item.id } item={ item } />
        )) }
    </div>
  </div>
);

export default Collections;