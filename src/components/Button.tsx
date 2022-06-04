import React from 'react';
import ButtonStyled from './styles/Button.styled';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ disabled, onClick }: Props) {

  return (
    <ButtonStyled type="button" disabled={disabled} onClick={onClick}>
      Login
    </ButtonStyled>
  )
}
