import React, { ChangeEventHandler } from 'react';
import PropTypes from 'prop-types';
import InputStyled from './styles/Input.styled';

type Props = {
  placeholder: string;
  value: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  placeholder, onChange, value, type,
}: Props) {
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
