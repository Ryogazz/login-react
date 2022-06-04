import Input from '../../components/Input';
import Button from '../../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <Container>
      <Input />
      <Button />
    </Container>
    // <form>
    //   <p>Login</p>

    //   <label>
    //     <p>
    //       <strong>Nome de Usuário:</strong>
    //     </p>
    //     <input type="text" name="username" />
    //   </label>

    //   <br />

    //   <label>
    //     <p>
    //       <strong>Senha:</strong>
    //     </p>
    //     <input type="password" name="password" />
    //   </label>

    //   <br />

    //   <input type="submit" />
    // </form>
  )
}

export default Login
