import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getListStores } from '../../utils/wapAPI';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

type Store = {
  id: number;
  name: string;
  active: number;
}

function Home() {
  const [stores, setStores] = useState<Array<Store>>([]);

  // Gerencia token quando a página é renderizada, similar ao componentDidMount()
  useEffect(() => {
    const token = localStorage.getItem('token');
    getListStores(token).then((res) => {
      console.log(res);
      setStores(res.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      {stores.map((store) => (
        <div key={store.id}>
          <h1>{store.name}</h1>
          <p>{store.active}</p>
        </div>
      ))}
      <Footer />
    </Container>
  );
}

export default Home;
