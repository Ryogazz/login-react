// css da pagina login com styled-components

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

export const Container = styled.form`
  border-radius: 10px;
  padding: 4rem 3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
