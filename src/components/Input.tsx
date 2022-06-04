import React from 'react'
import InputStyled from './styles/Input.styled';
import Container from './styles/Container.styled';

export default function Input() {
  return (
    <Container>
      <InputStyled
        type="text"
        // onChange={({ target }) => setValue(target.value)}
        // value={value}
        // placeholder={placeholder}
      />
    </Container>
  )
}
