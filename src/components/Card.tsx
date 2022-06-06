import React, { useState, useEffect, useContext } from 'react';
import { StoresContext } from '../Context/StoresProvider';
import Checkbox from './Checkbox';
import {
  Wrapper,
  Title,
  Label,
  Container,
} from './styles/Card.styled';

type Props = {
  id: number;
  name: string;
  active: boolean;
};

// componente Card com styled-components e context api para o estado da aplicação (stores)

export default function Card({ name, active, id }: Props) {
  // context api para o estado da aplicação (stores)
  const {
    storesSelected, setStoresSelected, setToggleBg, setDetailedStoreId,
  } = useContext(StoresContext);
  // estado do checkbox para ativar e desativar a loja
  const [isActive, setIsActive] = useState(false);
  // setando como selecionada a loja quando é clicando no checkbox
  useEffect(() => {
    if (isActive) {
      setStoresSelected([...storesSelected, id]);
    } else {
      setStoresSelected(storesSelected.filter((store) => store !== id));
    }
  }, [isActive]);

  return (
    <Wrapper>
      <Title
        type="button"
        onClick={() => {
          setDetailedStoreId(id);
          setToggleBg(true);
        }}
      >
        {name}

      </Title>
      <Checkbox isActive={isActive} setIsActive={setIsActive} />
      <Container>
        <Label active={active}>{active ? 'Ativo' : 'Inativo'}</Label>
      </Container>
    </Wrapper>
  );
}
