import React, { useContext } from 'react';
import { StoresContext } from '../Context/StoresProvider';
import { Container } from './styles/Header.styled';
import { Input } from './styles/Input.styled';

// componente Header com styled-components

export default function Header() {
  const { setSearch } = useContext(StoresContext);
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setSearch(event.currentTarget.value);
    }
  }
  // input de busca com styled-components e context api para o estado da aplicação (stores)
  return (
    <Container>
      <Input placeholder="Search" onKeyPress={(e) => handleKeyPress(e)} />
    </Container>
  );
}
