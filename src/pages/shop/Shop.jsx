import React from 'react';

import './Shop.scss';
import SHOP_DATA from './shop.data';
import Collections from '../../components/Collections/Collections.jsx';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        { collections.map(({ id, ...rest }) => (
          <Collections key={ id } { ...rest } />
        )) }
      </div>
    );
  }
}

export default ShopPage;