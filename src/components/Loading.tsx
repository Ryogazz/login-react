import React from 'react';
import { RiLoaderFill } from 'react-icons/ri';
import { LoadingBg, LoadingTitle } from './styles/Loading.styled';

// componente Loading com styled-components

export default function Loading() {
  return (
    <LoadingBg>
      <RiLoaderFill size={200} className="spinner" />
      <LoadingTitle>Carregando...</LoadingTitle>
    </LoadingBg>
  );
}
