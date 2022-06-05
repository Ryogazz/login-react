import React from 'react';
import { Wrapper, Input as InputStyled } from './styles/Input.styled';
import Error from './styles/Error.styled';

interface Props {
  placeholder: string;
  errors: any;
  registerType: string;
  type: string;
  register: any;
}

// componente Input com styled-components

export default function Input({
  placeholder,
  errors,
  registerType,
  type,
  register,
}: Props) {
  return (
    <Wrapper>
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register(registerType)}
      />
      {errors[registerType] && <Error>{errors[registerType].message}</Error>}
    </Wrapper>
  );
}
