import React from 'react';

import { Container } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <form>
      <h1>Log in</h1>

      <span>Email adress</span>
      <input type="text" placeholder="you@example.com" />

      <span>Password</span>
      <input type="password" placeholder="Enter you password" />

      <button type="submit">Log In</button>

      <span>
        Dont have an account?<a href="/signup">Sign Up</a>
      </span>
    </form>
  </Container>
);

export default SignIn;
