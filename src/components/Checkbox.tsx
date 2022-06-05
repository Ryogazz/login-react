import React from 'react';
import { Wrapper, Tick } from './styles/Checkbox.styled';

interface Props {
  isActive: boolean;
  setIsActive: any;
}

// componente Checkbox com styled-components

export default function Checkbox({ isActive, setIsActive }: Props) {
  return (
    <Wrapper type="button" isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <Tick isActive={isActive} />
    </Wrapper>
  );
}
