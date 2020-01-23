import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooter,
  AddButton,
  BackgroundImage,
  Name,
  Price
} from './CollectionItem.styles'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={ imageUrl } />
      <CollectionFooter>
        <Name>{ name }</Name>
        <Price>{ price }</Price>
      </CollectionFooter>
      <AddButton
        onClick={ () => addItem(item) }
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);