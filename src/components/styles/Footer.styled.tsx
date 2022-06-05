import styled from 'styled-components';

// Styled component para ser o bloco que abraça todos os componentes do rodapé
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background: #27272a;
  color: white;
  font-size: 0.85rem;
  margin-top: 3rem;
`;

// Linha de estilo alaranjada acima das infos do footer
export const Line = styled.div`
  width: 85%;
  height: 2px;
  background: #f59e0b;
`;

export const Text = styled.label`
  margin: 1rem 0 0.5rem;
`;

export const Author = styled.label`
  margin: 0.5rem 0 0;

  .name {
    text-decoration: none;
    font-weight: 600;
    margin-left: 1px;
    color: #d97706;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  .name:hover {
    color: #d9770699;
    cursor: pointer;
  }
`;
