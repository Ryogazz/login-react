import React from 'react';
import InputStyled from './styles/Input.styled';
import Container from './styles/Container.styled';
import PropTypes from 'prop-types';

type Props = {
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ placeholder, onChange, value, type }: Props) {
  return (
    <InputStyled
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
