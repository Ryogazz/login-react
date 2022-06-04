import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/styles/Container.styled';
import styled from 'styled-components';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(username && password));
  }, [username, password]);


  return (
    <Display>
      <Container>
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button disabled={ isDisabled } />
      </Container>
    </Display>

    // <form>
    //   <p>Login</p>

    //   <label>
    //     <p>
    //       <strong>Nome de Usuário:</strong>
    //     </p>
    //     <input type="text" name="username" />
    //   </label>

    //   <br />

    //   <label>
    //     <p>
    //       <strong>Senha:</strong>
    //     </p>
    //     <input type="password" name="password" />
    //   </label>

    //   <br />

    //   <input type="submit" />
    // </form>
  );
};

export default Login;
