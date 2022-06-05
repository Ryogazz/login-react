import React, { useContext } from 'react';
// import Modal from 'react-modal';
import { StoresContext } from '../Context/StoresProvider';
import {
  Background, Container, TextContainer, Title, Text, Status,
} from './styles/Modal.styled';

// componente Modal com styled-components

export default function Modal() {
  const { toggleBg, setToggleBg } = useContext(StoresContext);
  return (
    <Background toggleBg={toggleBg} onClick={() => setToggleBg(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <TextContainer>
          <Title>Nome</Title>
          <Text>name</Text>
        </TextContainer>
        <TextContainer>
          <Title>Status</Title>
          <Status status={0}>{0 ? 'ativo' : 'inativo'}</Status>
        </TextContainer>
        <TextContainer>
          <Title>Endereço</Title>
          <Text>address</Text>
        </TextContainer>
      </Container>
    </Background>
  );
}
