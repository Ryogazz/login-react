import styled from 'styled-components';

type Props = {
  isActive: boolean;
};

// css do componente checkbox do styled-components com operador ternario para exibição
// do checkbox do card de acordo com a prop active do componente Card do styled-components

export const Wrapper = styled.button`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  background: #fff;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({ isActive }: Props) => (isActive ? '#4b6eff' : '#fb923c')};
`;

export const Tick = styled.div`
  display: ${({ isActive }: Props) => (isActive ? 'block' : 'none')};
  position: absolute;
  top: 45%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -55%) rotate(-45deg);
  border-bottom: 3px solid #4b6eff;
  border-left: 3px solid #4b6eff;
  width: 0.75rem;
  height: 0.5rem;
  z-index: 10;
`;
