import styled from 'styled-components';

const Input = styled.input`
  width: 18rem;
  height: 1.5rem;
  text-align: center;
  border: 1px solid #3490ff;
  border-radius: 5px;

  &:focus {
    outline: 3px solid rgba(179, 179, 179, 0.3);
  }
`;

export default Input;