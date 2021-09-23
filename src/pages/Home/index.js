import React from "react";
import {
  Container,
  OngHelperInfo,
  PageWrapper,
  FormWrapper,
  FormTitle,
  EmailInput,
  PasswordInput,
  RegisterWrapper,
  RegisterButton,
  RegisterTitle,
  LoginButton,
  OngHelperImgage,
  OngHelperSlogan,
  RegisterImage,
} from "./styles.js";

function App() {
  return (
    <PageWrapper>
      <Container>
        <OngHelperInfo>
          <OngHelperSlogan>ONG Helper</OngHelperSlogan>
          <FormWrapper>
            <FormTitle>Entre com sua conta</FormTitle>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
            <RegisterWrapper>
              <RegisterButton>
                <RegisterImage></RegisterImage>
                <RegisterTitle>Não tenho cadastro</RegisterTitle>
              </RegisterButton>
            </RegisterWrapper>
            <LoginButton>Entrar</LoginButton>
          </FormWrapper>
        </OngHelperInfo>
        <OngHelperImgage />
      </Container>
    </PageWrapper>
  );
}

export default App;
