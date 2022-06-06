import styled from 'styled-components';

type Props = {
  active: boolean;
};

// css do componente Card do styled-components

export const Wrapper = styled.div`
  background-color: #f5f5f4;
  border-radius: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-width: 90%;
  margin: 2rem;
  padding: 0.8rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  @media (min-width: 20rem) {
    min-width: 16rem;
  }
`;

export const Title = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.8rem 1rem;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Label = styled.div`
  // Css do componente Label do styled-components com operador ternario para exibição
  // do label do card de acordo com a prop active do componente Card do styled-components
  background-color: ${({ active }: Props) => (active ? '#4B6EFF' : '#ff9002')};
  color: white;
  padding: 0.4rem 0.8rem;
  margin: 0.6rem 0;
  border-radius: 5px;
  display: inline-block;
`;

export const CardsContainer = styled.div`
  padding: 4rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
