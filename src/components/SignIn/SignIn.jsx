import React from 'react';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
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

          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;