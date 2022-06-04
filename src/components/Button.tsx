import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStyled from './styles/Button.styled';

export default function Button() {
  const history = useNavigate()
  const handleClick = () => {}

  return (
    <ButtonStyled type="button" disabled onClick={handleClick}>
      botão
    </ButtonStyled>
  )
}
