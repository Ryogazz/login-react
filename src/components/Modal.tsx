import React, {
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react';
// import Modal from 'react-modal';
import { StoresContext } from '../Context/StoresProvider';
import {
  Background,
  Container,
  TextContainer,
  Title,
  Text,
  Status,
} from './styles/Modal.styled';
import { getDetailedStore } from '../utils/wapAPI';

type DetailedStore = {
  name: string;
  address: string;
  active: boolean;
};

// componente Modal com styled-components
export default function Modal() {
  const [store, setStore] = useState<DetailedStore>({
    name: '',
    address: '',
    active: false,
  });
  const {
    toggleBg,
    setToggleBg,
    setIsLoading,
    token,
    detailedStoreId,
    setDetailedStoreId,
  } = useContext(StoresContext);
  const bgRef = useRef<HTMLButtonElement | null>(null);

  const handleUserAction = () => setToggleBg(false);

  useEffect(() => {
    if (detailedStoreId !== null) {
      setIsLoading(true);
      if (bgRef.current) {
        bgRef.current.focus();
      }
      getDetailedStore(detailedStoreId, token).then(({ data }) => {
        setStore(data);
        setIsLoading(false);
        setDetailedStoreId(null);
      });
    }
  }, [toggleBg]);

  return (
    <Background
      toggleBg={toggleBg}
      onClick={handleUserAction}
      onKeyDown={handleUserAction}
      ref={bgRef}
    >
      <Container onClick={(event) => event.stopPropagation()}>
        <TextContainer>
          <Title>Nome</Title>
          <Text>{store.name}</Text>
        </TextContainer>
        <TextContainer>
          <Title>Status</Title>
          <Status status={store.active}>{store.active ? 'ativo' : 'inativo'}</Status>
        </TextContainer>
        <TextContainer>
          <Title>Endereço</Title>
          <Text>{store.address}</Text>
        </TextContainer>
      </Container>
    </Background>
  );
}
