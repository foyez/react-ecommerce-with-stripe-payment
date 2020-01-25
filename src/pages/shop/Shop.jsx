import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import WithSpinner from '../../components/UI/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={ `${match.path}` } render={ props => (
          <CollectionsOverviewWithSpinner isLoading={ isCollectionsFetching } { ...props } />
        ) } />
        <Route path={ `${match.path}/:collectionId` } render={ props => (
          <CollectionPageWithSpinner isLoading={ !isCollectionsLoaded } { ...props } />
        ) } />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);