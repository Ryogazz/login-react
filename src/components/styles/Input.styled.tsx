import styled from 'styled-components';

const Input = styled.input`
  width: 18rem;
  text-align: center;
  border: 2px solid #3490ff;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1rem;
  padding: 0.4rem;
  &:focus {
    outline: 3px solid rgba(179, 179, 179, 0.3);
  }
`;

export default Input;