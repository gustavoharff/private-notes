import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://api.github.com/user').then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Container>
      <div>
        <h1>Welcome to My Note App</h1>
      </div>

      <div>
        <h3>This application does not save content in the cloud!</h3>
        <Content>
          <Link to="/notes">
            <h2>Go to notes</h2>
          </Link>
        </Content>
      </div>
    </Container>
  );
};
export default Home;
