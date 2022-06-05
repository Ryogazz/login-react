import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: #fb923c50;
  background: linear-gradient(
    90deg,
    #fb923c 35%,
    #fcd34d 100%
  );
  border: none;
  transition: all 0.1s ease-in-out;
  margin: 1.25rem 0 0 0;
  padding: 0.7rem 2.4rem;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${({ disabled }) => (disabled ? 'opacity: 0.5;' : (
    `
    opacity: 1;
    &:hover {
      transform: scale(1.025);
    }
  
    &:active {
      transform: scale(1);
    }
    `))}


`;

export default ButtonStyled;
