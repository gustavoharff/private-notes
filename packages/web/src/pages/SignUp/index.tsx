import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <form>
      <h1>Sign up</h1>

      <span>Full name</span>
      <input type="text" placeholder="Enter you name" />

      <span>Email adress</span>
      <input type="text" placeholder="you@example.com" />

      <span>Password</span>
      <input type="password" placeholder="Enter you password" />

      <button type="submit">Log In</button>

      <span>
        Already have an account?<Link to="/">Log In</Link>
      </span>
    </form>
  </Container>
);

export default SignUp;
