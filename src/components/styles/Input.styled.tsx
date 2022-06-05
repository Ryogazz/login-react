import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 15rem;
  text-align: center;
  border: 1px solid #93c5fd;
  border-radius: 0.5rem;
  margin: 0.8rem 0;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 0.6rem 0;
  outline: none;
  color: #71717a;

  &::placeholder {
    color: #71717a85;
  }

  &:focus {
    border-color: #f59e0b;
  }
`;
