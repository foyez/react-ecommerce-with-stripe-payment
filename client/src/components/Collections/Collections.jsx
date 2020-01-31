import React from 'react';
import { withRouter } from 'react-router-dom'

import './Collections.scss';
import CollectionItem from './CollectionItem/CollectionItem.jsx';

const Collections = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={ () => history.push(`${match.path}/${routeName}`) }>
      { title }
    </h1>
    <div className="preview">
      { items
        .slice(0, 4)
        .map((item) => (
          <CollectionItem key={ item.id } item={ item } />
        )) }
    </div>
  </div>
);

export default withRouter(Collections);