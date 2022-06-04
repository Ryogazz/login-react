import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
