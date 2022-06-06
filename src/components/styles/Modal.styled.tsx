import styled from 'styled-components';

// css do componente modal do styled-components

type Props = {
  toggleBg: boolean;
}
type Props2 = {
  status: boolean;
}

export const Background = styled.button`
  display: ${({ toggleBg }: Props) => (toggleBg ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* display: flex; */
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 30;
  background-color: #3f3f4640;
  cursor: pointer;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  min-width: 18rem;
  min-height: 22rem;
  background-color: #fff;
  border-radius: 0.5rem;
  z-index: 35;
  cursor: default;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  height: 33%;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const Title = styled.span`
  width: 25%;
  font-size: 0.9rem;
  color: #71717a;
  font-weight: 700;
  text-align: left;
  padding-left: 0.5rem;
`;

export const Text = styled.span`
  width: 90%;
  font-size: 0.9rem;
  color: #3f3f46;
  font-weight: 300;
  text-align: left;
  margin: 0.5rem 0 0.5rem 1.5rem;
  position: relative;

  &:before {
    content: '-';
    font-size: 1.5rem;
    color: #71717a;
    position: absolute;
    top: 47%;
    left: -0.9rem;
    transform: translateY(-53%);
  }
`;

export const Status = styled.span`
  width: 90%;
  font-size: 0.9rem;
  color: ${({ status }: Props2) => (status ? '#2563eb' : '#b45309')};
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 0.5rem 0 0.5rem 1.5rem;
  position: relative;

  &:before {
    content: '-';
    font-size: 1.5rem;
    font-weight: 300;
    color: #71717a;
    position: absolute;
    top: 47%;
    left: -0.9rem;
    transform: translateY(-53%);
  }
`;
