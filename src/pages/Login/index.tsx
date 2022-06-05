import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';
import { login } from '../../utils/wapAPI';
import Button from '../../components/Button';
import Container from '../../components/styles/Login.styled';
import Error from '../../components/styles/Error.styled';
import { Wrapper, Input } from '../../components/styles/Input.styled';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

type FormData = {
  username: string;
  password: string;
};

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
    setError('');
    login(username, password)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        navigate('/home');
      })
      .catch((err) => {
        setError(err.message);
        alert(err.message);
      });
  };

  return (
    <Display>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Input placeholder="Username" {...register('username')} />
          {errors.username && <Error>{errors.username.message}</Error>}
        </Wrapper>
        <Wrapper>
          <Input type="password" placeholder="Password" {...register('password')} />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Wrapper>
        {error && <Error>{error}</Error>}
        <Button />
      </Container>
    </Display>
  );
}

export default Login;
