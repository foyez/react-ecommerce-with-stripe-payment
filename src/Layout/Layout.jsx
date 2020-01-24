import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectShopCollectionsForOverview } from '../redux/shop/shop.selectors';

// import Header from '../components/Header/Header.jsx';
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from '../firebase/firebase.utils';

class Layout extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectShopCollectionsForOverview,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
