import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { login } from '../utils/wapAPI';
import Button from '../components/Button';
import Input from '../components/Input';
import { Wrapper, Container } from './styles/Login.styled';
import Error from '../components/styles/Error.styled';

type FormData = {
  username: string;
  password: string;
};

const loginSchema = yup.object().shape({
  username: yup.string().required('Usuario é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

// pagina de login com styled-components com yup validator e react-hook-form

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
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Username"
          errors={errors}
          registerType="username"
          type="text"
          register={register}
        />
        <Input
          placeholder="Password"
          errors={errors}
          registerType="password"
          type="password"
          register={register}
        />
        {error && <Error>{error}</Error>}
        <Button />
      </Container>
    </Wrapper>
  );
}

export default Login;
