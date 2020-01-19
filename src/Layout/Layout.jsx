import React from 'react';

// import Header from '../components/Header/Header.jsx';
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import { auth } from '../firebase/firebase.utils';

// const Layout = ({ children }) => (
//   <div>
//     <NavigationBar />
//     { children }
//   </div>
// );

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
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