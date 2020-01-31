import React from 'react';

import { connect } from 'react-redux';
import { checkUserSession } from '../redux/user/user.actions';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';

class Layout extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(Layout);
