import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../../utils/wapAPI';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/styles/Container.styled';
import Error from '../../components/styles/Error.styled';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(username && password));
  }, [username, password]);

  const navigate = useNavigate();

  const handleClick = () => {
    login(username, password).then(({ data }) => {
      localStorage.setItem('token', data.token);
      navigate('/home');
    }).catch((err) => {
      setError(err.message);
      alert(err.message);
    });
  };

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
        {
          error && (
            <Error>{error}</Error>
          )
        }
        <Button disabled={isDisabled} onClick={handleClick} />
      </Container>
    </Display>
  );
}

export default Login;
