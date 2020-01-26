import React from 'react';

import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <Input
            type='email'
            name='email'
            value={ this.state.email }
            handleChange={ this.handleChange }
            label='email'
            required
          />
          <Input
            type='password'
            name='password'
            value={ this.state.password }
            handleChange={ this.handleChange }
            label='password'
            required
          />

          <div className="buttons">
            <Button>Sign in</Button>
            <Button
              type='button'
              onClick={ googleSignInStart }
              isGoogle
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);