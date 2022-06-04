import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: rgb(255, 144, 2);
  background: linear-gradient(
    90deg,
    rgba(255, 114, 2, 1) 35%,
    rgba(255, 188, 17, 1) 100%
  );
  width: 12rem;
  border: none;
  transition: all 0.1s ease-in-out;
  margin: 0.5rem 0;
  padding: 5px;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: white;
  opacity: ${(({disabled}) => disabled ? '0.5' : '1')};

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export default ButtonStyled;
