import React from 'react';

// import Header from '../components/Header/Header.jsx';
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavigationBar currentUser={ this.state.currentUser } />
        { this.props.children }
      </div>
    )
  }
}

export default Layout;