import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CardsContainer } from '../components/styles/Card.styled';
import { StoresContext } from '../Context/StoresProvider';
import ButtonStyled from '../components/styles/Button.styled';
import Container from './styles/Home.styled';
import { changeActiveStores } from '../utils/wapAPI';
import Modal from '../components/Modal';
import Loading from '../components/Loading';

// pagina Home com styled-components e context api para o estado da aplicação (stores)
// operadores ternarios para verificar se o algum checkbox esta selecionado ou não
// e ativar ou desativar os botões

export default function Home() {
  const {
    stores,
    setStores,
    storesSelected,
    isLoading,
    token,
  } = useContext(StoresContext);
  return (
    <Container>
      <Header />
      {isLoading && <Loading />}
      <Modal />
      <CardsContainer>
        {stores.map(({ id, name, active }) => (
          <Card key={id} id={id} name={name} active={active} />
        ))}
      </CardsContainer>
      <ButtonStyled
        disabled={!storesSelected.length}
        onClick={
          () => {
            changeActiveStores(storesSelected, true, token);
            setStores(stores.map((store) => (
              storesSelected.includes(store.id) ? { ...store, active: true } : store)));
          }
        }
      >
        Ativar
      </ButtonStyled>
      <ButtonStyled
        disabled={!storesSelected.length}
        onClick={
        () => {
          changeActiveStores(storesSelected, false, token);
          setStores(stores.map((store) => (
            storesSelected.includes(store.id) ? { ...store, active: false } : store)));
        }
      }
      >
        Desativar
      </ButtonStyled>
      <Footer />
    </Container>
  );
}
