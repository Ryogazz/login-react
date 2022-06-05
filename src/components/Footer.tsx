import React from 'react';
import {
  Container, Text, Author, Line,
} from './styles/Footer.styled';

// componente Footer com styled-components

export default function Footer() {
  return (
    <Container>
      <Line />
      <Text>© 2022 - Todos direitos reservados.</Text>
      <Author>
        Desenvolvido por
        <a
          className="name"
          href="https://github.com/Ryogazz/login-react"
          target="_blank"
          rel="noreferrer"
        >
          Josué Ribeiro
        </a>
      </Author>
    </Container>
  );
}
