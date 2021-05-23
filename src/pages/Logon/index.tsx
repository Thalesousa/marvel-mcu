import { Container, CheckForm, Form, Content, OptionsForm, Logo  } from "./styles";

export default function Logon() {
  return (
    <Container>
      <Content>
        <Logo><p>Marvel</p></Logo>
        <h1>Bem-vindo(a) de volta!</h1>
        <span>Acesse sua conta:</span>

        <Form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <OptionsForm>
            <CheckForm>
              <input type="checkbox" id="scales" name="scales" />
              <label>Salvar Login</label>
            </CheckForm>
            <a href="/">Esqueci a senha</a>
          </OptionsForm>
          
          <a href="/personagens">Entrar</a>

          <span>Ainda não tem o login? <a href="/">Cadastre-se</a></span>
        </Form>
      </Content>

    </Container>
  )
}