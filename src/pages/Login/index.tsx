const Login = () => {
  return (
    <form>
      <p>Login</p>

      <label>
        <p>
          <strong>Nome de Usuário:</strong>
        </p>
        <input type="text" name="username" />
      </label>

      <br />

      <label>
        <p>
          <strong>Senha:</strong>
        </p>
        <input type="password" name="password" />
      </label>

      <br />

      <input type="submit" />
    </form>
  )
}

export default Login
