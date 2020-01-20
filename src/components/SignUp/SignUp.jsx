import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './SignUp.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sing-up">
        <h2 className="title">I do not have a account.</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <Input
            type='text'
            name='displayName'
            value={ displayName }
            onChange={ this.handleChange }
            label='Display Name'
            required
          />
          <Input
            type='email'
            name='email'
            value={ email }
            onChange={ this.handleChange }
            label='Email'
            required
          />
          <Input
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
            label='Password'
            required
          />
          <Input
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={ this.handleChange }
            label='Confirm Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;